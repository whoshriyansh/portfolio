import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://whoshriyansh.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shriyansh Kr. Lohia — Full-Stack Developer",
    template: "%s | Shriyansh Lohia",
  },
  description:
    "I'm a full-stack developer specializing in the MERN stack, with deep experience in building and deploying scalable applications using the latest Next.js 15. I implement CI/CD pipelines and integrate DevOps tools to ensure production-grade delivery.",
  keywords: [
    "React Developer",
    "FullStack Developer",
    "Web Developer in India",
    "Figma to React",
    "API Integration",
    "Dashboard Development",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/pentagon.png",
  },
  verification: {
    google: "YORTviEt8TUcce-sv_CqE9vhL_uImStP7D_i4SQPZUg",
  },
  openGraph: {
    title: "Shriyansh Kr. Lohia | Full-Stack Developer",
    description:
      "Expert Full-Stack Developer specializing in creating production-grade applications.",
    url: SITE_URL,
    siteName: "Shriyansh Lohia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
