// Content of the About page (sections below the main heading).
// type: text | textarea | link | icon | image
const f = (key, label, type, def, group = "text") => ({ key, label, type, group, default: def });

export const SECTIONS = [
  {
    id: "s01",
    title: "Our story",
    fields: [
      f("s01.t001", "Heading", "text", "One platform for every WhatsApp conversation"),
      f("s01.t002", "Paragraph 1", "textarea", "WAPI is a WhatsApp Business API platform that brings marketing campaigns, AI agents, chatbots, a shared team inbox and CRM automation together in one place. It is operated by RedSpider Web & Art Design LLC from Downtown Dubai, UAE."),
      f("s01.t003", "Paragraph 2", "textarea", "Our goal is simple: help businesses turn every WhatsApp conversation into an opportunity to engage, support and grow."),
      f("s01.m001", "Image (optional – shown next to the text)", "image", "", "media"),
    ],
  },
  {
    id: "s02",
    title: "What we stand for",
    fields: [
      f("s02.t001", "Heading", "text", "Built for teams that sell and support on WhatsApp"),
      f("s02.i001", "Card 1 – icon", "icon", "i-link", "icon"),
      f("s02.t002", "Card 1 – title", "text", "One platform"),
      f("s02.t003", "Card 1 – text", "textarea", "Marketing, AI, automation, sales and customer support work together instead of living in separate tools."),
      f("s02.i002", "Card 2 – icon", "icon", "i-pin", "icon"),
      f("s02.t004", "Card 2 – title", "text", "Built for the UAE"),
      f("s02.t005", "Card 2 – text", "textarea", "UAE-based onboarding help and support for your team."),
      f("s02.i003", "Card 3 – icon", "icon", "i-ai", "icon"),
      f("s02.t006", "Card 3 – title", "text", "AI plus real people"),
      f("s02.t007", "Card 3 – text", "textarea", "Let AI handle routine conversations while your team steps in when it matters."),
    ],
  },
  {
    id: "s03",
    title: "Call to action",
    fields: [
      f("s03.t001", "Heading", "text", "See WAPI in action"),
      f("s03.t002", "Paragraph", "textarea", "Book a free demo and we'll show you how WAPI fits your business."),
      f("s03.t003", "Button text", "text", "Book a Free Demo"),
      f("s03.l001", "Button link", "link", "/#demo", "link"),
      f("s03.t004", "WhatsApp button text", "text", "Chat on WhatsApp"),
    ],
  },
];
