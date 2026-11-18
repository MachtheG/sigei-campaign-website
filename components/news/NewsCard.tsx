import { useLocale, useTranslations } from "next-intl";
import { PillarChip } from "@/components/shared/PillarChip";
import { sources } from "@/data/sources";
import type { NewsItem } from "@/data/news";
import { pick } from "@/data/types";
import { formatDate } from "@/lib/format";

export function NewsCard({ item }: { item: NewsItem }) {
  const t = useTranslations("news.list");
  const locale = useLocale();
  const s = sources[item.sourceId];
  const prec = s.date.length === 4 ? "year" : s.date.length === 7 ? "month" : "day";
  return (
    <article className="bg-surface flex flex-col rounded-md p-6">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <PillarChip pillar={item.pillar} />
        <span className="font-semibold">{s.outlet}</span>
        <span className="text-muted">
          {s.date ? formatDate(s.date, locale, prec) : t("noDate")}
        </span>
      </div>
      <p className="mt-3 text-lg leading-snug font-semibold">{pick(item.summary, locale)}</p>
      <p className="text-muted mt-2 text-sm">{s.title}</p>
      <div className="mt-auto pt-3">
        {s.url ? (
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="press text-link inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          >
            {t("read")} ↗
          </a>
        ) : (
          <span className="font-semibold">{t("noLink")}</span>
        )}
      </div>
    </article>
  );
}
