// ============================================================================
// CMS STORE
//
// The ONE file that knows which database table every piece of website content
// lives in. The public pages, the admin dashboard and the seed script all go
// through here, so the table layout is described in a single place.
//
// The page designs still ask for texts with the same short names as before:
//     t("hero.titleStart")   t("s03.t014")   t("seo.title")   t("form.button")
// This file translates each short name into a real table + column:
//
//   seo.*            -> PageSeo        (one row per page)
//   hero.*           -> PageHero       (one row per page)
//   cta.*            -> PageCta        (one row per page)
//   faq.heading      -> FaqGroup.heading
//   subnav.*         -> PageSubnavItem (one row per menu label)
//   form.*           -> DemoFormSetting + DemoFormInterest (shared by all pages)
//   s03.t014         -> SectionText   \
//   s03.l001         -> SectionLink    \  rows that belong to a PageSection,
//   s03.i001         -> SectionIcon    /  which belongs to a Page
//   s03.m001         -> SectionImage  /
//   site.*           -> SiteSetting / HeaderSetting / FooterSetting
//
// This file has NO Next.js code, so prisma/seed.mjs can use it too.
// Every function receives the Prisma client ("db") as its first argument.
// ============================================================================
import { PAGES, SETTINGS } from "./defaults.mjs";
import { PAGE_SLUGS, getPageSchema } from "./page-schema.mjs";

// ---------------------------------------------------------------- the layout

const SEO_COLUMNS = ["title", "description", "ogTitle", "ogDescription", "ogImage", "canonical", "keywords", "noindex"];
const HERO_COLUMNS = ["title", "titleStart", "titleGradient", "titleEnd", "lead", "sub", "primaryButton", "secondaryButton"];
const CTA_COLUMNS = ["title", "text1", "text2"];
const FORM_COLUMNS = ["title", "subtitle", "namePlaceholder", "companyPlaceholder", "phonePlaceholder", "interestDefault", "button", "note", "whatsappMessage"];
const SUBNAV_ORDER = ["api", "marketing", "ai", "chatbot", "inbox", "automation", "crm", "analytics"];

// The letter in a section code ("t001", "l001"...) decides the table.
const SECTION_TABLES = {
  t: { model: "sectionText", column: "value" },
  l: { model: "sectionLink", column: "href" },
  i: { model: "sectionIcon", column: "icon" },
  m: { model: "sectionImage", column: "url" },
};

// Site-wide settings: old key -> [table, column]
export const SITE_FIELDS = {
  "site.logo": ["siteSetting", "logo"],
  "site.logoAlt": ["siteSetting", "logoAlt"],
  "site.whatsappNumber": ["siteSetting", "whatsappNumber"],
  "site.phone": ["siteSetting", "phone"],
  "site.email": ["siteSetting", "email"],
  "site.address": ["siteSetting", "address"],
  "site.defaultOgImage": ["siteSetting", "defaultOgImage"],

  "site.headerCtaText": ["headerSetting", "ctaText"],
  "site.headerCtaLink": ["headerSetting", "ctaLink"],
  "site.loginText": ["headerSetting", "loginText"],
  "site.loginLink": ["headerSetting", "loginLink"],
  "site.dropdownLabel": ["headerSetting", "dropdownLabel"],
  "site.dropdownLink": ["headerSetting", "dropdownLink"],
  "site.mobileCtaText": ["headerSetting", "mobileCtaText"],
  "site.mobileWhatsappText": ["headerSetting", "mobileWhatsappText"],

  "site.footerTitle": ["footerSetting", "title"],
  "site.footerText": ["footerSetting", "text"],
  "site.productTitle": ["footerSetting", "productTitle"],
  "site.solutionsTitle": ["footerSetting", "solutionsTitle"],
  "site.companyTitle": ["footerSetting", "companyTitle"],
  "site.copyright": ["footerSetting", "copyright"],
  "site.trademark": ["footerSetting", "trademark"],
  "site.footerCtaText": ["footerSetting", "ctaText"],
  "site.footerCtaLink": ["footerSetting", "ctaLink"],
};
const SITE_DEFAULTS = new Map(SETTINGS.map((s) => [s.key, s.default])); // original text of every setting
const SINGLETON_MODELS = ["siteSetting", "headerSetting", "footerSetting", "demoFormSetting"];

// ------------------------------------------------- short name -> table/column

