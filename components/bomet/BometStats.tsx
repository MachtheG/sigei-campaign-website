import { useTranslations } from "next-intl";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { StatCard } from "@/components/shared/StatCard";
import { stats } from "@/data/record/stats";

/** County context only (verified sources). The census figure stays off until KNBS is read. */
const IDS = ["registered-voters", "wards", "votes-2022"];

export function BometStats() {
  const t = useTranslations("bomet.stats");
  return (
    <section aria-labelledby="bomet-stats" className="bg-surface">
      <div className="shell py-[var(--section)]">
        <SplitHeadline id="bomet-stats" lines={[t("line1"), t("line2")]} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {IDS.map((id) => (
            <StatCard key={id} stat={stats.find((s) => s.id === id)!} />
          ))}
        </div>
      </div>
    </section>
  );
}
