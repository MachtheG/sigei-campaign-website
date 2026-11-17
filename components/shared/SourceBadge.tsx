import { useLocale, useTranslations } from "next-intl";
import { sources } from "@/data/sources";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

/** "Source" disclosure: no JS needed. Unverified or link-less sources show a visible [[TO CONFIRM]]. */
export function SourceBadge({
  ids,
  className,
  tone = "default",
}: {
  ids: readonly string[];
  className?: string;
  tone?: "default" | "light";
}) {
  const t = useTranslations("common.source");
  const locale = useLocale();
  const list = ids.map((id) => sources[id]).filter(Boolean);
  if (!list.length) return null;
  const anyUnverified = list.some((s) => !s.verified);
  return (
    <details className={cn("group relative text-sm", className)}>
      <summary
        className={cn(
          "press inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-full px-3 font-medium marker:hidden [&::-webkit-details-marker]:hidden",
          tone === "light" ? "text-on-brand/90 hover:bg-white/10" : "text-link hover:bg-fg/5",
        )}
      >
        <span
          aria-hidden
          className={cn("size-2 rounded-full", anyUnverified ? "bg-accent" : "bg-emerald-500")}
        />
        {t("label")}
        <span className="text-xs opacity-70">({list.length})</span>
      </summary>
      <ul className="border-line bg-bg text-fg mt-1 w-full space-y-3 rounded-xl border p-4 shadow-lg sm:absolute sm:z-20 sm:w-[22rem]">
        {list.map((s) => (
          <li key={s.id}>
            <p className="leading-snug font-medium">{s.title}</p>
            <p className="text-muted">
              {s.outlet} ·{" "}
              {s.date
                ? formatDate(
                    s.date,
                    locale,
                    s.date.length === 4 ? "year" : s.date.length === 7 ? "month" : "day",
                  )
                : s.accessed
                  ? t("accessed", { date: formatDate(s.accessed, locale) })
                  : t("toConfirmDate")}
            </p>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
              >
                {t("open")} ↗
              </a>
            ) : (
              <p className="font-semibold">{t("toConfirmLink")}</p>
            )}
            {!s.verified && (
              <p className="text-muted text-xs font-semibold">⚠ {t("notVerified")}</p>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
