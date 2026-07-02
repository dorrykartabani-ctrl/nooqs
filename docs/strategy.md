# Nooqs — Product Strategy

**Version:** 1.0
**Status:** Foundational reference
**Companion documents:** `design.md`, `roadmap.md`

---

## 1. Concept

Nooqs is a purpose-driven marketplace for booking underused local spaces
by the hour, day, or project.

Guests come to Nooqs with an intent — to work, create, gather, trade,
park, or restore — and are matched to nearby spaces that support that
activity. Hosts unlock income from underused rooms, gardens, forecourts,
studios, halls, and parking spaces without needing to convert them into
full-time commercial venues.

### Working definition

> Nooqs is where you find space to do your thing.

### Positioning

Nooqs is **Airbnb for useful spaces, not sleeping spaces.**

The platform focuses on daytime and activity-based use, sidestepping the
regulatory complexity of short-term lodging while unlocking a much larger
pool of hostable spaces. Overnight access is permitted for specific
project-based use cases (retreats, multi-day shoots, weekend pop-ups) but
is never positioned as accommodation.

### Competitive positioning

| Competitor | Nooqs difference |
|---|---|
| Airbnb | Activity-driven, not accommodation. Hourly and daily. Purpose-declared bookings. |
| Peerspace | Broader than production. More affordable. Wider space types. Not film-crew-focused. |
| WeWork | Decentralised. No owned spaces. More variety and character. Lower price points. |
| Storefront | Not just retail. Full activity range. |
| Local venue platforms | Global consistency. Unified trust layer. Cross-category. |

### The core mechanical differentiator

**Purpose-driven booking.** Every booking declares an activity. Hosts
declare which activities they allow. The platform matches on intent, not
just availability. This shapes search, listings, trust, pricing, and
dispute resolution.

---

## 2. Users

Nooqs has three distinct user types. The product must serve all three
without collapsing them into a single experience.

### Guests

The people looking for space to do something specific. Initial priority
segments:

- Content creators (photographers, videographers, podcasters)
- Remote workers and freelancers
- Food truck and mobile vendor operators
- Small workshop and class leaders (tutors, instructors, therapists)
- Corporate bookers needing meeting or event space
- Individual drivers needing parking

A fourth type will emerge as the platform matures: **repeat professionals**
— tutors, instructors, and creators who book the same space on a
recurring schedule. The data model and booking mechanics must support
recurring bookings from day one to serve this group.

### Individual hosts

People with underused spaces. Homeowners with spare rooms, garages,
gardens, studios, or driveways. Small landlords with occasional vacancy.
Individual creators with rentable production spaces.

### Business and institutional hosts

Registered business entities with multiple spaces to manage. Includes:

- Councils and public bodies
- Commercial property owners
- Restaurant and hospitality groups with off-hours capacity
- Church dioceses and community organisations
- Small business owners with underused commercial space

Councils are a specific strategic priority. See §11.

---

## 3. Categories

Six primary categories, organised by guest intent rather than physical
space type. Categories may overlap — a single space can be tagged in
multiple categories.

### Work Nooqs
Quiet rooms, spare offices, desks, study spots, meeting rooms, private
booths. Colour: primary blue.

### Create Nooqs
Home studios, photography apartments, podcast rooms, maker spaces,
visually interesting interiors. Colour: secondary sky blue.

### Gather Nooqs
Small event spaces, gardens, lounges, rooftops, community halls, private
dining rooms. Colour: tertiary marigold.

### Trade Nooqs
Food truck pitches, market stall spaces, vacant lots with footfall,
forecourts, pavement frontage, indoor retail pop-up areas, off-hours
restaurant space. Colour: trade green.

### Park Nooqs
Private driveways, car park spaces, forecourt parking, event overflow
parking, secure vehicle storage, EV charging locations. Colour: park slate.

### Wellness Nooqs
Yoga rooms, meditation spaces, massage rooms, calm outdoor areas, retreat
spaces. Colour: wellness lavender.

