import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'available' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-container active:bg-primary-container disabled:bg-outline-variant disabled:text-on-surface-variant',
  secondary:
    'bg-transparent text-secondary border border-secondary hover:bg-secondary-container/20 active:bg-secondary-container/30 disabled:border-outline-variant disabled:text-outline',
  available:
    'bg-available-strong text-on-available-strong hover:bg-tertiary active:bg-tertiary disabled:bg-outline-variant disabled:text-on-surface-variant',
  ghost:
    'bg-transparent text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest disabled:text-outline',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-label-sm px-3 py-1.5 h-8 gap-1.5',
  md: 'text-label-md px-4 py-2 h-10 gap-2',
  lg: 'text-body-md font-semibold px-6 py-3 h-12 gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center rounded font-semibold transition-all duration-fast ease-standard',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
