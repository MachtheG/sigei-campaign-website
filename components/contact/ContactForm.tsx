"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { ConsentField, Honeypot } from "@/components/shared/ConsentField";
import { Field, inputCls } from "@/components/shared/Field";
import { useFormSubmit } from "@/components/shared/useFormSubmit";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/forms/schemas";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const e = useTranslations("getInvolved");
  const { state, send } = useFormSubmit("contact");
  const { register, handleSubmit, formState: { errors } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const err = (k: keyof ContactInput) => (errors[k]?.message ? e(`errors.${errors[k]!.message}`) : undefined);

  if (state === "done") return <p role="status" className="rounded-2xl bg-brand/10 p-6 text-lg font-semibold">{t("thanks")}</p>;

  return (
    <form onSubmit={handleSubmit(send)} noValidate className="relative space-y-5">
      <Field id="c-name" label={t("name")} error={err("name")}>
        <input id="c-name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} {...register("name")} />
      </Field>
      <Field id="c-email" label={t("email")} error={err("email")}>
        <input id="c-email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} {...register("email")} />
      </Field>
      <Field id="c-msg" label={t("message")} error={err("message")}>
        <textarea id="c-msg" rows={6} className={`${inputCls} py-3`} aria-invalid={!!errors.message} {...register("message")} />
      </Field>
      <Honeypot register={register("website")} />
      <ConsentField register={register("consent")} error={err("consent")} />
      {(state === "error" || state === "rate") && <p role="alert" className="font-semibold text-red-700 dark:text-red-300">{e(state === "rate" ? "errors.rate" : "errors.server")}</p>}
      <Button type="submit" size="lg" disabled={state === "sending"} className="w-full sm:w-auto">
        {state === "sending" ? e("sending") : t("submit")}
      </Button>
    </form>
  );
}
