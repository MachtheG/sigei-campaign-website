import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

export function LetterFromSenator() {
  const t = useTranslations("secondTerm.letter");
  const d = useTranslations("common.draft");
  return (
    <section aria-labelledby="st-letter" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1fr_16rem] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="st-letter" className="t-h2">
              {t("title")}
            </h2>
          </div>
          <p className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-sm font-extrabold text-on-accent">
            {d("badge")}: {t("draft")}
          </p>
          <div className="mt-6 space-y-4 text-lg">
            <p>{t("greeting")}</p>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p className="font-display text-2xl font-bold">{t("signoff")}</p>
            <p className="text-sm font-semibold text-muted">{t("signature")}</p>
          </div>
        </div>
        <SenatorImage id="portrait-formal" sizes="(min-width: 768px) 256px, 60vw" className="w-3/5 rounded-3xl md:w-full" compact />
      </div>
    </section>
  );
}
