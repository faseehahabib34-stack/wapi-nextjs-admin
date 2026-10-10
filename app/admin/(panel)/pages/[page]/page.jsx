// /admin/pages/home - the sections of one page, with show/hide switches
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { getPageSchema } from "@/lib/page-schema.mjs";
import { readPageValues } from "@/lib/cms-store.mjs";
import { setSectionVisible } from "../../../_actions/content-actions";
import Icon from "../../../_components/Icon";
import PageHeader from "../../../_components/PageHeader";
import { badge, cardClass, secondaryButton, primaryButton } from "../../../_components/ui";

export default async function PageSections({ params }) {
  await requireAdmin();
  const { page } = await params; // in Next.js 15+ "params" must be awaited
  const schema = getPageSchema(page);
  if (!schema) notFound();

  const { hidden } = await readPageValues(prisma, page); // sections switched off (PageSection.visible = false)

  const countOf = (section, group) => section.fields.filter((f) => f.group === group).length;

  return (
    <div>
      <PageHeader
        title={schema.label}
        back={{ href: "/admin/pages", label: "All pages" }}
        description="Each box below is a section of the page, from top to bottom. Open one to edit it, or hide it from the website."
        actions={
          <>
            <Link href={`/admin/pages/${page}/seo`} className={secondaryButton}>
              <Icon name="search" className="h-4 w-4" /> SEO settings
            </Link>
            <Link href={schema.path} target="_blank" className={secondaryButton}>
              View page <Icon name="external" className="h-3.5 w-3.5" />
            </Link>
          </>
        }
      />

      <ol className="space-y-3">
        {schema.sections.map((section, index) => {
          const isHidden = hidden.has(section.id);
          const parts = [
            ["text", "texts"],
            ["link", "links"],
            ["icon", "icons"],
            ["media", "images"],
            ["mockup", "screenshot texts"],
          ]
            .map(([g, name]) => [countOf(section, g), name])
            .filter(([n]) => n > 0)
            .map(([n, name]) => `${n} ${name}`)
            .join(" · ");

          return (
            <li key={section.id} className={`${cardClass} flex flex-wrap items-center gap-4 p-4 transition ${isHidden ? "bg-slate-50" : "hover:border-slate-300"}`}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${isHidden ? "bg-slate-200 text-slate-500" : "bg-brand-50 text-brand-700"}`}>{index + 1}</span>
              <div className="min-w-0 flex-1">
                <p className={`flex flex-wrap items-center gap-2 font-semibold ${isHidden ? "text-slate-500" : "text-slate-900"}`}>
                  {section.title}
                  {isHidden && <span className={badge("slate")}>Hidden</span>}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{parts}</p>
              </div>
              <div className="flex items-center gap-2">
                {!section.main && (
                  <form action={setSectionVisible.bind(null, page, section.id, isHidden)}>
                    <button type="submit" className={secondaryButton}>
                      <Icon name={isHidden ? "eye" : "eyeOff"} className="h-4 w-4" />
                      {isHidden ? "Show on website" : "Hide"}
                    </button>
                  </form>
                )}
                <Link href={`/admin/pages/${page}/${section.id}`} className={primaryButton}>
                  <Icon name="edit" className="h-4 w-4" /> Edit
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
