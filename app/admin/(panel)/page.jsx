// /admin  - the dashboard: numbers, quick actions, recent activity and a content overview.
// Everything shown here comes from the real database (nothing is made up).
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { PAGE_SLUGS, getPageSchema } from "@/lib/page-schema.mjs";
import Icon from "../_components/Icon";
import { badge, cardClass, primaryButton, secondaryButton } from "../_components/ui";
import { formatBytes, initials, timeAgo } from "../_components/format";

// If an extra (non-essential) query fails, show the dashboard anyway
const safe = (promise, fallback) => promise.catch(() => fallback);

export default async function DashboardPage() {
  const admin = await requireAdmin();

  const [newLeads, totalLeads, plans, faqs, latest, mediaCount, recentMedia, hiddenSections, recentEdits] = await Promise.all([
    prisma.lead.count({ where: { handled: false } }),
    prisma.lead.count(),
    prisma.pricingPlan.count(),
    prisma.faq.count(),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    safe(prisma.media.count(), 0),
    safe(prisma.media.findMany({ select: { name: true, size: true, createdAt: true }, orderBy: { createdAt: "desc" }, take: 4 }), []),
    safe(prisma.pageSection.findMany({ where: { visible: false }, select: { page: { select: { slug: true } } } }), []),
    safe(
      prisma.sectionText.findMany({
        orderBy: { updatedAt: "desc" },
        take: 30, // many texts of the same section share one time, so we read extra and keep one per section below
        select: { updatedAt: true, section: { select: { code: true, title: true, page: { select: { label: true, slug: true } } } } },
      }),
      []
    ),
  ]);

  const stats = [
    { label: "New demo requests", value: newLeads, href: "/admin/leads?filter=new", icon: "inbox", tone: "bg-brand-50 text-brand-700", note: newLeads > 0 ? "Waiting for a reply" : "All caught up" },
    { label: "All demo requests", value: totalLeads, href: "/admin/leads", icon: "phone", tone: "bg-sky-50 text-sky-700", note: "Since the form went live" },
    { label: "Pricing plans", value: plans, href: "/admin/pricing", icon: "card", tone: "bg-violet-50 text-violet-700", note: "Shown on the pricing page" },
    { label: "FAQs", value: faqs, href: "/admin/faqs", icon: "help", tone: "bg-amber-50 text-amber-700", note: "Shown on the home page" },
  ];

  const quickActions = [
    { href: "/admin/pages/home", label: "Edit the home page", icon: "edit" },
    { href: "/admin/faqs/new", label: "Add a FAQ", icon: "plus" },
    { href: "/admin/pricing/new", label: "Add a pricing plan", icon: "plus" },
    { href: "/admin/media", label: "Upload images", icon: "upload" },
    { href: "/admin/settings", label: "Change logo & contact", icon: "sliders" },
    { href: "/admin/leads/export", label: "Download requests (CSV)", icon: "download", plain: true },
  ];

  // content overview: one row per website page
  const hiddenBySlug = {};
  for (const row of hiddenSections) hiddenBySlug[row.page.slug] = (hiddenBySlug[row.page.slug] ?? 0) + 1;
  const pages = PAGE_SLUGS.map((slug) => {
    const schema = getPageSchema(slug);
    return { slug, label: schema.label, path: schema.path, sections: schema.sections.length, hidden: hiddenBySlug[slug] ?? 0 };
  });

  // one entry per edited section (several texts of a section are saved at the same moment)
  const editedSections = [];
  const seenSections = new Set();
  for (const edit of recentEdits) {
    const id = `${edit.section.page.slug}/${edit.section.code}`;
    if (seenSections.has(id)) continue;
    seenSections.add(id);
    editedSections.push(edit);
    if (editedSections.length === 3) break;
  }

  // recent activity: newest things from three places, mixed together
  const activity = [
    ...latest.map((lead) => ({ key: `lead-${lead.id}`, icon: "inbox", tone: "bg-brand-50 text-brand-700", title: `${lead.name} asked for a demo`, detail: lead.company, date: lead.createdAt, href: "/admin/leads" })),
    ...recentMedia.map((file) => ({ key: `media-${file.name}`, icon: "image", tone: "bg-sky-50 text-sky-700", title: "Image uploaded", detail: `${file.name} · ${formatBytes(file.size)}`, date: file.createdAt, href: "/admin/media" })),
    ...editedSections.map((edit) => ({ key: `edit-${edit.section.page.slug}-${edit.section.code}`, icon: "edit", tone: "bg-amber-50 text-amber-700", title: "Content updated", detail: `${edit.section.page.label} › ${edit.section.title}`, date: edit.updatedAt, href: `/admin/pages/${edit.section.page.slug}` })),
  ]
    .sort((a, b) => b.date - a.date)
    .slice(0, 7);

  const name = admin.email.split("@")[0];

  return (
    <div className="space-y-6">
      {/* welcome banner */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-7 text-white shadow-sm sm:px-8">
        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-500">Dashboard</p>
            <h1 className="mt-1 text-2xl font-semibold capitalize tracking-tight text-white sm:text-3xl !text-white">Welcome back, {name}</h1>
            <p className="mt-1.5 max-w-xl text-sm text-slate-300">
              {newLeads > 0 ? `You have ${newLeads} new demo request${newLeads === 1 ? "" : "s"} waiting.` : "No new demo requests right now."} Edit your website from the menu or use the quick actions below.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/admin/leads?filter=new" className={primaryButton}>
              <Icon name="inbox" className="h-4 w-4" /> Open inbox
            </Link>
            <Link href="/" target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition hover:bg-white/20">
              View website <Icon name="external" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* stat cards */}
      <section aria-label="Overview numbers" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((card) => (
          <Link key={card.label} href={card.href} className={`${cardClass} group p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25`}>
            <div className="flex items-start justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.tone}`}>
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <Icon name="arrowRight" className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-500" />
            </div>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{card.value}</p>
            <p className="mt-0.5 text-sm font-medium text-slate-700">{card.label}</p>
            <p className="mt-1 text-xs text-slate-500">{card.note}</p>
          </Link>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* latest demo requests */}
          <section className={cardClass}>
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">Latest demo requests</h2>
              <Link href="/admin/leads" className="text-sm font-medium text-brand-700 hover:underline">
                View all
              </Link>
            </div>
            {latest.length === 0 ? (
              <p className="px-5 py-10 text-center text-sm text-slate-500">Nobody has used the demo form yet.</p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {latest.map((lead) => (
                  <li key={lead.id} className="flex items-center gap-3 px-5 py-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">{initials(lead.name)}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {lead.name} <span className="font-normal text-slate-500">· {lead.company}</span>
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {lead.phone} · {lead.interest}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className={badge(lead.handled ? "slate" : "green")}>{lead.handled ? "Done" : "New"}</span>
                      <span className="text-xs text-slate-400">{lead.createdAt.toLocaleDateString("en-GB")}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* content overview */}
          <section className={cardClass}>
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">Content overview</h2>
              <Link href="/admin/pages" className="text-sm font-medium text-brand-700 hover:underline">
                Manage pages
              </Link>
            </div>
            <ul className="divide-y divide-slate-100">
              {pages.map((page) => (
                <li key={page.slug} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                    <Icon name="file" className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900">{page.label}</p>
                    <p className="text-xs text-slate-500">
                      {page.path} · {page.sections} sections
                    </p>
                  </div>
                  {page.hidden > 0 ? <span className={badge("amber")}>{page.hidden} hidden</span> : <span className={badge("green")}>All visible</span>}
                  <Link href={`/admin/pages/${page.slug}`} className="rounded-lg px-2.5 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25">
                    Edit
                  </Link>
                </li>
              ))}
            </ul>
            <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
              {mediaCount} uploaded image{mediaCount === 1 ? "" : "s"} in the <Link href="/admin/media" className="font-medium text-brand-700 hover:underline">Media Library</Link>.
            </p>
          </section>
        </div>

        <div className="space-y-6">
          {/* quick actions */}
          <section className={cardClass}>
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">Quick actions</h2>
            </div>
            <ul className="p-2">
              {quickActions.map((action) => {
                const className = "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25";
                const inner = (
                  <>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-brand-50 group-hover:text-brand-700">
                      <Icon name={action.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex-1">{action.label}</span>
                    <Icon name="chevronRight" className="h-4 w-4 text-slate-300" />
                  </>
                );
                return (
                  <li key={action.href}>
                    {action.plain ? (
                      <a href={action.href} className={className}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={action.href} className={className}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* recent activity */}
          <section className={cardClass}>
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">Recent activity</h2>
            </div>
            {activity.length === 0 ? (
              <p className="px-5 py-10 text-center text-sm text-slate-500">Nothing has happened yet.</p>
            ) : (
              <ol className="space-y-1 p-3">
                {activity.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href} className="flex items-start gap-3 rounded-lg px-2 py-2.5 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25">
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.tone}`}>
                        <Icon name={item.icon} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-slate-900">{item.title}</span>
                        <span className="block truncate text-xs text-slate-500">{item.detail}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-slate-400">
                        <Icon name="clock" className="h-3 w-3" />
                        {timeAgo(item.date)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
