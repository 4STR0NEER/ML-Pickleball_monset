---
name: ML Lifestyle Park
description: Book basketball, futsal, and pickleball courts online, styled as a barangay court's tarpaulin bulletin wall at night.
colors:
  navy-950: "#0a1420"
  navy-900: "#0e1e30"
  navy-800: "#14304a"
  navy-700: "#1c4362"
  cream-100: "#fbf4e6"
  cream-200: "#f4e9d4"
  cream-300: "#e9dabd"
  green-600: "#2f7d3c"
  green-500: "#3f9a4b"
  green-400: "#63b869"
  amber-500: "#e8a13a"
  amber-400: "#f2b95a"
  stamp-600: "#a8412c"
  stamp-500: "#c25139"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Work Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Work Sans, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "2px"
spacing:
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.green-500}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.green-400}"
  button-dark:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.cream-100}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-dark-hover:
    backgroundColor: "{colors.green-600}"
---

# Design System: ML Lifestyle Park

## Overview

**Creative North Star: "The Floodlit Bulletin"**

ML Lifestyle Park's site is built as a barangay court's bulletin wall after dark: bold hand-set signage type, ink-on-paper contrast, and the amber wash of floodlights against a night sky. It refuses two ruts at once, the clean-SaaS booking-form hero every scheduling tool defaults to, and the flat, decoration-free schedule table that would be its most boring opposite. The system stays legible and functional (this is still, at its core, a booking tool people rely on) while committing fully to an active, energetic, distinctly Filipino recreational-sports identity.

