import React from "react";

type SlateTextNode = {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  children?: SlateNode[];
};

type SlateElementNode = {
  type?: string;
  url?: string;
  children?: SlateNode[];
};

type SlateNode = SlateTextNode & SlateElementNode;

function renderTextNode(node: SlateTextNode, key: number): React.ReactNode {
  let content: React.ReactNode = node.text ?? "";

  if (node.bold) {
    content = <strong key={`bold-${key}`}>{content}</strong>;
  }
  if (node.italic) {
    content = <em key={`italic-${key}`}>{content}</em>;
  }
  if (node.underline) {
    content = <u key={`underline-${key}`}>{content}</u>;
  }
  if (node.code) {
    content = (
      <code
        key={`code-${key}`}
        className="rounded bg-surface-lighter px-1.5 py-0.5 text-sm text-orange font-mono"
      >
        {content}
      </code>
    );
  }

  return <React.Fragment key={key}>{content}</React.Fragment>;
}

function renderChildren(children: SlateNode[] = []): React.ReactNode[] {
  return children.map((child, index) => {
    if (typeof child.text === "string") {
      return renderTextNode(child, index);
    }
    return renderNode(child, index);
  });
}

function renderNode(node: SlateNode, key: number): React.ReactNode {
  if (typeof node.text === "string") {
    return renderTextNode(node, key);
  }

  const children = renderChildren(node.children);
  const type = node.type || "p";

  switch (type) {
    case "h1":
      return (
        <h1
          key={key}
          className="font-display text-4xl md:text-5xl font-bold text-white heading-tight mt-12 mb-6"
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          key={key}
          className="font-display text-3xl md:text-4xl font-bold text-white heading-tight mt-10 mb-5"
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="font-display text-2xl md:text-3xl font-bold text-white heading-tight mt-8 mb-4"
        >
          {children}
        </h3>
      );
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="border-l-2 border-orange pl-4 italic text-soft_gray my-6"
        >
          {children}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={key} className="list-disc list-inside text-soft_gray space-y-2 my-6">
          {children}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="list-decimal list-inside text-soft_gray space-y-2 my-6">
          {children}
        </ol>
      );
    case "li":
      return (
        <li key={key} className="text-soft_gray leading-relaxed">
          {children}
        </li>
      );
    case "a":
      return (
        <a
          key={key}
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:text-orange-light underline underline-offset-2"
        >
          {children}
        </a>
      );
    case "img":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={key}
          src={node.url}
          alt=""
          className="rounded-lg my-8 w-full max-w-3xl mx-auto"
        />
      );
    case "hr":
      return <hr key={key} className="border-white/10 my-10" />;
    case "p":
    default:
      return (
        <p key={key} className="text-soft_gray leading-relaxed text-base md:text-lg my-5">
          {children}
        </p>
      );
  }
}

type BlogRendererProps = {
  content: Record<string, unknown>[];
};

export default function BlogRenderer({ content }: BlogRendererProps) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="blog-content">
      {content.map((node, index) => renderNode(node as SlateNode, index))}
    </div>
  );
}
