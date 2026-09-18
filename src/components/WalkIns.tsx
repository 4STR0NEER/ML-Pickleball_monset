import { DotIcon } from "./icons";

const points = [
  "Staff book on your behalf at the counter",
  "Pay before you play, just like online",
  "Your slot is locked the moment payment clears",
];

export function WalkIns() {
  return (
    <section id="walk-ins" className="bg-cream-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-sm border-2 border-navy-900 lg:grid-cols-[1.3fr_1fr]">
          <div className="p-8 sm:p-12">
            <h2 className="font-display text-3xl leading-[0.95] tracking-tight text-navy-900 sm:text-4xl">
              WALKED IN? SAME SYSTEM.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-800/80 sm:text-lg">
              Show up without a booking and staff reserve your court the same
              way the website does: same live availability, same instant
              confirmation, no separate walk-in process.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm font-semibold text-navy-900">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <DotIcon className="mt-1 h-2.5 w-2.5 shrink-0 text-green-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full flex-col justify-center gap-1 border-t-2 border-dashed border-navy-900/30 p-8 lg:border-l-2 lg:border-t-0 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-wide text-navy-800/60">
              Open Daily
            </p>
            <p className="font-display text-4xl leading-none text-navy-900 sm:text-5xl">
              4PM–12AM
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-navy-800/60">
              Timezone
            </p>
            <p className="text-sm font-semibold text-navy-900">
              Philippine Time (UTC+8)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
