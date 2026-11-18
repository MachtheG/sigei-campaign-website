import { Link } from "@/lib/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SplitHeadline } from "./SplitHeadline";

type Way = { title: string; body: string; href: string };

type Props = {
  /** Lines of the split headline, or one string. */
  title: string | string[];
  body?: string;
  cta: string;
  href: string;
  /** Up to three ways to take part, shown as cards above the button. */
  ways?: Way[];
  className?: string;
};

/** Forest band that hands the campaign to the visitor ("This campaign belongs to Bomet"). No photo: images appear once per page elsewhere. */
export function CTABand({ title, body, cta, href, ways, className }: Props) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <section className={cn("bg-forest text-paper", className)}>
      <div className="shell py-[var(--section)]">
        <SplitHeadline lines={lines} />
        {body && <p className="t-lead mt-5 max-w-[52ch] opacity-90">{body}</p>}
        {ways && (
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {ways.map((w) => (
              <li key={w.title}>
                <Link
                  href={w.href}
                  className="press border-paper/30 hover:border-paper flex h-full flex-col gap-2 rounded-md border p-6"
                >
                  <span className="font-display text-2xl leading-tight">{w.title}</span>
                  <span className="opacity-85">{w.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link href={href} className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
