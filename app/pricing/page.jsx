import Link from "next/link";
import { getText, getSettings, getPlans, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("pricing", "https://www.wapi.ae/pricing");
}
// Structured data for Google (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WAPI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://www.wapi.ae",
  "description": "WhatsApp Business API, marketing, AI agent, chatbot, team inbox and CRM automation platform for UAE businesses.",
  "publisher": {
    "@type": "Organization",
    "name": "WAPI (RedSpider Web & Art Design LLC)",
    "telephone": "+971555515475",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 1002, Burj Gate Tower, Sheikh Zayed Road, Downtown Dubai",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  }
};

export default async function PricingPage() {
  const t = await getText("pricing"); // texts from the database
  const settings = await getSettings();
  const plans = await getPlans(); // pricing cards from the database
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {t.show("s01") && (<section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 50% at 50% 0%,#E3F7EF 0%,transparent 70%)" }} />
          <div className="wrap pt-16 md:pt-24 pb-10 text-center rv">
            <h1 className="h1 max-w-3xl mx-auto" style={{ fontSize: "36px", fontWeight: "700" }}>{t("hero.title")}</h1>
            <p className="lead mt-5 max-w-2xl mx-auto">
              {t("hero.lead")}
            </p>
          </div>
        </section>)}
        {t.show("s02") && (<section className="pb-24">
          <div className="wrap grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {plans.map((plan, i) => {
              const dark = plan.style === "DARK";
              const popular = plan.style === "POPULAR";
              const delay = ["", " rv-d1", " rv-d2", " rv-d3"][i] ?? " rv-d3";
              const link = plan.buttonLink.replace("{whatsapp}", settings.whatsappUrl);
              const cardClass =
                "card p-7 flex flex-col rv" + delay +
                (popular ? " relative !border-[#0FAF7A] !border-2 shadow-xl" : "") +
                (dark ? " !bg-[#0A1A24] !border-[#0A1A24] text-white" : "");
              const buttonClass = dark
                ? "btn !bg-white !text-[#0A1A24] justify-center mt-6"
                : popular
                ? "btn btn-primary justify-center mt-6"
                : "btn btn-ghost justify-center mt-6";
              return (
                <div key={plan.id ?? plan.name} className={cardClass}>
                  {popular && <span className="absolute -top-3 left-7 tag bg-[#0FAF7A] text-white !text-xs !py-1 !px-3">{t("s02.t001")}</span>}
                  <h2 className={"display text-xl font-bold" + (dark ? " !text-white" : "")}>{plan.name}</h2>
                  <p className={"text-sm font-semibold mt-1 " + (dark ? "text-[#7FE0B6]" : "text-[#067955]")}>{plan.tagline}</p>
                  <p className={"text-sm mt-3 " + (dark ? "text-[#B7C4CE]" : "text-[#33475B]")}>{plan.description || <br />}</p>
                  <div className="mt-6">
                    <span className={"display text-3xl font-bold" + (dark ? " !text-white" : "")}>{plan.price}</span>
                    {plan.priceSuffix && <span className="text-[#6B7C8C]">{plan.priceSuffix}</span>}
                  </div>
                  {link.startsWith("/") ? (
                    <Link href={link} className={buttonClass}>{plan.buttonText}</Link>
                  ) : (
                    <a href={link} className={buttonClass}>{plan.buttonText}</a>
                  )}
                  <p className={"text-xs font-bold tracking-widest mt-7 " + (dark ? "text-[#7F93A3]" : "text-[#6B7C8C]")}>{plan.featuresHeading}</p>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {plan.features.map((feature, n) => (
                      <li key={feature.id ?? n} className={"check" + (dark ? " !text-[#D5DEE5]" : "")}>{feature.text}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>)}
        {t.show("s03") && (<section className="section soft">
          <div className="wrap text-center rv">
            <h2 className="h2 max-w-2xl mx-auto">{t("cta.title")}</h2>
            <p className="lead mt-4">{t("cta.text")}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href={t("s03.l001")} className="btn btn-primary">{t("s03.t001")}</Link>
              <a href={settings.whatsappUrl} className="btn btn-ghost">{t("s03.t002")}</a>
            </div>
          </div>
        </section>)}
      </main>
    </>
  );
}
