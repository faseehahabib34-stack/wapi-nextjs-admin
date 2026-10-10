import Link from "next/link";
import { getText, getSettings, getPageMetadata } from "@/lib/content";

export async function generateMetadata() {
  return getPageMetadata("about");
}

// Every text, icon and image on this page comes from the database (admin > Pages > About).
export default async function AboutPage() {
  const t = await getText("about");
  const settings = await getSettings();
  const storyImage = t("s01.m001"); // empty = no image

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60% 50% at 50% 0%,#E3F7EF 0%,transparent 70%)" }} />
        <div className="wrap pt-16 md:pt-24 pb-10 text-center rv">
          <h1 className="h1 max-w-3xl mx-auto" style={{ fontSize: "36px", fontWeight: "700" }}>{t("hero.title")}</h1>
          <p className="lead mt-5 max-w-2xl mx-auto">{t("hero.lead")}</p>
        </div>
      </section>

      {t.show("s01") && (
        <section className="section">
          <div className={"wrap grid gap-12 items-center rv" + (storyImage ? " lg:grid-cols-2" : "")}>
            <div className={storyImage ? "" : "max-w-3xl mx-auto"}>
              <h2 className="h2">{t("s01.t001")}</h2>
              <p className="lead mt-5">{t("s01.t002")}</p>
              <p className="mt-4 text-[#33475B] leading-relaxed">{t("s01.t003")}</p>
            </div>
            {storyImage && <img src={storyImage} alt="" className="w-full rounded-3xl shadow-xl" />}
          </div>
        </section>
      )}

      {t.show("s02") && (
        <section className="section soft">
          <div className="wrap">
            <h2 className="h2 max-w-2xl rv">{t("s02.t001")}</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="card p-7 rv">
                  <div className="w-12 h-12 rounded-xl bg-[#ECFBF4] text-[#067955] grid place-items-center">
                    <svg width="26" height="26">
                      <use href={"#" + t(`s02.i00${n}`)} />
                    </svg>
                  </div>
                  <h3 className="display text-xl font-bold mt-5">{t(`s02.t00${n * 2}`)}</h3>
                  <p className="text-[#33475B] mt-2 leading-relaxed">{t(`s02.t00${n * 2 + 1}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {t.show("s03") && (
        <section className="section">
          <div className="wrap text-center rv">
            <h2 className="h2 max-w-2xl mx-auto">{t("s03.t001")}</h2>
            <p className="lead mt-4">{t("s03.t002")}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href={t("s03.l001")} className="btn btn-primary">{t("s03.t003")}</Link>
              <a href={settings.whatsappUrl} className="btn btn-ghost">{t("s03.t004")}</a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
