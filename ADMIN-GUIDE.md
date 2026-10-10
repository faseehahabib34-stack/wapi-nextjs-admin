# WAPI Admin / CMS – Beginner Guide (version 2: whole website)

Everything you see on the website is now read from MySQL (through Prisma) and edited from `/admin`.

---

## Part 1 – Update an existing setup (you already have version 1 running)

1. Copy these new project files over your old project (keep your `.env` and `node_modules`).
2. Install packages (nothing new is required, but it is safe):
   ```bash
   npm install
   ```
3. Create the one new table (`MenuItem`, for the header/footer links):
   ```bash
   npx prisma migrate dev --name add_menu_items
   ```
4. Add the new content to the database (it only ADDS missing things, it never overwrites your edits):
   ```bash
   npm run db:seed
   ```
5. Start: `npm run dev`, then open http://localhost:3000/admin

### Fresh setup (new computer / new database)
`npm install` → create `.env` from `.env.example` → `npx prisma migrate dev --name init` → `npm run db:seed` → `npm run dev`.

Optional line for `.env`: `SITE_URL="https://www.yourdomain.com"` (used for social-share image links).

---

## Part 2 – What you can edit

| Admin menu | What it controls |
|---|---|
| **Pages & SEO** | Home, Features, Solutions, Integrations, Pricing, About. Each page is split into sections (from top to bottom). Every section lets you edit **all texts, button links, icons and images**, and **hide/show** the whole section. Each page also has an **SEO** screen: title, description, social title/description/image, canonical URL, keywords, "hide from Google". |
| **Navigation** | Header menu, header dropdown, the 3 footer columns, social links. Add, rename, re-order, hide, delete, open in new tab. |
| **Pricing Plans** | Cards on /pricing: name, price, description, features, button, style, order, publish/unpublish. |
| **FAQs** | Home page questions: add, edit, order, publish/unpublish. |
| **Demo Requests** | Everyone who used the demo form. Filter New/Done, mark done, delete, **Download CSV**. |
| **Site Settings** | Logo, WhatsApp number, phone, email, address, header button/login/dropdown name, footer texts, bottom bar, default share image. |
| **Media Library** | Images you uploaded. |
| **My Account** | Change your password. |

How to edit a section: *Pages & SEO → choose page → Edit on a section → change boxes → Save*.
- The small grey code at the right of a box (like `s03.t004`) is just its ID.
- Clearing a box and saving brings back the original text.
- "Texts inside the app screenshots" is collapsed: those are the fake phone/dashboard pictures on the page.
- Images: press **Upload image** (PNG, JPG, WEBP, GIF, up to 3 MB).

### What is NOT editable (be aware)
- **Adding or removing cards** inside a section (for example a 7th feature card). You can change every card's text, icon and link, or hide the whole section, but the number of cards is part of the page design. Pricing plans, FAQs and menu links DO support add/remove.
- The company logos in the circular "orbit" pictures, colours, fonts and spacing.
- The FAQ blocks on the Features/Solutions pages (they are normal text sections: edit their text, not their count).
- The phone/address inside the hidden Google structured data (JSON-LD) of each page.

---

## Part 3 – How it works (easy words)

**The tables.** The content is stored in separate, related tables: one per page (`Page`) with its SEO, hero and call-to-action, its sections (`PageSection`) with their texts, links, icons and images, plus shared tables for the header, footer, contact details, menus and the demo form. **See `DATABASE.md` for the full picture.** The public page still asks for `t("s03.t004")`; `lib/cms-store.mjs` knows which table that text lives in and the database answers with the saved text. If the database has nothing (or is down), the original text from `lib/defaults/*.mjs` is used, so the site never breaks.

