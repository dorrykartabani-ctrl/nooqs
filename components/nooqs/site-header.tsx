'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/search', label: 'Find a Nooq' },
  { href: '/host', label: 'Become a Host' },
  { href: '/how-it-works', label: 'How it works' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur">
      <div className="container-nooqs">
        <div className="flex h-16 items-center justify-between gap-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-on-primary font-bold text-headline-sm">
              N
            </div>
            <span className="text-headline-sm font-bold text-primary hidden sm:inline">
              Nooqs
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label-md text-on-surface hover:text-primary transition-colors duration-fast"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-sm">
            <Link
              href="/search"
              className={cn(
                'inline-flex items-center gap-2 h-8 px-3 rounded font-semibold text-label-sm',
                'text-on-surface hover:bg-surface-container-high transition-colors duration-fast',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
              )}
            >
              <Search size={18} />
              Search
            </Link>
            <Link
              href="/sign-in"
              className={cn(
                'inline-flex items-center gap-2 h-8 px-3 rounded font-semibold text-label-sm',
                'text-secondary border border-secondary hover:bg-secondary-container/20 transition-colors duration-fast',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
              )}
            >
              <User size={18} />
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded text-on-surface hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-outline-variant py-sm">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-body-md text-on-surface hover:bg-surface-container transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-sm border-t border-outline-variant pt-sm flex flex-col gap-2">
                <Link
                  href="/search"
                  className="px-3 py-2.5 rounded text-body-md text-on-surface hover:bg-surface-container flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Search size={18} />
                  Search
                </Link>
                <Link
                  href="/sign-in"
                  className="px-3 py-2.5 rounded text-body-md text-on-surface hover:bg-surface-container flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <User size={18} />
                  Sign in
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}