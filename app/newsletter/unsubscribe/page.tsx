import Link from "next/link";
import { unsubscribeFromNewsletter } from "@/lib/newsletter";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function NewsletterUnsubscribePage({ searchParams }: PageProps) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <UnsubscribeLayout
        title="Invalid link"
        message="This unsubscribe link is missing a token. Use the link from your newsletter email."
        variant="error"
      />
    );
  }

  try {
    const result = await unsubscribeFromNewsletter(token);

    if (result.status === "not_found") {
      return (
        <UnsubscribeLayout
          title="Link not found"
          message="This unsubscribe link is invalid or has expired."
          variant="error"
        />
      );
    }

    if (result.status === "already_unsubscribed") {
      return (
        <UnsubscribeLayout
          title="Already unsubscribed"
          message={`${result.email} is not on the mailing list anymore.`}
          variant="neutral"
        />
      );
    }

    return (
      <UnsubscribeLayout
        title="You've been unsubscribed"
        message={`${result.email} will no longer receive newsletter emails.`}
        variant="success"
      />
    );
  } catch {
    return (
      <UnsubscribeLayout
        title="Something went wrong"
        message="We couldn't process your unsubscribe request. Please try again later."
        variant="error"
      />
    );
  }
}

function UnsubscribeLayout({
  title,
  message,
  variant,
}: {
  title: string;
  message: string;
  variant: "success" | "error" | "neutral";
}) {
  const accent =
    variant === "success"
      ? "text-orange"
      : variant === "error"
        ? "text-red-400"
        : "text-soft_gray";

  return (
    <div className="min-h-screen bg-black no-custom-cursor flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/10 rounded-2xl bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-soft_gray/60 mb-4">
          Newsletter
        </p>
        <h1 className={`font-display text-2xl font-bold mb-3 ${accent}`}>{title}</h1>
        <p className="text-soft_gray/70 text-sm leading-relaxed mb-8">{message}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange-light transition-colors"
          >
            Back to blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 text-soft_gray text-sm hover:text-white hover:border-white/20 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
