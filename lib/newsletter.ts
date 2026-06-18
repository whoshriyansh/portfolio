import { randomBytes } from "crypto";
import { connectDB } from "@/lib/db";
import Subscriber from "@/models/Subscriber";
import { sendBrevoEmail, isBrevoConfigured } from "@/lib/brevo";
import { buildNewBlogEmail, buildWelcomeEmail } from "@/lib/email-templates";
import { SITE_URL } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function createUnsubscribeToken(): string {
  return randomBytes(32).toString("hex");
}

function getUnsubscribeUrl(token: string): string {
  return `${SITE_URL}/newsletter/unsubscribe?token=${token}`;
}

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(normalizeEmail(email));
}

export type SubscribeResult =
  | { status: "subscribed" }
  | { status: "resubscribed" }
  | { status: "already_subscribed" };

export async function subscribeToNewsletter(
  email: string,
  name = ""
): Promise<SubscribeResult> {
  const normalizedEmail = normalizeEmail(email);
  const trimmedName = name.trim();

  if (!trimmedName) {
    throw new Error("Name is required");
  }

  if (!isValidEmail(normalizedEmail)) {
    throw new Error("Invalid email address");
  }

  await connectDB();

  const existing = await Subscriber.findOne({ email: normalizedEmail });

  if (existing?.active) {
    return { status: "already_subscribed" };
  }

  const unsubscribeToken = existing?.unsubscribeToken || createUnsubscribeToken();

  if (existing) {
    existing.active = true;
    existing.name = trimmedName;
    existing.subscribedAt = new Date();
    await existing.save();
  } else {
    await Subscriber.create({
      name: trimmedName,
      email: normalizedEmail,
      unsubscribeToken,
      active: true,
    });
  }

  if (isBrevoConfigured()) {
    try {
      await sendBrevoEmail({
        to: normalizedEmail,
        subject: "You're subscribed — Shriyansh Lohia",
        htmlContent: buildWelcomeEmail(getUnsubscribeUrl(unsubscribeToken), trimmedName),
      });
    } catch (error) {
      console.error("Welcome email failed:", error);
    }
  }

  return existing ? { status: "resubscribed" } : { status: "subscribed" };
}

export type UnsubscribeResult =
  | { status: "unsubscribed"; email: string }
  | { status: "already_unsubscribed"; email: string }
  | { status: "not_found" };

export async function unsubscribeFromNewsletter(
  token: string
): Promise<UnsubscribeResult> {
  await connectDB();

  const subscriber = await Subscriber.findOne({ unsubscribeToken: token });

  if (!subscriber) {
    return { status: "not_found" };
  }

  if (!subscriber.active) {
    return { status: "already_unsubscribed", email: subscriber.email };
  }

  subscriber.active = false;
  await subscriber.save();

  return { status: "unsubscribed", email: subscriber.email };
}

export async function notifySubscribersOfNewBlog(blog: BlogPost): Promise<{
  sent: number;
  failed: number;
  skipped: boolean;
}> {
  if (!isBrevoConfigured()) {
    console.warn("Newsletter skipped: Brevo is not configured");
    return { sent: 0, failed: 0, skipped: true };
  }

  await connectDB();

  const subscribers = await Subscriber.find({ active: true }).lean();

  if (subscribers.length === 0) {
    return { sent: 0, failed: 0, skipped: false };
  }

  let sent = 0;
  let failed = 0;

  for (const subscriber of subscribers) {
    try {
      await sendBrevoEmail({
        to: subscriber.email,
        subject: `New essay: ${blog.title}`,
        htmlContent: buildNewBlogEmail({
          title: blog.title,
          excerpt: blog.excerpt,
          slug: blog.slug,
          readingTime: blog.readingTime,
          coverImageUrl: blog.coverImageUrl || undefined,
          unsubscribeUrl: getUnsubscribeUrl(subscriber.unsubscribeToken),
        }),
      });
      sent += 1;
    } catch (error) {
      failed += 1;
      console.error(`Failed to notify ${subscriber.email}:`, error);
    }
  }

  return { sent, failed, skipped: false };
}
