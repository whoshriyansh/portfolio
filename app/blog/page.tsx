import type { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedBlogs } from "@/lib/blog";
import {
  AUTHOR,
  BLOG_DESCRIPTION,
  SITE_KEYWORDS,
  buildBlogJsonLd,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shriyansh Lohia Blog — Essays on Full-Stack Development",
  description: BLOG_DESCRIPTION,
  keywords: [
    ...SITE_KEYWORDS,
    "Shriyansh Lohia essays",
    "Shriyansh Kr. Lohia writing",
    "developer blog India",
    "React essays",
    "Next.js articles",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Shriyansh Lohia Blog — Essays by Shriyansh Kr. Lohia",
    description: BLOG_DESCRIPTION,
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shriyansh Lohia Blog",
    description: BLOG_DESCRIPTION,
    creator: "@whoshriyansh",
  },
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogIndexPage() {
  let posts: Awaited<ReturnType<typeof getAllPublishedBlogs>> = [];

  try {
    posts = await getAllPublishedBlogs();
  } catch {
    posts = [];
  }

  const blogJsonLd = buildBlogJsonLd(posts);

  return (
    <div className="min-h-screen bg-black no-custom-cursor">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />

        <header className="mb-16">
          <Link
            href="/"
            className="text-sm text-soft_gray/60 hover:text-orange transition-colors mb-8 inline-block"
          >
            ← Back to portfolio
          </Link>
          <p className="text-xs text-soft_gray/60 uppercase tracking-[0.3em] mb-4">
            Shriyansh Lohia Blog
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white heading-tight">
            Essays by {AUTHOR.givenName}
          </h1>
          <p className="text-soft_gray/60 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
            Long-form essays by {AUTHOR.name} on full-stack development, building
            Plavist, React, Next.js, and lessons from shipping production
            software.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-soft_gray/50 text-sm">No essays published yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-white/5 py-8 hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <time
                    dateTime={new Date(post.publishedAt).toISOString()}
                    className="text-xs text-dark_gray uppercase tracking-wider"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="font-display font-semibold text-xl md:text-2xl text-white mt-2 group-hover:text-orange transition-colors heading-tight">
                    {post.title}
                  </h2>
                  <p className="text-soft_gray/60 text-sm mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-dark_gray mt-3">
                    By {AUTHOR.shortName} · {post.readingTime} min read
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
