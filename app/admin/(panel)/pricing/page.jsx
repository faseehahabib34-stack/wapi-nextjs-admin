// /admin/pricing - list of pricing cards
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deletePlan } from "../../_actions/pricing-actions";
import ConfirmButton from "../../_components/ConfirmButton";
import EmptyState from "../../_components/EmptyState";
import Icon from "../../_components/Icon";
import PageHeader, { Notice } from "../../_components/PageHeader";
import { badge, cardClass, primaryButton, secondaryButton } from "../../_components/ui";

const STYLE_LABEL = { DEFAULT: ["Normal", "slate"], POPULAR: ["Most popular", "green"], DARK: ["Dark", "dark"] };

export default async function PricingAdminPage({ searchParams }) {
  await requireAdmin();
  const { saved, deleted } = await searchParams;

  const plans = await prisma.pricingPlan.findMany({
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { features: true } } },
  });

  return (
    <div>
      <PageHeader
        title="Pricing Plans"
        description='Cards are shown on the Pricing page from smallest "Order" number to biggest. The page heading is edited under Pages & SEO.'
        actions={
          <Link href="/admin/pricing/new" className={primaryButton}>
            <Icon name="plus" className="h-4 w-4" /> Add plan
          </Link>
        }
      />
      {saved && <Notice>Saved. The website is updated.</Notice>}
      {deleted && <Notice>Plan deleted.</Notice>}

      {plans.length === 0 ? (
        <EmptyState icon="card" title="No plans yet" description='Run "npm run db:seed" to load the original plans, or add one yourself.' action={<Link href="/admin/pricing/new" className={primaryButton}>Add plan</Link>} />
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => {
            const [styleName, styleTone] = STYLE_LABEL[plan.style] ?? STYLE_LABEL.DEFAULT;
            return (
              <li key={plan.id} className={`${cardClass} flex flex-col overflow-hidden ${plan.published ? "" : "opacity-75"}`}>
                <div className={`h-1.5 ${plan.style === "POPULAR" ? "bg-brand-500" : plan.style === "DARK" ? "bg-slate-900" : "bg-slate-200"}`} aria-hidden="true" />
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-slate-900">{plan.name}</p>
                      {plan.tagline && <p className="text-sm text-brand-700">{plan.tagline}</p>}
                    </div>
                    <span className="flex gap-1.5">
                      <span className={badge(styleTone)}>{styleName}</span>
                      <span className={badge(plan.published ? "green" : "slate")}>{plan.published ? "Visible" : "Hidden"}</span>
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                    {plan.price} <span className="text-sm font-normal text-slate-500">{plan.priceSuffix}</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Order {plan.sortOrder} · {plan._count.features} feature{plan._count.features === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-3">
                  <Link href={`/admin/pricing/${plan.id}`} className={`${secondaryButton} !px-3 !py-1.5`}>
                    <Icon name="edit" className="h-4 w-4" /> Edit
                  </Link>
                  <form action={deletePlan.bind(null, plan.id)}>
                    <ConfirmButton title="Delete this plan?" message={`The "${plan.name}" plan and its features will be removed from the website. This cannot be undone.`}>
                      <Icon name="trash" className="h-4 w-4" /> Delete
                    </ConfirmButton>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
