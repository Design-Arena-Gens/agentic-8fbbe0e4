import { comparisonRows } from "@/lib/mockData";

export function ComparisonTable() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8">
        <div className="mb-8 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Why Pai Keys</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Drop-in upgrade over single-model tools</h2>
          <p className="mt-3 text-sm text-white/70">
            Replace ChatGPT, Gemini, or Claude subscriptions with a single routing mesh that always picks the best model.
          </p>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full table-fixed border-separate border-spacing-y-3 text-sm text-left">
            <thead className="text-xs uppercase tracking-[0.3em] text-white/40">
              <tr>
                <th className="w-1/4 px-4 py-2">Capability</th>
                <th className="w-1/4 px-4 py-2 text-primary-200">Pai Keys</th>
                <th className="w-1/6 px-4 py-2">ChatGPT</th>
                <th className="w-1/6 px-4 py-2">Gemini</th>
                <th className="w-1/6 px-4 py-2">Claude</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="rounded-3xl border border-white/10 bg-white/5 text-white/80 transition hover:border-primary-300/50"
                >
                  <td className="rounded-l-3xl px-4 py-4 font-semibold text-white">{row.feature}</td>
                  <td className="px-4 py-4 text-primary-100">{row.paiKeys}</td>
                  <td className="px-4 py-4">{row.chatgpt}</td>
                  <td className="px-4 py-4">{row.gemini}</td>
                  <td className="rounded-r-3xl px-4 py-4">{row.claude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