### Not included at launch

Storage-only spaces, personal item storage, and generic self-serve
parking apps compete with different platforms and dilute the brand.

---

## 4. Booking Mechanics

### Booking durations

- **Hourly** — meetings, photoshoots, tutoring, wellness sessions
- **Half-day** — workshops, content creation, small pop-ups
- **Full-day** — events, productions, trading days, retreats
- **Multi-day / project** — extended shoots, weekend pop-ups, week-long
  studio bookings
- **Recurring** — same slot every week or month, priority-held for the
  booker

Recurring bookings are a strategic differentiator. They solve the
predictable-income problem for hosts and the reliability problem for
professional guests. Mechanics:

- Repeating schedule with optional end date
- Per-occurrence or monthly billing
- Two-week notice required to end a recurring series
- Either party may skip individual occurrences
- Priority hold blocks the slot from other guests

### Booking approval models

Host chooses per listing and per purpose:

- **Instant Book** — low-risk spaces, standard activities
- **Request to Book** — higher-risk activities, personal spaces, large
  groups

Hosts can set granular rules — e.g., instant book for solo work sessions
up to four people, request-to-book for photoshoots or gatherings over
six people.

### Purpose declaration

Every booking requires the guest to declare their purpose from a fixed
list. No "general use" or "other" default. This creates a contract of
expectations before money changes hands and provides grounds for
enforcement if violated.

Purpose declaration also shapes what the guest sees on the listing —
sound insulation details for podcast bookings, capacity and alcohol
policy for gathering bookings, footfall data for trading bookings.

---

## 5. Trust and Safety

Trust is the most important non-negotiable in a marketplace where
strangers enter each other's spaces.

### Verification tiers

- **Individual verification** — government ID, email, phone
- **Business verification** — company registration, business address,
  authority to rent, VAT number if applicable
- **Public body verification** — local authority reference, named officer,
  departmental authorisation, procurement compatibility

Each tier receives a distinct visual badge (see design.md).

### Pre-booking safeguards

- Purpose declaration and rules agreement before payment
- Guest profile visible to host (name, verification, past reviews, group
  size, booking purpose)
- Host listing declares allowed and prohibited activities
- Optional security deposit held via the platform

### In-booking safeguards

- Access details revealed only after booking confirmation
- Smart lock, QR check-in, or lockbox integration where available
- Buffer time between bookings for cleaning and reset
- Time-based access control at start and end of booking window

### Post-booking safeguards

- Two-way review system, blind until both submit or 14 days elapse
- Photo documentation for higher-value bookings
- Damage claims process with platform mediation
- Host response permitted on reviews for fairness

### Insurance and liability

At launch: clear terms of service placing damage responsibility on
guests, with host insurance responsibility for space safety. Optional
guest-purchased damage protection at booking.

Long-term: platform-level protection programme with insurance backing,
comparable to Airbnb's AirCover.

---

## 6. Listing Mechanics

Listings support tiered onboarding: required fields to publish,
recommended fields to improve visibility, optional fields for power
features.

### Required fields

Space name, description, location, minimum three photos, capacity,
available hours, at least one pricing tier, accepted activities,
cancellation policy.

### Recommended fields

Square footage, amenities (Wi-Fi, parking, AC, heating), furniture,
noise rules, bathroom access, accessibility, "best for" tags.

### Optional / power fields

Cleaning fee, security deposit, equipment fee, extra guest fee, weekend
and peak pricing, minimum booking duration, prohibited activities,
recurring booking discounts.

### Category-specific fields

**Trade Nooqs** additionally require: footfall estimate and type,
utilities (power, water, waste), vehicle access dimensions, permitted
trading hours, planning permission status, permitted and prohibited trade
types.

**Park Nooqs** additionally require: covered vs open, maximum vehicle
size, EV charging details, CCTV, gated status, access hours.

**Gather Nooqs** additionally require: maximum capacity, alcohol policy,
noise curfew, cleanup expectations.

