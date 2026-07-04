import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/78 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-bold text-white">
            A
          </span>
          <span>Amaru Tech Labs</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
