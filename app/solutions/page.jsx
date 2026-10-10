import Link from "next/link";
import { getText, getSettings, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("solutions", "https://www.wapi.ae/solutions");
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

export default async function SolutionsPage() {
  const t = await getText("solutions"); // texts from the database
  const settings = await getSettings();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* HERO */}
        {t.show("s01") && (<section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(55% 50% at 80% 20%,#E3F7EF 0%,transparent 70%),radial-gradient(40% 40% at 0% 80%,#EEF4FF 0%,transparent 70%)" }} />
          <div className="wrap pt-14 md:pt-20 pb-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="rv">
              <h1 className="h1">
                {t("hero.titleStart")}{" "}
                <span className="grad-text">{t("hero.titleGradient")}</span>
              </h1>
              <p className="lead mt-6 max-w-xl">
                {t("hero.lead")}
              </p>
              <p className="mt-3 text-[#6B7C8C] max-w-xl leading-relaxed">
                {t("s01.t001")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={t("s01.l001")} className="btn btn-primary">
                  {t("s01.t002")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s01.i001")} />
                  </svg>
                </Link>
                <Link href={t("s01.l002")} className="btn btn-ghost">{t("s01.t003")}</Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-2 text-sm font-semibold">
                <a href={t("s01.l003")} className="chip hover:!border-[#0FAF7A]">{t("s01.t004")}</a>
                <a href={t("s01.l004")} className="chip hover:!border-[#0FAF7A]">{t("s01.t005")}</a>
                <a href={t("s01.l005")} className="chip hover:!border-[#0FAF7A]">{t("s01.t006")}</a>
                <a href={t("s01.l006")} className="chip hover:!border-[#0FAF7A]">{t("s01.t007")}</a>
                <a href={t("s01.l007")} className="chip hover:!border-[#0FAF7A]">{t("s01.t008")}</a>
                <a href={t("s01.l008")} className="chip hover:!border-[#0FAF7A]">{t("s01.t009")}</a>
                <a href={t("s01.l009")} className="chip hover:!border-[#0FAF7A]">{t("s01.t010")}</a>
                <a href={t("s01.l010")} className="chip hover:!border-[#0FAF7A]">{t("s01.t011")}</a>
                <a href={t("s01.l011")} className="chip hover:!border-[#0FAF7A]">{t("s01.t012")}</a>
              </div>
            </div>
            <div className="relative aspect-square max-w-[560px] w-full mx-auto rv rv-d2 scale-[.82] sm:scale-100" data-anim="">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="36" fill="none" stroke="#DCE6E1" strokeWidth=".3" strokeDasharray="1 1.5" />
                <g stroke="#0FAF7A" strokeWidth=".4" className="flow-line" opacity=".6">
                  <line x1="50" y1="50" x2="50" y2="14" />
                  <line x1="50" y1="50" x2="81" y2="32" />
                  <line x1="50" y1="50" x2="81" y2="68" />
                  <line x1="50" y1="50" x2="50" y2="86" />
                  <line x1="50" y1="50" x2="19" y2="68" />
                  <line x1="50" y1="50" x2="19" y2="32" />
                </g>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] ui !rounded-2xl">
                <div className="ui-bar !py-1.5">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="p-3 text-[11px]">
                  <img src={settings.logo} alt="WAPI" className="h-6" />
                  <div className="grid grid-cols-2 gap-1.5 mt-2">
                    <div className="rounded-lg bg-[#F5F8F7] p-1.5">
                      <div className="text-[9px] text-[#6B7C8C]">{t("s01.t013")}</div>
                      <b className="display" data-count="412">0</b>
                    </div>
                    <div className="rounded-lg bg-[#ECFBF4] p-1.5">
                      <div className="text-[9px] text-[#067955]">{t("s01.t014")}</div>
                      <b className="display text-[#067955]" data-count="96" data-suffix="%">0</b>
                    </div>
                  </div>
                  <div className="mt-1.5 bar-track !h-1.5">
                    <div className="bar-fill" style={{ "--w": "72%" }} />
                  </div>
                </div>
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "50%", top: "14%" }}>
                <svg width="16" height="16" className="text-[#E0353B]">
                  <use href={"#" + t("s01.i002")} />
                </svg>
                {t("s01.t015")}
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "81%", top: "32%" }}>
                <svg width="16" height="16" className="text-[#0FAF7A]">
                  <use href={"#" + t("s01.i003")} />
                </svg>
                {t("s01.t016")}
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "81%", top: "68%" }}>
                <svg width="16" height="16" className="text-[#2F6BFF]">
                  <use href={"#" + t("s01.i004")} />
                </svg>
                {t("s01.t017")}
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "50%", top: "86%" }}>
                <svg width="16" height="16" className="text-[#6B3FD6]">
                  <use href={"#" + t("s01.i005")} />
                </svg>
                {t("s01.t018")}
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "19%", top: "68%" }}>
                <svg width="16" height="16" className="text-[#0EA5A4]">
                  <use href={"#" + t("s01.i006")} />
                </svg>
                {t("s01.t019")}
              </div>
              <div className="msg absolute -translate-x-1/2 -translate-y-1/2 node !py-2 !px-3" style={{ left: "19%", top: "32%" }}>
                <svg width="16" height="16" className="text-[#F5A524]">
                  <use href={"#" + t("s01.i007")} />
                </svg>
                {t("s01.t020")}
              </div>
              <div className="absolute right-0 -bottom-4 card !rounded-2xl p-2.5 w-[180px] shadow-xl hidden sm:block wa-bg">
                <div className="bubble b-in !text-[11px] !max-w-full">{t("s01.t021")}</div>
                <div className="bubble b-out !text-[11px] mt-1.5">{t("s01.t022")}</div>
              </div>
            </div>
          </div>
        </section>)}
        {/* TEAMS */}
        {t.show("s02") && (<section id="teams" className="section soft scroll-mt-24">
          <div className="wrap">
            <div className="max-w-2xl rv">
              <h2 className="h2">{t("s02.t001")}</h2>
              <p className="lead mt-5">
                {t("s02.t002")}
              </p>
            </div>
            {/* Marketing */}
            <div className="mt-14 card !rounded-[28px] p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center rv">
              <div>
                <span className="tag bg-[#FDECEC] text-[#E0353B] !text-xs !px-3 !py-1">{t("s02.t003")}</span>
                <h3 className="display text-2xl md:text-3xl font-bold mt-4 leading-tight">{t("s02.t004")}</h3>
                <p className="text-[#33475B] mt-3 leading-relaxed">{t("s02.t005")}</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-[#FFF5F5] p-4">
                    <b className="text-[#C62828] text-xs">{t("s02.t006")}</b>
                    <p className="mt-1 text-[#33475B]">{t("s02.t007")}</p>
                  </div>
                  <div className="rounded-2xl bg-[#ECFBF4] p-4">
                    <b className="text-[#067955] text-xs">{t("s02.t008")}</b>
                    <p className="mt-1 text-[#33475B]">{t("s02.t009")}</p>
                  </div>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <li className="check">{t("s02.t010")}</li>
                  <li className="check">{t("s02.t011")}</li>
                  <li className="check">{t("s02.t012")}</li>
                  <li className="check">{t("s02.t013")}</li>
                  <li className="check">{t("s02.t014")}</li>
                  <li className="check">{t("s02.t015")}</li>
                  <li className="check">{t("s02.t016")}</li>
                </ul>
                <a href={t("s02.l001")} className="btn btn-primary mt-8">
                  {t("s02.t017")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s02.i001")} />
                  </svg>
                </a>
              </div>
              <div data-anim="">
                <div className="ui">
                  <div className="ui-bar">
                    <i />
                    <i />
                    <i />
                    <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s02.t018")}</span>
                  </div>
                  <div className="p-5 text-[13px]">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s02.t019")}</div>
                        <b className="display">{t("s02.t020")}</b>
                      </div>
                      <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s02.t021")}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                      <div>
                        <span className="text-[#6B7C8C]">{t("s02.t022")}</span>
                        <b className="block">{t("s02.t023")}</b>
                      </div>
                      <div>
                        <span className="text-[#6B7C8C]">{t("s02.t024")}</span>
                        <b className="block">{t("s02.t025")}</b>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mt-4 text-center">
                      <div className="rounded-lg bg-[#F5F8F7] py-2">
                        <div className="text-[10px] text-[#6B7C8C]">{t("s02.t026")}</div>
                        <b data-count="6240">0</b>
                      </div>
                      <div className="rounded-lg bg-[#F5F8F7] py-2">
                        <div className="text-[10px] text-[#6B7C8C]">{t("s02.t027")}</div>
                        <b data-count="6112">0</b>
                      </div>
                      <div className="rounded-lg bg-[#F5F8F7] py-2">
                        <div className="text-[10px] text-[#6B7C8C]">{t("s02.t028")}</div>
                        <b data-count="5020">0</b>
                      </div>
                      <div className="rounded-lg bg-[#F5F8F7] py-2">
                        <div className="text-[10px] text-[#6B7C8C]">{t("s02.t029")}</div>
                        <b data-count="1318">0</b>
                      </div>
                      <div className="rounded-lg bg-[#ECFBF4] py-2">
                        <div className="text-[10px] text-[#067955]">{t("s02.t030")}</div>
                        <b className="text-[#067955]" data-count="21" data-suffix="%">0</b>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                      <span className="msg px-2.5 py-1.5 rounded-lg bg-[#F5F8F7]">{t("s02.t031")}</span>
                      <span className="text-[#0FAF7A]">→</span>
                      <span className="msg px-2.5 py-1.5 rounded-lg bg-[#F5F8F7]">{t("s02.t032")}</span>
                      <span className="text-[#0FAF7A]">→</span>
                      <span className="msg px-2.5 py-1.5 rounded-lg bg-[#F5F8F7]">{t("s02.t033")}</span>
                      <span className="text-[#0FAF7A]">→</span>
                      <span className="msg px-2.5 py-1.5 rounded-lg bg-[#ECFBF4] text-[#067955]">{t("s02.t034")}</span>
                      <span className="text-[#0FAF7A]">→</span>
                      <span className="msg px-2.5 py-1.5 rounded-lg bg-[#F5F8F7]">{t("s02.t035")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sales */}
            <div className="mt-6 card !rounded-[28px] p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center rv">
              <div className="lg:order-2">
                <span className="tag bg-[#ECFBF4] text-[#067955] !text-xs !px-3 !py-1">{t("s02.t036")}</span>
                <h3 className="display text-2xl md:text-3xl font-bold mt-4 leading-tight">{t("s02.t037")}</h3>
                <p className="text-[#33475B] mt-3 leading-relaxed">{t("s02.t038")}</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-[#FFF5F5] p-4">
                    <b className="text-[#C62828] text-xs">{t("s02.t039")}</b>
                    <p className="mt-1 text-[#33475B]">{t("s02.t040")}</p>
                  </div>
                  <div className="rounded-2xl bg-[#ECFBF4] p-4">
                    <b className="text-[#067955] text-xs">{t("s02.t041")}</b>
                    <p className="mt-1 text-[#33475B]">{t("s02.t042")}</p>
                  </div>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <li className="check">{t("s02.t043")}</li>
                  <li className="check">{t("s02.t044")}</li>
                  <li className="check">{t("s02.t045")}</li>
                  <li className="check">{t("s02.t046")}</li>
                  <li className="check">{t("s02.t047")}</li>
                  <li className="check">{t("s02.t048")}</li>
                  <li className="check">{t("s02.t049")}</li>
                </ul>
                <a href={t("s02.l002")} className="btn btn-primary mt-8">
                  {t("s02.t050")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s02.i002")} />
                  </svg>
                </a>
              </div>
              <div className="lg:order-1 grid gap-4" data-anim="">
                <div className="rounded-2xl p-4" style={{ background: "#FBFCFD radial-gradient(#E2E8EC 1px,transparent 1px) 0 0/16px 16px", border: "1px solid #E6ECF0" }}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-bold text-center">
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t051")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t052")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center !border-[#0FAF7A]">{t("s02.t053")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t054")}</span>
                    {" "}
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t055")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t056")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center">{t("s02.t057")}</span>
                    <span className="msg node !p-2 !text-[11px] justify-center !bg-[#0A1A24] !text-white">{t("s02.t058")}</span>
                  </div>
                </div>
                <div className="ui p-5 text-[13px] msg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="avatar !w-10 !h-10" style={{ background: "#2F6BFF" }}>{t("s02.t059")}</span>
                      <div>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s02.t060")}</div>
                        <b className="display">{t("s02.t061")}</b>
                      </div>
                    </div>
                    <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s02.t062")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-xs">
                    <div>
                      <span className="text-[#6B7C8C]">{t("s02.t063")}</span>
                      <b className="block">{t("s02.t064")}</b>
                    </div>
                    <div>
                      <span className="text-[#6B7C8C]">{t("s02.t065")}</span>
                      <b className="block">{t("s02.t066")}</b>
                    </div>
                    <div>
                      <span className="text-[#6B7C8C]">{t("s02.t067")}</span>
                      <b className="block">{t("s02.t068")}</b>
                    </div>
                    <div>
                      <span className="text-[#6B7C8C]">{t("s02.t069")}</span>
                      <b className="block text-[#067955]">{t("s02.t070")}</b>
                    </div>
                    <div className="col-span-2 flex items-center gap-2 pt-2 border-t border-[#F0F3F5]">
                      <span className="text-[#6B7C8C]">{t("s02.t071")}</span>
                      <span className="avatar !w-6 !h-6 !text-[9px]" style={{ background: "#0FAF7A" }}>{t("s02.t072")}</span>
                      <b>{t("s02.t073")}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Support */}
            <div className="mt-6 card !rounded-[28px] p-6 md:p-10 rv">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
                <div>
                  <span className="tag bg-[#E8EFFF] text-[#2F6BFF] !text-xs !px-3 !py-1">{t("s02.t074")}</span>
                  <h3 className="display text-2xl md:text-3xl font-bold mt-4 leading-tight">{t("s02.t075")}</h3>
                  <p className="text-[#33475B] mt-3 leading-relaxed">
                    {t("s02.t076")}
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-[#FFF5F5] p-4">
                      <b className="text-[#C62828] text-xs">{t("s02.t077")}</b>
                      <p className="mt-1 text-[#33475B]">{t("s02.t078")}</p>
                    </div>
                    <div className="rounded-2xl bg-[#ECFBF4] p-4">
                      <b className="text-[#067955] text-xs">{t("s02.t079")}</b>
                      <p className="mt-1 text-[#33475B]">{t("s02.t080")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm lg:mt-12">
                    <li className="check">{t("s02.t081")}</li>
                    <li className="check">{t("s02.t082")}</li>
                    <li className="check">{t("s02.t083")}</li>
                    <li className="check">{t("s02.t084")}</li>
                    <li className="check">{t("s02.t085")}</li>
                    <li className="check">{t("s02.t086")}</li>
                    <li className="check">{t("s02.t087")}</li>
                  </ul>
                  <a href={t("s02.l003")} className="btn btn-primary mt-8">
                    {t("s02.t088")}{" "}
                    <svg width="18" height="18">
                      <use href={"#" + t("s02.i003")} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold" data-anim="">
                <span className="msg node !py-2 !px-3 !text-xs">{t("s02.t089")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs !border-[#0FAF7A]">{t("s02.t090")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs">{t("s02.t091")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs">{t("s02.t092")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs">{t("s02.t093")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs">{t("s02.t094")}</span>
                <span className="text-[#0FAF7A]">→</span>
                <span className="msg node !py-2 !px-3 !text-xs !bg-[#ECFBF4]">{t("s02.t095")}</span>
              </div>
              <div className="mt-6 ui" data-anim="">
                <div className="ui-bar">
                  <i />
                  <i />
                  <i />
                  <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s02.t096")}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-[13px]">
                    <thead className="text-left text-[11px] uppercase tracking-wider text-[#6B7C8C]">
                      <tr className="border-b border-[#E6ECF0]">
                        <th className="px-5 py-3">{t("s02.t097")}</th>
                        <th>{t("s02.t098")}</th>
                        <th>{t("s02.t099")}</th>
                        <th>{t("s02.t100")}</th>
                        <th>{t("s02.t101")}</th>
                        <th className="pr-5">{t("s02.t102")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#F0F3F5] msg">
                        <td className="px-5 py-3.5 font-semibold">{t("s02.t103")}</td>
                        <td className="text-[#6B7C8C]">{t("s02.t104")}</td>
                        <td>{t("s02.t105")}</td>
                        <td>
                          <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s02.t106")}</span>
                        </td>
                        <td>
                          <span className="tag bg-[#FDECEC] text-[#E0353B]">{t("s02.t107")}</span>
                        </td>
                        <td className="pr-5">
                          <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s02.t108")}</span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#F0F3F5] msg">
                        <td className="px-5 py-3.5 font-semibold">{t("s02.t109")}</td>
                        <td className="text-[#6B7C8C]">{t("s02.t110")}</td>
                        <td>{t("s02.t111")}</td>
                        <td>
                          <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s02.t112")}</span>
                        </td>
                        <td>
                          <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s02.t113")}</span>
                        </td>
                        <td className="pr-5">
                          <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s02.t114")}</span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#F0F3F5] msg">
                        <td className="px-5 py-3.5 font-semibold">{t("s02.t115")}</td>
                        <td className="text-[#6B7C8C]">{t("s02.t116")}</td>
                        <td>{t("s02.t117")}</td>
                        <td>
                          <span className="tag bg-[#F3EEFF] text-[#6B3FD6]">{t("s02.t118")}</span>
                        </td>
                        <td>
                          <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s02.t119")}</span>
                        </td>
                        <td className="pr-5">
                          <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s02.t120")}</span>
                        </td>
                      </tr>
                      <tr className="msg">
                        <td className="px-5 py-3.5 font-semibold">{t("s02.t121")}</td>
                        <td className="text-[#6B7C8C]">{t("s02.t122")}</td>
                        <td>{t("s02.t123")}</td>
                        <td>
                          <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s02.t124")}</span>
                        </td>
                        <td>
                          <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s02.t125")}</span>
                        </td>
                        <td className="pr-5">
                          <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s02.t126")}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* INDUSTRIES */}
        {t.show("s03") && (<section className="section">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2">{t("s03.t001")}</h2>
              <p className="lead mt-5">{t("s03.t002")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold rv">
              <a href={t("s03.l001")} className="chip">{t("s03.t003")}</a>
              <a href={t("s03.l002")} className="chip">{t("s03.t004")}</a>
              <a href={t("s03.l003")} className="chip">{t("s03.t005")}</a>
              <a href={t("s03.l004")} className="chip">{t("s03.t006")}</a>
              <a href={t("s03.l005")} className="chip">{t("s03.t007")}</a>
              <a href={t("s03.l006")} className="chip">{t("s03.t008")}</a>
            </div>
          </div>
          {/* Healthcare */}
          <div id="healthcare" className="wrap mt-16 scroll-mt-24">
            <div className="rounded-[32px] p-6 md:p-12 grid lg:grid-cols-[1fr_300px_1fr] gap-10 items-center rv" style={{ background: "linear-gradient(160deg,#F2F9FF,#EEFBF5)" }}>
              <div>
                <span className="icon-tile !bg-white text-[#2F6BFF]">
                  <svg>
                    <use href={"#" + t("s03.i001")} />
                  </svg>
                </span>
                <h3 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight">{t("s03.t009")}</h3>
                <p className="text-[#33475B] mt-3 leading-relaxed">
                  {t("s03.t010")}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="check">{t("s03.t011")}</li>
                  <li className="check">{t("s03.t012")}</li>
                  <li className="check">{t("s03.t013")}</li>
                  <li className="check">{t("s03.t014")}</li>
                  <li className="check">{t("s03.t015")}</li>
                  <li className="check">{t("s03.t016")}</li>
                  <li className="check">{t("s03.t017")}</li>
                </ul>
                <a href={t("s03.l007")} className="btn btn-primary mt-8">
                  {t("s03.t018")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s03.i002")} />
                  </svg>
                </a>
              </div>
              <div className="phone mx-auto" data-anim="">
                <div className="phone-in">
                  <div className="bg-[#075E54] text-white px-3 pt-6 pb-2.5">
                    <b className="text-sm">{t("s03.t019")}</b>
                    <div className="text-[10px] opacity-80">{t("s03.t020")}</div>
                  </div>
                  <div className="wa-bg p-2.5 flex flex-col gap-1.5 h-[400px] justify-end text-[11.5px]">
                    <div className="bubble b-in msg">{t("s03.t021")}</div>
                    <div className="msg grid grid-cols-2 gap-1 text-[11px] font-bold text-center">
                      <span className="bg-white rounded-lg py-1.5 text-[#2F6BFF]">{t("s03.t022")}</span>
                      <span className="bg-[#D9FDD3] rounded-lg py-1.5 text-[#067955] ring-1 ring-[#0FAF7A]">{t("s03.t023")}</span>
                    </div>
                    <div className="bubble b-in msg">{t("s03.t024")}</div>
                    <div className="msg grid grid-cols-3 gap-1 text-[10px] font-bold text-center">
                      <span className="bg-white rounded-lg py-1.5">{t("s03.t025")}</span>
                      <span className="bg-[#D9FDD3] rounded-lg py-1.5 ring-1 ring-[#0FAF7A]">{t("s03.t026")}</span>
                      <span className="bg-white rounded-lg py-1.5">{t("s03.t027")}</span>
                    </div>
                    <div className="bubble b-in msg">{t("s03.t028")}</div>
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#067955] text-[10px]">{t("s03.t029")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 text-sm font-semibold" data-anim="">
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s03.t030")}</span>
                  {t("s03.t031")}
                </li>
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s03.t032")}</span>
                  {t("s03.t033")}
                </li>
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s03.t034")}</span>
                  {t("s03.t035")}
                </li>
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s03.t036")}</span>
                  {t("s03.t037")}
                </li>
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s03.t038")}</span>
                  {t("s03.t039")}
                </li>
                <li className="msg flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s03.t040")}</span>
                  {t("s03.t041")}
                </li>
                <li className="msg flex items-center gap-3 bg-[#0A1A24] text-white rounded-xl px-4 py-3">
                  <span className="tag bg-[#0FAF7A] text-white">{t("s03.t042")}</span>
                  {t("s03.t043")}
                </li>
              </ol>
            </div>
          </div>
          {/* Real estate */}
          <div id="realestate" className="wrap mt-8 scroll-mt-24">
            <div className="card !rounded-[32px] p-6 md:p-12 grid lg:grid-cols-[320px_1fr] gap-12 items-center rv">
              <div className="phone mx-auto" data-anim="">
                <div className="phone-in">
                  <div className="bg-[#075E54] text-white px-3 pt-6 pb-2.5">
                    <b className="text-sm">{t("s03.t044")}</b>
                    <div className="text-[10px] opacity-80">{t("s03.t045")}</div>
                  </div>
                  <div className="wa-bg p-2.5 flex flex-col gap-1.5 h-[440px] justify-end text-[11.5px]">
                    <div className="bubble b-out msg">{t("s03.t046")}</div>
                    <div className="bubble b-in msg">{t("s03.t047")}</div>
                    <div className="bubble b-out msg">{t("s03.t048")}</div>
                    <div className="bubble b-in msg">{t("s03.t049")}</div>
                    <div className="msg grid grid-cols-2 gap-1.5">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="h-14" style={{ background: "linear-gradient(135deg,#BFD8E8,#7FA9C4)" }} />
                        <div className="p-1.5 text-[10px]">
                          <b className="block">{t("s03.t050")}</b>
                          <span className="text-[#067955] font-bold">{t("s03.t051")}</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="h-14" style={{ background: "linear-gradient(135deg,#D8E6D2,#8FB38A)" }} />
                        <div className="p-1.5 text-[10px]">
                          <b className="block">{t("s03.t052")}</b>
                          <span className="text-[#067955] font-bold">{t("s03.t053")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="msg bg-white rounded-lg text-center text-[11px] font-bold text-[#2F6BFF] py-1.5">{t("s03.t054")}</div>
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#067955] text-[10px]">{t("s03.t055")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s03.i003")} />
                  </svg>
                </span>
                <h3 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight">{t("s03.t056")}</h3>
                <p className="text-[#33475B] mt-3 leading-relaxed max-w-xl">{t("s03.t057")}</p>
                <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[12px] font-bold" data-anim="">
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t058")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#E7F9EE] text-[#067955]">{t("s03.t059")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t060")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t061")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t062")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t063")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t064")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#F5F8F7]">{t("s03.t065")}</span>
                  <span className="text-[#0FAF7A]">→</span>
                  <span className="msg px-3 py-1.5 rounded-full bg-[#0A1A24] text-white">{t("s03.t066")}</span>
                </div>
                <ul className="mt-7 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm max-w-xl">
                  <li className="check">{t("s03.t067")}</li>
                  <li className="check">{t("s03.t068")}</li>
                  <li className="check">{t("s03.t069")}</li>
                  <li className="check">{t("s03.t070")}</li>
                  <li className="check">{t("s03.t071")}</li>
                  <li className="check">{t("s03.t072")}</li>
                  <li className="check">{t("s03.t073")}</li>
                </ul>
                <a href={t("s03.l008")} className="btn btn-primary mt-8">
                  {t("s03.t074")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s03.i004")} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* E-commerce + Education split */}
          <div className="wrap mt-8 grid lg:grid-cols-2 gap-6">
            <div id="ecommerce" className="rounded-[32px] p-6 md:p-10 scroll-mt-24 rv" style={{ background: "#FFF9EF" }}>
              <span className="icon-tile !bg-white text-[#A96A00]">
                <svg>
                  <use href={"#" + t("s03.i005")} />
                </svg>
              </span>
              <h3 className="display text-2xl md:text-[1.75rem] font-bold mt-5 leading-tight">{t("s03.t075")}</h3>
              <p className="text-[#33475B] mt-3 leading-relaxed">{t("s03.t076")}</p>
              <div className="mt-6 grid sm:grid-cols-[1fr_190px] gap-5 items-start" data-anim="">
                <div className="space-y-2 text-[13px]">
                  <div className="msg rounded-xl bg-white p-3 shadow-sm">
                    <div className="text-[11px] text-[#6B7C8C]">{t("s03.t077")}</div>
                    <div className="grid grid-cols-3 gap-1.5 mt-2">
                      <div className="rounded-lg h-14" style={{ background: "linear-gradient(135deg,#F4E4D0,#E8C9A4)" }} />
                      <div className="rounded-lg h-14" style={{ background: "linear-gradient(135deg,#DDE4EE,#AFC0D8)" }} />
                      <div className="rounded-lg h-14" style={{ background: "linear-gradient(135deg,#E6E6E6,#BDBDBD)" }} />
                    </div>
                    <div className="flex justify-between mt-2 text-[11px]">
                      <b>{t("s03.t078")}</b>
                      <b className="text-[#067955]">{t("s03.t079")}</b>
                    </div>
                  </div>
                  <div className="msg rounded-xl bg-white p-3 shadow-sm flex justify-between items-center">
                    <span>{t("s03.t080")}</span>
                    <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s03.t081")}</span>
                  </div>
                  <div className="msg rounded-xl bg-white p-3 shadow-sm flex justify-between items-center">
                    <span>{t("s03.t082")}</span>
                    <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s03.t083")}</span>
                  </div>
                </div>
                <ol className="text-[12px] font-semibold space-y-1.5">
                  <li className="msg">{t("s03.t084")}</li>
                  <li className="msg">{t("s03.t085")}</li>
                  <li className="msg">{t("s03.t086")}</li>
                  <li className="msg">{t("s03.t087")}</li>
                  <li className="msg">{t("s03.t088")}</li>
                  <li className="msg">{t("s03.t089")}</li>
                  <li className="msg">{t("s03.t090")}</li>
                  <li className="msg text-[#067955]">{t("s03.t091")}</li>
                </ol>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="chip">{t("s03.t092")}</span>
                <span className="chip">{t("s03.t093")}</span>
                <span className="chip">{t("s03.t094")}</span>
                <span className="chip">{t("s03.t095")}</span>
                <span className="chip">{t("s03.t096")}</span>
                <span className="chip">{t("s03.t097")}</span>
                <span className="chip">{t("s03.t098")}</span>
              </div>
              <a href={t("s03.l009")} className="btn btn-primary mt-8">
                {t("s03.t099")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s03.i006")} />
                </svg>
              </a>
            </div>
            <div id="education" className="rounded-[32px] p-6 md:p-10 scroll-mt-24 rv rv-d1" style={{ background: "#F4F1FF" }}>
              <span className="icon-tile !bg-white text-[#6B3FD6]">
                <svg>
                  <use href={"#" + t("s03.i007")} />
                </svg>
              </span>
              <h3 className="display text-2xl md:text-[1.75rem] font-bold mt-5 leading-tight">{t("s03.t100")}</h3>
              <p className="text-[#33475B] mt-3 leading-relaxed">{t("s03.t101")}</p>
              <div className="mt-6 relative pl-6" data-anim="">
                <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-[#DCD3FA]" />
                <div className="space-y-3 text-[13px]">
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t102")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t103")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t104")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t105")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t106")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t107")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t108")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t109")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t110")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t111")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-[#6B3FD6]" />
                    <b>{t("s03.t112")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t113")}</span>
                  </div>
                  <div className="msg relative">
                    <i className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#6B3FD6]" />
                    <b>{t("s03.t114")}</b>
                    <span className="text-[#6B7C8C]">{t("s03.t115")}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="chip">{t("s03.t116")}</span>
                <span className="chip">{t("s03.t117")}</span>
                <span className="chip">{t("s03.t118")}</span>
                <span className="chip">{t("s03.t119")}</span>
                <span className="chip">{t("s03.t120")}</span>
                <span className="chip">{t("s03.t121")}</span>
                <span className="chip">{t("s03.t122")}</span>
              </div>
              <a href={t("s03.l010")} className="btn btn-primary mt-8">
                {t("s03.t123")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s03.i008")} />
                </svg>
              </a>
            </div>
          </div>
          {/* Restaurants */}
          <div id="restaurants" className="wrap mt-8 scroll-mt-24">
            <div className="card !rounded-[32px] p-6 md:p-12 grid lg:grid-cols-[1fr_320px] gap-12 items-center rv">
              <div>
                <span className="icon-tile !bg-[#FDECEC] text-[#E0353B]">
                  <svg>
                    <use href={"#" + t("s03.i009")} />
                  </svg>
                </span>
                <h3 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight">{t("s03.t124")}</h3>
                <p className="text-[#33475B] mt-3 leading-relaxed max-w-xl">{t("s03.t125")}</p>
                <div className="mt-6 grid grid-cols-3 sm:grid-cols-9 gap-1.5 text-[11px] font-bold text-center" data-anim="">
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t126")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t127")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t128")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t129")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t130")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t131")}</span>
                  <span className="msg rounded-lg bg-[#ECFBF4] text-[#067955] py-2 px-1">{t("s03.t132")}</span>
                  <span className="msg rounded-lg bg-[#F5F8F7] py-2 px-1">{t("s03.t133")}</span>
                  <span className="msg rounded-lg bg-[#0A1A24] text-white py-2 px-1">{t("s03.t134")}</span>
                </div>
                <ul className="mt-7 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm max-w-xl">
                  <li className="check">{t("s03.t135")}</li>
                  <li className="check">{t("s03.t136")}</li>
                  <li className="check">{t("s03.t137")}</li>
                  <li className="check">{t("s03.t138")}</li>
                  <li className="check">{t("s03.t139")}</li>
                  <li className="check">{t("s03.t140")}</li>
                  <li className="check">{t("s03.t141")}</li>
                </ul>
                <a href={t("s03.l011")} className="btn btn-primary mt-8">
                  {t("s03.t142")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s03.i010")} />
                  </svg>
                </a>
              </div>
              <div className="phone mx-auto" data-anim="">
                <div className="phone-in">
                  <div className="bg-[#075E54] text-white px-3 pt-6 pb-2.5">
                    <b className="text-sm">{t("s03.t143")}</b>
                    <div className="text-[10px] opacity-80">{t("s03.t144")}</div>
                  </div>
                  <div className="wa-bg p-2.5 flex flex-col gap-1.5 h-[400px] justify-end text-[11.5px]">
                    <div className="bubble b-out msg">{t("s03.t145")}</div>
                    <div className="bubble b-in msg">{t("s03.t146")}</div>
                    <div className="msg grid grid-cols-3 gap-1 text-[10px] font-bold text-center">
                      <span className="bg-white rounded-lg py-1.5">{t("s03.t147")}</span>
                      <span className="bg-[#D9FDD3] rounded-lg py-1.5 ring-1 ring-[#0FAF7A]">{t("s03.t148")}</span>
                      <span className="bg-white rounded-lg py-1.5">{t("s03.t149")}</span>
                    </div>
                    <div className="bubble b-in msg">{t("s03.t150")}</div>
                    <div className="bubble b-out msg">{t("s03.t151")}</div>
                    <div className="msg bg-white rounded-xl p-2.5 text-[11px]">
                      <b className="text-[#067955]">{t("s03.t152")}</b>
                      <div className="mt-1 text-[#33475B]">
                        {t("s03.t153")}
                        <br />
                        {t("s03.t154")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Automotive */}
          <div id="automotive" className="wrap mt-8 scroll-mt-24">
            <div className="rounded-[32px] p-6 md:p-12 rv" style={{ background: "#0A1A24" }}>
              <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
                <div>
                  <span className="icon-tile !bg-white/10 text-[#3DDC97]">
                    <svg>
                      <use href={"#" + t("s03.i011")} />
                    </svg>
                  </span>
                  <h3 className="display text-2xl md:text-3xl font-bold mt-5 leading-tight !text-white">{t("s03.t155")}</h3>
                  <p className="text-[#B7C4CE] mt-3 leading-relaxed">
                    {t("s03.t156")}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                    <li className="check !text-[#D5DEE5]">{t("s03.t157")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t158")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t159")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t160")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t161")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t162")}</li>
                    <li className="check !text-[#D5DEE5]">{t("s03.t163")}</li>
                  </ul>
                  <a href={t("s03.l012")} className="btn btn-primary mt-8">
                    {t("s03.t164")}{" "}
                    <svg width="18" height="18">
                      <use href={"#" + t("s03.i012")} />
                    </svg>
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 gap-4" data-anim="">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <b className="text-white text-sm">{t("s03.t165")}</b>
                    <ol className="mt-4 space-y-2 text-[13px]">
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t166")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t167")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t168")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t169")}</li>
                      <li className="msg rounded-xl bg-[#0FAF7A] px-3 py-2.5 text-white font-semibold">{t("s03.t170")}</li>
                    </ol>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <b className="text-white text-sm">{t("s03.t171")}</b>
                    <ol className="mt-4 space-y-2 text-[13px]">
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t172")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t173")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t174")}</li>
                      <li className="msg rounded-xl bg-white/5 px-3 py-2.5 text-[#D5DEE5]">{t("s03.t175")}</li>
                      <li className="msg rounded-xl bg-[#2F6BFF] px-3 py-2.5 text-white font-semibold">{t("s03.t176")}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* CTA */}
        {t.show("s04") && (<section className="section soft">
          <div className="wrap text-center rv">
            <h2 className="h2 max-w-3xl mx-auto">{t("s04.t001")}</h2>
            <p className="lead mt-5 max-w-2xl mx-auto">{t("s04.t002")}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href={t("s04.l001")} className="btn btn-primary">{t("s04.t003")}</Link>
              <a href={settings.whatsappUrl} className="btn btn-ghost">{t("s04.t004")}</a>
            </div>
          </div>
        </section>)}
      </main>
    </>
  );
}
