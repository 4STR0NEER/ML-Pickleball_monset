const links = [
  { href: "#facilities", label: "Facilities" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#walk-ins", label: "Walk-Ins" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-cream-100/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 border-b border-cream-100/15 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-tight text-cream-100">
              ML LIFESTYLE PARK
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              Basketball, futsal &amp; pickleball courts. Open daily, 4PM–12AM
              Philippine Time.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-cream-100/80">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="pt-6 text-xs">
          © {new Date().getFullYear()} ML Lifestyle Park. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