### Best-for tags

Structured tag system, not free text. Three groups:

- **Atmosphere:** quiet, bright, cozy, industrial, minimal, rustic, modern
- **Activity:** good for filming, good for meetings, good for yoga, good
  for music, good for cooking, good for events
- **Practical:** street-level access, private entrance, parking available,
  pet-friendly, kid-friendly, equipment included, outdoor space, flexible
  layout

---

## 7. Search Mechanics

### Search entry point

Every search begins with purpose:

> "What do you need space for?"

Then location, then date and time, then filters. This is the signature
UX differentiator.

### Filter set

Location, date/time, purpose, capacity, budget, indoor/outdoor,
private/shared, amenities, instant book, noise tolerance, parking,
accessibility, space size, host rating, host type (individual, business,
council), category-specific filters.

### Search results

Map and list views. Default view varies by purpose — map for "near me
now" queries, list for planned bookings. Results ranked by relevance,
rating, proximity, and availability.

---

## 8. Pricing Mechanics

### Host-set pricing

Hosts set: hourly rate, half-day rate, full-day rate, weekend
adjustments, peak adjustments, cleaning fee, extra guest fee, equipment
fee, security deposit, recurring booking discount.

### Platform fee structure

**Guest-side fee with full transparency.** Host sets their price. Guest
sees base price, service fee, and total before committing. No hidden
costs at checkout.

Fee rate target: 10–15% guest-side. Reduced rate available for
institutional partners bringing significant supply.

### Minimum booking duration

Hosts set minimums per listing. Prevents low-value one-hour bookings
where coordination overhead exceeds revenue.

### VAT and tax

VAT-aware pricing from launch. Business and public body hosts receive
formal VAT invoices. Consolidated monthly invoicing available.
Individual hosts receive standard tax documentation for their
jurisdiction.

---

## 9. Cancellation Policies

Hosts select from three standard policies, visible to guests before
booking:

- **Flexible** — full refund up to 24 hours before
- **Moderate** — full refund up to 3 days before
- **Strict** — partial refund only
- **Event/Production** — non-refundable deposit after approval

### Host cancellations

Treated as a service failure. Penalties: fee charged to host, reduced
listing visibility, automatic rebooking assistance for the guest.

### No-shows

Guest no-show: host is still paid in full. Host no-show or space
unavailable: guest is refunded in full plus platform credit for the
inconvenience.

---

## 10. Reviews

### Two-way system

Both parties review after every booking. Blind until both submit or 14
days elapse.

### Guest reviews of space

Accuracy, cleanliness, communication, access/check-in, value, would
book again.

### Host reviews of guest

Followed rules, cleanliness, communication, timeliness, would host
again.

### Purpose-specific review question

One additional question tied to the booking purpose — sound quality for
podcast recordings, lighting for photoshoots, comfort for meetings.
Generates purpose-specific data that improves search over time.

### Review response

Hosts may respond publicly to guest reviews.

---

## 11. Business and Institutional Hosts

Business and public body hosts are a first-class user type from launch,
not a later addition.

### Business account architecture

- Registered business entity with authority verification
- Multiple listings under a single account
- Business bank account for payouts
- Consolidated invoicing and reporting
- Multiple team members with role-based permissions

### Team roles

- **Account Owner** — full access, billing, team management
- **Listing Manager** — create and edit specific listings
- **Booking Manager** — manage bookings and guest communication
- **Finance Viewer** — read-only access to earnings and invoices

### Council and public body support

Councils are a strategic supply priority. To work with them, Nooqs
provides:

- Named officer verification instead of standard company registration
- Formal commercial agreements beyond standard terms of service
- Purchase order and cost centre support on invoices
- Consolidated reporting for internal justification
- GDPR-compliant data handling
- Optional reduced platform fee for significant supply commitments

### Pitch framing for councils

The pitch is not "list your spaces on our marketplace." It is:

