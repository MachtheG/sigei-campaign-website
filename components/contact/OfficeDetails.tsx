import { useTranslations } from "next-intl";
import { SOCIALS } from "@/lib/nav";

export function OfficeDetails() {
  const t = useTranslations("contact");
  const f = useTranslations("common.footer");
  const rows = ["address", "phone", "email", "hours"] as const;
  return (
    <div className="space-y-8">
      <section aria-labelledby="ct-office">
        <h2 id="ct-office" className="t-h2">{t("office.title")}</h2>
        <dl className="mt-6 space-y-4">
          {rows.map((r) => (
            <div key={r}>
              <dt className="text-sm font-bold text-muted">{t(`office.${r}`)}</dt>
              <dd className="font-semibold">{t(`office.${r}Value`)}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="ct-social">
        <h2 id="ct-social" className="font-display text-2xl font-bold">{t("social.title")}</h2>
        <ul className="mt-2">
          <li>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">{f("facebook")} ↗</a>
          </li>
          <li>
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">{f("x")} ↗</a>
          </li>
        </ul>
        <p className="mt-1 text-sm font-semibold">{t("social.note")}</p>
      </section>
    </div>
  );
}
