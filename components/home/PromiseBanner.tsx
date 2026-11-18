import { useTranslations } from "next-intl";

/** The campaign's one line (Checkpoint 2: option 3), said once on the page. */
export function PromiseBanner() {
  const t = useTranslations("common.promise");
  return (
    <section aria-label={t("en")} className="bg-forest text-paper">
      <div className="shell py-10 text-center sm:py-14">
        <p
          lang="sw"
          className="font-display text-[clamp(1.875rem,1.2rem+3vw,3.25rem)] leading-tight"
        >
          {t("sw")}
        </p>
        <p lang="en" className="mt-2 opacity-85 sm:text-lg">
          {t("en")}
        </p>
      </div>
    </section>
  );
}
