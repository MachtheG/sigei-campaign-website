import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { partyPrograms } from "@/data/party";
import { pick } from "@/data/types";

const PHOTOS = ["farmers-meeting", "field-water", "community-youth"];

export function PartyPrograms() {
  const t = useTranslations("party.programs");
  const locale = useLocale();
  return (
    <section aria-labelledby="pt-programs" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="pt-programs" title={t("title")} lead={t("lead")} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {partyPrograms.map((p, i) => (
            <article key={p.id} className="bg-bg overflow-hidden rounded-md">
              <SenatorImage
                id={PHOTOS[i % PHOTOS.length]}
                sizes="(min-width: 768px) 33vw, 100vw"
                ratio="16 / 9"
                compact
              />
              <div className="p-5">
                <h3 className="text-lg font-bold">{pick(p.title, locale)}</h3>
                <p className="mt-2 font-semibold">{t("placeholder")}</p>
                <SourceBadge ids={p.sourceIds} className="mt-1 -ml-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
