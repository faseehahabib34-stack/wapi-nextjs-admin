// Describes every editable page for the admin screens AND for the fallback texts.
// Pure data helpers - no database here.
import { PAGES, SETTINGS } from "./defaults.mjs";
import * as home from "./defaults/home.mjs";
import * as features from "./defaults/features.mjs";
import * as solutions from "./defaults/solutions.mjs";
import * as integrations from "./defaults/integrations.mjs";
import * as pricing from "./defaults/pricing.mjs";
import * as about from "./defaults/about.mjs";

const GENERATED = { home, features, solutions, integrations, pricing, about };

// Names for the groups of hand-written texts (first part of the key)
const MAIN_TITLES = {
  hero: "Hero – main heading, paragraph & buttons",
  faq: "FAQ section heading",
  cta: "Bottom call-to-action",
  form: "Demo form",
  subnav: "Sticky sub-menu labels",
};

export const PAGE_SLUGS = Object.keys(PAGES);

// Everything the admin needs to show one page
export function getPageSchema(slug) {
  const page = PAGES[slug];
  if (!page) return null;

  const seoFields = page.fields.filter((f) => f.key.startsWith("seo."));

  // hand-written texts, grouped by their first word ("hero", "faq", "cta"...)
  const groups = new Map();
  for (const field of page.fields.filter((f) => !f.key.startsWith("seo."))) {
    const prefix = field.key.split(".")[0];
    if (!groups.has(prefix)) groups.set(prefix, []);
    groups.get(prefix).push({ ...field, group: "text" });
  }
  const mainSections = [...groups.entries()].map(([prefix, fields]) => ({
    id: "m-" + prefix,
    title: MAIN_TITLES[prefix] || "Main texts",
    fields,
    main: true, // always visible, no show/hide switch
  }));

  const generated = (GENERATED[slug]?.SECTIONS || []).map((s) => ({ ...s, main: false }));

  return {
    slug,
    label: page.label,
    path: page.path,
    seoFields,
    sections: [...mainSections, ...generated],
  };
}

// key -> default text, for ALL pages and settings (used by lib/content.js)
export const DEFAULT_BY_KEY = (() => {
  const map = new Map();
  for (const s of SETTINGS) map.set(s.key, s.default);
  for (const slug of PAGE_SLUGS) {
    const schema = getPageSchema(slug);
    for (const f of schema.seoFields) map.set(`${slug}.${f.key}`, f.default);
    for (const section of schema.sections) for (const f of section.fields) map.set(`${slug}.${f.key}`, f.default);
  }
  return map;
})();

// Every [key, default] pair - used by the seed script
export function allDefaultRows() {
  return [...DEFAULT_BY_KEY.entries()].map(([key, value]) => ({ key, value }));
}

export { ICONS } from "./icons.mjs";
