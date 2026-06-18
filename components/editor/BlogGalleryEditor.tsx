"use client";

import { useRef, useState } from "react";
import { Image as ImageIcon, Link, Trash2, Upload } from "react-feather";
import GalleryMediaPreview from "@/components/GalleryMediaPreview";
import {
  getMediaInfo,
  withCaption,
  type GalleryMedia,
} from "@/lib/media";

type BlogGalleryEditorProps = {
  images: GalleryMedia[];
  onChange: (images: GalleryMedia[]) => void;
};

export default function BlogGalleryEditor({ images, onChange }: BlogGalleryEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState("");
  const [urlCaption, setUrlCaption] = useState("");
  const [uploadCaption, setUploadCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  function updateImage(index: number, patch: Partial<GalleryMedia>) {
    onChange(images.map((image, i) => (i === index ? { ...image, ...patch } : image)));
  }

  function removeImage(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  function addMediaFromUrl(url: string, caption: string) {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError("Media URL is required");
      return;
    }

    try {
      const media = withCaption(getMediaInfo(trimmedUrl), caption);
      onChange([...images, media]);
      setError("");
    } catch {
      setError("Please enter a valid media URL");
    }
  }

  function handleAddUrl() {
    addMediaFromUrl(urlInput, urlCaption);
    setUrlInput("");
    setUrlCaption("");
  }

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    setError("");
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload/image", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Upload failed");
        return;
      }

      const media: GalleryMedia = {
        url: data.url,
        caption: uploadCaption.trim(),
        type: data.type === "video" ? "video" : "image",
      };

      onChange([...images, media]);
      setUploadCaption("");
    } catch {
      setError("Upload failed. Try again or paste a media URL.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="border border-white/10 rounded-xl bg-surface/40 p-5 md:p-6 space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-lg bg-orange/10 text-orange shrink-0">
          <ImageIcon size={16} />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white text-sm">Essay media</h3>
          <p className="text-xs text-soft_gray/50 mt-1 leading-relaxed">
            Add photos or videos at the top of your essay. Upload files, paste a direct image/video
            URL, or use a YouTube/Vimeo link. Click &quot;Add from URL&quot; after pasting.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-wider text-soft_gray/60 flex items-center gap-2">
            <Upload size={12} />
            Upload image or video
          </p>
          <input
            type="text"
            value={uploadCaption}
            onChange={(event) => setUploadCaption(event.target.value)}
            placeholder="Caption (optional)"
            className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif,video/mp4,video/webm,video/quicktime,video/ogg"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="w-full py-2.5 rounded-lg border border-orange/30 text-orange text-sm font-medium hover:bg-orange/10 transition-colors disabled:opacity-50"
          >
            {isUploading ? "Uploading..." : "Choose file"}
          </button>
        </div>

        <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-wider text-soft_gray/60 flex items-center gap-2">
            <Link size={12} />
            Paste media URL
          </p>
          <input
            type="text"
            value={urlInput}
            onChange={(event) => setUrlInput(event.target.value)}
            placeholder="https://youtube.com/watch?v=... or image URL"
            className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAddUrl();
              }
            }}
          />
          <input
            type="text"
            value={urlCaption}
            onChange={(event) => setUrlCaption(event.target.value)}
            placeholder="Caption (optional)"
            className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAddUrl();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddUrl}
            className="w-full py-2.5 rounded-lg border border-white/10 text-soft_gray text-sm hover:text-white hover:border-white/20 transition-colors"
          >
            Add from URL
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {images.length > 0 && (
        <div className="space-y-6">
          {images.map((media, index) => (
            <div
              key={`${media.url}-${index}`}
              className="space-y-4 rounded-lg border border-white/10 bg-black/20 p-4"
            >
              <GalleryMediaPreview media={media} showCaption={false} />
              <div className="space-y-3">
                <input
                  type="text"
                  value={media.caption}
                  onChange={(event) => updateImage(index, { caption: event.target.value })}
                  placeholder="Caption for this media"
                  className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
                />
                <p className="text-[11px] text-dark_gray break-all">{media.url}</p>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="inline-flex items-center gap-2 text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 size={12} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
