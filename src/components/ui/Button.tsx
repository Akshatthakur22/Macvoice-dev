import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] disabled:opacity-40 disabled:pointer-events-none select-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-full",
    md: "text-sm px-5 py-2 gap-2 rounded-full",
    lg: "text-base px-7 py-3.5 gap-2.5 rounded-full font-medium shadow-sm",
  };

  const variantClasses = {
    primary:
      "bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#0062C4] text-white shadow-[0_1px_2px_rgba(0,113,227,0.3)] hover:shadow-[0_4px_14px_rgba(0,113,227,0.35)]",
    secondary:
      "bg-[#F5F5F7] hover:bg-[#E8E8ED] active:bg-[#D2D2D7] text-[#1D1D1F] border border-[#E8E8ED]",
    outline:
      "bg-transparent hover:bg-[#F5F5F7] text-[#1D1D1F] border border-[#D2D2D7] hover:border-[#B0B0B5]",
    ghost:
      "bg-transparent hover:bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F]",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
