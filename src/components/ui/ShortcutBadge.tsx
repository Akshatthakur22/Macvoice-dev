import React from "react";
import { cn } from "@/lib/utils";
import { Keycap } from "@/components/ui/Keycap";

interface ShortcutBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  keys?: string[];
  display?: string;
  size?: "sm" | "md" | "lg";
}

/** Legacy API kept for docs/blog pages; renders the shared keycap. */
export function ShortcutBadge({ keys, display, size = "md", className, ...props }: ShortcutBadgeProps) {
  const keyList = keys || (display ? [display] : ["⌃", "⌥", "Space"]);
  return (
    <span className={cn("inline-flex items-center gap-1 align-middle", className)} {...props}>
      {keyList.map((k, idx) => (
        <Keycap key={idx} size={size === "lg" ? "md" : "sm"}>
          {k}
        </Keycap>
      ))}
    </span>
  );
}
