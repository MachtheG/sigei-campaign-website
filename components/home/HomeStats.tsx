import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { StatCard } from "@/components/shared/StatCard";
import { stats } from "@/data/record/stats";
import { Link } from "@/lib/i18n/navigation";

/** Figures NOT already in the hero (2×, 600,000+, 237,192 are there), so nothing repeats. */
const IDS = ["years-in-office", "contributions", "bills-sponsored", "registered-voters"];

export function HomeStats() {
  const t = useTranslations("home.stats");
  const picked = IDS.map((id) => stats.find((s) => s.id === id)!);
  return (
    <section aria-labelledby="home-stats" className="bg-surface">
      <div className="shell py-[var(--section)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SplitHeadline id="home-stats" lines={[t("line1"), t("line2")]} />
          <p className="text-muted max-w-[34ch]">{t("lead")}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {picked.map((s) => (
            <StatCard key={s.id} stat={s} />
          ))}
        </div>
        <Link
          href="/record"
          className={buttonVariants({ variant: "brand", size: "lg", className: "mt-8" })}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
