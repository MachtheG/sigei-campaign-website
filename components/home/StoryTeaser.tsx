import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export function StoryTeaser() {
  const t = useTranslations("home.story");
  return (
    <section aria-labelledby="home-story" className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-16 lg:px-8">
        <Reveal>
          <SenatorImage
            id="kaplong-hills"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-3xl"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="home-story" className="t-h2">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg">{t("p1")}</p>
          <p className="mt-4 text-lg">{t("p2")}</p>
          <Link
            href="/kazi-iendelee"
            className={buttonVariants({ size: "lg", variant: "brand", className: "mt-8" })}
          >
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
