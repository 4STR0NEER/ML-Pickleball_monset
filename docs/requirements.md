Sports Facility Reservation System
Consolidated Requirements Brief
1. Project Goal

Build a website for ML Lifestyle Park that allows customers to easily view facility availability and reserve courts or fields online.

The system should replace the current Facebook/POS-heavy booking process with a more direct online experience while reducing the amount of manual work required from administrators.

The three main goals are:

Good customer booking experience
Better online/site visibility
Reduced manual administrative workload
2. Facilities

The facility offers:

3 basketball courts
2 futsal fields
9 pickleball courts

Customers must be able to select the specific court or field they want to reserve.

A single customer may also reserve multiple facilities within one booking.

3. Operating Hours

The facility operates:

Every day, 4:00 PM–12:00 AM Philippine Time (UTC+8).

The reservation system should use Philippine time as the canonical timezone when determining availability.

4. Booking Model

Reservations are based on hourly availability.

The customer determines:

Which sport/facility they want
Which specific court/field
Date
Start time
End time/duration

There are no recurring reservations.

The customer cannot request a time that is already occupied.

In other words, the system should not operate on an approval/request model:

If the slot is available, the customer can book it. If it is unavailable, it cannot be selected.

5. Availability Interface

The booking experience should use a visual calendar/time-slot interface rather than requiring customers to manually type start and end times.

For example:

Time	Court 1
4 PM	🟢 Available
5 PM	🟢 Available
6 PM	🔴 Booked
7 PM	🔴 Booked
8 PM	🟢 Available
9 PM	🟢 Available
10 PM	🟢 Available
11 PM	🟢 Available

The customer should be able to select a contiguous group of available slots.

This makes the available booking windows immediately understandable.

For example:

8 PM → 12 AM

can be selected as one continuous reservation if all four hours are available.

The UI should make it impossible to accidentally select a range containing an unavailable slot.

6. Multiple Facility Reservations

Customers can reserve multiple courts/fields in the same transaction.

For example:

Basketball Court 1
6 PM–8 PM

Basketball Court 2
6 PM–8 PM

The system should treat these as part of one booking/transaction while maintaining availability independently for each facility.

7. Payment and Confirmation

A reservation is not temporarily held.

There is no:

"You have 10 minutes to complete payment."

Instead, the reservation is either:

Available → Confirmed

or remains available/can be cancelled according to the applicable booking state.

The customer pays a booking fee/reservation payment to secure the slot.

Once the required payment is completed and verified, the reservation becomes confirmed.

Cancellation

The booking fee/reservation payment is non-refundable.

8. Online Payment

The website should support online payment methods such as:

GCash
Bank transfer

Payment verification should ideally happen through an API integrated directly into the website, rather than requiring administrators to manually check every payment.

The goal is to make payment verification as automated as reasonably possible.

9. Walk-In Bookings

Walk-in customers use the same reservation system as online customers.

The distinction is primarily how the customer interacts with the facility.

A walk-in:

Selects an available court/field and time
Makes the reservation
Pays before using the facility
Receives the confirmed booking

This means the admin system should not need a completely separate "walk-in booking" workflow.

Staff should be able to create/manage the same type of reservation on behalf of a walk-in customer.

10. Customer Information

Only three customer details are required:

Name
Phone number
Email address

The system should avoid collecting unnecessary information during checkout.

11. Administrative System

The admin side should provide visibility over:

Reservations
Court/field schedules
Availability
Customer information
Payment status
Cancellations

The system should minimize manual intervention wherever possible.

In particular, administrators should not have to manually coordinate every booking through Facebook/messages and then manually translate those conversations into reservations.

12. Website Role

The website isn't just a booking form.

It should serve as the facility's primary online presence where customers can:

Discover the facility → View information → See availability → Book → Pay → Receive confirmation

This addresses the site's visibility goal while making the reservation experience self-contained.

Core User Flow

The resulting customer journey is approximately:

Landing Page

↓

Choose Sport

↓

Choose Date

↓

View Available Courts/Fields

↓

Select Specific Court/Field

↓

Select Available Time Range

↓

Add Additional Courts/Fields if Needed

↓

Review Booking

↓

Enter Name + Phone + Email

↓

Pay Booking Fee

↓

Payment Verification

↓

Reservation Confirmed

↓

Confirmation / Booking Details

Core System Logic

At the heart of the application is essentially:

Facility
    ↓
Date
    ↓
Time Slots
    ↓
Availability
    ↓
Customer Selection
    ↓
Payment
    ↓
Confirmed Reservation

And availability is determined independently for each physical facility.

For example:

Basketball Court 1
    Sept 20
    4 PM ─ Available
    5 PM ─ Available
    6 PM ─ Booked
    7 PM ─ Booked
    8 PM ─ Available

Basketball Court 2
    Sept 20
    4 PM ─ Available
    5 PM ─ Available
    6 PM ─ Available
    7 PM ─ Available
    8 PM ─ Available

A booking on Court 1 therefore doesn't affect Court 2's availability.

Product Principles

The answers from the three rounds point toward a few important principles:

1. Availability-first

The customer chooses from what actually exists rather than submitting a request.

2. Visual over manual

Customers should see availability and select it, rather than manually entering times.

3. One reservation system

Online bookings and walk-ins should use the same underlying reservation model.

4. Payment secures the reservation

No temporary holds. A completed booking payment establishes the reservation.

5. Automation over administration

Payment verification, availability calculations, confirmations, and booking records should be handled by the system wherever practical.

6. Keep checkout simple

Only collect the customer information actually needed.