"use client";

import { DotIcon, XIcon } from "@/components/icons";
import { HOURS, formatRange, durationHours } from "./data";

type Range = { start: number; end: number };

export function SlotGrid({
  courtLabel,
  booked,
  pending,
  onSlotClick,
  onAdd,
  onClear,
}: {
  courtLabel: string;
  booked: Set<number>;
  pending?: Range;
  onSlotClick: (index: number) => void;
  onAdd: () => void;
  onClear: () => void;
}) {
  return (
    <div className="border-b border-dashed border-navy-900/20 py-5 last:border-none">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-bold text-navy-900">{courtLabel}</p>
        {pending && (
          <p className="text-xs font-semibold text-green-600">
            Selected {formatRange(pending.start, pending.end)} (
            {durationHours(pending.start, pending.end)}{" "}
            {durationHours(pending.start, pending.end) === 1 ? "hr" : "hrs"})
          </p>
        )}
      </div>

      <ul className="mt-3 grid grid-cols-4 gap-1.5 sm:grid-cols-8">
        {HOURS.map((label, index) => {
          const isBooked = booked.has(index);
          const isSelected =
            !!pending && index >= pending.start && index <= pending.end;
          return (
            <li key={label}>
              <button
                type="button"
                disabled={isBooked}
                onClick={() => onSlotClick(index)}
                aria-pressed={isSelected}
                aria-label={`${label}, ${isBooked ? "booked" : isSelected ? "selected" : "available"}`}
                className={`flex w-full flex-col items-center gap-1 rounded-sm border px-1.5 py-2.5 text-center transition-colors ${
                  isBooked
                    ? "cursor-not-allowed border-navy-900/10 bg-navy-900/[0.03] text-navy-900/30"
                    : isSelected
                      ? "border-amber-500 bg-amber-400/20 text-amber-600"
                      : "border-green-600/30 bg-green-500/[0.08] text-green-600 hover:bg-green-500/15"
                }`}
              >
                {isBooked ? (
                  <XIcon className="h-2.5 w-2.5" />
                ) : (
                  <DotIcon className="h-2.5 w-2.5" />
                )}
                <span className="tabular text-xs font-bold">
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {pending && (
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={onAdd}
            className="rounded-sm bg-navy-900 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream-100 transition-colors hover:bg-green-600"
          >
            Add to Booking
          </button>
          <button
            type="button"
            onClick={onClear}
            className="text-xs font-bold uppercase tracking-wide text-navy-900/50 transition-colors hover:text-stamp-600"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
