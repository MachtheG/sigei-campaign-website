import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Duotone } from "./Duotone";

type Props = {
  /** Message namespace holding hero.title / hero.lead (and optional hero.eyebrow). */
  ns: string;
  /** Optional landscape for a duotone backdrop (each photo once per page). */
  image?: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

/** Inner-page opening: eyebrow, editorial title, lead. Dark over a duotone when given a landscape, paper otherwise. */
export function PageHero({ ns, image, eyebrow, children }: Props) {
  const t = useTranslations(ns);
  const dark = Boolean(image);
  return (
    <section
      aria-labelledby="page-title"
      className={cn(
        "relative isolate",
        dark ? "bg-ink text-paper" : "bg-paper border-line border-b",
      )}
    >
      {image && (
        <Duotone
          id={image}
          sizes="100vw"
          priority
          scrim="left"
          className="absolute inset-0 -z-10"
        />
      )}
      <div className={cn("shell flex flex-col gap-4", dark ? "py-20 md:py-28" : "py-14 md:py-20")}>
        {eyebrow && (
          <p className={cn("t-eyebrow", dark ? "text-ember" : "text-ember-text")}>{eyebrow}</p>
        )}
        <h1 id="page-title" className="t-h1 max-w-[18ch]">
          {t("hero.title")}
        </h1>
        <p className={cn("t-lead max-w-[52ch]", !dark && "text-muted")}>{t("hero.lead")}</p>
        {children}
      </div>
    </section>
  );
}
