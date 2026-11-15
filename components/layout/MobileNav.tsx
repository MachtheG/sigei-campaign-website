"use client";
import { Home, LineChart, Menu, Sprout, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";
import { LiteToggle } from "./LiteToggle";
import { isActive, NavLinks } from "./NavLinks";

const OPEN_EVENT = "open-menu";
export const openMenu = () => window.dispatchEvent(new Event(OPEN_EVENT));

/** Thumb-reachable bottom bar + full-screen menu (native <dialog>: focus trap, Esc to close). */
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

  const items = [
    { href: "/", key: "home", Icon: Home },
    { href: "/record", key: "record", Icon: LineChart },
    { href: "/second-term", key: "secondTerm", Icon: Sprout },
  ] as const;

  return (
    <>
      <nav
        aria-label={t("a11y.mobileNav")}
        className="pb-safe border-line bg-bg fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t md:hidden"
      >
        {items.map(({ href, key, Icon }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={key}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "press flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.72rem] font-semibold",
                active ? "text-link" : "text-muted",
              )}
            >
              <Icon aria-hidden className="size-5" />
              {t(`nav.${key}`)}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={openMenu}
          className="press text-muted flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.72rem] font-semibold"
        >
          <Menu aria-hidden className="size-5" />
          {t("nav.menu")}
        </button>
      </nav>

      <dialog
        ref={ref}
        onClose={() => setOpen(false)}
        aria-label={t("nav.menu")}
        className="bg-brand text-on-brand backdrop:bg-brand fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none p-0"
      >
        {open && (
          <div className="flex h-full flex-col overflow-y-auto px-5 pt-3 pb-8">
            <div className="flex items-center justify-between">
              <LanguageToggle tone="light" />
              <button
                type="button"
                onClick={() => ref.current?.close()}
                aria-label={t("a11y.closeMenu")}
                className="press inline-flex size-12 items-center justify-center rounded-full bg-white/10"
                autoFocus
              >
                <X aria-hidden />
              </button>
            </div>
            <nav aria-label={t("a11y.mainNav")} className="mt-6 flex-1">
              <NavLinks large className="space-y-0.5" onNavigate={() => ref.current?.close()} />
            </nav>
            <div className="mt-6 border-t border-white/15 pt-4">
              <LiteToggle tone="light" />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
