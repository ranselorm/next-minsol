import ProductHero from "@/components/ProductHero";
import Reveal from "@/components/Reveal";
import Premier from "@/components/Premier";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const services = [
  { image: "/images/tech.jpg", title: "Technical & Engineering", summary: "From feasibility studies and process design to procurement, construction management, and commissioning support.", details: "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization. Our comprehensive offerings cover equipment procurement, from sourcing and supplier management to contract negotiation, as well as construction management services, ensuring effective site management, equipment installation, and budget control. We oversee commissioning and provide ongoing support to ensure efficient, safe, and compliant operations throughout the lifecycle of your project, enhancing performance and meeting all regulatory standards." },
  { image: "/images/train.jpg", title: "Operational Training", summary: "Hands-on training that strengthens operational capability, safety, and process performance.", details: "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation, safety protocols, and process optimization to enhance skills, ensure compliance, and improve operational efficiency. We partner with Metcom, the world leader in training and knowledge transfer for mineral grinding circuits, to help improve grinding efficiency and reduce costs." },
  { image: "/images/manu.jpg", title: "Manufacturing & Distribution", summary: "Reliable supply of ground support systems, mill liners, grinding media, conveyor systems, steel products, and foundry services.", details: "We provide a wide range of high-quality products, from ground support systems and mill liners to grinding media, conveyor systems, and steel products. Our tailored design, fabrication, casting, and machining solutions support custom foundry needs." },
  { image: "/images/tenet.jpg", title: "Tenement Administration", summary: "Compliant, responsive administration for exploration tenure and mineral rights management.", details: "Our expert tenement administration services ensure efficient and legally compliant management of mineral exploration. We provide meticulous oversight and administration of tenements, including the preparation and lodgement of applications, renewals, and reductions for exploration tenures." },
  { image: "/images/f1.jpg", title: "Logistics & Transportation", summary: "End-to-end transport planning, supply chain support, sourcing, and delivery for mining operations.", details: "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain management, freight and shipping, transport planning, and fleet management. Our services also encompass the sourcing and delivery of mining and processing consumables, ensuring timely and cost-effective provision of essential materials and equipment." },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <ProductHero title="Our services" subtitle="Integrated expertise for more capable mineral resource operations." backgroundImage="/images/align1.jpg" />
      <main className="bg-white py-16 md:py-24">
        <div className="site-shell">
          <Reveal className="grid gap-7 border-b border-slate-900/10 pb-10 md:gap-10 md:pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Capabilities</p>
              <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">Expertise where operations need it most.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">Minsol brings technical, operational, manufacturing, and logistics capability together—supporting projects from early planning through safe, reliable delivery.</p>
          </Reveal>

          <div className="mt-10 md:mt-16">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <article className="grid gap-7 border-t border-slate-900/15 py-10 first:border-t-0 md:gap-8 md:py-16 lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className={`max-w-2xl ${index % 2 === 1 ? "lg:order-2 lg:pl-6" : "lg:pr-6"}`}>
                    <div className="mb-5 flex items-center gap-3 md:mb-6">
                      <span className="text-2xl font-medium leading-none tracking-[-0.04em] text-main md:text-3xl">0{index + 1}</span>
                      <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-slate-500">Service</span>
                    </div>
                    <h3 className="text-2xl font-medium tracking-[-0.025em] text-blu md:text-3xl">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg">{service.summary}</p>
                    <div className="mt-4 md:mt-5">
                      <button type="button" aria-expanded={expandedService === index} onClick={() => setExpandedService(expandedService === index ? null : index)} className="inline-flex min-h-11 items-center gap-2 border-b border-main text-sm text-main transition-colors hover:border-blu hover:text-blu">
                        {expandedService === index ? "Hide full scope" : "View full scope"}
                        <motion.span animate={{ rotate: expandedService === index ? 45 : 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.2 }} aria-hidden="true">+</motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {expandedService === index && (
                          <motion.div initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                            <p className="mt-4 border-l border-slate-900/15 pl-4 text-sm leading-6 text-slate-600 md:mt-5 md:pl-5 md:text-base md:leading-7">{service.details}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className={`group relative overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img src={service.image} alt={service.title} className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-72 md:h-[420px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101c25]/35 via-transparent to-transparent" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Premier />
      <section className="border-y border-slate-900/10 bg-white py-14 md:py-20">
        <div className="site-shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Project discussion</p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">Let&apos;s discuss your operational requirements.</h2>
          </Reveal>
          <a href="mailto:operationsgh@minsolltd.com" className="inline-flex w-fit items-center gap-3 border-b border-main pb-2 text-sm font-medium text-main transition-colors hover:border-blu hover:text-blu">Contact Minsol <span className="text-lg text-main" aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  );
};

export default Services;
