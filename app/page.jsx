import { OrbitSpokes, OrbitLogos } from "@/components/Orbit";
import DemoForm from "@/components/DemoForm";
import { getText, getSettings, getFaqs, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("home", "https://www.wapi.ae/");
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

// Companies shown around the WAPI icon in the "Integrations" section: [name, short label, colour]
const orbitItems = [
  ["Zivora.ONE", "ZO", "#0A1A24"],
  ["Zoho CRM", "Z", "#E42527"],
  ["HubSpot", "H", "#FF7A59"],
  ["Salesforce", "SF", "#00A1E0"],
  ["Shopify", "S", "#5E8E3E"],
  ["WooCommerce", "W", "#7F54B3"],
  ["Website Forms", "</>", "#0EA5A4"],
  ["Google Sheets", "GS", "#1E8E3E"],
  ["Internal CRM", "CRM", "#2F6BFF"],
  ["ERP Systems", "ERP", "#33475B"],
  ["Custom APIs", "API", "#0FAF7A"],
  ["Webhooks", "↯", "#F5A524"],
];

export default async function HomePage() {
  const t = await getText("home"); // texts from the database
  const settings = await getSettings(); // phone, WhatsApp link...
  const faqs = await getFaqs(); // FAQ questions
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* 1 HERO */}
        {t.show("s01") && (<section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 50% at 85% 10%,#E3F7EF 0%,transparent 70%),radial-gradient(40% 40% at 0% 60%,#EEF4FF 0%,transparent 70%)" }} />
          <div className="wrap pt-14 md:pt-20 pb-20 grid lg:grid-cols-[1.02fr_1fr] gap-14 items-center">
            <div className="rv">
              <h1 className="h1" style={{ fontSize: "48px" }}>
                {t("hero.titleStart")}{" "}
                <span className="grad-text">{t("hero.titleGradient")}</span>
                {" "}{t("hero.titleEnd")}
              </h1>
              <p className="lead mt-6 max-w-xl">
                {t("hero.lead")}
              </p>
              <p className="mt-4 text-[#6B7C8C] max-w-xl leading-relaxed">
                {t("hero.sub")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={t("s01.l001")} className="btn btn-primary">
                  {t("hero.primaryButton")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s01.i001")} />
                  </svg>
                </a>
                <a href={t("s01.l002")} className="btn btn-ghost">{t("hero.secondaryButton")}</a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-2">
                <li className="chip">
                  <svg width="14" height="14" className="text-[#0FAF7A]">
                    <use href={"#" + t("s01.i002")} />
                  </svg>
                  {t("s01.t001")}
                </li>
                <li className="chip">
                  <svg width="14" height="14" className="text-[#0FAF7A]">
                    <use href={"#" + t("s01.i003")} />
                  </svg>
                  {t("s01.t002")}
                </li>
                <li className="chip">
                  <svg width="14" height="14" className="text-[#0FAF7A]">
                    <use href={"#" + t("s01.i004")} />
                  </svg>
                  {t("s01.t003")}
                </li>
                <li className="chip">
                  <svg width="14" height="14" className="text-[#0FAF7A]">
                    <use href={"#" + t("s01.i005")} />
                  </svg>
                  {t("s01.t004")}
                </li>
                <li className="chip">
                  <svg width="14" height="14" className="text-[#0FAF7A]">
                    <use href={"#" + t("s01.i006")} />
                  </svg>
                  {t("s01.t005")}
                </li>
              </ul>
            </div>
            {/* hero visual */}
            <div className="relative rv rv-d2" data-anim="">
              <div className="ui ml-0 md:ml-8" id="hero-ui">
                <div className="ui-bar">
                  <i />
                  <i />
                  <i />
                  <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s01.t006")}</span>
                </div>
                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[150px_1fr_155px] text-[13px] min-h-[380px]">
                  <div className="border-r border-[#E6ECF0] p-2 space-y-1 bg-[#FAFBFC]">
                    <div className="px-2 py-1.5 text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s01.t007")}</div>
                    <div className="flex gap-2 items-center p-2 rounded-lg bg-white shadow-sm">
                      <span className="avatar" style={{ background: "#0FAF7A" }}>{t("s01.t008")}</span>
                      <div className="min-w-0">
                        <b className="block truncate">{t("s01.t009")}</b>
                        <span className="text-[11px] text-[#6B7C8C] truncate block">{t("s01.t010")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center p-2 rounded-lg">
                      <span className="avatar" style={{ background: "#2F6BFF" }}>{t("s01.t011")}</span>
                      <div className="min-w-0">
                        <b className="block truncate">{t("s01.t012")}</b>
                        <span className="text-[11px] text-[#6B7C8C] truncate block">{t("s01.t013")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center p-2 rounded-lg">
                      <span className="avatar" style={{ background: "#6B3FD6" }}>{t("s01.t014")}</span>
                      <div className="min-w-0">
                        <b className="block truncate">{t("s01.t015")}</b>
                        <span className="text-[11px] text-[#6B7C8C] truncate block">{t("s01.t016")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center p-2 rounded-lg">
                      <span className="avatar" style={{ background: "#F5A524" }}>{t("s01.t017")}</span>
                      <div className="min-w-0">
                        <b className="block truncate">{t("s01.t018")}</b>
                        <span className="text-[11px] text-[#6B7C8C] truncate block">{t("s01.t019")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="wa-bg p-4 flex flex-col gap-2 justify-end">
                    <div className="bubble b-in msg">{t("s01.t020")}</div>
                    <div className="bubble b-ai msg">
                      <span className="text-[10px] font-bold text-[#067955] block mb-0.5">{t("s01.t021")}</span>
                      {t("s01.t022")}
                    </div>
                    <div className="bubble b-in msg">{t("s01.t023")}</div>
                    <div className="bubble b-ai msg">
                      <span className="text-[10px] font-bold text-[#067955] block mb-0.5">{t("s01.t024")}</span>
                      {t("s01.t025")}
                    </div>
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#067955]">{t("s01.t026")}</span>
                    </div>
                  </div>
                  <div className="hidden md:block border-l border-[#E6ECF0] p-3 space-y-3">
                    <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s01.t027")}</div>
                    <div>
                      <b>{t("s01.t028")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s01.t029")}</div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s01.t030")}</span>
                      <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s01.t031")}</span>
                      <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s01.t032")}</span>
                    </div>
                    <div className="text-[11px] text-[#6B7C8C]">{t("s01.t033")}</div>
                    <b className="-mt-2 block">{t("s01.t034")}</b>
                    <div className="text-[11px] text-[#6B7C8C]">{t("s01.t035")}</div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ "--w": "66%" }} />
                    </div>
                    <div className="text-[11px] text-[#6B7C8C]">{t("s01.t036")}</div>
                  </div>
                </div>
              </div>
              {/* floating stats */}
              <div className="absolute -left-2 md:-left-6 -bottom-8 card !rounded-2xl p-4 w-[210px] shadow-xl hidden sm:block">
                <div className="text-xs font-semibold text-[#6B7C8C]">{t("s01.t037")}</div>
                <div className="flex items-end gap-2 mt-1">
                  <span className="display text-3xl font-bold" data-count="68" data-suffix="%">0%</span>
                  <span className="text-xs font-bold text-[#067955] mb-1">{t("s01.t038")}</span>
                </div>
                <div className="flex items-end gap-1 h-10 mt-2">
                  <i className="flex-1 rounded bg-[#D7F3E6] h-[30%]" />
                  <i className="flex-1 rounded bg-[#B5EAD2] h-[50%]" />
                  <i className="flex-1 rounded bg-[#7ED9B2] h-[45%]" />
                  <i className="flex-1 rounded bg-[#3DC592] h-[75%]" />
                  <i className="flex-1 rounded bg-[#0FAF7A] h-[100%]" />
                </div>
              </div>
              <div className="absolute -right-2 -top-6 card !rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3">
                <span className="icon-tile !w-9 !h-9">
                  <svg>
                    <use href={"#" + t("s01.i007")} />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-[#6B7C8C] font-semibold">{t("s01.t039")}</div>
                  <b className="display text-lg" data-count="142">0</b>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 2 PLATFORM */}
        {t.show("s02") && (<section id="features" className="section soft">
          <div className="wrap">
            <div className="max-w-2xl rv">
              <h2 className="h2">{t("s02.t001")}</h2>
              <p className="lead mt-5">
                {t("s02.t002")}
              </p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a href={t("s02.l001")} className="card card-hover p-7 rv">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i001")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t003")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">{t("s02.t004")}</p>
              </a>
              {" "}
              <a href={t("s02.l002")} className="card card-hover p-7 rv rv-d1">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i002")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t005")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">{t("s02.t006")}</p>
              </a>
              {" "}
              <a href={t("s02.l003")} className="card card-hover p-7 rv rv-d2">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i003")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t007")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">
                  {t("s02.t008")}
                </p>
              </a>
              {" "}
              <a href={t("s02.l004")} className="card card-hover p-7 rv">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i004")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t009")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">{t("s02.t010")}</p>
              </a>
              {" "}
              <a href={t("s02.l005")} className="card card-hover p-7 rv rv-d1">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i005")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t011")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">{t("s02.t012")}</p>
              </a>
              {" "}
              <a href={t("s02.l006")} className="card card-hover p-7 rv rv-d2">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s02.i006")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s02.t013")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed">
                  {t("s02.t014")}
                </p>
              </a>
            </div>
          </div>
        </section>)}
        {/* 3 MARKETING */}
        {t.show("s03") && (<section id="marketing" className="section">
          <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s03.t001")}</h2>
              <p className="sub mt-4">{t("s03.t002")}</p>
              <p className="lead mt-4">
                {t("s03.t003")}
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
                <li className="check">{t("s03.t004")}</li>
                <li className="check">{t("s03.t005")}</li>
                <li className="check">{t("s03.t006")}</li>
                <li className="check">{t("s03.t007")}</li>
                <li className="check">{t("s03.t008")}</li>
                <li className="check">{t("s03.t009")}</li>
                <li className="check">{t("s03.t010")}</li>
                <li className="check">{t("s03.t011")}</li>
                <li className="check">{t("s03.t012")}</li>
                <li className="check">{t("s03.t013")}</li>
              </ul>
              <a href={t("s03.l001")} className="btn btn-primary mt-9">
                {t("s03.t014")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s03.i001")} />
                </svg>
              </a>
            </div>
            <div className="rv rv-d2" data-anim="">
              <div className="ui">
                <div className="ui-bar">
                  <i />
                  <i />
                  <i />
                  <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s03.t015")}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <b className="display">{t("s03.t016")}</b>
                      <div className="text-xs text-[#6B7C8C] mt-0.5">{t("s03.t017")}</div>
                    </div>
                    <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s03.t018")}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                    <div className="rounded-xl bg-[#F5F8F7] p-3">
                      <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s03.t019")}</div>
                      <b className="display text-xl" data-count="12480">0</b>
                    </div>
                    <div className="rounded-xl bg-[#F5F8F7] p-3">
                      <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s03.t020")}</div>
                      <b className="display text-xl" data-count="97.6" data-dec="1" data-suffix="%">0</b>
                    </div>
                    <div className="rounded-xl bg-[#F5F8F7] p-3">
                      <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s03.t021")}</div>
                      <b className="display text-xl" data-count="81.2" data-dec="1" data-suffix="%">0</b>
                    </div>
                    <div className="rounded-xl bg-[#ECFBF4] p-3">
                      <div className="text-[11px] text-[#067955] font-semibold">{t("s03.t022")}</div>
                      <b className="display text-xl text-[#067955]" data-count="2314">0</b>
                    </div>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-[1fr_170px] gap-4">
                    <div className="rounded-xl border border-[#E6ECF0] p-4">
                      <div className="text-xs font-bold text-[#6B7C8C] mb-3">{t("s03.t023")}</div>
                      <svg viewBox="0 0 300 110" className="w-full h-28">
                        <defs>
                          <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="#0FAF7A" stopOpacity=".3" />
                            <stop offset="1" stopColor="#0FAF7A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 90 C40 80 60 60 100 62 S160 30 200 34 S260 12 300 10 V110 H0Z" fill="url(#ga)" />
                        <path d="M0 90 C40 80 60 60 100 62 S160 30 200 34 S260 12 300 10" fill="none" stroke="#0FAF7A" strokeWidth="3" />
                        <path d="M0 100 C50 96 90 88 140 84 S230 70 300 62" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeDasharray="5 5" />
                      </svg>
                    </div>
                    <div className="rounded-xl wa-bg p-3 flex flex-col justify-end gap-1.5">
                      <div className="bubble b-in !max-w-full !text-[11px]">
                        <b>{t("s03.t024")}</b>
                        <br />
                        {t("s03.t025")}
                      </div>
                      <div className="bg-white rounded-lg text-center text-[11px] font-bold text-[#2F6BFF] py-1.5">{t("s03.t026")}</div>
                      <div className="bg-white rounded-lg text-center text-[11px] font-bold text-[#2F6BFF] py-1.5">{t("s03.t027")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 4 AI AGENT */}
        {t.show("s04") && (<section id="ai" className="section soft overflow-hidden">
          <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="order-2 lg:order-1 flex justify-center relative rv" data-anim="">
              <div className="absolute w-[380px] h-[380px] rounded-full -z-0" style={{ background: "radial-gradient(circle,#CFF3E3 0%,transparent 70%)" }} />
              <div className="phone relative">
                <div className="phone-in">
                  <div className="bg-[#075E54] text-white px-3 pt-6 pb-2.5 flex items-center gap-2">
                    <span className="avatar !w-8 !h-8 bg-white">
                      <img src={settings.logo} alt="" className="w-7 h-auto object-cover object-left" style={{ width: "26px", height: "26px", objectPosition: "6% 50%" }} />
                    </span>
                    <div>
                      <b className="text-sm">{t("s04.t001")}</b>
                      <div className="text-[10px] opacity-80">{t("s04.t002")}</div>
                    </div>
                  </div>
                  <div className="wa-bg p-2.5 flex flex-col gap-1.5 h-[430px] justify-end text-[12px]">
                    <div className="bubble b-out msg">{t("s04.t003")}</div>
                    <div className="bubble b-in msg">{t("s04.t004")}</div>
                    <div className="bubble b-out msg">{t("s04.t005")}</div>
                    <div className="bubble b-in msg">{t("s04.t006")}</div>
                    <div className="bubble b-out msg">{t("s04.t007")}</div>
                    <div className="bubble b-in msg">{t("s04.t008")}</div>
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#067955] text-[10px]">{t("s04.t009")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 lg:-right-4 top-16 card !rounded-2xl p-3.5 w-[190px] shadow-xl hidden sm:block">
                <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s04.t010")}</div>
                <div className="mt-2 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s04.t011")}</span>
                    <b>{t("s04.t012")}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s04.t013")}</span>
                    <b>{t("s04.t014")}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s04.t015")}</span>
                    <b>{t("s04.t016")}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s04.t017")}</span>
                    <b className="text-[#067955]">{t("s04.t018")}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s04.t019")}</h2>
              <p className="sub mt-4">{t("s04.t020")}</p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="icon-tile flex-none">
                    <svg>
                      <use href={"#" + t("s04.i001")} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">{t("s04.t021")}</h3>
                    <p className="text-[#33475B] mt-1 leading-relaxed">{t("s04.t022")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-tile flex-none">
                    <svg>
                      <use href={"#" + t("s04.i002")} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">{t("s04.t023")}</h3>
                    <p className="text-[#33475B] mt-1 leading-relaxed">{t("s04.t024")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-tile flex-none">
                    <svg>
                      <use href={"#" + t("s04.i003")} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">{t("s04.t025")}</h3>
                    <p className="text-[#33475B] mt-1 leading-relaxed">{t("s04.t026")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-tile flex-none">
                    <svg>
                      <use href={"#" + t("s04.i004")} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="h3">{t("s04.t027")}</h3>
                    <p className="text-[#33475B] mt-1 leading-relaxed">{t("s04.t028")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-tile flex-none font-bold text-sm">{t("s04.t029")}</span>
                  <div>
                    <h3 className="h3">{t("s04.t030")}</h3>
                    <p className="text-[#33475B] mt-1 leading-relaxed">{t("s04.t031")}</p>
                  </div>
                </div>
              </div>
              <a href={t("s04.l001")} className="btn btn-primary mt-9">
                {t("s04.t032")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s04.i005")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* 5 AUTOMATION */}
        {t.show("s05") && (<section id="automation" className="section">
          <div className="wrap">
            <div className="max-w-3xl mx-auto text-center rv">
              <h2 className="h2" style={{ fontSize: "32px" }}>{t("s05.t001")}</h2>
              <p className="lead mt-5">
                {t("s05.t002")}
              </p>
            </div>
            <div className="mt-14 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s05.t003")}</span>
                <span className="ml-auto tag bg-[#ECFBF4] text-[#067955]">{t("s05.t004")}</span>
              </div>
              <div className="p-6 md:p-10" style={{ background: "#FBFCFD radial-gradient(#E2E8EC 1px,transparent 1px) 0 0/18px 18px" }}>
                <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap items-stretch lg:items-center gap-3 lg:gap-0">
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8 !bg-[#E7F9EE] text-[#25D366]">
                      <svg>
                        <use href={"#" + t("s05.i001")} />
                      </svg>
                    </span>
                    {t("s05.t005")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8">
                      <svg>
                        <use href={"#" + t("s05.i002")} />
                      </svg>
                    </span>
                    {t("s05.t006")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg !border-[#0FAF7A]">
                    <span className="icon-tile !w-8 !h-8 !bg-[#0FAF7A] text-white">
                      <svg>
                        <use href={"#" + t("s05.i003")} />
                      </svg>
                    </span>
                    {t("s05.t007")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8">
                      <svg>
                        <use href={"#" + t("s05.i004")} />
                      </svg>
                    </span>
                    {t("s05.t008")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8">
                      <svg>
                        <use href={"#" + t("s05.i005")} />
                      </svg>
                    </span>
                    {t("s05.t009")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8 !bg-[#EEF4FF] text-[#2F6BFF]">
                      <svg>
                        <use href={"#" + t("s05.i006")} />
                      </svg>
                    </span>
                    {t("s05.t010")}
                  </div>
                  <svg className="hidden lg:block flex-none" width="34" height="10">
                    <line className="flow-line" x1="0" y1="5" x2="34" y2="5" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8 !bg-[#FFF6E5] text-[#A96A00]">
                      <svg>
                        <use href={"#" + t("s05.i007")} />
                      </svg>
                    </span>
                    {t("s05.t011")}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
              <div className="rv">
                <h3 className="display text-2xl md:text-3xl font-bold leading-tight">{t("s05.t012")}</h3>
                <p className="lead mt-4">
                  {t("s05.t013")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 rv rv-d2">
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t014")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t015")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t016")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t017")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t018")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t019")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t020")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t021")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t022")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t023")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t024")}</span>
                <span className="chip !text-sm !py-2 !px-4">{t("s05.t025")}</span>
              </div>
            </div>
          </div>
        </section>)}
        {/* 6 TEAM INBOX */}
        {t.show("s06") && (<section id="inbox" className="section soft">
          <div className="wrap">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end rv">
              <div>
                <h2 className="h2" style={{ fontSize: "36px" }}>{t("s06.t001")}</h2>
                <p className="sub mt-4">{t("s06.t002")}</p>
              </div>
              <p className="lead">
                {t("s06.t003")}
              </p>
            </div>
            <div className="mt-12 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s06.t004")}</span>
              </div>
              <div className="grid md:grid-cols-[230px_1fr] lg:grid-cols-[230px_1fr_250px] text-[13px] min-h-[420px]">
                <div className="border-r border-[#E6ECF0] bg-[#FAFBFC] p-3 hidden md:block">
                  <div className="flex gap-1 mb-3 text-[11px] font-bold">
                    <span className="px-2 py-1 rounded-md bg-[#0A1A24] text-white">{t("s06.t005")}</span>
                    <span className="px-2 py-1 rounded-md text-[#6B7C8C]">{t("s06.t006")}</span>
                    <span className="px-2 py-1 rounded-md text-[#6B7C8C]">{t("s06.t007")}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="p-2.5 rounded-lg bg-white shadow-sm">
                      <div className="flex justify-between">
                        <b>{t("s06.t008")}</b>
                        <span className="text-[10px] text-[#6B7C8C]">{t("s06.t009")}</span>
                      </div>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s06.t010")}</div>
                      <span className="tag bg-[#EEF4FF] text-[#2F6BFF] mt-1 inline-block">{t("s06.t011")}</span>
                    </div>
                    <div className="p-2.5 rounded-lg">
                      <div className="flex justify-between">
                        <b>{t("s06.t012")}</b>
                        <span className="text-[10px] text-[#6B7C8C]">{t("s06.t013")}</span>
                      </div>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s06.t014")}</div>
                      <span className="tag bg-[#ECFBF4] text-[#067955] mt-1 inline-block">{t("s06.t015")}</span>
                    </div>
                    <div className="p-2.5 rounded-lg">
                      <div className="flex justify-between">
                        <b>{t("s06.t016")}</b>
                        <span className="text-[10px] text-[#6B7C8C]">{t("s06.t017")}</span>
                      </div>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s06.t018")}</div>
                      <span className="tag bg-[#F3EEFF] text-[#6B3FD6] mt-1 inline-block">{t("s06.t019")}</span>
                    </div>
                    <div className="p-2.5 rounded-lg">
                      <div className="flex justify-between">
                        <b>{t("s06.t020")}</b>
                        <span className="text-[10px] text-[#6B7C8C]">{t("s06.t021")}</span>
                      </div>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s06.t022")}</div>
                      <span className="tag bg-[#FFF6E5] text-[#A96A00] mt-1 inline-block">{t("s06.t023")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#E6ECF0]">
                    <div className="flex items-center gap-2">
                      <span className="avatar" style={{ background: "#2F6BFF" }}>{t("s06.t024")}</span>
                      <div>
                        <b>{t("s06.t025")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s06.t026")}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="chip !text-[11px]">{t("s06.t027")}</span>
                      <span className="chip !text-[11px] !bg-[#0FAF7A] !text-white !border-[#0FAF7A]">{t("s06.t028")}</span>
                    </div>
                  </div>
                  <div className="wa-bg flex-1 p-4 flex flex-col justify-end gap-2">
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#6B7C8C]">{t("s06.t029")}</span>
                    </div>
                    <div className="bubble b-in msg">{t("s06.t030")}</div>
                    <div className="bubble b-out msg">{t("s06.t031")}</div>
                    <div className="msg rounded-lg bg-[#FFF8DB] border border-[#F3E2A0] px-3 py-2 text-[12px] max-w-[85%]">
                      <b>{t("s06.t032")}</b>
                      {" "}{t("s06.t033")}
                    </div>
                  </div>
                </div>
                <div className="border-l border-[#E6ECF0] p-4 space-y-4 hidden lg:block">
                  <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s06.t034")}</div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#6B7C8C]">{t("s06.t035")}</span>
                      <b>{t("s06.t036")}</b>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7C8C]">{t("s06.t037")}</span>
                      <b>{t("s06.t038")}</b>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7C8C]">{t("s06.t039")}</span>
                      <b className="text-[#067955]">{t("s06.t040")}</b>
                    </div>
                  </div>
                  <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider pt-2">{t("s06.t041")}</div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{t("s06.t042")}</span>
                        <b>{t("s06.t043")}</b>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "88%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{t("s06.t044")}</span>
                        <b>{t("s06.t045")}</b>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "64%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{t("s06.t046")}</span>
                        <b>{t("s06.t047")}</b>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "52%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-3 text-[15px] rv">
              <span className="check">{t("s06.t048")}</span>
              <span className="check">{t("s06.t049")}</span>
              <span className="check">{t("s06.t050")}</span>
              <span className="check">{t("s06.t051")}</span>
              <span className="check">{t("s06.t052")}</span>
              <span className="check">{t("s06.t053")}</span>
              <span className="check">{t("s06.t054")}</span>
              <span className="check">{t("s06.t055")}</span>
              <span className="check">{t("s06.t056")}</span>
              <span className="check">{t("s06.t057")}</span>
            </div>
            <div className="mt-10 rv">
              <a href={t("s06.l001")} className="btn btn-primary">
                {t("s06.t058")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s06.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* 7 CRM */}
        {t.show("s07") && (<section id="crm" className="section">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "32px" }}>{t("s07.t001")}</h2>
              <p className="lead mt-5">
                {t("s07.t002")}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 rv">
              <div className="card p-5">
                <span className="display text-sm font-bold text-[#0FAF7A]">{t("s07.t003")}</span>
                <h3 className="h3 mt-2 !text-base tracking-wide">{t("s07.t004")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s07.t005")}</p>
              </div>
              <div className="card p-5">
                <span className="display text-sm font-bold text-[#0FAF7A]">{t("s07.t006")}</span>
                <h3 className="h3 mt-2 !text-base tracking-wide">{t("s07.t007")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s07.t008")}</p>
              </div>
              <div className="card p-5">
                <span className="display text-sm font-bold text-[#0FAF7A]">{t("s07.t009")}</span>
                <h3 className="h3 mt-2 !text-base tracking-wide">{t("s07.t010")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s07.t011")}</p>
              </div>
              <div className="card p-5">
                <span className="display text-sm font-bold text-[#0FAF7A]">{t("s07.t012")}</span>
                <h3 className="h3 mt-2 !text-base tracking-wide">{t("s07.t013")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s07.t014")}</p>
              </div>
              <div className="card p-5 col-span-2 md:col-span-1 !bg-[#0A1A24] !border-[#0A1A24]">
                <span className="display text-sm font-bold text-[#3DDC97]">{t("s07.t015")}</span>
                <h3 className="h3 mt-2 !text-base tracking-wide !text-white">{t("s07.t016")}</h3>
                <p className="text-sm text-[#B7C4CE] mt-1.5">{t("s07.t017")}</p>
              </div>
            </div>
            <div className="mt-8 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s07.t018")}</span>
              </div>
              <div className="p-4 md:p-5 overflow-x-auto">
                <div className="grid grid-cols-5 gap-3 min-w-[860px] text-[13px]">
                  <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                    <div className="flex justify-between px-1 pb-2 text-xs font-bold">
                      <span>{t("s07.t019")}</span>
                      <span className="text-[#6B7C8C]">{t("s07.t020")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm mb-2">
                      <b>{t("s07.t021")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t022")}</div>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm">
                      <b>{t("s07.t023")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t024")}</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                    <div className="flex justify-between px-1 pb-2 text-xs font-bold">
                      <span>{t("s07.t025")}</span>
                      <span className="text-[#6B7C8C]">{t("s07.t026")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm mb-2">
                      <b>{t("s07.t027")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t028")}</div>
                      <span className="tag bg-[#ECFBF4] text-[#067955] mt-1.5 inline-block">{t("s07.t029")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm">
                      <b>{t("s07.t030")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t031")}</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                    <div className="flex justify-between px-1 pb-2 text-xs font-bold">
                      <span>{t("s07.t032")}</span>
                      <span className="text-[#6B7C8C]">{t("s07.t033")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm">
                      <b>{t("s07.t034")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t035")}</div>
                      <div className="flex -space-x-1.5 mt-1.5">
                        <span className="avatar !w-5 !h-5 !text-[8px]" style={{ background: "#2F6BFF" }}>{t("s07.t036")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                    <div className="flex justify-between px-1 pb-2 text-xs font-bold">
                      <span>{t("s07.t037")}</span>
                      <span className="text-[#6B7C8C]">{t("s07.t038")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm">
                      <b>{t("s07.t039")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t040")}</div>
                      <span className="tag bg-[#FFF6E5] text-[#A96A00] mt-1.5 inline-block">{t("s07.t041")}</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#ECFBF4] p-2.5">
                    <div className="flex justify-between px-1 pb-2 text-xs font-bold text-[#067955]">
                      <span>{t("s07.t042")}</span>
                      <span>{t("s07.t043")}</span>
                    </div>
                    <div className="msg bg-white rounded-lg p-2.5 shadow-sm">
                      <b>{t("s07.t044")}</b>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s07.t045")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 8 INTEGRATIONS */}
        {t.show("s08") && (<section id="integrations" className="section soft overflow-hidden">
          <div className="wrap grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center">
            <div className="rv">
              <h2 className="h2">{t("s08.t001")}</h2>
              <p className="sub mt-4">{t("s08.t002")}</p>
              <p className="lead mt-4">
                {t("s08.t003")}
              </p>
              <a href={t("s08.l001")} className="btn btn-primary mt-8">
                {t("s08.t004")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s08.i001")} />
                </svg>
              </a>
            </div>
            <div className="relative aspect-square max-w-[540px] w-full mx-auto rv" data-anim="" id="orbit">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#DCE6E1" strokeWidth=".3" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#DCE6E1" strokeWidth=".3" strokeDasharray="1 1.5" />
                <g id="spokes" stroke="#0FAF7A" strokeWidth=".35" className="flow-line" opacity=".55">
                  <OrbitSpokes items={orbitItems} radius={[30, 44]} />
                </g>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] aspect-square rounded-[28%] bg-white shadow-2xl grid place-items-center border border-[#E6ECF0]">
                <img src={settings.logo} alt="WAPI" className="w-[85%]" />
              </div>
              <div id="logos">
                <OrbitLogos items={orbitItems} radius={[30, 44]} />
              </div>
            </div>
          </div>
        </section>)}
        {/* 9 TEAMS */}
        {t.show("s09") && (<section id="teams" className="section">
          <div className="wrap">
            <h2 className="h2 max-w-2xl rv">{t("s09.t001")}</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              <div className="card card-hover p-8 rv relative overflow-hidden" style={{ background: "linear-gradient(160deg,#FFF 55%,#FFF1F1)" }}>
                <span className="icon-tile !bg-[#FDECEC] text-[#E0353B]">
                  <svg>
                    <use href={"#" + t("s09.i001")} />
                  </svg>
                </span>
                <h3 className="display text-2xl font-bold mt-5">{t("s09.t002")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed max-w-md">{t("s09.t003")}</p>
                <div className="mt-6 flex gap-2">
                  <span className="tag bg-white border border-[#F3D5D6] text-[#E0353B]">{t("s09.t004")}</span>
                  <span className="tag bg-white border border-[#F3D5D6] text-[#E0353B]">{t("s09.t005")}</span>
                </div>
              </div>
              <div className="card card-hover p-8 rv rv-d1" style={{ background: "linear-gradient(160deg,#FFF 55%,#E9FAF2)" }}>
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s09.i002")} />
                  </svg>
                </span>
                <h3 className="display text-2xl font-bold mt-5">{t("s09.t006")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed max-w-md">
                  {t("s09.t007")}
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="tag bg-white border border-[#CDEEDD] text-[#067955]">{t("s09.t008")}</span>
                  <span className="tag bg-white border border-[#CDEEDD] text-[#067955]">{t("s09.t009")}</span>
                </div>
              </div>
              <div className="card card-hover p-8 rv" style={{ background: "linear-gradient(160deg,#FFF 55%,#EDF3FF)" }}>
                <span className="icon-tile !bg-[#E8EFFF] text-[#2F6BFF]">
                  <svg>
                    <use href={"#" + t("s09.i003")} />
                  </svg>
                </span>
                <h3 className="display text-2xl font-bold mt-5">{t("s09.t010")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed max-w-md">{t("s09.t011")}</p>
                <div className="mt-6 flex gap-2">
                  <span className="tag bg-white border border-[#D5E1FB] text-[#2F6BFF]">{t("s09.t012")}</span>
                  <span className="tag bg-white border border-[#D5E1FB] text-[#2F6BFF]">{t("s09.t013")}</span>
                </div>
              </div>
              <div className="card card-hover p-8 rv rv-d1" style={{ background: "linear-gradient(160deg,#FFF 55%,#F3EEFF)" }}>
                <span className="icon-tile !bg-[#EFE8FF] text-[#6B3FD6]">
                  <svg>
                    <use href={"#" + t("s09.i004")} />
                  </svg>
                </span>
                <h3 className="display text-2xl font-bold mt-5">{t("s09.t014")}</h3>
                <p className="mt-2 text-[#33475B] leading-relaxed max-w-md">{t("s09.t015")}</p>
                <div className="mt-6 flex gap-2">
                  <span className="tag bg-white border border-[#E2D8FA] text-[#6B3FD6]">{t("s09.t016")}</span>
                  <span className="tag bg-white border border-[#E2D8FA] text-[#6B3FD6]">{t("s09.t017")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 10 INDUSTRIES */}
        {t.show("s10") && (<section id="industries" className="section soft">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 rv">
              <h2 className="h2">{t("s10.t001")}</h2>
              <a href={t("s10.l001")} className="link-arrow">
                {t("s10.t002")}{" "}
                <span>→</span>
              </a>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <a href={t("s10.l002")} className="card card-hover p-7 rv group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i001")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t003")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t004")}</p>
              </a>
              {" "}
              <a href={t("s10.l003")} className="card card-hover p-7 rv rv-d1 group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i002")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t005")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t006")}</p>
              </a>
              {" "}
              <a href={t("s10.l004")} className="card card-hover p-7 rv rv-d2 group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i003")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t007")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t008")}</p>
              </a>
              {" "}
              <a href={t("s10.l005")} className="card card-hover p-7 rv group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i004")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t009")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t010")}</p>
              </a>
              {" "}
              <a href={t("s10.l006")} className="card card-hover p-7 rv rv-d1 group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i005")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t011")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t012")}</p>
              </a>
              {" "}
              <a href={t("s10.l007")} className="card card-hover p-7 rv rv-d2 group">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s10.i006")} />
                    </svg>
                  </span>
                  <span className="text-[#6B7C8C] group-hover:text-[#0FAF7A] transition">→</span>
                </div>
                <h3 className="h3 mt-6">{t("s10.t013")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s10.t014")}</p>
              </a>
            </div>
          </div>
        </section>)}
        {/* 11 CLICK TO WHATSAPP */}
        {t.show("s11") && (<section className="section">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2">{t("s11.t001")}</h2>
              <p className="lead mt-5">
                {t("s11.t002")}
              </p>
            </div>
            <div className="mt-12 rounded-[28px] p-6 md:p-10 rv" data-anim="" style={{ background: "#0A1A24" }}>
              <ol className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t003")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t004")}</div>
                </li>
                <li className="msg rounded-2xl bg-[#25D366] p-4 text-[#062B18]">
                  <span className="text-[11px] font-bold">{t("s11.t005")}</span>
                  <div className="font-bold mt-1 text-sm">{t("s11.t006")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t007")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t008")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t009")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t010")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t011")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t012")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t013")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t014")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t015")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t016")}</div>
                </li>
                <li className="msg rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                  <span className="text-[11px] text-[#7FE0B6] font-bold">{t("s11.t017")}</span>
                  <div className="font-semibold mt-1 text-sm">{t("s11.t018")}</div>
                </li>
              </ol>
              <div className="mt-8 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="bar-fill !h-1" style={{ "--w": "100%", transitionDuration: "3.5s" }} />
              </div>
              <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 text-[#D5DEE5]">
                <li className="check !text-[#D5DEE5]">{t("s11.t019")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t020")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t021")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t022")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t023")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t024")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t025")}</li>
                <li className="check !text-[#D5DEE5]">{t("s11.t026")}</li>
              </ul>
            </div>
          </div>
        </section>)}
        {/* 12 HOW IT WORKS */}
        {t.show("s12") && (<section className="section soft">
          <div className="wrap">
            <h2 className="h2 text-center rv">{t("s12.t001")}</h2>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              <div className="card p-7 rv">
                <div className="display text-5xl font-bold grad-text">{t("s12.t002")}</div>
                <h3 className="h3 mt-4 tracking-wide">{t("s12.t003")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s12.t004")}</p>
              </div>
              <div className="card p-7 rv rv-d1">
                <div className="display text-5xl font-bold grad-text">{t("s12.t005")}</div>
                <h3 className="h3 mt-4 tracking-wide">{t("s12.t006")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s12.t007")}</p>
              </div>
              <div className="card p-7 rv rv-d2">
                <div className="display text-5xl font-bold grad-text">{t("s12.t008")}</div>
                <h3 className="h3 mt-4 tracking-wide">{t("s12.t009")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s12.t010")}</p>
              </div>
              <div className="card p-7 rv rv-d3">
                <div className="display text-5xl font-bold grad-text">{t("s12.t011")}</div>
                <h3 className="h3 mt-4 tracking-wide">{t("s12.t012")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s12.t013")}</p>
              </div>
            </div>
            <div className="mt-12 text-center rv">
              <a href={t("s12.l001")} className="btn btn-primary">
                {t("s12.t014")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s12.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* 13 ANALYTICS */}
        {t.show("s13") && (<section id="analytics" className="section">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s13.t001")}</h2>
              <p className="lead mt-5">
                {t("s13.t002")}
              </p>
            </div>
            <div className="mt-12 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s13.t003")}</span>
              </div>
              <div className="p-5 md:p-6 grid gap-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-[#E6ECF0] p-4">
                    <div className="text-xs text-[#6B7C8C] font-semibold">{t("s13.t004")}</div>
                    <b className="display text-2xl" data-count="84210">0</b>
                    <div className="text-[11px] text-[#067955] font-bold mt-1">{t("s13.t005")}</div>
                  </div>
                  <div className="rounded-xl border border-[#E6ECF0] p-4">
                    <div className="text-xs text-[#6B7C8C] font-semibold">{t("s13.t006")}</div>
                    <b className="display text-2xl" data-count="82144">0</b>
                    <div className="text-[11px] text-[#067955] font-bold mt-1">{t("s13.t007")}</div>
                  </div>
                  <div className="rounded-xl border border-[#E6ECF0] p-4">
                    <div className="text-xs text-[#6B7C8C] font-semibold">{t("s13.t008")}</div>
                    <b className="display text-2xl" data-count="66903">0</b>
                    <div className="text-[11px] text-[#067955] font-bold mt-1">{t("s13.t009")}</div>
                  </div>
                  <div className="rounded-xl border border-[#E6ECF0] p-4 bg-[#ECFBF4]">
                    <div className="text-xs text-[#067955] font-semibold">{t("s13.t010")}</div>
                    <b className="display text-2xl text-[#067955]" data-count="14388">0</b>
                    <div className="text-[11px] text-[#067955] font-bold mt-1">{t("s13.t011")}</div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-[1.6fr_1fr] gap-4">
                  <div className="rounded-xl border border-[#E6ECF0] p-4">
                    <div className="flex justify-between text-xs font-bold">
                      <span>{t("s13.t012")}</span>
                      <span className="text-[#6B7C8C] font-semibold">
                        <i className="inline-block w-2 h-2 rounded-full bg-[#0FAF7A]" />
                        {" "}{t("s13.t013")}
                        <i className="inline-block w-2 h-2 rounded-full bg-[#BFD3FF]" />
                        {" "}{t("s13.t014")}
                      </span>
                    </div>
                    <div className="flex items-end gap-1.5 h-44 mt-4">
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-6" />
                        <i className="rounded bg-[#0FAF7A] h-12" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-8" />
                        <i className="rounded bg-[#0FAF7A] h-16" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-7" />
                        <i className="rounded bg-[#0FAF7A] h-14" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-10" />
                        <i className="rounded bg-[#0FAF7A] h-20" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-9" />
                        <i className="rounded bg-[#0FAF7A] h-24" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-6" />
                        <i className="rounded bg-[#0FAF7A] h-16" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-11" />
                        <i className="rounded bg-[#0FAF7A] h-28" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-10" />
                        <i className="rounded bg-[#0FAF7A] h-24" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-12" />
                        <i className="rounded bg-[#0FAF7A] h-32" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end gap-0.5">
                        <i className="rounded bg-[#BFD3FF] h-12" />
                        <i className="rounded bg-[#0FAF7A] h-28" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#E6ECF0] p-4">
                    <div className="text-xs font-bold">{t("s13.t015")}</div>
                    <div className="flex items-center gap-5 mt-4">
                      <svg viewBox="0 0 42 42" className="w-28 h-28 -rotate-90">
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#EEF2F4" strokeWidth="6" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#0FAF7A" strokeWidth="6" strokeDasharray="46 54" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#2F6BFF" strokeWidth="6" strokeDasharray="28 72" strokeDashoffset="-46" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#F5A524" strokeWidth="6" strokeDasharray="16 84" strokeDashoffset="-74" />
                      </svg>
                      <ul className="text-xs space-y-2">
                        <li>
                          <i className="inline-block w-2 h-2 rounded-full bg-[#0FAF7A]" />
                          {" "}{t("s13.t016")}
                        </li>
                        <li>
                          <i className="inline-block w-2 h-2 rounded-full bg-[#2F6BFF]" />
                          {" "}{t("s13.t017")}
                        </li>
                        <li>
                          <i className="inline-block w-2 h-2 rounded-full bg-[#F5A524]" />
                          {" "}{t("s13.t018")}
                        </li>
                        <li>
                          <i className="inline-block w-2 h-2 rounded-full bg-[#EEF2F4] border" />
                          {" "}{t("s13.t019")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-[#E6ECF0] p-4">
                  <div className="text-xs font-bold mb-3">{t("s13.t020")}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <b>{t("s13.t021")}</b>
                        <span>{t("s13.t022")}</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "82%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <b>{t("s13.t023")}</b>
                        <span>{t("s13.t024")}</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "64%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <b>{t("s13.t025")}</b>
                        <span>{t("s13.t026")}</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ "--w": "46%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 14 UAE */}
        {t.show("s14") && (<section className="section soft">
          <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s14.t001")}</h2>
              <p className="sub mt-4">{t("s14.t002")}</p>
              <p className="lead mt-4">
                {t("s14.t003")}
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i001")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t004")}</b>
                </div>
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i002")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t005")}</b>
                </div>
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i003")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t006")}</b>
                </div>
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i004")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t007")}</b>
                </div>
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i005")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t008")}</b>
                </div>
                <div className="card p-4 flex gap-3 items-center">
                  <span className="icon-tile !w-9 !h-9">
                    <svg>
                      <use href={"#" + t("s14.i006")} />
                    </svg>
                  </span>
                  <b className="text-[15px]">{t("s14.t009")}</b>
                </div>
              </div>
            </div>
            <div className="rv rv-d2" data-anim="">
              <div className="ui p-6">
                <div className="flex items-center justify-between">
                  <b className="display">{t("s14.t010")}</b>
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s14.t011")}</span>
                </div>
                <ol className="mt-5 space-y-3 text-sm">
                  <li className="msg flex items-center gap-3 p-3 rounded-xl bg-[#F5F8F7]">
                    <span className="w-6 h-6 rounded-full bg-[#0FAF7A] text-white grid place-items-center text-xs font-bold">✓</span>
                    <span className="flex-1 font-semibold">{t("s14.t012")}</span>
                    <span className="text-[#6B7C8C] text-xs">{t("s14.t013")}</span>
                  </li>
                  <li className="msg flex items-center gap-3 p-3 rounded-xl bg-[#F5F8F7]">
                    <span className="w-6 h-6 rounded-full bg-[#0FAF7A] text-white grid place-items-center text-xs font-bold">✓</span>
                    <span className="flex-1 font-semibold">{t("s14.t014")}</span>
                    <span className="text-[#6B7C8C] text-xs">{t("s14.t015")}</span>
                  </li>
                  <li className="msg flex items-center gap-3 p-3 rounded-xl bg-[#ECFBF4] border border-[#BCEBD5]">
                    <span className="w-6 h-6 rounded-full border-2 border-[#0FAF7A] grid place-items-center">
                      <i className="w-2 h-2 rounded-full bg-[#0FAF7A]" />
                    </span>
                    <span className="flex-1 font-semibold">{t("s14.t016")}</span>
                    <span className="text-[#067955] text-xs font-bold">{t("s14.t017")}</span>
                  </li>
                  <li className="msg flex items-center gap-3 p-3 rounded-xl">
                    <span className="w-6 h-6 rounded-full border-2 border-[#DCE3E8]" />
                    <span className="flex-1 font-semibold text-[#6B7C8C]">{t("s14.t018")}</span>
                    <span className="text-[#6B7C8C] text-xs">{t("s14.t019")}</span>
                  </li>
                </ol>
                <div className="mt-5 flex items-center gap-3 p-3 rounded-xl border border-[#E6ECF0]">
                  <span className="avatar" style={{ background: "#0A1A24" }}>{t("s14.t020")}</span>
                  <div className="text-sm">
                    <b>{t("s14.t021")}</b>
                    <div className="text-xs text-[#6B7C8C]">{t("s14.t022")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* 15 WHY */}
        {t.show("s15") && (<section className="section">
          <div className="wrap">
            <h2 className="h2 max-w-2xl rv" style={{ fontSize: "36px" }}>{t("s15.t001")}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E6ECF0] rounded-3xl overflow-hidden rv">
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#E0353B]">
                  <use href={"#" + t("s15.i001")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t002")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t003")}</p>
              </div>
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i002")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t004")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t005")}</p>
              </div>
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#2F6BFF]">
                  <use href={"#" + t("s15.i003")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t006")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t007")}</p>
              </div>
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#6B3FD6]">
                  <use href={"#" + t("s15.i004")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t008")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t009")}</p>
              </div>
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#0EA5A4]">
                  <use href={"#" + t("s15.i005")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t010")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t011")}</p>
              </div>
              <div className="p-8 border-r border-b border-[#E6ECF0] hover:bg-[#F5F8F7] transition">
                <svg width="26" height="26" className="text-[#F5A524]">
                  <use href={"#" + t("s15.i006")} />
                </svg>
                <h3 className="display font-bold tracking-wider mt-5">{t("s15.t012")}</h3>
                <p className="mt-2 text-[#33475B]">{t("s15.t013")}</p>
              </div>
            </div>
          </div>
        </section>)}
        {/* 16 FAQ */}
        {t.show("s16") && (<section id="faq" className="section soft">
          <div className="wrap grid lg:grid-cols-[1fr_2fr] gap-10">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("faq.heading")}</h2>
              <p className="lead mt-4">
                {t("s16.t001")}{" "}
                <a href={settings.whatsappUrl} className="font-bold text-[#067955] underline underline-offset-4">{t("s16.t002")}</a>
                .
              </p>
            </div>
            <div className="faq rv">
              {faqs.map((faq, i) => (
                <details key={faq.id ?? i} open={i === 0}>
                  <summary>
                    {faq.question}
                    <span className="pm">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>)}
        {/* 17 FINAL CTA + DEMO FORM */}
        {t.show("s17") && (<section id="demo" className="section">
          <div className="wrap">
            <div className="relative overflow-hidden rounded-[32px] p-8 md:p-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center" style={{ background: "radial-gradient(70% 90% at 100% 0%,#0E6B55 0%,transparent 60%),radial-gradient(60% 80% at 0% 100%,#113A7A 0%,transparent 60%),#0A1A24" }}>
              <div className="rv">
                <h2 className="h2 !text-white" style={{ fontSize: "36px" }}>{t("cta.title")}</h2>
                <p className="mt-5 text-lg text-[#C9D5DD] leading-relaxed">{t("cta.text1")}</p>
                <p className="mt-3 text-lg text-[#C9D5DD] leading-relaxed">{t("cta.text2")}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={t("s17.l001")} className="btn btn-primary">{t("s17.t001")}</a>
                  <a href={settings.whatsappUrl} className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20">
                    <svg width="18" height="18">
                      <use href={"#" + t("s17.i001")} />
                    </svg>
                    {t("s17.t002")}
                  </a>
                </div>
              </div>
              <DemoForm
                whatsappNumber={settings.whatsappNumber}
                texts={{
                  title: t("form.title"),
                  subtitle: t("form.subtitle"),
                  namePlaceholder: t("form.namePlaceholder"),
                  companyPlaceholder: t("form.companyPlaceholder"),
                  phonePlaceholder: t("form.phonePlaceholder"),
                  interestDefault: t("form.interestDefault"),
                  interest1: t("form.interest1"),
                  interest2: t("form.interest2"),
                  interest3: t("form.interest3"),
                  interest4: t("form.interest4"),
                  interest5: t("form.interest5"),
                  button: t("form.button"),
                  note: t("form.note"),
                  whatsappMessage: t("form.whatsappMessage"),
                }}
              />
            </div>
          </div>
        </section>)}
      </main>
    </>
  );
}
