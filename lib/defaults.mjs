// ============================================================================
// DEFAULTS = the website content exactly as it was before the CMS existed.
//
// Used in two places:
//   1. prisma/seed.mjs copies them into the database.
//   2. lib/content.js falls back to them if a value is missing from the
//      database (or the database is temporarily down), so the site never breaks.
//
// The long page texts live in lib/defaults/<page>.mjs (one file per page).
// ============================================================================

// "type": text | textarea | link | icon | image | checkbox
// Texts that were written by hand (hero, FAQ heading, demo form, SEO...).
export const PAGES = {
  "home": {
    "label": "Home page",
    "path": "/",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.description",
        "label": "Google description",
        "type": "textarea",
        "default": "Grow your business on WhatsApp with WAPI. Run WhatsApp marketing campaigns, automate conversations with AI, manage leads, support customers and connect your CRM from one powerful platform."
      },
      {
        "key": "seo.ogTitle",
        "label": "Social share title (WhatsApp, Facebook...)",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.ogDescription",
        "label": "Social share description",
        "type": "textarea",
        "default": "Run WhatsApp marketing, AI agents, chatbots, team inbox and CRM automation from one platform. UAE-based support."
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "https://www.wapi.ae/",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.titleStart",
        "label": "Main heading – first part",
        "type": "text",
        "default": "Turn WhatsApp Into Your"
      },
      {
        "key": "hero.titleGradient",
        "label": "Main heading – coloured part",
        "type": "text",
        "default": "Sales, Marketing & Customer Support"
      },
      {
        "key": "hero.titleEnd",
        "label": "Main heading – last part",
        "type": "text",
        "default": "Engine"
      },
      {
        "key": "hero.lead",
        "label": "Big paragraph under the heading",
        "type": "textarea",
        "default": "Connect with customers, generate leads, automate conversations and manage your entire WhatsApp communication from one powerful platform."
      },
      {
        "key": "hero.sub",
        "label": "Smaller paragraph",
        "type": "textarea",
        "default": "From marketing campaigns and AI agents to shared team inboxes, chatbots and CRM automation, WAPI helps your team manage every customer conversation more efficiently."
      },
      {
        "key": "hero.primaryButton",
        "label": "Green button text",
        "type": "text",
        "default": "Book a Free Demo"
      },
      {
        "key": "hero.secondaryButton",
        "label": "White button text",
        "type": "text",
        "default": "Explore Features"
      },
      {
        "key": "faq.heading",
        "label": "FAQ section heading",
        "type": "text",
        "default": "Frequently Asked Questions"
      },
      {
        "key": "cta.title",
        "label": "Bottom call-to-action heading",
        "type": "text",
        "default": "Your Customers Are Already on WhatsApp. Your Business Should Be Ready."
      },
      {
        "key": "cta.text1",
        "label": "Bottom paragraph 1",
        "type": "textarea",
        "default": "Bring marketing, AI, automation, sales and customer support together with WAPI."
      },
      {
        "key": "cta.text2",
        "label": "Bottom paragraph 2",
        "type": "textarea",
        "default": "Turn every WhatsApp conversation into an opportunity to engage, support and grow."
      },
      {
        "key": "form.title",
        "label": "Demo form – title",
        "type": "text",
        "default": "Book your free demo"
      },
      {
        "key": "form.subtitle",
        "label": "Demo form – small text",
        "type": "text",
        "default": "We'll confirm your slot on WhatsApp within one business day."
      },
      {
        "key": "form.namePlaceholder",
        "label": "Demo form – name box",
        "type": "text",
        "default": "Full name"
      },
      {
        "key": "form.companyPlaceholder",
        "label": "Demo form – company box",
        "type": "text",
        "default": "Company"
      },
      {
        "key": "form.phonePlaceholder",
        "label": "Demo form – phone box",
        "type": "text",
        "default": "WhatsApp number"
      },
      {
        "key": "form.interestDefault",
        "label": "Demo form – dropdown first line",
        "type": "text",
        "default": "Main interest"
      },
      {
        "key": "form.interest1",
        "label": "Demo form – dropdown option 1",
        "type": "text",
        "default": "WhatsApp Marketing"
      },
      {
        "key": "form.interest2",
        "label": "Demo form – dropdown option 2",
        "type": "text",
        "default": "AI Agent"
      },
      {
        "key": "form.interest3",
        "label": "Demo form – dropdown option 3",
        "type": "text",
        "default": "Chatbot"
      },
      {
        "key": "form.interest4",
        "label": "Demo form – dropdown option 4",
        "type": "text",
        "default": "Team Inbox"
      },
      {
        "key": "form.interest5",
        "label": "Demo form – dropdown option 5",
        "type": "text",
        "default": "CRM & Integrations"
      },
      {
        "key": "form.button",
        "label": "Demo form – button",
        "type": "text",
        "default": "Book a Free Demo"
      },
      {
        "key": "form.note",
        "label": "Demo form – note under the button",
        "type": "text",
        "default": "Submitting opens WhatsApp with your details pre-filled."
      },
      {
        "key": "form.whatsappMessage",
        "label": "WhatsApp message that starts the chat",
        "type": "text",
        "default": "Hi WAPI, I would like to book a demo."
      }
    ]
  },
  "features": {
    "label": "Features page",
    "path": "/features",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "WhatsApp Marketing, AI & Automation Features | WAPI UAE"
      },
      {
        "key": "seo.description",
        "label": "Google description",
        "type": "textarea",
        "default": "Explore WAPI features: WhatsApp Business API, marketing campaigns, AI agent, no-code chatbot, shared team inbox, workflow automation, CRM and analytics for UAE businesses."
      },
      {
        "key": "seo.ogTitle",
        "label": "Social share title (WhatsApp, Facebook...)",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.ogDescription",
        "label": "Social share description",
        "type": "textarea",
        "default": "Run WhatsApp marketing, AI agents, chatbots, team inbox and CRM automation from one platform. UAE-based support."
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "https://www.wapi.ae/features",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.titleStart",
        "label": "Main heading – first part",
        "type": "text",
        "default": "Everything You Need to Grow Your Business on"
      },
      {
        "key": "hero.titleGradient",
        "label": "Main heading – coloured part",
        "type": "text",
        "default": "WhatsApp"
      },
      {
        "key": "hero.lead",
        "label": "Paragraph under the heading",
        "type": "textarea",
        "default": "Manage WhatsApp marketing, customer conversations, AI automation, sales enquiries and team communication from one powerful platform."
      },
      {
        "key": "subnav.api",
        "label": "Sticky menu – Business API",
        "type": "text",
        "default": "Business API"
      },
      {
        "key": "subnav.marketing",
        "label": "Sticky menu – Marketing",
        "type": "text",
        "default": "Marketing"
      },
      {
        "key": "subnav.ai",
        "label": "Sticky menu – AI Agent",
        "type": "text",
        "default": "AI Agent"
      },
      {
        "key": "subnav.chatbot",
        "label": "Sticky menu – Chatbot",
        "type": "text",
        "default": "Chatbot"
      },
      {
        "key": "subnav.inbox",
        "label": "Sticky menu – Team Inbox",
        "type": "text",
        "default": "Team Inbox"
      },
      {
        "key": "subnav.automation",
        "label": "Sticky menu – Automation",
        "type": "text",
        "default": "Automation"
      },
      {
        "key": "subnav.crm",
        "label": "Sticky menu – CRM",
        "type": "text",
        "default": "CRM"
      },
      {
        "key": "subnav.analytics",
        "label": "Sticky menu – Analytics",
        "type": "text",
        "default": "Analytics"
      }
    ]
  },
  "solutions": {
    "label": "Solutions page",
    "path": "/solutions",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "WhatsApp Solutions for Business UAE | WAPI"
      },
      {
        "key": "seo.description",
        "label": "Google description",
        "type": "textarea",
        "default": "Discover WAPI WhatsApp solutions for marketing, sales, customer support, healthcare, real estate, e-commerce, education, restaurants and automotive businesses."
      },
      {
        "key": "seo.ogTitle",
        "label": "Social share title (WhatsApp, Facebook...)",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.ogDescription",
        "label": "Social share description",
        "type": "textarea",
        "default": "Run WhatsApp marketing, AI agents, chatbots, team inbox and CRM automation from one platform. UAE-based support."
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "https://www.wapi.ae/solutions",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.titleStart",
        "label": "Main heading – first part",
        "type": "text",
        "default": "WhatsApp Solutions for"
      },
      {
        "key": "hero.titleGradient",
        "label": "Main heading – coloured part",
        "type": "text",
        "default": "Every Business"
      },
      {
        "key": "hero.lead",
        "label": "Paragraph under the heading",
        "type": "textarea",
        "default": "Use WhatsApp to generate leads, automate customer conversations, support customers and grow your business."
      }
    ]
  },
  "integrations": {
    "label": "Integrations page",
    "path": "/integrations",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "WhatsApp Integrations & CRM Connectivity UAE | WAPI"
      },
      {
        "key": "seo.description",
        "label": "Google description",
        "type": "textarea",
        "default": "Connect WAPI with Zivora.ONE, Zoho CRM, HubSpot, Salesforce, Shopify, WooCommerce, Google Calendar and custom APIs to automate WhatsApp workflows."
      },
      {
        "key": "seo.ogTitle",
        "label": "Social share title (WhatsApp, Facebook...)",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.ogDescription",
        "label": "Social share description",
        "type": "textarea",
        "default": "Run WhatsApp marketing, AI agents, chatbots, team inbox and CRM automation from one platform. UAE-based support."
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "https://www.wapi.ae/integrations",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.title",
        "label": "Main heading",
        "type": "text",
        "default": "Connect WhatsApp With the Tools Your Business Uses"
      },
      {
        "key": "hero.lead",
        "label": "Paragraph under the heading",
        "type": "textarea",
        "default": "Connect WAPI with your CRM, e-commerce platform, calendar and business applications."
      },
      {
        "key": "hero.sub",
        "label": "Smaller paragraph",
        "type": "textarea",
        "default": "Automatically sync customer information, leads, orders, appointments and WhatsApp conversations across your systems."
      }
    ]
  },
  "pricing": {
    "label": "Pricing page (texts only – plans are under Pricing Plans)",
    "path": "/pricing",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "Pricing – WhatsApp Business API Plans UAE | WAPI"
      },
      {
        "key": "seo.description",
        "label": "Google description",
        "type": "textarea",
        "default": "Grow your business on WhatsApp with WAPI. Run WhatsApp marketing campaigns, automate conversations with AI, manage leads, support customers and connect your CRM from one powerful platform."
      },
      {
        "key": "seo.ogTitle",
        "label": "Social share title (WhatsApp, Facebook...)",
        "type": "text",
        "default": "WhatsApp Business API, AI & Marketing Platform UAE | WAPI"
      },
      {
        "key": "seo.ogDescription",
        "label": "Social share description",
        "type": "textarea",
        "default": "Run WhatsApp marketing, AI agents, chatbots, team inbox and CRM automation from one platform. UAE-based support."
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "https://www.wapi.ae/pricing",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.title",
        "label": "Main heading",
        "type": "text",
        "default": "Simple Plans That Grow With Your Team"
      },
      {
        "key": "hero.lead",
        "label": "Paragraph under the heading",
        "type": "textarea",
        "default": "Start with professional WhatsApp communication, then add campaigns, AI and CRM automation as you scale. Every plan includes UAE-based onboarding help."
      },
      {
        "key": "cta.title",
        "label": "Bottom heading",
        "type": "text",
        "default": "Not Sure Which Plan Fits?"
      },
      {
        "key": "cta.text",
        "label": "Bottom paragraph",
        "type": "textarea",
        "default": "Book a free demo and we'll recommend the right setup for your team."
      }
    ]
  },
  "about": {
    "label": "About page",
    "path": "/about",
    "fields": [
      {
        "key": "seo.title",
        "label": "Browser tab / Google title",
        "type": "text",
        "default": "About WAPI"
      },
      {
        "key": "seo.ogImage",
        "label": "Social share image",
        "type": "image",
        "default": "",
        "hint": "Shown when the page is shared on WhatsApp, Facebook, LinkedIn... Best size 1200 x 630."
      },
      {
        "key": "seo.canonical",
        "label": "Canonical URL",
        "type": "text",
        "default": "",
        "hint": "The main address of this page. Leave as it is unless you know you need to change it."
      },
      {
        "key": "seo.keywords",
        "label": "Keywords (comma separated)",
        "type": "text",
        "default": ""
      },
      {
        "key": "seo.noindex",
        "label": "Hide this page from Google",
        "type": "checkbox",
        "default": "",
        "hint": "Tick only if this page must NOT appear in search results."
      },
      {
        "key": "hero.title",
        "label": "Main heading",
        "type": "text",
        "default": "About WAPI"
      },
      {
        "key": "hero.lead",
        "label": "Paragraph under the heading",
        "type": "textarea",
        "default": "WAPI brings WhatsApp marketing, AI agents, chatbots, a shared team inbox and CRM automation together in one platform, built for businesses in the UAE."
      }
    ]
  }
};

