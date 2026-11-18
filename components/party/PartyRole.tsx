import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { partyRoleSourceIds } from "@/data/party";

export function PartyRole() {
  const t = useTranslations("party.role");
  return (
    <section
      aria-labelledby="pt-role"
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8"
    >
      <SenatorImage
        id="events-rally"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="rounded-md"
      />
      <div>
        <h2 id="pt-role" className="t-h2">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg">{t("body")}</p>
        <p className="mt-3 font-semibold">{t("offices")}</p>
        <SourceBadge ids={partyRoleSourceIds} className="mt-2 -ml-3" />
      </div>
    </section>
  );
}
