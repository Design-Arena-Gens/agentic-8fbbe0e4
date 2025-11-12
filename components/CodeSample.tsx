"use client";

import { apiSnippet } from "@/lib/mockData";
import { Copy } from "lucide-react";
import { useState } from "react";

export function CodeSample() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(apiSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto mt-24 w-full max-w-5xl px-6">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-3 text-left">
          <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Developer-first</span>
          <h2 className="text-3xl font-semibold">Drop-in API compatibility</h2>
          <p className="text-sm text-white/70">
            Swap your existing OpenAI integration in minutes. Pai Keys mirrors the OpenAI schema and unlocks every
            frontier model instantly.
          </p>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/90 p-6 font-mono text-xs leading-relaxed text-primary-100">
          <div className="mb-4 flex items-center justify-between text-white/40">
            <span>Terminal • Shell</span>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/60 transition hover:border-primary-300 hover:text-primary-100"
            >
              <Copy className="h-3.5 w-3.5" />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap">{apiSnippet}</pre>
        </div>
      </div>
    </section>
  );
}
