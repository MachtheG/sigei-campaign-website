import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { StatCounter } from "@/components/shared/StatCounter";
import { stats } from "@/data/record/stats";
import { reasons } from "@/data/second-term/story";
import { pick } from "@/data/types";

export function WhyHim() {
  const t = useTranslations("secondTerm.why");
  const locale = useLocale();
  return (
    <section aria-labelledby="st-why" className="bg-brand text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading id="st-why" title={t("title")} lead={t("lead")} tone="light" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reasons.map((r, i) => {
            const s = stats.find((x) => x.id === r.statId)!;
            return (
              <Reveal
                key={r.id}
                delay={(i % 2) * 0.06}
                as="article"
                className="rounded-3xl bg-white/10 p-6 sm:p-8"
              >
                <p className="font-display text-accent text-5xl leading-none font-extrabold">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-on-brand/75 mt-1 text-sm">{pick(s.label, locale)}</p>
                <h3 className="mt-5 text-2xl font-bold">{t(`items.${r.id}.title`)}</h3>
                <p className="text-on-brand/85 mt-2">{t(`items.${r.id}.body`)}</p>
                <SourceBadge ids={s.sourceIds} tone="light" className="mt-2 -ml-3" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
