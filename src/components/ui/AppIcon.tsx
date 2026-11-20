import React from "react";
import { cn } from "@/lib/utils";

/** The MacVoice squircle + mic. Decorative by default; pass a label to expose it. */
export function AppIcon({ className, label }: { className?: string; label?: string }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[23%] bg-gradient-to-b from-[#0A84FF] to-[#0071E3] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_2px_6px_rgb(0_113_227/0.28)]",
        "h-8 w-8",
        className
      )}
    >
      <svg className="h-[58%] w-[58%]" viewBox="0 0 24 24" fill="none">
        <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="currentColor" />
        <path
          d="M5.5 10.5C5.5 14.09 8.41 17 12 17C15.59 17 18.5 14.09 18.5 10.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M12 17V21M8.5 21H15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
