import { useLocale, useTranslations } from "next-intl";
import { PillarChip } from "@/components/shared/PillarChip";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { timeline } from "@/data/record/timeline";
import { PILLARS, pick } from "@/data/types";
import { formatDate } from "@/lib/format";
import { Link } from "@/lib/i18n/navigation";

export function RecordTimeline() {
  const t = useTranslations("record");
  const locale = useLocale();
  const events = [...timeline].sort((a, b) => a.date.localeCompare(b.date));
  const empty = PILLARS.filter((p) => !events.some((e) => e.pillar === p));
  return (
    <section aria-labelledby="rec-timeline" className="cv bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="rec-timeline" title={t("timeline.title")} lead={t("timeline.lead")} />
        <ol className="relative mt-12 space-y-8 pl-8 sm:pl-12">
          <span
            aria-hidden
            className="bg-line absolute top-0 bottom-0 left-[0.9rem] w-0.5 sm:left-[1.4rem]"
          />
          <span
            aria-hidden
            className="tl-spine bg-accent absolute top-0 bottom-0 left-[0.9rem] w-0.5 sm:left-[1.4rem]"
          />
          {events.map((e) => (
            <li key={e.slug} data-pillars={e.pillar} className="relative">
              <span
                aria-hidden
                className="border-surface bg-brand dark:bg-accent absolute top-3 -left-[2.1rem] size-4 rounded-full border-4 sm:-left-[2.7rem]"
              />
              <Reveal className="bg-bg grid overflow-hidden rounded-3xl sm:grid-cols-[13rem_1fr]">
                <SenatorImage
                  id={e.photoId}
                  sizes="(min-width: 640px) 208px, 100vw"
                  ratio="fill"
                  className="aspect-[16/9] sm:aspect-auto sm:h-full"
                  compact
                />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <time dateTime={e.date} className="font-display text-lg font-bold">
                      {formatDate(e.date, locale, e.datePrecision)}
                    </time>
                    <PillarChip pillar={e.pillar} />
                  </div>
                  <h3 className="mt-2 font-sans text-xl leading-tight font-bold tracking-normal">
                    <Link
                      href={`/record/${e.slug}`}
                      className="hover:underline focus-visible:underline"
                    >
                      {pick(e.title, locale)}
                    </Link>
                  </h3>
                  <p className="text-muted mt-2">{pick(e.summary, locale)}</p>
                  <SourceBadge ids={e.sourceIds} className="mt-2 -ml-3" />
                </div>
              </Reveal>
            </li>
          ))}
          {empty.map((p) => (
            <li
              key={p}
              data-only-pillar={p}
              className="border-line rounded-2xl border-2 border-dashed p-5 font-semibold"
            >
              {t("timeline.empty")}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
