// /admin/faqs - list of FAQ questions
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deleteFaq } from "../../_actions/faq-actions";
import ConfirmButton from "../../_components/ConfirmButton";
import EmptyState from "../../_components/EmptyState";
import Icon from "../../_components/Icon";
import PageHeader, { Notice } from "../../_components/PageHeader";
import SearchBox from "../../_components/SearchBox";
import { badge, cardClass, chip, primaryButton, secondaryButton } from "../../_components/ui";

const FILTERS = [["all", "All"], ["visible", "Visible"], ["hidden", "Hidden"]];

export default async function FaqAdminPage({ searchParams }) {
  await requireAdmin();
  const { saved, deleted, q: rawQ = "", filter = "all" } = await searchParams;
  const q = String(rawQ).trim().slice(0, 100);

  const inHome = { group: { page: { slug: "home" } } };
  const where = {
    ...inHome,
    ...(filter === "visible" ? { published: true } : filter === "hidden" ? { published: false } : {}),
    ...(q ? { OR: [{ question: { contains: q } }, { answer: { contains: q } }] } : {}),
  };
  const [faqs, total] = await Promise.all([
    prisma.faq.findMany({ where, orderBy: { sortOrder: "asc" } }),
    prisma.faq.count({ where: inHome }),
  ]);

  return (
    <div>
      <PageHeader
        title="FAQs"
        description="These appear in the FAQ section of the home page."
        actions={
          <Link href="/admin/faqs/new" className={primaryButton}>
            <Icon name="plus" className="h-4 w-4" /> Add question
          </Link>
        }
      />
      {saved && <Notice>Saved. The website is updated.</Notice>}
      {deleted && <Notice>Question deleted.</Notice>}

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter questions">
          {FILTERS.map(([key, label]) => (
            <Link key={key} href={`/admin/faqs?filter=${key}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={chip(filter === key)} aria-current={filter === key ? "true" : undefined}>
              {label}
            </Link>
          ))}
        </div>
        <SearchBox action="/admin/faqs" q={q} placeholder="Search questions..." hidden={{ filter: filter !== "all" ? filter : "" }} />
      </div>

      {faqs.length === 0 ? (
        total === 0 ? (
          <EmptyState icon="help" title="No questions yet" description="Add your first question. It will appear in the FAQ section of the home page." action={<Link href="/admin/faqs/new" className={primaryButton}>Add question</Link>} />
        ) : (
          <EmptyState icon="search" title="No questions match" description="Try another word or clear the filter." action={<Link href="/admin/faqs" className={secondaryButton}>Clear search</Link>} />
        )
      ) : (
        <ul className={`${cardClass} divide-y divide-slate-100`}>
          {faqs.map((faq) => (
            <li key={faq.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-500" title="Order">
                {faq.sortOrder}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900">{faq.question}</p>
                <p className="mt-0.5 line-clamp-1 text-sm text-slate-500">{faq.answer}</p>
              </div>
              <span className={badge(faq.published ? "green" : "slate")}>{faq.published ? "Visible" : "Hidden"}</span>
              <div className="flex items-center gap-2">
                <Link href={`/admin/faqs/${faq.id}`} className={`${secondaryButton} !px-3 !py-1.5`}>
                  <Icon name="edit" className="h-4 w-4" /> Edit
                </Link>
                <form action={deleteFaq.bind(null, faq.id)}>
                  <ConfirmButton title="Delete this question?" message={`"${faq.question}" will be removed from the website. This cannot be undone.`}>
                    <Icon name="trash" className="h-4 w-4" /> Delete
                  </ConfirmButton>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
