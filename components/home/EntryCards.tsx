import { useTranslations } from "next-intl";
import { EntryCard } from "@/components/shared/EntryCard";
import { Reveal } from "@/components/shared/Reveal";

const CARDS = [
  { key: "who", href: "/about" },
  { key: "record", href: "/record" },
  { key: "next", href: "/kazi-iendelee" },
] as const;

/** Three numbered paths right after the hero: Who · Record · What's next (staggered). */
export function EntryCards() {
  const t = useTranslations("home.entry");
  return (
    <section aria-label={t("label")} className="shell py-[var(--section)]">
      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {CARDS.map((c, i) => (
          <Reveal as="li" key={c.key} delay={i * 0.08} className="flex">
            <EntryCard
              n={String(i + 1).padStart(2, "0")}
              title={t(`${c.key}Title`)}
              body={t(`${c.key}Body`)}
              cta={t(`${c.key}Cta`)}
              href={c.href}
              className="w-full"
            />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
