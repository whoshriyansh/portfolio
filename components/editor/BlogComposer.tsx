"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Value } from "platejs";
import {
  BlockquotePlugin,
  BoldPlugin,
  CodePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  ItalicPlugin,
  UnderlinePlugin,
} from "@platejs/basic-nodes/react";
import { ParagraphPlugin } from "platejs/react";
import { Plate, usePlateEditor } from "platejs/react";
import { BlockquoteElement } from "@/components/ui/blockquote-node";
import { Editor, EditorContainer } from "@/components/ui/editor";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import { H1Element, H2Element, H3Element } from "@/components/ui/heading-node";
import { MarkToolbarButton } from "@/components/ui/mark-toolbar-button";
import { ToolbarButton } from "@/components/ui/toolbar";
import BlogGalleryEditor from "@/components/editor/BlogGalleryEditor";
import type { GalleryMedia } from "@/lib/media";

const initialValue: Value = [
  {
    type: "p",
    children: [{ text: "" }],
  },
];

export default function BlogComposer() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [type, setType] = useState<"blog" | "essay">("blog");
  const [galleryImages, setGalleryImages] = useState<GalleryMedia[]>([]);
  const [seoKeywords, setSeoKeywords] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState("");

  const editor = usePlateEditor({
    plugins: [
      ParagraphPlugin,
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      CodePlugin,
      H1Plugin.withComponent(H1Element),
      H2Plugin.withComponent(H2Element),
      H3Plugin.withComponent(H3Element),
      BlockquotePlugin.withComponent(BlockquoteElement),
    ],
    value: initialValue,
  });

  async function handlePublish() {
    setError("");
    setIsPublishing(true);

    try {
      const contentJson = editor.children;

      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title,
          excerpt,
          type,
          galleryImages,
          seoKeywords,
          contentJson,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to publish blog");
        return;
      }

      router.push("/server");
      router.refresh();
    } catch {
      setError("Failed to publish blog. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-surface/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => router.push("/server")}
            className="text-sm text-soft_gray hover:text-orange transition-colors"
          >
            ← Back to Dashboard
          </button>
          <button
            type="button"
            onClick={handlePublish}
            disabled={isPublishing}
            className="px-5 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange-light transition-colors disabled:opacity-50"
          >
            {isPublishing ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <BlogGalleryEditor
            images={galleryImages}
            onChange={setGalleryImages}
          />
        </div>

        <div className="grid gap-4 mb-8">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-soft_gray/60">
              SEO keywords (comma separated)
            </span>
            <input
              type="text"
              value={seoKeywords}
              onChange={(event) => setSeoKeywords(event.target.value)}
              placeholder="React, Next.js, Shriyansh Lohia"
              className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
            />
          </label>
        </div>

        <div className="grid gap-4 mb-8">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-soft_gray/60">
              Type of content
            </span>
            <select
              required
              disabled={isPublishing}
              value={type}
              onChange={(event) =>
                setType(event.target.value as "blog" | "essay")
              }
              className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
            >
              <option value="" disabled>
                Select the type
              </option>
              <option value="blog">Blog</option>
              <option value="essay">Essay</option>
            </select>
          </label>
        </div>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="w-full bg-transparent text-4xl md:text-5xl font-display font-bold text-white heading-tight placeholder:text-white/20 outline-none mb-4"
        />

        <textarea
          value={excerpt}
          onChange={(event) => setExcerpt(event.target.value)}
          placeholder="Write a short excerpt..."
          rows={2}
          className="w-full bg-transparent text-lg text-soft_gray/70 placeholder:text-soft_gray/30 outline-none resize-none mb-8"
        />

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        <div className="border border-white/10 rounded-xl overflow-hidden bg-surface/40">
          <Plate editor={editor}>
            <FixedToolbar>
              <ToolbarButton onClick={() => editor.tf.h1.toggle()}>
                H1
              </ToolbarButton>
              <ToolbarButton onClick={() => editor.tf.h2.toggle()}>
                H2
              </ToolbarButton>
              <ToolbarButton onClick={() => editor.tf.h3.toggle()}>
                H3
              </ToolbarButton>
              <ToolbarButton onClick={() => editor.tf.blockquote.toggle()}>
                Quote
              </ToolbarButton>
              <MarkToolbarButton nodeType="bold" tooltip="Bold">
                B
              </MarkToolbarButton>
              <MarkToolbarButton nodeType="italic" tooltip="Italic">
                I
              </MarkToolbarButton>
              <MarkToolbarButton nodeType="underline" tooltip="Underline">
                U
              </MarkToolbarButton>
              <MarkToolbarButton nodeType="code" tooltip="Code">
                {"</>"}
              </MarkToolbarButton>
            </FixedToolbar>
            <EditorContainer className="px-6 py-8">
              <Editor placeholder="Tell your story..." />
            </EditorContainer>
          </Plate>
        </div>
      </div>
    </div>
  );
}
