import { NextResponse } from "next/server";
import { createBlog, getAllBlogsAdmin } from "@/lib/blog";
import { getSession } from "@/lib/auth";

export async function GET() {
  const isAuthenticated = await getSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const blogs = await getAllBlogsAdmin();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    const message =
      error instanceof Error ? error.message : "Failed to fetch blogs";
    const isConfigError = message.includes("MONGODB_URI");
    return NextResponse.json(
      {
        error: isConfigError
          ? "Database is not configured. Set MONGODB_URI in Vercel environment variables."
          : "Failed to connect to database. Check MONGODB_URI and MongoDB Atlas network access (allow 0.0.0.0/0).",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const isAuthenticated = await getSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const title = String(body.title || "").trim();
    const excerpt = String(body.excerpt || "").trim();
    const type = String(body.type || "blog").trim();
    const coverImageUrl = String(body.coverImageUrl || "").trim();
    const galleryImages = Array.isArray(body.galleryImages)
      ? body.galleryImages
          .map(
            (item: {
              url?: unknown;
              caption?: unknown;
              type?: unknown;
              embedUrl?: unknown;
            }) => ({
              url: String(item.url || "").trim(),
              caption: String(item.caption || "").trim(),
              type: String(item.type || "").trim(),
              embedUrl: String(item.embedUrl || "").trim(),
            }),
          )
          .filter((item: { url: string }) => item.url)
      : [];
    const contentJson = Array.isArray(body.contentJson) ? body.contentJson : [];
    const seoKeywords = Array.isArray(body.seoKeywords)
      ? body.seoKeywords
          .map((keyword: unknown) => String(keyword).trim())
          .filter(Boolean)
      : String(body.seoKeywords || "")
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean);

    if (!title || !excerpt || contentJson.length === 0) {
      return NextResponse.json(
        { error: "Title, excerpt, and content are required" },
        { status: 400 },
      );
    }

    const blog = await createBlog({
      title,
      excerpt,
      coverImageUrl,
      galleryImages,
      contentJson,
      seoKeywords,
      type: type as "blog" | "essay",
    });

    void import("@/lib/newsletter")
      .then(({ notifySubscribersOfNewBlog }) =>
        notifySubscribersOfNewBlog(blog),
      )
      .then((result) => {
        if (!result.skipped) {
          console.info(
            `Newsletter sent: ${result.sent} delivered, ${result.failed} failed`,
          );
        }
      })
      .catch((error) => {
        console.error("Newsletter notification failed:", error);
      });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    console.error("Failed to create blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