> "We help councils unlock the income potential of underused public
> assets while making those assets more accessible to the community."

This aligns with council mandates around income generation, asset
management, and community access.

---

## 12. Check-in and Check-out

### Pre-arrival

Guest receives: exact address, entry instructions, host contact, Wi-Fi
details, house rules, parking info, check-in process.

### Arrival options

Host greets, smart lock code, QR check-in, key lockbox, remote
instructions.

### Departure

Guest checks out in-app: confirms departure, uploads optional photos,
reports any issue.

### Buffer time

Hosts set buffer time between bookings for cleaning and reset. Built
into the availability system, not manually blocked.

---

## 13. Phased Rollout

### Phase 1 — Launch (all six categories, all three host types)

- All six categories live: Work, Create, Gather, Trade, Park, Wellness
- Individual, business, and council host support
- Hourly, daily, and recurring bookings
- Purpose-driven search and booking
- Two-way reviews
- Basic verification tiers
- Guest-side transparent pricing
- Standard cancellation policies
- Web platform (mobile-responsive)

### Phase 2 — Depth

- Native mobile apps (iOS, Android)
- Smart lock integrations
- Photo documentation flows
- Enhanced trust badges and verification tiers
- Suggested pricing for hosts
- Saved spaces and booking history
- Push notifications
- Curated collections and editorial content

### Phase 3 — Scale

- Multi-city expansion playbook
- Platform-level insurance and protection programme
- Business API for enterprise integrations
- Dynamic pricing recommendations
- Advanced analytics for hosts
- Loyalty pricing for repeat professionals
- White-label options for large institutional partners

### Explicitly deferred

- Social features
- Host community forums
- AI-driven matching
- Virtual tours
- Complex enterprise account management

---

## 14. Launch Geography and Sequencing

Start in one city. Prove the loop. Replicate.

### First city criteria

- Dense urban core with mixed-use districts
- Active creator economy
- Existing food truck and mobile vendor scene
- Underused council assets and appetite for asset activation
- Manageable regulatory environment

### Playbook per city

1. Recruit 50–100 seed hosts across all six categories
2. Secure at least one council or institutional partner for supply
   credibility
3. Attract 200–500 seed guests through targeted outreach to creator
   communities, remote work networks, and vendor associations
4. Prove the booking loop with real transactions and reviews
5. Publish case studies to open the next market

---

## 15. Brand Voice

One voice — a knowledgeable local friend who knows all the good spots —
tuned to three audiences. Detailed voice guidance lives in design.md.

### Emotional promise per audience

**For guests:**
> "You don't need a huge venue. You need the right little nook."

**For individual hosts:**
> "Your unused space could be income — and connection."

**For business and institutional hosts:**
> "Turn your underused assets into productive, community-serving space."

---

## 16. Strategic Non-Negotiables

These are the decisions that must not drift as the product evolves:

1. **Purpose-driven booking.** Every booking declares an intent. This is
   the mechanical soul of the product.
2. **Three host types from day one.** Individual, business, institutional.
   Not retrofitted later.
3. **Marigold as the availability signal.** Consistent across every
   surface (see design.md).
4. **Trust before growth.** No compromise on verification, reviews, or
   dispute handling to accelerate supply.
5. **Category clarity.** Six categories, no more, no dilution into
   generic storage or lodging.
6. **Transparent pricing.** No hidden fees at checkout, ever.
7. **Recurring bookings supported from launch.** Not a future feature.
8. **VAT-aware from launch.** Not a rebuild later.

---

## 17. Open Questions to Resolve Before Build

These will be answered during the foundation and first-slice work:

1. First launch city — which one, and why?
2. Initial council partner — which authority to approach first?
3. Payment provider confirmation (Stripe Connect assumed)
4. Insurance partner for damage protection at launch or Phase 2?
5. Legal jurisdiction and terms of service drafting
6. Accessibility compliance target (WCAG 2.1 AA assumed)
7. Data residency for hosted user data (relevant for council compliance)