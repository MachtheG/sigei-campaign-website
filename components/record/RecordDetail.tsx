import { useLocale, useTranslations } from "next-intl";
import { PillarChip } from "@/components/shared/PillarChip";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { ShareButton } from "@/components/shared/ShareButton";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { buttonVariants } from "@/components/ui/button";
import type { RecordEvent } from "@/data/record/timeline";
import { timeline } from "@/data/record/timeline";
import { pick } from "@/data/types";
import { formatDate } from "@/lib/format";
import { Link } from "@/lib/i18n/navigation";
import { RecordCard } from "./RecordCard";

export function RecordDetail({ event }: { event: RecordEvent }) {
  const t = useTranslations("record.detail");
  const locale = useLocale();
  const related = timeline
    .filter((e) => e.pillar === event.pillar && e.slug !== event.slug)
    .slice(0, 3);
  const photoIds = Array.from(
    new Set([
      event.photoId,
      ...timeline.filter((e) => e.pillar === event.pillar).map((e) => e.photoId),
    ]),
  ).slice(0, 3);
  return (
    <article>
      <header className="border-accent bg-bg text-fg border-b-[6px]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-16 lg:px-8">
          <div>
            <Link
              href="/record"
              className="press text-accent -ml-2 inline-flex min-h-11 items-center px-2 font-semibold"
            >
              ← {t("back")}
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <PillarChip pillar={event.pillar} className="bg-surface" />
              <time dateTime={event.date} className="text-muted">
                {formatDate(event.date, locale, event.datePrecision)}
              </time>
            </div>
            <h1 className="t-h1 mt-4">{pick(event.title, locale)}</h1>
            <p className="text-muted mt-5 max-w-[48ch] text-lg">{pick(event.summary, locale)}</p>
          </div>
          <SenatorImage
            id={event.photoId}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="rounded-3xl"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20 lg:px-8">
        <div>
          <h2 className="t-h2">{t("what")}</h2>
          <p className="mt-5 max-w-[62ch] text-lg">{pick(event.detail, locale)}</p>
          <ShareButton
            text={pick(event.title, locale)}
            url={`/${locale}/record/${event.slug}`}
            className="mt-4 -ml-4"
          />
        </div>
        <aside>
          <h2 className="font-sans text-xl font-bold tracking-normal">{t("sources")}</h2>
          <SourceBadge ids={event.sourceIds} className="mt-2 -ml-3 [&_summary]:text-base" />
        </aside>
      </div>

      <section aria-labelledby="rd-photos" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 id="rd-photos" className="t-h2">
          {t("photos")}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {photoIds.map((id) => (
            <SenatorImage
              key={id}
              id={id}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="rounded-3xl"
              ratio="4 / 3"
              compact
            />
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="rd-more" className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <h2 id="rd-more" className="t-h2">
              {t("more")}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((e) => (
                <RecordCard key={e.slug} event={e} />
              ))}
            </div>
            <Link
              href="/record"
              className={buttonVariants({ size: "lg", variant: "brand", className: "mt-10" })}
            >
              {t("back")}
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}
