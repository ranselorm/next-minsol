import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/33122148/pexels-photo-33122148/free-photo-of-aerial-view-of-industrial-open-pit-mining-operation.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Welcome to Minsol Limited",
    description:
      "Your premier partner in consultancy and logistics for the mineral resources industry. We specialize in providing innovative solutions across a broad spectrum of services",
    buttonText: "Explore our services",
    link: "/services",
  },
  {
    image:
      "https://images.pexels.com/photos/31352672/pexels-photo-31352672/free-photo-of-industrial-factory-floor-with-machinery.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media, conveyor systems, and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    buttonText: "Explore products",
    link: "/products",
  },
  {
    image:
      "https://images.pexels.com/photos/8487375/pexels-photo-8487375.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Training for Mining/Processing Personnel",
    description:
      "Specialized programs to enhance the skills and safety of operational teams",
    buttonText: "Explore our services",
    link: "/services",
  },
  {
    image: "/images/rel.png",
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
  const reduceMotion = useReducedMotion();

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
      className="relative h-[560px] overflow-hidden md:h-[680px]"
      aria-roledescription="carousel"
      aria-label="Featured Minsol services"
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          aria-hidden={index !== currentSlide}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.01,
          }}
          transition={{ duration: reduceMotion ? 0.15 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 ${index === currentSlide ? "z-10" : "z-0"}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#101c25]/95 via-[#101c25]/75 to-[#101c25]/20" />
          <div className="site-shell relative z-10 flex h-full items-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 8 }}
              transition={{
                duration: reduceMotion ? 0.15 : 0.5,
                delay: reduceMotion || index !== currentSlide ? 0 : 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-left text-white"
            >
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
            </motion.div>
          </div>
        </motion.div>
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
