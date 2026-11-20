import React from "react";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-6 min-w-6 px-1.5 text-[11px] rounded-[6px]",
  md: "h-8 min-w-8 px-2 text-[13px] rounded-[8px]",
  lg: "h-12 min-w-12 px-3 text-[17px] rounded-[10px]",
  /** Scales with the surrounding text, for keycaps set into a headline. */
  inline: "h-[0.92em] min-w-[0.92em] px-[0.2em] text-[0.36em] rounded-[0.16em] -translate-y-[0.06em]",
};

export function Keycap({
  children,
  size = "md",
  className,
  label,
}: {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  className?: string;
  /** Spoken name, e.g. "Control". Use when the visible glyph is a symbol. */
  label?: string;
}) {
  return (
    <kbd className={cn("keycap", sizes[size], className)} aria-label={label} title={label}>
      {children}
    </kbd>
  );
}

/** MacVoice's default shortcut: ⌃ ⌥ Space. */
export function DefaultShortcut({
  size = "md",
  className,
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  const gap = size === "inline" ? "gap-[0.08em]" : size === "lg" ? "gap-2" : "gap-1";
  return (
    <span
      className={cn("inline-flex items-center align-middle", gap, className)}
      role="img"
      aria-label="Control Option Space"
    >
      <Keycap size={size}>⌃</Keycap>
      <Keycap size={size}>⌥</Keycap>
      <Keycap size={size} className={size === "inline" ? "px-[0.5em]" : "px-4"}>
        Space
      </Keycap>
    </span>
  );
}
