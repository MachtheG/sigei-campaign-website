import { useLocale, useTranslations } from "next-intl";
import { constituencies } from "@/data/record/constituencies";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";

export function OtherConstituencies({ current }: { current: string }) {
  const t = useTranslations("bomet.place");
  const locale = useLocale();
  return (
    <nav aria-labelledby="others" className="bg-surface">
      <div className="shell py-12">
        <h2 id="others" className="font-sans text-base font-bold tracking-normal">
          {t("others")}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
          {constituencies
            .filter((c) => c.id !== current)
            .map((c) => (
              <li key={c.id}>
                <Link
                  href={`/bomet/${c.id}`}
                  className="font-display inline-flex min-h-11 items-center text-2xl underline-offset-4 hover:underline"
                >
                  {pick(c.name, locale)}
                </Link>
              </li>
            ))}
          <li>
            <Link href="/bomet" className="text-link inline-flex min-h-11 items-center font-bold">
              ← {t("back")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
