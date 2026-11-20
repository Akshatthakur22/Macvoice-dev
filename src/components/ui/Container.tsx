import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow";
}

/** Content width is 1200px max; text columns are 640px max (set per block). */
export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-[1248px]",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
