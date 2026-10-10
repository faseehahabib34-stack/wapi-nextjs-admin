import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { login } from "../_actions/auth-actions";
import Icon from "../_components/Icon";
import LoginForm from "./LoginForm";

export const metadata = { title: "Admin login" };

export default async function LoginPage() {
  if (await getAdmin()) redirect("/admin"); // already logged in

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* brand side (hidden on phones and tablets) */}
      <aside className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold shadow-lg shadow-brand-500/30">W</span>
          <span className="text-lg font-semibold">WAPI Admin</span>
        </div>
        <div className="relative max-w-md">
          <p className="text-3xl font-semibold leading-tight tracking-tight !text-white">Manage your whole website from one place.</p>
          <ul className="mt-8 space-y-4 text-sm text-slate-300">
            {["Edit pages, texts, images and SEO", "Update pricing, FAQs and menus instantly", "Follow every new demo request"].map((text) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-500">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-slate-500">Secure area. Only authorised staff can sign in.</p>
      </aside>

      <main className="flex items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-500/30">W</span>
            <span className="text-lg font-semibold text-slate-900">WAPI Admin</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mb-8 mt-1.5 text-sm text-slate-500">Log in to manage the website.</p>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] sm:p-7">
            <LoginForm action={login} />
          </div>
        </div>
      </main>
    </div>
  );
}
