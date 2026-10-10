"use client";
// The left menu. It is a client component only so it can highlight the current page.
// Props (all optional):
//   collapsed   -> on desktop show only the icons
//   newLeads    -> number shown as a green badge next to "Demo Requests"
//   onNavigate  -> called after a click (the mobile drawer uses it to close itself)
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const groups = [
  {
    title: "Overview",
    links: [{ href: "/admin", label: "Dashboard", icon: "dashboard" }],
  },
  {
    title: "Website content",
    links: [
      { href: "/admin/pages", label: "Pages & SEO", icon: "file" },
      { href: "/admin/navigation", label: "Navigation", icon: "list" },
      { href: "/admin/pricing", label: "Pricing Plans", icon: "card" },
      { href: "/admin/faqs", label: "FAQs", icon: "help" },
    ],
  },
  {
    title: "Inbox",
    links: [{ href: "/admin/leads", label: "Demo Requests", icon: "inbox", badge: "leads" }],
  },
  {
    title: "Site",
    links: [
      { href: "/admin/settings", label: "Site Settings", icon: "sliders" },
      { href: "/admin/media", label: "Media Library", icon: "image" },
      { href: "/admin/account", label: "My Account", icon: "user" },
    ],
  },
];

export default function AdminNav({ collapsed = false, newLeads = 0, onNavigate }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-6" aria-label="Admin menu">
      {groups.map((group) => (
        <div key={group.title}>
          <p className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500 ${collapsed ? "md:hidden" : ""}`}>{group.title}</p>
          {collapsed && <div className="mx-3 mb-2 hidden border-t border-white/10 md:block" aria-hidden="true" />}
          <ul className="flex flex-col gap-1">
            {group.links.map((link) => {
              const active = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
              const badge = link.badge === "leads" && newLeads > 0 ? newLeads : 0;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    title={collapsed ? link.label : undefined}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      collapsed ? "md:justify-center md:px-0" : ""
                    } ${active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
                  >
                    {active && <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand-500" aria-hidden="true" />}
                    <Icon name={link.icon} className={`h-[18px] w-[18px] shrink-0 ${active ? "text-brand-500" : "text-slate-500 group-hover:text-slate-300"}`} />
                    <span className={`flex-1 truncate ${collapsed ? "md:sr-only" : ""}`}>{link.label}</span>
                    {badge > 0 && (
                      <span className={`rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-bold leading-none text-white ${collapsed ? "md:absolute md:right-1.5 md:top-1 md:px-1.5 md:py-[3px] md:text-[10px]" : ""}`}>
                        {badge > 99 ? "99+" : badge}
                        <span className="sr-only"> new</span>
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
