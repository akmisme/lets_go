"use client";
import React from "react";
import { usePathname } from "next/navigation";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";

export default function BaganExp() {
  const pathname = usePathname();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const experiences = currentLocale === "mm" ? mm.experiences : en.experiences;
  return (
    <section>
      {experiences.map((exp,index)=>(
      <h1 key={index} className="text-3xl font-bold mb-5 text-center">{exp.bagan}</h1>
      ))}
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-10 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-2 bg-white rounded-md shadow-md"
        >
          <img
            src="/assets/promobanner/bagan.jpg"
            alt="#"
            width={300}
            className="w-full rounded-t-md"
          />
          <h1 className="text-base font-bold px-2">
            Hot Air Ballooning over Bagan
          </h1>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
            You’ll float above thousands of ancient pagodas, stupas, and the
            Irrawaddy River.
          </p>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
            Price - 80$
          </p>
          <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
            Book Now
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-2 bg-white rounded-md shadow-md"
        >
          <img
            src="/assets/promobanner/bagan.jpg"
            alt="#"
            width={300}
            className="w-full rounded-t-md"
          />
          <h1 className="text-base font-bold px-2">
            Hot Air Ballooning over Bagan
          </h1>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
            You’ll float above thousands of ancient pagodas, stupas, and the
            Irrawaddy River.
          </p>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
            Price - 80$
          </p>
          <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
            Book Now
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-2 bg-white rounded-md shadow-md"
        >
          <img
            src="/assets/promobanner/bagan.jpg"
            alt="#"
            width={300}
            className="w-full rounded-t-md"
          />
          <h1 className="text-base font-bold px-2">
            Hot Air Ballooning over Bagan
          </h1>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
            You’ll float above thousands of ancient pagodas, stupas, and the
            Irrawaddy River.
          </p>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
            Price - 80$
          </p>
          <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
            Book Now
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-2 bg-white rounded-md shadow-md"
        >
          <img
            src="/assets/promobanner/bagan.jpg"
            alt="#"
            width={300}
            className="w-full rounded-t-md"
          />
          <h1 className="text-base font-bold px-2">
            Hot Air Ballooning over Bagan
          </h1>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
            You’ll float above thousands of ancient pagodas, stupas, and the
            Irrawaddy River.
          </p>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
            Price - 80$
          </p>
          <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
