"use client";
// Shown if something goes wrong while loading an admin page (for example the database is down).
import Icon from "../_components/Icon";
import { cardClass, primaryButton } from "../_components/ui";

export default function PanelError({ error, reset }) {
  return (
    <div className={`${cardClass} mx-auto mt-10 flex max-w-lg flex-col items-center px-6 py-12 text-center`} role="alert">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
        <Icon name="alert" className="h-6 w-6" />
      </span>
      <h1 className="mt-4 text-lg font-semibold text-slate-900">Something went wrong</h1>
      <p className="mt-1 text-sm text-slate-500">This page could not be loaded. Check that MySQL is running, then try again.</p>
      {error?.digest && <p className="mt-2 font-mono text-xs text-slate-400">Error code: {error.digest}</p>}
      <button type="button" onClick={reset} className={`${primaryButton} mt-6`}>
        Try again
      </button>
    </div>
  );
}
