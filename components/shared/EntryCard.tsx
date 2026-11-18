import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  n: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  className?: string;
};

/** Numbered entry point (01 · Who, 02 · Record, 03 · What's next). The whole card is the link. */
export function EntryCard({ n, title, body, cta, href, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "press group border-line bg-surface flex min-h-56 flex-col gap-3 rounded-md border p-6 sm:p-8",
        "hover:border-forest focus-visible:border-forest",
        className,
      )}
    >
      <span className="font-display text-ember-text text-xl">{n}</span>
      <span className="font-display text-3xl leading-tight sm:text-[2.125rem]">{title}</span>
      <span className="text-muted">{body}</span>
      <span className="text-forest mt-auto font-bold">
        {cta}{" "}
        <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
