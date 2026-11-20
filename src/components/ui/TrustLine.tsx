import React from "react";
import { cn } from "@/lib/utils";

/** Goes directly under every Download button. Every item must stay true. */
const TRUST_ITEMS = ["Free download", "macOS 26+", "Works offline", "No account"];

export function TrustLine({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-ink-2",
        className
      )}
    >
      {TRUST_ITEMS.map((item, i) => (
        <React.Fragment key={item}>
          {i > 0 ? <span aria-hidden="true">·</span> : null}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </p>
  );
}