// Settings used on every page (logo, header, footer, contact...)
export const SETTINGS = [
  {
    "key": "site.logo",
    "label": "Logo",
    "type": "image",
    "default": "/logo.png",
    "group": "Brand",
    "hint": "Used in the header, footer and on the pages."
  },
  {
    "key": "site.logoAlt",
    "label": "Logo description (for screen readers)",
    "type": "text",
    "default": "WAPI – WhatsApp API",
    "group": "Brand"
  },
  {
    "key": "site.whatsappNumber",
    "label": "WhatsApp number (digits only, with country code, no + or spaces)",
    "type": "text",
    "default": "971555515475",
    "group": "Contact"
  },
  {
    "key": "site.phone",
    "label": "Phone number shown in the footer",
    "type": "text",
    "default": "+971 55 551 5475",
    "group": "Contact"
  },
  {
    "key": "site.email",
    "label": "Email shown in the footer (optional)",
    "type": "text",
    "default": "",
    "group": "Contact"
  },
  {
    "key": "site.address",
    "label": "Address shown in the footer",
    "type": "textarea",
    "default": "Office 1002, Burj Gate Tower, Sofitel Dubai Downtown, Sheikh Zayed Road, Downtown Dubai, UAE",
    "group": "Contact"
  },
  {
    "key": "site.headerCtaText",
    "label": "Header button text",
    "type": "text",
    "default": "Book a Demo",
    "group": "Header"
  },
  {
    "key": "site.headerCtaLink",
    "label": "Header button link",
    "type": "link",
    "default": "/#demo",
    "group": "Header"
  },
  {
    "key": "site.loginText",
    "label": "Login link text",
    "type": "text",
    "default": "Login",
    "group": "Header"
  },
  {
    "key": "site.loginLink",
    "label": "Login link address",
    "type": "link",
    "default": "#",
    "group": "Header"
  },
  {
    "key": "site.dropdownLabel",
    "label": "Dropdown menu name",
    "type": "text",
    "default": "Resources",
    "group": "Header",
    "hint": "The dropdown items are edited under Navigation."
  },
  {
    "key": "site.dropdownLink",
    "label": "Dropdown menu name – link",
    "type": "link",
    "default": "/#resources",
    "group": "Header"
  },
  {
    "key": "site.mobileCtaText",
    "label": "Mobile menu button text",
    "type": "text",
    "default": "Book a Free Demo",
    "group": "Header"
  },
  {
    "key": "site.mobileWhatsappText",
    "label": "Mobile menu WhatsApp button text",
    "type": "text",
    "default": "Chat on WhatsApp",
    "group": "Header"
  },
  {
    "key": "site.footerTitle",
    "label": "Footer – bold line under the logo",
    "type": "text",
    "default": "WAPI – WhatsApp AI, Marketing & Automation Platform",
    "group": "Footer"
  },
  {
    "key": "site.footerText",
    "label": "Footer – small paragraph",
    "type": "textarea",
    "default": "Turn WhatsApp into a powerful sales, marketing and customer engagement channel. Manage campaigns, AI conversations, automation, customer enquiries and team communication from one platform.",
    "group": "Footer"
  },
  {
    "key": "site.productTitle",
    "label": "Footer column 1 title",
    "type": "text",
    "default": "PRODUCT",
    "group": "Footer"
  },
  {
    "key": "site.solutionsTitle",
    "label": "Footer column 2 title",
    "type": "text",
    "default": "SOLUTIONS",
    "group": "Footer"
  },
  {
    "key": "site.companyTitle",
    "label": "Footer column 3 title",
    "type": "text",
    "default": "COMPANY",
    "group": "Footer"
  },
  {
    "key": "site.copyright",
    "label": "Footer – bottom left line",
    "type": "text",
    "default": "© 2026 WAPI. Operated by RedSpider Web & Art Design LLC.",
    "group": "Footer"
  },
  {
    "key": "site.trademark",
    "label": "Footer – bottom right line",
    "type": "text",
    "default": "WhatsApp is a trademark of Meta Platforms, Inc.",
    "group": "Footer"
  },
  {
    "key": "site.footerCtaText",
    "label": "Mobile bottom bar button text",
    "type": "text",
    "default": "Book a Free Demo",
    "group": "Footer"
  },
  {
    "key": "site.footerCtaLink",
    "label": "Mobile bottom bar button link",
    "type": "link",
    "default": "/#demo",
    "group": "Footer"
  },
  {
    "key": "site.defaultOgImage",
    "label": "Default social share image",
    "type": "image",
    "default": "",
    "group": "SEO",
    "hint": "Used for pages that have no share image of their own."
  }
];

