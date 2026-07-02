-- ─────────────────────────────────────────────
-- Nooqs — Initial Schema v1
-- Foundational tables for Phase 1 build
-- ─────────────────────────────────────────────

-- Enable required extensions
create extension if not exists "uuid-ossp";

-- ── Enums ────────────────────────────────────
create type category as enum (
  'work', 'create', 'gather', 'trade', 'park', 'wellness'
);

create type purpose as enum (
  'meeting', 'remote_work', 'study', 'photoshoot', 'video_shoot',
  'podcast', 'workshop', 'class', 'small_event', 'pop_up',
  'food_truck_trade', 'market_stall', 'parking', 'ev_charging',
  'yoga', 'wellness_session', 'other'
);

create type host_type as enum (
  'individual', 'business', 'public_body'
);

create type verification_tier as enum (
  'unverified', 'individual_verified',
  'business_verified', 'council_verified'
);

create type booking_model as enum ('instant', 'request');

create type booking_status as enum (
  'pending', 'confirmed', 'cancelled_by_guest',
  'cancelled_by_host', 'completed', 'no_show'
);

create type booking_duration_type as enum (
  'hourly', 'half_day', 'full_day', 'multi_day', 'recurring'
);

create type cancellation_policy as enum (
  'flexible', 'moderate', 'strict', 'event'
);

create type org_role as enum (
  'owner', 'listing_manager', 'booking_manager', 'finance_viewer'
);

-- ── Users ────────────────────────────────────
create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  avatar_url text,
  phone text,
  verification_tier verification_tier not null default 'unverified',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── Organisations (business/institutional hosts) ─
create table organisations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  host_type host_type not null,
  registration_number text,
  vat_number text,
  billing_address text,
  contact_email text not null,
  verification_tier verification_tier not null default 'unverified',
  reduced_fee_rate numeric(4,3),  -- optional partner rate
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Membership table for team roles within an org
create table organisation_members (
  id uuid primary key default uuid_generate_v4(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role org_role not null,
  created_at timestamptz not null default now(),
  unique (organisation_id, user_id)
);

-- ── Listings ─────────────────────────────────
create table listings (
  id uuid primary key default uuid_generate_v4(),

  -- Ownership: exactly one of these must be set
  host_user_id uuid references users(id) on delete cascade,
  host_organisation_id uuid references organisations(id) on delete cascade,

  name text not null,
  description text not null,

  categories category[] not null default '{}',
  allowed_purposes purpose[] not null default '{}',
  prohibited_activities text[] not null default '{}',

  -- Location
  location_general text not null,
  location_exact text not null,
  latitude numeric(9,6),
  longitude numeric(9,6),

  -- Capacity & dimensions
  capacity integer not null,
  square_footage integer,

  -- Pricing (in smallest currency unit, e.g. pence)
  currency text not null default 'GBP',
  hourly_rate integer,
  half_day_rate integer,
  full_day_rate integer,
  cleaning_fee integer not null default 0,
  security_deposit integer not null default 0,
  minimum_duration_hours numeric(4,1) not null default 1,

  -- Booking rules
  booking_model booking_model not null default 'request',
  cancellation_policy cancellation_policy not null default 'moderate',
  buffer_minutes integer not null default 0,

  -- Tags
  amenity_tags text[] not null default '{}',
  atmosphere_tags text[] not null default '{}',
  activity_tags text[] not null default '{}',
  practical_tags text[] not null default '{}',

  -- Media
  images text[] not null default '{}',

  -- State
  is_published boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint host_exclusive check (
    (host_user_id is not null and host_organisation_id is null) or
    (host_user_id is null and host_organisation_id is not null)
  )
);

create index idx_listings_categories on listings using gin (categories);
create index idx_listings_purposes on listings using gin (allowed_purposes);
create index idx_listings_published on listings (is_published);
create index idx_listings_location on listings (latitude, longitude);

-- ── Availability windows ─────────────────────
-- Simple per-listing recurring weekly availability
create table availability_windows (
  id uuid primary key default uuid_generate_v4(),
  listing_id uuid not null references listings(id) on delete cascade,
  day_of_week integer not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  created_at timestamptz not null default now()
);

create index idx_availability_listing on availability_windows(listing_id);

-- ── Bookings ─────────────────────────────────
create table bookings (
  id uuid primary key default uuid_generate_v4(),
  listing_id uuid not null references listings(id),
  guest_user_id uuid not null references users(id),

  purpose purpose not null,
  duration_type booking_duration_type not null,

  start_at timestamptz not null,
  end_at timestamptz not null,
  guest_count integer not null default 1,

  -- Pricing snapshot (in smallest currency unit)
  currency text not null default 'GBP',
  base_price integer not null,
  service_fee integer not null,
  cleaning_fee integer not null default 0,
  total_price integer not null,

  status booking_status not null default 'pending',

  -- Recurring
  is_recurring boolean not null default false,
  recurring_series_id uuid,

  -- Consent record
  rules_acknowledged_at timestamptz not null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint valid_time_range check (end_at > start_at)
);

create index idx_bookings_listing on bookings(listing_id);
create index idx_bookings_guest on bookings(guest_user_id);
create index idx_bookings_status on bookings(status);
create index idx_bookings_start on bookings(start_at);
create index idx_bookings_series on bookings(recurring_series_id);

-- ── Reviews ──────────────────────────────────
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid not null references bookings(id) on delete cascade,
  reviewer_user_id uuid not null references users(id),

  -- Exactly one of the following must be set
  reviewee_user_id uuid references users(id),
  reviewee_listing_id uuid references listings(id),

  rating_overall integer not null check (rating_overall between 1 and 5),
  rating_accuracy integer check (rating_accuracy between 1 and 5),
  rating_cleanliness integer check (rating_cleanliness between 1 and 5),
  rating_communication integer check (rating_communication between 1 and 5),
  rating_access integer check (rating_access between 1 and 5),
  rating_value integer check (rating_value between 1 and 5),
  purpose_specific_rating integer check (purpose_specific_rating between 1 and 5),

  comment text not null,
  host_response text,

  -- Reviews stay hidden until both submitted or 14-day window closes
  is_published boolean not null default false,

  created_at timestamptz not null default now(),

  constraint reviewee_exclusive check (
    (reviewee_user_id is not null and reviewee_listing_id is null) or
    (reviewee_user_id is null and reviewee_listing_id is not null)
  ),

  unique (booking_id, reviewer_user_id)
);

