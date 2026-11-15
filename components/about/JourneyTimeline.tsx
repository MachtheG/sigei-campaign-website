import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { journey } from "@/data/about";
import { pick } from "@/data/types";

export function JourneyTimeline() {
  const t = useTranslations("about.journey");
  const locale = useLocale();
  return (
    <section aria-labelledby="ab-journey" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="ab-journey" title={t("title")} lead={t("lead")} />
        <ol className="mt-10 space-y-5">
          {journey.map((m) => (
            <li key={m.id}>
              <Reveal className="bg-bg grid overflow-hidden rounded-3xl sm:grid-cols-[12rem_1fr]">
                <SenatorImage
                  id={m.photoId}
                  sizes="(min-width: 640px) 192px, 100vw"
                  ratio="fill"
                  className="aspect-[16/9] sm:aspect-auto sm:h-full"
                  compact
                />
                <div className="p-5 sm:p-6">
                  <p className="font-display text-brand dark:text-accent text-2xl font-extrabold">
                    {m.year}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{pick(m.title, locale)}</h3>
                  <p className="text-muted mt-1">{pick(m.body, locale)}</p>
                  <SourceBadge ids={m.sourceIds} className="mt-1 -ml-3" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
