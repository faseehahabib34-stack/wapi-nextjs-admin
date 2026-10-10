// Login "session" = a small signed token stored in a cookie.
// "Signed" means nobody can change it without knowing SESSION_SECRET.
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "wapi_admin_session";
const SEVEN_DAYS = 7 * 24 * 60 * 60; // seconds

function getKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET is missing or too short (use at least 32 characters). Check your .env file.");
  }
  return new TextEncoder().encode(secret);
}

// Called after a correct password: puts the cookie in the browser.
export async function createSession(userId) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getKey());

  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true, // JavaScript in the browser cannot read it
    secure: process.env.NODE_ENV === "production", // HTTPS only on the live site
    sameSite: "lax", // not sent from other websites' forms
    path: "/",
    maxAge: SEVEN_DAYS,
  });
}

// Reads the cookie. Returns { userId } or null if missing / fake / expired.
export async function readSession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getKey(), { algorithms: ["HS256"] });
    return typeof payload.userId === "number" ? { userId: payload.userId } : null;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
