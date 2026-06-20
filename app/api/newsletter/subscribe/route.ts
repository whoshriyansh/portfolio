import { NextResponse } from "next/server";
import { isBrevoConfigured } from "@/lib/brevo";
import { subscribeToNewsletter } from "@/lib/newsletter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "");
    const name = String(body.name || "");
    const interest = String(body.interest || "both");

    if (!name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!interest.trim()) {
      return NextResponse.json(
        { error: "Interest is required" },
        { status: 400 },
      );
    }

    const result = await subscribeToNewsletter(email, name, interest);

    const messages: Record<typeof result.status, string> = {
      subscribed: "You're subscribed. Check your inbox for a confirmation.",
      resubscribed: "Welcome back — you're subscribed again.",
      already_subscribed: "You're already subscribed to this newsletter.",
    };

    return NextResponse.json({
      success: true,
      status: result.status,
      message: messages[result.status],
      emailConfigured: isBrevoConfigured(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Subscription failed";

    if (message === "Invalid email address") {
      return NextResponse.json({ error: message }, { status: 400 });
    }

    if (message === "Name is required") {
      return NextResponse.json({ error: message }, { status: 400 });
    }

    console.error("Newsletter subscribe failed:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 },
    );
  }
}
