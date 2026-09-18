import { CartPanel } from "./CartPanel";
import { ShieldIcon } from "@/components/icons";
import type { BookingItem } from "./data";
import type { CustomerInfo } from "./ReviewStep";

export function ConfirmedStep({
  cart,
  info,
  reference,
  onRestart,
}: {
  cart: BookingItem[];
  info: CustomerInfo;
  reference: string;
  onRestart: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:px-8 sm:py-16">
      <ShieldIcon className="mx-auto h-14 w-14 text-green-500" />
      <h1 className="mt-5 font-display text-4xl tracking-tight text-navy-900 sm:text-5xl">
        BOOKING CONFIRMED
      </h1>
      <p className="mt-3 text-sm text-navy-900/70 sm:text-base">
        Reference{" "}
        <span className="tabular font-bold text-navy-900">{reference}</span>.
        A copy of this confirmation goes to {info.email}.
      </p>

      <div className="mt-8 text-left">
        <CartPanel items={cart} title="What You Booked" />
      </div>

      <div className="mt-6 rounded-sm border-2 border-amber-500 bg-amber-400/10 p-5 text-left text-sm text-navy-900">
        <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
          Payment Placeholder
        </p>
        <p className="mt-1.5 leading-relaxed text-navy-900/80">
          This demo doesn&apos;t process a real{" "}
          {info.paymentMethod === "gcash" ? "GCash" : "bank transfer"}{" "}
          payment. In production, this screen only appears once the payment
          API confirms the booking fee was received, exactly as described in
          the automation goal: no manual admin checking required.
        </p>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 rounded-sm bg-navy-900 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream-100 transition-colors hover:bg-green-600"
      >
        Book Another Session
      </button>
    </div>
  );
}
