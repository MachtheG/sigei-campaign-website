import { useLocale, useTranslations } from "next-intl";
import { type Stat, SENATOR_SINCE } from "@/data/record/stats";
import { sources } from "@/data/sources";
import { pick } from "@/data/types";
import { formatDate, formatNumber, yearsSince } from "@/lib/format";
import { cn } from "@/lib/utils";
import { ShareButton } from "./ShareButton";
import { SourceBadge } from "./SourceBadge";
import { StatCounter } from "./StatCounter";

export function statValue(s: Stat): number {
  if (s.computed === "yearsInOffice") return Math.floor(yearsSince(SENATOR_SINCE) * 10) / 10;
  return s.value;
}

type Props = { stat: Stat; className?: string; tone?: "paper" | "white" };

const precision = (d: string) => (d.length === 4 ? "year" : d.length === 7 ? "month" : "day");

/**
 * One sourced figure: count-up number, careful label, its basis, a VISIBLE
 * "Outlet · date" source line, an as-of date for running counts, and WhatsApp share.
 */
export function StatCard({ stat, className, tone = "paper" }: Props) {
  const locale = useLocale();
  const t = useTranslations("common");
  const value = statValue(stat);
  const label = pick(stat.label, locale);
  const lead = sources[stat.sourceIds[0]];
  const asOf = stat.asOf ?? (stat.computed ? new Date().toISOString().slice(0, 10) : undefined);
  const leadDate = lead?.date || lead?.accessed;
  return (
    <article
      id={`stat-${stat.id}`}
      className={cn(
        "border-forest flex scroll-mt-32 flex-col gap-2.5 border-t-[3px] p-5 sm:p-6",
        tone === "paper" ? "bg-paper" : "bg-surface",
        className,
      )}
    >
      <p className="t-figure text-forest text-[2.75rem] sm:text-5xl">
        <StatCounter value={value} decimals={stat.decimals} suffix={stat.suffix} />
      </p>
      <h3 className="font-sans text-base leading-snug font-semibold tracking-normal">{label}</h3>
      <p className="text-muted text-[0.9375rem]">{pick(stat.note, locale)}</p>
      {asOf && (
        <p className="text-muted text-sm">{t("stat.asOf", { date: formatDate(asOf, locale) })}</p>
      )}
      <div className="border-line mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t pt-2">
        {lead && (
          <a
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
          >
            {lead.outlet}
            {leadDate ? ` · ${formatDate(leadDate, locale, precision(leadDate))}` : ""} ↗
          </a>
        )}
        <ShareButton
          text={t("share.statText", {
            label,
            value: formatNumber(value, locale, stat.decimals ?? 0) + (stat.suffix ?? ""),
          })}
          url={`/${locale}/record#stat-${stat.id}`}
          label={t("stat.share")}
          className="-mr-3"
        />
      </div>
      {stat.sourceIds.some((id) => !sources[id]?.verified) && (
        <p className="text-sm font-semibold">⚠ {t("source.notVerified")}</p>
      )}
      {stat.sourceIds.length > 1 && <SourceBadge ids={stat.sourceIds} className="-ml-3" />}
    </article>
  );
}
