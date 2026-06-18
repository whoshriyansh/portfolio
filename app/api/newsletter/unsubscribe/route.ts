import { NextResponse } from "next/server";
import { unsubscribeFromNewsletter } from "@/lib/newsletter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing unsubscribe token" }, { status: 400 });
  }

  try {
    const result = await unsubscribeFromNewsletter(token);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Newsletter unsubscribe failed:", error);
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = String(body.token || "");

    if (!token) {
      return NextResponse.json({ error: "Missing unsubscribe token" }, { status: 400 });
    }

    const result = await unsubscribeFromNewsletter(token);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Newsletter unsubscribe failed:", error);
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }
}
