import Reveal from "./Reveal";

const ParallaxHero = () => (
  <section className="border-y border-slate-900/10 bg-accent py-16 md:py-24">
    <div className="site-shell">
      <Reveal className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Reagents &amp; processing inputs</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">Essential inputs for demanding operations.</h2>
        </div>
        <div className="border-l border-slate-900/15 pl-6 md:pl-8">
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">At Minsol Limited, we supply a wide range of high-quality chemicals and mining reagents to the mining, oil, and gas industries—selected for rigorous industrial applications.</p>
          <div className="mt-8 grid gap-5 border-t border-slate-900/10 pt-6 sm:grid-cols-2">
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-main">Industries</p><p className="mt-2 text-sm leading-6 text-slate-600">Mining, oil &amp; gas</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-main">Product groups</p><p className="mt-2 text-sm leading-6 text-slate-600">Reagents, chemicals &amp; processing aids</p></div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ParallaxHero;
