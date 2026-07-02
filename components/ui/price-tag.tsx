import { cn, formatCurrency } from '@/lib/utils';

interface PriceTagProps {
  amount: number;
  currency?: string;
  unit?: 'hour' | 'half-day' | 'day' | 'week';
  size?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
  className?: string;
}

const unitLabels: Record<NonNullable<PriceTagProps['unit']>, string> = {
  hour: '/hr',
  'half-day': '/half day',
  day: '/day',
  week: '/wk',
};

const sizeStyles = {
  sm: 'text-label-sm px-2 py-1',
  md: 'text-label-md px-2.5 py-1',
  lg: 'text-body-md font-semibold px-3 py-1.5',
};

export function PriceTag({
  amount,
  currency = 'AUD',
  unit = 'hour',
  size = 'md',
  overlay = false,
  className,
}: PriceTagProps) {
  // Amount is stored in smallest currency unit (cents), so divide by 100
  const displayAmount = amount / 100;
  const formatted = formatCurrency(displayAmount, currency, 'en-AU');

  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold',
        sizeStyles[size],
        overlay && 'shadow-level-2',
        className
      )}
    >
      <span>{formatted}</span>
      <span className="text-label-sm font-medium opacity-80">
        {unitLabels[unit]}
      </span>
    </span>
  );
}
