import { featureHighlights } from "@/lib/mockData";
import { ShieldCheck, Sparkles, Workflow } from "lucide-react";

const icons = [Sparkles, Workflow, ShieldCheck];

export function FeatureSections() {
  return (
    <section id="features" className="relative mx-auto mt-12 w-full max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-3">
        {featureHighlights.map((feature, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <article
              key={feature.title}
              className="gradient-ring relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 px-6 py-8 shadow-glow-primary/20"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20">
                <Icon className="h-5 w-5 text-primary-200" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{feature.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
                {feature.metrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2"
                  >
                    <span className="text-white/90">{metric.value}</span>
                    <span className="uppercase tracking-[0.3em]">{metric.label}</span>
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
