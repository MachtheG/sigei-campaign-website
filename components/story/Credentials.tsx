import { useTranslations } from "next-intl";
import { SourceBadge } from "@/components/shared/SourceBadge";

const GROUPS = [
  { key: "education", items: ["a", "b", "c", "d", "e"], items_ns: "eduItems" },
  { key: "career", items: ["a", "b", "c"], items_ns: "careerItems" },
  { key: "senate", items: ["a", "b"], items_ns: "senateItems" },
] as const;

export function Credentials() {
  const t = useTranslations("story.credentials");
  return (
    <section
      aria-labelledby="ab-cred"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <h2 id="ab-cred" className="t-h2">
        {t("title")}
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {GROUPS.map((g) => (
          <article key={g.key} className="bg-surface rounded-md p-6">
            <h3 className="text-xl font-bold">{t(g.key)}</h3>
            <ul className="mt-3 space-y-2">
              {g.items.map((i) => (
                <li key={i} className="border-accent border-l-4 pl-3">
                  {t(`${g.items_ns}.${i}`)}
                </li>
              ))}
            </ul>
            <SourceBadge
              ids={
                g.key === "senate"
                  ? ["parliament-profile", "standard-chair-2022", "eastleigh-chair-2025"]
                  : ["parliament-profile"]
              }
              className="mt-3 -ml-3"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
