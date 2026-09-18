export type Sport = "basketball" | "futsal" | "pickleball";

export type BookingItem = {
  id: string;
  sport: Sport;
  court: string;
  dateIso: string;
  start: number;
  end: number;
};

export function formatDate(dateIso: string): string {
  const d = new Date(`${dateIso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatRange(start: number, end: number): string {
  return `${hourLabel(start)} – ${hourLabel(end + 1)}`;
}

export function durationHours(start: number, end: number): number {
  return end - start + 1;
}

export const SPORTS: Record<
  Sport,
  { label: string; unit: string; courts: string[] }
> = {
  basketball: {
    label: "Basketball",
    unit: "Court",
    courts: ["Court 1", "Court 2", "Court 3"],
  },
  futsal: {
    label: "Futsal",
    unit: "Field",
    courts: ["Field 1", "Field 2"],
  },
  pickleball: {
    label: "Pickleball",
    unit: "Court",
    courts: [
      "Court 1",
      "Court 2",
      "Court 3",
      "Court 4",
      "Court 5",
      "Court 6",
      "Court 7",
      "Court 8",
      "Court 9",
    ],
  },
};

// Start times for each hourly slot. A booking of the last slot runs
// 11 PM - 12 AM, matching the facility's real 4PM-12AM operating window.
export const HOURS = [
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
] as const;

export const END_LABEL = "12 AM";

export function hourLabel(index: number): string {
  return index >= HOURS.length ? END_LABEL : HOURS[index];
}

export function nextDays(count: number, from = new Date()): Date[] {
  const days: Date[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(from);
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

export function isoDate(d: Date): string {
  // Local calendar date (not UTC): toISOString() would shift the date
  // across midnight for any timezone ahead of UTC, e.g. PH time (UTC+8).
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Small deterministic string hash so mock availability is stable across
// renders (no Math.random, which would cause a server/client mismatch).
function hashString(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (Math.imul(h, 31) + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Illustrative-only mock availability: deterministically "books" 1-3 hours
 * per court/date so the demo has a mix of open and booked slots. Replace
 * with real availability data once the reservation backend exists.
 */
export function getBookedIndices(
  sport: Sport,
  court: string,
  dateIso: string,
): Set<number> {
  const h = hashString(`${sport}|${court}|${dateIso}`);
  const count = 1 + (h % 3);
  const booked = new Set<number>();
  let seed = h >>> 0;
  while (booked.size < count) {
    seed = (Math.imul(seed, 1103515245) + 12345) >>> 0;
    booked.add(seed % HOURS.length);
  }
  return booked;
}
