# WAPI website (Next.js)
Your static HTML site converted to **Next.js (App Router) + Tailwind CSS v3**.
Same design, same pages, same animations, now built from reusable React components.

## 1. Run it

You need **Node.js 20.9 or newer** (check with `node -v`).

```bash
npm install        # once, downloads everything
npm run dev        # development: http://localhost:3000 (auto-reloads when you save)
```

For a production build:

```bash
npm run build
npm start
```

## 2. IMPORTANT: add your logo

The logo in your original files pointed to `/api/v2/images/ref/...`, which was not
inside the zip. I put a **placeholder** at `public/logo.png`.
Replace that file with your real logo (keep the name `logo.png`) and every page updates.

## 3. Where things are

```
app/
  layout.jsx            Wraps EVERY page: fonts, header, footer, animations
  globals.css           Loads theme.css + Tailwind
  theme.css             Your WAPI design system (unchanged)
  page.jsx              Home          ->  /
  features/page.jsx     Features      ->  /features
  solutions/page.jsx    Solutions     ->  /solutions
  integrations/page.jsx Integrations  ->  /integrations
  pricing/page.jsx      Pricing       ->  /pricing
components/
  Header.jsx            Top bar + mobile menu + EN/AR switch   ("use client")
  Footer.jsx            Footer + mobile "Book a Demo" bar
  SvgSprite.jsx         All the small icons, defined once
  ScrollEffects.jsx     Fade-in on scroll + number count-up    (was assets/main.js)
  Orbit.jsx             Logos circling the WAPI icon
  DemoForm.jsx          "Book your free demo" form -> opens WhatsApp
  AnalyticsTabs.jsx     Tabs in the Features "Reports" mock
  FeatureSubNav.jsx     Sticky sub-menu on the Features page
public/                 Files served as-is (logo.png)
```

**The one rule to remember:** a folder inside `app/` becomes a URL, and the
`page.jsx` inside it is that page. To add `/about`, create `app/about/page.jsx`.

`"use client"` at the top of a file means it needs the browser (clicks, scroll,
state). Everything else is rendered on the server, which is good for speed and SEO.

## 4. Common edits

- **Change page text or colours:** edit the `page.jsx` of that page. It is HTML-like
  JSX; the only big difference is that `class` is written `className`.
- **Change a menu link or the footer:** edit `components/Header.jsx` or
  `components/Footer.jsx`. It changes on all pages at once.
- **Change page title / description (SEO):** edit `export const metadata` at the top
  of that page's `page.jsx`.
- **Change the integration logos:** edit the `orbitItems` list at the top of
  `app/page.jsx` or `app/integrations/page.jsx`.
- **Link to another page:** use `<Link href="/pricing">` (import it from
  `next/link`) instead of `<a>` for links inside your own site.

## 5. Things you may want to do next

- Pricing cards still say `AED XXX` (that is how it was in the original).
- The "Resources" menu items, Login, About, Blog, Privacy and Terms links still point to `#`.
- The EN / AR switch only changes the button highlight; there is no Arabic version yet.
- Optional upgrades: `next/font` for the Google fonts and `next/image` for the logo.

## 6. Admin panel / CMS

This project now has a database-powered admin panel at `/admin`.
See **ADMIN-GUIDE.md** for setup and an explanation of every new file.
