import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PrivacyNotice } from "@/components/privacy/PrivacyNotice";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/privacy") };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyNotice />;
}
