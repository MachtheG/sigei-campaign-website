import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PartyHero } from "@/components/party/PartyHero";
import { PartyPrograms } from "@/components/party/PartyPrograms";
import { PartyRole } from "@/components/party/PartyRole";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "party.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function PartyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PartyHero />
      <PartyRole />
      <PartyPrograms />
    </>
  );
}
