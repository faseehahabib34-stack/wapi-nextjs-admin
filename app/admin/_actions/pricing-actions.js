"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { str, int, checked, isSafeLink } from "@/lib/form";

const STYLES = ["DEFAULT", "POPULAR", "DARK"];

// Create (id = "new") or update a pricing plan.  Used as: savePlan.bind(null, id)
export async function savePlan(id, prevState, formData) {
  await requireAdmin();

  const data = {
    name: str(formData, "name", 120),
    tagline: str(formData, "tagline", 255),
    description: str(formData, "description", 2000),
    price: str(formData, "price", 120),
    priceSuffix: str(formData, "priceSuffix", 60),
    buttonText: str(formData, "buttonText", 120),
    buttonLink: str(formData, "buttonLink", 255),
    featuresHeading: str(formData, "featuresHeading", 120),
    style: str(formData, "style", 20),
    sortOrder: int(formData, "sortOrder", 0),
    published: checked(formData, "published"),
  };

  if (!data.name) return { error: "Plan name is required." };
  if (!data.price) return { error: "Price is required (you can write text like 'Custom Pricing')." };
  if (!data.buttonText) return { error: "Button text is required." };
  if (!isSafeLink(data.buttonLink)) {
    return { error: "Button link must start with /, #, https:// or be {whatsapp}." };
  }
  if (!STYLES.includes(data.style)) return { error: "Please choose a card style." };

  // One feature per line
  const features = String(formData.get("features") ?? "")
    .split("\n")
    .map((line) => line.trim().slice(0, 255))
    .filter(Boolean)
    .map((text, sortOrder) => ({ text, sortOrder }));

  if (id === "new") {
    await prisma.pricingPlan.create({ data: { ...data, features: { create: features } } });
  } else {
    const planId = Number(id);
    if (!Number.isInteger(planId)) return { error: "Invalid plan." };
    // Replace the old feature lines with the new ones, all or nothing
    await prisma.$transaction([
      prisma.pricingFeature.deleteMany({ where: { planId } }),
      prisma.pricingPlan.update({
        where: { id: planId },
        data: { ...data, features: { create: features } },
      }),
    ]);
  }

  revalidatePath("/", "layout");
  redirect("/admin/pricing?saved=1");
}

// Used as: deletePlan.bind(null, id)
export async function deletePlan(id) {
  await requireAdmin();
  await prisma.pricingPlan.delete({ where: { id: Number(id) } });
  revalidatePath("/", "layout");
  redirect("/admin/pricing?deleted=1");
}
