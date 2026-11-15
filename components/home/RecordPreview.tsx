import { useTranslations } from "next-intl";
import { RecordCard } from "@/components/record/RecordCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { bySlug } from "@/data/record/timeline";
import { Link } from "@/lib/i18n/navigation";

const SLUGS = ["tea-bill-passed-senate", "stalled-projects-inspection", "ecde-milk-oversight"];

export function RecordPreview() {
  const t = useTranslations("home.record");
  return (
    <section
      aria-labelledby="home-record"
      className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8"
    >
      <SectionHeading id="home-record" title={t("title")} lead={t("lead")} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SLUGS.map((slug, i) => (
          <Reveal key={slug} delay={i * 0.06}>
            <RecordCard event={bySlug(slug)!} />
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
