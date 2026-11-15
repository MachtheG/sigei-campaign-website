import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatTile } from "@/components/shared/StatTile";
import { stats } from "@/data/record/stats";
import { PILLARS } from "@/data/types";

export function RecordStatsGrid() {
  const t = useTranslations("record");
  const empty = PILLARS.filter((p) => !stats.some((s) => s.pillars.includes(p)));
  return (
    <section
      aria-labelledby="rec-stats"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <SectionHeading id="rec-stats" title={t("stats.title")} lead={t("stats.lead")} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.05} pillars={s.pillars.join(" ")}>
            <StatTile stat={s} share className="h-full" />
          </Reveal>
        ))}
        {empty.map((p) => (
          <div
            key={p}
            data-only-pillar={p}
            className="border-line rounded-3xl border-2 border-dashed p-6 sm:col-span-2 lg:col-span-3"
          >
            <p className="font-semibold">{t("stats.empty")}</p>
            <p className="text-muted mt-1 font-semibold">{t("stats.emptyPlaceholder")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
