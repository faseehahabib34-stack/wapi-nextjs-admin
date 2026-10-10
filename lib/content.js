// All the functions the PUBLIC pages use to read content from the database.
// If the database has no value (or is down) we use the default text from
// lib/defaults*.mjs, so the website always shows something.
//
// Where each value is stored (Page, PageSeo, PageHero, PageSection, SectionText,
// SiteSetting...) is decided in lib/cms-store.mjs - see DATABASE.md.
import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/db";
import { SETTINGS, DEFAULT_PLANS, DEFAULT_FAQS, DEFAULT_MENU } from "@/lib/defaults.mjs";
import { DEFAULT_BY_KEY } from "@/lib/page-schema.mjs";
import { readPageValues, readSiteValues } from "@/lib/cms-store.mjs";

// cache() = only one database read per page per request, even if called many times.
const loadPage = cache(async (slug) => {
  try {
    return await readPageValues(prisma, slug);
  } catch (error) {
    console.error("Could not read the page from the database, using defaults:", error.message);
    return { values: new Map(), hidden: new Set() };
  }
});

const loadSite = cache(async () => {
  try {
    return await readSiteValues(prisma);
  } catch (error) {
    console.error("Could not read the site settings from the database, using defaults:", error.message);
    return new Map();
  }
});

// Usage in a page:   const t = await getText("pricing");   then   {t("hero.title")}
//   t("key")        -> the text (database value, or the original text)
//   t.show("s03")   -> false when the admin has hidden that section
export async function getText(page) {
  const { values, hidden } = await loadPage(page);
  const t = (key) => values.get(key) || DEFAULT_BY_KEY.get(`${page}.${key}`) || "";
  t.show = (sectionId) => !hidden.has(sectionId);
  return t;
}

// Site-wide settings + ready-made links.
export async function getSettings() {
  const saved = await loadSite();
  const s = {};
  for (const item of SETTINGS) {
    s[item.key.replace("site.", "")] = saved.get(item.key) || item.default;
  }
  s.whatsappUrl = `https://wa.me/${s.whatsappNumber.replace(/\D/g, "")}`; // https://wa.me/9715...
  s.telHref = `tel:${s.phone.replace(/[^\d+]/g, "")}`; // tel:+9715...
  return s;
}

// Menu links of one group, in order. Falls back to the defaults if the table is empty.
export const getMenu = cache(async (group) => {
  try {
    if ((await prisma.menuItem.count()) > 0) {
      const rows = await prisma.menuItem.findMany({
        where: { group, published: true },
        orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
      });
      return rows.map(({ label, href, openInNewTab }) => ({ label, href, openInNewTab }));
    }
  } catch (error) {
    console.error("Could not read the menu from the database, using defaults:", error.message);
  }
  return DEFAULT_MENU.filter((m) => m.group === group).map(({ label, href, openInNewTab }) => ({ label, href, openInNewTab }));
});

// SEO tags (title, description, social share, robots...) for one page.
// Each page's generateMetadata() calls this.
export async function getPageMetadata(page, canonicalFallback) {
  const [t, settings] = await Promise.all([getText(page), getSettings()]);
  const meta = { title: t("seo.title") };
  if (t("seo.description")) meta.description = t("seo.description");
  if (t("seo.keywords")) meta.keywords = t("seo.keywords").split(",").map((k) => k.trim()).filter(Boolean);
  const canonical = t("seo.canonical") || canonicalFallback;
  if (canonical) meta.alternates = { canonical };
  if (t("seo.noindex") === "1") meta.robots = { index: false, follow: false };

  const ogImage = t("seo.ogImage") || settings.defaultOgImage;
  meta.openGraph = { title: t("seo.ogTitle") || meta.title, description: t("seo.ogDescription") || meta.description };
  if (ogImage) meta.openGraph.images = [{ url: ogImage }];
  meta.twitter = { card: ogImage ? "summary_large_image" : "summary", title: meta.openGraph.title, description: meta.openGraph.description };
  if (ogImage) meta.twitter.images = [ogImage];
  return meta;
}

// Pricing cards (with their tick-mark lines)
export async function getPlans() {
  try {
    // Table completely empty (seed not run yet) -> show the defaults.
    if ((await prisma.pricingPlan.count()) > 0) {
      return await prisma.pricingPlan.findMany({
        where: { published: true },
        orderBy: { sortOrder: "asc" },
        include: { features: { orderBy: { sortOrder: "asc" } } },
      });
    }
  } catch (error) {
    console.error("Could not read plans from the database, using defaults:", error.message);
  }
  return DEFAULT_PLANS.map((p) => ({ ...p, features: p.features.map((text) => ({ text })) }));
}

// FAQ questions of a page (the home page by default)
export async function getFaqs(page = "home") {
  try {
    // Page has no questions at all (seed not run yet) -> show the defaults.
    const inPage = { group: { page: { slug: page } } };
    if ((await prisma.faq.count({ where: inPage })) > 0) {
      return await prisma.faq.findMany({
        where: { ...inPage, published: true },
        orderBy: { sortOrder: "asc" },
      });
    }
  } catch (error) {
    console.error("Could not read FAQs from the database, using defaults:", error.message);
  }
  return DEFAULT_FAQS;
}
