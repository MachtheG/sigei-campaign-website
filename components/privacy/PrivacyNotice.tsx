import { useTranslations } from "next-intl";

const SECTIONS = ["controller", "collect", "why", "basis", "share", "keep", "rights", "security"] as const;

export function PrivacyNotice() {
  const t = useTranslations("privacy");
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
      <h1 className="t-h1">{t("title")}</h1>
      <p className="t-lead mt-4">{t("lead")}</p>
      <p className="mt-2 text-sm font-semibold">{t("updated")}</p>
      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <section key={s} aria-labelledby={`pv-${s}`}>
            <h2 id={`pv-${s}`} className="font-display text-2xl font-bold">{t(`sections.${s}.title`)}</h2>
            <p className="mt-2 text-lg">{t(`sections.${s}.body`)}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
