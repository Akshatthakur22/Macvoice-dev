import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  /** Primary-button signature: label + arrow in a circle that nudges on hover. */
  arrow?: boolean;
}

const base =
  "group inline-flex items-center justify-center rounded-full font-medium select-none cursor-pointer " +
  "transition-[background-color,color,box-shadow,border-color] duration-100 ease-out " +
  "disabled:opacity-40 disabled:pointer-events-none";

const sizes = {
  sm: "h-9 px-4 text-[13px] gap-1.5",
  md: "h-10 px-5 text-[14px] gap-2",
  lg: "h-12 px-6 text-[15px] gap-2.5",
};

const variants = {
  primary: "bg-ink text-white hover:bg-[oklch(0.28_0.01_286)] shadow-e1",
  secondary: "bg-surface text-ink border border-line hover:border-line-strong shadow-e1",
};

function ArrowCircle({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "-mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15",
        className
      )}
    >
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-soft group-hover:translate-x-[2px]" />
    </span>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isLoading,
  arrow,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], arrow && "pr-3", className);

  const content = (
    <>
      {isLoading ? (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : null}
      {children}
      {arrow ? (
        <ArrowCircle className={variant === "secondary" ? "bg-sunken" : undefined} />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
