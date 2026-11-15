import { useLocale, useTranslations } from "next-intl";
import { PillarChip } from "@/components/shared/PillarChip";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { bySlug } from "@/data/record/timeline";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";

/** 2022 pledges appear only once sourced; until then each slot shows a visible [[TO CONFIRM]]. */
const PAIRS = ["tea-bill-passed-senate", "ecde-milk-oversight", "stalled-projects-inspection"];

export function PromiseVsDelivered() {
  const t = useTranslations("record.promise");
  const locale = useLocale();
  return (
    <section aria-labelledby="rec-promise" className="cv bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="rec-promise" title={t("title")} lead={t("lead")} />
        <div className="mt-10 space-y-4">
          {PAIRS.map((slug) => {
            const e = bySlug(slug)!;
            return (
              <article
                key={slug}
                data-pillars={e.pillar}
                className="bg-line grid gap-px overflow-hidden rounded-3xl md:grid-cols-2"
              >
                <div className="bg-bg p-6">
                  <h3 className="text-muted font-sans text-sm font-bold tracking-normal">
                    {t("promised")}
                  </h3>
                  <p className="mt-2 font-semibold">{t("placeholder")}</p>
                </div>
                <div className="bg-bg p-6">
                  <h3 className="text-muted font-sans text-sm font-bold tracking-normal">
                    {t("delivered")}
                  </h3>
                  <PillarChip pillar={e.pillar} className="mt-2" />
                  <p className="mt-2 font-semibold">
                    <Link href={`/record/${e.slug}`} className="underline underline-offset-4">
                      {pick(e.title, locale)}
                    </Link>
                  </p>
                  <p className="text-muted mt-1">{pick(e.summary, locale)}</p>
                  <SourceBadge ids={e.sourceIds} className="mt-1 -ml-3" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
