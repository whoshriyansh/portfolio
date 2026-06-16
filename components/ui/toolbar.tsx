"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ToolbarButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
};

export function ToolbarButton({
  className,
  pressed,
  children,
  ...props
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium text-soft_gray transition-colors hover:bg-white/10 hover:text-white",
        pressed && "bg-orange/20 text-orange",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
