import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  galleryImages: {
    url: string;
    caption: string;
    type?: string;
    embedUrl?: string;
  }[];
  contentJson: unknown[];
  readingTime: number;
  type: "blog" | "essay";
  publishedAt: Date;
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    coverImageUrl: { type: String, default: "" },
    galleryImages: {
      type: [
        {
          url: { type: String, required: true },
          caption: { type: String, default: "" },
          type: {
            type: String,
            enum: ["image", "video", "embed"],
            default: "image",
          },
          embedUrl: { type: String, default: "" },
        },
      ],
      default: [],
    },
    contentJson: { type: Array, required: true },
    readingTime: { type: Number, required: true },
    type: { type: String, enum: ["blog", "essay"], default: "blog" },
    publishedAt: { type: Date, required: true },
    seoKeywords: { type: [String], default: [] },
  },
  { timestamps: true },
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
