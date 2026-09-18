export function CourtLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="20" y="20" width="760" height="460" />
        <line x1="400" y1="20" x2="400" y2="480" />
        <circle cx="400" cy="250" r="60" />
        <rect x="20" y="150" width="120" height="200" />
        <rect x="20" y="195" width="55" height="110" />
        <path d="M140 150 A190 190 0 0 1 140 350" />
        <rect x="660" y="150" width="120" height="200" />
        <rect x="725" y="195" width="55" height="110" />
        <path d="M660 150 A190 190 0 0 0 660 350" />
        <line x1="330" y1="140" x2="330" y2="360" strokeDasharray="4 6" />
        <line x1="470" y1="140" x2="470" y2="360" strokeDasharray="4 6" />
      </g>
    </svg>
  );
}
