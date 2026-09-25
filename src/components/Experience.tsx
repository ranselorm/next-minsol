import Reveal from "./Reveal";

const chemicals = [
  {
    image: "/images/ch1.jpg",
    title: "Mining Reagents",

    description: "Activated Carbon, Sodium Cyanide & Hydrogen Peroxide",
  },
  {
    image: "/images/ch2.png",
    title: "Industrial Chemicals",

    description:
      "Barium Sulphate, Calcium Chloride, Caustic Soda, Hydrated Lime, Sodium Metabisulphite & Sodium Silicate",
  },
  {
    image: "/images/ch3.png",
    title: "Processing Aids",

    description: "Magnesium Oxide, Nitric Acid & Soda Ash",
  },
];

const Experience = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-shell">
        <Reveal className="flex flex-col justify-between gap-5 border-b border-slate-900/10 pb-10 md:flex-row md:items-end md:pb-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-main">Product groups</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-blu md:text-4xl">A focused chemical portfolio.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">Sourced to support reliable processing, safe handling, and consistent operational supply.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:grid-rows-2 md:mt-10">
          {chemicals.map((chemical, index) => {
            const isLead = index === 0;
            return (
              <Reveal key={chemical.title} delay={index * 70} className={isLead ? "lg:col-span-5 lg:row-span-2" : "lg:col-span-7"}>
                <article className={`group relative isolate overflow-hidden rounded-lg ${isLead ? "h-[340px] md:h-[460px]" : "h-[260px] md:h-[220px]"}`}>
                  <img src={chemical.image} alt={chemical.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101c25]/90 via-[#101c25]/30 to-[#101c25]/5" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.16em] text-secondary">0{index + 1}</span>
                      <span className="h-px w-7 bg-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] md:text-3xl">{chemical.title}</h3>
                    <p className={`mt-2 max-w-xl text-sm leading-6 text-white/80 ${isLead ? "md:text-base md:leading-7" : ""}`}>{chemical.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
