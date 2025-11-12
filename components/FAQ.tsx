import { faqItems } from "@/lib/mockData";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto mt-24 w-full max-w-5xl px-6">
      <div className="text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-primary-200">FAQ</span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Everything you need to ship smarter</h2>
        <p className="mt-3 text-sm text-white/70">
          If you still have questions, plug in instantly via Slack or email us at founders@paikeys.ai.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-3xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-primary-300/50"
          >
            <summary className="cursor-pointer text-base font-semibold text-white outline-none group-open:text-primary-100">
              {item.question}
            </summary>
            <p className="mt-4 text-sm text-white/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
