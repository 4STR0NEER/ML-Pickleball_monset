type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BasketballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12.5" stroke="currentColor" {...stroke} />
      <path
        d="M16 3.5v25M3.5 16h25M6.3 7.3c4 4.5 4 12.9 0 17.4M25.7 7.3c-4 4.5-4 12.9 0 17.4"
        stroke="currentColor"
        {...stroke}
      />
    </svg>
  );
}

export function FutsalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12.5" stroke="currentColor" {...stroke} />
      <path
        d="M16 9.6 21 13l-2 5.9h-6L11 13z"
        stroke="currentColor"
        {...stroke}
      />
      <path
        d="M16 9.6V5.2M21 13l3.9-2.8M19 18.9l1.5 4.3M13 18.9l-1.5 4.3M11 13 7.1 10.2"
        stroke="currentColor"
        {...stroke}
      />
    </svg>
  );
}

export function PickleballIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M12.5 4.5c5 0 9 4 9 9 0 4.5-3.2 8.2-7.4 8.9L12.5 27l-3.6-3.6 4.9-4.9C9.6 17.8 6 14.1 6 9.6c0-1.6.6-3 1.7-4"
        stroke="currentColor"
        {...stroke}
      />
      <circle cx="14.2" cy="11.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="18.4" cy="10.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.6" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15.6" r="1.1" fill="currentColor" stroke="none" />
      <path d="m8.9 23.4-3.4 3.4" stroke="currentColor" {...stroke} />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" {...stroke} />
      <path d="M13 10.8v10.4l9-5.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="5" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WalletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="8" width="24" height="17" rx="2.5" stroke="currentColor" {...stroke} />
      <path d="M4 13h24" stroke="currentColor" {...stroke} />
      <circle cx="22.5" cy="18.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BankIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4 12 16 5l12 7" stroke="currentColor" {...stroke} />
      <path
        d="M6 12v12M12 12v12M20 12v12M26 12v12M3.5 27h25"
        stroke="currentColor"
        {...stroke}
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="6.5" width="24" height="21" rx="2.5" stroke="currentColor" {...stroke} />
      <path d="M4 12.5h24M10 3.5v5M22 3.5v5" stroke="currentColor" {...stroke} />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M17.5 4 8 18.5h7L14.5 28 24 13.5h-7z"
        stroke="currentColor"
        {...stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 4l11 4v8.5C27 24 22.4 27.8 16 29c-6.4-1.2-11-5-11-12.5V8z"
        stroke="currentColor"
        {...stroke}
        strokeLinejoin="round"
      />
      <path d="m11.5 16 3 3 6-6.5" stroke="currentColor" {...stroke} />
    </svg>
  );
}

export function FloodlightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 -4 40 40" className={className} aria-hidden="true">
      <path d="M20 36V17" stroke="currentColor" {...stroke} />
      <rect
        x="8"
        y="7"
        width="24"
        height="10"
        rx="1.5"
        stroke="currentColor"
        {...stroke}
      />
      <path
        d="M11 7V4.5M20 7V4.5M29 7V4.5"
        stroke="currentColor"
        {...stroke}
      />
      <path
        d="M12 2.5 9 -1M20 2 20 -2M28 2.5 31 -1"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.6"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" {...stroke} />
    </svg>
  );
}
