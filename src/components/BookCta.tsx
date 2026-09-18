import Link from "next/link";
import { CourtLines } from "./CourtLines";
import { FloodlightIcon } from "./icons";

export function BookCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-navy-950 py-24 text-center text-cream-100 sm:py-32"
    >
      <CourtLines className="pointer-events-none absolute inset-0 h-full w-full text-cream-100/[0.05]" />
      <FloodlightIcon className="pointer-events-none absolute left-6 top-0 h-14 w-14 text-green-400/40 sm:left-10" />
      <FloodlightIcon className="pointer-events-none absolute right-6 top-0 h-14 w-14 scale-x-[-1] text-green-400/40 sm:right-10" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl">
          FLOODLIGHTS ARE ON.
          <br />
          <span className="text-green-400">GO PLAY.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-100/75 sm:text-lg">
          Pick your court, pick your hour, pay, and it&apos;s confirmed. No
          holds, no waiting on a reply.
        </p>
        <Link
          href="/book"
          className="mt-8 inline-block rounded-sm bg-green-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-green-400"
        >
          Check Availability
        </Link>
      </div>
    </section>
  );
}