**Files that matter**
- `prisma/schema.prisma` – all tables (explained in `DATABASE.md`). The old single `Content` table is kept only as a backup (`LegacyContent`).
- `lib/cms-store.mjs` – the one file that knows which table each text lives in. Used by the website, the admin and the seed.
- `lib/defaults.mjs` and `lib/defaults/*.mjs` – the original website content. Used by the seed and as a safety net.
- `lib/page-schema.mjs` – the list of pages → sections → fields that the admin shows.
- `lib/content.js` – functions the public pages call: `getText`, `getSettings`, `getMenu`, `getPlans`, `getFaqs`, `getPageMetadata`. Server only.
- `lib/uploads.js`, `app/uploads/[name]/route.js` – safe image storing and serving. Files go to the `uploads/` folder in the project (checked by their real content, random names, no SVG).
- `app/admin/_actions/` – Server Actions (Save/Delete/Upload). **Every one calls `requireAdmin()` first.**
- `app/admin/(panel)/…` – admin pages. `app/admin/_components/…` – reusable form pieces.
- `components/Header.jsx`, `components/Footer.jsx` – now built from Site Settings + Navigation.
- In the public pages, text such as `{t("s03.t004")}` replaced the old fixed text. Layout and classes are unchanged. Each section is wrapped in `{t.show("s03") && (...)}` so it can be hidden.

I checked that with the default content the public pages produce the same HTML as your original pages (Pricing differs only in the order of CSS class names).

**Security**
- Passwords: bcrypt. 5 wrong tries → 15 minute lock. Signed `httpOnly` cookie.
- All admin actions and pages require login. Links must start with `/`, `#`, `https://`, `mailto:` or `tel:`.
- Uploads: type checked from the file bytes, 3 MB limit, random file names.
- The public demo form is limited to 5 sends per minute per visitor.

---

## Part 4 – Going live

- Use a host that keeps files on disk (VPS, cPanel Node, Docker with a volume). Uploaded images live in the `uploads/` folder: **back it up and keep it between deployments**. On serverless hosts (Vercel) the disk is temporary; use an image URL from a CDN in the image boxes instead of Upload.
- Set `DATABASE_URL`, `SESSION_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` (and optionally `SITE_URL`) in the host's environment.
- Run `npx prisma migrate deploy` once, `npm run db:seed` once, then `npm run build` (database must be reachable) and `npm start`.
- Use HTTPS. Back up the database regularly.

## Troubleshooting

| Problem | Fix |
|---|---|
| "The menu table is empty" in Navigation | Run the migration and `npm run db:seed` (Part 1) |
| Admin shows old text after upgrading | Run `npm run db:seed`; restart `npm run dev` |
| `SESSION_SECRET is missing or too short` | 32+ characters in `.env`, restart |
| Upload fails with "too big" | Keep images under 3 MB |
| Forgot admin password | Delete the user in `npx prisma studio` (AdminUser), set new `ADMIN_EMAIL/ADMIN_PASSWORD` in `.env`, run `npm run db:seed` |

---

## The admin design (how the screens are built)

All admin screens share one small design system, so a change in one place changes every screen.

| File (in `app/admin/_components/`) | What it does |
|---|---|
| `ui.js` | The class names for inputs, buttons, cards, badges, filter chips, tables. Change a colour or radius here. |
| `Icon.jsx` | The icons (plain SVG, no icon package). Use `<Icon name="search" />`. |
| `AdminShell.jsx` + `AdminNav.jsx` | Sidebar (collapsible, mobile drawer), top bar, breadcrumbs, profile menu. |
| `crumbs.js` | Works out the breadcrumb trail from the address. |
| `PageHeader.jsx` | Page title + the green/red message box (`Notice`). |
| `ActionForm.jsx` | A form that runs a Server Action and shows "Saving...", errors, success and "Unsaved changes". |
| `ConfirmButton.jsx` | "Are you sure?" pop-up window before deleting. |
| `Field.jsx`, `PasswordInput.jsx`, `ImageField.jsx`, `IconField.jsx`, `FieldRenderer.jsx` | Form inputs. |
| `EmptyState.jsx`, `SearchBox.jsx`, `CopyButton.jsx`, `MediaUploader.jsx` | Empty lists, search, copy link, drag-and-drop upload. |
| `(panel)/loading.jsx`, `(panel)/error.jsx` | The loading skeleton and the "something went wrong" screen. |

The brand green is `brand` in `tailwind.config.js` (`bg-brand-500`, `text-brand-700` ...). It is only used by the admin.
