// ── Category system ──────────────────────────────────
export type Category =
  | 'work'
  | 'create'
  | 'gather'
  | 'trade'
  | 'park'
  | 'wellness';

export const CATEGORIES: Record<
  Category,
  { label: string; descriptor: string; colorToken: string; icon: string }
> = {
  work: {
    label: 'Work',
    descriptor: 'A quiet space to focus',
    colorToken: 'primary',
    icon: 'Laptop',
  },
  create: {
    label: 'Create',
    descriptor: 'A space to shoot, record, or make',
    colorToken: 'secondary',
    icon: 'Camera',
  },
  gather: {
    label: 'Gather',
    descriptor: 'A space to bring people together',
    colorToken: 'tertiary',
    icon: 'Users',
  },
  trade: {
    label: 'Trade',
    descriptor: 'A pitch to trade and sell',
    colorToken: 'trade',
    icon: 'Store',
  },
  park: {
    label: 'Park',
    descriptor: 'A space for your vehicle',
    colorToken: 'park',
    icon: 'Car',
  },
  wellness: {
    label: 'Wellness',
    descriptor: 'A calm space to restore',
    colorToken: 'wellness',
    icon: 'Leaf',
  },
};

// ── Purposes (booking intent) ────────────────────────
export type Purpose =
  | 'meeting'
  | 'remote_work'
  | 'study'
  | 'photoshoot'
  | 'video_shoot'
  | 'podcast'
  | 'workshop'
  | 'class'
  | 'small_event'
  | 'pop_up'
  | 'food_truck_trade'
  | 'market_stall'
  | 'parking'
  | 'ev_charging'
  | 'yoga'
  | 'wellness_session'
  | 'other';

// ── Host types ───────────────────────────────────────
export type HostType = 'individual' | 'business' | 'public_body';

// ── Verification tiers ───────────────────────────────
export type VerificationTier =
  | 'unverified'
  | 'individual_verified'
  | 'business_verified'
  | 'council_verified';

// ── Booking ──────────────────────────────────────────
export type BookingModel = 'instant' | 'request';
export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled_by_guest'
  | 'cancelled_by_host'
  | 'completed'
  | 'no_show';

export type BookingDurationType =
  | 'hourly'
  | 'half_day'
  | 'full_day'
  | 'multi_day'
  | 'recurring';

// ── Cancellation policies ────────────────────────────
export type CancellationPolicy =
  | 'flexible'
  | 'moderate'
  | 'strict'
  | 'event';

// ── Core entities ────────────────────────────────────
export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string | null;
  verification_tier: VerificationTier;
  created_at: string;
}

export interface Organisation {
  id: string;
  name: string;
  host_type: HostType;
  registration_number: string | null;
  vat_number: string | null;
  verification_tier: VerificationTier;
  billing_address: string | null;
  created_at: string;
}

export interface Listing {
  id: string;
  host_user_id: string | null;
  host_organisation_id: string | null;
  name: string;
  description: string;
  categories: Category[];
  allowed_purposes: Purpose[];
  prohibited_activities: string[];
  location_general: string;
  location_exact: string; // revealed after booking
  capacity: number;
  square_footage: number | null;
  hourly_rate: number | null;
  half_day_rate: number | null;
  full_day_rate: number | null;
  cleaning_fee: number;
  security_deposit: number;
  minimum_duration_hours: number;
  booking_model: BookingModel;
  cancellation_policy: CancellationPolicy;
  amenity_tags: string[];
  atmosphere_tags: string[];
  activity_tags: string[];
  practical_tags: string[];
  images: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  listing_id: string;
  guest_user_id: string;
  purpose: Purpose;
  duration_type: BookingDurationType;
  start_at: string;
  end_at: string;
  guest_count: number;
  base_price: number;
  service_fee: number;
  cleaning_fee: number;
  total_price: number;
  currency: string;
  status: BookingStatus;
  is_recurring: boolean;
  recurring_series_id: string | null;
  rules_acknowledged_at: string;
  created_at: string;
}

export interface Review {
  id: string;
  booking_id: string;
  reviewer_user_id: string;
  reviewee_user_id: string | null;
  reviewee_listing_id: string | null;
  rating_overall: number;
  rating_accuracy: number | null;
  rating_cleanliness: number | null;
  rating_communication: number | null;
  rating_access: number | null;
  rating_value: number | null;
  purpose_specific_rating: number | null;
  comment: string;
  host_response: string | null;
  is_published: boolean;
  created_at: string;
}