// Menus. group: HEADER | HEADER_DROPDOWN | FOOTER_PRODUCT | FOOTER_SOLUTIONS | FOOTER_COMPANY | SOCIAL
export const DEFAULT_MENU = [
  {
    "group": "HEADER",
    "label": "Home",
    "href": "/",
    "openInNewTab": false,
    "sortOrder": 0
  },
  {
    "group": "HEADER",
    "label": "Features",
    "href": "/features",
    "openInNewTab": false,
    "sortOrder": 1
  },
  {
    "group": "HEADER",
    "label": "Solutions",
    "href": "/solutions",
    "openInNewTab": false,
    "sortOrder": 2
  },
  {
    "group": "HEADER",
    "label": "Integrations",
    "href": "/integrations",
    "openInNewTab": false,
    "sortOrder": 3
  },
  {
    "group": "HEADER",
    "label": "Pricing",
    "href": "/pricing",
    "openInNewTab": false,
    "sortOrder": 4
  },
  {
    "group": "HEADER_DROPDOWN",
    "label": "Blog",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 0
  },
  {
    "group": "HEADER_DROPDOWN",
    "label": "Guides",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 1
  },
  {
    "group": "HEADER_DROPDOWN",
    "label": "FAQs",
    "href": "/#faq",
    "openInNewTab": false,
    "sortOrder": 2
  },
  {
    "group": "HEADER_DROPDOWN",
    "label": "WhatsApp Templates",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 3
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "Features",
    "href": "/features",
    "openInNewTab": false,
    "sortOrder": 0
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "WhatsApp Marketing",
    "href": "/#marketing",
    "openInNewTab": false,
    "sortOrder": 1
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "WhatsApp AI Agent",
    "href": "/#ai",
    "openInNewTab": false,
    "sortOrder": 2
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "WhatsApp Chatbot",
    "href": "/#automation",
    "openInNewTab": false,
    "sortOrder": 3
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "Shared Inbox",
    "href": "/#inbox",
    "openInNewTab": false,
    "sortOrder": 4
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "Automation",
    "href": "/#automation",
    "openInNewTab": false,
    "sortOrder": 5
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "CRM",
    "href": "/#crm",
    "openInNewTab": false,
    "sortOrder": 6
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "Integrations",
    "href": "/integrations",
    "openInNewTab": false,
    "sortOrder": 7
  },
  {
    "group": "FOOTER_PRODUCT",
    "label": "Pricing",
    "href": "/pricing",
    "openInNewTab": false,
    "sortOrder": 8
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Marketing",
    "href": "/#teams",
    "openInNewTab": false,
    "sortOrder": 0
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Sales",
    "href": "/#teams",
    "openInNewTab": false,
    "sortOrder": 1
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Customer Support",
    "href": "/#teams",
    "openInNewTab": false,
    "sortOrder": 2
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Healthcare",
    "href": "/#industries",
    "openInNewTab": false,
    "sortOrder": 3
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Real Estate",
    "href": "/#industries",
    "openInNewTab": false,
    "sortOrder": 4
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "E-commerce",
    "href": "/#industries",
    "openInNewTab": false,
    "sortOrder": 5
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Education",
    "href": "/#industries",
    "openInNewTab": false,
    "sortOrder": 6
  },
  {
    "group": "FOOTER_SOLUTIONS",
    "label": "Automotive",
    "href": "/#industries",
    "openInNewTab": false,
    "sortOrder": 7
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "About WAPI",
    "href": "/about",
    "openInNewTab": false,
    "sortOrder": 0
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "Contact",
    "href": "/#demo",
    "openInNewTab": false,
    "sortOrder": 1
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "Book a Demo",
    "href": "/#demo",
    "openInNewTab": false,
    "sortOrder": 2
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "Blog",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 3
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "FAQs",
    "href": "/#faq",
    "openInNewTab": false,
    "sortOrder": 4
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "Privacy Policy",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 5
  },
  {
    "group": "FOOTER_COMPANY",
    "label": "Terms & Conditions",
    "href": "#",
    "openInNewTab": false,
    "sortOrder": 6
  }
];

