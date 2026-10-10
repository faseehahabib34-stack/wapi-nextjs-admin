import Link from "next/link";
import { getSettings, getMenu } from "@/lib/content";

// One link of a footer column (internal -> <Link>, otherwise <a>)
function FooterLink({ item }) {
  if (item.openInNewTab) return <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>;
  if (item.href.startsWith("/")) return <Link href={item.href}>{item.label}</Link>;
  return <a href={item.href}>{item.label}</a>;
}

// Everything here comes from the database: logo, texts, contact info, menus, social links.
export default async function Footer() {
  const s = await getSettings();
  const [product, solutions, company, social] = await Promise.all([
    getMenu("FOOTER_PRODUCT"),
    getMenu("FOOTER_SOLUTIONS"),
    getMenu("FOOTER_COMPANY"),
    getMenu("SOCIAL"),
  ]);
  const columns = [
    [s.productTitle, product],
    [s.solutionsTitle, solutions],
    [s.companyTitle, company],
  ];

  return (
    <>
      <footer className="border-t border-[#E6ECF0] pt-16 pb-28 md:pb-10">
        <div className="wrap grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <img src={s.logo} alt={s.logoAlt} className="h-10" />
            <p className="mt-4 font-semibold">{s.footerTitle}</p>
            <p className="mt-2 text-sm text-[#6B7C8C] leading-relaxed max-w-sm">
              {s.footerText}
            </p>
            <address className="not-italic mt-5 text-sm text-[#33475B] space-y-1.5">
              <div>{s.address}</div>
              <div>
                <a href={s.telHref} className="font-semibold hover:text-[#067955]">{s.phone}</a>
              </div>
              {s.email && (
                <div>
                  <a href={`mailto:${s.email}`} className="font-semibold hover:text-[#067955]">{s.email}</a>
                </div>
              )}
            </address>
            {social.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#33475B]">
                {social.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#067955]">{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {columns.map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-widest text-[#6B7C8C]">{title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-[#33475B]">
                {items.map((item, i) => (
                  <li key={i}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="wrap mt-12 pt-6 border-t border-[#E6ECF0] flex flex-col md:flex-row justify-between gap-3 text-xs text-[#6B7C8C]">
          <span>{s.copyright}</span>
          <span>{s.trademark}</span>
        </div>
      </footer>
      <div className="mcta md:hidden flex gap-2">
        <Link href={s.footerCtaLink} className="btn btn-primary flex-1 justify-center shadow-xl">{s.footerCtaText}</Link>
        <a href={s.whatsappUrl} aria-label="WhatsApp us" className="btn !bg-[#25D366] !text-white !px-4 shadow-xl">
          <svg width="22" height="22">
            <use href="#i-wa" />
          </svg>
        </a>
      </div>
    </>
  );
}
