import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { SOCIALS } from "@/lib/nav";
import { LiteToggle } from "./LiteToggle";

const EXPLORE = [
  ["story", "/about"],
  ["record", "/record"],
  ["kazi", "/kazi-iendelee"],
  ["bomet", "/bomet"],
  ["news", "/news"],
  ["gallery", "/gallery"],
  ["party", "/party"],
  ["elections", "/elections"],
  ["contact", "/contact"],
  ["privacy", "/privacy"],
] as const;

const TAKE_PART = [
  ["pledge", "/get-involved#pledge"],
  ["volunteer", "/get-involved#volunteer"],
  ["host", "/get-involved#host"],
  ["donate", "/get-involved#donate"],
] as const;

const linkCls =
  "press inline-flex min-h-11 items-center opacity-85 hover:opacity-100 hover:text-uda";

/** Explore + Take part columns, photo credits and the draft-content note (Reference A pattern). */
export function Footer() {
  const t = useTranslations("common");
  return (
    <footer className="bg-ink-deep text-paper">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">{t("site.short")}</p>
          <p className="mt-2 max-w-[42ch] opacity-80">
            {t("site.name")} · {t("site.role")}
          </p>
          <p className="mt-4 max-w-[42ch] text-sm opacity-80">{t("footer.draftNote")}</p>
          <div className="mt-5">
            <LiteToggle tone="light" />
          </div>
        </div>
        <nav aria-label={t("footer.explore")}>
          <h2 className="font-sans text-base font-bold tracking-normal">{t("footer.explore")}</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {EXPLORE.map(([key, href]) => (
              <li key={key}>
                <Link href={href} className={linkCls}>
                  {t(`navNew.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-base font-bold tracking-normal">{t("footer.takePart")}</h2>
          <ul className="mt-2">
            {TAKE_PART.map(([key, href]) => (
              <li key={key}>
                <Link href={href} className={linkCls}>
                  {t(`footer.${key}`)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                {t("footer.facebook")} ↗
              </a>
            </li>
            <li>
              <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {t("footer.x")} ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-paper/15 border-t">
        <div className="shell flex flex-col gap-2 py-6 text-sm opacity-90 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <p>
            {t("footer.credits")}{" "}
            <Link href="/gallery#credits" className="font-semibold underline underline-offset-4">
              {t("footer.creditsLink")}
            </Link>
          </p>
          <p>{t("footer.authorised")}</p>
          <p>{t("footer.notOfficial")}</p>
        </div>
      </div>
    </footer>
  );
}
