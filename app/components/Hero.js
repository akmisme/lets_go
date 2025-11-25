import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Promotion
        </h1>
        <ul className="flex gap-2 space-y-2 text-lg">
          <li className="flex items-center gap-2">
            ✅ <span>Black Friday</span> |
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>With Codes</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
