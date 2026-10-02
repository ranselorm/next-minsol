import React from "react";
import Link from "next/link";

const Consultant: React.FC = () => {
  return (
    <section className="bg-blu py-10">
      <div className="text-white flex items-center gap-x-8 justify-between container mx-auto px-4 md:px-20">
        <h2 className="text-lg md:text-2xl font-semibold">
          Let a consultant answer your questions
        </h2>
        <Link
          href="/contact"
          className="bg-main hover:bg-black text-white font-semibold py-2 px-8 rounded-md transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Consultant;
