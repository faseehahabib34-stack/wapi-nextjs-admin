"use server";
// Server actions = functions that run ONLY on the server, but a form can call them.

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { createSession, deleteSession } from "@/lib/session";
import { str } from "@/lib/form";

const MAX_ATTEMPTS = 5; // wrong passwords allowed...
const LOCK_MINUTES = 15; // ...then the account is locked this long

// Used when the email does not exist, so a wrong email takes the same time
// as a wrong password (this hides which emails are real).
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 12);

export async function login(prevState, formData) {
  const email = str(formData, "email", 191).toLowerCase();
  const password = String(formData.get("password") ?? "").slice(0, 200);

  const user = await prisma.adminUser.findUnique({ where: { email } });

  if (user?.lockedUntil && user.lockedUntil > new Date()) {
    return { error: `Too many wrong attempts. Please try again in ${LOCK_MINUTES} minutes.` };
  }

  const passwordOk = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH);

  if (!user || !passwordOk) {
    if (user) {
      const attempts = user.failedAttempts + 1;
      const lock = attempts >= MAX_ATTEMPTS;
      await prisma.adminUser.update({
        where: { id: user.id },
        data: {
          failedAttempts: lock ? 0 : attempts,
          lockedUntil: lock ? new Date(Date.now() + LOCK_MINUTES * 60 * 1000) : null,
        },
      });
    }
    return { error: "Wrong email or password." };
  }

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { failedAttempts: 0, lockedUntil: null },
  });
  await createSession(user.id);
  redirect("/admin");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}

export async function changePassword(prevState, formData) {
  const admin = await requireAdmin();

  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  const again = String(formData.get("again") ?? "");

  if (next.length < 10) return { error: "The new password must be at least 10 characters." };
  if (next !== again) return { error: "The two new passwords are not the same." };

  const user = await prisma.adminUser.findUnique({ where: { id: admin.id } });
  if (!user || !(await bcrypt.compare(current, user.passwordHash))) {
    return { error: "Your current password is wrong." };
  }

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash: await bcrypt.hash(next, 12) },
  });
  return { success: "Password changed." };
}
