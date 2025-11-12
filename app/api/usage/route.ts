import { NextResponse } from "next/server";
import { getUsageStore, synthesizeSummary } from "@/lib/usageStore";

export async function GET() {
  const summary = synthesizeSummary();
  return NextResponse.json(summary);
}

export async function DELETE() {
  const store = getUsageStore();
  store.requests = [];
  store.totalTokens = 0;
  store.totalCost = 0;
  store.totalSavings = 0;
  return NextResponse.json({ ok: true });
}
