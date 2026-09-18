import Link from "next/link";
import { CourtLines } from "./CourtLines";
import { DotIcon, FloodlightIcon, PlayIcon, XIcon } from "./icons";

const previewSlots = [
  { time: "4 PM", open: true },
  { time: "5 PM", open: true },
  { time: "6 PM", open: false },
  { time: "7 PM", open: false },
  { time: "8 PM", open: true },
  { time: "9 PM", open: true },
  { time: "10 PM", open: true },
  { time: "11 PM", open: true },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-scrim relative overflow-hidden text-cream-100"
    >
      {/* Placeholder for the future 3D court walkthrough video. Replace this
          block with the real <video>/WebGL element when footage is ready. */}
      <CourtLines className="pointer-events-none absolute inset-0 h-full w-full text-cream-100/[0.07]" />
      <FloodlightIcon className="pointer-events-none absolute left-6 top-0 h-14 w-14 text-amber-400/50 sm:left-10 sm:h-20 sm:w-20" />
      <FloodlightIcon className="pointer-events-none absolute right-6 top-0 h-14 w-14 scale-x-[-1] text-amber-400/50 sm:right-10 sm:h-20 sm:w-20" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <div className="inline-flex w-fit items-center gap-2 self-start rounded-sm border border-amber-400/60 bg-navy-950/60 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-400">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
          3D Video Placeholder
        </div>

        <div className="mt-14 flex flex-1 flex-col justify-center gap-8 sm:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight text-cream-100 sm:text-6xl md:text-7xl">
              THE COURT
              <br />
              IS OPEN.
              <br />
              <span className="text-green-400">BOOK IT.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-200/85 sm:text-lg">
              Basketball, futsal, and pickleball courts at ML Lifestyle Park.
              See real availability and confirm your slot in minutes, no
              Facebook reply required.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="rounded-sm bg-green-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-green-400"
              >
                Check Availability
              </Link>
              <button
                type="button"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-cream-100/90 transition-colors hover:text-amber-400"
              >
                <PlayIcon className="h-9 w-9 text-cream-100 transition-colors group-hover:text-amber-400" />
                Watch the court tour
              </button>
            </div>
          </div>

          <dl className="grid w-full max-w-xs grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-cream-100/15 pt-6 lg:w-auto">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-cream-100/60">
                Open Daily
              </dt>
              <dd className="font-display text-xl text-cream-100">
                4PM – 12AM
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-cream-100/60">
                Courts &amp; Fields
              </dt>
              <dd className="font-display text-xl text-cream-100">14 Total</dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 border-t-2 border-cream-100/15 pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-cream-100/60">
            Basketball Court 1, tonight
          </p>
          <ul className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {previewSlots.map((slot) => (
              <li
                key={slot.time}
                className={`flex flex-col items-center gap-1.5 rounded-sm border px-2 py-2.5 text-center ${
                  slot.open
                    ? "border-green-500/40 bg-green-500/10 text-green-400"
                    : "border-cream-100/10 bg-cream-100/[0.04] text-cream-100/40"
                }`}
              >
                {slot.open ? (
                  <DotIcon className="h-3 w-3" />
                ) : (
                  <XIcon className="h-3 w-3" />
                )}
                <span className="tabular text-xs font-bold">{slot.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 max-w-sm text-xs text-cream-100/50">
            Illustrative preview. Live availability loads per court and date
            once booking opens.
          </p>
        </div>
      </div>
    </section>
  );
}
