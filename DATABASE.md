# Database structure

The old database kept **every** text of the website in one table (`Content`, one row per text, with keys like `home.s03.t004`).
It is now split into related tables, organised by **page** and by **kind of content**.
The website looks and works exactly the same; only where the data is stored changed.

```
GLOBAL (shared by every page)
  SiteSetting      logo, logo alt text, WhatsApp number, phone, email, address, default share image   (1 row)
  HeaderSetting    header button, login link, "Resources" dropdown name, mobile bar texts            (1 row)
  FooterSetting    footer title/text, column titles, copyright, trademark, footer button             (1 row)
  MenuItem         every menu link: header, dropdown, 3 footer columns, social links
  DemoFormSetting  the "Book your free demo" form texts                                              (1 row)
   └─ DemoFormInterest   the options of its "I am interested in" drop-down
  Lead             people who sent the demo form

PAGES
  Page             home, features, solutions, integrations, pricing, about
   ├─ PageSeo          Google title/description, share title/image, canonical, keywords, noindex
   ├─ PageHero         main heading + intro paragraphs (+ the two hero buttons on Home)
   ├─ PageCta          bottom call-to-action text (Home, Pricing)
   ├─ PageSubnavItem   sticky sub-menu of the Features page
   ├─ FaqGroup         a FAQ block: its heading ...
   │   └─ Faq              ... and its questions
   └─ PageSection      one block of the page (s01, s02 ...), can be hidden
       ├─ SectionText      headings, paragraphs, list items, texts inside the app screenshots
       ├─ SectionLink      where buttons / cards go
       ├─ SectionIcon      icon names
       └─ SectionImage     picture addresses

MEDIA
  Media            every uploaded picture (logos, photos), stored IN the database. Shown at /uploads/<name>

PRICING
  PricingPlan ─ PricingFeature      (unchanged)

ADMIN
  AdminUser                         (unchanged)

OLD
  LegacyContent    the previous single table (still called `Content` in MySQL). Nothing reads or writes it.
```

## Where does a text live?

| The page asks for | Table.column |
|---|---|
| `t("seo.title")` | `PageSeo.title` of that page |
| `t("hero.lead")` | `PageHero.lead` of that page |
| `t("cta.title")`, `t("cta.text1")` | `PageCta.title`, `PageCta.text1` (Pricing's `cta.text` is `text1`) |
| `t("faq.heading")` | `FaqGroup.heading` |
| `t("subnav.crm")` | `PageSubnavItem.label` (anchor `crm`) |
| `t("form.button")`, `t("form.interest2")` | `DemoFormSetting.button`, 2nd `DemoFormInterest.label` |
| `t("s03.t004")` | `SectionText.value` — section `s03` of that page, code `t004` |
| `t("s03.l001")` / `i001` / `m001` | `SectionLink.href` / `SectionIcon.icon` / `SectionImage.url` |
| `settings.phone`, `settings.logo` | `SiteSetting` |
| `settings.headerCtaText` … | `HeaderSetting` |
| `settings.footerText` … | `FooterSetting` |
| hidden section | `PageSection.visible = false` |

The page designs were **not** changed: they still call `t("s03.t004")`. The translation from that short name to a table is
written once, in `lib/cms-store.mjs` (`locatePageKey`). The admin forms are still built from `lib/defaults*.mjs` + `lib/page-schema.mjs`.

An empty (NULL) column or a missing row means "use the original text", so the site never shows a blank.

## Rules

* **Nothing was deleted.** The migration *copies* the old rows; the old table stays as a backup.
* `prisma db seed` only **adds** what is missing. It never overwrites something you edited.
* Deleting a `Page` or a `PageSection` also deletes the rows below it (`ON DELETE CASCADE`).

## Applying it to your existing database

1. **Back up first** (phpMyAdmin → Export, or `mysqldump wapi > backup.sql`).
2. Stop `npm run dev`, copy the new files over the project.
3. `npx prisma migrate dev` — creates the new tables and copies all your data (migration `20261009100000_restructure_cms`).
4. `npm run db:seed` — safe to run; it adds anything that was still missing.
5. `npm run dev`, then check the website and `/admin`.

To check the copy yourself, in phpMyAdmin: `SELECT COUNT(*) FROM SectionText;` should be 1479 and `SELECT COUNT(*) FROM PageSection;` 52
(for a database that was fully seeded). Once you are happy, the old table can be removed with `DROP TABLE Content;` — optional, and only
after you have a backup.

## Adding things later

* **A new section on an existing page:** add it to `lib/defaults/<page>.mjs` (that is what the admin shows), put `t("sNN.t001")` in the page, run `npm run db:seed`.
* **A new page:** add it to `PAGES` in `lib/defaults.mjs`, create `app/<page>/page.jsx`, run `npm run db:seed`.
* **A new FAQ block on another page:** add a `FaqGroup` for that page and show its `Faq` rows with `getFaqs("<slug>")`.

## Uploaded pictures (Media)

The Upload button saves the picture in the `Media` table (not in a folder), so it works on Vercel.
Pages only keep the address, e.g. `/uploads/m1x2y3-ab12cd34ef.png`; `app/uploads/[name]/route.js` reads the picture from the table.

* Old pictures in your local `uploads` folder: run `npm run media:import` once (it copies them into `Media`, same names, nothing deleted).
* Maximum size is 3 MB. With XAMPP, MySQL may refuse packets above its `max_allowed_packet` setting (often 1 MB). If an upload says
  "Could not save the image", open XAMPP's `my.ini`, set `max_allowed_packet=16M` under `[mysqld]`, and restart MySQL.