// Pricing cards. style: "DEFAULT" | "POPULAR" | "DARK".
// In buttonLink, {whatsapp} means "your WhatsApp link from Settings".
export const DEFAULT_PLANS = [
  {
    "name": "Starter",
    "tagline": "For Small Businesses Getting Started With WhatsApp",
    "description": "",
    "price": "AED XXX",
    "priceSuffix": "/ Month",
    "buttonText": "Get Started",
    "buttonLink": "/#demo",
    "featuresHeading": "INCLUDES",
    "style": "DEFAULT",
    "features": [
      "WhatsApp Business API",
      "1 WhatsApp Number",
      "Shared Team Inbox",
      "Basic WhatsApp Marketing",
      "Contact Management",
      "Message Templates",
      "Basic Automation",
      "Basic Reporting",
      "Email Support"
    ]
  },
  {
    "name": "Growth",
    "tagline": "For Growing Sales & Marketing Teams",
    "description": "",
    "price": "AED XXX",
    "priceSuffix": "/ Month",
    "buttonText": "Choose Growth",
    "buttonLink": "/#demo",
    "featuresHeading": "EVERYTHING IN STARTER, PLUS:",
    "style": "DEFAULT",
    "features": [
      "Multiple Team Users",
      "WhatsApp Marketing Campaigns",
      "Customer Segmentation",
      "Campaign Scheduling",
      "WhatsApp Chatbot",
      "Workflow Automation",
      "Automated Follow-ups",
      "Advanced Contact Management",
      "Campaign Analytics",
      "Priority Support"
    ]
  },
  {
    "name": "Professional",
    "tagline": "For Businesses Ready for AI & CRM Automation",
    "description": "",
    "price": "AED XXX",
    "priceSuffix": "/ Month",
    "buttonText": "Choose Professional",
    "buttonLink": "/#demo",
    "featuresHeading": "EVERYTHING IN GROWTH, PLUS:",
    "style": "POPULAR",
    "features": [
      "WhatsApp AI Agent",
      "AI Lead Qualification",
      "Advanced Chatbot Flows",
      "CRM Integration",
      "Zoho CRM / HubSpot Integration",
      "Shopify / WooCommerce Integration",
      "Google Calendar Integration",
      "Advanced Workflow Automation",
      "Advanced Analytics",
      "API & Webhooks",
      "Priority Technical Support"
    ]
  },
  {
    "name": "Enterprise",
    "tagline": "Custom WhatsApp Solutions for Larger Organizations",
    "description": "",
    "price": "Custom Pricing",
    "priceSuffix": "",
    "buttonText": "Talk to Sales",
    "buttonLink": "{whatsapp}",
    "featuresHeading": "INCLUDES",
    "style": "DARK",
    "features": [
      "Multiple WhatsApp Numbers",
      "Multiple Teams & Departments",
      "Advanced AI Agents",
      "Custom AI Knowledge",
      "Custom Workflow Automation",
      "Custom CRM Integration",
      "API & Webhooks",
      "Enterprise Analytics",
      "Custom Business Integrations",
      "Dedicated Account Support",
      "Custom Onboarding",
      "Custom SLA Options"
    ]
  }
];

