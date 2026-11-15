import { cn } from "@/lib/utils";

type Props = {
  title: string;
  lead?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "default" | "light";
  id?: string;
};

export function SectionHeading({ title, lead, as: Tag = "h2", className, tone = "default", id }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Tag id={id} className={cn(Tag === "h1" ? "t-h1" : "t-h2", tone === "light" && "text-on-brand")}>
        {title}
      </Tag>
      {lead && <p className={cn("t-lead mt-4 max-w-[60ch]", tone === "light" && "!text-on-brand/80")}>{lead}</p>}
    </div>
  );
}
