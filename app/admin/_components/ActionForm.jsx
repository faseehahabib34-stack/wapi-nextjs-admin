"use client";
// A form that runs a server action and shows its error / success message.
// "use client" is needed because it uses React hooks (useActionState).
//
// Behaviour is the same as before. New (all optional):
//   sticky={false}    -> the Save bar is not stuck to the bottom (used on the login page)
//   fullWidth         -> the button fills the width (login page)

import { useActionState, startTransition, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { primaryButton } from "./ui";

export default function ActionForm({ action, children, submitLabel = "Save changes", resetOnSuccess = false, sticky = true, fullWidth = false }) {
  // state = whatever the action returned: { error } or { success } (or nothing yet)
  const [state, formAction, pending] = useActionState(action, {});
  const formRef = useRef(null);
  const [dirty, setDirty] = useState(false); // true after you typed something that is not saved yet

  useEffect(() => {
    if (state?.success) {
      setDirty(false);
      if (resetOnSuccess) formRef.current?.reset();
    }
  }, [state, resetOnSuccess]);

  function handleSubmit(event) {
    event.preventDefault(); // we send the form ourselves so typed text is NOT wiped after an error
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  const message = (
    <div aria-live="polite" className="min-w-0 flex-1 text-sm">
      {state?.error && (
        <p role="alert" className="flex items-start gap-2 font-medium text-red-600">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.error}</span>
        </p>
      )}
      {state?.success && !state?.error && (
        <p role="status" className="flex items-start gap-2 font-medium text-brand-700">
          <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.success}</span>
        </p>
      )}
      {!state?.error && !state?.success && dirty && (
        <p className="flex items-center gap-2 text-slate-500">
          <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
          Unsaved changes
        </p>
      )}
    </div>
  );

  const button = (
    <button type="submit" disabled={pending} aria-busy={pending} className={`${primaryButton} ${fullWidth ? "w-full py-2.5" : "min-w-32"}`}>
      {pending && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
      {pending ? "Saving..." : submitLabel}
    </button>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} onChange={() => setDirty(true)} className="space-y-5">
      {children}
      {sticky ? (
        // The message + Save button stay visible at the bottom while you scroll a long form
        <div className="sticky bottom-4 z-10 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur">
          {message}
          {button}
        </div>
      ) : (
        <div className="space-y-3">
          {button}
          {message}
        </div>
      )}
    </form>
  );
}
