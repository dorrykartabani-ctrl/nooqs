import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/nooqs/site-header';
import { SiteFooter } from '@/components/nooqs/site-footer';
import { PurposeSelector } from '@/components/nooqs/purpose-selector';
import { HowItWorks } from '@/components/nooqs/how-it-works';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section */}
        <section className="container-nooqs pt-lg md:pt-xl pb-lg">
          <div className="flex flex-col items-center text-center gap-md max-w-3xl mx-auto mb-lg">
            <Chip variant="available" size="sm" icon={<Sparkles size={12} />}>
              Now live in Sydney
            </Chip>
            <h1 className="text-headline-lg-mobile md:text-headline-xl text-on-surface">
              Find space to do{' '}
              <span className="text-primary">your thing.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Book underused local spaces by the hour, day, or project. Perfect
              little nooks for work, creativity, gatherings, trade, parking, and
              wellness.
            </p>
          </div>

          {/* Purpose Selector — the signature interaction */}
          <div className="mb-md">
            <p className="text-label-md text-on-surface-variant text-center mb-sm">
              What do you need space for?
            </p>
            <PurposeSelector variant="hero" />
          </div>

          <div className="flex justify-center mt-md">
            <Button
              variant="ghost"
              size="md"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => (window.location.href = '/search')}
            >
              Browse all Nooqs
            </Button>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-outline-variant bg-surface-container-low py-md">
          <div className="container-nooqs">
            <div className="flex flex-wrap items-center justify-center gap-md md:gap-lg text-center">
              <div className="flex flex-col items-center">
                <span className="text-headline-md text-primary font-bold">
                  200+
                </span>
                <span className="text-label-sm text-on-surface-variant">
                  Spaces across Sydney
                </span>
              </div>
              <div className="hidden md:block h-8 w-px bg-outline-variant" />
              <div className="flex flex-col items-center">
                <span className="text-headline-md text-primary font-bold">
                  6
                </span>
                <span className="text-label-sm text-on-surface-variant">
                  Ways to use them
                </span>
              </div>
              <div className="hidden md:block h-8 w-px bg-outline-variant" />
              <div className="flex flex-col items-center">
                <span className="text-headline-md text-primary font-bold">
                  Trusted
                </span>
                <span className="text-label-sm text-on-surface-variant">
                  By hosts, businesses & councils
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container-nooqs">
          <HowItWorks />
        </section>

        {/* Host CTA */}
        <section className="container-nooqs py-lg">
          <div className="rounded-lg bg-primary p-lg md:p-xl text-center">
            <h2 className="text-headline-lg text-on-primary mb-sm">
              Have a space that's sitting empty?
            </h2>
            <p className="text-body-lg text-inverse-on-surface/90 max-w-2xl mx-auto mb-md">
              Turn your unused garage, garden, studio, meeting room, or forecourt
              into income. Nooqs makes it simple to list, manage, and get paid.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-sm">
              <Link href="/host">
                <Button
                  variant="available"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Become a host
                </Button>
              </Link>
              <Link href="/host/councils">
                <Button variant="ghost" size="lg" className="text-on-primary hover:bg-primary-container/40">
                  For councils and businesses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}