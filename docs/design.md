---
name: Nooqs Core v2
colors:
  # ── Surfaces ──────────────────────────────────
  surface: '#f7f9ff'
  surface-dim: '#c6dcf6'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d9eaff'
  surface-container-highest: '#cfe5ff'
  on-surface: '#051d30'
  on-surface-variant: '#424751'
  inverse-surface: '#1d3246'
  inverse-on-surface: '#e8f2ff'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#225eab'
  background: '#f7f9ff'
  on-background: '#051d30'
  surface-variant: '#cfe5ff'

  # ── Primary (Deep Blue — trust, structure, Work) ──
  primary: '#003d7c'
  on-primary: '#ffffff'
  primary-container: '#1254a1'
  on-primary-container: '#afcbff'
  inverse-primary: '#a9c7ff'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'

  # ── Secondary (Sky Blue — openness, Create) ──
  secondary: '#006687'
  on-secondary: '#ffffff'
  secondary-container: '#60cdff'
  on-secondary-container: '#005572'
  secondary-fixed: '#c1e8ff'
  secondary-fixed-dim: '#74d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'

  # ── Tertiary (Marigold — opportunity, availability, Gather) ──
  tertiary: '#5e3300'
  on-tertiary: '#ffffff'
  tertiary-container: '#7f4700'
  on-tertiary-container: '#ffbc7e'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb874'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'

  # ── Trade (Market Green — commerce, vendors) NEW ──
  trade: '#1e6b45'
  on-trade: '#ffffff'
  trade-container: '#a8f2c6'
  on-trade-container: '#00391f'

  # ── Park (Slate Blue — vehicles, utility) NEW ──
  park: '#44506b'
  on-park: '#ffffff'
  park-container: '#dbe2f5'
  on-park-container: '#1c2436'

  # ── Wellness (Soft Lavender — calm, restoration) NEW ──
  wellness: '#5d5a8c'
  on-wellness: '#ffffff'
  wellness-container: '#e4dfff'
  on-wellness-container: '#25215c'

  # ── Semantic ──────────────────────────────────
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  success: '#1e6b45'
  on-success: '#ffffff'
  success-container: '#a8f2c6'
  warning: '#7f4700'
  on-warning: '#ffffff'
  warning-container: '#ffdcc0'

  # ── Availability Signal (semantic alias) NEW ──
  # Marigold owns "available / bookable / act now" across the platform.
  available: '#ffb874'
  on-available: '#2d1600'
  available-strong: '#7f4700'
  on-available-strong: '#ffffff'

typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-md:
    # NEW — for dashboards, tables, financial figures
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    fontFeatureSettings: '"tnum"'   # tabular numerals
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px

rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px

spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  # NEW — density scale for professional/dashboard contexts
  dense-xs: 2px
  dense-sm: 6px
  dense-md: 12px
  dense-lg: 24px

motion:
  # NEW
  duration-fast: 120ms
  duration-base: 200ms
  duration-slow: 320ms
  easing-standard: cubic-bezier(0.2, 0, 0, 1)
  easing-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1)
  easing-exit: cubic-bezier(0.3, 0, 0.8, 0.15)
---

## Brand & Style

The brand personality is **Community-Centric, Agile, and Organised**. Nooqs
evokes "micro-opportunity" — the idea that small, underused spaces can become
vibrant hubs for work, creativity, commerce, gathering, and rest.

The design style blends **Corporate Modern** with **Soft Minimalism**. It
prioritises structural clarity to manage complex booking logistics while using
soft-edged, rounded elements to stay friendly and approachable.

Nooqs serves three distinct audiences, and the system is designed to flex
across all of them without losing brand coherence:

1. **Guests** — creators, remote workers, food truck operators, event
   organisers, drivers. Discovery-led, warm, image-rich.
2. **Individual hosts** — homeowners, studio owners, small landlords.
   Friendly, personal, control-oriented.
3. **Business & institutional hosts** — councils, restaurant groups,
   commercial landlords. Dense, operational, enterprise-credible.

One design language. Three tunings. See "Interface Contexts" below.

## Colors

The palette is derived from the logo's blue gradient, extended with three
category colours and a formalised availability signal.

*   **Primary (Deep Blue):** Primary actions, navigation, authoritative text.
    Trust and stability. Category colour for **Work**.
*   **Secondary (Sky Blue):** Active states, soft washes, highlights.
    Openness and fresh air. Category colour for **Create**.
*   **Tertiary (Marigold):** The colour of **opportunity**. Owns the
    "availability signal" role platform-wide: available slots, Book Now CTAs,
    live-availability badges, New chips, price tags. Category colour for
    **Gather**. Never used decoratively — if it's marigold, it's actionable
    or available.
