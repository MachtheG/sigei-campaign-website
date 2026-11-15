import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

/** shadcn-style Button: Radix Slot + cva. 44px minimum tap target. */
export const buttonVariants = cva(
  "press inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent: "bg-accent text-on-accent hover:brightness-95",
        brand: "bg-deep text-on-brand hover:brightness-125",
        outline: "border-2 border-current bg-transparent hover:bg-fg/5",
        ghost: "bg-transparent hover:bg-fg/5",
      },
      size: { default: "", lg: "min-h-14 px-8 text-lg", sm: "min-h-11 px-4 text-sm" },
    },
    defaultVariants: { variant: "accent", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";
