// /admin/faqs/new  or  /admin/faqs/5 - add / edit one question
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { saveFaq } from "../../../_actions/faq-actions";
import ActionForm from "../../../_components/ActionForm";
import Field from "../../../_components/Field";
import PageHeader from "../../../_components/PageHeader";
import { cardClass, checkboxClass } from "../../../_components/ui";

export default async function EditFaqPage({ params }) {
  await requireAdmin();
  const { id } = await params;

  let faq = { question: "", answer: "", sortOrder: 99, published: true };

  if (id !== "new") {
    const faqId = Number(id);
    if (!Number.isInteger(faqId)) notFound();
    const found = await prisma.faq.findUnique({ where: { id: faqId } });
    if (!found) notFound();
    faq = found;
  }

  return (
    <div className="max-w-3xl">
      <PageHeader title={id === "new" ? "Add a question" : "Edit question"} back={{ href: "/admin/faqs", label: "All questions" }} description="Questions appear in the FAQ section of the home page, from the smallest order number to the biggest." />
      <ActionForm action={saveFaq.bind(null, id)}>
        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          <Field label="Question" name="question" defaultValue={faq.question} required />
          <Field label="Answer" name="answer" defaultValue={faq.answer} rows={6} required />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Order (1 = first)" name="sortOrder" type="number" defaultValue={faq.sortOrder} />
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <input type="checkbox" name="published" defaultChecked={faq.published} className={checkboxClass} /> Show this question on the website
              </label>
            </div>
          </div>
        </section>
      </ActionForm>
    </div>
  );
}
