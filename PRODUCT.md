# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React (Next.js) + Tailwind CSS — user's explicit choice, made for its booking-UI ecosystem (calendars, forms, state) and straightforward path to a backend/DB and payment API integrations.

## Users

- **Customers** (online bookers and walk-ins) at ML Lifestyle Park who want to reserve a basketball court, futsal field, or pickleball court without messaging the facility on Facebook or calling ahead. They need to see real, current availability and lock in a slot in one sitting.
- **Facility administrators/staff** who need visibility into reservations, schedules, availability, customer info, payment status, and cancellations, and who currently do this manually via Facebook/POS conversations. Staff also create bookings on behalf of walk-in customers using the same system.

## Product Purpose

Replace the current Facebook-message/POS-heavy booking process with a self-serve online reservation system for a multi-sport facility (3 basketball courts, 2 futsal fields, 9 pickleball courts). Success means a customer can discover the facility, see live availability, select a court/field and time, pay, and receive confirmation without any manual back-and-forth with staff — and administrators spend far less manual effort coordinating and translating bookings.

## Positioning

An availability-first, no-approval booking system: if a slot shows available, it can be selected and paid for immediately — there is no request/approval step and no temporary hold. Online bookings and walk-ins run through the exact same reservation model, so the facility does not maintain two parallel booking workflows.

## Operating Context

- Facility operates every day, 4:00 PM–12:00 AM Philippine Time (UTC+8); PH time is the canonical timezone for all availability logic.
- Bookings are hourly-slot based with no recurring reservations.
- A customer can reserve multiple courts/fields in a single transaction; availability is tracked independently per physical facility (a booking on Court 1 never affects Court 2).
- Payment is via GCash and bank transfer, ideally verified through an API rather than manual admin checking.
- Walk-in customers go through the same reservation model as online customers; staff enter the booking on their behalf, then the walk-in pays before using the facility.

## Capabilities and Constraints

- Facilities: 3 basketball courts, 2 futsal fields, 9 pickleball courts — each independently selectable and independently scheduled.
- Availability must be shown as a visual calendar/time-slot grid, not free-text time entry (see brief's example: 🟢 Available / 🔴 Booked per hour, per court).
- Customers select a **contiguous** run of available hours; the UI must make it structurally impossible to select a range that includes a booked slot.
- Multiple facility reservations combine into one booking/transaction while each facility's availability stays independent.
- No temporary holds: a slot is either available or confirmed-via-payment. There is no "10 minutes to pay" countdown state.
- The booking fee/reservation payment is **non-refundable**; cancellation does not return the fee.
- Checkout collects only three fields: name, phone number, email — nothing else.
- Admin surface must give visibility over reservations, court/field schedules, availability, customer information, payment status, and cancellations, with minimal manual intervention required.

## Brand Commitments

- Facility name: **ML Lifestyle Park** (confirmed over the working project name "ML Pickleball").
- Existing logo (`public/brand/logo-source.png`): a navy silhouette of a figure mid-leap/dance forming a dynamic, active pose, paired with a green leaf swoosh, set inside a circular tracked slab-serif wordmark "ML LIFESTYLE PARK," on a warm cream ground.
- Palette direction: **navy, cream, green**, per the logo — confirmed as the governing direction; exact tonal values are this surface's decision to make, not yet fixed by the user.

## Evidence on Hand

- No real facility photography, video, or testimonials provided yet. The hero section requires a 3D/cinematic video treatment of the facility; this must ship as a clearly-labeled placeholder until real footage is produced.
- No pricing schedule provided — do not invent specific fee amounts; use the brief's own language ("booking fee / reservation payment") without a number.
- No testimonials, press, or customer logos exist — none should be fabricated.

## Product Principles

1. **Availability-first** — the customer chooses from what actually exists rather than submitting a request.
2. **Visual over manual** — availability is seen and tapped, never typed.
3. **One reservation system** — online bookings and walk-ins share one underlying reservation model.
4. **Payment secures the reservation** — no temporary holds; a completed payment is what establishes the booking.
5. **Automation over administration** — payment verification, availability calculation, and confirmations are system-owned wherever practical, not staff-owned.
