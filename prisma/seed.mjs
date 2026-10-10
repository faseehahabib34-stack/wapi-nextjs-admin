// Run with:  npm run db:seed
// Fills the database with:
//   1. your first admin account (from ADMIN_EMAIL / ADMIN_PASSWORD in .env)
//   2. the pages, their sections, SEO, hero and call-to-action texts, every
//      section text / link / icon / image, plus the header, footer, contact
//      details and demo-form texts (see DATABASE.md for the tables)
//   3. the menus
//   4. the 4 pricing plans
//   5. the 10 FAQ questions
// It is safe to run twice: it only adds what is missing and never overwrites
// things you already edited (so it also tops up a database that was migrated).
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { DEFAULT_PLANS, DEFAULT_FAQS, DEFAULT_MENU } from "../lib/defaults.mjs";
import { seedPageContent, ensureFaqGroup } from "../lib/cms-store.mjs";

const prisma = new PrismaClient();

async function main() {
  // 1. Admin account
  const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "";
  if (!email || password.length < 10) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 10 characters) in your .env file first.");
  }
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (!existing) {
    await prisma.adminUser.create({
      data: { email, passwordHash: await bcrypt.hash(password, 12) },
    });
    console.log("Created admin user:", email);
  } else {
    console.log("Admin user already exists, not changed:", email);
  }

  // 2. Pages + all website content (only adds what is missing)
  const added = await seedPageContent(prisma);
  console.log("Content values added:", added);

  // 3. Menus (only if there are none yet)
  if ((await prisma.menuItem.count()) === 0) {
    await prisma.menuItem.createMany({ data: DEFAULT_MENU });
    console.log("Menu items added:", DEFAULT_MENU.length);
  }

  // 4. Pricing plans (only if there are none yet)
  if ((await prisma.pricingPlan.count()) === 0) {
    for (const [i, plan] of DEFAULT_PLANS.entries()) {
      const { features, ...planData } = plan;
      await prisma.pricingPlan.create({
        data: {
          ...planData,
          sortOrder: i,
          features: { create: features.map((text, n) => ({ text, sortOrder: n })) },
        },
      });
    }
    console.log("Pricing plans added:", DEFAULT_PLANS.length);
  }

  // 5. FAQs (only if there are none yet)
  if ((await prisma.faq.count()) === 0) {
    const group = await ensureFaqGroup(prisma, "home"); // the FAQ block of the home page
    await prisma.faq.createMany({
      data: DEFAULT_FAQS.map((f, i) => ({ groupId: group.id, question: f.question, answer: f.answer, sortOrder: i })),
    });
    console.log("FAQs added:", DEFAULT_FAQS.length);
  }
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
