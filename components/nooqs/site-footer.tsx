import Link from 'next/link';
import { CATEGORIES } from '@/types/nooqs';
import type { Category } from '@/types/nooqs';

const footerSections = [
  {
    title: 'Discover',
    links: [
      { href: '/search', label: 'All Nooqs' },
      { href: '/search?feature=instant-book', label: 'Instant Book' },
      { href: '/search?feature=recurring', label: 'Recurring bookings' },
      { href: '/collections', label: 'Curated collections' },
    ],
  },
  {
    title: 'Hosts',
    links: [
      { href: '/host', label: 'Become a host' },
      { href: '/host/business', label: 'For businesses' },
      { href: '/host/councils', label: 'For councils' },
      { href: '/host/resources', label: 'Host resources' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/help', label: 'Help centre' },
      { href: '/safety', label: 'Trust & safety' },
      { href: '/contact', label: 'Contact us' },
      { href: '/how-it-works', label: 'How it works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Nooqs' },
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/cookies', label: 'Cookies' },
    ],
  },
];

export function SiteFooter() {
  const categoryKeys = Object.keys(CATEGORIES) as Category[];

  return (
    <footer className="mt-xl border-t border-outline-variant bg-surface-container-low">
      <div className="container-nooqs py-lg">
        {/* Category quick links */}
        <div className="mb-lg">
          <h3 className="text-label-md text-on-surface-variant mb-sm">
            Browse by purpose
          </h3>
          <div className="flex flex-wrap gap-sm">
            {categoryKeys.map((key) => (
              <Link
                key={key}
                href={`/search?purpose=${key}`}
                className="text-label-md text-primary hover:underline"
              >
                {CATEGORIES[key].label} Nooqs
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-label-md font-semibold text-on-surface mb-sm">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand + legal */}
        <div className="mt-lg pt-md border-t border-outline-variant flex flex-col md:flex-row md:items-center md:justify-between gap-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-on-primary font-bold text-label-md">
              N
            </div>
            <span className="text-label-md font-semibold text-primary">
              Nooqs
            </span>
            <span className="text-label-sm text-on-surface-variant ml-2">
              Find space to do your thing.
            </span>
          </div>
          <p className="text-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} Nooqs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
