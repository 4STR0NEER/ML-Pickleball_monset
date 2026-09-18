"use client";

import { useState } from "react";
import { SportTabs } from "./SportTabs";
import { DateStrip } from "./DateStrip";
import { SlotGrid } from "./SlotGrid";
import { CartPanel } from "./CartPanel";
import {
  SPORTS,
  HOURS,
  getBookedIndices,
  isoDate,
  type Sport,
  type BookingItem,
} from "./data";

type Range = { start: number; end: number };

function canSelectRange(booked: Set<number>, start: number, end: number) {
  for (let i = start; i <= end; i++) {
    if (booked.has(i)) return false;
  }
  return true;
}

let nextId = 1;

export function BuildStep({
  cart,
  onAddItem,
  onRemoveItem,
  onContinue,
}: {
  cart: BookingItem[];
  onAddItem: (item: BookingItem) => void;
  onRemoveItem: (id: string) => void;
  onContinue: () => void;
}) {
  const [sport, setSport] = useState<Sport>("pickleball");
  const [date, setDate] = useState(() => isoDate(new Date()));
  const [pending, setPending] = useState<Record<string, Range>>({});

  const key = (court: string) => `${sport}|${court}|${date}`;

  function handleSlotClick(court: string, index: number) {
    const booked = getBookedIndices(sport, court, date);
    if (booked.has(index)) return;
    const k = key(court);

    setPending((p) => {
      const current = p[k];

      if (!current) {
        return { ...p, [k]: { start: index, end: index } };
      }

      if (index >= current.start && index <= current.end) {
        return { ...p, [k]: { start: current.start, end: index } };
      }

      const newStart = Math.min(current.start, index);
      const newEnd = Math.max(current.end, index);
      if (canSelectRange(booked, newStart, newEnd)) {
        return { ...p, [k]: { start: newStart, end: newEnd } };
      }
      return { ...p, [k]: { start: index, end: index } };
    });
  }

  function handleAdd(court: string) {
    const k = key(court);
    const range = pending[k];
    if (!range) return;
    onAddItem({
      id: `item-${nextId++}`,
      sport,
      court,
      dateIso: date,
      start: range.start,
      end: range.end,
    });
    setPending((p) => {
      const next = { ...p };
      delete next[k];
      return next;
    });
  }

  function handleClear(court: string) {
    const k = key(court);
    setPending((p) => {
      const next = { ...p };
      delete next[k];
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
      <h1 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
        BUILD YOUR BOOKING
      </h1>
      <p className="mt-2 max-w-xl text-sm text-navy-900/70 sm:text-base">
        Pick a sport, a date, and an open block of hours. Add as many courts
        or fields as you need before you check out.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <SportTabs selected={sport} onSelect={setSport} />
          <div className="mt-5">
            <DateStrip selected={date} onSelect={setDate} />
          </div>

          <div className="mt-6 rounded-sm border-2 border-navy-900 bg-cream-100 px-5 sm:px-7 lg:max-h-[65vh] lg:overflow-y-auto">
            {SPORTS[sport].courts.map((court) => (
              <SlotGrid
                key={court}
                courtLabel={court}
                booked={getBookedIndices(sport, court, date)}
                pending={pending[key(court)]}
                onSlotClick={(i) => handleSlotClick(court, i)}
                onAdd={() => handleAdd(court)}
                onClear={() => handleClear(court)}
              />
            ))}
          </div>

          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-navy-900/55">
            <span>Available hours: {HOURS[0]} to 12 AM</span>
          </p>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <CartPanel items={cart} onRemove={onRemoveItem} />
          <p className="mt-3 text-xs leading-relaxed text-navy-900/55">
            No temporary holds: these hours stay open to everyone else until
            you complete payment on the next step.
          </p>
          <button
            type="button"
            onClick={onContinue}
            disabled={cart.length === 0}
            className="mt-4 w-full rounded-sm bg-green-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-green-400 disabled:cursor-not-allowed disabled:bg-navy-900/15 disabled:text-navy-900/40"
          >
            Continue to Review ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );
}
