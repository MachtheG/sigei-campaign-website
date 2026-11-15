"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "sw", label: "SW" },
] as const;

/** EN | SW. Stays on the same page and keeps ?query. The choice is saved in the NEXT_LOCALE cookie by next-intl. */
export function LanguageToggle({ tone = "default" }: { tone?: "default" | "light" }) {
  const locale = useLocale();
  const t = useTranslations("common.a11y");
  const router = useRouter();
  const pathname = usePathname();
  const [pending, start] = useTransition();

  function switchTo(next: "en" | "sw") {
    if (next === locale) return;
    // Read the query at click time (keeps ?pillar= etc.) so the header needs no Suspense boundary.
    const qs = window.location.search;
    start(() => router.replace(`${pathname}${qs}`, { locale: next }));
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "inline-flex rounded-full p-0.5",
        tone === "light" ? "bg-white/10" : "bg-fg/8",
        pending && "opacity-70",
      )}
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={locale === code}
          aria-label={code === "sw" ? t("switchToSw") : t("switchToEn")}
          onClick={() => switchTo(code)}
          className={cn(
            "press min-h-11 min-w-11 rounded-full px-3 text-sm font-bold",
            locale === code
              ? "bg-accent text-on-accent"
              : tone === "light"
                ? "text-on-brand"
                : "text-fg",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
