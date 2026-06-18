import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { slugify } from "@/lib/slug";
import { calculateReadingTime } from "@/lib/reading-time";
import {
  normalizeGalleryMedia,
  type GalleryMedia,
} from "@/lib/media";
import type { Types } from "mongoose";

export type { GalleryMedia };

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  galleryImages: GalleryMedia[];
  contentJson: Record<string, unknown>[];
  readingTime: number;
  publishedAt: Date;
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
};

type LeanBlog = {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  galleryImages?: GalleryMedia[];
  contentJson: Record<string, unknown>[];
  readingTime: number;
  publishedAt: Date;
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
};

function toBlogPost(doc: LeanBlog): BlogPost {
  const galleryImages = normalizeGalleryMedia(doc.galleryImages);

  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    coverImageUrl:
      galleryImages.find((item) => item.type === "image")?.url ||
      doc.coverImageUrl ||
      galleryImages[0]?.url ||
      "",
    galleryImages,
    contentJson: doc.contentJson,
    readingTime: doc.readingTime,
    publishedAt: doc.publishedAt,
    seoKeywords: doc.seoKeywords,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export async function getAllPublishedBlogs(): Promise<BlogPost[]> {
  await connectDB();
  const blogs = await Blog.find().sort({ publishedAt: -1 }).lean();
  return blogs.map((blog) => toBlogPost(blog as LeanBlog));
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  await connectDB();
  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) return null;
  return toBlogPost(blog as LeanBlog);
}

export async function getAllBlogsAdmin(): Promise<BlogPost[]> {
  await connectDB();
  const blogs = await Blog.find().sort({ publishedAt: -1 }).lean();
  return blogs.map((blog) => toBlogPost(blog as LeanBlog));
}

async function generateUniqueSlug(title: string): Promise<string> {
  await connectDB();
  const baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;

  while (await Blog.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return slug;
}

export type CreateBlogInput = {
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  galleryImages?: GalleryMedia[];
  contentJson: Record<string, unknown>[];
  seoKeywords: string[];
};

export async function createBlog(data: CreateBlogInput): Promise<BlogPost> {
  await connectDB();
  const slug = await generateUniqueSlug(data.title);
  const readingTime = calculateReadingTime(data.contentJson);
  const galleryImages = normalizeGalleryMedia(data.galleryImages);
  const coverImageUrl =
    galleryImages.find((item) => item.type === "image")?.url ||
    String(data.coverImageUrl || "").trim() ||
    galleryImages[0]?.url ||
    "";

  const blog = await Blog.create({
    title: data.title,
    slug,
    excerpt: data.excerpt,
    coverImageUrl,
    galleryImages,
    contentJson: data.contentJson,
    readingTime,
    publishedAt: new Date(),
    seoKeywords: data.seoKeywords,
  });

  return toBlogPost(blog.toObject() as LeanBlog);
}

export async function deleteBlogById(id: string): Promise<boolean> {
  await connectDB();
  const result = await Blog.findByIdAndDelete(id);
  return Boolean(result);
}
