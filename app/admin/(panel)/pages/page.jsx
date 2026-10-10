// /admin/pages - all pages of the website
import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { PAGE_SLUGS, getPageSchema } from "@/lib/page-schema.mjs";
import Icon from "../../_components/Icon";
import PageHeader from "../../_components/PageHeader";
import { badge, cardClass, secondaryButton, primaryButton } from "../../_components/ui";

export default async function PagesList() {
  await requireAdmin();

  return (
    <div>
      <PageHeader title="Pages & SEO" description="Choose a page to edit its sections (texts, links, icons, images) and its SEO. Header and footer are under Navigation and Site Settings." />
      <div className="grid gap-4 md:grid-cols-2">
        {PAGE_SLUGS.map((slug) => {
          const page = getPageSchema(slug);
          const count = page.sections.reduce((n, s) => n + s.fields.length, 0);
          return (
            <div key={slug} className={`${cardClass} flex flex-col p-5 transition hover:border-slate-300 hover:shadow-md`}>
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name="file" className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-slate-900">{page.label}</p>
                  <p className="font-mono text-xs text-slate-500">{page.path}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={badge("slate")}>{page.sections.length} sections</span>
                <span className={badge("slate")}>{count} editable items</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                <Link href={`/admin/pages/${slug}`} className={primaryButton}>
                  <Icon name="edit" className="h-4 w-4" /> Edit content
                </Link>
                <Link href={`/admin/pages/${slug}/seo`} className={secondaryButton}>
                  <Icon name="search" className="h-4 w-4" /> SEO
                </Link>
                <Link href={page.path} target="_blank" className={secondaryButton}>
                  View <Icon name="external" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 flex items-start gap-2 text-sm text-slate-500">
        <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          Pricing cards are edited under <Link href="/admin/pricing" className="font-semibold text-brand-700 hover:underline">Pricing Plans</Link> and the home page FAQ under{" "}
          <Link href="/admin/faqs" className="font-semibold text-brand-700 hover:underline">FAQs</Link>.
        </span>
      </p>
    </div>
  );
}
