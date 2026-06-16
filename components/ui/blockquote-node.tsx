"use client";

import type { PlateElementProps } from "platejs/react";
import { PlateElement } from "platejs/react";

export function BlockquoteElement(props: PlateElementProps) {
  return (
    <PlateElement
      as="blockquote"
      className="border-l-2 border-orange pl-4 italic text-soft_gray my-4"
      {...props}
    />
  );
}
