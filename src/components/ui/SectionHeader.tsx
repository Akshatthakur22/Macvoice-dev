import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  /** The claim, in ink. */
  title: string;
  /** The qualifier, in grey (two-tone heading). */
  muted?: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  muted,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-4xl sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow ? <p className="text-eyebrow mb-4 text-ink-2">{eyebrow}</p> : null}
      <Heading className="text-h2 text-balance text-ink">
        {title}
        {muted ? <span className="text-ink-3 sm:block"> {muted}</span> : null}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-body-lg mt-5 max-w-[640px] text-pretty text-ink-2",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
