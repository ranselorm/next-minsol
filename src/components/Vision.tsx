import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

const values = [
  { title: "Excellence", description: "High-quality services and solutions that set benchmarks for performance and reliability." },
  { title: "Integrity", description: "Transparency, honesty, and accountability in every relationship and decision." },
  { title: "Adaptability", description: "Relevant, effective support as mining operations and industry needs evolve." },
  { title: "Collaboration", description: "Close partnership with clients and stakeholders to deliver positive outcomes." },
  { title: "Sustainability", description: "Environmental care, social responsibility, and economic growth for the long term." },
];

const Vision = () => (
  <>
    <section className="bg-white py-20 md:py-24">
      <div className="site-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Vision</p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-blu md:text-5xl">
              A leading regional partner for mineral resources.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            To be the leading provider of innovative mining consultancy and services across Sub-Saharan Africa, delivering exceptional value and sustainable solutions to meet the evolving needs of the mineral resources sector. Through excellence, innovation, and strategic presence, we aim to empower clients for long-term success.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-blu py-20 text-white md:py-24">
      <div className="site-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Mission</p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Practical value in every engagement.
            </h2>
          </div>
          <p className="max-w-2xl border-t border-white/20 pt-7 text-lg leading-8 text-white/75 md:text-xl md:leading-9 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            At Minsol Limited, our mission is to deliver top-tier mining consultancy and logistics services that drive operational excellence and innovation. We understand the unique challenges of the mining industry and provide solutions that support efficiency, compliance, and growth.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-accent py-20 md:py-24">
      <div className="site-shell">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Our values</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-blu md:text-5xl">How we work.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 md:text-base">The principles that guide our teams, partnerships, and delivery.</p>
        </Reveal>
        <div className="grid border-l border-t border-slate-900/15 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70} className="h-full">
              <article className="h-full border-b border-slate-900/15 py-7 pr-7 sm:px-7 sm:py-8 sm:odd:border-r lg:[&:nth-child(3n+1)]:pl-6 lg:[&:nth-child(3n+1)]:pr-8 lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n+2)]:pl-8 lg:[&:nth-child(3n+2)]:pr-8 lg:[&:nth-child(3n+3)]:pl-8 lg:[&:nth-child(3n+3)]:pr-0">
                <Icon icon="carbon:checkmark-filled" className="h-5 w-5 text-main" />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-blu">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Vision;