// Returns where a page-level short name is stored, or null if it is not known.
//   locatePageKey("home", "hero.lead")  -> { kind: "hero", column: "lead" }
//   locatePageKey("home", "s03.t014")   -> { kind: "section", section: "s03", code: "t014", model: "sectionText", column: "value" }
export function locatePageKey(slug, key) {
  const dot = key.indexOf(".");
  if (dot < 0) return null;
  const head = key.slice(0, dot);
  const tail = key.slice(dot + 1);

  if (head === "seo" && SEO_COLUMNS.includes(tail)) return { kind: "seo", column: tail };
  if (head === "hero" && HERO_COLUMNS.includes(tail)) return { kind: "hero", column: tail };
  if (head === "cta") {
    const column = tail === "text" ? "text1" : tail; // Pricing calls it "cta.text"
    if (CTA_COLUMNS.includes(column)) return { kind: "cta", column };
  }
  if (head === "faq" && tail === "heading") return { kind: "faqHeading" };
  if (head === "form") {
    if (FORM_COLUMNS.includes(tail)) return { kind: "form", column: tail };
    const option = /^interest([1-9]\d*)$/.exec(tail);
    if (option) return { kind: "interest", position: Number(option[1]) };
  }
  if (head === "subnav" && /^[a-z]+$/.test(tail)) return { kind: "subnav", anchor: tail };
  if (/^s\d+$/.test(head) && /^[tlim]\d+$/.test(tail)) {
    return { kind: "section", section: head, code: tail, ...SECTION_TABLES[tail[0]] };
  }
  return null;
}

function pageUsesForm(slug) {
  const schema = getPageSchema(slug);
  return !!schema && schema.sections.some((s) => s.fields.some((f) => f.key.startsWith("form.")));
}

// --------------------------------------------------------- make sure rows exist

// The Page row of a slug (created from the defaults if it is missing).
export async function ensurePage(db, slug) {
  const def = PAGES[slug];
  if (!def) throw new Error(`Unknown page "${slug}".`);
  return db.page.upsert({
    where: { slug },
    update: {},
    create: { slug, label: def.label, path: def.path, sortOrder: PAGE_SLUGS.indexOf(slug) + 1 },
  });
}

// The PageSection row of a section code like "s03" (created if it is missing).
export async function ensureSection(db, slug, code) {
  const page = await ensurePage(db, slug);
  const sections = (getPageSchema(slug)?.sections ?? []).filter((s) => !s.main);
  const index = sections.findIndex((s) => s.id === code);
  const title = index >= 0 ? sections[index].title : `Section ${code}`;
  return db.pageSection.upsert({
    where: { pageId_code: { pageId: page.id, code } },
    update: {},
    create: { pageId: page.id, code, title, sortOrder: index >= 0 ? index + 1 : 99, visible: true },
  });
}

// The FAQ block of a page (created if it is missing). Returns the FaqGroup row.
export async function ensureFaqGroup(db, slug = "home") {
  const page = await ensurePage(db, slug);
  const found = await db.faqGroup.findFirst({ where: { pageId: page.id }, orderBy: { sortOrder: "asc" } });
  if (found) return found;
  const heading = getPageSchema(slug)?.sections.flatMap((s) => s.fields).find((f) => f.key === "faq.heading")?.default ?? null;
  return db.faqGroup.create({ data: { pageId: page.id, heading, sortOrder: 0 } });
}

// ------------------------------------------------------------------- reading

