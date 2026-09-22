import React from "react";

interface ProductsHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const ProductHero: React.FC<ProductsHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section
      className="relative flex h-[420px] items-end overflow-hidden md:h-[500px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#101c25]/95 via-[#101c25]/70 to-[#101c25]/20" />

      <div className="site-shell relative z-10 pb-14 md:pb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Minsol Limited
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default ProductHero;
