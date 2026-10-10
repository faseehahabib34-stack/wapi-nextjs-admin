"use client";
// A button that asks "Are you sure?" in a pop-up window before it does anything.
//
// It looks like before, but the plain browser popup is now a nicer, keyboard friendly window.
// It still works the same way: the button sits inside a <form action={serverAction}>, and
// pressing "Yes" submits that form. Pressing "Cancel", Esc or clicking outside sends nothing.
import { useId, useRef } from "react";
import Icon from "./Icon";
import { dangerButton, secondaryButton, solidDangerButton } from "./ui";

export default function ConfirmButton({ children, message = "Are you sure?", className = dangerButton, title = "Please confirm", confirmLabel = "Yes, delete" }) {
  const dialogRef = useRef(null);
  const buttonRef = useRef(null);
  const titleId = useId();

  function confirm() {
    dialogRef.current?.close();
    buttonRef.current?.form?.requestSubmit(); // runs the form's server action
  }

  return (
    <>
      <button ref={buttonRef} type="button" className={className} onClick={() => dialogRef.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close(); // click on the dark background
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-0 text-left shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex gap-4 p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
            <Icon name="alert" className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 id={titleId} className="text-base font-semibold text-slate-900">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{message}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 rounded-b-2xl border-t border-slate-100 bg-slate-50 px-6 py-4">
          <button type="button" className={secondaryButton} onClick={() => dialogRef.current?.close()}>
            Cancel
          </button>
          <button type="button" className={solidDangerButton} onClick={confirm}>
            {confirmLabel}
          </button>
        </div>
      </dialog>
    </>
  );
}
