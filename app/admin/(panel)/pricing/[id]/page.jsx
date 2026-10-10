// /admin/pricing/new  or  /admin/pricing/3 - add / edit one pricing card
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { savePlan } from "../../../_actions/pricing-actions";
import ActionForm from "../../../_components/ActionForm";
import Field from "../../../_components/Field";
import PageHeader from "../../../_components/PageHeader";
import { cardClass, checkboxClass, inputClass } from "../../../_components/ui";

export default async function EditPlanPage({ params }) {
  await requireAdmin();
  const { id } = await params;

  let plan = {
    name: "", tagline: "", description: "", price: "", priceSuffix: "/ Month",
    buttonText: "Get Started", buttonLink: "/#demo", featuresHeading: "INCLUDES",
    style: "DEFAULT", sortOrder: 99, published: true, features: [],
  };

  if (id !== "new") {
    const planId = Number(id);
    if (!Number.isInteger(planId)) notFound();
    const found = await prisma.pricingPlan.findUnique({
      where: { id: planId },
      include: { features: { orderBy: { sortOrder: "asc" } } },
    });
    if (!found) notFound();
    plan = found;
  }

  return (
    <div className="max-w-3xl">
      <PageHeader title={id === "new" ? "Add a plan" : `Edit ${plan.name}`} back={{ href: "/admin/pricing", label: "All plans" }} description="This is one card on the Pricing page." />
      <ActionForm action={savePlan.bind(null, id)}>
        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          <h2 className="text-sm font-semibold text-slate-900">Plan details</h2>
          <Field label="Plan name" name="name" defaultValue={plan.name} required />
          <Field label="Green line under the name" name="tagline" defaultValue={plan.tagline} />
          <Field label="Small description (optional)" name="description" defaultValue={plan.description} rows={2} />
        </section>

        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          <h2 className="text-sm font-semibold text-slate-900">Price and button</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Price" name="price" defaultValue={plan.price} required hint='Text, for example "AED 199" or "Custom Pricing"' />
            <Field label="After the price (optional)" name="priceSuffix" defaultValue={plan.priceSuffix} hint='for example "/ Month"' />
            <Field label="Button text" name="buttonText" defaultValue={plan.buttonText} required />
            <Field label="Button link" name="buttonLink" defaultValue={plan.buttonLink} hint='"/#demo" = demo form, "{whatsapp}" = your WhatsApp link' />
          </div>
        </section>

        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          <h2 className="text-sm font-semibold text-slate-900">Features</h2>
          <Field label="Small heading above the feature list" name="featuresHeading" defaultValue={plan.featuresHeading} />
          <Field label="Features (one per line)" name="features" rows={10} defaultValue={plan.features.map((f) => f.text).join("\n")} />
        </section>

        <section className={`${cardClass} space-y-5 p-5 sm:p-6`}>
          <h2 className="text-sm font-semibold text-slate-900">Display</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="style" className="mb-1.5 block text-sm font-medium text-slate-700">
                Card style
              </label>
              <select id="style" name="style" defaultValue={plan.style} className={inputClass}>
                <option value="DEFAULT">Normal (white)</option>
                <option value="POPULAR">Most popular (green border + badge)</option>
                <option value="DARK">Dark (like Enterprise)</option>
              </select>
            </div>
            <Field label="Order (1 = first)" name="sortOrder" type="number" defaultValue={plan.sortOrder} />
          </div>
          <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
            <input type="checkbox" name="published" defaultChecked={plan.published} className={checkboxClass} /> Show this plan on the website
          </label>
        </section>
      </ActionForm>
    </div>
  );
}
