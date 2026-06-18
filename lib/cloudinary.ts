import { createHash } from "crypto";

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME?.trim() &&
      process.env.CLOUDINARY_API_KEY?.trim() &&
      process.env.CLOUDINARY_API_SECRET?.trim()
  );
}

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
  const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET."
    );
  }

  return { cloudName, apiKey, apiSecret };
}

function signUpload(
  timestamp: number,
  folder: string,
  apiSecret: string,
  resourceType: "image" | "video"
): string {
  const params =
    resourceType === "video"
      ? `folder=${folder}&timestamp=${timestamp}&resource_type=video${apiSecret}`
      : `folder=${folder}&timestamp=${timestamp}${apiSecret}`;

  return createHash("sha1").update(params).digest("hex");
}

export async function uploadMediaToCloudinary(
  file: File,
  resourceType: "image" | "video"
): Promise<string> {
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  const folder = process.env.CLOUDINARY_FOLDER?.trim() || "portfolio-blog";
  const timestamp = Math.round(Date.now() / 1000);
  const signature = signUpload(timestamp, folder, apiSecret, resourceType);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", String(timestamp));
  formData.append("signature", signature);
  formData.append("folder", folder);

  if (resourceType === "video") {
    formData.append("resource_type", "video");
  }

  const endpoint =
    resourceType === "video"
      ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
      : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const response = await fetch(endpoint, { method: "POST", body: formData });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Cloudinary upload failed (${response.status}): ${errorBody}`);
  }

  const data = (await response.json()) as { secure_url?: string };

  if (!data.secure_url) {
    throw new Error("Cloudinary did not return a media URL");
  }

  return data.secure_url;
}

export async function uploadImageToCloudinary(file: File): Promise<string> {
  return uploadMediaToCloudinary(file, "image");
}
