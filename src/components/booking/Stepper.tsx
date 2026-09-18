import { CheckIcon } from "@/components/icons";

const steps = [
  { n: 1, label: "Build Booking" },
  { n: 2, label: "Review & Pay" },
  { n: 3, label: "Confirmed" },
];

export function Stepper({ current }: { current: number }) {
  return (
    <ol className="mx-auto flex max-w-5xl items-center gap-2 px-5 py-4 sm:gap-4 sm:px-8">
      {steps.map((step, i) => {
        const state =
          step.n < current ? "done" : step.n === current ? "active" : "next";
        return (
          <li key={step.n} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  state === "done"
                    ? "bg-green-500 text-navy-950"
                    : state === "active"
                      ? "bg-navy-900 text-cream-100"
                      : "bg-navy-900/10 text-navy-900/40"
                }`}
              >
                {state === "done" ? (
                  <CheckIcon className="h-3 w-3" />
                ) : (
                  step.n
                )}
              </span>
              <span
                className={`hidden text-xs font-bold uppercase tracking-wide sm:inline ${
                  state === "next" ? "text-navy-900/40" : "text-navy-900"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="h-px w-6 bg-navy-900/20 sm:w-12" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
