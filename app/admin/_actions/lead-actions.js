"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

// Used as: toggleLead.bind(null, id, true)
export async function toggleLead(id, handled) {
  await requireAdmin();
  await prisma.lead.update({ where: { id: Number(id) }, data: { handled } });
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
}

export async function deleteLead(id) {
  await requireAdmin();
  await prisma.lead.delete({ where: { id: Number(id) } });
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
}
