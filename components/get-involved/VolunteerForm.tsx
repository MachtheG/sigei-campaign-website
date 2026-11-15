"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { ConsentField, Honeypot } from "@/components/shared/ConsentField";
import { Field, inputCls } from "@/components/shared/Field";
import { useFormSubmit } from "@/components/shared/useFormSubmit";
import { Button } from "@/components/ui/button";
import { constituencies } from "@/data/record/constituencies";
import { pick } from "@/data/types";
import { volunteerSchema, type VolunteerInput } from "@/lib/forms/schemas";

export function VolunteerForm() {
  const t = useTranslations("getInvolved");
  const locale = useLocale();
  const { state, send } = useFormSubmit("volunteer");
  const { register, handleSubmit, formState: { errors } } = useForm<VolunteerInput>({ resolver: zodResolver(volunteerSchema) });
  const err = (k: keyof VolunteerInput) => (errors[k]?.message ? t(`errors.${errors[k]!.message}`) : undefined);

  if (state === "done") return <p role="status" className="rounded-2xl bg-brand/10 p-6 text-lg font-semibold">{t("volunteer.thanks")}</p>;

  return (
    <form onSubmit={handleSubmit(send)} noValidate className="relative space-y-5">
      <Field id="v-name" label={t("fields.name")} error={err("name")}>
        <input id="v-name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} {...register("name")} />
      </Field>
      <Field id="v-phone" label={t("fields.phone")} hint={t("fields.phoneHint")} error={err("phone")}>
        <input id="v-phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls} aria-invalid={!!errors.phone} {...register("phone")} />
      </Field>
      <Field id="v-email" label={t("fields.emailOptional")} error={err("email")}>
        <input id="v-email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} {...register("email")} />
      </Field>
      <Field id="v-const" label={t("fields.constituency")} error={err("constituency")}>
        <select id="v-const" className={inputCls} defaultValue="" aria-invalid={!!errors.constituency} {...register("constituency")}>
          <option value="" disabled>{t("fields.choose")}</option>
          {constituencies.map((c) => <option key={c.id} value={c.id}>{pick(c.name, locale)}</option>)}
          <option value="other">{t("fields.other")}</option>
        </select>
      </Field>
      <Field id="v-help" label={t("fields.help")} error={err("help")}>
        <textarea id="v-help" rows={4} className={`${inputCls} py-3`} aria-invalid={!!errors.help} {...register("help")} />
      </Field>
      <Honeypot register={register("website")} />
      <ConsentField register={register("consent")} error={err("consent")} />
      {(state === "error" || state === "rate") && <p role="alert" className="font-semibold text-red-700 dark:text-red-300">{t(state === "rate" ? "errors.rate" : "errors.server")}</p>}
      <Button type="submit" size="lg" disabled={state === "sending"} className="w-full sm:w-auto">
        {state === "sending" ? t("sending") : t("volunteer.submit")}
      </Button>
    </form>
  );
}
