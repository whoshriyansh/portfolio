"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readingTime: number;
  publishedAt: string;
};

export default function ServerDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [error, setError] = useState("");

  async function loadBlogs() {
    const response = await fetch("/api/blogs", { credentials: "include" });
    if (response.ok) {
      const data = await response.json();
      setBlogs(data.blogs);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    loadBlogs().finally(() => setIsLoading(false));
  }, []);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError("Invalid email or password");
        return;
      }

      await loadBlogs();
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setIsAuthenticated(false);
    setBlogs([]);
    setEmail("");
    setPassword("");
  }

  async function handleDelete(id: string, title: string) {
    const confirmed = window.confirm(
      `Delete "${title}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      setBlogs((current) => current.filter((blog) => blog.id !== id));
    }
  }

  function formatDate(dateString: string) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-soft_gray/50 text-sm">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-surface border border-white/10 rounded-2xl p-8"
        >
          <h1 className="font-display text-2xl font-bold text-white mb-2">
            Server Login
          </h1>
          <p className="text-soft_gray/60 text-sm mb-8">
            Sign in to manage your blog posts.
          </p>

          {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

          <label className="flex flex-col gap-2 mb-4">
            <span className="text-xs uppercase tracking-wider text-soft_gray/60">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-orange/50"
            />
          </label>

          <label className="flex flex-col gap-2 mb-6">
            <span className="text-xs uppercase tracking-wider text-soft_gray/60">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-orange/50"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange-light transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="font-display text-3xl font-bold text-white heading-tight">
            Blog Dashboard
          </h1>
          <p className="text-soft_gray/60 text-sm mt-2">
            Manage your published essays.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/server/compose"
            className="px-5 py-2.5 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange-light transition-colors"
          >
            Create New Blog
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="px-5 py-2.5 rounded-full border border-white/10 text-soft_gray text-sm hover:text-white hover:border-white/20 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="border border-white/10 rounded-xl p-10 text-center">
          <p className="text-soft_gray/50 text-sm mb-4">No blog posts yet.</p>
          <Link
            href="/server/compose"
            className="text-orange text-sm hover:text-orange-light transition-colors"
          >
            Write your first essay →
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-white/10 rounded-xl p-5 bg-surface/40"
            >
              <div>
                <h2 className="font-display font-semibold text-white text-lg">
                  {blog.title}
                </h2>
                <p className="text-xs text-dark_gray mt-1">
                  /blog/{blog.slug} · {formatDate(blog.publishedAt)} ·{" "}
                  {blog.readingTime} min read
                </p>
                <p className="text-soft_gray/50 text-sm mt-2 line-clamp-1">
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/10 text-sm text-soft_gray hover:text-white transition-colors"
                >
                  View
                </a>
                <button
                  type="button"
                  onClick={() => handleDelete(blog.id, blog.title)}
                  className="px-4 py-2 rounded-lg border border-red-500/30 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
