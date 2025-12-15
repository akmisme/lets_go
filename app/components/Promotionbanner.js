"use client";
import Image from "next/image";
import React from "react";
import CopyTextButton from "./CopyButton";

const PromotionBanner = () => {
  return (
    <section className="mt-14 px-4">
      <h1 className="text-center text-3xl font-bold tracking-wide">
        Promotion Banner
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="
          grid 
          grid-cols-4 
          max-[1280px]:grid-cols-3
          max-[1024px]:grid-cols-2 
          max-md:grid-cols-1
          gap-6 
          mt-12 
          max-w-7xl 
          mx-auto
        "
      >
        {/* CARD */}
        {[
          "/assets/promobanner/bagan.jpg",
          "/assets/promobanner/hpa-an.jpg",
          "/assets/promobanner/kalaw.jpg",
          "/assets/promobanner/mandalay.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className="
              bg-white 
              rounded-xl 
              shadow-sm 
              hover:shadow-lg 
              transition-all 
              duration-500 
              hover:-translate-y-1 
              p-5 
              flex 
              flex-col 
              gap-3
            "
          >
            <Image
              src={img}
              alt="promo"
              height={500}
              width={500}
              className="rounded-lg object-cover"
            />

            <p className="text-gray-500 text-sm mt-1">7days · Private Tour</p>

            <CopyTextButton text="BLACKFRIDAY2025" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionBanner;