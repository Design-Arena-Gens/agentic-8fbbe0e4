import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 text-sm text-white/60 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-lg font-semibold text-white">Pai Keys</span>
          <p className="mt-3 text-sm text-white/50">
            Unified AI API platform delivering the fastest path to production AI, powered by intelligent routing.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Platform</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#models" className="hover:text-white">
                Model Network
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Resources</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="https://docs.paikeys.ai" className="hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="https://status.paikeys.ai" className="hover:text-white">
                Status
              </Link>
            </li>
            <li>
              <Link href="https://github.com/paikeys" className="hover:text-white">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Stay in loop</p>
          <form className="mt-3 flex gap-2">
            <input
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-primary-400"
              placeholder="Email address"
              type="email"
              name="email"
            />
            <button
              type="submit"
              className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-primary-400"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Pai Keys Labs. Built for builders, crafted for velocity.
      </div>
    </footer>
  );
}
