/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type RoutingResponse = {
  primary: {
    id: string;
    name: string;
    provider: string;
    latencyMs: number;
    cost: number;
  };
  ranked: { id: string; name: string; provider: string }[];
  confidence: number;
  rationale: string[];
  estimatedLatency: number;
  estimatedCost: number;
};

type UsageResponse = {
  totalRequests: number;
  totalTokens: number;
  totalCost: number;
  totalSavings: number;
  distribution: Record<string, number>;
  averageLatency: number;
  recent: {
    id: string;
    promptType: string;
    tokens: number;
    costUsd: number;
    latencyMs: number;
    createdAt: number;
    model: { name: string; provider: string };
  }[];
};

const priorities = [
  { label: "Best Quality", value: "quality" },
  { label: "Fastest", value: "speed" },
  { label: "Lowest Cost", value: "cost" }
];

const modalities = [
  { label: "Chat / Text", value: "text" },
  { label: "Analysis", value: "analysis" },
  { label: "Code Generation", value: "code" },
  { label: "Vision", value: "vision" },
  { label: "Audio", value: "audio" },
  { label: "Image Creation", value: "image" }
];

export function Playground() {
  const [prompt, setPrompt] = useState("Summarize this sales call and extract top three objections.");
  const [priority, setPriority] = useState("quality");
  const [modality, setModality] = useState("analysis");
  const [tokens, setTokens] = useState(1200);
  const [temperature, setTemperature] = useState(0.4);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RoutingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [usage, setUsage] = useState<UsageResponse | null>(null);

  const fetchUsage = useCallback(async () => {
    try {
      const response = await fetch("/api/usage");
      if (!response.ok) throw new Error("Failed to fetch usage");
      const payload: UsageResponse = await response.json();
      setUsage(payload);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchUsage();
  }, [fetchUsage]);

  const submit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/router", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            priority,
            modality,
            tokens,
            temperature
          })
        });

        if (!response.ok) {
          throw new Error("Routing failed. Please try again.");
        }

        const payload: RoutingResponse = await response.json();
        setResult(payload);
        fetchUsage();
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [fetchUsage, modality, priority, prompt, temperature, tokens]
  );

  const distribution = useMemo(() => {
    if (!usage) return [];
    return Object.entries(usage.distribution);
  }, [usage]);

  return (
    <section id="playground" className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-10">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Routing Playground</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">See Pai Keys choose the right model in real time</h2>
          <p className="text-sm text-white/70 sm:text-base">
            Describe your workload and watch Pai Keys benchmark models instantly — no setup required.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="prompt" className="text-xs uppercase tracking-[0.3em] text-white/40">
                Describe your workload
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="mt-2 h-40 w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition focus:border-primary-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {priorities.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value)}
                  className={`rounded-3xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                    priority === option.value
                      ? "border-primary-400 bg-primary-400/20 text-primary-100"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Modality</label>
                <div className="mt-2 grid gap-2">
                  {modalities.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setModality(option.value)}
                      className={`rounded-2xl border px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.3em] transition ${
                        modality === option.value
                          ? "border-primary-400 bg-primary-400/20 text-primary-100"
                          : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Tokens & Temperature</label>
                <div>
                  <span className="text-xs text-white/60">Tokens: {tokens}</span>
                  <input
                    type="range"
                    min={500}
                    max={32000}
                    step={500}
                    value={tokens}
                    onChange={(event) => setTokens(Number(event.target.value))}
                    className="mt-2 w-full"
                  />
                </div>
                <div>
                  <span className="text-xs text-white/60">Temperature: {temperature.toFixed(1)}</span>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={temperature}
                    onChange={(event) => setTemperature(Number(event.target.value))}
                    className="mt-2 w-full"
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-sm text-accent-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow-primary transition hover:scale-[1.01] disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? "Routing..." : "Route request"}
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Routing Result</h3>
              {result ? (
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Model Selected</p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      {result.primary.name} <span className="text-sm text-white/60">({result.primary.provider})</span>
                    </p>
                    <div className="mt-2 flex gap-4 text-xs text-white/60">
                      <span>Confidence {(result.confidence * 100).toFixed(1)}%</span>
                      <span>Latency ~{result.estimatedLatency}ms</span>
                      <span>Est. Cost ${result.estimatedCost}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Why this pick</p>
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {result.rationale.map((reason) => (
                        <li key={reason} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Backup options</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
                      {result.ranked.slice(1).map((model) => (
                        <span key={model.id} className="rounded-full border border-white/10 px-3 py-1">
                          {model.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-white/60">
                  Run the playground to see the intelligent router explain its decision and provide instant failover
                  options.
                </p>
              )}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Live Usage Telemetry</h3>
              {usage ? (
                <div className="mt-4 space-y-4 text-sm text-white/70">
                  <div className="flex flex-wrap gap-6 text-xs">
                    <span>
                      <span className="text-white/40">Requests: </span>
                      {usage.totalRequests}
                    </span>
                    <span>
                      <span className="text-white/40">Tokens: </span>
                      {usage.totalTokens.toLocaleString()}
                    </span>
                    <span>
                      <span className="text-white/40">Spend: </span>${usage.totalCost}
                    </span>
                    <span>
                      <span className="text-white/40">Saved: </span>${usage.totalSavings}
                    </span>
                    <span>
                      <span className="text-white/40">Avg Latency: </span>
                      {usage.averageLatency}ms
                    </span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Distribution</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
                      {distribution.length ? (
                        distribution.map(([label, value]) => (
                          <span key={label} className="rounded-full border border-white/10 px-3 py-1">
                            {label}: {value}
                          </span>
                        ))
                      ) : (
                        <span className="text-white/40">Run a request to populate distribution data.</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Recent activity</p>
                    <div className="mt-2 space-y-2">
                      {usage.recent.length ? (
                        usage.recent.map((entry) => (
                          <div key={entry.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                            <div className="flex flex-col text-white/70">
                              <span className="text-white">{entry.model.name}</span>
                              <span className="uppercase tracking-[0.3em] text-white/30">{entry.promptType}</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/50">
                              <span>{entry.tokens} tok</span>
                              <span>${entry.costUsd.toFixed(3)}</span>
                              <span>{entry.latencyMs}ms</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <span className="text-white/40">No usage yet.</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-sm text-white/60">Loading usage metrics...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
