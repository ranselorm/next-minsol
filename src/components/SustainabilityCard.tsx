import Reveal from "./Reveal";

interface SustainabilityCardProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
  index: number;
}

const SustainabilityCard = ({ imageSrc, title, description, reverse = false, index }: SustainabilityCardProps) => (
  <section className={index % 2 === 0 ? "bg-white py-20 md:py-24" : "bg-accent py-20 md:py-24"}>
    <div className="site-shell">
      <Reveal className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden border border-slate-900/10 bg-white p-2 md:p-3">
          <img src={imageSrc} alt={title} className="h-[280px] w-full object-cover md:h-[420px]" />
        </div>
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Service 0{index + 1}</p>
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">{title}</h2>
          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">{description}</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default SustainabilityCard;
