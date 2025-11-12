import { openSourceShare } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Unified Providers", value: "28+" },
  { label: "Latency Avg", value: "118ms" },
  { label: "Cost Savings", value: "72%" },
  { label: "OSS Coverage", value: `${Math.round(openSourceShare * 100)}%` }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36">
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-grid-radial" />
      <div className="absolute -top-64 left-1/2 h-[550px] w-[620px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70">
          UNIFIED AI INFRASTRUCTURE
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/20 px-2 py-0.5 text-[10px] font-semibold text-primary-100">
            BETTER THAN CHATGPT
          </span>
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          One API key for every elite AI model. Faster, freer, smarter than vendor lock-in.
        </h1>
        <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          Pai Keys auto-routes requests to GPT-4o, Claude 3, Gemini, Mistral, Stable Diffusion, Whisper, and the
          strongest open-source models. Zero contracts, instant failover, built for builders who refuse limits.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#playground"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Try intelligent routing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://docs.paikeys.ai"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-primary-400 hover:text-white"
          >
            Explore docs
          </Link>
        </div>
        <div className="relative grid w-full grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-left"
            >
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 transition hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
