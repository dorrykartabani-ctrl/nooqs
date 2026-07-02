import {
  Laptop,
  Camera,
  Users,
  Store,
  Car,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/nooqs';

interface CategoryIconProps {
  category: Category;
  size?: number;
  className?: string;
  colored?: boolean;
}

const categoryIcons: Record<Category, LucideIcon> = {
  work: Laptop,
  create: Camera,
  gather: Users,
  trade: Store,
  park: Car,
  wellness: Leaf,
};

const categoryColors: Record<Category, string> = {
  work: 'text-primary',
  create: 'text-secondary',
  gather: 'text-tertiary-container',
  trade: 'text-trade',
  park: 'text-park',
  wellness: 'text-wellness',
};

export function CategoryIcon({
  category,
  size = 24,
  className,
  colored = true,
}: CategoryIconProps) {
  const Icon = categoryIcons[category];

  return (
    <Icon
      size={size}
      strokeWidth={1.5}
      className={cn(colored && categoryColors[category], className)}
      aria-hidden="true"
    />
  );
}
