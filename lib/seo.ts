import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://whoshriyansh.vercel.app";

export const AUTHOR = {
  name: "Shriyansh Kr. Lohia",
  shortName: "Shriyansh Lohia",
  givenName: "Shriyansh",
  familyName: "Lohia",
  username: "whoshriyansh",
  email: "whoshriyansh@gmail.com",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer building Plavist and production-grade web applications with React, Next.js, Node.js, and the MERN stack.",
  alternateNames: [
    "Shriyansh Lohia",
    "Shriyansh Kr Lohia",
    "whoshriyansh",
  ],
  sameAs: [
    "https://www.linkedin.com/in/whoshriyansh/",
    "https://x.com/whoshriyansh",
    "https://github.com/whoshriyansh",
    "https://medium.com/@whoshriyansh",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Plavist",
    "Web Development",
    "Software Engineering",
  ],
};

export const SITE_KEYWORDS = [
  "Shriyansh Lohia",
  "Shriyansh Kr. Lohia",
  "Shriyansh Lohia blog",
  "Shriyansh Lohia essays",
  "Shriyansh Kr. Lohia blog",
  "whoshriyansh",
  "whoshriyansh blog",
  "Full-Stack Developer",
  "Full-Stack Developer India",
  "React Developer",
  "Next.js Developer",
  "MERN Stack Developer",
  "Plavist",
  "Web Developer Portfolio",
  "Software Engineer India",
];

export const DEFAULT_DESCRIPTION =
  "Shriyansh Kr. Lohia is a full-stack developer building Plavist — essays on web development, React, Next.js, and shipping production software.";

export const BLOG_DESCRIPTION =
  "Essays and long-form writing by Shriyansh Kr. Lohia on full-stack development, React, Next.js, startups, and building Plavist.";

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Shriyansh Kr. Lohia — Full-Stack Developer & Essayist",
      template: "%s | Shriyansh Lohia",
    },
    description: DEFAULT_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    authors: [{ name: AUTHOR.name, url: SITE_URL }],
    creator: AUTHOR.name,
    publisher: AUTHOR.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    icons: {
      icon: "/pentagon.png",
      apple: "/pentagon.png",
    },
    verification: {
      google: "YORTviEt8TUcce-sv_CqE9vhL_uImStP7D_i4SQPZUg",
    },
    openGraph: {
      title: "Shriyansh Kr. Lohia | Full-Stack Developer",
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      siteName: "Shriyansh Lohia",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/pentagon.png",
          width: 512,
          height: 512,
          alt: "Shriyansh Kr. Lohia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shriyansh Kr. Lohia | Full-Stack Developer",
      description: DEFAULT_DESCRIPTION,
      creator: "@whoshriyansh",
      images: ["/pentagon.png"],
    },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR.name,
    alternateName: AUTHOR.alternateNames,
    givenName: AUTHOR.givenName,
    familyName: AUTHOR.familyName,
    url: SITE_URL,
    email: `mailto:${AUTHOR.email}`,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.description,
    sameAs: AUTHOR.sameAs,
    knowsAbout: AUTHOR.knowsAbout,
    worksFor: {
      "@type": "Organization",
      name: "Plavist",
      description: "Platform built by Shriyansh Kr. Lohia",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Shriyansh Kr. Lohia",
    alternateName: "Shriyansh Lohia Blog",
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-US",
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function buildBlogJsonLd(posts: Array<{
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: Date;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Shriyansh Lohia Blog",
    alternateName: "Essays by Shriyansh Kr. Lohia",
    url: `${SITE_URL}/blog`,
    description: BLOG_DESCRIPTION,
    inLanguage: "en-US",
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: new Date(post.publishedAt).toISOString(),
      url: `${SITE_URL}/blog/${post.slug}`,
      author: { "@id": `${SITE_URL}/#person` },
    })),
  };
}

export function buildBlogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  coverImageUrl: string;
  publishedAt: Date;
  updatedAt: Date;
  seoKeywords: string[];
  readingTime: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImageUrl || `${SITE_URL}/pentagon.png`,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      url: SITE_URL,
    },
    keywords: post.seoKeywords.join(", "),
    wordCount: post.readingTime * 200,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
