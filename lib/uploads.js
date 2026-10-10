// Helpers for uploaded images.
// The pictures are stored in the database (table "Media") and served by app/uploads/[name]/route.js.
// UPLOAD_DIR is the OLD place (a folder on disk). It is only used to read old files
// (local development) and by "npm run media:import" which copies them into the database.
import path from "path";

export const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// Only names WE create: letters, numbers, dashes + a safe image extension.
export const NAME_RE = /^[a-z0-9-]{6,60}\.(png|jpg|webp|gif)$/;

export const MIME = { png: "image/png", jpg: "image/jpeg", webp: "image/webp", gif: "image/gif" };

// Look at the first bytes of the file to find out what it REALLY is
// (the file name or browser type can be faked).
export function detectImageType(buf) {
  if (buf.length < 12) return null;
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return "png";
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (buf.toString("ascii", 0, 4) === "GIF8") return "gif";
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") return "webp";
  return null;
}
