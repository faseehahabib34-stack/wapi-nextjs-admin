// Works out the breadcrumb trail ("Dashboard › Pages & SEO › Home page") from the address.
// Pure function (no React), so it is easy to test.
const AREA_LABELS = {
  pages: "Pages & SEO",
  navigation: "Navigation",
  pricing: "Pricing Plans",
  faqs: "FAQs",
  leads: "Demo Requests",
  settings: "Site Settings",
  media: "Media Library",
  account: "My Account",
};

// labels = { pages: { home: { label: "Home page", sections: { s01: "Hero" } } } }  (made in the layout)
export function crumbsFor(pathname, labels = {}) {
  const parts = pathname.replace(/^\/admin\/?/, "").split("/").filter(Boolean);
  const crumbs = [{ label: "Dashboard", href: "/admin" }];
  if (parts.length === 0) return crumbs;

  const [area, a, b] = parts;
  crumbs.push({ label: AREA_LABELS[area] ?? area, href: `/admin/${area}` });

  if (area === "pages" && a) {
    const page = labels.pages?.[a];
    crumbs.push({ label: page?.label ?? a, href: `/admin/pages/${a}` });
    if (b === "seo") crumbs.push({ label: "SEO", href: `/admin/pages/${a}/seo` });
    else if (b) crumbs.push({ label: page?.sections?.[b] ?? b, href: `/admin/pages/${a}/${b}` });
  } else if ((area === "faqs" || area === "pricing") && a) {
    const noun = area === "faqs" ? "question" : "plan";
    crumbs.push({ label: a === "new" ? `Add ${noun}` : `Edit ${noun}`, href: pathname });
  }
  return crumbs;
}
