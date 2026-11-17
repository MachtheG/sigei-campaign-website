import { useLocale, useTranslations } from "next-intl";
import { type Stat, SENATOR_SINCE } from "@/data/record/stats";
import { pick } from "@/data/types";
import { formatDate, formatNumber, yearsSince } from "@/lib/format";
import { cn } from "@/lib/utils";
import { SenatorImage } from "./SenatorImage";
import { ShareButton } from "./ShareButton";
import { SourceBadge } from "./SourceBadge";
import { StatCounter } from "./StatCounter";

export function statValue(s: Stat): number {
  if (s.computed === "yearsInOffice") return Math.floor(yearsSince(SENATOR_SINCE) * 10) / 10;
  return s.value;
}

type Props = { stat: Stat; share?: boolean; className?: string; feature?: boolean };

/** One statistic: photo, animated number, label, source disclosure, optional share. */
export function StatTile({ stat, share, className, feature }: Props) {
  const locale = useLocale();
  const t = useTranslations("record.stats");
  const value = statValue(stat);
  const label = pick(stat.label, locale);
  return (
    <article className={cn("bg-surface flex flex-col overflow-hidden rounded-3xl", className)}>
      {feature ? (
        <div className="relative min-h-72 flex-1">
          <SenatorImage
            id={stat.photoId}
            sizes="(min-width: 1024px) 50vw, 100vw"
            ratio="fill"
            className="absolute inset-0"
            compact
          />
        </div>
      ) : (
        <SenatorImage
          id={stat.photoId}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          ratio="16 / 9"
          compact
        />
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {stat.context && <p className="text-muted mb-1 text-sm font-semibold">{t("context")}</p>}
        <p
          className={cn(
            "font-display text-brand leading-none font-extrabold",
            feature ? "text-6xl sm:text-7xl" : "text-5xl",
          )}
        >
          <StatCounter value={value} decimals={stat.decimals} suffix={stat.suffix} />
        </p>
        <h3 className="mt-3 font-sans text-base leading-snug font-semibold tracking-normal">
          {label}
        </h3>
        <p className="text-muted mt-1.5 text-[0.95rem]">{pick(stat.note, locale)}</p>
        {(stat.asOf || stat.computed) && (
          <p className="text-muted mt-1 text-sm">
            {t("asOf", {
              date: formatDate(stat.asOf ?? new Date().toISOString().slice(0, 10), locale),
            })}
          </p>
        )}
        {stat.confirm && (
          <p className="mt-1 text-sm font-semibold">{t("toConfirm", { what: stat.confirm })}</p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-1 pt-3">
          <SourceBadge ids={stat.sourceIds} />
          {share && (
            <ShareButton
              text={t("shareText", {
                label,
                value: formatNumber(value, locale, stat.decimals ?? 0) + (stat.suffix ?? ""),
              })}
              url={`/api/og?stat=${stat.id}&locale=${locale}`}
            />
          )}
        </div>
      </div>
    </article>
  );
}
