import React from "react";
import { cn } from "@/lib/utils";

interface MacOSWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  active?: boolean;
}

export function MacOSWindow({
  title = "Untitled",
  subtitle,
  children,
  headerRight,
  active = true,
  className,
  ...props
}: MacOSWindowProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#0d131f]/95 shadow-[0_24px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-300",
        active ? "ring-1 ring-white/15" : "opacity-90",
        className
      )}
      {...props}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#121927]/90 px-4 py-3 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
          <span>{title}</span>
          {subtitle ? (
            <span className="text-slate-500 font-normal">— {subtitle}</span>
          ) : null}
        </div>

        {/* Header Right Action / Status */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          {headerRight}
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
