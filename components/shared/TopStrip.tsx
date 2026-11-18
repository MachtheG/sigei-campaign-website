"use client";
import { useTranslations } from "next-intl";
import { useCountdown } from "@/lib/hooks/useCountdown";
import { Link } from "@/lib/i18n/navigation";

/**
 * Slim bar above the header: live days-left + Donate.
 * At 375px it collapses to "D-xxx · Donate"; the full date shows from sm up.
 */
export function TopStrip() {
  const t = useTranslations("common.topStrip");
  const state = useCountdown(60_000);
  const days = state?.phase === "before" ? state.remaining.days : null;
  return (
    <div className="bg-ink-deep text-paper">
      <div className="shell flex h-9 items-center justify-between gap-4 text-sm sm:justify-center sm:gap-6">
        <Link
          href="/elections"
          aria-label={t("label")}
          className="inline-flex min-h-9 items-center gap-3 font-bold tabular-nums"
        >
          <span>{days !== null ? t("daysLeft", { days }) : "10.08.2027"}</span>
          <span className="hidden font-normal opacity-80 sm:inline">{t("date")}</span>
        </Link>
        <Link
          href="/get-involved#donate"
          className="text-uda inline-flex min-h-9 items-center px-1 font-bold"
        >
          {t("donate")} →
        </Link>
      </div>
    </div>
  );
}
