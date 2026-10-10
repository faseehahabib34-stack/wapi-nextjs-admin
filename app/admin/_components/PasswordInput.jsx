"use client";
// A password box with a "show / hide" eye button. Used by <Field type="password" />.
import { useState } from "react";
import Icon from "./Icon";
import { inputClass } from "./ui";

export default function PasswordInput({ id, name, required, autoComplete, describedBy }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={show ? "text" : "password"}
        required={required}
        autoComplete={autoComplete}
        aria-describedby={describedBy}
        className={`${inputClass} pr-11`}
      />
      <button
        type="button"
        onClick={() => setShow((value) => !value)}
        aria-label={show ? "Hide password" : "Show password"}
        aria-pressed={show}
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-slate-400 transition hover:text-slate-700 focus-visible:text-slate-700 focus-visible:outline-none"
      >
        <Icon name={show ? "eyeOff" : "eye"} className="h-4 w-4" />
      </button>
    </div>
  );
}
