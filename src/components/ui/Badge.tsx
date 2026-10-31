import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "neutral" | "emerald";
  children: React.ReactNode;
}

export function Badge({
  variant = "blue",
  children,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    neutral: "bg-white/5 text-slate-300 border-white/10",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
