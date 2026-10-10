// /admin/settings - logo, contact details, header and footer texts (used on every page)
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { SETTINGS } from "@/lib/defaults.mjs";
import { readSiteValues } from "@/lib/cms-store.mjs";
import { saveSettings } from "../../_actions/content-actions";
import ActionForm from "../../_components/ActionForm";
import FieldRenderer from "../../_components/FieldRenderer";
import Icon from "../../_components/Icon";
import PageHeader from "../../_components/PageHeader";
import { cardClass } from "../../_components/ui";

const GROUP_HELP = {
  Brand: "Your logo is used in the header, the footer and inside the page designs.",
  Contact: "Shown in the footer. The WhatsApp number powers every WhatsApp button on the website.",
  Header: "The button, login link and dropdown name at the top of every page. The menu links themselves are under Navigation.",
  Footer: "Footer texts and the bar that appears at the bottom of phones. The footer links are under Navigation.",
  SEO: "Used when a page has no social-share image of its own.",
};
const GROUP_ICON = { Brand: "image", Contact: "phone", Header: "panel", Footer: "layers", SEO: "search" };

export default async function SettingsPage() {
  await requireAdmin();

  const saved = await readSiteValues(prisma); // SiteSetting + HeaderSetting + FooterSetting
  const groups = [...new Set(SETTINGS.map((s) => s.group))];

  return (
    <div className="max-w-3xl">
      <PageHeader title="Site Settings" description="Details that appear on every page of the website." />

      {/* jump links to each block */}
      <nav aria-label="Settings sections" className="mb-5 flex flex-wrap gap-2">
        {groups.map((group) => (
          <a key={group} href={`#${group.toLowerCase()}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 hover:text-slate-900">
            <Icon name={GROUP_ICON[group] ?? "sliders"} className="h-3.5 w-3.5" />
            {group}
          </a>
        ))}
      </nav>

      <ActionForm action={saveSettings}>
        {groups.map((group) => (
          <section key={group} id={group.toLowerCase()} className={`${cardClass} scroll-mt-24 p-5 sm:p-6`}>
            <div className="mb-5 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name={GROUP_ICON[group] ?? "sliders"} className="h-[18px] w-[18px]" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-slate-900">{group}</h2>
                <p className="text-sm text-slate-500">{GROUP_HELP[group]}</p>
              </div>
            </div>
            <div className="space-y-5">
              {SETTINGS.filter((s) => s.group === group).map((field) => (
                <FieldRenderer key={field.key} field={field} value={saved.get(field.key) ?? field.default} />
              ))}
            </div>
          </section>
        ))}
      </ActionForm>
    </div>
  );
}
