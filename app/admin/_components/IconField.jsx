"use client";
// Icon picker: a dropdown of the site's icons with a live preview.
import { useState } from "react";
import { ICONS } from "@/lib/icons.mjs";
import { inputClass } from "./ui";

export default function IconField({ label, name, defaultValue, tag }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {tag && <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-normal text-slate-400">{tag}</span>}
      </label>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-500/20">
          {/* the site's own icon sprite (<SvgSprite /> in the root layout) - unchanged */}
          <svg width="22" height="22" aria-hidden="true">
            <use href={"#" + value} />
          </svg>
        </span>
        <select id={name} name={name} value={value} onChange={(e) => setValue(e.target.value)} className={inputClass}>
          {ICONS.map(([id, text]) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
