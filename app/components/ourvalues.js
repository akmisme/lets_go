"use client";
import React, { useState, useEffect } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useLocale } from "next-intl";
import { ENDPOINT, Image_URL } from "../endpoint/endpoint";

const OurValue = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);

  const getValues = async () => {
    try {
      const res = await axios.get(ENDPOINT.OurValue_List);
      setValues(res.data.data || []);
    } catch (error) {
      console.error("Our Value fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getValues();
  }, []);
  const getTitle = (about) => {
    switch (locale) {
      case "mm":
        return about.title_mm;
      default:
        return about.title_en;
    }
  };
  const getDescription = (about) => {
    switch (locale) {
      case "mm":
        return about.description_mm;
      default:
        return about.description_en;
    }
  };
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const aboutus = currentLocale === "mm" ? mm.about : en.about;
  
  return (
    <section className="mt-20">
      {/* Title */}
      {aboutus.map((about, index) => (
        <h1
          key={index}
          className="text-center text-4xl font-extrabold tracking-tight"
        >
          {about.title3}
        </h1>
      ))}
      {aboutus.map((about, index) => (
        <p key={index} className="text-center text-gray-500 mt-2 text-lg">
          {about.subtitle1}
        </p>
      ))}

      {/* Grid */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 mx-auto mt-14 px-6 max-w-6xl"
      >
        {values.map((v, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            key={i}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-[#F7E7C1] rounded-2xl shadow-inner mb-6">
              <img src={`${Image_URL}${v.image}`} alt={getTitle(v)} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {getTitle(v)}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">{getDescription(v)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValue;
