import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Fraunces, Public_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { LITE_INIT_SCRIPT, LiteProvider } from "@/components/shared/LiteProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TopStrip } from "@/components/shared/TopStrip";
import { routing } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/utils";
import "../globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const body = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });

// Namespaces that client components read (keeps the payload small for mobile data).
const CLIENT_NAMESPACES = [
  "common",
  "record",
  "gallery",
  "getInvolved",
  "contact",
  "elections",
] as const;

export const viewport: Viewport = {
  themeColor: "#0b1a14",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    openGraph: {
      siteName: t("title"),
      locale: locale === "sw" ? "sw_KE" : "en_KE",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const all = (await getMessages()) as Record<string, unknown>;
  const messages = Object.fromEntries(CLIENT_NAMESPACES.map((k) => [k, all[k]]));
  const t = await getTranslations("common.a11y");

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LITE_INIT_SCRIPT }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LiteProvider>
            <TooltipProvider delayDuration={200}>
              <a href="#main" className="skip-link">
                {t("skip")}
              </a>
              <TopStrip />
              <Header />
              <main id="main" tabIndex={-1} className="min-h-[60dvh] outline-none">
                {children}
              </main>
              <Footer />
              <MobileNav />
            </TooltipProvider>
          </LiteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