Color is deliberately full-commitment for a Persuade surface: navy carries authority and structure, cream is the paper the bulletin is printed on, green is reserved for the single "available / go" signal (lifted directly from the facility's own logo), and amber marks the floodlight moment where the day turns into a night session. Availability states never rely on color alone: an open slot carries a dot glyph, a booked slot carries an X glyph, a selected slot carries both amber color and its own glyph, so the system reads correctly even without color vision.

**Key Characteristics:**
- Heavy condensed display caps (Anton) for every headline, set like hand-painted court signage
- Navy/cream/green as the fixed brand palette, amber reserved for the floodlight/night accent
- Dot/X iconography doubles every green/red availability signal so state never depends on color alone
- Authored court-line geometry (basketball key, futsal box, pickleball kitchen) as the only decorative texture, never photographic or illustrative filler
- Dashed hairlines standing in for a ticket stub's perforation, used as the system's one recurring divider motif

## Colors

Full palette strategy (not restrained, not drenched): four named roles, each with a fixed job. No incidental colors outside this list.

### Primary
- **Court Green** (`#3f9a4b`, `green-500`): the only "available / go" signal in the system. Primary CTA fill, available-slot fill and border, the one color allowed to mean "you can act here."

### Secondary
- **Floodlight Amber** (`#f2b95a`, `amber-400`): the night-transition accent and the booking flow's "pending, not yet added" selection state. Hero and closing-CTA glow, the in-progress slot range before it's added to a booking, floodlight-fixture icon strokes. Never used for a primary action.

### Tertiary
- **Stamp Red** (`#a8412c`, `stamp-600`): reserved entirely for error and void states, echoing a ticket stub's ink cancellation stamp. Form validation errors, invalid input borders, a "remove from booking" hover state. Never used for anything that isn't a problem or a removal.

### Neutral
- **Bulletin Navy** (`#0e1e30`, `navy-900`): primary text-on-cream color, dark section backgrounds, card fills.
- **Deep Navy** (`#0a1420`, `navy-950`): the darkest hero/footer ground, the base the floodlight gradient sits on.
- **Poster Cream** (`#fbf4e6`, `cream-100`): the page's paper ground on light sections. Confirmed brand color from the facility's own logo, not a default off-white.
- **Cream Card** (`#f4e9d4`, `cream-200`): secondary light-section ground, used to separate adjacent cream sections (e.g. the walk-in panel) from the page's base cream.

### Named Rules
**The One Green Rule.** Court Green means "available" or "primary action" and nothing else. It never appears as decoration, a link color, or a secondary accent.

**The Dual-Coding Rule.** Every available/booked/selected state pairs its color with a distinct icon glyph (dot / X / dot-in-amber). No availability state may be communicated by color alone.

**The Stamp-Red Rule.** Red exists only for errors and removals. It never doubles as a fourth availability state or a decorative accent.

## Typography

**Display Font:** Anton (fallback: Impact, sans-serif)
**Body Font:** Work Sans (fallback: Segoe UI, sans-serif)

**Character:** Anton is the hand-painted court-signage voice, heavy, condensed, all-caps, used only for headlines and large numerals. Work Sans is the workhorse voice for everything a visitor reads at length or interacts with, chosen so the booking UI embedded in this Persuade page stays legible over style.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 6vw, 6rem)`, line-height 0.92): hero and section headlines, always set in caps, always Anton.
- **Title** (400, 1.5–2rem, Anton): sub-section headlines (e.g. facility panel titles, card headings).
- **Body** (400/600, 1–1.125rem, line-height 1.6, Work Sans): paragraph copy, max width kept near 60–65ch.
- **Label** (700, 0.75rem, letter-spacing 0.05em, uppercase, Work Sans): short eyebrow-free micro-labels only (e.g. "Open Daily", "Timezone"). Kept under ~20 characters; never a full sentence set in caps.

### Named Rules
**The Short-Caps Rule.** Uppercase, tracked labels stay short (a phrase, not a sentence). Any caption longer than a label reverts to normal sentence case.

## Layout

Single-column content stacked in full-bleed, alternating navy/cream sections (dark hero, cream facilities, dark how-it-works, cream walk-ins, dark trust/payment, dark closing CTA) so the scroll paces like a printed sheet turning between ink and paper. Content is capped at `max-w-6xl` (72rem) and gutter-padded (`px-5` mobile, `px-8` desktop). Grids collapse to a single column below `sm`, to two at `sm`, and to their full multi-column form at `lg` (1024px+). The hero and closing CTA are the only full-bleed, no-inner-grid-cap moments.

## Elevation & Depth

Flat by design; the bulletin-wall metaphor has no drop shadows. Depth comes from ink density and layering instead: solid navy panels sit on cream grounds with a 2px solid border (no shadow), dashed hairlines mark ticket-stub perforation between sub-sections, and a very low-opacity halftone dot pattern (`.halftone`, 12% multiply) is available for surfaces that want print texture without a shadow system.

### Named Rules
**The No-Shadow Rule.** Nothing in this system casts a soft blurred shadow. Separation comes from a solid 2px border or a full color-block change, never a shadow.

## Shapes

Corners stay nearly square (`rounded-sm`, 2px) everywhere, cards and buttons alike, reinforcing the printed/stamped character rather than a soft app-UI language. Dividers are either a solid 1–2px rule or a dashed rule (ticket-perforation reference); no dotted or double rules.

## Components

### Buttons
- **Shape:** 2px radius (`rounded-sm`), never pill-shaped.
- **Primary:** Court Green fill, Deep Navy text, bold uppercase label, `14px 24px` padding.
- **Primary hover:** fill shifts to the lighter `green-400`.
- **Dark/secondary (nav, footer context):** Bulletin Navy fill, Poster Cream text; hover shifts to Court Green fill.
- **Ghost (e.g. "Watch the court tour"):** no fill, icon + label, hover shifts text and icon to Floodlight Amber.

### Availability Slot (signature component)
The system's one true signature component: an hour tile that is always one of three states, and always dual-coded.
- **Available:** green-tinted border/fill (`green-500` at low opacity) + a small solid dot glyph. Clickable.
- **Booked:** neutral cream-on-navy (or navy-on-cream) at low opacity + a small X glyph, disabled and never clickable-looking.
- **Pending/selected (in the booking flow, before it's added):** amber border/fill + the dot glyph in amber.
Slots are laid out in an 8-per-row grid on desktop, 4-per-row on mobile, one row per court/field so multiple facilities' independent schedules are visually obvious side by side. On `/book`, clicking an available slot starts or extends a contiguous range for that court only; clicking a non-adjacent available slot starts a new range rather than silently failing, so it is structurally impossible to select across a booked slot.

### Cards / Panels
- **Corner style:** 2px radius.
- **Background:** Bulletin Navy fill on cream sections (facility and stat panels); cream fill with a 2px navy border on navy sections (the walk-in panel, form fieldsets).
- **Shadow strategy:** none (see Elevation & Depth).
- **Border:** 2px solid, no soft/blurred edges.
- **Internal padding:** 1.5rem mobile, 2–2.5rem desktop.

### Navigation
Sticky cream header with a 2px navy bottom border, Anton wordmark at left, Work Sans bold nav links, a solid navy "Check Availability" button at right that turns Court Green on hover. Collapses to logo + CTA only below `md`. The Operate-mode booking flow (`/book`) uses a quieter variant: wordmark + a single "Back to site" link, no marketing nav, so nothing competes with the task.

### Stepper (booking flow)
A 3-step progress indicator (Build Booking → Review & Pay → Confirmed): a numbered circle per step, filled navy when active, filled Court Green with a drawn checkmark glyph when done, low-opacity navy when upcoming. Connected by thin 1px navy rules, never a filled progress bar.

### Form Fields (booking flow)
- **Style:** 2px border, cream fill, 2px radius, uppercase bold micro-label above the field.
- **Focus:** border shifts to solid Bulletin Navy (no glow/shadow).
- **Error:** border and helper text switch to Stamp Red; the field keeps its layout position so the page never jumps.
- **Selection cards (payment method):** 2px border, becomes Court Green border + tinted fill + a checkmark glyph when chosen; never a plain radio input.

## Do's and Don'ts

### Do:
- **Do** keep Court Green reserved for "available" and primary actions only.
- **Do** pair every availability color with a dot/X glyph so state never depends on color alone.
- **Do** set all headlines in Anton, uppercase, at the display scale.
- **Do** use the authored court-line SVG geometry as the only decorative background texture.
- **Do** keep corners near-square (2px) across buttons, cards, and slot tiles.

### Don't:
- **Don't** introduce a color outside Navy / Cream / Green / Amber / Stamp Red.
- **Don't** use Stamp Red for anything other than an error or a removal action.
- **Don't** add drop shadows or soft glows to cards or buttons; separation comes from borders and color blocks.
- **Don't** use a pill-shaped or heavily rounded button; this system reads as printed, not app-soft.
- **Don't** set long, sentence-length copy in uppercase; short labels only.
- **Don't** replace the labeled hero video placeholder with a stock photo; it stays an honest placeholder until real 3D/video footage exists.
