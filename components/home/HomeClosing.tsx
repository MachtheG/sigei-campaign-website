import { useTranslations } from "next-intl";
import { Duotone } from "@/components/shared/Duotone";

/** Closing image of Bomet with a short identity block and the trust line. */
export function HomeClosing() {
  const t = useTranslations("home.closing");
  const c = useTranslations("common");
  return (
    <section aria-label={t("alt")} className="text-paper relative isolate">
      <Duotone
        id="rainbow-farmland"
        sizes="100vw"
        scrim="bottom"
        className="absolute inset-0 -z-10"
      />
      <div className="shell flex min-h-[26rem] flex-col justify-end gap-6 py-12 md:min-h-[35rem] md:flex-row md:items-end md:justify-between">
        <div>
          <p lang="sw" className="font-display text-[clamp(2rem,1.4rem+2.6vw,3rem)] leading-[1.05]">
            <span className="block">{t("line1")}</span>
            <span className="block">{t("line2")}</span>
          </p>
          <p className="mt-3 opacity-85">{t("who")}</p>
        </div>
        <p className="text-lg font-bold md:max-w-[26ch] md:text-right">{c("trust")}</p>
      </div>
    </section>
  );
}
