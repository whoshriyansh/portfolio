"use client";

import { useEditorRef, useEditorSelector } from "platejs/react";
import { ToolbarButton } from "@/components/ui/toolbar";

type MarkToolbarButtonProps = {
  nodeType: "bold" | "italic" | "underline" | "code";
  tooltip?: string;
  children: React.ReactNode;
};

export function MarkToolbarButton({
  nodeType,
  tooltip,
  children,
}: MarkToolbarButtonProps) {
  const editor = useEditorRef();
  const pressed = useEditorSelector(
    (editorState) => {
      if (!editorState.selection) return false;
      const marks = editorState.api.marks();
      return Boolean(marks?.[nodeType]);
    },
    [nodeType]
  );

  return (
    <ToolbarButton
      pressed={pressed}
      title={tooltip}
      onMouseDown={(event) => {
        event.preventDefault();
        editor.tf.toggleMark(nodeType);
      }}
    >
      {children}
    </ToolbarButton>
  );
}
