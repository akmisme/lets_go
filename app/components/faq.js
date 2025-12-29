"use client";
import React, { useEffect, useState } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import axios from "axios";
import { ENDPOINT } from "../endpoint/endpoint";
import { fa } from "zod/v4/locales";

const FAQ = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [faq, setFAQ] = useState([]);

  const getFAQ = async () => {
    try {
      const res = await axios.get(ENDPOINT.FAQ_List);
      setFAQ(res.data.data || []);
    } catch (error) {
      console.error("FAQ fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFAQ();
  }, []);

  const getTitle = (faq) => {
    switch (locale) {
      case "mm":
        return faq.title_mm;
      default:
        return faq.title_en;
    }
  };
  const getDescription = (faq) => {
    switch (locale) {
      case "mm":
        return faq.description_mm;
      default:
        return faq.description_en;
    }
  };

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const contactus = currentLocale === "mm" ? mm.contact : en.contact;
  return (
    <section className="mt-10 pb-5">
      {contactus.map((contact, index) => (
        <h1 key={index} className="mb-5 font-bold text-2xl mx-20 max-xl:mx-5">
          {contact.title2}
        </h1>
      ))}
      <div className="grid grid-cols-3 gap-5 mx-20 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:mx-5">
      {faq.map((f, i)=>(
        <div
          key={i}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            {getTitle(f)}
          </h1>
          <p className="text-base">
            {getDescription(f)}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default FAQ;
