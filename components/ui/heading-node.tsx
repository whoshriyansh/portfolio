"use client";

import type { PlateElementProps } from "platejs/react";
import { PlateElement } from "platejs/react";

export function H1Element(props: PlateElementProps) {
  return (
    <PlateElement
      as="h1"
      className="font-display text-4xl font-bold text-white heading-tight mt-8 mb-4"
      {...props}
    />
  );
}

export function H2Element(props: PlateElementProps) {
  return (
    <PlateElement
      as="h2"
      className="font-display text-3xl font-bold text-white heading-tight mt-6 mb-3"
      {...props}
    />
  );
}

export function H3Element(props: PlateElementProps) {
  return (
    <PlateElement
      as="h3"
      className="font-display text-2xl font-bold text-white heading-tight mt-5 mb-2"
      {...props}
    />
  );
}
