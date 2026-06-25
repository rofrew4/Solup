"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Incorrect password");
        setLoading(false);
        return;
      }

      const from = searchParams.get("from") || "/";
      router.push(from);
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm rounded-lg border border-accent/20 bg-widget p-8 shadow-card">
        <p className="eyebrow mb-3">Chesterbrook</p>
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-foreground">
          Sol-Up Engineering Roadmap
        </h1>
        <p className="prose-body mt-2">Enter the password to view this proposal.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              autoFocus
              className="w-full rounded-md border border-surface-border bg-background px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {error && (
            <p className="text-[13px] text-accent" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="btn-primary w-full text-center disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Checking…" : "Continue"}
          </button>
        </form>
      </div>
    </main>
  );
}
