import { AUTHOR, SITE_URL } from "@/lib/seo";

const COLORS = {
  black: "#0A0A0A",
  surface: "#111111",
  surfaceLight: "#1A1A1A",
  orange: "#F46C38",
  orangeLight: "#FF8F5C",
  white: "#FFFFFF",
  softGray: "#B6B4BD",
  darkGray: "#6A6B6E",
  border: "rgba(255,255,255,0.08)",
};

type EmailLayoutInput = {
  preheader: string;
  eyebrow: string;
  title: string;
  bodyHtml: string;
  ctaLabel?: string;
  ctaUrl?: string;
  footerNote?: string;
  unsubscribeUrl?: string;
};

function emailLayout({
  preheader,
  eyebrow,
  title,
  bodyHtml,
  ctaLabel,
  ctaUrl,
  footerNote,
  unsubscribeUrl,
}: EmailLayoutInput): string {
  const ctaBlock =
    ctaLabel && ctaUrl
      ? `
        <tr>
          <td style="padding: 28px 0 8px;">
            <a href="${ctaUrl}" style="display: inline-block; background-color: ${COLORS.orange}; color: ${COLORS.white}; text-decoration: none; font-family: Inter, Arial, sans-serif; font-size: 14px; font-weight: 600; padding: 14px 28px; border-radius: 999px;">
              ${ctaLabel}
            </a>
          </td>
        </tr>
      `
      : "";

  const unsubscribeBlock = unsubscribeUrl
    ? `
        <p style="margin: 20px 0 0; font-family: Inter, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: ${COLORS.darkGray};">
          <a href="${unsubscribeUrl}" style="color: ${COLORS.darkGray}; text-decoration: underline;">Unsubscribe</a> from this newsletter.
        </p>
      `
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${COLORS.black};">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${preheader}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.black}; padding: 40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 16px; overflow: hidden;">
            <tr>
              <td style="height: 4px; background: linear-gradient(90deg, ${COLORS.orange}, ${COLORS.orangeLight});"></td>
            </tr>
            <tr>
              <td style="padding: 32px 32px 8px;">
                <p style="margin: 0 0 12px; font-family: Inter, Arial, sans-serif; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: ${COLORS.darkGray};">
                  ${eyebrow}
                </p>
                <h1 style="margin: 0; font-family: 'Space Grotesk', Inter, Arial, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 700; color: ${COLORS.white};">
                  ${title}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 32px 0;">
                <div style="font-family: Inter, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: ${COLORS.softGray};">
                  ${bodyHtml}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 32px 32px;">
                <table role="presentation" cellspacing="0" cellpadding="0">
                  ${ctaBlock}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 32px 28px; border-top: 1px solid ${COLORS.border}; background-color: ${COLORS.surfaceLight};">
                <p style="margin: 0; font-family: Inter, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: ${COLORS.darkGray};">
                  ${footerNote || `Sent by ${AUTHOR.shortName} · Full-Stack Developer`}
                </p>
                ${unsubscribeBlock}
              </td>
            </tr>
          </table>
          <p style="margin: 20px 0 0; font-family: Inter, Arial, sans-serif; font-size: 11px; color: ${COLORS.darkGray};">
            <a href="${SITE_URL}" style="color: ${COLORS.darkGray}; text-decoration: none;">${SITE_URL.replace("https://", "")}</a>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export function buildWelcomeEmail(
  unsubscribeUrl: string,
  name?: string,
  interest: string = "both",
  finalInterest: string = interest === "both" ? "blogs and essays" : interest,
): string {
  const greeting = name ? `Hey ${name},` : "Hey there,";

  return emailLayout({
    preheader: "You're subscribed to essays by Shriyansh Lohia.",
    eyebrow: "Newsletter",
    title: "You're on the list.",
    bodyHtml: `
      <p style="margin: 0 0 16px;">${greeting} thanks for subscribing. You'll get an email whenever I publish a new ${finalInterest}</p>
    `,
    ctaLabel: "Read the blog",
    ctaUrl: `${SITE_URL}/blog`,
    unsubscribeUrl,
  });
}

type NewBlogEmailInput = {
  title: string;
  excerpt: string;
  slug: string;
  type: "blog" | "essay";
  interest: string;
  readingTime: number;
  coverImageUrl?: string;
  unsubscribeUrl: string;
};

export function buildNewBlogEmail({
  title,
  excerpt,
  slug,
  interest,
  type,
  readingTime,
  coverImageUrl,
  unsubscribeUrl,
}: NewBlogEmailInput): string {
  const postUrl = `${SITE_URL}/blog/${slug}`;
  const coverBlock = coverImageUrl
    ? `
      <p style="margin: 0 0 20px;">
        <img src="${coverImageUrl}" alt="${title}" width="496" style="width: 100%; max-width: 496px; border-radius: 12px; display: block; border: 1px solid ${COLORS.border};" />
      </p>
    `
    : "";

  return emailLayout({
    preheader: `New ${type === "blog" ? "Blog" : "Essay"}: ${title}`,
    eyebrow: `New ${type === "blog" ? "Blog" : "Essay"}`,
    title,
    bodyHtml: `
      ${coverBlock}
      <p style="margin: 0 0 16px;">${excerpt}</p>
      <p style="margin: 0; font-size: 13px; color: ${COLORS.darkGray};">${readingTime} min read · by ${AUTHOR.shortName}</p>
    `,
    ctaLabel: `Read the ${type === "blog" ? "blog" : "essay"}`,
    ctaUrl: postUrl,
    footerNote: `New from ${AUTHOR.shortName}'s blog`,
    unsubscribeUrl,
  });
}
