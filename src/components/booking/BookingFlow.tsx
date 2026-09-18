"use client";

import { useState } from "react";
import { BookingHeader } from "./BookingHeader";
import { Stepper } from "./Stepper";
import { BuildStep } from "./BuildStep";
import { ReviewStep, type CustomerInfo } from "./ReviewStep";
import { ConfirmedStep } from "./ConfirmedStep";
import type { BookingItem } from "./data";

type Step = 1 | 2 | 3;

function makeReference() {
  const n = Math.floor(Math.random() * 9000 + 1000);
  return `MLP-${n}`;
}

export function BookingFlow() {
  const [step, setStep] = useState<Step>(1);
  const [cart, setCart] = useState<BookingItem[]>([]);
  const [info, setInfo] = useState<CustomerInfo | null>(null);
  const [reference, setReference] = useState("");

  function addItem(item: BookingItem) {
    setCart((c) => [...c, item]);
  }

  function removeItem(id: string) {
    setCart((c) => c.filter((item) => item.id !== id));
  }

  function confirmBooking(customer: CustomerInfo) {
    setInfo(customer);
    setReference(makeReference());
    setStep(3);
  }

  function restart() {
    setCart([]);
    setInfo(null);
    setStep(1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <BookingHeader />
      {step < 3 && (
        <div className="border-b border-navy-900/10">
          <Stepper current={step} />
        </div>
      )}

      <main className="flex-1">
        {step === 1 && (
          <BuildStep
            cart={cart}
            onAddItem={addItem}
            onRemoveItem={removeItem}
            onContinue={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <ReviewStep
            cart={cart}
            onBack={() => setStep(1)}
            onConfirm={confirmBooking}
          />
        )}
        {step === 3 && info && (
          <ConfirmedStep
            cart={cart}
            info={info}
            reference={reference}
            onRestart={restart}
          />
        )}
      </main>
    </div>
  );
}
