import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { timeline } from "@/data/record/timeline";
import { RecordCard } from "./RecordCard";

export function RecordCards() {
  const t = useTranslations("record.cards");
  const events = [...timeline].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section aria-labelledby="rec-cards" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeading id="rec-cards" title={t("title")} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.slug} delay={(i % 3) * 0.05} pillars={e.pillar}>
            <RecordCard event={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
