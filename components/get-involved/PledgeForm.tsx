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
import { pledgeSchema, type PledgeInput } from "@/lib/forms/schemas";

export function PledgeForm() {
  const t = useTranslations("getInvolved");
  const locale = useLocale();
  const { state, send } = useFormSubmit("pledge");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PledgeInput>({ resolver: zodResolver(pledgeSchema) });
  const err = (k: keyof PledgeInput) =>
    errors[k]?.message ? t(`errors.${errors[k]!.message}`) : undefined;

  if (state === "done")
    return (
      <p role="status" className="bg-sky rounded-2xl p-6 text-lg font-semibold">
        {t("pledge.thanks")}
      </p>
    );

  return (
    <form onSubmit={handleSubmit(send)} noValidate className="relative space-y-5">
      <Field id="p-name" label={t("fields.name")} error={err("name")}>
        <input
          id="p-name"
          autoComplete="name"
          className={inputCls}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
      </Field>
      <Field
        id="p-phone"
        label={t("fields.phone")}
        hint={t("fields.phoneHint")}
        error={err("phone")}
      >
        <input
          id="p-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={inputCls}
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
      </Field>
      <Field id="p-const" label={t("fields.constituency")} error={err("constituency")}>
        <select
          id="p-const"
          className={inputCls}
          defaultValue=""
          aria-invalid={!!errors.constituency}
          {...register("constituency")}
        >
          <option value="" disabled>
            {t("fields.choose")}
          </option>
          {constituencies.map((c) => (
            <option key={c.id} value={c.id}>
              {pick(c.name, locale)}
            </option>
          ))}
          <option value="other">{t("fields.other")}</option>
        </select>
      </Field>
      <Honeypot register={register("website")} />
      <ConsentField register={register("consent")} error={err("consent")} />
      {(state === "error" || state === "rate") && (
        <p role="alert" className="font-semibold text-red-700 dark:text-red-300">
          {t(state === "rate" ? "errors.rate" : "errors.server")}
        </p>
      )}
      <Button type="submit" size="lg" disabled={state === "sending"} className="w-full sm:w-auto">
        {state === "sending" ? t("sending") : t("pledge.submit")}
      </Button>
    </form>
  );
}
