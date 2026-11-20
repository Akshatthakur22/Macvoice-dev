import React from "react";
import { cn } from "@/lib/utils";

const REST = [0.45, 0.8, 0.55, 1, 0.6, 0.85, 0.4];
const DELAY = [0, 140, 280, 70, 210, 350, 105];

/**
 * 5–7 rounded accent bars. Animates only while `active` (i.e. "speaking"),
 * and never under reduced motion. Animates transform only.
 */
export function Waveform({
  active = false,
  bars = 5,
  cycles,
  className,
  barClassName,
}: {
  active?: boolean;
  /** Stop after N cycles instead of looping (for decorative, non-speaking use). */
  cycles?: number;
  bars?: 5 | 6 | 7;
  className?: string;
  barClassName?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex h-4 items-center gap-[3px]", active && "wave-on", className)}
      style={cycles ? ({ "--iter": cycles } as React.CSSProperties) : undefined}
    >
      {REST.slice(0, bars).map((rest, i) => (
        <span
          key={i}
          className={cn("wave-bar block h-full w-[3px] rounded-full bg-accent", barClassName)}
          style={{ "--rest": rest, "--delay": `${DELAY[i]}ms` } as React.CSSProperties}
        />
      ))}
    </span>
  );
}
