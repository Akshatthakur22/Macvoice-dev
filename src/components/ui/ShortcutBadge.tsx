import React from "react";
import { cn } from "@/lib/utils";

interface ShortcutBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  keys?: string[];
  display?: string;
  size?: "sm" | "md" | "lg";
}

export function ShortcutBadge({
  keys,
  display,
  size = "md",
  className,
  ...props
}: ShortcutBadgeProps) {
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[11px]",
    md: "px-2 py-0.5 text-xs",
    lg: "px-2.5 py-1 text-sm font-semibold",
  };

  const keyList = keys || (display ? [display] : ["⌃", "⌥", "Space"]);

  return (
    <span
      className={cn("inline-flex items-center gap-1 font-mono tracking-tight", className)}
      {...props}
    >
      {keyList.map((k, idx) => (
        <kbd
          key={idx}
          className={cn(
            "rounded-md border border-[#D2D2D7] bg-[#FFFFFF] text-[#1D1D1F] shadow-[0_1px_2px_rgba(0,0,0,0.06)] font-medium select-none transition-all",
            sizeClasses[size]
          )}
        >
          {k}
        </kbd>
      ))}
    </span>
  );
}
