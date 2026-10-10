// Shown while an admin page is loading (Next.js uses this file automatically).
export default function Loading() {
  return (
    <div className="animate-pulse" role="status" aria-label="Loading">
      <div className="mb-6 space-y-3">
        <div className="h-7 w-56 rounded-lg bg-slate-200" />
        <div className="h-4 w-96 max-w-full rounded bg-slate-200/70" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-32 rounded-2xl border border-slate-200 bg-white" />
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-20 rounded-2xl border border-slate-200 bg-white" />
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
