import { useTranslations } from "next-intl";
import { PriorityCard } from "@/components/shared/PriorityCard";
import { commitments } from "@/data/second-term/commitments";

/** County-wide priorities (Draft) plus a visible placeholder for local work the campaign must supply. */
export function CountyWork({ name }: { name: string }) {
  const t = useTranslations("bomet.place");
  return (
    <section aria-labelledby="county-work" className="shell py-[var(--section)]">
      <h2 id="county-work" className="t-h2 max-w-[22ch]">
        {t("countyTitle", { name })}
      </h2>
      <p className="text-muted mt-4 max-w-[60ch]">{t("countyLead", { name })}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((c, i) => (
          <li key={c.id} className="flex">
            <PriorityCard commitment={c} index={i} className="w-full" />
          </li>
        ))}
      </ul>
      <div className="border-line mt-12 rounded-md border border-dashed p-6">
        <h3 className="t-h3">{t("workTitle", { name })}</h3>
        <p className="mt-2 font-semibold">{t("workPlaceholder")}</p>
      </div>
    </section>
  );
}
