"use client";

import { useState } from "react";
import type { GalleryMedia } from "@/lib/media";

type GalleryMediaPreviewProps = {
  media: GalleryMedia;
  className?: string;
  showCaption?: boolean;
};

export default function GalleryMediaPreview({
  media,
  className = "",
  showCaption = true,
}: GalleryMediaPreviewProps) {
  const [hasError, setHasError] = useState(false);

  if (media.type === "embed" && media.embedUrl) {
    return (
      <figure className={className}>
        <div className="relative w-full overflow-hidden rounded-lg border border-white/5 aspect-video bg-black">
          <iframe
            src={media.embedUrl}
            title={media.caption || "Embedded video"}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {showCaption && media.caption && (
          <figcaption className="mt-2.5 text-center text-[11px] leading-relaxed tracking-wide text-dark_gray/90 uppercase">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.type === "video") {
    return (
      <figure className={className}>
        <video
          src={media.url}
          controls
          playsInline
          preload="metadata"
          className="w-full rounded-lg border border-white/5 bg-black"
        >
          Your browser does not support video playback.
        </video>
        {showCaption && media.caption && (
          <figcaption className="mt-2.5 text-center text-[11px] leading-relaxed tracking-wide text-dark_gray/90 uppercase">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={className}>
      {hasError ? (
        <div className="flex min-h-48 w-full flex-col items-center justify-center rounded-lg border border-dashed border-white/10 bg-surface/40 px-6 py-8 text-center">
          <p className="text-sm text-soft_gray/70">Preview unavailable for this link</p>
          <p className="mt-2 text-[11px] text-dark_gray break-all">{media.url}</p>
          <p className="mt-3 text-xs text-soft_gray/50">
            Use a direct image URL, upload the file, or use a YouTube/Vimeo link for video.
          </p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.url}
          alt={media.caption || "Essay image"}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full rounded-lg border border-white/5 object-cover"
        />
      )}
      {showCaption && media.caption && (
        <figcaption className="mt-2.5 text-center text-[11px] leading-relaxed tracking-wide text-dark_gray/90 uppercase">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
