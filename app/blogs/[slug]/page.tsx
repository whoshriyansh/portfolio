import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogRenderer from "@/components/BlogRenderer";
import BlogGallery from "@/components/BlogGallery";
import NewsletterInline from "@/components/NewsletterInline";
import { getBlogBySlug } from "@/lib/blog";
import { AUTHOR, SITE_URL, buildBlogPostingJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  const keywords = [
    ...post.seoKeywords,
    "Shriyansh Lohia",
    "Shriyansh Kr. Lohia",
    "Shriyansh Lohia blog",
  ];

  return {
    title: post.title,
    description: post.excerpt,
    keywords,
    authors: [{ name: AUTHOR.name, url: SITE_URL }],
    creator: AUTHOR.name,
    publisher: AUTHOR.name,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — ${AUTHOR.shortName}`,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.publishedAt).toISOString(),
      modifiedTime: new Date(post.updatedAt).toISOString(),
      authors: [AUTHOR.name],
      images: post.coverImageUrl
        ? [{ url: post.coverImageUrl, alt: post.title }]
        : [{ url: "/pentagon.png", alt: AUTHOR.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@whoshriyansh",
      images: post.coverImageUrl ? [post.coverImageUrl] : ["/pentagon.png"],
    },
  };
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingJsonLd = buildBlogPostingJsonLd(post);
  const galleryImages =
    post.galleryImages.length > 0
      ? post.galleryImages
      : post.coverImageUrl
        ? [{ url: post.coverImageUrl, caption: "", type: "image" as const }]
        : [];

  return (
    <div className="min-h-screen bg-black no-custom-cursor">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostingJsonLd),
          }}
        />

        <Link
          href="/blogs"
          className="text-sm text-soft_gray/60 hover:text-orange transition-colors mb-12 inline-block"
        >
          ← Shriyansh Lohia Blog
        </Link>

        <article itemScope itemType="https://schema.org/BlogPosting">
          <header className="mb-10">
            <time
              dateTime={new Date(post.publishedAt).toISOString()}
              className="text-xs text-dark_gray uppercase tracking-wider"
              itemProp="datePublished"
            >
              {formatDate(post.publishedAt)} · {post.readingTime} min read
            </time>
            <h1
              className="font-display font-bold text-3xl md:text-5xl text-white heading-tight mt-4 leading-tight"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p
              className="text-soft_gray/70 text-base md:text-lg mt-5 leading-relaxed"
              itemProp="description"
            >
              {post.excerpt}
            </p>
            <p className="text-sm text-soft_gray/50 mt-4">
              By{" "}
              <Link
                href="/"
                className="text-orange hover:text-orange-light transition-colors"
                rel="author"
                itemProp="author"
              >
                {AUTHOR.name}
              </Link>
            </p>
          </header>

          <BlogGallery images={galleryImages} />

          <div itemProp="articleBody">
            <BlogRenderer content={post.contentJson} />
          </div>
        </article>

        <NewsletterInline interest="both" />
      </div>
    </div>
  );
}
