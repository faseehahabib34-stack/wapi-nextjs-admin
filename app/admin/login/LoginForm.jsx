"use client";
import ActionForm from "../_components/ActionForm";
import Field from "../_components/Field";

export default function LoginForm({ action }) {
  return (
    <ActionForm action={action} submitLabel="Log in" sticky={false} fullWidth>
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Password" name="password" type="password" required autoComplete="current-password" />
    </ActionForm>
  );
}
