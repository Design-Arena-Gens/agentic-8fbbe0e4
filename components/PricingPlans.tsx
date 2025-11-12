const plans = [
  {
    name: "Builder",
    badge: "Free Forever",
    price: "$0",
    description: "Launch in minutes with free OSS routing and generous monthly credits.",
    features: [
      "Unified API key",
      "Unlimited open-source usage",
      "2M text tokens / month",
      "10K image renders",
      "Realtime analytics dashboard"
    ]
  },
  {
    name: "Scale",
    badge: "Most Popular",
    price: "$249",
    description: "Accelerate production workloads with priority routing and enterprise reliability.",
    features: [
      "Best model auto-selection",
      "Bring-your-own keys",
      "SLA-backed failover",
      "Role-based governance",
      "Edge streaming"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    badge: "Custom",
    price: "Talk to us",
    description: "Dedicated routing mesh, self-hosted options, and compliance automation.",
    features: [
      "Dedicated control plane",
      "Kubernetes operator",
      "Audit-ready logs",
      "Private networking",
      "Solution architect support"
    ]
  }
];

export function PricingPlans() {
  return (
    <section id="pricing" className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Pricing</span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Billing designed around velocity</h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          Start free, scale with predictable pricing, integrate anywhere. Cancel subscription lock-in forever.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-[30px] border border-white/10 bg-slate-950/90 p-7 transition ${
              plan.highlighted ? "border-primary-400/60 shadow-glow-primary" : "hover:border-primary-300/40"
            }`}
          >
            <span className="self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
              {plan.badge}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-white/60">{plan.description}</p>
            <div className="mt-6 text-3xl font-semibold text-white">{plan.price}</div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-300" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 text-slate-950 shadow-glow-primary"
                  : "border border-white/20 text-white/80 hover:border-primary-400 hover:text-white"
              }`}
            >
              {plan.highlighted ? "Start scaling" : "Chat with team"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
