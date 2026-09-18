import { SPORTS, formatDate, formatRange, type BookingItem } from "./data";
import { XIcon } from "@/components/icons";

export function CartPanel({
  items,
  onRemove,
  title = "Your Booking",
}: {
  items: BookingItem[];
  onRemove?: (id: string) => void;
  title?: string;
}) {
  return (
    <div className="rounded-sm border-2 border-navy-900 bg-cream-100">
      <p className="border-b-2 border-navy-900 px-5 py-3 text-xs font-bold uppercase tracking-wide text-navy-900">
        {title}
      </p>
      {items.length === 0 ? (
        <p className="px-5 py-8 text-center text-sm text-navy-900/50">
          No courts added yet. Pick a sport and time to get started.
        </p>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-3 border-b border-dashed border-navy-900/20 px-5 py-3.5 last:border-none"
            >
              <div>
                <p className="text-sm font-bold text-navy-900">
                  {SPORTS[item.sport].label} — {item.court}
                </p>
                <p className="mt-0.5 text-xs text-navy-900/60">
                  {formatDate(item.dateIso)},{" "}
                  {formatRange(item.start, item.end)}
                </p>
              </div>
              {onRemove && (
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${SPORTS[item.sport].label} ${item.court}`}
                  className="mt-0.5 text-navy-900/40 transition-colors hover:text-stamp-600"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
