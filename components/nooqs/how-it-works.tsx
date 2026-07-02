import { Search, Calendar, KeyRound } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose your purpose',
    description:
      'Tell us what you need space for. Work, create, gather, trade, park, or restore.',
  },
  {
    icon: Calendar,
    title: 'Find and book',
    description:
      'Browse nearby spaces that match your intent. Book by the hour, day, or on repeat.',
  },
  {
    icon: KeyRound,
    title: 'Show up and use it',
    description:
      'Receive access details after booking. Use the space, review your host, book again.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-lg">
      <div className="text-center mb-lg">
        <h2 className="text-headline-lg md:text-headline-xl text-on-surface mb-sm">
          How Nooqs works
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Three simple steps between you and the perfect little space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative flex flex-col items-start gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md"
            >
              <div className="flex items-center gap-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <span className="text-label-sm font-semibold text-on-surface-variant">
                  STEP {index + 1}
                </span>
              </div>
              <h3 className="text-headline-sm text-on-surface">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
