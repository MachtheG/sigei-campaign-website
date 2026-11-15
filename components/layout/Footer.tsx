import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { NAV, SOCIALS } from "@/lib/nav";
import { LiteToggle } from "./LiteToggle";

export function Footer() {
  const t = useTranslations("common");
  const quick = NAV.filter((n) => n.key !== "home");
  return (
    <footer className="bg-brand text-on-brand pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-accent text-4xl leading-none font-extrabold sm:text-5xl">
            {t("footer.slogan")}
          </p>
          <p className="text-on-brand/80 mt-4 max-w-[40ch]">
            {t("site.name")} · {t("site.role")}
          </p>
          <div className="mt-6">
            <LiteToggle tone="light" />
          </div>
        </div>
        <nav aria-label={t("footer.quickLinks")}>
          <h2 className="text-base font-bold">{t("footer.quickLinks")}</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {quick.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="press text-on-brand/85 hover:text-accent inline-flex min-h-11 items-center"
                >
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-base font-bold">{t("footer.followUs")}</h2>
          <ul className="mt-2">
            <li>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="press text-on-brand/85 hover:text-accent inline-flex min-h-11 items-center"
              >
                {t("footer.facebook")} ↗
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="press text-on-brand/85 hover:text-accent inline-flex min-h-11 items-center"
              >
                {t("footer.x")} ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="text-on-brand/75 mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{t("footer.authorised")}</p>
          <p>{t("footer.notOfficial")}</p>
          <Link
            href="/privacy"
            className="press text-on-brand inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          >
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
