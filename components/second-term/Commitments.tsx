import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { commitments } from "@/data/second-term/commitments";
import { pick } from "@/data/types";

export function Commitments() {
  const t = useTranslations("secondTerm.commitments");
  const d = useTranslations("common.draft");
  const locale = useLocale();
  return (
    <section
      id="commitments"
      aria-labelledby="st-commitments"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading id="st-commitments" title={t("title")} lead={t("lead")} />
      <p className="bg-accent text-on-accent mt-6 rounded-2xl px-5 py-4 font-bold">
        {t("draftBanner")}
      </p>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {commitments.map((c, i) => (
          <Reveal
            key={c.id}
            delay={(i % 2) * 0.06}
            as="article"
            className="bg-surface rounded-3xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-accent text-on-accent rounded-full px-3 py-1 text-xs font-extrabold">
                {d("badge")}
              </span>
              <span className="bg-brand/10 text-link rounded-full px-3 py-1 text-sm font-semibold">
                {t(`lever.${c.lever}`)}
              </span>
            </div>
            <h3 className="mt-4 text-2xl leading-tight font-bold">{pick(c.title, locale)}</h3>
            <dl className="mt-4 space-y-4">
              {(["what", "why", "how", "measure"] as const).map((k) => (
                <div key={k}>
                  <dt className="text-muted text-sm font-bold">{t(k)}</dt>
                  <dd className="mt-0.5">{pick(c[k], locale)}</dd>
                </div>
              ))}
            </dl>
            <SourceBadge ids={c.sourceIds} className="mt-3 -ml-3" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
