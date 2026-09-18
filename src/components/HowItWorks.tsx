import { DotIcon, XIcon } from "./icons";

const steps = [
  {
    n: "01",
    title: "Pick a sport & date",
    body: "Choose basketball, futsal, or pickleball, then the date you want to play.",
  },
  {
    n: "02",
    title: "Tap open hours",
    body: "See every court's real schedule. Booked hours simply can't be selected, so there's no guesswork.",
  },
  {
    n: "03",
    title: "Add more courts",
    body: "Reserve a second court or field in the same booking if your group needs it.",
  },
  {
    n: "04",
    title: "Pay to confirm",
    body: "GCash or bank transfer. Once payment clears, your slot is confirmed: no holds, no waiting on a reply.",
  },
];

const courts = [
  {
    name: "Basketball Court 1",
    hours: [
      { time: "4 PM", state: "available" },
      { time: "5 PM", state: "available" },
      { time: "6 PM", state: "booked" },
      { time: "7 PM", state: "booked" },
      { time: "8 PM", state: "selected" },
      { time: "9 PM", state: "selected" },
      { time: "10 PM", state: "selected" },
      { time: "11 PM", state: "selected" },
    ],
  },
  {
    name: "Basketball Court 2",
    hours: [
      { time: "4 PM", state: "available" },
      { time: "5 PM", state: "available" },
      { time: "6 PM", state: "available" },
      { time: "7 PM", state: "available" },
      { time: "8 PM", state: "available" },
      { time: "9 PM", state: "booked" },
      { time: "10 PM", state: "available" },
      { time: "11 PM", state: "available" },
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-900 py-20 text-cream-100 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              AVAILABLE MEANS
              <br />
              <span className="text-green-400">BOOKABLE.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream-100/75 sm:text-lg">
              No request forms, no "please wait for confirmation." If a slot
              shows open, it&apos;s yours the moment you pay.
            </p>

            <ol className="mt-10 space-y-7">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="font-display shrink-0 text-3xl leading-none text-cream-100/30">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-cream-100">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream-100/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-sm border-2 border-cream-100/15 bg-navy-950 p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-cream-100/50">
              Example: Saturday Availability
            </p>
            <div className="mt-5 space-y-6">
              {courts.map((court) => (
                <div key={court.name}>
                  <p className="mb-2.5 text-sm font-bold text-cream-100">
                    {court.name}
                  </p>
                  <ul className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
                    {court.hours.map((slot) => (
                      <li
                        key={slot.time}
                        className={`flex flex-col items-center gap-1 rounded-sm border px-1.5 py-2 text-center ${
                          slot.state === "selected"
                            ? "border-amber-400 bg-amber-400/15 text-amber-400"
                            : slot.state === "available"
                              ? "border-green-500/40 bg-green-500/10 text-green-400"
                              : "border-cream-100/10 bg-cream-100/[0.04] text-cream-100/35"
                        }`}
                      >
                        {slot.state === "booked" ? (
                          <XIcon className="h-2.5 w-2.5" />
                        ) : (
                          <DotIcon className="h-2.5 w-2.5" />
                        )}
                        <span className="tabular text-xs font-bold">
                          {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream-100/55">
              <span className="inline-flex items-center gap-1.5">
                <DotIcon className="h-2.5 w-2.5 text-green-400" /> Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <DotIcon className="h-2.5 w-2.5 text-amber-400" /> Your
                selection
              </span>
              <span className="inline-flex items-center gap-1.5">
                <XIcon className="h-2.5 w-2.5 text-cream-100/40" /> Already
                booked
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
