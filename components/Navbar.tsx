import Link from "next/link";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#models", label: "Models" },
  { href: "#pricing", label: "Pricing" },
  { href: "#playground", label: "Playground" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="mx-4 mt-6 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary-500/60 blur" />
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 text-slate-950 font-bold">
              π
            </span>
          </span>
          <span>Pai Keys</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#playground"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:border-primary-500 hover:text-white sm:inline-flex"
          >
            Live Demo
          </Link>
          <Link
            href="https://docs.paikeys.ai"
            className="rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow-primary transition hover:scale-[1.01]"
          >
            Get API Key
          </Link>
        </div>
      </div>
    </header>
  );
}
