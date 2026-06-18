import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { isCloudinaryConfigured, uploadMediaToCloudinary } from "@/lib/cloudinary";

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

const IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);

const VIDEO_TYPES = new Set([
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/ogg",
]);

export async function POST(request: Request) {
  const isAuthenticated = await getSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isCloudinaryConfigured()) {
    return NextResponse.json(
      {
        error:
          "Cloudinary is not configured. Add Cloudinary env vars or paste a media URL instead.",
      },
      { status: 503 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const isImage = IMAGE_TYPES.has(file.type);
    const isVideo = VIDEO_TYPES.has(file.type);

    if (!isImage && !isVideo) {
      return NextResponse.json(
        {
          error:
            "Unsupported file type. Use JPEG, PNG, WebP, GIF, AVIF, MP4, WebM, or MOV.",
        },
        { status: 400 }
      );
    }

    const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: isVideo ? "Video must be 50 MB or smaller." : "Image must be 10 MB or smaller." },
        { status: 400 }
      );
    }

    const url = await uploadMediaToCloudinary(file, isVideo ? "video" : "image");
    return NextResponse.json({ url, type: isVideo ? "video" : "image" });
  } catch (error) {
    console.error("Media upload failed:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
