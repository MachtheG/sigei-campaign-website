"use client";
import { useLocale, useTranslations } from "next-intl";
import { ShareButton } from "@/components/shared/ShareButton";
import { SITE_URL } from "@/lib/utils";

export function ShareKit() {
  const t = useTranslations("getInvolved.share");
  const locale = useLocale();
  const url = `${SITE_URL}/${locale}`;
  const text = t("text");
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ShareButton
        text={text}
        url={url}
        label={t("button")}
        className="bg-accent !text-on-accent hover:brightness-95"
      />
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="press text-paper hover:bg-paper/10 inline-flex min-h-11 items-center rounded-full px-4 font-semibold"
      >
        WhatsApp ↗
      </a>
      <a
        href={`https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="press text-paper hover:bg-paper/10 inline-flex min-h-11 items-center rounded-full px-4 font-semibold"
      >
        X ↗
      </a>
    </div>
  );
}