// Questions and answers of the home page FAQ
export const DEFAULT_FAQS = [
  {
    "question": "What is WAPI?",
    "answer": "WAPI is a UAE-based WhatsApp platform that combines the WhatsApp Business API with marketing campaigns, an AI agent, chatbots, a shared team inbox, CRM and workflow automation, so you can manage sales, marketing and support on WhatsApp from one dashboard."
  },
  {
    "question": "What is the WhatsApp Business API?",
    "answer": "The WhatsApp Business API (WhatsApp Business Platform) is Meta's official solution for medium and large businesses. It allows multiple users, automation, approved message templates, integrations and messaging at scale, beyond what the WhatsApp Business app supports."
  },
  {
    "question": "Can I use WAPI for WhatsApp marketing campaigns?",
    "answer": "Yes. You can segment contacts, send personalized template messages with buttons, schedule campaigns, automate follow-ups and track delivery, read and reply rates."
  },
  {
    "question": "Can multiple employees manage one WhatsApp number?",
    "answer": "Yes. The shared team inbox lets multiple agents work from one number with chat assignment, transfers, department routing, internal notes and performance tracking."
  },
  {
    "question": "What can the WAPI AI Agent do?",
    "answer": "It answers questions using your business information, captures lead details, asks qualification questions, books appointments and hands conversations to the right team member with full context, in multiple languages."
  },
  {
    "question": "Can WAPI integrate with my CRM?",
    "answer": "Yes. WAPI connects with Zivora.ONE, Zoho CRM, HubSpot, Salesforce, Shopify, WooCommerce, Google Sheets and website forms, and supports internal CRMs and ERPs via API and webhooks."
  },
  {
    "question": "Can I build automated WhatsApp chatbots?",
    "answer": "Yes. Use the visual builder to create flows for enquiries, lead generation, bookings, support, reminders and follow-ups, or ask our team to build them for you."
  },
  {
    "question": "Is WAPI suitable for healthcare and real estate companies?",
    "answer": "Yes. Clinics use WAPI for appointments, reminders and patient FAQs; real estate teams use it for property enquiries, buyer qualification and agent routing."
  },
  {
    "question": "Can customers speak to a real person after interacting with the chatbot?",
    "answer": "Always. The chatbot or AI agent can transfer the conversation to a human agent at any point, automatically or on request, with the full conversation history attached."
  },
  {
    "question": "Does WAPI provide support in the UAE?",
    "answer": "Yes. Our team is based in Downtown Dubai and provides onboarding, automation setup, AI configuration, CRM integration and campaign support for businesses across the UAE and GCC."
  }
];
