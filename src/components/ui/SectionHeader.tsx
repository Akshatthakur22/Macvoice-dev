import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#0071E3] mb-3 inline-block">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      ) : null}
    </div>
  );
}
