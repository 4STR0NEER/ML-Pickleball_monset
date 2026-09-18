import { BasketballIcon, FutsalIcon, PickleballIcon } from "./icons";

export function Facilities() {
  return (
    <section id="facilities" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-navy-900 sm:text-5xl">
            THREE SPORTS.
            <br />
            FOURTEEN COURTS.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-800/80 sm:text-lg">
            Every court and field keeps its own schedule. Book one, or
            combine a few in the same reservation.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-sm border-2 border-navy-900 bg-navy-900 p-6 text-cream-100 sm:flex-row sm:items-center sm:p-10">
            <PickleballCourtLines className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 text-cream-100/[0.06]" />
            <div className="relative flex items-center gap-4">
              <PickleballIcon className="h-12 w-12 shrink-0 text-green-400 sm:h-14 sm:w-14" />
              <div>
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                  PICKLEBALL COURTS
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream-100/70">
                  The facility&apos;s largest lineup, with dedicated courts
                  open every session.
                </p>
              </div>
            </div>
            <span className="font-display relative shrink-0 text-7xl leading-none sm:text-8xl">
              9
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FacilityPanel
              icon={<BasketballIcon className="h-10 w-10" />}
              count="3"
              sport="Basketball Courts"
              note="Full-size courts for pickup games, leagues, or private runs."
            />
            <FacilityPanel
              icon={<FutsalIcon className="h-10 w-10" />}
              count="2"
              sport="Futsal Fields"
              note="Fast-paced, five-a-side fields with proper boundary markings."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityPanel({
  icon,
  count,
  sport,
  note,
}: {
  icon: React.ReactNode;
  count: string;
  sport: string;
  note: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-sm border-2 border-navy-900 bg-navy-900 p-6 text-cream-100 sm:p-8">
      <div className="flex items-start justify-between">
        <span className="text-green-400">{icon}</span>
        <span className="font-display text-5xl leading-none text-cream-100 sm:text-6xl">
          {count}
        </span>
      </div>
      <div className="mt-8 border-t border-dashed border-cream-100/25 pt-4">
        <h3 className="font-display text-xl tracking-tight text-cream-100 sm:text-2xl">
          {sport.toUpperCase()}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
          {note}
        </p>
      </div>
    </div>
  );
}

function PickleballCourtLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="20" y="20" width="360" height="200" />
        <line x1="200" y1="20" x2="200" y2="220" />
        <line x1="110" y1="20" x2="110" y2="220" />
        <line x1="290" y1="20" x2="290" y2="220" />
      </g>
    </svg>
  );
}
