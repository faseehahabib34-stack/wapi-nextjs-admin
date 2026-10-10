"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { ensureFaqGroup } from "@/lib/cms-store.mjs";
import { str, int, checked } from "@/lib/form";

// Create (id = "new") or update a FAQ.  Used as: saveFaq.bind(null, id)
export async function saveFaq(id, prevState, formData) {
  await requireAdmin();

  const data = {
    question: str(formData, "question", 255),
    answer: str(formData, "answer", 5000),
    sortOrder: int(formData, "sortOrder", 0),
    published: checked(formData, "published"),
  };
  if (!data.question || !data.answer) return { error: "Both the question and the answer are required." };

  if (id === "new") {
    // new questions go into the FAQ block of the home page (FaqGroup)
    const group = await ensureFaqGroup(prisma, "home");
    await prisma.faq.create({ data: { ...data, groupId: group.id } });
  } else {
    const faqId = Number(id);
    if (!Number.isInteger(faqId)) return { error: "Invalid FAQ." };
    await prisma.faq.update({ where: { id: faqId }, data });
  }

  revalidatePath("/", "layout");
  redirect("/admin/faqs?saved=1");
}

export async function deleteFaq(id) {
  await requireAdmin();
  await prisma.faq.delete({ where: { id: Number(id) } });
  revalidatePath("/", "layout");
  redirect("/admin/faqs?deleted=1");
}
