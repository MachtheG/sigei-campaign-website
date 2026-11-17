import { useLocale, useTranslations } from "next-intl";
import { photos } from "@/data/photos";
import { pick } from "@/data/types";

/** One credit per image file: slots that reuse a file (hero + portrait) are listed once. */
const credited = photos.filter(
  (p, i) => !p.creditUrl || photos.findIndex((q) => q.creditUrl === p.creditUrl) === i,
);

/** Every image carries its photographer and licence; links go to the original file page. */
export function PhotoCredits() {
  const t = useTranslations("gallery.credits");
  const locale = useLocale();
  return (
    <section id="credits" aria-labelledby="gal-credits" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <h2 id="gal-credits" className="t-h2">
          {t("title")}
        </h2>
        <p className="text-muted mt-3 max-w-[70ch]">{t("lead")}</p>
        <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm md:grid-cols-2">
          {credited.map((p) => (
            <li key={p.id} className="flex flex-col py-1">
              <span className="font-semibold">{pick(p.caption, locale)}</span>
              <span className="text-muted">
                {p.credit}
                {p.creditUrl && (
                  <>
                    {" · "}
                    <a
                      href={p.creditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link font-semibold underline underline-offset-4"
                    >
                      {t("source")}
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
