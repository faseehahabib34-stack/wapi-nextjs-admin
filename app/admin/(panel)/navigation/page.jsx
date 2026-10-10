// /admin/navigation - header menu, header dropdown, footer columns, social links
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { MENU_GROUPS } from "@/lib/menu-groups";
import { saveMenuGroup } from "../../_actions/menu-actions";
import ActionForm from "../../_components/ActionForm";
import PageHeader, { Notice } from "../../_components/PageHeader";
import { cardClass, checkboxClass, chip, inputClass } from "../../_components/ui";

const NEW_ROWS = 3; // empty rows shown for adding links

// One link = one row. The input NAMES (label_5, href_5, ...) are read by saveMenuGroup: do not rename them.
function Row({ id, item }) {
  const isNew = String(id).startsWith("new");
  return (
    <fieldset className={`rounded-xl border p-4 ${isNew ? "border-dashed border-slate-300 bg-slate-50/50" : "border-slate-200 bg-white"}`}>
      <legend className="sr-only">{isNew ? "New link" : `Link: ${item.label}`}</legend>
      <input type="hidden" name="rowId" value={id} />
      <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr_84px]">
        <div>
          <label htmlFor={`label_${id}`} className="mb-1 block text-xs font-semibold text-slate-500">
            Label
          </label>
          <input id={`label_${id}`} name={`label_${id}`} defaultValue={item.label} placeholder={isNew ? "New link text" : undefined} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`href_${id}`} className="mb-1 block text-xs font-semibold text-slate-500">
            Link
          </label>
          <input id={`href_${id}`} name={`href_${id}`} defaultValue={item.href} placeholder="/pricing or https://..." className={inputClass} />
        </div>
        <div>
          <label htmlFor={`order_${id}`} className="mb-1 block text-xs font-semibold text-slate-500">
            Order
          </label>
          <input id={`order_${id}`} name={`order_${id}`} type="number" defaultValue={item.sortOrder} className={inputClass} />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
        <label className="flex items-center gap-2">
          <input type="checkbox" name={`published_${id}`} defaultChecked={item.published} className={checkboxClass} /> Visible
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name={`newTab_${id}`} defaultChecked={item.openInNewTab} className={checkboxClass} /> Open in new tab
        </label>
        {!isNew && (
          <label className="flex items-center gap-2 font-medium text-red-600">
            <input type="checkbox" name={`delete_${id}`} className="h-4 w-4 rounded border-red-300 accent-red-600" /> Delete this link
          </label>
        )}
      </div>
    </fieldset>
  );
}

export default async function NavigationPage({ searchParams }) {
  await requireAdmin();
  const { group: selected = "HEADER" } = await searchParams;
  const group = MENU_GROUPS[selected] ? selected : "HEADER";

  // The menus are filled by "npm run db:seed". Until then the website uses its built-in links.
  if ((await prisma.menuItem.count()) === 0) {
    return (
      <div>
        <PageHeader title="Navigation" />
        <Notice tone="error">
          The menu table is empty. Run <b>npx prisma migrate dev</b> and then <b>npm run db:seed</b> once, then reload this page.
        </Notice>
      </div>
    );
  }
  const [items, counts] = await Promise.all([
    prisma.menuItem.findMany({ where: { group }, orderBy: [{ sortOrder: "asc" }, { id: "asc" }] }),
    prisma.menuItem.groupBy({ by: ["group"], _count: { _all: true } }),
  ]);
  const countOf = Object.fromEntries(counts.map((c) => [c.group, c._count._all]));

  return (
    <div>
      <PageHeader title="Navigation" description="Edit the links of the header and footer. Changes appear on the website straight away." />

      <div className="-mx-4 mb-6 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        <div className="flex gap-2" role="group" aria-label="Menu to edit">
          {Object.entries(MENU_GROUPS).map(([key, info]) => (
            <Link key={key} href={`/admin/navigation?group=${key}`} className={`${chip(key === group)} shrink-0`} aria-current={key === group ? "true" : undefined}>
              {info.title}
              <span className={`rounded-full px-1.5 text-xs ${key === group ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>{countOf[key] ?? 0}</span>
            </Link>
          ))}
        </div>
      </div>

      <section className={`${cardClass} p-5 sm:p-6`}>
        <h2 className="text-lg font-semibold text-slate-900">{MENU_GROUPS[group].title}</h2>
        <p className="mb-5 mt-1 text-sm text-slate-500">{MENU_GROUPS[group].help}</p>
        {/* key = the list of row ids: when a link is added or deleted the form starts fresh */}
        <ActionForm key={group + items.map((i) => i.id).join("-")} action={saveMenuGroup.bind(null, group)}>
          <div className="space-y-3">
            {items.map((item) => (
              <Row key={item.id} id={item.id} item={item} />
            ))}
            <p className="pt-3 text-sm font-semibold text-slate-700">Add new links</p>
            {Array.from({ length: NEW_ROWS }, (_, i) => (
              <Row key={`new${i + 1}`} id={`new${i + 1}`} item={{ label: "", href: "", sortOrder: 99, published: true, openInNewTab: group === "SOCIAL" }} />
            ))}
          </div>
        </ActionForm>
      </section>
    </div>
  );
}
