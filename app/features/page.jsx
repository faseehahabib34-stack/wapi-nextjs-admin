import Link from "next/link";
import AnalyticsTabs from "@/components/AnalyticsTabs";
import FeatureSubNav from "@/components/FeatureSubNav";
import { getText, getSettings, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("features", "https://www.wapi.ae/features");
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

export default async function FeaturesPage() {
  const t = await getText("features"); // texts from the database
  const settings = await getSettings();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* HERO */}
        {t.show("s01") && (<section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(50% 45% at 50% 0%,#E3F7EF 0%,transparent 70%),radial-gradient(30% 40% at 100% 70%,#EEF4FF 0%,transparent 70%)" }} />
          <div className="wrap pt-16 md:pt-24 text-center rv">
            <h1 className="h1 max-w-4xl mx-auto" style={{ fontSize: "48px" }}>
              {t("hero.titleStart")}{" "}
              <span className="grad-text">{t("hero.titleGradient")}</span>
            </h1>
            <p className="lead mt-6 max-w-2xl mx-auto">
              {t("hero.lead")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href={t("s01.l001")} className="btn btn-primary">
                {t("s01.t001")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s01.i001")} />
                </svg>
              </Link>
              <Link href={t("s01.l002")} className="btn btn-ghost">{t("s01.t002")}</Link>
            </div>
          </div>
          <div className="wrap mt-14 pb-20 relative rv rv-d2" data-anim="">
            <div className="ui max-w-[1040px] mx-auto">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s01.t003")}</span>
              </div>
              <div className="grid grid-cols-[56px_1fr] text-[13px]">
                <div className="bg-[#0A1A24] py-4 flex flex-col items-center gap-4 text-[#7F93A3]">
                  <svg width="20" height="20" className="text-[#3DDC97]">
                    <use href={"#" + t("s01.i002")} />
                  </svg>
                  <svg width="20" height="20">
                    <use href={"#" + t("s01.i003")} />
                  </svg>
                  <svg width="20" height="20">
                    <use href={"#" + t("s01.i004")} />
                  </svg>
                  <svg width="20" height="20">
                    <use href={"#" + t("s01.i005")} />
                  </svg>
                  <svg width="20" height="20">
                    <use href={"#" + t("s01.i006")} />
                  </svg>
                  <svg width="20" height="20">
                    <use href={"#" + t("s01.i007")} />
                  </svg>
                </div>
                <div className="p-4 md:p-5 bg-[#F7F9FA] grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white rounded-xl p-3 border border-[#E6ECF0]">
                        <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s01.t004")}</div>
                        <b className="display text-xl" data-count="3284">0</b>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-[#E6ECF0]">
                        <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s01.t005")}</div>
                        <b className="display text-xl" data-count="81.4" data-dec="1" data-suffix="%">0</b>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-[#E6ECF0]">
                        <div className="text-[11px] text-[#6B7C8C] font-semibold">{t("s01.t006")}</div>
                        <b className="display text-xl" data-count="64" data-suffix="%">0</b>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-[#E6ECF0]">
                        <div className="text-[11px] text-[#067955] font-semibold">{t("s01.t007")}</div>
                        <b className="display text-xl text-[#067955]" data-count="412">0</b>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E6ECF0] p-4">
                      <div className="flex justify-between text-xs font-bold">
                        <span>{t("s01.t008")}</span>
                        <span className="text-[#6B7C8C] font-semibold">{t("s01.t009")}</span>
                      </div>
                      <svg viewBox="0 0 400 110" className="w-full h-28 mt-2">
                        <defs>
                          <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="#0FAF7A" stopOpacity=".28" />
                            <stop offset="1" stopColor="#0FAF7A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 92 C40 84 70 70 110 72 S180 40 230 44 S320 18 400 14 V110H0Z" fill="url(#hg)" />
                        <path d="M0 92 C40 84 70 70 110 72 S180 40 230 44 S320 18 400 14" fill="none" stroke="#0FAF7A" strokeWidth="3" />
                        <path d="M0 100 C60 96 120 90 180 86 S300 72 400 66" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeDasharray="5 5" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E6ECF0] p-4 hidden md:block">
                      <div className="text-xs font-bold mb-3">{t("s01.t010")}</div>
                      <div className="flex items-center gap-2 text-[12px] font-semibold flex-wrap">
                        <span className="node !py-1.5 !px-2.5 !text-[12px] msg">{t("s01.t011")}</span>
                        <svg width="22" height="8">
                          <line className="flow-line" x1="0" y1="4" x2="22" y2="4" stroke="#0FAF7A" strokeWidth="2" />
                        </svg>
                        {" "}
                        <span className="node !py-1.5 !px-2.5 !text-[12px] msg !border-[#0FAF7A]">{t("s01.t012")}</span>
                        <svg width="22" height="8">
                          <line className="flow-line" x1="0" y1="4" x2="22" y2="4" stroke="#0FAF7A" strokeWidth="2" />
                        </svg>
                        {" "}
                        <span className="node !py-1.5 !px-2.5 !text-[12px] msg">{t("s01.t013")}</span>
                        <svg width="22" height="8">
                          <line className="flow-line" x1="0" y1="4" x2="22" y2="4" stroke="#0FAF7A" strokeWidth="2" />
                        </svg>
                        {" "}
                        <span className="node !py-1.5 !px-2.5 !text-[12px] msg">{t("s01.t014")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="bg-white rounded-xl border border-[#E6ECF0] overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-[#E6ECF0] flex items-center gap-2">
                        <span className="avatar !w-7 !h-7" style={{ background: "#0FAF7A" }}>{t("s01.t015")}</span>
                        <b>{t("s01.t016")}</b>
                        <span className="ml-auto tag bg-[#ECFBF4] text-[#067955]">{t("s01.t017")}</span>
                      </div>
                      <div className="wa-bg p-3 flex flex-col gap-1.5 h-[190px] justify-end">
                        <div className="bubble b-in msg">{t("s01.t018")}</div>
                        <div className="bubble b-ai msg">
                          <span className="text-[10px] font-bold text-[#067955] block">{t("s01.t019")}</span>
                          {t("s01.t020")}
                        </div>
                        <div className="bubble b-in msg">{t("s01.t021")}</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E6ECF0] p-4">
                      <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s01.t022")}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="avatar" style={{ background: "#0FAF7A" }}>{t("s01.t023")}</span>
                        <div>
                          <b>{t("s01.t024")}</b>
                          <div className="text-[11px] text-[#6B7C8C]">{t("s01.t025")}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s01.t026")}</span>
                        <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s01.t027")}</span>
                        <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s01.t028")}</span>
                      </div>
                      <div className="mt-3 text-xs flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s01.t029")}</span>
                        <b>{t("s01.t030")}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone absolute right-4 xl:right-[calc(50%-600px)] -bottom-2 hidden lg:block !w-[210px]">
              <div className="phone-in">
                <div className="bg-[#075E54] text-white px-3 pt-5 pb-2 text-xs font-bold">{t("s01.t031")}</div>
                <div className="wa-bg p-2 flex flex-col gap-1.5 h-[300px] justify-end text-[11px]">
                  <div className="bubble b-in msg !text-[11px]">{t("s01.t032")}</div>
                  <div className="bg-white rounded-lg text-center font-bold text-[#2F6BFF] py-1.5 msg">{t("s01.t033")}</div>
                  <div className="bg-white rounded-lg text-center font-bold text-[#2F6BFF] py-1.5 msg">{t("s01.t034")}</div>
                  <div className="bubble b-out msg !text-[11px]">{t("s01.t035")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* Sticky feature sub-nav */}
        <FeatureSubNav links={[["api", t("subnav.api")], ["marketing", t("subnav.marketing")], ["ai", t("subnav.ai")], ["chatbot", t("subnav.chatbot")], ["inbox", t("subnav.inbox")], ["automation", t("subnav.automation")], ["crm", t("subnav.crm")], ["analytics", t("subnav.analytics")]]} />
        {/* OVERVIEW */}
        {t.show("s02") && (<section className="section soft">
          <div className="wrap">
            <div className="max-w-2xl rv">
              <h2 className="h2">{t("s02.t001")}</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href={t("s02.l001")} className="card card-hover p-6 rv group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i001")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t002")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t003")}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-[#067955]">
                  <i className="w-1.5 h-1.5 rounded-full bg-[#0FAF7A]" />
                  {t("s02.t004")}
                </div>
              </a>
              {" "}
              <a href={t("s02.l002")} className="card card-hover p-6 rv rv-d1 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i002")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t005")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t006")}</p>
                <div className="mt-4 bar-track">
                  <div className="bar-fill" style={{ "--w": "78%" }} />
                </div>
              </a>
              {" "}
              <a href={t("s02.l003")} className="card card-hover p-6 rv rv-d2 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i003")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t007")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t008")}</p>
                <div className="mt-4 bubble b-ai !text-[11px] !max-w-full !shadow-none border border-[#E6ECF0]">{t("s02.t009")}</div>
              </a>
              {" "}
              <a href={t("s02.l004")} className="card card-hover p-6 rv rv-d3 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i004")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t010")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t011")}</p>
                <div className="mt-4 flex gap-1.5">
                  <span className="chip !text-[10px] !py-1">{t("s02.t012")}</span>
                  <span className="chip !text-[10px] !py-1">{t("s02.t013")}</span>
                  <span className="chip !text-[10px] !py-1">{t("s02.t014")}</span>
                </div>
              </a>
              {" "}
              <a href={t("s02.l005")} className="card card-hover p-6 rv group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i005")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t015")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t016")}</p>
                <div className="mt-4 flex -space-x-2">
                  <span className="avatar !w-7 !h-7 ring-2 ring-white" style={{ background: "#0FAF7A" }}>{t("s02.t017")}</span>
                  <span className="avatar !w-7 !h-7 ring-2 ring-white" style={{ background: "#2F6BFF" }}>{t("s02.t018")}</span>
                  <span className="avatar !w-7 !h-7 ring-2 ring-white" style={{ background: "#6B3FD6" }}>{t("s02.t019")}</span>
                  <span className="avatar !w-7 !h-7 ring-2 ring-white !text-[#33475B]" style={{ background: "#EEF2F4" }}>{t("s02.t020")}</span>
                </div>
              </a>
              {" "}
              <a href={t("s02.l006")} className="card card-hover p-6 rv rv-d1 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i006")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t021")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t022")}</p>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-[#33475B]">
                  <span className="px-2 py-1 rounded-md bg-[#F5F8F7]">{t("s02.t023")}</span>
                  →
                  <span className="px-2 py-1 rounded-md bg-[#F5F8F7]">{t("s02.t024")}</span>
                  →
                  <span className="px-2 py-1 rounded-md bg-[#ECFBF4] text-[#067955]">{t("s02.t025")}</span>
                </div>
              </a>
              {" "}
              <a href={t("s02.l007")} className="card card-hover p-6 rv rv-d2 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i007")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t026")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t027")}</p>
                <div className="mt-4 flex gap-1">
                  <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s02.t028")}</span>
                  <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s02.t029")}</span>
                </div>
              </a>
              {" "}
              <a href={t("s02.l008")} className="card card-hover p-6 rv rv-d3 group">
                <div className="flex justify-between">
                  <span className="icon-tile">
                    <svg>
                      <use href={"#" + t("s02.i008")} />
                    </svg>
                  </span>
                  <span className="text-[#B7C4CE] group-hover:text-[#0FAF7A]">→</span>
                </div>
                <h3 className="h3 mt-5 !text-[1.05rem]">{t("s02.t030")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s02.t031")}</p>
                <div className="mt-4 flex items-end gap-1 h-6">
                  <i className="flex-1 rounded-sm bg-[#D7F3E6] h-[40%]" />
                  <i className="flex-1 rounded-sm bg-[#B5EAD2] h-[60%]" />
                  <i className="flex-1 rounded-sm bg-[#7ED9B2] h-[50%]" />
                  <i className="flex-1 rounded-sm bg-[#3DC592] h-[80%]" />
                  <i className="flex-1 rounded-sm bg-[#0FAF7A] h-full" />
                </div>
              </a>
            </div>
          </div>
        </section>)}
        {/* API */}
        {t.show("s03") && (<section id="api" className="section scroll-mt-32">
          <div className="wrap grid lg:grid-cols-2 gap-14 items-center">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s03.t001")}</h2>
              <p className="lead mt-5">
                {t("s03.t002")}
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
                <li className="check">{t("s03.t003")}</li>
                <li className="check">{t("s03.t004")}</li>
                <li className="check">{t("s03.t005")}</li>
                <li className="check">{t("s03.t006")}</li>
                <li className="check">{t("s03.t007")}</li>
                <li className="check">{t("s03.t008")}</li>
                <li className="check">{t("s03.t009")}</li>
                <li className="check">{t("s03.t010")}</li>
                <li className="check">{t("s03.t011")}</li>
                <li className="check">{t("s03.t012")}</li>
              </ul>
              <a href={t("s03.l001")} className="btn btn-primary mt-9">
                {t("s03.t013")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s03.i001")} />
                </svg>
              </a>
            </div>
            <div className="rv rv-d2" data-anim="">
              <div className="card !rounded-[28px] p-6 md:p-8" style={{ background: "var(--grad-soft)" }}>
                <div className="flex flex-col items-center">
                  <div className="node msg">
                    <span className="icon-tile !w-9 !h-9 !bg-[#E7F9EE] text-[#25D366]">
                      <svg>
                        <use href={"#" + t("s03.i002")} />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[11px] text-[#6B7C8C]">{t("s03.t014")}</div>
                      <b>
                        {t("s03.t015")}{" "}
                        <span className="text-[#0FAF7A]">✓</span>
                      </b>
                    </div>
                  </div>
                  <svg width="10" height="34">
                    <line className="flow-line" x1="5" y1="0" x2="5" y2="34" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="msg rounded-2xl bg-white shadow-xl border border-[#E6ECF0] px-6 py-4 flex items-center gap-3">
                    <img src={settings.logo} alt="WAPI" className="h-9" />
                    <span className="text-xs font-bold text-[#6B7C8C]">{t("s03.t016")}</span>
                  </div>
                  <svg viewBox="0 0 400 40" className="w-full h-10" preserveAspectRatio="none">
                    <g stroke="#0FAF7A" strokeWidth="2" fill="none" className="flow-line">
                      <path d="M200 0 V14 M200 14 H40 V40 M200 14 H120 V40 M200 14 V40 M200 14 H280 V40 M200 14 H360 V40" />
                    </g>
                  </svg>
                  <div className="grid grid-cols-5 gap-2 w-full text-center text-[11px] md:text-xs font-bold">
                    <div className="msg bg-white rounded-xl border border-[#E6ECF0] py-3 px-1">
                      <svg width="18" height="18" className="mx-auto text-[#E0353B]">
                        <use href={"#" + t("s03.i003")} />
                      </svg>
                      <div className="mt-1.5">{t("s03.t017")}</div>
                    </div>
                    <div className="msg bg-white rounded-xl border border-[#E6ECF0] py-3 px-1">
                      <svg width="18" height="18" className="mx-auto text-[#0FAF7A]">
                        <use href={"#" + t("s03.i004")} />
                      </svg>
                      <div className="mt-1.5">{t("s03.t018")}</div>
                    </div>
                    <div className="msg bg-white rounded-xl border border-[#E6ECF0] py-3 px-1">
                      <svg width="18" height="18" className="mx-auto text-[#2F6BFF]">
                        <use href={"#" + t("s03.i005")} />
                      </svg>
                      <div className="mt-1.5">{t("s03.t019")}</div>
                    </div>
                    <div className="msg bg-white rounded-xl border border-[#E6ECF0] py-3 px-1">
                      <svg width="18" height="18" className="mx-auto text-[#6B3FD6]">
                        <use href={"#" + t("s03.i006")} />
                      </svg>
                      <div className="mt-1.5">{t("s03.t020")}</div>
                    </div>
                    <div className="msg bg-white rounded-xl border border-[#E6ECF0] py-3 px-1">
                      <svg width="18" height="18" className="mx-auto text-[#F5A524]">
                        <use href={"#" + t("s03.i007")} />
                      </svg>
                      <div className="mt-1.5">{t("s03.t021")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* MARKETING */}
        {t.show("s04") && (<section id="marketing" className="section soft scroll-mt-32">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-10 items-end rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s04.t001")}</h2>
              <p className="lead">
                {t("s04.t002")}
              </p>
            </div>
            <div className="mt-12 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s04.t003")}</span>
                <span className="ml-auto btn btn-primary !py-1 !px-3 !text-xs">{t("s04.t004")}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-[13px]">
                  <thead className="text-left text-[11px] uppercase tracking-wider text-[#6B7C8C]">
                    <tr className="border-b border-[#E6ECF0]">
                      <th className="px-5 py-3 font-bold">{t("s04.t005")}</th>
                      <th className="font-bold">{t("s04.t006")}</th>
                      <th className="font-bold">{t("s04.t007")}</th>
                      <th className="font-bold">{t("s04.t008")}</th>
                      <th className="font-bold">{t("s04.t009")}</th>
                      <th className="font-bold">{t("s04.t010")}</th>
                      <th className="font-bold pr-5">{t("s04.t011")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#F0F3F5] msg">
                      <td className="px-5 py-4">
                        <b>{t("s04.t012")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s04.t013")}</div>
                      </td>
                      <td>{t("s04.t014")}</td>
                      <td>
                        <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s04.t015")}</span>
                      </td>
                      <td>
                        <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s04.t016")}</span>
                      </td>
                      <td>
                        <b>{t("s04.t017")}</b>
                      </td>
                      <td>
                        <b>{t("s04.t018")}</b>
                      </td>
                      <td className="pr-5">
                        <b className="text-[#067955]">{t("s04.t019")}</b>
                      </td>
                    </tr>
                    <tr className="border-b border-[#F0F3F5] msg">
                      <td className="px-5 py-4">
                        <b>{t("s04.t020")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s04.t021")}</div>
                      </td>
                      <td>{t("s04.t022")}</td>
                      <td>
                        <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s04.t023")}</span>
                      </td>
                      <td>
                        <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s04.t024")}</span>
                      </td>
                      <td>
                        <b>{t("s04.t025")}</b>
                      </td>
                      <td>
                        <b>{t("s04.t026")}</b>
                      </td>
                      <td className="pr-5">
                        <b className="text-[#067955]">{t("s04.t027")}</b>
                      </td>
                    </tr>
                    <tr className="border-b border-[#F0F3F5] msg">
                      <td className="px-5 py-4">
                        <b>{t("s04.t028")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s04.t029")}</div>
                      </td>
                      <td>{t("s04.t030")}</td>
                      <td>
                        <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s04.t031")}</span>
                      </td>
                      <td>
                        <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s04.t032")}</span>
                      </td>
                      <td className="text-[#B7C4CE]">—</td>
                      <td className="text-[#B7C4CE]">—</td>
                      <td className="pr-5 text-[#B7C4CE]">—</td>
                    </tr>
                    <tr className="msg">
                      <td className="px-5 py-4">
                        <b>{t("s04.t033")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s04.t034")}</div>
                      </td>
                      <td>{t("s04.t035")}</td>
                      <td>
                        <span className="tag bg-[#F5F8F7] text-[#33475B]">{t("s04.t036")}</span>
                      </td>
                      <td>
                        <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s04.t037")}</span>
                      </td>
                      <td>
                        <b>{t("s04.t038")}</b>
                      </td>
                      <td>
                        <b>{t("s04.t039")}</b>
                      </td>
                      <td className="pr-5">
                        <b className="text-[#067955]">{t("s04.t040")}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              <div className="card p-7 rv">
                <h3 className="h3">{t("s04.t041")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">{t("s04.t042")}</span>
                  <span className="chip">{t("s04.t043")}</span>
                  <span className="chip">{t("s04.t044")}</span>
                  <span className="chip">{t("s04.t045")}</span>
                  <span className="chip">{t("s04.t046")}</span>
                  <span className="chip">{t("s04.t047")}</span>
                  <span className="chip">{t("s04.t048")}</span>
                  <span className="chip">{t("s04.t049")}</span>
                  <span className="chip">{t("s04.t050")}</span>
                </div>
              </div>
              <div className="card p-7 rv rv-d1">
                <h3 className="h3">{t("s04.t051")}</h3>
                <div className="mt-4 rounded-xl border border-[#E6ECF0] p-3 text-[13px] space-y-2 bg-[#FAFBFC]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7C8C] w-16">{t("s04.t052")}</span>
                    <span className="chip !py-1">{t("s04.t053")}</span>
                    <span className="text-[#6B7C8C]">{t("s04.t054")}</span>
                    <span className="chip !py-1 !bg-[#ECFBF4] !text-[#067955] !border-[#CDEEDD]">{t("s04.t055")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7C8C] w-16">{t("s04.t056")}</span>
                    <span className="chip !py-1">{t("s04.t057")}</span>
                    <span className="text-[#6B7C8C]">{t("s04.t058")}</span>
                    <span className="chip !py-1 !bg-[#ECFBF4] !text-[#067955] !border-[#CDEEDD]">{t("s04.t059")}</span>
                  </div>
                  <div className="text-right text-xs font-bold text-[#067955]">{t("s04.t060")}</div>
                </div>
                <p className="text-sm text-[#6B7C8C] mt-4 leading-relaxed">
                  {t("s04.t061")}
                </p>
              </div>
              <div className="card p-7 rv rv-d2">
                <h3 className="h3">{t("s04.t062")}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li className="check">{t("s04.t063")}</li>
                  <li className="check">{t("s04.t064")}</li>
                  <li className="check">{t("s04.t065")}</li>
                  <li className="check">{t("s04.t066")}</li>
                  <li className="check">{t("s04.t067")}</li>
                  <li className="check">{t("s04.t068")}</li>
                  <li className="check">{t("s04.t069")}</li>
                  <li className="check">{t("s04.t070")}</li>
                  <li className="check">{t("s04.t071")}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s04.l001")} className="btn btn-primary">
                {t("s04.t072")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s04.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* AI AGENT */}
        {t.show("s05") && (<section id="ai" className="section scroll-mt-32">
          <div className="wrap">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
              <div className="rv">
                <h2 className="h2">{t("s05.t001")}</h2>
                <p className="lead mt-5">{t("s05.t002")}</p>
                <p className="mt-3 text-[#33475B] leading-relaxed">
                  {t("s05.t003")}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
                  <li className="check">{t("s05.t004")}</li>
                  <li className="check">{t("s05.t005")}</li>
                  <li className="check">{t("s05.t006")}</li>
                  <li className="check">{t("s05.t007")}</li>
                  <li className="check">{t("s05.t008")}</li>
                  <li className="check">{t("s05.t009")}</li>
                  <li className="check">{t("s05.t010")}</li>
                  <li className="check">{t("s05.t011")}</li>
                  <li className="check">{t("s05.t012")}</li>
                </ul>
                <a href={t("s05.l001")} className="btn btn-primary mt-9">
                  {t("s05.t013")}{" "}
                  <svg width="18" height="18">
                    <use href={"#" + t("s05.i001")} />
                  </svg>
                </a>
              </div>
              <div className="relative flex justify-center gap-5 items-end rv rv-d2" data-anim="">
                <div className="phone !w-[260px]">
                  <div className="phone-in">
                    <div className="bg-[#075E54] text-white px-3 pt-6 pb-2.5">
                      <b className="text-sm">{t("s05.t014")}</b>
                      <div className="text-[10px] opacity-80">{t("s05.t015")}</div>
                    </div>
                    <div className="wa-bg p-2.5 flex flex-col gap-1.5 h-[440px] justify-end text-[12px]">
                      <div className="bubble b-out msg">{t("s05.t016")}</div>
                      <div className="bubble b-in msg">{t("s05.t017")}</div>
                      <div className="msg grid grid-cols-2 gap-1">
                        <span className="bg-white rounded-lg text-center font-bold text-[#2F6BFF] py-1.5 text-[11px]">{t("s05.t018")}</span>
                        <span className="bg-[#D9FDD3] rounded-lg text-center font-bold text-[#067955] py-1.5 text-[11px] ring-1 ring-[#0FAF7A]">{t("s05.t019")}</span>
                      </div>
                      <div className="bubble b-in msg">{t("s05.t020")}</div>
                      <div className="bubble b-out msg">{t("s05.t021")}</div>
                      <div className="bubble b-in msg">{t("s05.t022")}</div>
                      <div className="bubble b-out msg">{t("s05.t023")}</div>
                      <div className="bubble b-in msg">{t("s05.t024")}</div>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block w-[200px] space-y-3 mb-6">
                  <div className="card !rounded-2xl p-4 shadow-lg msg">
                    <div className="text-[11px] font-bold text-[#6B7C8C] uppercase tracking-wider">{t("s05.t025")}</div>
                    <div className="mt-2 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s05.t026")}</span>
                        <b>{t("s05.t027")}</b>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s05.t028")}</span>
                        <b>{t("s05.t029")}</b>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s05.t030")}</span>
                        <b>{t("s05.t031")}</b>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s05.t032")}</span>
                        <b>{t("s05.t033")}</b>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7C8C]">{t("s05.t034")}</span>
                        <b>{t("s05.t035")}</b>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#0A1A24] text-white p-4 msg">
                    <div className="text-[11px] font-bold text-[#7FE0B6]">{t("s05.t036")}</div>
                    <div className="mt-1 text-sm font-semibold">{t("s05.t037")}</div>
                    <div className="text-[11px] text-[#B7C4CE] mt-1">{t("s05.t038")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid lg:grid-cols-3 gap-5">
              <div className="card p-7 rv">
                <h3 className="h3">{t("s05.t039")}</h3>
                <p className="text-sm text-[#6B7C8C] mt-2">{t("s05.t040")}</p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-[13px] font-semibold">
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t041")}</span>
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t042")}</span>
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t043")}</span>
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t044")}</span>
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t045")}</span>
                  <span className="rounded-xl bg-[#F5F8F7] px-3 py-2.5">{t("s05.t046")}</span>
                  <span className="rounded-xl bg-[#ECFBF4] text-[#067955] px-3 py-2.5 col-span-2">{t("s05.t047")}</span>
                </div>
              </div>
              <div className="card p-7 rv rv-d1">
                <h3 className="h3">{t("s05.t048")}</h3>
                <p className="text-sm text-[#6B7C8C] mt-2">
                  <br />
                </p>
                <div className="mt-5 space-y-2 text-[13px]">
                  <div className="bubble b-ai !max-w-full !shadow-none border border-[#E6ECF0]">{t("s05.t049")}</div>
                  <div className="bubble b-ai !max-w-full !shadow-none border border-[#E6ECF0]">{t("s05.t050")}</div>
                  <div className="bubble b-ai !max-w-full !shadow-none border border-[#E6ECF0]">{t("s05.t051")}</div>
                  <div className="bubble b-ai !max-w-full !shadow-none border border-[#E6ECF0]">{t("s05.t052")}</div>
                  <div className="bubble b-ai !max-w-full !shadow-none border border-[#E6ECF0]">{t("s05.t053")}</div>
                </div>
              </div>
              <div className="card p-7 rv rv-d2">
                <h3 className="h3">{t("s05.t054")}</h3>
                <p className="text-sm text-[#6B7C8C] mt-2">
                  <br />
                </p>
                <div className="mt-5 space-y-2 text-[13px] font-semibold">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#ECFBF4]">
                    <span className="icon-tile !w-8 !h-8 !bg-[#0FAF7A] text-white">
                      <svg>
                        <use href={"#" + t("s05.i002")} />
                      </svg>
                    </span>
                    {t("s05.t055")}
                  </div>
                  <div className="pl-7 text-[#B7C4CE] leading-none">↓</div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F8F7]">
                    <span className="icon-tile !w-8 !h-8 !bg-white">
                      <svg>
                        <use href={"#" + t("s05.i003")} />
                      </svg>
                    </span>
                    {t("s05.t056")}
                  </div>
                  <div className="pl-7 text-[#B7C4CE] leading-none">↓</div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F8F7]">
                    <span className="avatar !w-8 !h-8" style={{ background: "#2F6BFF" }}>{t("s05.t057")}</span>
                    {t("s05.t058")}
                  </div>
                  <div className="pl-7 text-[#B7C4CE] leading-none">↓</div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-[#0FAF7A]">
                    <span className="icon-tile !w-8 !h-8">
                      <svg>
                        <use href={"#" + t("s05.i004")} />
                      </svg>
                    </span>
                    {t("s05.t059")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
        {/* CHATBOT */}
        {t.show("s06") && (<section id="chatbot" className="section soft scroll-mt-32">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s06.t001")}</h2>
              <p className="lead mt-5">
                {t("s06.t002")}
              </p>
            </div>
            <div className="mt-12 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s06.t003")}</span>
                <span className="ml-auto tag bg-[#ECFBF4] text-[#067955]">{t("s06.t004")}</span>
              </div>
              <div className="p-6 md:p-10 overflow-x-auto" style={{ background: "#FBFCFD radial-gradient(#E2E8EC 1px,transparent 1px) 0 0/18px 18px" }}>
                <div className="min-w-[760px] flex flex-col items-center">
                  <div className="node msg">
                    <span className="icon-tile !w-8 !h-8 !bg-[#E7F9EE] text-[#25D366]">
                      <svg>
                        <use href={"#" + t("s06.i001")} />
                      </svg>
                    </span>
                    {t("s06.t005")}
                  </div>
                  <svg width="10" height="26">
                    <line className="flow-line" x1="5" y1="0" x2="5" y2="26" stroke="#0FAF7A" strokeWidth="2" />
                  </svg>
                  <div className="msg rounded-2xl bg-white border border-[#E6ECF0] shadow-md p-4 w-[300px]">
                    <div className="text-[11px] font-bold text-[#6B7C8C]">{t("s06.t006")}</div>
                    <b className="block mt-1">{t("s06.t007")}</b>
                    <div className="grid grid-cols-2 gap-1.5 mt-3 text-xs font-bold text-[#2F6BFF] text-center">
                      <span className="rounded-lg bg-[#F5F8F7] py-1.5">{t("s06.t008")}</span>
                      <span className="rounded-lg bg-[#F5F8F7] py-1.5">{t("s06.t009")}</span>
                      <span className="rounded-lg bg-[#F5F8F7] py-1.5">{t("s06.t010")}</span>
                      <span className="rounded-lg bg-[#F5F8F7] py-1.5">{t("s06.t011")}</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 760 40" className="w-full h-10" preserveAspectRatio="none">
                    <g stroke="#0FAF7A" strokeWidth="2" fill="none" className="flow-line">
                      <path d="M380 0 V16 M95 16 H665 M95 16 V40 M285 16 V40 M475 16 V40 M665 16 V40" />
                    </g>
                  </svg>
                  <div className="grid grid-cols-4 gap-4 w-full text-[13px]">
                    <div className="msg rounded-2xl bg-white border border-[#E6ECF0] p-3.5 shadow-sm">
                      <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s06.t012")}</span>
                      <div className="mt-2 font-semibold">{t("s06.t013")}</div>
                      <div className="text-[11px] text-[#6B7C8C] mt-1">{t("s06.t014")}</div>
                    </div>
                    <div className="msg rounded-2xl bg-white border border-[#E6ECF0] p-3.5 shadow-sm">
                      <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s06.t015")}</span>
                      <div className="mt-2 font-semibold">{t("s06.t016")}</div>
                      <div className="text-[11px] text-[#6B7C8C] mt-1">{t("s06.t017")}</div>
                    </div>
                    <div className="msg rounded-2xl bg-white border border-[#E6ECF0] p-3.5 shadow-sm">
                      <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s06.t018")}</span>
                      <div className="mt-2 font-semibold">{t("s06.t019")}</div>
                      <div className="text-[11px] text-[#6B7C8C] mt-1">{t("s06.t020")}</div>
                    </div>
                    <div className="msg rounded-2xl bg-white border border-[#E6ECF0] p-3.5 shadow-sm">
                      <span className="tag bg-[#F3EEFF] text-[#6B3FD6]">{t("s06.t021")}</span>
                      <div className="mt-2 font-semibold">{t("s06.t022")}</div>
                      <div className="text-[11px] text-[#6B7C8C] mt-1">{t("s06.t023")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="card p-7 rv">
                <h3 className="h3">{t("s06.t024")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">{t("s06.t025")}</span>
                  <span className="chip">{t("s06.t026")}</span>
                  <span className="chip">{t("s06.t027")}</span>
                  <span className="chip">{t("s06.t028")}</span>
                  <span className="chip">{t("s06.t029")}</span>
                  <span className="chip">{t("s06.t030")}</span>
                  <span className="chip">{t("s06.t031")}</span>
                  <span className="chip">{t("s06.t032")}</span>
                  <span className="chip">{t("s06.t033")}</span>
                  <span className="chip">{t("s06.t034")}</span>
                  <span className="chip">{t("s06.t035")}</span>
                  <span className="chip">{t("s06.t036")}</span>
                </div>
              </div>
              <div className="card p-7 rv rv-d1">
                <h3 className="h3">{t("s06.t037")}</h3>
                <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <li className="check">{t("s06.t038")}</li>
                  <li className="check">{t("s06.t039")}</li>
                  <li className="check">{t("s06.t040")}</li>
                  <li className="check">{t("s06.t041")}</li>
                  <li className="check">{t("s06.t042")}</li>
                  <li className="check">{t("s06.t043")}</li>
                  <li className="check">{t("s06.t044")}</li>
                  <li className="check">{t("s06.t045")}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s06.l001")} className="btn btn-primary">
                {t("s06.t046")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s06.i002")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* INBOX */}
        {t.show("s07") && (<section id="inbox" className="section scroll-mt-32">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-10 items-end rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s07.t001")}</h2>
              <p className="lead">
                {t("s07.t002")}
              </p>
            </div>
            <div className="mt-12 ui rv" data-anim="">
              <div className="ui-bar">
                <i />
                <i />
                <i />
                <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s07.t003")}</span>
                <div className="ml-auto flex -space-x-2">
                  <span className="avatar !w-6 !h-6 !text-[9px] ring-2 ring-white" style={{ background: "#2F6BFF" }}>{t("s07.t004")}</span>
                  <span className="avatar !w-6 !h-6 !text-[9px] ring-2 ring-white" style={{ background: "#0FAF7A" }}>{t("s07.t005")}</span>
                  <span className="avatar !w-6 !h-6 !text-[9px] ring-2 ring-white" style={{ background: "#6B3FD6" }}>{t("s07.t006")}</span>
                  <span className="avatar !w-6 !h-6 !text-[9px] ring-2 ring-white" style={{ background: "#F5A524" }}>{t("s07.t007")}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#067955] ml-2">{t("s07.t008")}</span>
              </div>
              <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_260px] text-[13px] min-h-[440px]">
                <div className="border-r border-[#E6ECF0] bg-[#FAFBFC] p-3 hidden md:block">
                  <div className="rounded-lg border border-[#E6ECF0] bg-white px-3 py-2 text-[#B7C4CE] text-xs">{t("s07.t009")}</div>
                  <div className="flex gap-1 my-3 text-[11px] font-bold">
                    <span className="px-2 py-1 rounded-md bg-[#0A1A24] text-white">{t("s07.t010")}</span>
                    <span className="px-2 py-1 rounded-md text-[#6B7C8C]">{t("s07.t011")}</span>
                    <span className="px-2 py-1 rounded-md text-[#6B7C8C]">{t("s07.t012")}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="p-2.5 rounded-lg bg-white shadow-sm flex gap-2">
                      <span className="avatar" style={{ background: "#0FAF7A" }}>{t("s07.t013")}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <b>{t("s07.t014")}</b>
                          <span className="text-[10px] text-[#6B7C8C]">{t("s07.t015")}</span>
                        </div>
                        <div className="text-[11px] text-[#6B7C8C] truncate">{t("s07.t016")}</div>
                        <div className="text-[10px] text-[#2F6BFF] font-bold mt-0.5">{t("s07.t017")}</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg flex gap-2">
                      <span className="avatar" style={{ background: "#6B3FD6" }}>{t("s07.t018")}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <b>{t("s07.t019")}</b>
                          <span className="text-[10px] text-[#6B7C8C]">{t("s07.t020")}</span>
                        </div>
                        <div className="text-[11px] text-[#6B7C8C] truncate">{t("s07.t021")}</div>
                        <div className="text-[10px] text-[#6B3FD6] font-bold mt-0.5">{t("s07.t022")}</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg flex gap-2">
                      <span className="avatar" style={{ background: "#F5A524" }}>{t("s07.t023")}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <b>{t("s07.t024")}</b>
                          <span className="text-[10px] text-[#6B7C8C]">{t("s07.t025")}</span>
                        </div>
                        <div className="text-[11px] text-[#6B7C8C] truncate">{t("s07.t026")}</div>
                        <div className="text-[10px] text-[#067955] font-bold mt-0.5">{t("s07.t027")}</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg flex gap-2">
                      <span className="avatar" style={{ background: "#E0353B" }}>{t("s07.t028")}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <b>{t("s07.t029")}</b>
                          <span className="text-[10px] text-[#6B7C8C]">{t("s07.t030")}</span>
                        </div>
                        <div className="text-[11px] text-[#6B7C8C] truncate">{t("s07.t031")}</div>
                        <div className="text-[10px] text-[#A96A00] font-bold mt-0.5">{t("s07.t032")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#E6ECF0]">
                    <div className="flex items-center gap-2">
                      <span className="avatar" style={{ background: "#0FAF7A" }}>{t("s07.t033")}</span>
                      <div>
                        <b>{t("s07.t034")}</b>
                        <div className="text-[11px] text-[#6B7C8C]">{t("s07.t035")}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="chip !text-[11px]">{t("s07.t036")}</span>
                      <span className="chip !text-[11px] !bg-[#0FAF7A] !text-white !border-[#0FAF7A]">{t("s07.t037")}</span>
                    </div>
                  </div>
                  <div className="wa-bg flex-1 p-4 flex flex-col justify-end gap-2">
                    <div className="msg text-center">
                      <span className="tag bg-white text-[#6B7C8C]">{t("s07.t038")}</span>
                    </div>
                    <div className="bubble b-in msg">{t("s07.t039")}</div>
                    <div className="bubble b-out msg">{t("s07.t040")}</div>
                    <div className="bubble b-in msg">{t("s07.t041")}</div>
                    <div className="msg rounded-lg bg-[#FFF8DB] border border-[#F3E2A0] px-3 py-2 text-[12px] max-w-[85%]">
                      <b>{t("s07.t042")}</b>
                      {" "}{t("s07.t043")}
                    </div>
                  </div>
                </div>
                <div className="border-l border-[#E6ECF0] p-4 space-y-3 hidden lg:block text-xs">
                  <div className="text-center">
                    <span className="avatar !w-12 !h-12 mx-auto !text-sm" style={{ background: "#0FAF7A" }}>{t("s07.t044")}</span>
                    <b className="block mt-2 text-sm">{t("s07.t045")}</b>
                    <div className="text-[#6B7C8C]">{t("s07.t046")}</div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s07.t047")}</span>
                    <b>{t("s07.t048")}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7C8C]">{t("s07.t049")}</span>
                    <b className="text-[#067955]">{t("s07.t050")}</b>
                  </div>
                  <div>
                    <div className="text-[#6B7C8C] mb-1.5">{t("s07.t051")}</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s07.t052")}</span>
                      <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s07.t053")}</span>
                      <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s07.t054")}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#6B7C8C] mb-1.5">{t("s07.t055")}</div>
                    <div className="rounded-lg bg-[#F5F8F7] p-2.5 leading-relaxed">{t("s07.t056")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid md:grid-cols-[1fr_1.4fr] gap-5">
              <div className="card p-7 rv">
                <h3 className="h3">{t("s07.t057")}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li className="check">{t("s07.t058")}</li>
                  <li className="check">{t("s07.t059")}</li>
                  <li className="check">{t("s07.t060")}</li>
                  <li className="check">{t("s07.t061")}</li>
                  <li className="check">{t("s07.t062")}</li>
                </ul>
              </div>
              <div className="card p-7 rv rv-d1">
                <h3 className="h3">{t("s07.t063")}</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <li className="check">{t("s07.t064")}</li>
                  <li className="check">{t("s07.t065")}</li>
                  <li className="check">{t("s07.t066")}</li>
                  <li className="check">{t("s07.t067")}</li>
                  <li className="check">{t("s07.t068")}</li>
                  <li className="check">{t("s07.t069")}</li>
                  <li className="check">{t("s07.t070")}</li>
                  <li className="check">{t("s07.t071")}</li>
                  <li className="check">{t("s07.t072")}</li>
                  <li className="check">{t("s07.t073")}</li>
                  <li className="check">{t("s07.t074")}</li>
                  <li className="check">{t("s07.t075")}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s07.l001")} className="btn btn-primary">
                {t("s07.t076")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s07.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* AUTOMATION */}
        {t.show("s08") && (<section id="automation" className="section soft scroll-mt-32">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s08.t001")}</h2>
              <p className="lead mt-5">{t("s08.t002")}</p>
            </div>
            <div className="mt-12 grid lg:grid-cols-[1.35fr_1fr] gap-6">
              <div className="ui rv" data-anim="">
                <div className="ui-bar">
                  <i />
                  <i />
                  <i />
                  <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s08.t003")}</span>
                  <span className="ml-auto tag bg-[#ECFBF4] text-[#067955]">{t("s08.t004")}</span>
                </div>
                <div className="p-6 md:p-8" style={{ background: "#FBFCFD radial-gradient(#E2E8EC 1px,transparent 1px) 0 0/18px 18px" }}>
                  <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 relative">
                    <div className="space-y-2">
                      <div className="node msg">
                        <span className="tag bg-[#0A1A24] text-white">{t("s08.t005")}</span>
                        {t("s08.t006")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg">
                        <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s08.t007")}</span>
                        {t("s08.t008")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg !border-[#0FAF7A]">
                        <span className="tag bg-[#0FAF7A] text-white">{t("s08.t009")}</span>
                        {t("s08.t010")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg">
                        <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s08.t011")}</span>
                        {t("s08.t012")}
                      </div>
                    </div>
                    <div className="space-y-2 mt-2 sm:mt-0">
                      <div className="node msg">
                        <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s08.t013")}</span>
                        {t("s08.t014")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg !bg-[#FFFBEF]">
                        <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s08.t015")}</span>
                        {t("s08.t016")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg">
                        <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s08.t017")}</span>
                        {t("s08.t018")}
                      </div>
                      <div className="pl-6 text-[#0FAF7A] leading-none">│</div>
                      <div className="node msg">
                        <span className="tag bg-[#F3EEFF] text-[#6B3FD6]">{t("s08.t019")}</span>
                        {t("s08.t020")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rv rv-d1">
                <h3 className="h3">{t("s08.t021")}</h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5 text-[13px] font-semibold">
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#25D366] flex-none">
                      <use href={"#" + t("s08.i001")} />
                    </svg>
                    {t("s08.t022")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#0FAF7A] flex-none">
                      <use href={"#" + t("s08.i002")} />
                    </svg>
                    {t("s08.t023")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#2F6BFF] flex-none">
                      <use href={"#" + t("s08.i003")} />
                    </svg>
                    {t("s08.t024")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#6B3FD6] flex-none">
                      <use href={"#" + t("s08.i004")} />
                    </svg>
                    {t("s08.t025")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#F5A524] flex-none">
                      <use href={"#" + t("s08.i005")} />
                    </svg>
                    {t("s08.t026")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#0EA5A4] flex-none">
                      <use href={"#" + t("s08.i006")} />
                    </svg>
                    {t("s08.t027")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#E0353B] flex-none">
                      <use href={"#" + t("s08.i007")} />
                    </svg>
                    {t("s08.t028")}
                  </div>
                  <div className="card card-hover p-3.5 flex gap-2 items-center">
                    <svg width="16" height="16" className="text-[#33475B] flex-none">
                      <use href={"#" + t("s08.i008")} />
                    </svg>
                    {t("s08.t029")}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-[1.35fr_1fr] gap-6">
              <div className="card p-7 rv">
                <h3 className="h3">{t("s08.t030")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">{t("s08.t031")}</span>
                  <span className="chip">{t("s08.t032")}</span>
                  <span className="chip">{t("s08.t033")}</span>
                  <span className="chip">{t("s08.t034")}</span>
                  <span className="chip">{t("s08.t035")}</span>
                  <span className="chip">{t("s08.t036")}</span>
                  <span className="chip">{t("s08.t037")}</span>
                  <span className="chip">{t("s08.t038")}</span>
                  <span className="chip">{t("s08.t039")}</span>
                  <span className="chip">{t("s08.t040")}</span>
                  <span className="chip">{t("s08.t041")}</span>
                  <span className="chip">{t("s08.t042")}</span>
                  <span className="chip">{t("s08.t043")}</span>
                </div>
              </div>
              <div className="card p-7 rv rv-d1">
                <h3 className="h3">{t("s08.t044")}</h3>
                <p className="text-sm text-[#6B7C8C] mt-2">{t("s08.t045")}</p>
                <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <li className="check">{t("s08.t046")}</li>
                  <li className="check">{t("s08.t047")}</li>
                  <li className="check">{t("s08.t048")}</li>
                  <li className="check">{t("s08.t049")}</li>
                  <li className="check">{t("s08.t050")}</li>
                  <li className="check">{t("s08.t051")}</li>
                  <li className="check">{t("s08.t052")}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s08.l001")} className="btn btn-primary">
                {t("s08.t053")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s08.i009")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* CRM */}
        {t.show("s09") && (<section id="crm" className="section scroll-mt-32">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-10 items-end rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s09.t001")}</h2>
              <p className="lead">
                {t("s09.t002")}
              </p>
            </div>
            <div className="mt-12 grid lg:grid-cols-[340px_1fr] gap-6">
              <div className="ui p-5 rv text-[13px]" data-anim="">
                <div className="flex items-center gap-3">
                  <span className="avatar !w-12 !h-12 !text-sm" style={{ background: "#6B3FD6" }}>{t("s09.t003")}</span>
                  <div>
                    <b className="text-base display">{t("s09.t004")}</b>
                    <div className="text-xs text-[#6B7C8C]">{t("s09.t005")}</div>
                  </div>
                </div>
                <dl className="mt-4 divide-y divide-[#F0F3F5]">
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t006")}</dt>
                    <dd className="font-semibold">{t("s09.t007")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t008")}</dt>
                    <dd className="font-semibold">{t("s09.t009")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t010")}</dt>
                    <dd className="font-semibold">{t("s09.t011")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t012")}</dt>
                    <dd className="font-semibold">{t("s09.t013")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t014")}</dt>
                    <dd className="font-semibold">{t("s09.t015")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t016")}</dt>
                    <dd>
                      <span className="tag bg-[#ECFBF4] text-[#067955]">{t("s09.t017")}</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t018")}</dt>
                    <dd className="font-semibold">{t("s09.t019")}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t020")}</dt>
                    <dd className="flex gap-1">
                      <span className="tag bg-[#EEF4FF] text-[#2F6BFF]">{t("s09.t021")}</span>
                      <span className="tag bg-[#FFF6E5] text-[#A96A00]">{t("s09.t022")}</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#6B7C8C]">{t("s09.t023")}</dt>
                    <dd className="font-semibold">{t("s09.t024")}</dd>
                  </div>
                </dl>
                <div className="mt-3 rounded-lg bg-[#F5F8F7] p-3">
                  <div className="text-[11px] font-bold text-[#6B7C8C]">{t("s09.t025")}</div>
                  <div className="mt-1">{t("s09.t026")}</div>
                </div>
                <div className="mt-3 text-[11px] font-bold text-[#6B7C8C]">{t("s09.t027")}</div>
                <div className="mt-1.5 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>{t("s09.t028")}</span>
                    <span className="text-[#6B7C8C]">{t("s09.t029")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("s09.t030")}</span>
                    <span className="text-[#6B7C8C]">{t("s09.t031")}</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="ui rv rv-d1" data-anim="">
                  <div className="ui-bar">
                    <i />
                    <i />
                    <i />
                    <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">{t("s09.t032")}</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <div className="grid grid-cols-5 gap-3 min-w-[680px] text-[12px]">
                      <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                        <div className="flex justify-between text-xs font-bold pb-2">
                          <span>{t("s09.t033")}</span>
                          <span className="text-[#6B7C8C]">{t("s09.t034")}</span>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm mb-1.5">
                          <b>{t("s09.t035")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t036")}</div>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm">
                          <b>{t("s09.t037")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t038")}</div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                        <div className="flex justify-between text-xs font-bold pb-2">
                          <span>{t("s09.t039")}</span>
                          <span className="text-[#6B7C8C]">{t("s09.t040")}</span>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm">
                          <b>{t("s09.t041")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t042")}</div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                        <div className="flex justify-between text-xs font-bold pb-2">
                          <span>{t("s09.t043")}</span>
                          <span className="text-[#6B7C8C]">{t("s09.t044")}</span>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm mb-1.5">
                          <b>{t("s09.t045")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t046")}</div>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm">
                          <b>{t("s09.t047")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t048")}</div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#F5F8F7] p-2.5">
                        <div className="flex justify-between text-xs font-bold pb-2">
                          <span>{t("s09.t049")}</span>
                          <span className="text-[#6B7C8C]">{t("s09.t050")}</span>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm ring-1 ring-[#0FAF7A]">
                          <b>{t("s09.t051")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t052")}</div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#ECFBF4] p-2.5">
                        <div className="flex justify-between text-xs font-bold pb-2 text-[#067955]">
                          <span>{t("s09.t053")}</span>
                          <span>{t("s09.t054")}</span>
                        </div>
                        <div className="msg bg-white rounded-lg p-2 shadow-sm">
                          <b>{t("s09.t055")}</b>
                          <div className="text-[10px] text-[#6B7C8C]">{t("s09.t056")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="card p-6 rv">
                    <h3 className="h3">{t("s09.t057")}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="chip">{t("s09.t058")}</span>
                      <span className="chip">{t("s09.t059")}</span>
                      <span className="chip">{t("s09.t060")}</span>
                      <span className="chip">{t("s09.t061")}</span>
                      <span className="chip">{t("s09.t062")}</span>
                      <span className="chip">{t("s09.t063")}</span>
                      <span className="chip">{t("s09.t064")}</span>
                      <span className="chip">{t("s09.t065")}</span>
                    </div>
                  </div>
                  <div className="card p-6 rv rv-d1">
                    <h3 className="h3">{t("s09.t066")}</h3>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-bold text-center">
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#E42527" }}>{t("s09.t067")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#FF7A59" }}>{t("s09.t068")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#00A1E0" }}>{t("s09.t069")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#7F54B3" }}>{t("s09.t070")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#5E8E3E" }}>{t("s09.t071")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2" style={{ color: "#2F6BFF" }}>{t("s09.t072")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2 text-[#33475B]">{t("s09.t073")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2 text-[#0EA5A4]">{t("s09.t074")}</span>
                      <span className="rounded-lg border border-[#E6ECF0] py-2 text-[#0FAF7A]">{t("s09.t075")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s09.l001")} className="btn btn-primary">
                {t("s09.t076")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s09.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* ANALYTICS */}
        {t.show("s10") && (<section id="analytics" className="section soft scroll-mt-32">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s10.t001")}</h2>
              <p className="lead mt-5">{t("s10.t002")}</p>
            </div>
            <AnalyticsTabs />
            <div className="mt-8 rv">
              <h3 className="h3">{t("s10.t003")}</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm font-semibold">
                <div className="card p-4">{t("s10.t004")}</div>
                <div className="card p-4">{t("s10.t005")}</div>
                <div className="card p-4">{t("s10.t006")}</div>
                <div className="card p-4">{t("s10.t007")}</div>
                <div className="card p-4">{t("s10.t008")}</div>
                <div className="card p-4">{t("s10.t009")}</div>
              </div>
            </div>
            <div className="mt-10 rv">
              <a href={t("s10.l001")} className="btn btn-primary">
                {t("s10.t010")}{" "}
                <svg width="18" height="18">
                  <use href={"#" + t("s10.i001")} />
                </svg>
              </a>
            </div>
          </div>
        </section>)}
        {/* AI + HUMAN */}
        {t.show("s11") && (<section className="section">
          <div className="wrap">
            <div className="max-w-3xl rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s11.t001")}</h2>
              <p className="lead mt-5">
                {t("s11.t002")}
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-4 gap-4 relative">
              <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-[2px] bg-[#E6ECF0]">
                <div className="bar-fill !h-[2px] !rounded-none rv" style={{ "--w": "100%", transitionDuration: "2.5s" }} />
              </div>
              <div className="relative rv">
                <span className="w-[72px] h-[72px] rounded-2xl bg-[#0FAF7A] text-white grid place-items-center shadow-lg">
                  <svg width="30" height="30">
                    <use href={"#" + t("s11.i001")} />
                  </svg>
                </span>
                <div className="text-xs font-bold text-[#067955] mt-5">{t("s11.t003")}</div>
                <h3 className="h3 mt-1">{t("s11.t004")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s11.t005")}</p>
              </div>
              <div className="relative rv rv-d1">
                <span className="w-[72px] h-[72px] rounded-2xl bg-white border border-[#E6ECF0] text-[#0FAF7A] grid place-items-center shadow-lg">
                  <svg width="30" height="30">
                    <use href={"#" + t("s11.i002")} />
                  </svg>
                </span>
                <div className="text-xs font-bold text-[#067955] mt-5">{t("s11.t006")}</div>
                <h3 className="h3 mt-1">{t("s11.t007")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s11.t008")}</p>
              </div>
              <div className="relative rv rv-d2">
                <span className="w-[72px] h-[72px] rounded-2xl bg-white border border-[#E6ECF0] text-[#0FAF7A] grid place-items-center shadow-lg">
                  <svg width="30" height="30">
                    <use href={"#" + t("s11.i003")} />
                  </svg>
                </span>
                <div className="text-xs font-bold text-[#067955] mt-5">{t("s11.t009")}</div>
                <h3 className="h3 mt-1">{t("s11.t010")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s11.t011")}</p>
              </div>
              <div className="relative rv rv-d3">
                <span className="w-[72px] h-[72px] rounded-2xl bg-[#0A1A24] text-white grid place-items-center shadow-lg">
                  <svg width="30" height="30">
                    <use href={"#" + t("s11.i004")} />
                  </svg>
                </span>
                <div className="text-xs font-bold text-[#067955] mt-5">{t("s11.t012")}</div>
                <h3 className="h3 mt-1">{t("s11.t013")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s11.t014")}</p>
              </div>
            </div>
          </div>
        </section>)}
        {/* TEAMS */}
        {t.show("s12") && (<section className="section soft">
          <div className="wrap">
            <h2 className="h2 max-w-2xl rv" style={{ fontSize: "36px" }}>{t("s12.t001")}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card card-hover p-7 rv">
                <span className="icon-tile !bg-[#FDECEC] text-[#E0353B]">
                  <svg>
                    <use href={"#" + t("s12.i001")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s12.t002")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s12.t003")}</p>
              </div>
              <div className="card card-hover p-7 rv rv-d1">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s12.i002")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s12.t004")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s12.t005")}</p>
              </div>
              <div className="card card-hover p-7 rv rv-d2">
                <span className="icon-tile !bg-[#E8EFFF] text-[#2F6BFF]">
                  <svg>
                    <use href={"#" + t("s12.i003")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s12.t006")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s12.t007")}</p>
              </div>
              <div className="card card-hover p-7 rv rv-d3">
                <span className="icon-tile !bg-[#EFE8FF] text-[#6B3FD6]">
                  <svg>
                    <use href={"#" + t("s12.i004")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5">{t("s12.t008")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s12.t009")}</p>
              </div>
            </div>
          </div>
        </section>)}
        {/* INDUSTRIES */}
        {t.show("s13") && (<section className="section">
          <div className="wrap">
            <h2 className="h2 rv" style={{ textAlign: "center", fontSize: "36px" }}>{t("s13.t001")}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href={t("s13.l001")} className="card card-hover p-6 rv">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i001")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t002")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t003")}</p>
              </a>
              {" "}
              <a href={t("s13.l002")} className="card card-hover p-6 rv rv-d1">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i002")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t004")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t005")}</p>
              </a>
              {" "}
              <a href={t("s13.l003")} className="card card-hover p-6 rv rv-d2">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i003")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t006")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t007")}</p>
              </a>
              {" "}
              <a href={t("s13.l004")} className="card card-hover p-6 rv rv-d3">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i004")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t008")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t009")}</p>
              </a>
              {" "}
              <a href={t("s13.l005")} className="card card-hover p-6 rv">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i005")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t010")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t011")}</p>
              </a>
              {" "}
              <a href={t("s13.l006")} className="card card-hover p-6 rv rv-d1">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i006")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t012")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t013")}</p>
              </a>
              {" "}
              <a href={t("s13.l007")} className="card card-hover p-6 rv rv-d2">
                <span className="icon-tile">
                  <svg>
                    <use href={"#" + t("s13.i007")} />
                  </svg>
                </span>
                <h3 className="h3 mt-5 !text-base">{t("s13.t014")}</h3>
                <p className="text-sm text-[#33475B] mt-1.5">{t("s13.t015")}</p>
              </a>
              {" "}
              <Link href={t("s13.l008")} className="card card-hover p-6 rv rv-d3 !bg-[#0A1A24] !border-[#0A1A24] flex flex-col justify-between">
                <h3 className="h3 !text-white !text-base">{t("s13.t016")}</h3>
                <span className="link-arrow !text-[#3DDC97] mt-6">
                  {t("s13.t017")}{" "}
                  <span>→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>)}
        {/* HOW IT WORKS */}
        {t.show("s14") && (<section className="section soft">
          <div className="wrap">
            <h2 className="h2 text-center rv" style={{ fontSize: "36px" }}>{t("s14.t001")}</h2>
            <ol className="mt-14 grid md:grid-cols-5 gap-4">
              <li className="card p-6 rv">
                <div className="display text-4xl font-bold grad-text">{t("s14.t002")}</div>
                <h3 className="h3 mt-3 !text-base">{t("s14.t003")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s14.t004")}</p>
              </li>
              <li className="card p-6 rv rv-d1">
                <div className="display text-4xl font-bold grad-text">{t("s14.t005")}</div>
                <h3 className="h3 mt-3 !text-base">{t("s14.t006")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s14.t007")}</p>
              </li>
              <li className="card p-6 rv rv-d2">
                <div className="display text-4xl font-bold grad-text">{t("s14.t008")}</div>
                <h3 className="h3 mt-3 !text-base">{t("s14.t009")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s14.t010")}</p>
              </li>
              <li className="card p-6 rv rv-d3">
                <div className="display text-4xl font-bold grad-text">{t("s14.t011")}</div>
                <h3 className="h3 mt-3 !text-base">{t("s14.t012")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s14.t013")}</p>
              </li>
              <li className="card p-6 rv rv-d4">
                <div className="display text-4xl font-bold grad-text">{t("s14.t014")}</div>
                <h3 className="h3 mt-3 !text-base">{t("s14.t015")}</h3>
                <p className="text-sm text-[#33475B] mt-2">{t("s14.t016")}</p>
              </li>
            </ol>
          </div>
        </section>)}
        {/* WHY */}
        {t.show("s15") && (<section className="section">
          <div className="wrap grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s15.t001")}</h2>
              <p className="lead mt-5">{t("s15.t002")}</p>
              <Link href={t("s15.l001")} className="btn btn-primary mt-8">{t("s15.t003")}</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-l border-[#E6ECF0] rounded-3xl overflow-hidden rv rv-d1 text-sm font-semibold">
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i001")} />
                </svg>
                <div className="mt-3">{t("s15.t004")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i002")} />
                </svg>
                <div className="mt-3">{t("s15.t005")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i003")} />
                </svg>
                <div className="mt-3">{t("s15.t006")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i004")} />
                </svg>
                <div className="mt-3">{t("s15.t007")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i005")} />
                </svg>
                <div className="mt-3">{t("s15.t008")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i006")} />
                </svg>
                <div className="mt-3">{t("s15.t009")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i007")} />
                </svg>
                <div className="mt-3">{t("s15.t010")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i008")} />
                </svg>
                <div className="mt-3">{t("s15.t011")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0]">
                <svg width="22" height="22" className="text-[#0FAF7A]">
                  <use href={"#" + t("s15.i009")} />
                </svg>
                <div className="mt-3">{t("s15.t012")}</div>
              </div>
              <div className="p-5 border-r border-b border-[#E6ECF0] bg-[#ECFBF4]">
                <svg width="22" height="22" className="text-[#067955]">
                  <use href={"#" + t("s15.i010")} />
                </svg>
                <div className="mt-3 text-[#067955]">{t("s15.t013")}</div>
              </div>
            </div>
          </div>
        </section>)}
        {/* FAQ */}
        {t.show("s16") && (<section id="faq" className="section soft">
          <div className="wrap grid lg:grid-cols-[1fr_2fr] gap-10">
            <div className="rv">
              <h2 className="h2" style={{ fontSize: "36px" }}>{t("s16.t001")}</h2>
              <p className="lead mt-4">
                {t("s16.t002")}{" "}
                <a href={settings.whatsappUrl} className="font-bold text-[#067955] underline underline-offset-4">{t("s16.t003")}</a>
                .
              </p>
            </div>
            <div className="faq rv">
              <details open>
                <summary>
                  {t("s16.t004")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t005")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t006")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t007")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t008")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t009")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t010")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t011")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t012")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t013")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t014")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t015")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t016")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t017")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t018")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t019")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t020")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t021")}
                </p>
              </details>
              <details>
                <summary>
                  {t("s16.t022")}
                  <span className="pm">+</span>
                </summary>
                <p>
                  {t("s16.t023")}
                </p>
              </details>
            </div>
          </div>
        </section>)}
        {/* CTA */}
        {t.show("s17") && (<section className="section">
          <div className="wrap">
            <div className="rounded-[32px] p-8 md:p-14 text-center rv" style={{ background: "radial-gradient(70% 90% at 100% 0%,#0E6B55 0%,transparent 60%),radial-gradient(60% 80% at 0% 100%,#113A7A 0%,transparent 60%),#0A1A24" }}>
              <h2 className="h2 !text-white max-w-3xl mx-auto" style={{ fontSize: "36px" }}>{t("s17.t001")}</h2>
              <p className="mt-5 text-lg text-[#C9D5DD] max-w-2xl mx-auto">
                {t("s17.t002")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link href={t("s17.l001")} className="btn btn-primary">{t("s17.t003")}</Link>
                <Link href={t("s17.l002")} className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20">{t("s17.t004")}</Link>
              </div>
            </div>
          </div>
        </section>)}
      </main>
    </>
  );
}
