import { cn } from "@/lib/utils";

type Props = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

export function Field({ id, label, error, hint, children }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputCls = cn(
  "min-h-12 w-full rounded-xl border-2 border-line bg-bg px-4 text-base text-fg placeholder:text-muted/70",
  "focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50",
  "aria-[invalid=true]:border-red-600",
);
