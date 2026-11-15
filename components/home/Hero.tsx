import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { Link } from "@/lib/i18n/navigation";

/** Full-bleed hero portrait with the pitch laid over a neutral scrim. */
export function Hero() {
  const t = useTranslations("home.hero");
  return (
    <section className="bg-brand relative isolate flex min-h-[calc(100dvh-8rem)] items-end overflow-hidden text-white md:min-h-[min(46rem,calc(100dvh-4rem))]">
      <SenatorImage
        id="hero-main"
        sizes="100vw"
        priority
        ratio="fill"
        position="50% 25%"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
      />
      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-12 sm:px-6 md:pb-20 lg:px-8">
        <h1 className="t-display max-w-[14ch]">
          <span className="sr-only">{t("name")} </span>
          {t("title")}
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg text-white/90 sm:text-xl">{t("lead")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/record" className={buttonVariants({ size: "lg" })}>
            {t("ctaRecord")}
          </Link>
          <Link
            href="/get-involved"
            className={buttonVariants({ size: "lg", variant: "outline", className: "text-white" })}
          >
            {t("ctaPledge")}
          </Link>
        </div>
      </div>
    </section>
  );
}
