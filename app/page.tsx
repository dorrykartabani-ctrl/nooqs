export default function Home() {
  return (
    <main className="container-nooqs py-lg">
      <div className="flex flex-col items-center gap-md text-center">
        <h1 className="text-headline-xl text-primary">Nooqs</h1>
        <p className="text-body-lg text-on-surface-variant">
          Find space to do your thing.
        </p>
        <div className="mt-md flex flex-wrap gap-sm justify-center">
          <span className="rounded-full bg-primary-container/20 px-4 py-1 text-label-md text-primary">
            Work
          </span>
          <span className="rounded-full bg-secondary-container/40 px-4 py-1 text-label-md text-secondary">
            Create
          </span>
          <span className="rounded-full bg-tertiary-fixed px-4 py-1 text-label-md text-on-tertiary-fixed">
            Gather
          </span>
          <span className="rounded-full bg-trade-container px-4 py-1 text-label-md text-on-trade-container">
            Trade
          </span>
          <span className="rounded-full bg-park-container px-4 py-1 text-label-md text-on-park-container">
            Park
          </span>
          <span className="rounded-full bg-wellness-container px-4 py-1 text-label-md text-on-wellness-container">
            Wellness
          </span>
        </div>
        <p className="mt-lg text-body-sm text-on-surface-variant">
          Foundation deployed. Design tokens active. Ready for Slice 1.
        </p>
      </div>
    </main>
  );
}
