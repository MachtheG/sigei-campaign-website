import { useTranslations } from "next-intl";
import { CTABand } from "@/components/shared/CTABand";

export function PledgeCTA() {
  const t = useTranslations("home.cta");
  return <CTABand title={t("title")} body={t("body")} cta={t("cta")} href="/get-involved" photoId="events-rally" />;
}
