// /admin/pages/home/seo - Google + social sharing settings of one page
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { getPageSchema } from "@/lib/page-schema.mjs";
import { readPageValues } from "@/lib/cms-store.mjs";
import { saveSeo } from "../../../../_actions/content-actions";
import ActionForm from "../../../../_components/ActionForm";
import FieldRenderer from "../../../../_components/FieldRenderer";
import PageHeader from "../../../../_components/PageHeader";
import { cardClass } from "../../../../_components/ui";

export default async function SeoPage({ params }) {
  await requireAdmin();
  const { page } = await params;
  const schema = getPageSchema(page);
  if (!schema) notFound();

  const { values: saved } = await readPageValues(prisma, page); // PageSeo row of this page

  return (
    <div className="max-w-3xl">
      <PageHeader
        title={`SEO – ${schema.label}`}
        back={{ href: `/admin/pages/${page}`, label: schema.label }}
        description="What Google shows in search results, and what appears when the page is shared on WhatsApp, Facebook or LinkedIn."
      />
      <ActionForm action={saveSeo.bind(null, page)}>
        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          {schema.seoFields.map((field) => (
            <FieldRenderer key={field.key} field={field} value={saved.get(field.key) ?? field.default} />
          ))}
        </section>
      </ActionForm>
    </div>
  );
}
