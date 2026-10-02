import React from "react";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
  flexImage: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  flexImage,
  imageAlt,
}) => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "400px" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-6 md:mt-0">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-6">{subtitle}</p>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            {buttonText}
          </Link>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={flexImage}
            alt={imageAlt}
            className="rounded-lg shadow-lg w-[100%] md:w-[450px] max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
