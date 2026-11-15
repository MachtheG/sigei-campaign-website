import { useLocale, useTranslations } from "next-intl";
import { PillarChip } from "@/components/shared/PillarChip";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import type { RecordEvent } from "@/data/record/timeline";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";
import { formatDate } from "@/lib/format";

/** A record entry with a photo of the Senator. Links to /record/[slug]. */
export function RecordCard({ event }: { event: RecordEvent }) {
  const locale = useLocale();
  const t = useTranslations("record.cards");
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-surface">
      <SenatorImage id={event.photoId} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" ratio="3 / 2" compact />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <PillarChip pillar={event.pillar} />
          <time dateTime={event.date} className="text-sm text-muted">
            {formatDate(event.date, locale, event.datePrecision)}
          </time>
        </div>
        <h3 className="mt-3 text-xl leading-tight font-bold">
          <Link href={`/record/${event.slug}`} className="hover:underline focus-visible:underline">
            {pick(event.title, locale)}
          </Link>
        </h3>
        <p className="mt-2 text-muted">{pick(event.summary, locale)}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-1 pt-3">
          <Link href={`/record/${event.slug}`} className="press inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
            {t("read")} →
          </Link>
          <SourceBadge ids={event.sourceIds} />
        </div>
      </div>
    </article>
  );
}
