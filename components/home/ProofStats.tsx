import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatTile } from "@/components/shared/StatTile";
import { buttonVariants } from "@/components/ui/button";
import { stats } from "@/data/record/stats";
import { Link } from "@/lib/i18n/navigation";

const FEATURED = ["years-in-office", "chair-terms", "bills-sponsored", "growers", "votes-2022"];

/** Bento grid: one big tile, four supporting. */
export function ProofStats() {
  const t = useTranslations("home.stats");
  const picked = FEATURED.map((id) => stats.find((s) => s.id === id)!);
  return (
    <section
      aria-labelledby="home-stats"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading id="home-stats" title={t("title")} lead={t("lead")} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {picked.map((s, i) => (
          <Reveal
            key={s.id}
            delay={i * 0.06}
            className={i === 0 ? "md:col-span-2 lg:row-span-2" : ""}
          >
            <StatTile stat={s} feature={i === 0} className="h-full" />
          </Reveal>
        ))}
      </div>
      <Link
        href="/record"
        className={buttonVariants({ size: "lg", variant: "brand", className: "mt-10" })}
      >
        {t("cta")}
      </Link>
    </section>
  );
}
