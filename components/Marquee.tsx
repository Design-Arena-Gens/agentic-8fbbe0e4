import { marqueeItems } from "@/lib/mockData";

export function Marquee() {
  return (
    <div className="relative my-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-5 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="flex animate-marquee gap-10 whitespace-nowrap px-10 text-sm uppercase tracking-[0.4em] text-white/70">
        {marqueeItems.concat(marqueeItems).map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-3">
            <span className="h-px w-12 bg-white/20" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
