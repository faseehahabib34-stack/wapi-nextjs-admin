// /admin/leads - people who filled in the "Book your free demo" form
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { toggleLead, deleteLead } from "../../_actions/lead-actions";
import ConfirmButton from "../../_components/ConfirmButton";
import EmptyState from "../../_components/EmptyState";
import Icon from "../../_components/Icon";
import PageHeader from "../../_components/PageHeader";
import SearchBox from "../../_components/SearchBox";
import { badge, chip, secondaryButton, tableWrap, td, th } from "../../_components/ui";

const FILTERS = [["all", "All"], ["new", "New"], ["done", "Done"]];

export default async function LeadsPage({ searchParams }) {
  await requireAdmin();
  const { filter = "all", q: rawQ = "" } = await searchParams;
  const q = String(rawQ).trim().slice(0, 100);

  const status = filter === "new" ? { handled: false } : filter === "done" ? { handled: true } : {};
  const search = q ? { OR: [{ name: { contains: q } }, { company: { contains: q } }, { phone: { contains: q } }, { interest: { contains: q } }] } : {};

  const [leads, totalAll, totalNew] = await Promise.all([
    prisma.lead.findMany({ where: { ...status, ...search }, orderBy: { createdAt: "desc" }, take: 500 }),
    prisma.lead.count(),
    prisma.lead.count({ where: { handled: false } }),
  ]);
  const counts = { all: totalAll, new: totalNew, done: totalAll - totalNew };

  return (
    <div>
      <PageHeader
        title="Demo Requests"
        description='People who used the "Book your free demo" form. Press "Done" after you have contacted them.'
        actions={
          <a href="/admin/leads/export" className={secondaryButton}>
            <Icon name="download" className="h-4 w-4" /> Download CSV
          </a>
        }
      />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter requests">
          {FILTERS.map(([key, label]) => (
            <Link key={key} href={`/admin/leads?filter=${key}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={chip(filter === key)} aria-current={filter === key ? "true" : undefined}>
              {label}
              <span className={`rounded-full px-1.5 text-xs ${filter === key ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>{counts[key]}</span>
            </Link>
          ))}
        </div>
        <SearchBox action="/admin/leads" q={q} placeholder="Search name, company, phone..." hidden={{ filter: filter !== "all" ? filter : "" }} />
      </div>

      {leads.length === 0 ? (
        <EmptyState
          icon="inbox"
          title={q || filter !== "all" ? "No requests match" : "No demo requests yet"}
          description={q || filter !== "all" ? "Try another search or filter." : "When someone uses the demo form on your website, they appear here."}
          action={q || filter !== "all" ? <Link href="/admin/leads" className={secondaryButton}>Show all requests</Link> : null}
        />
      ) : (
        <div className={tableWrap}>
          {/* On phones every row turns into a card (the labels come from data-label) */}
          <table className="w-full text-left">
            <thead className="hidden border-b border-slate-200 bg-slate-50/80 md:table-header-group">
              <tr>
                <th scope="col" className={th}>Date</th>
                <th scope="col" className={th}>Name</th>
                <th scope="col" className={th}>Company</th>
                <th scope="col" className={th}>WhatsApp</th>
                <th scope="col" className={th}>Interest</th>
                <th scope="col" className={th}>Status</th>
                <th scope="col" className={`${th} text-right`}><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="block divide-y divide-slate-100 md:table-row-group">
              {leads.map((lead) => {
                const digits = lead.phone.replace(/\D/g, "");
                const cell = `${td} block max-md:flex max-md:justify-between max-md:gap-4 max-md:py-1.5 max-md:before:shrink-0 max-md:before:text-xs max-md:before:font-semibold max-md:before:uppercase max-md:before:text-slate-400 max-md:before:content-[attr(data-label)] md:table-cell`;
                return (
                  <tr key={lead.id} className={`block max-md:p-4 md:table-row ${lead.handled ? "bg-slate-50/50 text-slate-400" : "hover:bg-slate-50/60"}`}>
                    <td data-label="Date" className={`${cell} whitespace-nowrap`}>{lead.createdAt.toLocaleDateString("en-GB")}</td>
                    <td data-label="Name" className={`${cell} font-semibold ${lead.handled ? "" : "text-slate-900"}`}>{lead.name}</td>
                    <td data-label="Company" className={cell}>{lead.company}</td>
                    <td data-label="WhatsApp" className={cell}>
                      {digits.length >= 8 ? (
                        <a href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:underline" title="Open a WhatsApp chat">
                          {lead.phone} <Icon name="external" className="h-3 w-3" />
                        </a>
                      ) : (
                        lead.phone
                      )}
                    </td>
                    <td data-label="Interest" className={cell}>{lead.interest}</td>
                    <td data-label="Status" className={cell}>
                      <span className={badge(lead.handled ? "slate" : "green")}>{lead.handled ? "Done" : "New"}</span>
                    </td>
                    <td className={`${td} block max-md:pt-3 md:table-cell`}>
                      <div className="flex gap-2 md:justify-end">
                        <form action={toggleLead.bind(null, lead.id, !lead.handled)}>
                          <button type="submit" className={`${secondaryButton} !px-3 !py-1.5`}>
                            <Icon name={lead.handled ? "arrowLeft" : "check"} className="h-4 w-4" />
                            {lead.handled ? "Undo" : "Done"}
                          </button>
                        </form>
                        <form action={deleteLead.bind(null, lead.id)}>
                          <ConfirmButton title="Delete this request?" message={`The request from ${lead.name} (${lead.company}) will be deleted. This cannot be undone.`}>
                            <Icon name="trash" className="h-4 w-4" /> Delete
                          </ConfirmButton>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {leads.length === 500 && <p className="mt-3 text-xs text-slate-500">Showing the newest 500 requests. Use search or the CSV download to find older ones.</p>}
    </div>
  );
}
