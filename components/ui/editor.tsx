"use client";

import * as React from "react";
import type { PlateContentProps } from "platejs/react";
import { PlateContainer, PlateContent } from "platejs/react";
import { cn } from "@/lib/utils";

export function EditorContainer({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PlateContainer>) {
  return (
    <PlateContainer
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
    </PlateContainer>
  );
}

export function Editor({
  className,
  placeholder,
  ...props
}: PlateContentProps & { placeholder?: string }) {
  return (
    <PlateContent
      className={cn(
        "outline-none min-h-[420px] w-full text-base md:text-lg text-soft_gray leading-relaxed",
        "placeholder:text-soft_gray/30",
        "[&_strong]:font-semibold [&_strong]:text-white",
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
}
