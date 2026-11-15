"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ className, onNavigate, large }: { className?: string; onNavigate?: () => void; large?: boolean }) {
  const t = useTranslations("common.nav");
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV.map(({ key, href }) => {
        const active = isActive(pathname, href);
        return (
          <li key={key}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "press inline-flex min-h-11 items-center rounded-full font-semibold whitespace-nowrap",
                large ? "font-display w-full px-2 py-2 text-3xl" : "px-2.5 text-sm",
                active ? (large ? "text-accent" : "bg-brand text-on-brand") : large ? "text-on-brand" : "text-fg hover:bg-fg/5",
              )}
            >
              {t(key)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
