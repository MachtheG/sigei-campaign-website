"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  url: string;
  className?: string;
  label?: string;
  tone?: "default" | "light";
};

/** Native share sheet on phones (WhatsApp, etc.); WhatsApp link fallback on desktop. */
export function ShareButton({ text, url, className, label, tone = "default" }: Props) {
  const t = useTranslations("common.share");
  const [copied, setCopied] = useState(false);

  async function onClick() {
    const abs = url.startsWith("http") ? url : `${window.location.origin}${url}`;
    try {
      if (navigator.share) {
        await navigator.share({ text, url: abs });
        return;
      }
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${text} ${abs}`)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } catch {
      try {
        await navigator.clipboard.writeText(abs);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {}
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold",
        tone === "light" ? "text-on-brand hover:bg-white/10" : "text-link hover:bg-fg/5",
        className,
      )}
    >
      <Share2 aria-hidden className="size-4" />
      <span aria-live="polite">{copied ? t("copied") : (label ?? t("share"))}</span>
    </button>
  );
}
