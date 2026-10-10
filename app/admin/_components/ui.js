// Tailwind class names reused by ALL admin screens, so the whole admin looks the same.
// Change a colour or a radius here and every screen follows.

// Keyboard focus ring (accessibility): visible when you tab through the page
export const focusRing = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25";

export const inputClass =
  "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 disabled:bg-slate-50 disabled:text-slate-500";

export const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

const buttonBase = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`;

export const primaryButton = `${buttonBase} bg-brand-500 text-white shadow-sm hover:bg-brand-600`;
export const secondaryButton = `${buttonBase} border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50`;
export const ghostButton = `${buttonBase} text-slate-600 hover:bg-slate-100 hover:text-slate-900`;
export const dangerButton = `${buttonBase} border border-red-200 bg-white !px-3 !py-1.5 text-red-600 hover:bg-red-50`;
export const solidDangerButton = `${buttonBase} bg-red-600 text-white shadow-sm hover:bg-red-700`;

// White panel used for every block of content
export const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.10)]";

// Small coloured pills ("Visible", "Hidden", "New"...). Use:  <span className={badge("green")}>Visible</span>
const badgeBase = "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset";
const badgeTones = {
  green: "bg-brand-50 text-brand-700 ring-brand-500/20",
  slate: "bg-slate-100 text-slate-600 ring-slate-300/60",
  amber: "bg-amber-50 text-amber-700 ring-amber-500/20",
  red: "bg-red-50 text-red-700 ring-red-500/20",
  blue: "bg-sky-50 text-sky-700 ring-sky-500/20",
  dark: "bg-slate-900 text-white ring-slate-900",
};
export const badge = (tone = "slate") => `${badgeBase} ${badgeTones[tone] ?? badgeTones.slate}`;

// Filter "chips" (All / New / Done...). Use:  className={chip(isActive)}
export const chip = (active) =>
  `inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${focusRing} ${
    active ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900"
  }`;

// Tables
export const tableWrap = `${cardClass} overflow-hidden`;
export const th = "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500";
export const td = "px-4 py-3 align-middle text-sm text-slate-700";

// Tick boxes: the browser draws them, "accent" colours them with the brand green
export const checkboxClass = "h-4 w-4 rounded border-slate-300 accent-brand-500";
