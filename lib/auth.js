// "Who is logged in?" helpers. Used by admin pages AND by every server action.
import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { readSession } from "@/lib/session";

// Returns the logged-in admin ({ id, email }) or null.
// cache() = if called many times in one request, it only asks the database once.
export const getAdmin = cache(async () => {
  const session = await readSession();
  if (!session) return null;
  return prisma.adminUser.findUnique({
    where: { id: session.userId },
    select: { id: true, email: true },
  });
});

// Put this at the top of every admin page and every admin action.
// Not logged in -> sent to the login page.
export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}
