"use client";

import { useState, type FormEvent } from "react";
import { CartPanel } from "./CartPanel";
import { WalletIcon, BankIcon, CheckIcon } from "@/components/icons";
import type { BookingItem } from "./data";

export type PaymentMethod = "gcash" | "bank";

export type CustomerInfo = {
  name: string;
  phone: string;
  email: string;
  paymentMethod: PaymentMethod;
};

type Errors = Partial<Record<keyof CustomerInfo, string>>;

export function ReviewStep({
  cart,
  onBack,
  onConfirm,
}: {
  cart: BookingItem[];
  onBack: () => void;
  onConfirm: (info: CustomerInfo) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter the name for this booking.";
    if (!/^[0-9+()\-\s]{7,}$/.test(phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!paymentMethod)
      next.paymentMethod = "Choose how you'll pay the booking fee.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      onConfirm({ name, phone, email, paymentMethod: paymentMethod! });
    }, 700);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
      <button
        type="button"
        onClick={onBack}
        className="text-xs font-bold uppercase tracking-wide text-navy-900/60 transition-colors hover:text-green-600"
      >
        &larr; Edit your courts
      </button>

      <h1 className="mt-3 font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
        REVIEW &amp; PAY
      </h1>
      <p className="mt-2 max-w-xl text-sm text-navy-900/70 sm:text-base">
        Confirm what you&apos;re booking, tell us who it&apos;s for, and pay
        the booking fee to lock it in.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <fieldset className="rounded-sm border-2 border-navy-900 bg-cream-100 p-5 sm:p-7">
            <legend className="px-1 text-xs font-bold uppercase tracking-wide text-navy-900">
              Your Details
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                value={name}
                onChange={setName}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Phone Number"
                value={phone}
                onChange={setPhone}
                error={errors.phone}
                type="tel"
                autoComplete="tel"
              />
              <div className="sm:col-span-2">
                <Field
                  label="Email Address"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-sm border-2 border-navy-900 bg-cream-100 p-5 sm:p-7">
            <legend className="px-1 text-xs font-bold uppercase tracking-wide text-navy-900">
              Payment Method
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PaymentOption
                icon={WalletIcon}
                label="GCash"
                selected={paymentMethod === "gcash"}
                onSelect={() => setPaymentMethod("gcash")}
              />
              <PaymentOption
                icon={BankIcon}
                label="Bank Transfer"
                selected={paymentMethod === "bank"}
                onSelect={() => setPaymentMethod("bank")}
              />
            </div>
            {errors.paymentMethod && (
              <p className="mt-2 text-xs font-semibold text-stamp-600">
                {errors.paymentMethod}
              </p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-navy-900/55">
              The booking fee secures your reservation and is non-refundable
              once paid. Payment happens on the next screen.
            </p>
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-sm bg-green-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-green-400 disabled:cursor-wait disabled:bg-green-500/60 sm:w-auto"
          >
            {submitting ? "Confirming…" : "Pay & Confirm Booking"}
          </button>
        </form>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <CartPanel items={cart} title="Booking Summary" />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-navy-900/70">
        {label}
      </span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`mt-1.5 w-full rounded-sm border-2 bg-cream-100 px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-900/30 ${
          error
            ? "border-stamp-600"
            : "border-navy-900/25 focus:border-navy-900"
        }`}
      />
      {error && (
        <span className="mt-1 block text-xs font-semibold text-stamp-600">
          {error}
        </span>
      )}
    </label>
  );
}

function PaymentOption({
  icon: Icon,
  label,
  selected,
  onSelect,
}: {
  icon: typeof WalletIcon;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`flex items-center justify-between gap-3 rounded-sm border-2 px-4 py-3.5 text-left transition-colors ${
        selected
          ? "border-green-600 bg-green-500/10"
          : "border-navy-900/20 hover:border-navy-900/40"
      }`}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-navy-900" />
        <span className="text-sm font-bold text-navy-900">{label}</span>
      </span>
      {selected && <CheckIcon className="h-4 w-4 text-green-600" />}
    </button>
  );
}
