import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-10">
      <h1 className="mx-20 font-bold text-3xl mb-5">Why Choose Us?</h1>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className="grid grid-cols-4 max-[769px]:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-10 justify-around mx-20 gap-10">
        <div className="flex flex-col gap-3 max-w-fit max-sm:items-center">
          <img
            src="/assets/whychooseus/heart.svg"
            alt="#"
            className="bg-gray-100"
            width={60}
            height={60}
          />
          <h1 className="text-base font-bold">
            Official partner of global rail operators
          </h1>
          <p className="text-base text-gray-400">
            We work with over 300 companies, including National Rail,
            Trenitalia, Renfe, DB, and SNCF
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-fit max-sm:items-center">
          <img
            src="/assets/whychooseus/tags.svg"
            alt="#"
            width={60}
            height={60}
          />
          <h1 className="text-base font-bold">
            Cheap trains in Europe and Asia
          </h1>
          <p className="text-base text-gray-400">
            Promotions and discounts for getting cheap train tickets
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-fit max-sm:items-center">
          <img
            src="/assets/whychooseus/coin.svg"
            alt="#"
            width={60}
            height={60}
          />
          <h1 className="text-base font-bold">Multiple currencies accepted</h1>
          <p className="text-base text-gray-400">
            35 currencies accepted, including GBP, USD, EUR, and more
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-fit max-sm:items-center">
          <img
            src="/assets/whychooseus/24.svg"
            alt="#"
            width={60}
            height={60}
          />
          <h1 className="text-base font-bold">Online customer support</h1>
          <p className="text-base text-gray-400">
            Quick response time, no waiting around required!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
