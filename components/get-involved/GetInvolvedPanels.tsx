import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { PledgeForm } from "./PledgeForm";
import { ShareKit } from "./ShareKit";
import { VolunteerForm } from "./VolunteerForm";

export function GetInvolvedPanels() {
  const t = useTranslations("getInvolved");
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal as="section" className="rounded-3xl bg-surface p-6 sm:p-10">
          <h2 className="t-h2">{t("pledge.title")}</h2>
          <p className="mt-3 mb-8 text-muted">{t("pledge.lead")}</p>
          <PledgeForm />
        </Reveal>
        <Reveal as="section" delay={0.08} className="rounded-3xl bg-surface p-6 sm:p-10">
          <h2 className="t-h2">{t("volunteer.title")}</h2>
          <p className="mt-3 mb-8 text-muted">{t("volunteer.lead")}</p>
          <VolunteerForm />
        </Reveal>
      </div>
      <Reveal as="section" className="grid items-center gap-8 rounded-3xl bg-brand p-6 text-on-brand sm:p-10 md:grid-cols-2">
        <div>
          <h2 className="t-h2">{t("share.title")}</h2>
          <p className="mt-3 mb-6 text-on-brand/85">{t("share.lead")}</p>
          <ShareKit />
        </div>
        <SenatorImage id="events-church" sizes="(min-width: 768px) 40vw, 100vw" className="rounded-2xl" />
      </Reveal>
    </div>
  );
}
