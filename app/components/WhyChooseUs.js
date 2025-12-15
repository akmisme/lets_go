import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-16 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center md:text-left md:mx-20">
        Why Choose Us?
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="
          grid 
          grid-cols-4 
          gap-12 
          mx-20 
          max-xl:grid-cols-3
          max-lg:grid-cols-2 
          max-md:grid-cols-2
          max-sm:grid-cols-1 
          max-sm:mx-10
        "
      >
        {/* CARD 1 */}
        <div className="flex flex-col gap-4 max-w-sm max-sm:items-center">
          <img
            src="/assets/whychooseus/heart.svg"
            alt="#"
            width={60}
            height={60}
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          />
          <h1 className="text-lg font-bold text-center md:text-left">
            Official partner of global rail operators
          </h1>
          <p className="text-base text-gray-400 text-center md:text-left leading-relaxed">
            We work with over 300 companies, including National Rail,
            Trenitalia, Renfe, DB, and SNCF
          </p>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col gap-4 max-w-sm max-sm:items-center">
          <img
            src="/assets/whychooseus/tags.svg"
            alt="#"
            width={60}
            height={60}
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          />
          <h1 className="text-lg font-bold text-center md:text-left">
            Cheap trains in Europe and Asia
          </h1>
          <p className="text-base text-gray-400 text-center md:text-left leading-relaxed">
            Promotions and discounts for getting cheap train tickets
          </p>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col gap-4 max-w-sm max-sm:items-center">
          <img
            src="/assets/whychooseus/coin.svg"
            alt="#"
            width={60}
            height={60}
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          />
          <h1 className="text-lg font-bold text-center md:text-left">
            Multiple currencies accepted
          </h1>
          <p className="text-base text-gray-400 text-center md:text-left leading-relaxed">
            35 currencies accepted, including GBP, USD, EUR, and more
          </p>
        </div>

        {/* CARD 4 */}
        <div className="flex flex-col gap-4 max-w-sm max-sm:items-center">
          <img
            src="/assets/whychooseus/24.svg"
            alt="#"
            width={60}
            height={60}
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          />
          <h1 className="text-lg font-bold text-center md:text-left">
            Online customer support
          </h1>
          <p className="text-base text-gray-400 text-center md:text-left leading-relaxed">
            Quick response time, no waiting around required!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;