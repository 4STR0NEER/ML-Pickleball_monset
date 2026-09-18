import { BoltIcon, ShieldIcon, WalletIcon, BankIcon } from "./icons";

const points = [
  {
    icon: BoltIcon,
    title: "Instant confirmation",
    body: "No temporary holds and no waiting period. Payment is what confirms your reservation.",
  },
  {
    icon: ShieldIcon,
    title: "One booking system",
    body: "Online and walk-in reservations run through the exact same availability, so nothing is double-booked.",
  },
];

export function TrustPayment() {
  return (
    <section className="bg-navy-900 py-20 text-cream-100 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl">
              PAY YOUR WAY,
              <br />
              <span className="text-green-400">CONFIRMED RIGHT AWAY.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 border-t border-dashed border-cream-100/25 pt-6">
              <span className="inline-flex items-center gap-3">
                <WalletIcon className="h-8 w-8 text-green-400" />
                <span className="text-sm font-bold">GCash</span>
              </span>
              <span className="inline-flex items-center gap-3">
                <BankIcon className="h-8 w-8 text-green-400" />
                <span className="text-sm font-bold">Bank Transfer</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/60">
              The booking fee secures your reservation and is non-refundable
              once paid.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-8 border-t border-dashed border-cream-100/25 pt-8 sm:grid-cols-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {points.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="h-8 w-8 text-amber-400" />
                <dt className="mt-4 text-base font-bold text-cream-100">
                  {title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-cream-100/65">
                  {body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
