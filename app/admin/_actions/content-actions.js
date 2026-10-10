"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { SETTINGS } from "@/lib/defaults.mjs";
import { getPageSchema, ICONS } from "@/lib/page-schema.mjs";
import { readPageValues, readSiteValues, writePageValues, writeSiteValues, setSectionVisible as storeSetSectionVisible } from "@/lib/cms-store.mjs";
import { str, isSafeLink } from "@/lib/form";

// Read one field from the submitted form
function readValue(field, formData) {
  if (field.type === "checkbox") return formData.get(field.key) === "1" ? "1" : "";
  return str(formData, field.key, field.type === "textarea" ? 5000 : 1000);
}

// Returns an error message, or null when the value is fine
function validate(field, value) {
  if (!value) return null;
  if (field.type === "link" && !isSafeLink(value)) {
    return `"${field.label}": a link must start with /, #, https://, mailto: or tel:`;
  }
  if (field.type === "image" && !/^(\/|https?:\/\/)/i.test(value)) {
    return `"${field.label}": use the Upload button, or a full https:// image address.`;
  }
  if (field.type === "icon" && !ICONS.some(([id]) => id === value)) {
    return `"${field.label}": please choose an icon from the list.`;
  }
  return null;
}

// Reads + checks the submitted boxes, then saves only the values that really changed.
// An empty box = go back to the original text.
//   scope "page": the fields belong to one page (Page, PageSeo, PageHero, SectionText...)
//   scope "site": the fields are site-wide settings (SiteSetting, HeaderSetting, FooterSetting)
async function saveFields(scope, fields, formData) {
  const entries = [];
  for (const field of fields) {
    const raw = readValue(field, formData);
    const error = validate(field, raw);
    if (error) return { error };
    const value = raw === "" && field.type !== "checkbox" ? field.default : raw;
    entries.push({ key: field.key, value });
  }

  const current = scope.slug ? (await readPageValues(prisma, scope.slug)).values : await readSiteValues(prisma);
  const changed = entries.filter((e) => !current.has(e.key) || current.get(e.key) !== e.value);

  if (changed.length > 0) {
    // all-or-nothing: either every change is saved or none
    await prisma.$transaction(
      (tx) => (scope.slug ? writePageValues(tx, scope.slug, changed) : writeSiteValues(tx, changed)),
      { timeout: 30000, maxWait: 10000 }
    );
  }
  // Tell Next.js the public pages are out of date, so they rebuild with the new content
  revalidatePath("/", "layout");
  return { success: changed.length ? `Saved ${changed.length} change${changed.length === 1 ? "" : "s"}. The website is updated.` : "Nothing changed." };
}

// Edit one section of a page.   Used as: saveSection.bind(null, "home", "s03")
export async function saveSection(page, sectionId, prevState, formData) {
  await requireAdmin();
  const section = getPageSchema(page)?.sections.find((s) => s.id === sectionId);
  if (!section) return { error: "Unknown section." };
  return saveFields({ slug: page }, section.fields, formData);
}

// Edit the SEO fields of a page.   Used as: saveSeo.bind(null, "home")
export async function saveSeo(page, prevState, formData) {
  await requireAdmin();
  const schema = getPageSchema(page);
  if (!schema) return { error: "Unknown page." };
  return saveFields({ slug: page }, schema.seoFields, formData);
}

export async function saveSettings(prevState, formData) {
  await requireAdmin();

  const whatsapp = str(formData, "site.whatsappNumber", 40).replace(/[\s+()-]/g, "");
  if (!/^\d{8,15}$/.test(whatsapp)) {
    return { error: "WhatsApp number: use digits only with the country code, for example 971555515475." };
  }
  formData.set("site.whatsappNumber", whatsapp);

  return saveFields({}, SETTINGS, formData);
}

// Show or hide a whole section on the public page.   Used as: setSectionVisible.bind(null, page, id, true/false)
export async function setSectionVisible(page, sectionId, visible) {
  await requireAdmin();
  const section = getPageSchema(page)?.sections.find((s) => s.id === sectionId);
  if (!section || section.main) return;

  await storeSetSectionVisible(prisma, page, sectionId, visible);
  revalidatePath("/", "layout");
}