*   **Trade (Market Green):** NEW. Category colour for **Trade** — food truck
    pitches, market stalls, pop-ups. Also doubles as the semantic success
    colour. Feels commercial and productive.
*   **Park (Slate Blue):** NEW. Category colour for **Park** — parking, EV
    charging, vehicle spaces. Practical and reliable.
*   **Wellness (Soft Lavender):** NEW. Category colour for **Wellness** —
    yoga rooms, calm spaces. Restorative and gentle.
*   **Neutral (Slate):** Body text and icons. Never pure black.
*   **Surface:** White with ultra-light blue tints for container separation.

### Colour usage rules

1. Marigold means "you can act on this." Do not use it for static decoration.
2. Category colours appear on chips, icons, and accents only — never as
   large fills. The app should read as blue-first with category colour as
   seasoning.
3. Trade green is shared with the semantic success role. This is intentional:
   a completed booking and a trading opportunity both signal "good outcome."
4. Error red appears only for genuine errors and destructive actions.

## The Category System

Six categories, each with a fixed icon, colour, label, and one-line
descriptor. These appear in the Purpose Selector, search filters, listing
chips, and category badges. Treatment is identical everywhere.

| Category | Colour token | Icon direction (Lucide) | Label line |
|---|---|---|---|
| Work Nooqs | primary | `laptop` / `briefcase` | "A quiet space to focus" |
| Create Nooqs | secondary | `camera` / `mic` | "A space to shoot, record, or make" |
| Gather Nooqs | tertiary | `users` / `party-popper` | "A space to bring people together" |
| Trade Nooqs | trade | `store` / `truck` | "A pitch to trade and sell" |
| Park Nooqs | park | `car` / `parking-circle` | "A space for your vehicle" |
| Wellness Nooqs | wellness | `leaf` / `heart` | "A calm space to restore" |

Category chips: pill-shaped, `{category}-container` background,
`on-{category}-container` text, 12px label-sm, icon at 16px, 8px horizontal
padding either side of a 4px icon-text gap.

## Typography

**Plus Jakarta Sans** at all levels. Soft rounded terminals bridge
"professional service" and "friendly community."

Headlines: bold with slightly tight tracking. Body: airy and legible.
Mobile: reduced display sizes to keep booking details above the fold.

NEW — `data-md` with tabular numerals is required for all dashboards, price
tables, earnings figures, and calendars, so columns of numbers align.

## Layout & Spacing

Fluid Grid, base-8 spacing.

*   **Mobile:** 4-column grid, 20px margins, full-width cards, vertical stacking.
*   **Tablet:** 8-column grid, 32px margins, 2xN card layouts.
*   **Desktop:** 12-column grid, 1280px max content width.

Spacing rhythm: related elements (label + input) 8px; distinct sections 48px.

NEW — **Dense mode** for business dashboards uses the `dense-*` scale:
table rows at 40px height, 12px section gaps, 24px between distinct panels.
Dense mode is a context, not a user toggle: it applies automatically to
business host and institutional interfaces.

## Elevation & Depth

