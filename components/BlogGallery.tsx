import type { GalleryMedia } from "@/lib/media";
import GalleryMediaPreview from "@/components/GalleryMediaPreview";

type BlogGalleryProps = {
  images: GalleryMedia[];
};

export default function BlogGallery({ images }: BlogGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <div className="mb-12 space-y-8">
      {images.map((media, index) => (
        <GalleryMediaPreview key={`${media.url}-${index}`} media={media} />
      ))}
    </div>
  );
}

export type { GalleryMedia };
