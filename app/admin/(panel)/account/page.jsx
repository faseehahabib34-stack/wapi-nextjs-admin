// /admin/account - change your password
import { requireAdmin } from "@/lib/auth";
import { changePassword } from "../../_actions/auth-actions";
import ActionForm from "../../_components/ActionForm";
import Field from "../../_components/Field";
import Icon from "../../_components/Icon";
import PageHeader from "../../_components/PageHeader";
import { cardClass } from "../../_components/ui";
import { initials } from "../../_components/format";

export default async function AccountPage() {
  const admin = await requireAdmin();

  return (
    <div className="max-w-2xl space-y-6">
      <PageHeader title="My Account" description="Your login details." />

      <section className={`${cardClass} flex items-center gap-4 p-5 sm:p-6`}>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">{initials(admin.email)}</span>
        <div className="min-w-0">
          <p className="text-sm text-slate-500">Logged in as</p>
          <p className="truncate font-semibold text-slate-900">{admin.email}</p>
        </div>
      </section>

      <section className={`${cardClass} p-5 sm:p-6`}>
        <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900">
          <Icon name="user" className="h-4 w-4 text-slate-400" /> Change password
        </h2>
        <p className="mb-5 mt-1 text-sm text-slate-500">Use a long password that you do not use anywhere else.</p>
        <ActionForm action={changePassword} submitLabel="Change password" sticky={false}>
          <Field label="Current password" name="current" type="password" required autoComplete="current-password" />
          <Field label="New password (at least 10 characters)" name="next" type="password" required autoComplete="new-password" />
          <Field label="New password again" name="again" type="password" required autoComplete="new-password" />
        </ActionForm>
      </section>
    </div>
  );
}