create index idx_reviews_booking on reviews(booking_id);
create index idx_reviews_listing on reviews(reviewee_listing_id);
create index idx_reviews_published on reviews(is_published);

-- ── Messages ─────────────────────────────────
create table messages (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid references bookings(id) on delete cascade,
  sender_user_id uuid not null references users(id),
  recipient_user_id uuid not null references users(id),
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index idx_messages_booking on messages(booking_id);
create index idx_messages_recipient on messages(recipient_user_id, read_at);

-- ── updated_at trigger ───────────────────────
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_users_updated
  before update on users
  for each row execute function set_updated_at();

create trigger trg_orgs_updated
  before update on organisations
  for each row execute function set_updated_at();

create trigger trg_listings_updated
  before update on listings
  for each row execute function set_updated_at();

create trigger trg_bookings_updated
  before update on bookings
  for each row execute function set_updated_at();

-- ── Row Level Security ───────────────────────
alter table users enable row level security;
alter table organisations enable row level security;
alter table organisation_members enable row level security;
alter table listings enable row level security;
alter table bookings enable row level security;
alter table reviews enable row level security;
alter table messages enable row level security;

-- Basic policies — will expand in Slice 1
create policy "Users can view their own profile"
  on users for select using (auth.uid() = id);

create policy "Users can update their own profile"
  on users for update using (auth.uid() = id);

create policy "Published listings are visible to all"
  on listings for select using (is_published = true);

create policy "Hosts can manage their own listings"
  on listings for all using (
    auth.uid() = host_user_id or
    exists (
      select 1 from organisation_members om
      where om.organisation_id = host_organisation_id
      and om.user_id = auth.uid()
      and om.role in ('owner', 'listing_manager')
    )
  );

create policy "Users can view their own bookings"
  on bookings for select using (
    guest_user_id = auth.uid() or
    exists (
      select 1 from listings l
      where l.id = bookings.listing_id
      and (
        l.host_user_id = auth.uid() or
        exists (
          select 1 from organisation_members om
          where om.organisation_id = l.host_organisation_id
          and om.user_id = auth.uid()
        )
      )
    )
  );

create policy "Users can create bookings"
  on bookings for insert with check (guest_user_id = auth.uid());

create policy "Published reviews are visible to all"
  on reviews for select using (is_published = true);

create policy "Users can write reviews for their bookings"
  on reviews for insert with check (reviewer_user_id = auth.uid());
