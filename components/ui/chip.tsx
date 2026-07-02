import { cn } from '@/lib/utils';
import type { Category } from '@/types/nooqs';

type ChipVariant = Category | 'neutral' | 'available' | 'success' | 'error';
type ChipSize = 'sm' | 'md';

interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ChipVariant, string> = {
  work: 'bg-primary-container/20 text-primary',
  create: 'bg-secondary-container/40 text-on-secondary-container',
  gather: 'bg-tertiary-fixed text-on-tertiary-fixed',
  trade: 'bg-trade-container text-on-trade-container',
  park: 'bg-park-container text-on-park-container',
  wellness: 'bg-wellness-container text-on-wellness-container',
  neutral: 'bg-surface-container-high text-on-surface-variant',
  available: 'bg-available text-on-available',
  success: 'bg-success-container text-on-success-container',
  error: 'bg-error-container text-on-error-container',
};

const sizeStyles: Record<ChipSize, string> = {
  sm: 'text-label-sm px-2 py-0.5 gap-1',
  md: 'text-label-md px-3 py-1 gap-1.5',
};

export function Chip({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
