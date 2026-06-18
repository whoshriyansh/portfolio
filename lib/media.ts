export type MediaType = "image" | "video" | "embed";

export type GalleryMedia = {
  url: string;
  caption: string;
  type: MediaType;
  embedUrl?: string;
};

export function normalizeMediaUrl(url: string): string {
  const trimmed = url.trim();

  const driveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }

  return trimmed;
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/i,
    /youtube\.com\/embed\/([^?&]+)/i,
    /youtube\.com\/shorts\/([^?&]+)/i,
    /youtube\.com\/watch\?v=([^&]+)/i,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

function getVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return match?.[1] ?? null;
}

export function getMediaInfo(url: string): GalleryMedia {
  const normalized = normalizeMediaUrl(url);
  const caption = "";

  const youtubeId = getYouTubeId(normalized);
  if (youtubeId) {
    return {
      url: normalized,
      caption,
      type: "embed",
      embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
    };
  }

  const vimeoId = getVimeoId(normalized);
  if (vimeoId) {
    return {
      url: normalized,
      caption,
      type: "embed",
      embedUrl: `https://player.vimeo.com/video/${vimeoId}`,
    };
  }

  if (
    /cloudinary\.com.+\/video\/upload\//i.test(normalized) ||
    /\.(mp4|webm|mov|m4v|ogg)(\?|#|$)/i.test(normalized)
  ) {
    return { url: normalized, caption, type: "video" };
  }

  return { url: normalized, caption, type: "image" };
}

export function withCaption(media: GalleryMedia, caption: string): GalleryMedia {
  return { ...media, caption: caption.trim() };
}

export function normalizeGalleryMedia(
  items?: Array<Partial<GalleryMedia>>
): GalleryMedia[] {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      const url = String(item.url || "").trim();
      if (!url) return null;

      const detected = getMediaInfo(url);
      const media: GalleryMedia = {
        url: detected.url,
        caption: String(item.caption || "").trim(),
        type: detected.type,
        embedUrl: detected.embedUrl,
      };
      return media;
    })
    .filter((item): item is GalleryMedia => item !== null);
}
