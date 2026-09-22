import React from "react";
import Reveal from "./Reveal";

const solutions = [
  {
    title: "Technical and Engineering",
    description:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization.",
    details:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization. Our comprehensive offerings cover equipment procurement, from sourcing and supplier management to contract negotiation, as well as construction management services, ensuring effective site management, equipment installation, and budget control. We oversee commissioning and provide ongoing support to ensure efficient, safe, and compliant operations throughout the lifecycle of your project, enhancing performance and meeting all regulatory standards.",
    buttonText: "More Information",
    image: "/images/tech.jpg",
  },
  {
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products.",
    details:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    buttonText: "More Information",
    image: "/images/manu.jpg",
  },
  {
    title: "Training for Mining Operational Personnel",
    description:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation.",
    details:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation, safety protocols, and process optimization to enhance skills, ensure compliance, and improve operational efficiency. We offer specialized training for mining operational personnel, partnering with Metcom, the world leader in training and knowledge transfer for mineral grinding circuits. Metcom's comprehensive programs enhance skills, improve grinding efficiency, and reduce costs, covering all aspects of optimizing plant grinding and classification circuits to boost operational performance and ensure safety and compliance.",
    buttonText: "More Information",
    image: "/images/train.jpg",
  },
  {
    title: "Logistics and Transportation",
    description:
      "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain",
    details:
      "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain management, freight and shipping, transport planning, and fleet management. Our services also encompass the sourcing and delivery of mining and processing consumables, ensuring timely and cost-effective provision of essential materials and equipment while maintaining regulatory compliance and optimizing overall supply chain efficiency.",
    buttonText: "More Information",
    image: "/images/f1.jpg",
  },
];

interface SolutionsProps {
  onSolutionClick: (item: any) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onSolutionClick }) => {
  return (
    <section className="py-20 md:py-24">
      <div className="site-shell">
        <Reveal className="mb-10 md:mb-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-main">
              What we do
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-blu md:text-5xl">
              Solutions built for operational confidence.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 md:text-base">
            Specialist expertise across the mineral resources value chain.
          </p>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <Reveal key={index} delay={index * 80} className="h-full">
              <div className="group flex h-full min-h-[380px] flex-col overflow-hidden border border-slate-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-main/30 hover:shadow-xl hover:shadow-slate-900/10">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div>
                  <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-main">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold leading-7 tracking-[-0.02em] text-blu">
                    {solution.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                </div>
                <button
                  className="mt-5 inline-flex w-fit items-center gap-2 border-b border-main pb-1 text-sm font-semibold text-main transition-colors hover:border-blu hover:text-blu focus-visible:rounded-sm"
                  onClick={() => onSolutionClick(solution)}
                >
                  {solution.buttonText}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
