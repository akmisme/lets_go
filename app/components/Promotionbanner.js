"use client";
import Image from "next/image";
import React from "react";
import CopyTextButton from "./CopyButton";

const PromotionBanner = () => {
  return (
    <section className="mt-10">
    <h1 className="text-center text-2xl font-bold">Promotion Banner</h1>
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-[1025px]:grid-cols-2 px-5 mx-auto gap-4 mt-10 justify-center">
        <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-3 gap-2 hover:-mt-2 hover:mb-2 transition-transform ease-in-out duration-300">
          <Image
            src="/assets/promobanner/bagan.jpg"
            className="rounded-4xl"
            alt="#"
            height={300}
            width={300}
          />
          <CopyTextButton text="BLACKFRIDAY2025" />
        </div>
        <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2 hover:-mt-2 hover:mb-2 transition-transform ease-in-out duration-300">
          <Image
            src="/assets/promobanner/bagan.jpg"
            className="rounded-4xl"
            alt="#"
            height={300}
            width={300}
          />
          <CopyTextButton text="BLACKFRIDAY2025" />
        </div>
        <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2 hover:-mt-2 hover:mb-2 transition-transform duration-300">
          <Image
            src="/assets/promobanner/bagan.jpg"
            className="rounded-4xl"
            alt="#"
            height={300}
            width={300}
          />
          <CopyTextButton text="BLACKFRIDAY2025" />
        </div>
        <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2 hover:-mt-2 hover:mb-2 transition-transform duration-300">
          <Image
            src="/assets/promobanner/bagan.jpg"
            className="rounded-4xl"
            alt="#"
            height={300}
            width={300}
          />
          <CopyTextButton text="BLACKFRIDAY2025" />
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;