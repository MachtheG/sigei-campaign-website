import { cn } from "@/lib/utils";
import { SourceBadge } from "./SourceBadge";

export type TimelineStep = {
  id: string;
  title: string;
  period: string;
  body?: string;
  sourceIds?: readonly string[];
  /** The step still to come (dashed, hollow marker). */
  future?: boolean;
};

type Props = { steps: TimelineStep[]; className?: string; tone?: "dark" | "light" };

/**
 * Numbered career sequence: a vertical rail on mobile, a horizontal rail from lg up.
 * Every completed step should carry a source.
 */
export function Timeline({ steps, className, tone = "dark" }: Props) {
  const rail = tone === "dark" ? "border-paper" : "border-forest";
  return (
    <ol
      className={cn(
        "grid gap-6 border-l-2 pl-6 lg:auto-cols-fr lg:grid-flow-col lg:gap-0 lg:border-l-0 lg:pl-0",
        rail,
        className,
      )}
    >
      {steps.map((s, i) => (
        <li
          key={s.id}
          className={cn(
            "relative lg:border-t-2 lg:pt-7 lg:pr-4",
            s.future ? "lg:border-dashed lg:border-current/40" : rail,
          )}
        >
          <span
            aria-hidden
            className={cn(
              "absolute top-1.5 -left-[1.95rem] size-4 rounded-full border-2 lg:-top-[0.6rem] lg:left-0",
              tone === "dark" ? "border-paper" : "border-forest",
              s.future ? "bg-transparent" : "bg-ember",
            )}
          />
          <span className="t-figure text-ember-bright text-3xl lg:text-4xl" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display mt-2 text-xl leading-tight lg:text-2xl">{s.title}</h3>
          <p className="mt-1 font-bold tabular-nums">{s.period}</p>
          {s.body && <p className="mt-1.5 text-sm opacity-85">{s.body}</p>}
          {s.sourceIds && s.sourceIds.length > 0 && (
            <SourceBadge
              ids={s.sourceIds}
              tone={tone === "dark" ? "light" : "default"}
              className="-ml-3"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
