"use client";
// Image picker: a box for the address + an Upload button + a preview.
// The upload itself is unchanged: it calls the uploadImage server action (saved in the Media table).
import { useRef, useState } from "react";
import { uploadImage } from "../_actions/media-actions";
import Icon from "./Icon";
import { inputClass, secondaryButton } from "./ui";

export default function ImageField({ label, name, defaultValue = "", hint, tag }) {
  const [value, setValue] = useState(defaultValue);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef(null);

  async function handleFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setStatus("Uploading...");
    setFailed(false);
    setUploading(true);
    const formData = new FormData();
    formData.set("file", file);
    const result = await uploadImage(formData); // server action
    setUploading(false);
    if (result.error) {
      setFailed(true);
      setStatus(result.error);
    } else {
      setValue(result.url);
      setStatus("Uploaded. Press Save to use it.");
    }
    event.target.value = "";
  }

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {tag && <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-normal text-slate-400">{tag}</span>}
      </label>
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:flex-row sm:items-start">
        <div className="flex h-24 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white sm:w-36">
          {value ? (
            <img src={value} alt="Preview" className="max-h-full max-w-full object-contain" />
          ) : (
            <span className="flex flex-col items-center gap-1 text-xs text-slate-400">
              <Icon name="image" className="h-5 w-5" />
              No image
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <input id={name} name={name} value={value} onChange={(e) => setValue(e.target.value)} placeholder="/uploads/... or https://..." className={inputClass} />
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" disabled={uploading} onClick={() => fileRef.current?.click()} className={`${secondaryButton} !py-1.5`}>
              <Icon name="upload" className="h-4 w-4" />
              {uploading ? "Uploading..." : "Upload image"}
            </button>
            {value && (
              <button type="button" onClick={() => setValue("")} className="rounded text-sm font-medium text-slate-500 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25">
                Remove / use original
              </button>
            )}
            <span role="status" className={`text-xs ${failed ? "font-medium text-red-600" : "text-slate-500"}`}>
              {status}
            </span>
          </div>
          <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={handleFile} className="hidden" aria-label={`Choose an image for ${label}`} />
        </div>
      </div>
      {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
