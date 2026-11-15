import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

const IDS = [
  "senate-floor", "farmers-tea", "community-elders", "field-school", "senate-committee", "community-youth",
  "farmers-pluckers", "field-water", "events-rally", "senate-bill",
];

/** Endless, auto-scrolling strip. Pauses on hover/focus; swipeable; static in Lite/reduced-motion. */
export function PhotoMarquee() {
  const t = useTranslations("home.marquee");
  const row = (hidden: boolean) =>
    IDS.map((id) => (
      <li key={`${id}-${hidden}`} aria-hidden={hidden || undefined} className="w-56 shrink-0 sm:w-72">
        <SenatorImage id={id} sizes="288px" ratio="4 / 5" className="rounded-2xl" compact />
      </li>
    ));
  return (
    <section aria-label={t("aria")} className="overflow-hidden py-16 md:py-24">
      <h2 className="t-h2 mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">{t("title")}</h2>
      <div className="marquee overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="marquee-track flex gap-4 px-4">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  );
}
