"use client";
// Drag-and-drop / click-to-choose uploader for the Media Library page.
// It uses the SAME server action as the image boxes in the forms (uploadImage), so the
// rules (3 MB, PNG / JPG / WEBP / GIF, saved in the Media table) are exactly the same.
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadImage } from "../_actions/media-actions";
import Icon from "./Icon";

export default function MediaUploader() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState(null); // { tone: "ok" | "error", text }

  async function upload(files) {
    const list = Array.from(files ?? []);
    if (list.length === 0) return;
    setBusy(true);
    setMessage(null);
    let done = 0;
    for (const file of list) {
      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadImage(formData);
      if (result.error) {
        setMessage({ tone: "error", text: `${file.name}: ${result.error}` });
        break;
      }
      done++;
    }
    setBusy(false);
    if (done > 0) {
      if (done === list.length) setMessage({ tone: "ok", text: `${done} image${done === 1 ? "" : "s"} uploaded.` });
      router.refresh(); // reload the list below
    }
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          upload(event.dataTransfer.files);
        }}
        className={`flex flex-col items-center rounded-2xl border-2 border-dashed px-6 py-8 text-center transition ${
          dragging ? "border-brand-500 bg-brand-50" : "border-slate-300 bg-white hover:border-slate-400"
        }`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          {busy ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-500" /> : <Icon name="upload" className="h-5 w-5" />}
        </span>
        <p className="mt-3 text-sm font-medium text-slate-900">{busy ? "Uploading..." : "Drag images here, or"}</p>
        <button
          type="button"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
          className="mt-2 rounded-lg px-2 py-1 text-sm font-semibold text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25 disabled:opacity-60"
        >
          choose files from your computer
        </button>
        <p className="mt-1 text-xs text-slate-500">PNG, JPG, WEBP or GIF · up to 3 MB each</p>
        <input ref={inputRef} type="file" multiple accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(event) => upload(event.target.files)} aria-label="Choose images to upload" />
      </div>
      {message && (
        <p role={message.tone === "error" ? "alert" : "status"} className={`mt-3 flex items-center gap-2 text-sm font-medium ${message.tone === "error" ? "text-red-600" : "text-brand-700"}`}>
          <Icon name={message.tone === "error" ? "alert" : "checkCircle"} className="h-4 w-4" />
          {message.text}
        </p>
      )}
    </div>
  );
}
