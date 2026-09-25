import { Icon } from "@iconify/react";
import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    icon: "arcticons:idle-miner",
    title: "Mill Liners",
    items: [
      { title: "SAG Mill & Ball Mill Liners", description: "Enhance the performance and longevity of your mills with our high-quality liners." },
      { title: "Protective Linings", description: "Protect your equipment with our advanced lining solutions." },
      { title: "Track Encapsulation Systems", description: "Expertly designed and manufactured by Polycorp, our encapsulation systems provide superior protection." },
    ],
  },
  {
    icon: "ic:sharp-grain",
    title: "Grinding Media",
    items: [
      { title: "Steel Balls", description: "Available in diameters of 50mm, 60mm, 80mm, 90mm, 100mm, and 110mm, our steel balls are produced by West Africa Forgings Ltd., Ghana, ensuring durability and performance." },
    ],
  },
  {
    icon: "arcticons:audio-video-factory",
    title: "Processing Plant Equipment",
    items: [
      { title: "Equipment portfolio", description: "A full suite of processing equipment including pythons, modular systems, inline pressure jigs, leach reactors, spinners, and IPJ-coal separators. Equipment is designed and manufactured by GEKKO and suited for extracting a range of minerals including gold, sulphide gold, silver, coal, polymetallic ores, tin, tantalum, and gemstones." },
    ],
  },
];

const Premier = () => (
  <section className="bg-accent py-16 md:py-24">
    <div className="site-shell">
      <Reveal className="grid gap-7 border-b border-slate-900/10 pb-10 md:gap-10 md:pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Related product capability</p>
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">Premier Solutions for Mineral Processing Needs</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
          At Minsol, we leverage our strategic partnerships with industry-leading manufacturers and service providers to deliver top-quality products and services across the sub-region. Our extensive portfolio is designed to meet the diverse needs of the mining and processing industries.
        </p>
      </Reveal>

      <div className="mt-10 flex items-center justify-between gap-5 md:mt-12">
        <p className="text-sm leading-6 text-slate-600">A focused selection from our wider product portfolio.</p>
        <Link href="/products" className="shrink-0 border-b border-main pb-1 text-sm font-medium text-main transition-colors hover:border-blu hover:text-blu">Explore products <span aria-hidden="true">→</span></Link>
      </div>
      <div className="mt-8 grid border-l border-t border-slate-900/15 md:mt-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80} className="h-full">
            <article className="h-full border-b border-r border-slate-900/15 p-6 md:p-8">
              <Icon icon={project.icon} className="h-9 w-9 text-main" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-main md:mt-8">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-blu">{project.title}</h3>
              <div className="mt-6 space-y-5 border-t border-slate-900/10 pt-5 md:mt-7 md:pt-6">
                {project.items.map((item) => (
                  <p key={item.title} className="text-sm leading-6 text-slate-600">
                    <span className="block font-medium text-blu">{item.title}</span>
                    <span className="mt-1 block">{item.description}</span>
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Premier;
