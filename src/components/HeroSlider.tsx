import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/welcome.jpg",
    title: "Welcome to Minsol Limited",
    description:
      "Your premier partner in consultancy and logistics for the mineral resources industry. We specialize in providing innovative solutions across a broad spectrum of services",
    buttonText: "Explore our services",
    link: "/services",
  },
  {
    image: "/images/manu.jpg",
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media, conveyor systems, and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    buttonText: "Explore products",
    link: "/products",
  },
  {
    image: "/images/train.jpg",
    title: "Training for Mining/Processing Personnel",
    description:
      "Specialized programs to enhance the skills and safety of operational teams",
    buttonText: "Explore our services",
    link: "/services",
  },
  {
    image: "/images/tech.jpg",
    title: "Technical and Engineering Services",
    description:
      "Comprehensive engineering, procurement, and construction management (EPCM) solutions.",
    buttonText: "Explore our services",
    link: "/services",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (!isManual) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 10000);

      return () => clearInterval(slideInterval);
    }
  }, [isManual]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsManual(true);

    setTimeout(() => setIsManual(false), 10000);
  };

  return (
    <section
      className="relative h-[560px] overflow-hidden md:h-[620px]"
      aria-roledescription="carousel"
      aria-label="Featured Minsol services"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#101c25]/95 via-[#101c25]/75 to-[#101c25]/20" />
          <div className="site-shell relative z-10 flex h-full items-center">
            <div className="max-w-2xl text-left text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary md:text-sm">
                Mineral resources solutions
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-6xl">
                {slide.title}
              </h1>
              <p className="my-7 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                tabIndex={index === currentSlide ? 0 : -1}
                className="inline-flex items-center gap-2 rounded-sm bg-secondary px-5 py-3 text-sm font-semibold text-blu transition-colors hover:bg-[#e0b84e]"
              >
                {slide.buttonText}
                <Icon icon="ep:right" width="18" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-5 z-20 flex gap-2 md:left-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "h-1 w-10 bg-secondary"
                : "h-1 w-5 bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
