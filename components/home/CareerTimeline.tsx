import { useTranslations } from "next-intl";
import { Duotone } from "@/components/shared/Duotone";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { Timeline, type TimelineStep } from "@/components/shared/Timeline";
import { Link } from "@/lib/i18n/navigation";

/** Periods and sources come from the Parliament profile and committee coverage (data/sources.ts). */
const STEPS = [
  { id: "s1", period: "1987–1995", sourceIds: ["parliament-profile"] },
  { id: "s2", period: "1996–1999", sourceIds: ["parliament-profile"] },
  { id: "s3", period: "2001–2005", sourceIds: ["parliament-profile"] },
  { id: "s4", period: "2009 →", sourceIds: ["parliament-profile"] },
  { id: "s5", period: "2022", sourceIds: ["mzalendo-profile", "star-swearing-in-2022"] },
  { id: "s6", period: "2022 · 2025", sourceIds: ["standard-chair-2022", "eastleigh-chair-2025"] },
  { id: "s7", period: "10.08.2027", future: true },
] as const;

export function CareerTimeline() {
  const t = useTranslations("home.career");
  const steps: TimelineStep[] = STEPS.map((s) => ({
    id: s.id,
    title: t(s.id),
    body: t(`${s.id}b`),
    period: s.period,
    sourceIds: "sourceIds" in s ? s.sourceIds : undefined,
    future: "future" in s,
  }));
  return (
    <section aria-labelledby="home-career" className="text-paper relative isolate">
      <Duotone id="kaplong-hills" sizes="100vw" scrim="flat" className="absolute inset-0 -z-10" />
      <div className="shell py-[var(--section)]">
        <SplitHeadline id="home-career" lines={[t("line1"), t("line2"), t("line3")]} />
        <Timeline steps={steps} className="mt-12" />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center font-bold underline underline-offset-4"
          >
            {t("cta")} →
          </Link>
          <p className="text-xs opacity-75">{t("credit")}</p>
        </div>
      </div>
    </section>
  );
}
