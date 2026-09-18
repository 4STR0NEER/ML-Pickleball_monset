"use client";

import { isoDate, nextDays } from "./data";

export function DateStrip({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (dateIso: string) => void;
}) {
  const days = nextDays(14);

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1"
      role="radiogroup"
      aria-label="Choose a date"
    >
      {days.map((d) => {
        const iso = isoDate(d);
        const isActive = iso === selected;
        return (
          <button
            key={iso}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onSelect(iso)}
            className={`flex shrink-0 flex-col items-center rounded-sm border px-3.5 py-2 transition-colors ${
              isActive
                ? "border-green-600 bg-green-500 text-navy-950"
                : "border-navy-900/20 bg-cream-100 text-navy-900 hover:border-navy-900/40"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wide opacity-70">
              {d.toLocaleDateString("en-US", { weekday: "short" })}
            </span>
            <span className="font-display text-lg leading-tight">
              {d.getDate()}
            </span>
          </button>
        );
      })}
    </div>
  );
}
