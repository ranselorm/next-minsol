import Link from "next/link";

const locations = ["Ghana", "Côte d’Ivoire", "Burkina Faso", "Mali", "Guinea"];

const OperationalFootprint = () => (
  <section className="bg-white py-20 md:py-24">
    <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">
          Regional presence
        </p>
        <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-blu md:text-5xl">
          Close to the operations we support.
        </h2>
        <p className="mt-6 max-w-md text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          Headquartered in Accra, Minsol supports mining operations through operational centres across the West African sub-region.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-slate-900/10 pt-6 text-sm font-medium text-blu">
          {locations.map((location) => (
            <li key={location} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
              {location}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 border-b border-main pb-1 text-sm font-semibold text-main transition-colors hover:border-blu hover:text-blu"
        >
          Discover our story <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="overflow-hidden border border-slate-900/10 bg-accent p-3 md:p-5">
        <img
          src="/images/map.png"
          alt="Map showing Minsol's operational footprint across West Africa"
          className="h-[320px] w-full object-cover md:h-[420px]"
        />
      </div>
    </div>
  </section>
);

export default OperationalFootprint;
