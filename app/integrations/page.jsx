import Link from "next/link";
import { OrbitSpokes, OrbitLogos } from "@/components/Orbit";
import { getText, getSettings, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("integrations", "https://www.wapi.ae/integrations");
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

// Companies shown around the WAPI icon: [name, short label, colour]
const orbitItems = [
  ["Zivora.ONE", "ZO", "#0A1A24"],
  ["Zoho CRM", "Z", "#E42527"],
  ["HubSpot", "H", "#FF7A59"],
  ["Salesforce", "SF", "#00A1E0"],
  ["Shopify", "S", "#5E8E3E"],
  ["WooCommerce", "W", "#7F54B3"],
  ["Google Calendar", "31", "#1A73E8"],
  ["Custom CRM", "CRM", "#2F6BFF"],
  ["API & Webhooks", "API", "#0FAF7A"],
];

export default async function IntegrationsPage() {
  const t = await getText("integrations"); // texts from the database
  const settings = await getSettings();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* HERO */}
        {t.show("s01") && (<section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(55% 50% at 80% 20%,#E3F7EF 0%,transparent 70%),radial-gradient(40% 40% at 0% 80%,#EEF4FF 0%,transparent 70%)" }} />
          <div className="wrap pt-14 md:pt-20 pb-16 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
            <div className="rv">
              <h1 className="h1" style={{ fontSize: "36px" }}>{t("hero.title")}</h1>
              <p className="lead mt-6 max-w-xl">{t("hero.lead")}</p>
              <p className="mt-3 text-[#6B7C8C] max-w-xl leading-relaxed">
                {t("hero.sub")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={t("s01.l001")} className="btn btn-primary">
                  {t("s01.t001")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s01.i001")} />
                  </svg>
                </Link>
                <a href={t("s01.l002")} className="btn btn-ghost">{t("s01.t002")}</a>
              </div>
            </div>
            <div className="relative aspect-square max-w-[520px] w-full mx-auto rv rv-d2 scale-[.85] sm:scale-100" data-anim="" id="orbit">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#DCE6E1" strokeWidth=".3" strokeDasharray="1 1.5" />
                <g id="spokes" stroke="#0FAF7A" strokeWidth=".35" className="flow-line" opacity=".55">
                  <OrbitSpokes items={orbitItems} radius={[38]} />
                </g>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-[28%] bg-white shadow-2xl grid place-items-center border border-[#E6ECF0]">
                <img src={settings.logo} alt="WAPI" className="w-[85%]" />
              </div>
              <div id="logos">
                <OrbitLogos items={orbitItems} radius={[38]} tileClass="w-12 h-12" labelClass="text-[11px]" />
              </div>
            </div>
          </div>
        </section>)}
        {/* DIRECTORY */}
        {t.show("s02") && (<section id="all" className="pb-8 scroll-mt-24">
          <div className="wrap grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 rv">
            <a href={t("s02.l001")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[11px] font-extrabold text-white" style={{ background: "#0A1A24" }}>{t("s02.t001")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t002")}</div>
            </a>
            {" "}
            <a href={t("s02.l002")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[11px] font-extrabold text-white" style={{ background: "#2F6BFF" }}>{t("s02.t003")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t004")}</div>
            </a>
            {" "}
            <a href={t("s02.l003")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[13px] font-extrabold text-white" style={{ background: "#E42527" }}>{t("s02.t005")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t006")}</div>
            </a>
            {" "}
            <a href={t("s02.l004")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[13px] font-extrabold text-white" style={{ background: "#FF7A59" }}>{t("s02.t007")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t008")}</div>
            </a>
            {" "}
            <a href={t("s02.l005")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[11px] font-extrabold text-white" style={{ background: "#00A1E0" }}>{t("s02.t009")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t010")}</div>
            </a>
            {" "}
            <a href={t("s02.l006")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[13px] font-extrabold text-white" style={{ background: "#5E8E3E" }}>{t("s02.t011")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t012")}</div>
            </a>
            {" "}
            <a href={t("s02.l007")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[13px] font-extrabold text-white" style={{ background: "#7F54B3" }}>{t("s02.t013")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t014")}</div>
            </a>
            {" "}
            <a href={t("s02.l008")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[11px] font-extrabold text-white" style={{ background: "#1A73E8" }}>{t("s02.t015")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t016")}</div>
            </a>
            {" "}
            <a href={t("s02.l009")} className="card card-hover p-3 text-center">
              <span className="mx-auto w-10 h-10 rounded-xl grid place-items-center text-[10px] font-extrabold text-white" style={{ background: "#0FAF7A" }}>{t("s02.t017")}</span>
              <div className="mt-2 text-xs font-semibold">{t("s02.t018")}</div>
            </a>
          </div>
        </section>)}
        {/* ZIVORA */}
        {t.show("s03") && (<section id="zivora" className="section scroll-mt-24">
          <div className="wrap">
            <div className="rounded-[32px] p-6 md:p-12 grid lg:grid-cols-2 gap-12 items-center rv" style={{ background: "#0A1A24" }}>
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl grid place-items-center text-xs font-extrabold bg-white text-[#0A1A24]">{t("s03.t001")}</span>
                  <b className="text-white text-lg">{t("s03.t002")}</b>
                </div>
                <h2 className="h2 !text-white mt-6" style={{ fontSize: "36px" }}>{t("s03.t003")}</h2>
                <p className="mt-4 text-[#C9D5DD] text-lg leading-relaxed">
                  {t("s03.t004")}
                </p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-[15px]">
                  <li className="check !text-[#D5DEE5]">{t("s03.t005")}</li>
                  <li className="check !text-[#D5DEE5]">{t("s03.t006")}</li>
                  <li className="check !text-[#D5DEE5]">{t("s03.t007")}</li>
                  <li className="check !text-[#D5DEE5]">{t("s03.t008")}</li>
                  <li className="check !text-[#D5DEE5]">{t("s03.t009")}</li>
                  <li className="check !text-[#D5DEE5]">{t("s03.t010")}</li>
                </ul>
              </div>
              <div className="ui !bg-[#0F2331] !border-white/10" data-anim="">
                <div className="ui-bar !bg-white/5 !border-white/10">
                  <i />
                  <i />
                  <i />
                  <span className="ml-3 text-xs font-semibold text-[#7F93A3]">{t("s03.t011")}</span>
                  <span className="ml-auto tag bg-[#0FAF7A] text-white">{t("s03.t012")}</span>
                </div>
                <div className="p-5 space-y-2.5 text-[13px] text-white">
                  <div className="msg flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <svg width="18" height="18" className="text-[#25D366]">
                      <use href={"#" + t("s03.i001")} />
                    </svg>
                    <div className="flex-1">
                      <b>{t("s03.t013")}</b>
                      <div className="text-[11px] text-[#7F93A3]">{t("s03.t014")}</div>
                    </div>
                    <span className="tag bg-[#0FAF7A]/20 text-[#3DDC97]">{t("s03.t015")}</span>
                  </div>
                  <div className="msg flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <svg width="18" height="18" className="text-[#3DDC97]">
                      <use href={"#" + t("s03.i002")} />
                    </svg>
                    <div className="flex-1">
                      <b>{t("s03.t016")}</b>
                      <div className="text-[11px] text-[#7F93A3]">{t("s03.t017")}</div>
                    </div>
                    <span className="tag bg-white/10 text-white">{t("s03.t018")}</span>
                  </div>
                  <div className="msg flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <span className="avatar !w-6 !h-6 !text-[9px]" style={{ background: "#2F6BFF" }}>{t("s03.t019")}</span>
                    <div className="flex-1">
                      <b>{t("s03.t020")}</b>
                      <div className="text-[11px] text-[#7F93A3]">{t("s03.t021")}</div>
                    </div>
                  </div>
                  <div className="msg flex items-center gap-3 rounded-xl bg-white/5 p-3">
                    <svg width="18" height="18" className="text-[#F5A524]">
                      <use href={"#" + t("s03.i003")} />
                    </svg>
                    <div className="flex-1">
                      <b>{t("s03.t022")}</b>
                      <div className="text-[11px] text-[#7F93A3]">{t("s03.t023")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* CRM */}
        {t.show("s04") && (<section id="crm" className="section soft scroll-mt-24">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rv">
                <h2 className="h2" style={{ fontSize: "32px" }}>{t("s04.t001")}</h2>
                <p className="lead mt-5">{t("s04.t002")}</p>
                <p className="mt-3 text-[#33475B] leading-relaxed">
                  {t("s04.t003")}
                </p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-[15px]">
                  <li className="check">{t("s04.t004")}</li>
                  <li className="check">{t("s04.t005")}</li>
                  <li className="check">{t("s04.t006")}</li>
                  <li className="check">{t("s04.t007")}</li>
                  <li className="check">{t("s04.t008")}</li>
                  <li className="check">{t("s04.t009")}</li>
                </ul>
              </div>
              <div className="rv rv-d2" data-anim="">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="ui p-4 text-[12px]">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" className="text-[#25D366]">
                        <use href={"#" + t("s04.i001")} />
                      </svg>
                      <b>{t("s04.t010")}</b>
                    </div>
                    <div className="wa-bg rounded-lg p-2 mt-3 space-y-1.5">
                      <div className="bubble b-in msg !text-[11px]">{t("s04.t011")}</div>
                      <div className="bubble b-out msg !text-[11px]">{t("s04.t012")}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[#0FAF7A]">
                    <svg width="40" height="10">
                      <line className="flow-line" x1="0" y1="5" x2="40" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                    </svg>
                    <span className="text-[10px] font-bold">{t("s04.t013")}</span>
                    <svg width="40" height="10">
                      <line className="flow-line" x1="0" y1="5" x2="40" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="ui p-4 text-[12px]">
                    <b>{t("s04.t014")}</b>
                    <dl className="mt-3 space-y-1.5">
                      <div className="msg flex justify-between">
                        <dt className="text-[#6B7C8C]">{t("s04.t015")}</dt>
                        <dd className="font-semibold">{t("s04.t016")}</dd>
                      </div>
                      <div className="msg flex justify-between">
                        <dt className="text-[#6B7C8C]">{t("s04.t017")}</dt>
                        <dd className="font-semibold">{t("s04.t018")}</dd>
                      </div>
                      <div className="msg flex justify-between">
                        <dt className="text-[#6B7C8C]">{t("s04.t019")}</dt>
                        <dd className="font-semibold">{t("s04.t020")}</dd>
                      </div>
                      <div className="msg flex justify-between">
                        <dt className="text-[#6B7C8C]">{t("s04.t021")}</dt>
                        <dd>
                          <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s04.t022")}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 grid lg:grid-cols-3 gap-5">
              <div id="zoho" className="card card-hover p-7 scroll-mt-28 rv">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold text-white" style={{ background: "#E42527" }}>{t("s04.t023")}</span>
                  <b>{t("s04.t024")}</b>
                </div>
                <h3 className="display text-xl font-bold mt-5 leading-snug">{t("s04.t025")}</h3>
                <p className="text-sm text-[#33475B] mt-2 leading-relaxed">
                  {t("s04.t026")}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="check">{t("s04.t027")}</li>
                  <li className="check">{t("s04.t028")}</li>
                  <li className="check">{t("s04.t029")}</li>
                  <li className="check">{t("s04.t030")}</li>
                  <li className="check">{t("s04.t031")}</li>
                  <li className="check">{t("s04.t032")}</li>
                </ul>
              </div>
              <div id="hubspot" className="card card-hover p-7 scroll-mt-28 rv rv-d1">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold text-white" style={{ background: "#FF7A59" }}>{t("s04.t033")}</span>
                  <b>{t("s04.t034")}</b>
                </div>
                <h3 className="display text-xl font-bold mt-5 leading-snug">{t("s04.t035")}</h3>
                <p className="text-sm text-[#33475B] mt-2 leading-relaxed">{t("s04.t036")}</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="check">{t("s04.t037")}</li>
                  <li className="check">{t("s04.t038")}</li>
                  <li className="check">{t("s04.t039")}</li>
                  <li className="check">{t("s04.t040")}</li>
                  <li className="check">{t("s04.t041")}</li>
                  <li className="check">{t("s04.t042")}</li>
                </ul>
              </div>
              <div id="salesforce" className="card card-hover p-7 scroll-mt-28 rv rv-d2">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl grid place-items-center text-xs font-extrabold text-white" style={{ background: "#00A1E0" }}>{t("s04.t043")}</span>
                  <b>{t("s04.t044")}</b>
                </div>
                <h3 className="display text-xl font-bold mt-5 leading-snug">{t("s04.t045")}</h3>
                <p className="text-sm text-[#33475B] mt-2 leading-relaxed">{t("s04.t046")}</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="check">{t("s04.t047")}</li>
                  <li className="check">{t("s04.t048")}</li>
                  <li className="check">{t("s04.t049")}</li>
                  <li className="check">{t("s04.t050")}</li>
                  <li className="check">{t("s04.t051")}</li>
                  <li className="check">{t("s04.t052")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>)}
        {/* ECOMMERCE */}
        {t.show("s05") && (<section className="section">
          <div className="wrap grid lg:grid-cols-2 gap-6">
            <div id="shopify" className="rounded-[32px] p-6 md:p-10 scroll-mt-24 rv" style={{ background: "#F2F8EE" }}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold text-white" style={{ background: "#5E8E3E" }}>{t("s05.t001")}</span>
                <b>{t("s05.t002")}</b>
              </div>
              <h2 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight">{t("s05.t003")}</h2>
              <p className="text-[#33475B] mt-3 leading-relaxed">{t("s05.t004")}</p>
              <div className="mt-6 rounded-2xl wa-bg p-3 space-y-1.5 max-w-sm" data-anim="">
                <div className="bubble b-in msg !text-[12px]">{t("s05.t005")}</div>
                <div className="msg bg-white rounded-lg text-center text-[12px] font-bold text-[#2F6BFF] py-1.5">{t("s05.t006")}</div>
                <div className="bubble b-in msg !text-[12px]">{t("s05.t007")}</div>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                <li className="check">{t("s05.t008")}</li>
                <li className="check">{t("s05.t009")}</li>
                <li className="check">{t("s05.t010")}</li>
                <li className="check">{t("s05.t011")}</li>
                <li className="check">{t("s05.t012")}</li>
                <li className="check">{t("s05.t013")}</li>
                <li className="check">{t("s05.t014")}</li>
              </ul>
            </div>
            <div id="woocommerce" className="rounded-[32px] p-6 md:p-10 scroll-mt-24 rv rv-d1" style={{ background: "#F5F1FC" }}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold text-white" style={{ background: "#7F54B3" }}>{t("s05.t015")}</span>
                <b>{t("s05.t016")}</b>
              </div>
              <h2 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight">{t("s05.t017")}</h2>
              <p className="text-[#33475B] mt-3 leading-relaxed">
                {t("s05.t018")}
              </p>
              <ol className="mt-6 space-y-2 max-w-sm text-[13px]" data-anim="">
                <li className="msg flex items-center justify-between rounded-xl bg-white px-4 py-2.5 shadow-sm">
                  <span>{t("s05.t019")}</span>
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s05.t020")}</span>
                </li>
                <li className="msg flex items-center justify-between rounded-xl bg-white px-4 py-2.5 shadow-sm">
                  <span>{t("s05.t021")}</span>
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s05.t022")}</span>
                </li>
                <li className="msg flex items-center justify-between rounded-xl bg-white px-4 py-2.5 shadow-sm">
                  <span>{t("s05.t023")}</span>
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s05.t024")}</span>
                </li>
              </ol>
              <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                <li className="check">{t("s05.t025")}</li>
                <li className="check">{t("s05.t026")}</li>
                <li className="check">{t("s05.t027")}</li>
                <li className="check">{t("s05.t028")}</li>
                <li className="check">{t("s05.t029")}</li>
                <li className="check">{t("s05.t030")}</li>
                <li className="check">{t("s05.t031")}</li>
              </ul>
            </div>
          </div>
        </section>)}
        {/* CALENDAR */}
        {t.show("s06") && (<section id="calendar" className="section soft scroll-mt-24">
          <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="rv">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl grid place-items-center text-xs font-extrabold text-white" style={{ background: "#1A73E8" }}>{t("s06.t001")}</span>
                <b>{t("s06.t002")}</b>
              </div>
              <h2 className="h2 mt-5" style={{ fontSize: "36px" }}>{t("s06.t003")}</h2>
              <p className="lead mt-5">{t("s06.t004")}</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-[15px]">
                <li className="check">{t("s06.t005")}</li>
                <li className="check">{t("s06.t006")}</li>
                <li className="check">{t("s06.t007")}</li>
                <li className="check">{t("s06.t008")}</li>
                <li className="check">{t("s06.t009")}</li>
                <li className="check">{t("s06.t010")}</li>
              </ul>
              <p className="mt-7 text-sm text-[#6B7C8C]">{t("s06.t011")}</p>
            </div>
            <div className="grid sm:grid-cols-[230px_1fr] gap-4 items-center rv rv-d2" data-anim="">
              <div className="phone !w-[230px] mx-auto">
                <div className="phone-in">
                  <div className="bg-[#075E54] text-white px-3 pt-5 pb-2 text-xs font-bold">{t("s06.t012")}</div>
                  <div className="wa-bg p-2 flex flex-col gap-1.5 h-[300px] justify-end text-[11px]">
                    <div className="bubble b-out msg !text-[11px]">{t("s06.t013")}</div>
                    <div className="bubble b-in msg !text-[11px]">{t("s06.t014")}</div>
                    <div className="bubble b-out msg !text-[11px]">{t("s06.t015")}</div>
                    <div className="bubble b-in msg !text-[11px]">{t("s06.t016")}</div>
                  </div>
                </div>
              </div>
              <div className="ui p-4 text-[12px]">
                <div className="flex justify-between items-center">
                  <b>{t("s06.t017")}</b>
                  <span className="text-[#6B7C8C]">{t("s06.t018")}</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex gap-2">
                    <span className="w-10 text-[#6B7C8C]">{t("s06.t019")}</span>
                    <div className="flex-1 rounded-md bg-[#F5F8F7] px-2 py-1.5">{t("s06.t020")}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-10 text-[#6B7C8C]">{t("s06.t021")}</span>
                    <div className="flex-1 rounded-md bg-[#F5F8F7] px-2 py-1.5">{t("s06.t022")}</div>
                  </div>
                  <div className="flex gap-2 msg">
                    <span className="w-10 text-[#6B7C8C]">{t("s06.t023")}</span>
                    <div className="flex-1 rounded-md bg-[#E8F0FE] border-l-4 border-[#1A73E8] px-2 py-1.5 font-semibold">{t("s06.t024")}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-10 text-[#6B7C8C]">{t("s06.t025")}</span>
                    <div className="flex-1 rounded-md border border-dashed border-[#E6ECF0] px-2 py-1.5 text-[#B7C4CE]">{t("s06.t026")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* API */}
        {t.show("s07") && (<section id="api" className="section scroll-mt-24">
          <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
            <div className="rv">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl grid place-items-center text-[10px] font-extrabold text-white" style={{ background: "#0FAF7A" }}>{t("s07.t001")}</span>
                <b>{t("s07.t002")}</b>
              </div>
              <h2 className="h2 mt-5">{t("s07.t003")}</h2>
              <p className="lead mt-5">{t("s07.t004")}</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-y-3 gap-x-4 text-[15px]">
                <li className="check">{t("s07.t005")}</li>
                <li className="check">{t("s07.t006")}</li>
                <li className="check">{t("s07.t007")}</li>
                <li className="check">{t("s07.t008")}</li>
                <li className="check">{t("s07.t009")}</li>
                <li className="check">{t("s07.t010")}</li>
                <li className="check">{t("s07.t011")}</li>
              </ul>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-2xl rv rv-d2" style={{ background: "#0A1A24" }}>
              <div className="flex gap-1 px-4 pt-3 text-[11px] font-bold">
                <span className="px-3 py-1.5 rounded-t-lg bg-[#10283A] text-white">{t("s07.t012")}</span>
                <span className="px-3 py-1.5 text-[#7F93A3]">{t("s07.t013")}</span>
              </div>
              <pre className="bg-[#10283A] p-5 text-[12px] leading-relaxed overflow-x-auto text-[#C9D5DD]">
                <code>
                  <span className="text-[#3DDC97]">
                    {"POST"}
                  </span>
                  {" /v1/messages\n{\n  "}
                  <span className="text-[#7FB8FF]">
                    {"\"to\""}
                  </span>
                  {": "}
                  <span className="text-[#F5C26B]">
                    {"\"+9715XXXXXXXX\""}
                  </span>
                  {",\n  "}
                  <span className="text-[#7FB8FF]">
                    {"\"template\""}
                  </span>
                  {": "}
                  <span className="text-[#F5C26B]">
                    {"\"order_confirmation\""}
                  </span>
                  {",\n  "}
                  <span className="text-[#7FB8FF]">
                    {"\"params\""}
                  </span>
                  {": ["}
                  <span className="text-[#F5C26B]">
                    {"\"Sara\""}
                  </span>
                  {", "}
                  <span className="text-[#F5C26B]">
                    {"\"#2291\""}
                  </span>
                  {"]\n}\n\n"}
                  <span className="text-[#7F93A3]">
                    {"// Webhook → your system"}
                  </span>
                  {"\n{\n  "}
                  <span className="text-[#7FB8FF]">
                    {"\"event\""}
                  </span>
                  {": "}
                  <span className="text-[#F5C26B]">
                    {"\"message.received\""}
                  </span>
                  {",\n  "}
                  <span className="text-[#7FB8FF]">
                    {"\"lead_status\""}
                  </span>
                  {": "}
                  <span className="text-[#F5C26B]">
                    {"\"qualified\""}
                  </span>
                  {"\n}"}
                </code>
              </pre>
              <p className="px-5 py-3 text-[11px] text-[#7F93A3]">{t("s07.t014")}</p>
            </div>
          </div>
        </section>)}
        {/* WORKFLOW */}
        {t.show("s08") && (<section className="section soft">
          <div className="wrap text-center">
            <h2 className="h2 max-w-3xl mx-auto rv" style={{ fontSize: "36px" }}>{t("s08.t001")}</h2>
            <p className="lead mt-5 max-w-2xl mx-auto rv">{t("s08.t002")}</p>
            <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-0 rv" data-anim="">
              <div className="node msg justify-center">
                <span className="icon-tile !w-9 !h-9 !bg-[#E7F9EE] text-[#25D366]">
                  <svg>
                    <use href={"#" + t("s08.i001")} />
                  </svg>
                </span>
                {t("s08.t003")}
              </div>
              <svg className="hidden md:block" width="48" height="10">
                <line className="flow-line" x1="0" y1="5" x2="48" y2="5" stroke="#0FAF7A" strokeWidth="2" />
              </svg>
              <div className="node msg justify-center !border-[#0FAF7A]">
                <span className="icon-tile !w-9 !h-9 !bg-[#0FAF7A] text-white">
                  <svg>
                    <use href={"#" + t("s08.i002")} />
                  </svg>
                </span>
                {t("s08.t004")}
              </div>
              <svg className="hidden md:block" width="48" height="10">
                <line className="flow-line" x1="0" y1="5" x2="48" y2="5" stroke="#0FAF7A" strokeWidth="2" />
              </svg>
              <div className="node msg justify-center">
                <span className="icon-tile !w-9 !h-9 !bg-[#EEF4FF] text-[#2F6BFF]">
                  <svg>
                    <use href={"#" + t("s08.i003")} />
                  </svg>
                </span>
                {t("s08.t005")}
              </div>
              <svg className="hidden md:block" width="48" height="10">
                <line className="flow-line" x1="0" y1="5" x2="48" y2="5" stroke="#0FAF7A" strokeWidth="2" />
              </svg>
              <div className="node msg justify-center">
                <span className="icon-tile !w-9 !h-9">
                  <svg>
                    <use href={"#" + t("s08.i004")} />
                  </svg>
                </span>
                {t("s08.t006")}
              </div>
              <svg className="hidden md:block" width="48" height="10">
                <line className="flow-line" x1="0" y1="5" x2="48" y2="5" stroke="#0FAF7A" strokeWidth="2" />
              </svg>
              <div className="node msg justify-center">
                <span className="icon-tile !w-9 !h-9 !bg-[#FFF6E5] text-[#A96A00]">
                  <svg>
                    <use href={"#" + t("s08.i005")} />
                  </svg>
                </span>
                {t("s08.t007")}
              </div>
            </div>
            <p className="mt-10 text-[#33475B] max-w-xl mx-auto rv">{t("s08.t008")}</p>
          </div>
        </section>)}
        {/* CTA */}
        {t.show("s09") && (<section className="section">
          <div className="wrap">
            <div className="rounded-[32px] p-8 md:p-14 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center rv" style={{ background: "radial-gradient(70% 90% at 100% 0%,#0E6B55 0%,transparent 60%),radial-gradient(60% 80% at 0% 100%,#113A7A 0%,transparent 60%),#0A1A24" }}>
              <div>
                <h2 className="h2 !text-white" style={{ fontSize: "36px" }}>{t("s09.t001")}</h2>
                <p className="mt-4 text-lg text-[#C9D5DD]">{t("s09.t002")}</p>
                <p className="mt-2 text-[#C9D5DD] leading-relaxed">
                  {t("s09.t003")}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href={t("s09.l001")} className="btn btn-primary">{t("s09.t004")}</Link>
                <a href={settings.whatsappUrl} className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20">
                  <svg width="18" height="18">
                    <use href={"#" + t("s09.i001")} />
                  </svg>
                  {t("s09.t005")}
                </a>
              </div>
            </div>
          </div>
        </section>)}
      </main>
    </>
  );
}
