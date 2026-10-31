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
    blue: "bg-[#EAF3FF] text-[#0071E3] border-[#0071E3]/25",
    neutral: "bg-[#F5F5F7] text-[#1D1D1F] border-[#E8E8ED]",
    emerald: "bg-[#EDFDF5] text-[#059669] border-[#A7F3D0]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1 text-xs font-medium rounded-full border transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
