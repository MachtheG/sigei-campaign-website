"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({
  className,
  onNavigate,
  large,
}: {
  className?: string;
  onNavigate?: () => void;
  large?: boolean;
}) {
  const t = useTranslations("common.navNew");
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
                "press inline-flex min-h-11 items-center font-semibold whitespace-nowrap",
                large
                  ? "font-display border-paper/12 w-full border-b py-2 text-3xl font-normal"
                  : "px-2 text-[0.9375rem] underline-offset-[6px] hover:underline",
                active ? "text-uda" : "text-paper",
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
