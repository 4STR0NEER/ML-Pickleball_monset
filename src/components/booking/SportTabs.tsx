"use client";

import { BasketballIcon, FutsalIcon, PickleballIcon } from "@/components/icons";
import { SPORTS, type Sport } from "./data";

const ICONS: Record<Sport, typeof BasketballIcon> = {
  basketball: BasketballIcon,
  futsal: FutsalIcon,
  pickleball: PickleballIcon,
};

export function SportTabs({
  selected,
  onSelect,
}: {
  selected: Sport;
  onSelect: (sport: Sport) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="radiogroup"
      aria-label="Choose a sport"
    >
      {(Object.keys(SPORTS) as Sport[]).map((sport) => {
        const Icon = ICONS[sport];
        const isActive = sport === selected;
        return (
          <button
            key={sport}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onSelect(sport)}
            className={`flex items-center gap-2 rounded-sm border-2 px-4 py-2.5 text-sm font-bold transition-colors ${
              isActive
                ? "border-navy-900 bg-navy-900 text-cream-100"
                : "border-navy-900/20 bg-cream-100 text-navy-900 hover:border-navy-900/50"
            }`}
          >
            <Icon className="h-5 w-5" />
            {SPORTS[sport].label}
          </button>
        );
      })}
    </div>
  );
}
