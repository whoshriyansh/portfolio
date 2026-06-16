"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function FixedToolbar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-white/10 bg-surface/95 backdrop-blur px-3 py-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
