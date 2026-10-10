// Tiny helpers to read form values safely (always text, trimmed, not too long).
export function str(formData, name, max = 255) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

export function int(formData, name, fallback = 0) {
  const n = Number.parseInt(String(formData.get(name) ?? ""), 10);
  return Number.isInteger(n) ? n : fallback;
}

// An HTML checkbox sends "on" when ticked and nothing when not ticked
export function checked(formData, name) {
  return formData.get(name) === "on";
}

// Only allow safe links: "/page", "https://...", "http://...", "#...", "mailto:", "tel:" or "{whatsapp}"
export function isSafeLink(link) {
  return /^(\/(?!\/)|#|https?:\/\/|mailto:|tel:|\{whatsapp\}$)/i.test(link);
}
