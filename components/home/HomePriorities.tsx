import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { PriorityCard } from "@/components/shared/PriorityCard";
import { Reveal } from "@/components/shared/Reveal";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { commitments } from "@/data/second-term/commitments";
import { Link } from "@/lib/i18n/navigation";

export function HomePriorities() {
  const t = useTranslations("home.priorities");
  return (
    <section aria-labelledby="home-priorities" className="shell py-[var(--section)]">
      <SplitHeadline id="home-priorities" lines={[t("line1"), t("line2")]} />
      <p className="text-muted mt-4 max-w-[60ch]">{t("lead")}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((c, i) => (
          <Reveal as="li" key={c.id} delay={(i % 3) * 0.06} className="flex">
            <PriorityCard commitment={c} index={i} className="w-full" />
          </Reveal>
        ))}
      </ul>
      <Link
        href="/kazi-iendelee"
        className={buttonVariants({ variant: "brand", size: "lg", className: "mt-8" })}
      >
        {t("cta")}
      </Link>
    </section>
  );
}
