"use client";
import React, { useState, useEffect } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import axios from "axios";
import { Image_URL } from "../endpoint/endpoint";

export default function YangonExp() {
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [ygnexp, setYGNEXP] = useState([]);

  const getYGNEXP = async () => {
    try {
      const res = await axios.get(ENDPOINT.YGN_Exp_List);
      setYGNEXP(res.data.data || []);
    } catch (error) {
      console.error("Yangon Experiences fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getYGNEXP();
  }, []);

  const getTitle = (ygnexp) => {
    switch (locale) {
      case "mm":
        return ygnexp.title_mm;
      default:
        return ygnexp.title_en;
    }
  };
  const getParagraph = (ygnexp) => {
    switch (locale) {
      case "mm":
        return ygnexp.para_mm;
      default:
        return ygnexp.para_en;
    }
  };
  const getSubTitle = (ygnexp) => {
    switch (locale) {
      case "mm":
        return ygnexp.subtitle_mm;
      default:
        return ygnexp.subtitle_en;
    }
  };
  const getShouldKnow = (ygnexp) => {
    switch (locale) {
      case "mm":
        return ygnexp.shouldknow_mm;
      default:
        return ygnexp.shouldknow_en;
    }
  };
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const experiences = currentLocale === "mm" ? mm.experiences : en.experiences;
  return (
    <section className="mt-10">
      {experiences.map((exp, index) => (
        <h1 key={index} className="text-3xl font-bold mb-5 text-center">
          {exp.yangon}
        </h1>
      ))}
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-10 mx-auto">
        {ygnexp.map((y,i)=>(
        <div
          key={i}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-2 bg-white rounded-md shadow-md"
        >
          <img
            src={`${Image_URL}${y.image}`}
            alt={getTitle(y)}
            width={300}
            className="w-full rounded-t-md"
          />
          <h1 className="text-base font-bold px-2">
            {getTitle(y)}
          </h1>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
            {getParagraph(y)}
          </p>
          <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
            Price - {y.price} MMK
          </p>
          <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
            Book Now
          </button>
        </div>
        ))}
      </div>
    </section>
  );
}
