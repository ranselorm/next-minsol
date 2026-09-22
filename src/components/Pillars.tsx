import React from "react";

const Pillars: React.FC = () => {
  return (
    <section className="bg-blu py-20 text-white md:py-24">
      <div className="site-shell grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <header>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Our commitment
          </p>
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
            Progress that respects people and place.
          </h2>
        </header>
        <div className="border-t border-white/20 pt-7 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <p className="text-base leading-7 text-white/80 md:text-lg md:leading-8">
            We are dedicated to promoting sustainable practices in all aspects of
            our operations. By prioritizing environmental stewardship, social
            responsibility, and economic viability, we aim to contribute to the
            long-term health of the mining industry and the communities we serve.
          </p>
          <p className="mt-6 text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Minsol Limited is proud to be a leading provider of mining consultancy
            and logistics services in Sub-Saharan Africa, with a diverse portfolio
            that includes corporate studies, logistics, product manufacturing, and
            onsite support. Our dedication to excellence, innovation, and
            sustainability, combined with our adaptive approach, has
            solidified our position as a trusted partner in the mining industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
