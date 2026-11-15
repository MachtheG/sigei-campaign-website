import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ElectionCountdown } from "@/components/elections/ElectionCountdown";
import { ElectionHero } from "@/components/elections/ElectionHero";
import { KeyDates } from "@/components/elections/KeyDates";
import { VoterChecklist } from "@/components/elections/VoterChecklist";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "elections.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ElectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <ElectionHero />
      <ElectionCountdown />
      <KeyDates />
      <VoterChecklist />
    </>
  );
}
