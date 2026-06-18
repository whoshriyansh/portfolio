type SendEmailInput = {
  to: string;
  subject: string;
  htmlContent: string;
};

export function isBrevoConfigured(): boolean {
  return Boolean(
    process.env.BREVO_API_KEY?.trim() && process.env.BREVO_SENDER_EMAIL?.trim()
  );
}

function getSender() {
  const email = process.env.BREVO_SENDER_EMAIL?.trim();
  const name = process.env.BREVO_SENDER_NAME?.trim() || "Shriyansh Lohia";

  if (!email) {
    throw new Error("BREVO_SENDER_EMAIL is not set");
  }

  return { email, name };
}

export async function sendBrevoEmail({
  to,
  subject,
  htmlContent,
}: SendEmailInput): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not set");
  }

  const sender = getSender();

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender,
      to: [{ email: to }],
      subject,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errorBody}`);
  }
}
