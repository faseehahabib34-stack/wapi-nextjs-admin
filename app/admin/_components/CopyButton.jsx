"use client";
// "Copy" button: puts a text (for example an image address) on the clipboard.
import { useState } from "react";
import Icon from "./Icon";
import { secondaryButton } from "./ui";

export default function CopyButton({ value, label = "Copy link" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this address:", value); // old browsers
    }
  }

  return (
    <button type="button" onClick={copy} className={`${secondaryButton} !px-3 !py-1.5`}>
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
