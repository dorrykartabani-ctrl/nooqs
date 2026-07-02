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

## Prerequisites

- Node.js 20+ and npm
- A Supabase project (create at https://supabase.com)
- A Stripe account (test mode is fine for development)

## Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
