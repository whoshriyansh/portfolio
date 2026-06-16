import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogRenderer from "@/components/BlogRenderer";
import { getBlogBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://whoshriyansh.netlify.app";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.publishedAt).toISOString(),
      images: post.coverImageUrl ? [{ url: post.coverImageUrl }] : [],
      authors: ["Shriyansh Kr. Lohia"],
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

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImageUrl || undefined,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: "Shriyansh Kr. Lohia",
      url: SITE_URL,
    },
    keywords: post.seoKeywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Person",
      name: "Shriyansh Kr. Lohia",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-black no-custom-cursor">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
        />

        <Link
          href="/blog"
          className="text-sm text-soft_gray/60 hover:text-orange transition-colors mb-12 inline-block"
        >
          ← All essays
        </Link>

        <article>
          <header className="mb-10">
            <time
              dateTime={new Date(post.publishedAt).toISOString()}
              className="text-xs text-dark_gray uppercase tracking-wider"
            >
              {formatDate(post.publishedAt)} · {post.readingTime} min read
            </time>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white heading-tight mt-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-soft_gray/70 text-base md:text-lg mt-5 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {post.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="w-full rounded-lg mb-12 object-cover max-h-[480px]"
            />
          )}

          <BlogRenderer content={post.contentJson} />
        </article>
      </div>
    </div>
  );
}
