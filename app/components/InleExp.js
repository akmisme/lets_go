"use client";
import React, { useState, useEffect } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import axios from "axios";
import { ENDPOINT, Image_URL } from "../endpoint/endpoint";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function InleExp() {
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [inleexp, setInexp] = useState([]);

  const getInexp = async () => {
    try {
      const res = await axios.get(ENDPOINT.Inle_Exp_List);
      setInexp(res.data.data || []);
    } catch (error) {
      console.error("Inle Experiences fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getInexp();
  }, []);

  const getTitle = (inleexp) => {
    switch (locale) {
      case "mm":
        return inleexp.title_mm;
      default:
        return inleexp.title_en;
    }
  };

  const getParagraph = (inleexp) => {
    switch (locale) {
      case "mm":
        return inleexp.para_mm;
      default:
        return inleexp.para_en;
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
          {exp.inle}
        </h1>
      ))}
      {/* Loading State */}
      {loading && (
        <p className="mx-auto w-10 h-10 border-4 border-t-[#D8AF53] border-gray-300 rounded-full animate-spin"></p>
      )}
      {!loading && inleexp.length > 0 && (
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-10 mx-auto">
          {inleexp.map((inl) => (
             <div
              key={inl.id}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
              className="flex flex-col gap-2 bg-white rounded-md shadow-md"
            >
              <div class="w-full max-w-sm bg-neutral-primary-soft p-6 border-default rounded-base shadow-xs">
                <img
                  class="rounded-base mb-6"
                  src={`${Image_URL}${inl.image}`}
                  alt="product image"
                />
                <div>
                  <h5 class="text-xl text-heading font-semibold tracking-tight line-clamp-2">
                    {getTitle(inl)}
                  </h5>
                  <div class="flex flex-col gap-3 mt-6">
                    <span class="text-base font-extrabold text-heading">
                      {inl.price} MMK
                    </span>
                    <Link href={`/inleexp/details/${inl.id}`}>
                      <button
                        type="button"
                        class="inline-flex text-white bg-[#936521] hover:bg-[#D8AF53] cursor-pointer transition-all ease-in-out duration-300 items-center font-medium leading-5 rounded-base text-sm px-3 py-2"
                      >
                        Detail & Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
