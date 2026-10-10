// The frame for all admin pages EXCEPT the login page (sidebar + top bar: see AdminShell).
// "(panel)" in brackets is a route group: it organises files but is NOT part of the URL.
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { PAGE_SLUGS, getPageSchema } from "@/lib/page-schema.mjs";
import { logout } from "../_actions/auth-actions";
import AdminShell from "../_components/AdminShell";

// Names used by the breadcrumbs: { home: { label: "Home page", sections: { s01: "Hero", ... } } }
const pageLabels = Object.fromEntries(
  PAGE_SLUGS.map((slug) => {
    const schema = getPageSchema(slug);
    return [slug, { label: schema.label, sections: Object.fromEntries(schema.sections.map((s) => [s.id, s.title])) }];
  })
);

export default async function PanelLayout({ children }) {
  const admin = await requireAdmin(); // not logged in -> sent to /admin/login

  // the green number next to "Demo Requests" (a failed query must never break the whole admin)
  const newLeads = await prisma.lead.count({ where: { handled: false } }).catch(() => 0);

  return (
    <AdminShell adminEmail={admin.email} newLeads={newLeads} labels={{ pages: pageLabels }} logout={logout}>
      {children}
    </AdminShell>
  );
}
