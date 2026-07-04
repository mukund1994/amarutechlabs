import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/support", label: "Support" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Amaru Tech Labs</p>
          <p className="mt-1 text-sm text-muted">© 2026 Amaru Tech Labs</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
