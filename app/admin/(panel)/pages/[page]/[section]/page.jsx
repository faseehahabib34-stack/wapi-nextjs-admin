// /admin/pages/home/s03 - edit ONE section of a page
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { getPageSchema } from "@/lib/page-schema.mjs";
import { readPageValues } from "@/lib/cms-store.mjs";
import { saveSection } from "../../../../_actions/content-actions";
import ActionForm from "../../../../_components/ActionForm";
import FieldRenderer from "../../../../_components/FieldRenderer";
import Icon from "../../../../_components/Icon";
import PageHeader from "../../../../_components/PageHeader";
import { cardClass } from "../../../../_components/ui";

const GROUPS = [
  ["text", "Texts", "file"],
  ["link", "Links (where buttons go)", "link"],
  ["icon", "Icons", "zap"],
  ["media", "Images", "image"],
  ["mockup", "Texts inside the app screenshots (decorative)", "layers"],
];

export default async function EditSection({ params }) {
  await requireAdmin();
  const { page, section: sectionId } = await params;
  const schema = getPageSchema(page);
  const index = schema ? schema.sections.findIndex((s) => s.id === sectionId) : -1;
  if (index < 0) notFound();
  const section = schema.sections[index];
  const previous = schema.sections[index - 1];
  const next = schema.sections[index + 1];

  const { values: saved } = await readPageValues(prisma, page);
  const valueOf = (field) => saved.get(field.key) ?? field.default;

  return (
    <div>
      <PageHeader
        title={section.title}
        back={{ href: `/admin/pages/${page}`, label: schema.label }}
        description="Change the boxes and press Save. Clear a box and save to go back to the original text."
      />
      <ActionForm action={saveSection.bind(null, page, sectionId)}>
        {GROUPS.map(([group, title, icon]) => {
          const fields = section.fields.filter((f) => f.group === group);
          if (fields.length === 0) return null;
          const body = (
            <div className="space-y-5">
              {fields.map((field) => (
                <FieldRenderer key={field.key} field={field} value={valueOf(field)} />
              ))}
            </div>
          );
          // Screenshot texts are collapsed, so the important texts stay easy to find
          return group === "mockup" ? (
            <details key={group} className={`${cardClass} group`}>
              <summary className="flex cursor-pointer list-none items-center gap-2 p-5 text-sm font-semibold text-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25 [&::-webkit-details-marker]:hidden">
                <Icon name={icon} className="h-4 w-4 text-slate-400" />
                {title} ({fields.length})
                <Icon name="chevronDown" className="ml-auto h-4 w-4 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-100 p-5">{body}</div>
            </details>
          ) : (
            <section key={group} className={`${cardClass} p-5 sm:p-6`}>
              <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <Icon name={icon} className="h-4 w-4" />
                </span>
                {title}
                <span className="text-xs font-normal text-slate-400">({fields.length})</span>
              </h2>
              {body}
            </section>
          );
        })}
      </ActionForm>

      {(previous || next) && (
        <nav aria-label="Other sections" className="mt-6 flex items-center justify-between gap-3 text-sm">
          {previous ? (
            <Link href={`/admin/pages/${page}/${previous.id}`} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-white hover:text-slate-900">
              <Icon name="arrowLeft" className="h-4 w-4" /> {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/admin/pages/${page}/${next.id}`} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-white hover:text-slate-900">
              {next.title} <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
