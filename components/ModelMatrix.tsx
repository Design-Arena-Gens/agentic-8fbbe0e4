import { models } from "@/lib/models";
import { CheckCircle2 } from "lucide-react";

export function ModelMatrix() {
  const sorted = [...models].sort((a, b) => (a.provider > b.provider ? 1 : -1));
  return (
    <section id="models" className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Model Network</span>
        <h2 className="text-3xl font-semibold sm:text-4xl">All the models you need — orchestrated for you</h2>
        <p className="text-sm text-white/70 sm:text-base">
          Pai Keys blends premium closed models with open-source powerhouses for a unified inference backbone.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((model) => (
          <div
            key={model.id}
            className="relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-primary-400/60 hover:shadow-glow-primary"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{model.provider}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  model.openSource ? "bg-success-500/20 text-success-500" : "bg-primary-500/20 text-primary-200"
                }`}
              >
                {model.openSource ? "Open Source" : "Premium"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {model.category.map((cat) => (
                <span key={cat} className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em]">
                  {cat}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-lg font-semibold text-white">{model.accuracy}/10</div>
                <p className="mt-1 uppercase tracking-[0.2em]">Accuracy</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-lg font-semibold text-white">{model.speed}/10</div>
                <p className="mt-1 uppercase tracking-[0.2em]">Speed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-lg font-semibold text-white">{model.cost}/10</div>
                <p className="mt-1 uppercase tracking-[0.2em]">Cost</p>
              </div>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {model.strengths.map((strength) => (
                <li key={strength} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-300" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
