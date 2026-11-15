import { useTranslations } from "next-intl";
import { Countdown } from "@/components/shared/Countdown";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export function CountdownSection() {
  const t = useTranslations("home.countdown");
  const c = useTranslations("common.countdown");
  return (
    <section aria-labelledby="home-countdown" className="bg-brand text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <h2 id="home-countdown" className="t-h2 max-w-[18ch]">
          {t("title")}
        </h2>
        <p className="text-on-brand/80 mt-4 max-w-[56ch] text-lg">{t("lead")}</p>
        <Countdown variant="large" className="mt-10" />
        <p className="text-on-brand/70 mt-4 text-sm">{c("date")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="/api/election.ics" className={buttonVariants({ size: "lg" })}>
            {t("calendar")}
          </a>
          <Link
            href="/elections"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "text-on-brand",
            })}
          >
            {t("details")}
          </Link>
        </div>
      </div>
    </section>
  );
}