Tonal layers plus soft ambient shadows tinted with primary blue
(#1254A1 at 8–12% opacity). No pure black shadows.

*   **Level 0 (Background):** #FFFFFF or #F8FBFF.
*   **Level 1 (Cards):** White, 1px border (#E2E8F0), no shadow.
*   **Level 2 (Interactive/Floating):** White, 12px blur, 4px Y-offset tinted
    shadow. Hover states, active booking cards.
*   **Level 3 (Modals/Overlays):** Light backdrop blur (glassmorphism) for
    booking confirmations and purpose selection.

## Shapes

Rounded throughout. Inputs and standard cards: 8px radius. Feature
containers: 16px. Chips and badges: full pill. No sharp 90° angles.

Exception (NEW): data tables in dense mode may use 4px (`sm`) radius on
row containers to preserve scannability.

## Interface Contexts (NEW)

### Guest context
Discovery-first. Large imagery, generous white space, marigold availability
signals, warm microcopy. Purpose Selector is the primary entry point.

### Individual host context
Same visual warmth, more structure. Calendar-first navigation. Earnings
shown with encouraging framing ("Your garden earned £240 this month").

### Business / institutional host context
Dense mode. Table-heavy views, tabular numerals, consolidated reporting,
team management, export actions. Marigold used only for genuine
calls-to-action. Reduced illustration. The tone target: **Linear meets
Airbnb** — operational, credible, still unmistakably Nooqs.

## Trust Indicators (NEW)

Consistent badge system across cards, profiles, listings, and messages:

*   **Verified individual host:** check-circle icon, primary blue, 16px.
*   **Verified business host:** building icon, primary blue, 16px, with
    "Business" label on profiles.
*   **Verified public body:** shield-check icon, primary blue, with
    "Council Verified" label. Reserved for councils and public institutions.
*   **Top-rated host:** star badge, marigold.
*   **New listing:** "New" chip, marigold container.
*   **Instant Book:** lightning icon, marigold, inline with price.
*   **Recurring available:** repeat icon, secondary blue, inline on cards.

Badges never stack more than three per card. Priority order:
verification > top-rated > availability signals.

## Components

*   **Buttons:** Primary — Primary Blue fill, white text, 8px radius.
    Secondary — Sky Blue ghost (border + text). Availability CTA ("Book Now",
    "Reserve Slot") — marigold `available-strong` fill, white text. Destructive
    — error red, confirmation required.
*   **Chips:** Category chips per the Category System table. Filter chips —
    secondary-container background, pill-shaped.
*   **Purpose Selector:** Signature component. Six category tiles with icon,
    colour accent, label, and descriptor line. Grid: 2×3 mobile, 3×2 tablet,
    6×1 desktop. Selected state: category-colour 2px border + container fill.
    Appears on home screen and as persistent search filter.
*   **Space Cards:** Two variants.
    *Compact* (search/lists): 1:1 image, category chip overlaid top-left,
    verified badge top-right, name, neighbourhood, marigold price tag,
    rating + count.
    *Expanded* (featured/preview): adds description line, trust badges,
    Instant Book and recurring indicators, host type label.
*   **Availability Calendar:** Light blue grid. Available slots — `available`
    marigold fill with `on-available` text. Selected — Primary Blue, white
    text. Unavailable — surface-container-high, muted text. Recurring holds —
    repeat icon watermark. Business variant adds per-slot utilisation and
    revenue figures in `data-md`.
*   **Input Fields:** 1px #CBD5E1 border, thickens to 2px Primary Blue on
    focus. External labels. Inline validation with success green / error red.
*   **Tables (NEW):** Business context only. 40px rows, `data-md` type,
    sticky headers, row hover in surface-container-low, right-aligned
    numerals, export action top-right.
*   **Badges & Price Tags:** Price tags always marigold container with
    on-tertiary-container text, positioned bottom-left on card imagery or
    inline in dense contexts.

## Iconography (NEW)

**Lucide** icon set, exclusively. 1.5px stroke weight, rounded caps and
joins, matching Plus Jakarta Sans geometry. Sizes: 16px (inline/badges),
20px (buttons/inputs), 24px (navigation), 32px (Purpose Selector,
empty states). Icons inherit text colour unless carrying category or
semantic meaning.

## Motion (NEW)

Motion vocabulary: **confident and calm**, reinforcing the "opening up"
theme. No bounce, no gimmicks.

*   Card hover: rise to Level 2, `duration-fast`, `easing-standard`.
*   Modal entry: fade + scale from 0.96, `duration-base`, `easing-emphasized`.
*   Calendar slot selection: instant fill, no delay.
*   Page transitions: 200ms crossfade maximum.
*   Purpose Selector tiles: 120ms colour/border transition on select.
*   Respect `prefers-reduced-motion`: all transitions collapse to opacity-only.

## Imagery (NEW)

*   Aspect ratios: 1:1 card thumbnails, 16:9 hero images, 4:3 gallery.
*   Host photo guidelines shipped in onboarding: natural light, wide angle
    showing the whole space, one detail shot, one "in use" shot if possible.
*   No generic stock photography in product surfaces.
*   Missing image fallback: surface-container fill with the category icon
    at 32px in the category colour — never a broken-image state.

## States (NEW)

*   **Empty states:** Category icon at 32px, one headline-sm line, one
    body-sm line, one clear action. Friendly, never apologetic.
    ("No Nooqs here yet. Be the first to list one.")
*   **Loading:** Skeleton screens matching final layout geometry, shimmer
    in surface-container → surface-container-high. No spinners on full pages.
*   **Errors:** Explain what happened, what to do next. Never blame the user.
    Error red reserved for the message accent, not full-screen washes.

## Voice & Tone (NEW)

One voice — a knowledgeable local friend who knows all the good spots —
tuned to three contexts:

*   **Guests:** Short, active, possibility-focused.
    "Find your Nooq." / "Book it. Use it. Love it."
*   **Individual hosts:** Practical, encouraging, control-focused.
    "Your space, your rules." / "See what your garage earned this week."
*   **Business hosts:** Professional, specific, efficiency-focused.
    "Manage every space in one place." / "Consolidated reporting, ready
    for your finance team."

Never: corporate jargon, exclamation-mark enthusiasm, cutesy wordplay
beyond the brand name itself.