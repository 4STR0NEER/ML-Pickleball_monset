import Link from "next/link";

const links = [
  { href: "#facilities", label: "Facilities" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#walk-ins", label: "Walk-Ins" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy-900 bg-cream-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="#top"
          className="font-display text-xl tracking-tight text-navy-900 sm:text-2xl"
        >
          ML LIFESTYLE PARK
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy-800 transition-colors hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/book"
          className="rounded-sm bg-navy-900 px-4 py-2.5 text-sm font-bold tracking-wide text-cream-100 transition-colors hover:bg-green-600 sm:px-5"
        >
          Check Availability
        </Link>
      </div>
    </header>
  );
}
