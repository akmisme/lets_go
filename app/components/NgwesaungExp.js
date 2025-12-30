"use client";
import React, { useState, useEffect } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import axios from "axios";
import { ENDPOINT, Image_URL } from "../endpoint/endpoint";

export default function NgwesaungExp() {
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [ngexp, setNgExp] = useState([]);

  const getNgexp = async () => {
    try {
      const res = await axios.get(ENDPOINT.Ng_Exp_List);
      setNgExp(res.data.data || []);
    } catch (error) {
      console.error("Ngwesaung Experiences fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNgexp();
  }, []);

  const getTitle = (ngexp) => {
    switch (locale) {
      case "mm":
        return ngexp.title_mm;
      default:
        return ngexp.title_en;
    }
  };
  const getParagraph = (ngexp) => {
    switch (locale) {
      case "mm":
        return ngexp.para_mm;
      default:
        return ngexp.para_en;
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
    <section className="mt-10 pb-5">
      {experiences.map((exp, index) => (
        <h1 key={index} className="text-3xl font-bold mb-5 text-center">
          {exp.ngwesaung}
        </h1>
      ))}
      {/* Loading State */}
      {loading && (
        <p className="mx-auto w-10 h-10 border-4 border-t-[#D8AF53] border-gray-300 rounded-full animate-spin"></p>
      )}
      {!loading && ngexp.length > 0 && (
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-10 mx-auto">
          {ngexp.map((ng, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
              className="flex flex-col gap-2 bg-white rounded-md shadow-md"
            >
              <img
                src={`${Image_URL}${ng.image}`}
                alt={getTitle(ng)}
                width={300}
                className="w-full rounded-t-md"
              />
              <h1 className="text-base font-bold px-2">{getTitle(ng)}</h1>
              <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify indent-10">
                {getParagraph(ng)}
              </p>
              <p className="text-base line-clamp-2 px-2 leading-relaxed text-justify">
                Price - {ng.price} MMK
              </p>
              <button className="text-white mx-auto bg-[#936521] hover:bg-[#D8AF53] mb-5 transition ease-in-out duration-500 cursor-pointer p-2 rounded-md">
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
