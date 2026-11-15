"use client";
import { useTranslations } from "next-intl";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Link } from "@/lib/i18n/navigation";

/** Data Protection Act, 2019 consent checkbox. Required on every form. */
export function ConsentField({
  register,
  error,
}: {
  register: UseFormRegisterReturn;
  error?: string;
}) {
  const t = useTranslations("getInvolved.consent");
  return (
    <div>
      <label className="flex min-h-11 items-start gap-3">
        <input
          type="checkbox"
          {...register}
          aria-invalid={!!error}
          className="mt-1 size-6 shrink-0 accent-[var(--brand)]"
        />
        <span className="text-[0.95rem]">
          {t("label")}{" "}
          <Link href="/privacy" className="text-link font-semibold underline underline-offset-4">
            {t("link")}
          </Link>
        </span>
      </label>
      {error && (
        <p role="alert" className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden honeypot: real users never see or fill it. */
export function Honeypot({ register }: { register: UseFormRegisterReturn }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input type="text" tabIndex={-1} autoComplete="off" {...register} />
      </label>
    </div>
  );
}
