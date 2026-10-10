import PasswordInput from "./PasswordInput";
import { inputClass } from "./ui";

// One label + one input (or textarea when you pass "rows").
// No "use client" needed: it uses no browser features.
// (autoComplete / placeholder are new and optional. Everything else works as before.)
export default function Field({ label, name, defaultValue = "", rows, hint, type = "text", required = false, tag, autoComplete, placeholder }) {
  const hintId = hint ? `${name}-hint` : undefined;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <span>
          {label}
          {required && (
            <span className="ml-0.5 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </span>
        {tag && <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-normal text-slate-400">{tag}</span>}
      </label>
      {rows ? (
        <textarea id={name} name={name} rows={rows} defaultValue={defaultValue} required={required} placeholder={placeholder} aria-describedby={hintId} className={inputClass} />
      ) : type === "password" ? (
        <PasswordInput id={name} name={name} required={required} autoComplete={autoComplete} describedBy={hintId} />
      ) : (
        <input id={name} name={name} type={type} defaultValue={defaultValue} required={required} placeholder={placeholder} autoComplete={autoComplete} aria-describedby={hintId} className={inputClass} />
      )}
      {hint && (
        <p id={hintId} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
}
