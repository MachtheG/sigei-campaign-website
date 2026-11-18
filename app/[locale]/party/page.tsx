import type { Metadata } from "next";
import { alt, og } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PartyHero } from "@/components/party/PartyHero";
import { PartyPrograms } from "@/components/party/PartyPrograms";
import { PartyRole } from "@/components/party/PartyRole";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "party.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alt(locale, "/party"),
    ...og(locale, t("title")),
  };
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
