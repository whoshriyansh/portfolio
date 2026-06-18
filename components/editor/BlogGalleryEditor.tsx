"use client";

import { useRef, useState } from "react";
import { Image as ImageIcon, Link, Trash2, Upload } from "react-feather";
import type { GalleryImage } from "@/components/BlogGallery";

type BlogGalleryEditorProps = {
  images: GalleryImage[];
  onChange: (images: GalleryImage[]) => void;
};

export default function BlogGalleryEditor({ images, onChange }: BlogGalleryEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState("");
  const [urlCaption, setUrlCaption] = useState("");
  const [uploadCaption, setUploadCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  function updateImage(index: number, patch: Partial<GalleryImage>) {
    onChange(images.map((image, i) => (i === index ? { ...image, ...patch } : image)));
  }

  function removeImage(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  function addImage(url: string, caption: string) {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError("Image URL is required");
      return;
    }

    try {
      new URL(trimmedUrl);
    } catch {
      setError("Please enter a valid image URL");
      return;
    }

    onChange([...images, { url: trimmedUrl, caption: caption.trim() }]);
    setError("");
  }

  function handleAddUrl() {
    addImage(urlInput, urlCaption);
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

      onChange([...images, { url: data.url, caption: uploadCaption.trim() }]);
      setUploadCaption("");
    } catch {
      setError("Upload failed. Try again or paste an image URL.");
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
          <h3 className="font-display font-semibold text-white text-sm">Essay images</h3>
          <p className="text-xs text-soft_gray/50 mt-1 leading-relaxed">
            Add photos that appear at the top of your essay. Upload to Cloudinary or paste a URL.
            Captions show below each image and are used as alt text.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-wider text-soft_gray/60 flex items-center gap-2">
            <Upload size={12} />
            Upload image
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
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
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
            Paste image URL
          </p>
          <input
            type="url"
            value={urlInput}
            onChange={(event) => setUrlInput(event.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
          />
          <input
            type="text"
            value={urlCaption}
            onChange={(event) => setUrlCaption(event.target.value)}
            placeholder="Caption (optional)"
            className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
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
        <div className="space-y-4">
          {images.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="flex flex-col sm:flex-row gap-4 rounded-lg border border-white/10 bg-black/20 p-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.caption || "Preview"}
                className="w-full sm:w-32 h-32 object-cover rounded-lg border border-white/5 shrink-0"
              />
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  value={image.caption}
                  onChange={(event) => updateImage(index, { caption: event.target.value })}
                  placeholder="Caption for this image"
                  className="w-full bg-surface border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-soft_gray/40 outline-none focus:border-orange/50"
                />
                <p className="text-[11px] text-dark_gray break-all">{image.url}</p>
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
