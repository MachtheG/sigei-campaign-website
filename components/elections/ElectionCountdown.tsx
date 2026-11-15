import { useTranslations } from "next-intl";
import { Countdown } from "@/components/shared/Countdown";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { buttonVariants } from "@/components/ui/button";
import { ELECTION, IEBC_LINKS } from "@/data/election";

export function ElectionCountdown() {
  const t = useTranslations("elections.countdown");
  const c = useTranslations("common.countdown");
  return (
    <section aria-labelledby="el-countdown" className="bg-brand text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
        <h2 id="el-countdown" className="t-h2">{t("title")}</h2>
        <Countdown variant="large" className="mt-8" />
        <p className="mt-4 text-on-brand/80">{c("date")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="/api/election.ics" className={buttonVariants({ size: "lg" })}>{t("calendar")}</a>
          <a href={IEBC_LINKS.verify} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", variant: "outline", className: "text-on-brand" })}>
            {t("registered")} ↗
          </a>
          <a href={IEBC_LINKS.home} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", variant: "ghost", className: "text-on-brand" })}>
            {t("iebc")} ↗
          </a>
        </div>
        <p className="mt-6 max-w-[60ch] text-sm text-on-brand/75">{t("note")}</p>
        <SourceBadge ids={ELECTION.sourceIds} tone="light" className="mt-1 -ml-3" />
      </div>
    </section>
  );
}
