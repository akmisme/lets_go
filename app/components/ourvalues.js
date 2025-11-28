import React from "react";

const OurValue = () => {
  return (
    <section className="mt-10">
      <h1 className="text-center text-2xl font-bold">Our Values</h1>
      <div className="grid grid-cols-3 max-[1025px]:grid-cols-2 max-lg:grid-cols-1 mx-auto mt-10 px-10 gap-5 max-lg:mx-30 max-md:mx-auto">
        <div className="flex max-lg:flex-col gap-10 bg-[#D8AF53] p-3 rounded-4xl items-center justify-center hover:shadow-lg hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
          <img src="/assets/ourvalues/first.svg" alt="#" className="w-20" />
          <div className="flex flex-col gap-2 text-base text-justify text-white">
            <h1 className="font-bold">Customer Come First</h1>
            <p className="leading-relaxed indent-10">
              We believe travel can change lives for the better. That’s why we
              strive to help customers fulfill their lifelong dreams to discover
              the joy and beauty of the world.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-10 bg-[#936521] p-3 rounded-4xl items-center justify-center hover:shadow-lg hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
          <img src="/assets/ourvalues/mind.svg" alt="#" className="w-20" />
          <div className="flex flex-col gap-2 text-base text-justify text-white">
            <h1 className="font-bold">Embrace the growth mindset</h1>
            <p className="leading-relaxed indent-10">
              We embrace challenges as opportunities to learn and grow,
              empowered by our determination to overcome any obstacle and
              achieve greatness together.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-10 bg-[#D8AF53] p-3 rounded-4xl items-center justify-center hover:shadow-lg hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
          <img
            src="/assets/ourvalues/transparency.svg"
            alt="#"
            className="w-20"
          />
          <div className="flex flex-col gap-2 text-base text-justify text-white">
            <h1 className="font-bold">Transparency above everything</h1>
            <p className="leading-relaxed indent-10">
              Transparency fuels our commitment to excellence as a team,
              enabling us to learn from each other’s triumphs and setbacks, and
              work together towards a shared vision.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-10 bg-[#936521] p-3 rounded-4xl items-center justify-center hover:shadow-lg hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
          <img src="/assets/ourvalues/globe.svg" alt="#" className="w-20" />
          <div className="flex flex-col gap-2 text-base text-justify text-white">
            <h1 className="font-bold">Keep traveling</h1>
            <p className="leading-relaxed indent-10">
              We believe travel is a transformative experience that expands our
              horizons and inspires us to create a better world, one organized
              adventure at a time.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-10 bg-[#D8AF53] p-3 rounded-4xl items-center justify-center hover:shadow-lg hover:-mt-1 hover:mb-1 transition-all ease-in-out duration-300">
          <img src="/assets/ourvalues/rocket.svg" alt="#" className="w-20" />
          <div className="flex flex-col gap-2 text-base text-justify text-white">
            <h1 className="font-bold">#LDTS</h1>
            <p className="leading-relaxed indent-10">
              Let’s Do This Shit. A powerful reminder of our unwavering belief
              in teamwork and determination, inspiring us to overcome any
              challenge and achieve greatness together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
