'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/types/nooqs';
import { CategoryIcon } from './category-icon';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/nooqs';

interface PurposeSelectorProps {
  variant?: 'hero' | 'compact';
  className?: string;
}

const categoryBgHover: Record<Category, string> = {
  work: 'hover:border-primary hover:bg-primary-container/10',
  create: 'hover:border-secondary hover:bg-secondary-container/20',
  gather: 'hover:border-tertiary-container hover:bg-tertiary-fixed/40',
  trade: 'hover:border-trade hover:bg-trade-container/40',
  park: 'hover:border-park hover:bg-park-container/40',
  wellness: 'hover:border-wellness hover:bg-wellness-container/40',
};

export function PurposeSelector({
  variant = 'hero',
  className,
}: PurposeSelectorProps) {
  const isHero = variant === 'hero';
  const categoryKeys = Object.keys(CATEGORIES) as Category[];

  return (
    <div
      className={cn(
        'grid gap-sm',
        isHero
          ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
          : 'grid-cols-3 md:grid-cols-6',
        className
      )}
      role="list"
      aria-label="Choose what you need space for"
    >
      {categoryKeys.map((key) => {
        const category = CATEGORIES[key];
        return (
          <Link
            key={key}
            href={`/search?purpose=${key}`}
            role="listitem"
            className={cn(
              'group relative flex flex-col items-center justify-center gap-2 rounded-md border-2 border-outline-variant bg-surface-container-lowest text-center transition-all duration-fast ease-standard',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
              isHero ? 'p-md min-h-[140px]' : 'p-sm min-h-[96px]',
              categoryBgHover[key]
            )}
          >
            <CategoryIcon category={key} size={isHero ? 32 : 24} />
            <div className="flex flex-col gap-0.5">
              <span
                className={cn(
                  'font-semibold text-on-surface',
                  isHero ? 'text-headline-sm' : 'text-label-md'
                )}
              >
                {category.label}
              </span>
              {isHero && (
                <span className="text-body-sm text-on-surface-variant leading-tight">
                  {category.descriptor}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
