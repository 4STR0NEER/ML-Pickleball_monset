import Link from "next/link";

export function BookingHeader() {
  return (
    <header className="border-b-2 border-navy-900 bg-cream-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-navy-900 sm:text-xl"
        >
          ML LIFESTYLE PARK
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-navy-800 transition-colors hover:text-green-600"
        >
          Back to site
        </Link>
      </div>
    </header>
  );
}
