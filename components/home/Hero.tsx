import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

/** White hero: the pitch on the left, the Senator's official portrait on a flat gold slab on the right. */
export function Hero() {
  const t = useTranslations("home.hero");
  return (
    <section className="bg-bg relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-8 pb-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pt-14 md:pb-20 lg:px-8">
        <div className="order-2 md:order-1">
          <h1 className="t-display">
            <span className="sr-only">{t("name")} </span>
            {t("title1")} <span className="text-brand">{t("title2")}</span>
          </h1>
          <p className="text-muted mt-5 max-w-[46ch] text-lg sm:text-xl">{t("lead")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/record" className={buttonVariants({ size: "lg" })}>
              {t("ctaRecord")}
            </Link>
            <Link
              href="/get-involved"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              {t("ctaPledge")}
            </Link>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div
            aria-hidden
            className="bg-accent absolute -right-3 -bottom-3 h-full w-full rounded-[2rem] sm:-right-5 sm:-bottom-5"
          />
          <SenatorImage
            id="hero-main"
            sizes="(min-width: 768px) 45vw, 100vw"
            priority
            position="50% 20%"
            className="relative rounded-[2rem]"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1.5 text-sm font-bold shadow">
            {t("badge")}
          </p>
        </div>
      </div>
      <div aria-hidden className="bg-brand h-2" />
    </section>
  );
}
