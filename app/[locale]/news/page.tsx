import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsList } from "@/components/news/NewsList";
import { StatementCard } from "@/components/news/StatementCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/news") };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <NewsHero />
      <NewsList />
      <StatementCard />
    </>
  );
}
