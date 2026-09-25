import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const slides = [
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.10.jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.10 (1).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.10 (2).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.11.jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.11 (1).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.11 (2).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.11 (3).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.12.jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.12 (1).jpeg",
  "/conveyor-images/WhatsApp Image 2026-09-23 at 17.59.12 (2).jpeg",
];

const productTypes = ["Conveyor rollers", "Impact rollers", "Steel frames", "HDPE rollers", "Pulleys", "Scrapers", "Belt components"];

const ConveyorShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5200);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const moveSlide = (direction: 1 | -1) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section className="bg-blu py-16 text-white md:py-24">
      <div className="site-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">WACO manufacturing</p>
            <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">Conveyor system products.</h2>
          </div>
          <div className="border-l border-white/20 pl-6 md:pl-8">
            <p className="max-w-2xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">Through our sister manufacturing company, WACO, we supply and sell a comprehensive range of conveyor rollers, impact rollers, steel frames, HDPE rollers, pulleys, scrapers, and conveyor belt components. Every product is engineered for durability, precision, and long operational life — manufactured to the highest quality standards and trusted by mining, construction, and industrial operations across West Africa.</p>
          </div>
        </Reveal>

        <Reveal className="mt-10 border-t border-white/15 pt-8 md:mt-14 md:pt-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_20rem] lg:gap-10">
            <div className="relative overflow-hidden rounded-lg bg-white/5">
              <div className="relative h-[300px] sm:h-[420px] md:h-[520px]">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={slides[activeSlide]}
                    src={slides[activeSlide]}
                    alt={`WACO conveyor system product ${activeSlide + 1}`}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
                    transition={{ duration: shouldReduceMotion ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#101c25]/80 via-[#101c25]/10 to-transparent p-5 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">WACO product range</p>
                  <p className="text-sm tabular-nums text-white/75">{String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/15 px-5 py-4 md:px-7">
                <div className="flex gap-2" aria-label="Slide selection">
                  {slides.map((slide, index) => (
                    <button key={slide} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show conveyor image ${index + 1}`} aria-current={activeSlide === index ? "true" : undefined} className={`h-1.5 transition-all ${activeSlide === index ? "w-7 bg-secondary" : "w-3 bg-white/35 hover:bg-white/65"}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => moveSlide(-1)} className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:border-secondary hover:text-secondary" aria-label="Previous conveyor image"><Icon icon="mdi:arrow-left" width="19" /></button>
                  <button type="button" onClick={() => moveSlide(1)} className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:border-secondary hover:text-secondary" aria-label="Next conveyor image"><Icon icon="mdi:arrow-right" width="19" /></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Product range</p>
                <ul className="mt-5 divide-y divide-white/15 border-t border-white/15">
                  {productTypes.map((product) => <li key={product} className="py-3 text-base text-white/85">{product}</li>)}
                </ul>
              </div>
              <p className="mt-8 text-sm leading-6 text-white/55">Manufactured for reliable material handling in demanding operational environments.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ConveyorShowcase;
