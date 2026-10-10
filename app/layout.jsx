import "./globals.css";
import SvgSprite from "@/components/SvgSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import SiteChrome from "@/components/SiteChrome";
import { getSettings, getMenu } from "@/lib/content";

// Default title/description. Each page (app/page.jsx, app/pricing/page.jsx, ...)
// sets its own "metadata", which replaces these.
export const metadata = {
  // Needed so image paths like /uploads/photo.png become full addresses in social previews.
  // Set SITE_URL in .env if your domain is different.
  metadataBase: new URL(process.env.SITE_URL || "https://www.wapi.ae"),
  title: "WAPI – WhatsApp Business API, AI & Marketing Platform",
  description:
    "Grow your business on WhatsApp with WAPI. Marketing campaigns, AI agents, chatbots, team inbox and CRM automation from one platform.",
};

export default async function RootLayout({ children }) {  //react components 
  // Header data from the database (Site Settings + Navigation in the admin)
  const [settings, items, dropdownItems] = await Promise.all([getSettings(), getMenu("HEADER"), getMenu("HEADER_DROPDOWN")]);
  const headerConfig = {
    logo: settings.logo,
    logoAlt: settings.logoAlt,
    items,
    dropdownItems,
    dropdownLabel: settings.dropdownLabel,
    dropdownLink: settings.dropdownLink,
    ctaText: settings.headerCtaText,
    ctaLink: settings.headerCtaLink,
    loginText: settings.loginText,
    loginLink: settings.loginLink,
    mobileCtaText: settings.mobileCtaText,
    mobileWhatsappText: settings.mobileWhatsappText,
    whatsappUrl: settings.whatsappUrl,
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Everything below is shared by ALL pages */}
        <SvgSprite />
        {/* SiteChrome hides the header + footer on /admin pages */}
        <SiteChrome header={<Header config={headerConfig} />} footer={<Footer />}>
          {children}
        </SiteChrome>
        <ScrollEffects />
      </body>
    </html>
  );
}