// Everything the public page / the admin needs for ONE page, with the short names
// the page designs use.   -> { values: Map("hero.lead" => "text"), hidden: Set("s03") }
// Only values that exist in the database are in the Map (the caller falls back to the defaults).
export async function readPageValues(db, slug) {
  const values = new Map();
  const hidden = new Set();
  const put = (key, value) => {
    if (value !== null && value !== undefined) values.set(key, value);
  };

  const page = await db.page.findUnique({ where: { slug } });
  if (!page) return { values, hidden };
  const pageId = page.id;
  const withForm = pageUsesForm(slug);

  const [seo, hero, cta, sections, subnav, faqGroup, form, interests] = await Promise.all([
    db.pageSeo.findUnique({ where: { pageId } }),
    db.pageHero.findUnique({ where: { pageId } }),
    db.pageCta.findUnique({ where: { pageId } }),
    db.pageSection.findMany({ where: { pageId } }),
    db.pageSubnavItem.findMany({ where: { pageId } }),
    db.faqGroup.findFirst({ where: { pageId }, orderBy: { sortOrder: "asc" } }),
    withForm ? db.demoFormSetting.findUnique({ where: { id: 1 } }) : null,
    withForm ? db.demoFormInterest.findMany({ where: { formId: 1 } }) : [],
  ]);

  if (seo) for (const column of SEO_COLUMNS) put(`seo.${column}`, column === "noindex" ? (seo.noindex ? "1" : "") : seo[column]);
  if (hero) for (const column of HERO_COLUMNS) put(`hero.${column}`, hero[column]);
  if (cta) {
    for (const column of CTA_COLUMNS) put(`cta.${column}`, cta[column]);
    put("cta.text", cta.text1); // Pricing's name for the same column
  }
  if (faqGroup) put("faq.heading", faqGroup.heading);
  if (form) for (const column of FORM_COLUMNS) put(`form.${column}`, form[column]);
  for (const row of interests) put(`form.interest${row.sortOrder}`, row.label);
  for (const row of subnav) put(`subnav.${row.anchor}`, row.label);

  const byId = new Map(sections.map((s) => [s.id, s]));
  for (const section of sections) if (!section.visible) hidden.add(section.code);
  if (sections.length > 0) {
    const where = { sectionId: { in: sections.map((s) => s.id) } };
    const [texts, links, icons, images] = await Promise.all([
      db.sectionText.findMany({ where }),
      db.sectionLink.findMany({ where }),
      db.sectionIcon.findMany({ where }),
      db.sectionImage.findMany({ where }),
    ]);
    const add = (rows, column) => {
      for (const row of rows) put(`${byId.get(row.sectionId).code}.${row.code}`, row[column]);
    };
    add(texts, "value");
    add(links, "href");
    add(icons, "icon");
    add(images, "url");
  }
  return { values, hidden };
}

// Header + footer + contact settings.   -> Map("site.phone" => "...")
export async function readSiteValues(db) {
  const [siteSetting, headerSetting, footerSetting] = await Promise.all([
    db.siteSetting.findUnique({ where: { id: 1 } }),
    db.headerSetting.findUnique({ where: { id: 1 } }),
    db.footerSetting.findUnique({ where: { id: 1 } }),
  ]);
  const rows = { siteSetting, headerSetting, footerSetting };
  const values = new Map();
  for (const [key, [model, column]] of Object.entries(SITE_FIELDS)) {
    const value = rows[model]?.[column];
    if (value !== null && value !== undefined) values.set(key, value);
  }
  return values;
}

// ------------------------------------------------------------------- writing

// Save values of one page. entries = [{ key: "hero.lead", value: "text" }, ...]
// Creates missing rows as needed. Throws if a key is unknown (so nothing is lost silently).
export async function writePageValues(db, slug, entries) {
  const page = await ensurePage(db, slug);
  const pageId = page.id;

  const seo = {};
  const hero = {};
  const cta = {};
  const form = {};
  const interests = [];
  const subnav = [];
  const sections = new Map(); // "s03" -> [{ model, column, code, value }]
  let faqHeading;

  for (const { key, value } of entries) {
    const place = locatePageKey(slug, key);
    if (!place) throw new Error(`Unknown content key "${slug}.${key}".`);
    switch (place.kind) {
      case "seo": seo[place.column] = place.column === "noindex" ? value === "1" : value; break;
      case "hero": hero[place.column] = value; break;
      case "cta": cta[place.column] = value; break;
      case "form": form[place.column] = value; break;
      case "interest": interests.push({ position: place.position, label: value }); break;
      case "subnav": subnav.push({ anchor: place.anchor, label: value }); break;
      case "faqHeading": faqHeading = value; break;
      case "section":
        if (!sections.has(place.section)) sections.set(place.section, []);
        sections.get(place.section).push({ model: place.model, column: place.column, code: place.code, value });
        break;
    }
  }

  const upsertOne = (model, data) =>
    db[model].upsert({ where: { pageId }, update: data, create: { pageId, ...data } });
  if (Object.keys(seo).length) await upsertOne("pageSeo", seo);
  if (Object.keys(hero).length) await upsertOne("pageHero", hero);
  if (Object.keys(cta).length) await upsertOne("pageCta", cta);

  if (faqHeading !== undefined) {
    const group = await ensureFaqGroup(db, slug);
    await db.faqGroup.update({ where: { id: group.id }, data: { heading: faqHeading } });
  }

  if (Object.keys(form).length || interests.length) {
    await db.demoFormSetting.upsert({ where: { id: 1 }, update: form, create: { id: 1, ...form } });
  }
  for (const { position, label } of interests) {
    const existing = await db.demoFormInterest.findFirst({ where: { formId: 1, sortOrder: position } });
    if (existing) await db.demoFormInterest.update({ where: { id: existing.id }, data: { label } });
    else await db.demoFormInterest.create({ data: { formId: 1, sortOrder: position, label } });
  }

  for (const { anchor, label } of subnav) {
    const sortOrder = SUBNAV_ORDER.includes(anchor) ? SUBNAV_ORDER.indexOf(anchor) + 1 : 99;
    await db.pageSubnavItem.upsert({
      where: { pageId_anchor: { pageId, anchor } },
      update: { label },
      create: { pageId, anchor, label, sortOrder },
    });
  }

  for (const [sectionCode, items] of sections) {
    const section = await ensureSection(db, slug, sectionCode);
    for (const { model, column, code, value } of items) {
      await db[model].upsert({
        where: { sectionId_code: { sectionId: section.id, code } },
        update: { [column]: value },
        create: { sectionId: section.id, code, [column]: value },
      });
    }
  }
}

