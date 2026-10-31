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
        "rounded-2xl border border-[#E8E8ED] bg-[#FFFFFF] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300",
        active ? "ring-1 ring-[#D2D2D7]/60" : "opacity-95",
        className
      )}
      {...props}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8ED] bg-[#F5F5F7] px-4 py-3 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30" />
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F]">
          <span>{title}</span>
          {subtitle ? (
            <span className="text-[#6E6E73] font-normal">— {subtitle}</span>
          ) : null}
        </div>

        {/* Header Right Action / Status */}
        <div className="flex items-center gap-2 text-xs text-[#6E6E73]">
          {headerRight}
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-6 bg-[#FFFFFF]">{children}</div>
    </div>
  );
}
