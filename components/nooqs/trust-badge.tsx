import {
  CheckCircle2,
  Building2,
  ShieldCheck,
  Star,
  Sparkles,
  Zap,
  Repeat,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type BadgeType =
  | 'individual-verified'
  | 'business-verified'
  | 'council-verified'
  | 'top-rated'
  | 'new'
  | 'instant-book'
  | 'recurring';

interface TrustBadgeProps {
  type: BadgeType;
  showLabel?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const badgeConfig: Record<
  BadgeType,
  { icon: LucideIcon; label: string; color: string }
> = {
  'individual-verified': {
    icon: CheckCircle2,
    label: 'Verified',
    color: 'text-primary',
  },
  'business-verified': {
    icon: Building2,
    label: 'Business',
    color: 'text-primary',
  },
  'council-verified': {
    icon: ShieldCheck,
    label: 'Council Verified',
    color: 'text-primary',
  },
  'top-rated': {
    icon: Star,
    label: 'Top rated',
    color: 'text-available-strong',
  },
  new: {
    icon: Sparkles,
    label: 'New',
    color: 'text-available-strong',
  },
  'instant-book': {
    icon: Zap,
    label: 'Instant Book',
    color: 'text-available-strong',
  },
  recurring: {
    icon: Repeat,
    label: 'Recurring',
    color: 'text-secondary',
  },
};

const sizeConfig = {
  sm: { icon: 14, text: 'text-label-sm', gap: 'gap-1' },
  md: { icon: 16, text: 'text-label-md', gap: 'gap-1.5' },
};

export function TrustBadge({
  type,
  showLabel = true,
  size = 'sm',
  className,
}: TrustBadgeProps) {
  const config = badgeConfig[type];
  const sizeStyles = sizeConfig[size];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        sizeStyles.gap,
        sizeStyles.text,
        config.color,
        className
      )}
      title={config.label}
    >
      <Icon size={sizeStyles.icon} strokeWidth={2} aria-hidden="true" />
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}