// Save site-wide settings. entries = [{ key: "site.phone", value: "..." }, ...]
export async function writeSiteValues(db, entries) {
  const data = {};
  for (const { key, value } of entries) {
    const place = SITE_FIELDS[key];
    if (!place) throw new Error(`Unknown setting "${key}".`);
    (data[place[0]] ??= {})[place[1]] = value;
  }
  for (const [model, columns] of Object.entries(data)) {
    await db[model].upsert({ where: { id: 1 }, update: columns, create: { id: 1, ...columns } });
  }
}

// Show or hide one section of a page on the website.
export async function setSectionVisible(db, slug, code, visible) {
  const section = await ensureSection(db, slug, code);
  await db.pageSection.update({ where: { id: section.id }, data: { visible } });
}

// ------------------------------------------------------------------- seeding

// Creates every missing row of the page structure and fills every value that is
// still empty with the original website text. It NEVER overwrites a value that
// already exists, so it is safe to run again and again.
// Returns how many values were added.
export async function seedPageContent(db) {
  let added = 0;

  for (const model of SINGLETON_MODELS) {
    await db[model].upsert({ where: { id: 1 }, update: {}, create: { id: 1 } });
  }
  await ensureFaqGroup(db, "home");

  // site-wide settings
  const siteSaved = await readSiteValues(db);
  const siteMissing = [];
  for (const key of Object.keys(SITE_FIELDS)) {
    if (!siteSaved.has(key)) siteMissing.push({ key, value: SITE_DEFAULTS.get(key) ?? "" });
  }
  if (siteMissing.length) await writeSiteValues(db, siteMissing);
  added += siteMissing.length;

  // pages
  for (const slug of PAGE_SLUGS) {
    await ensurePage(db, slug);
    const schema = getPageSchema(slug);

    const sectionIds = new Map();
    for (const section of schema.sections.filter((s) => !s.main)) {
      sectionIds.set(section.id, (await ensureSection(db, slug, section.id)).id);
    }

    const saved = (await readPageValues(db, slug)).values;
    const fields = [...schema.seoFields, ...schema.sections.flatMap((s) => s.fields)];
    const missing = [];
    const bulk = { sectionText: [], sectionLink: [], sectionIcon: [], sectionImage: [] };
    for (const field of fields) {
      if (saved.has(field.key)) continue;
      const place = locatePageKey(slug, field.key);
      if (!place) throw new Error(`Unknown content key "${slug}.${field.key}".`);
      if (place.kind === "section") {
        bulk[place.model].push({ sectionId: sectionIds.get(place.section), code: place.code, [place.column]: field.default });
      } else {
        missing.push({ key: field.key, value: field.default });
      }
    }
    if (missing.length) await writePageValues(db, slug, missing);
    for (const [model, data] of Object.entries(bulk)) {
      if (data.length) await db[model].createMany({ data, skipDuplicates: true });
    }
    added += missing.length + Object.values(bulk).reduce((n, rows) => n + rows.length, 0);
  }
  return added;
}
