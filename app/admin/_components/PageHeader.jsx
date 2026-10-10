import Link from "next/link";
import Icon from "./Icon";

// Title bar used at the top of every admin screen.
// Props are the same as before: title, description, back = { href, label }, actions.
export default function PageHeader({ title, description, back, actions }) {
  return (
    <div className="mb-6">
      {back && (
        <Link href={back.href} className="mb-2 inline-flex items-center gap-1.5 rounded text-sm font-medium text-slate-500 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25">
          <Icon name="arrowLeft" className="h-4 w-4" />
          {back.label}
        </Link>
      )}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.75rem]">{title}</h1>
          {description && <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-500">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}

// Green / red message box (success = green, anything else = red)
export function Notice({ children, tone = "success" }) {
  const success = tone === "success";
  return (
    <p
      role={success ? "status" : "alert"}
      className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
        success ? "border-brand-500/20 bg-brand-50 text-brand-700" : "border-red-200 bg-red-50 text-red-700"
      }`}
    >
      <Icon name={success ? "checkCircle" : "alert"} className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
