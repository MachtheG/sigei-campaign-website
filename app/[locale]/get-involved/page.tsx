import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GetInvolvedHero } from "@/components/get-involved/GetInvolvedHero";
import { GetInvolvedPanels } from "@/components/get-involved/GetInvolvedPanels";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "getInvolved.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedPanels />
    </>
  );
}
