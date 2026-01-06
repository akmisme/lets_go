"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { useLocale } from "next-intl";
import axios from "axios";
import { ENDPOINT, Image_URL } from "../endpoint/endpoint";

const WhyChooseUs = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [wh, setWhy] = useState([]);
  const locale = useLocale();

  const getWhy = async () => {
    try {
      const res = await axios.get(ENDPOINT.Why_List);
      setWhy(res.data.data || []);
    } catch (error) {
      console.error("Why Choose Us fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWhy();
  }, []);

   const getTitle = (wh) => {
    switch (locale) {
      case "mm":
        return wh.title_mm;
      default:
        return wh.title_en;
    }
  }
  const getDescription = (wh) => {
    switch (locale) {
      case "mm":
        return wh.description_mm;
      default:
        return wh.description_en;
    }
  };

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const why = currentLocale === "mm" ? mm.home : en.home;

  return (
    <section className="mt-16 px-6">
      {why.map((why, index) => (
        <h1
          key={index}
          className="text-3xl font-bold mb-10 text-center md:text-left md:mx-20"
        >
          {why.title4}
        </h1>
      ))}
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
        {wh.map((wh)=>(
        <div key={wh.id} className="flex flex-col gap-4 max-w-sm max-sm:items-center">
          <img
            src={`${Image_URL}${wh.icon}`}
            alt={getTitle(wh)}
            width={60}
            height={60}
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          />
          <h1 className="text-lg font-bold text-center md:text-left">
            {getTitle(wh)}
          </h1>
          <p className="text-base text-gray-400 text-center md:text-left leading-relaxed">
            {getDescription(wh)}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
