// Run with:  npm run media:import
// Copies the pictures from your local "uploads" folder into the Media table of the database
// (use it once, with DATABASE_URL pointing to the database you want to fill - local or online).
// Same file names are used, so every address like /uploads/abc.png keeps working.
// Safe to run again: files that are already in the database are skipped. Nothing is deleted.
import fs from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

// same rules as lib/uploads.js
const UPLOAD_DIR = path.join(process.cwd(), "uploads");
const NAME_RE = /^[a-z0-9-]{6,60}\.(png|jpg|webp|gif)$/;
const MIME = { png: "image/png", jpg: "image/jpeg", webp: "image/webp", gif: "image/gif" };

const prisma = new PrismaClient();

async function main() {
  let names = [];
  try {
    names = (await fs.readdir(UPLOAD_DIR)).filter((n) => NAME_RE.test(n));
  } catch {
    console.log(`No "uploads" folder found at ${UPLOAD_DIR} - nothing to import.`);
    return;
  }
  let added = 0;
  for (const name of names) {
    if (await prisma.media.findUnique({ where: { name }, select: { id: true } })) continue;
    const data = await fs.readFile(path.join(UPLOAD_DIR, name));
    await prisma.media.create({ data: { name, mimeType: MIME[name.split(".").pop()], size: data.length, data } });
    added++;
  }
  console.log(`Imported ${added} picture(s); ${names.length - added} were already in the database.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
