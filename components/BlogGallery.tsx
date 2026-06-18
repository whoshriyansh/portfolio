export type GalleryImage = {
  url: string;
  caption: string;
};

type BlogGalleryProps = {
  images: GalleryImage[];
};

export default function BlogGallery({ images }: BlogGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <div className="mb-12 space-y-8">
      {images.map((image, index) => (
        <figure key={`${image.url}-${index}`} className="group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.url}
            alt={image.caption || "Essay image"}
            className="w-full rounded-lg object-cover border border-white/5"
          />
          {image.caption && (
            <figcaption className="mt-2.5 text-center text-[11px] leading-relaxed tracking-wide text-dark_gray/90 uppercase">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
