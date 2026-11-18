"use client";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";
import { LiteToggle } from "./LiteToggle";
import { NavLinks } from "./NavLinks";

const OPEN_EVENT = "open-menu";
export const openMenu = () => window.dispatchEvent(new Event(OPEN_EVENT));

/**
 * Full-screen menu (native <dialog>: focus trap, Esc to close) holding the links,
 * the language switch, the calendar file, Donate and Lite mode. Actions sit at the
 * bottom, within thumb reach.
 */
export function MobileNav() {
  const t = useTranslations("common");
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => {
      ref.current?.showModal();
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, on);
    return () => window.removeEventListener(OPEN_EVENT, on);
  }, []);

  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      onClose={() => setOpen(false)}
      aria-label={t("nav.menu")}
      className="bg-ink text-paper backdrop:bg-ink fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none p-0"
    >
      {open && (
        <div className="shell flex h-full flex-col overflow-y-auto pt-3 pb-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl">{t("site.short")}</span>
            <button
              type="button"
              onClick={close}
              aria-label={t("a11y.closeMenu")}
              className="press bg-paper/10 inline-flex size-12 items-center justify-center rounded"
              autoFocus
            >
              <X aria-hidden />
            </button>
          </div>
          <nav aria-label={t("a11y.mainNav")} className="mt-6 flex-1">
            <NavLinks large onNavigate={close} />
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <LanguageToggle tone="light" />
            <a
              href="/api/election.ics"
              download
              className="inline-flex min-h-11 items-center underline underline-offset-4"
            >
              {t("navNew.calendar")}
            </a>
            <Link
              href="/get-involved#donate"
              onClick={close}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              {t("footer.donate")}
            </Link>
            <LiteToggle tone="light" />
          </div>
        </div>
      )}
    </dialog>
  );
}
