import type { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedBlogs } from "@/lib/blog";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://whoshriyansh.netlify.app";

export const metadata: Metadata = {
  title: "Essays by Shriyansh Lohia",
  description:
    "Essays on web development, React, Next.js, and building production-grade software by Shriyansh Kr. Lohia.",
  keywords: [
    "Shriyansh Lohia",
    "Shriyansh Kr. Lohia",
    "Web Development Essays",
    "React Blog",
    "Next.js Articles",
    "Full-Stack Developer India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Essays by Shriyansh Lohia",
    description:
      "Essays on web development, React, Next.js, and building production-grade software.",
    url: "/blog",
    type: "website",
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

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Essays by Shriyansh Kr. Lohia",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "Shriyansh Kr. Lohia",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: new Date(post.publishedAt).toISOString(),
      url: `${SITE_URL}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Shriyansh Kr. Lohia",
      },
    })),
  };

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
            Essays
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white heading-tight">
            Thoughts by Shriyansh
          </h1>
          <p className="text-soft_gray/60 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
            Long-form essays on building software, shipping products, and lessons
            learned along the way.
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
                    {post.readingTime} min read
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
