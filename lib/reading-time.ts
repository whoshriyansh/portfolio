interface SlateTextNode {
  text?: string;
  children?: SlateNode[];
}

type SlateNode = SlateTextNode & {
  type?: string;
  children?: SlateNode[];
};

function extractTextFromNode(node: SlateNode): string {
  if (typeof node.text === "string") {
    return node.text;
  }

  if (Array.isArray(node.children)) {
    return node.children.map(extractTextFromNode).join(" ");
  }

  return "";
}

export function calculateReadingTime(contentJson: Record<string, unknown>[]): number {
  const text = contentJson.map((node) => extractTextFromNode(node as SlateNode)).join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / 200);
  return Math.max(1, minutes);
}
