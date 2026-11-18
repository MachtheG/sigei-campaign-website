import { cn } from "@/lib/utils";

type Props = {
  /** One string per visual line; each line after the first steps in on ≥640px. */
  lines: string[];
  as?: "h1" | "h2" | "h3";
  id?: string;
  size?: "display" | "h1" | "h2";
  className?: string;
  /** Optional accent on the last line (e.g. the English support line). */
  accentLast?: boolean;
};

/**
 * Large editorial headline broken across lines for rhythm.
 * Screen readers get one sentence: the lines are spans inside a single heading.
 */
export function SplitHeadline({ lines, as = "h2", id, size = "h2", className, accentLast }: Props) {
  const Tag = as;
  const sizeClass = size === "display" ? "t-display" : size === "h1" ? "t-h1" : "t-h2";
  return (
    <Tag id={id} className={cn(sizeClass, className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn("split-line", accentLast && i === lines.length - 1 && "text-ember-text")}
          data-indent={Math.min(i, 2)}
        >
          {line}
          {i < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
