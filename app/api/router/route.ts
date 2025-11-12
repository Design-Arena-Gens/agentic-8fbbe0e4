import { NextResponse } from "next/server";
import { routeModel } from "@/lib/models";
import { getUsageStore, recordUsage } from "@/lib/usageStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, priority, modality, tokens, temperature } = body ?? {};

    if (!prompt || typeof prompt !== "string" || prompt.trim().length < 4) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const routing = routeModel({
      prompt,
      priority,
      modality,
      tokens,
      temperature
    });

    const costBenchmark = 0.0025 * (Math.max(tokens ?? 1000, 1000) / 1000);
    const estimatedCost = routing.estimatedCost;
    const savings = Math.max(costBenchmark - estimatedCost, 0);

    recordUsage({
      id: crypto.randomUUID(),
      promptType: (modality ?? "text").includes("image")
        ? "image"
        : (modality ?? "text").includes("audio")
        ? "audio"
        : (modality ?? "text") === "code"
        ? "code"
        : (modality ?? "text") === "analysis"
        ? "analysis"
        : "chat",
      tokens: tokens ?? 1500,
      model: routing.primary,
      costUsd: estimatedCost,
      latencyMs: routing.estimatedLatency,
      createdAt: Date.now(),
      savingsUsd: savings
    });

    return NextResponse.json({
      ...routing,
      primary: {
        ...routing.primary,
        cost: routing.primary.cost,
        latencyMs: routing.primary.latencyMs
      }
    });
  } catch (error) {
    console.error("Routing error", error);
    return NextResponse.json({ error: "Failed to route request" }, { status: 500 });
  }
}

export async function GET() {
  const usage = getUsageStore();
  return NextResponse.json({ requests: usage.requests });
}
