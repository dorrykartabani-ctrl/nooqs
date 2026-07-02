# Nooqs

A purpose-driven marketplace for booking underused local spaces by the hour, day, or project.

## Foundational documents

- **`docs/strategy.md`** — Product strategy, categories, host types, mechanics, phasing
- **`docs/design.md`** — Design system, tokens, components, voice

Read both before making product or design decisions.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (design tokens in `tailwind.config.ts`)
- **UI primitives:** shadcn/ui pattern (add as needed)
- **Icons:** Lucide React
- **Database & Auth:** Supabase (Postgres + Auth + Storage)
- **Payments:** Stripe (with Stripe Connect for host payouts)
- **Validation:** Zod
- **Forms:** React Hook Form + Zod resolvers
- **Deployment:** Vercel
- **PWA:** @ducanh2912/next-pwa (installable, offline-capable, push-notification-ready)

## PWA capabilities

Nooqs is a Progressive Web App:
- Installable on iOS, Android, Windows, macOS, Linux
- Runs full-screen without browser chrome once installed
- Push notifications supported on Android and iOS 16.4+
- Service worker caches static assets for faster repeat visits
- Offline support for basic navigation (extended offline coming in Slice 2)

To install: visit the URL and use your browser's "Install" or "Add to Home Screen" option.

Service worker is disabled in development. To test PWA behaviour locally:

```bash
npm run build
npm run start


### Update `docs/strategy.md`

Under §13 Phased Rollout → Phase 1 → change:

## Prerequisites

- Node.js 20+ and npm
- A Supabase project (create at https://supabase.com)
- A Stripe account (test mode is fine for development)

## Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
