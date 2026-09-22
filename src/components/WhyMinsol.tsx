import Link from "next/link";

const proofPoints = [
  { value: "14+", label: "Years of industry experience" },
  { value: "20+", label: "Specialist associates" },
  { value: "5+", label: "Countries across the sub-region" },
];

interface WhyMinsolProps {
  showAboutLink?: boolean;
}

const WhyMinsol = ({ showAboutLink = true }: WhyMinsolProps) => (
  <section className="bg-accent py-20 md:py-24">
    <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">
          Why Minsol
        </p>
        <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-blu md:text-5xl">
          Local knowledge. Regional capability.
        </h2>
        <p className="mt-6 max-w-md text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          From Accra to operational centres across West Africa, we combine specialist expertise with practical on-the-ground support.
        </p>
        {showAboutLink && (
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 border-b border-main pb-1 text-sm font-semibold text-main transition-colors hover:border-blu hover:text-blu"
          >
            Learn about Minsol <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      <dl className="grid border-y border-slate-900/15 sm:grid-cols-3 sm:border-l">
        {proofPoints.map((point) => (
          <div key={point.label} className="flex h-full flex-col border-b border-slate-900/15 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-8">
            <dt className="text-sm leading-6 text-slate-600">{point.label}</dt>
            <dd className="mt-auto pt-4 text-4xl font-semibold tracking-[-0.04em] text-main md:text-5xl">
              {point.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default WhyMinsol;
