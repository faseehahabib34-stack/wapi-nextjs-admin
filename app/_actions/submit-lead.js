"use server";
// PUBLIC action (no login needed): saves the "Book a demo" form into the database.
// Because anyone can call it, it checks the data and limits how often it can be used.

import { headers } from "next/headers";
import { prisma } from "@/lib/db";

// Very simple spam limit: max 5 submissions per minute per visitor (kept in memory).
const recent = new Map();
function tooMany(ip) {
  const now = Date.now();
  const times = (recent.get(ip) || []).filter((t) => now - t < 60_000);
  times.push(now);
  recent.set(ip, times);
  return times.length > 5;
}

const clean = (value, max) => String(value ?? "").trim().slice(0, max);

export async function submitLead(input) {
  const h = await headers();
  const ip = (h.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (tooMany(ip)) return { ok: false };

  const data = {
    name: clean(input?.name, 120),
    company: clean(input?.company, 120),
    phone: clean(input?.phone, 60),
    interest: clean(input?.interest, 120),
  };
  if (!data.name || !data.company || !data.phone) return { ok: false };

  try {
    await prisma.lead.create({ data });
    return { ok: true };
  } catch (error) {
    console.error("Could not save lead:", error.message);
    return { ok: false };
  }
}
