"use client";

import { useState } from "react";

export default function NewsletterInline({
  interest,
}: {
  interest: "blogs" | "essays" | "both";
}) {
  const [form, setForm] = useState({ name: "", email: "", interest: "both" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interest }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage(data.message);
      setForm({ name: "", email: "", interest: "both" });
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="mt-20 border-t border-white/10 pt-12">
      <p className="text-xs uppercase tracking-widest text-dark_gray mb-3">
        Newsletter
      </p>
      <h2 className="font-display font-bold text-xl text-white mb-6">
        Subscribe to my <span className="text-gradient-orange">newsletter</span>
      </h2>

      {status === "success" ? (
        <p className="text-sm text-soft_gray/70">{message}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            disabled={status === "loading"}
            className="flex-1 bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors disabled:opacity-50"
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            disabled={status === "loading"}
            className="flex-1 bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl bg-orange text-white text-sm font-semibold hover:bg-orange-light transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400 mt-3">{message}</p>
      )}
    </div>
  );
}
