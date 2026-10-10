"use server";

import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { NAME_RE, MIME, detectImageType } from "@/lib/uploads";

const MAX_BYTES = 3 * 1024 * 1024; // 3 MB

// Called from the image picker in the admin forms. Returns { url } or { error }.
// The picture is saved in the Media table of the database.
export async function uploadImage(formData) {
  await requireAdmin();

  const file = formData.get("file");
  if (!file || typeof file === "string" || file.size === 0) return { error: "Please choose an image file." };
  if (file.size > MAX_BYTES) return { error: "The image is too big. Maximum size is 3 MB." };

  const buffer = Buffer.from(await file.arrayBuffer());
  const type = detectImageType(buffer);
  if (!type) return { error: "Only PNG, JPG, WEBP or GIF images are allowed." };

  const name = `${Date.now().toString(36)}-${crypto.randomBytes(5).toString("hex")}.${type}`;
  try {
    await prisma.media.create({ data: { name, mimeType: MIME[type], size: buffer.length, data: buffer } });
  } catch (error) {
    console.error("Could not save the image:", error.message);
    return { error: "Could not save the image in the database. Try a smaller image." };
  }

  revalidatePath("/admin/media");
  return { url: `/uploads/${name}` };
}

// Used as: deleteMedia.bind(null, name)
export async function deleteMedia(name) {
  await requireAdmin();
  if (!NAME_RE.test(name)) return;
  await prisma.media.deleteMany({ where: { name } });
  revalidatePath("/admin/media");
}
