import Image from "next/image";
import { testimonials } from "@/lib/mockData";

export function Testimonials() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 via-white/3 to-transparent p-8">
        <div className="mb-8 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-primary-200">Trusted by builders</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Teams that moved faster with Pai Keys</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex h-full flex-col gap-6 rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm leading-relaxed text-white/70">{testimonial.quote}</p>
              <div className="mt-auto flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
