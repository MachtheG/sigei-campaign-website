import { useTranslations } from "next-intl";
import { IEBC_LINKS } from "@/data/election";
import { buttonVariants } from "@/components/ui/button";
import { Countdown } from "./Countdown";

/** "Next stop: Term 2 · 10.08.2027" with ticking units and an .ics download. */
export function CountdownBand() {
  const t = useTranslations("common.countdownBand");
  return (
    <section aria-labelledby="countdown-band" className="bg-ink text-paper">
      <div className="shell grid items-center gap-8 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <p className="t-eyebrow text-ember">{t("eyebrow")}</p>
          <h2 id="countdown-band" className="t-figure mt-2 text-5xl sm:text-6xl">
            {t("date")}
          </h2>
          <p className="mt-2 opacity-80">{t("when")}</p>
        </div>
        <Countdown variant="band" className="md:col-span-5" />
        <div className="flex flex-col gap-2 md:col-span-3">
          <a
            href="/api/election.ics"
            download
            className={buttonVariants({ variant: "paper", size: "lg" })}
          >
            {t("addToCalendar")}
          </a>
          <a
            href={IEBC_LINKS.home}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center underline-offset-4 hover:underline"
          >
            {t("iebc")} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
