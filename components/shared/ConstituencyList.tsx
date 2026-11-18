import { useLocale, useTranslations } from "next-intl";
import { constituencies } from "@/data/record/constituencies";
import { pick } from "@/data/types";
import { formatNumber } from "@/lib/format";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Link each row to /bomet/[constituency] (the pages arrive in Phase 5). */
  linked?: boolean;
};

/** "Five constituencies, one county": largest register first, IEBC 2022 figures. */
export function ConstituencyList({ className, linked = true }: Props) {
  const locale = useLocale();
  const t = useTranslations("common.places");
  const rows = [...constituencies].sort((a, b) => b.voters2022 - a.voters2022);
  const total = rows.reduce((n, c) => n + c.voters2022, 0);
  return (
    <div className={className}>
      <ol className="border-line border-b">
        {rows.map((c, i) => {
          const inner = (
            <>
              <span className="font-display text-ember-text" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl sm:text-[2.125rem]">
                {pick(c.name, locale)}
              </span>
              <span className="text-[0.9375rem] font-semibold tabular-nums sm:text-base">
                {t("voters", { count: formatNumber(c.voters2022, locale) })}
              </span>
              {linked && (
                <span aria-hidden className="hidden text-right sm:block">
                  →
                </span>
              )}
            </>
          );
          const row = cn(
            "grid min-h-11 grid-cols-[2.5rem_1fr] items-baseline gap-x-3 py-4 sm:grid-cols-[4rem_1fr_auto_2rem] sm:py-5",
          );
          return (
            <li key={c.id} className="border-line border-t">
              {linked ? (
                <Link href={`/bomet/${c.id}`} className={cn(row, "press hover:text-forest")}>
                  {inner}
                </Link>
              ) : (
                <div className={row}>{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
      <p className="text-muted mt-3 text-sm">
        {t("source", { total: formatNumber(total, locale) })}
      </p>
    </div>
  );
}
