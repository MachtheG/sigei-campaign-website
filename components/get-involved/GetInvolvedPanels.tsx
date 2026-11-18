import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { Link } from "@/lib/i18n/navigation";
import { PledgeForm } from "./PledgeForm";
import { ShareKit } from "./ShareKit";
import { VolunteerForm } from "./VolunteerForm";

const card = "bg-surface border-line scroll-mt-32 rounded-md border p-6 sm:p-10";

/** Every "take part" link on the site lands on one of these anchors. */
export function GetInvolvedPanels() {
  const t = useTranslations("getInvolved");
  return (
    <div className="shell space-y-6 py-[var(--section)]">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal as="section" id="pledge" className={card}>
          <h2 className="t-h2">{t("pledge.title")}</h2>
          <p className="text-muted mt-3 mb-8">{t("pledge.lead")}</p>
          <PledgeForm />
        </Reveal>
        <Reveal as="section" id="volunteer" delay={0.08} className={card}>
          <h2 className="t-h2">{t("volunteer.title")}</h2>
          <p className="text-muted mt-3 mb-8">{t("volunteer.lead")}</p>
          <VolunteerForm />
        </Reveal>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section id="host" className={card}>
          <h2 className="t-h3">{t("host.title")}</h2>
          <p className="text-muted mt-3">{t("host.lead")}</p>
          <Link href="/contact" className={buttonVariants({ variant: "brand", className: "mt-6" })}>
            {t("host.cta")}
          </Link>
        </section>
        <section id="story" className={card}>
          <h2 className="t-h3">{t("tell.title")}</h2>
          <p className="text-muted mt-3">{t("tell.lead")}</p>
          <Link href="/contact" className={buttonVariants({ variant: "brand", className: "mt-6" })}>
            {t("tell.cta")}
          </Link>
        </section>
      </div>
      <section id="share" className="bg-forest text-paper scroll-mt-32 rounded-md p-6 sm:p-10">
        <h2 className="t-h2">{t("share.title")}</h2>
        <p className="mt-3 mb-6 opacity-85">{t("share.lead")}</p>
        <ShareKit />
      </section>
      <section id="donate" className={card}>
        <h2 className="t-h3">{t("donate.title")}</h2>
        <p className="text-muted mt-3">{t("donate.lead")}</p>
        <p className="mt-3 font-semibold">{t("donate.placeholder")}</p>
      </section>
    </div>
  );
}
