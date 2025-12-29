"use client";
import React, { useState, useEffect } from "react";
import SearchSection from "@/app/components/SearchSection";
import OurValue from "@/app/components/ourvalues";
import VisionMission from "@/app/components/Vision&Mission";
import en from "../../../messages/en.json";
import mm from "../../../messages/mm.json";
import { usePathname } from "next/navigation";
import axios from "axios";
import { ENDPOINT, Image_URL } from "@/app/endpoint/endpoint";
import { useLocale } from "next-intl";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();
  const [about, setAboutUs] = useState([]);
  const [exteam, setExTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  const getAboutUs = async () => {
    try {
      const res = await axios.get(ENDPOINT.AboutUs_List);
      setAboutUs(res.data.data || []);
    } catch (error) {
      console.error("About Us fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAboutUs();
  }, []);

  const getExTeam = async () => {
    try {
      const res = await axios.get(ENDPOINT.ExTeam_List);
      setExTeam(res.data.data || []);
    } catch (error) {
      console.error("Executive fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExTeam();
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
  const getSubTitle = (about) => {
    switch (locale) {
      case "mm":
        return about.sub_title_mm;
      default:
        return about.sub_title_en;
    }
  };
  const getSubDescription = (about) => {
    switch (locale) {
      case "mm":
        return about.sub_description_mm;
      default:
        return about.sub_description_en;
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
    <section className="bg-gray-100 pb-10 mt-30">
      {/* Banner Section */}
      <div
        className="relative top-5 bg-center bg-cover opacity-80 bg-no-repeat w-350 max-xl:w-auto max-xl:mx-5 h-100 mx-auto rounded-4xl flex"
        style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
      >
        <h1 className="font-bold m-auto text-white text-6xl max-md:text-4xl">
          About Us
        </h1>
      </div>

      {/* Search Section */}
      <SearchSection />
      {/* Staff / About Us Content */}
      {about.map((about, index) => (
        <div
          key={index}
          className="flex flex-col mx-30 text-justify gap-3 mt-10 max-lg:mx-5"
        >
          <h1 className="font-bold text-3xl">{getTitle(about)}</h1>
          <p className="indent-10 leading-relaxed text-base">
            {getDescription(about)}
          </p>
        </div>
      ))}
      {about.map((a, i) => (
        <div
          key={i}
          className="grid grid-cols-2 max-xl:grid-cols-1 mx-30 text-justify gap-10 mt-10 max-lg:mx-5"
        >
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <img
              src={`${Image_URL}${a.image}`}
              alt="Chaung Thar"
              width={600}
              height={400}
              className="rounded-4xl hover:opacity-80 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            className="flex flex-col text-justify gap-5"
          >
            <h1 className="font-bold text-2xl">{getSubTitle(a)}</h1>
            <p className="indent-10 leading-relaxed text-base">
              {getSubDescription(a)}
            </p>
          </div>
        </div>
      ))}
      {/* Values Section */}
      <OurValue />

      {/* Executive Team */}
      {aboutus.map((about, index) => (
        <h1
          key={index}
          className="text-3xl font-bold mb-10 mx-20 max-md:mx-5 mt-10 text-center"
        >
          {about.title4}
        </h1>
      ))}
      {/* Loading State */}
      {loading && (
        <p className="mx-auto w-10 h-10 border-4 border-t-[#D8AF53] border-gray-300 rounded-full animate-spin"></p>
      )}
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 mx-20 max-md:mx-5">
        {exteam.map((ex, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={`${Image_URL}${ex.image}`}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h1 className="font-bold text-xl text-gray-800">{getTitle(ex)}</h1>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {getDescription(ex)}
            </p>

            <button
              className="text-[#936521] font-semibold hover:text-[#D8AF53] transition cursor-pointer w-fit"
              onClick={() => {
                setSelectedItem(ex);
                setIsOpen(true);
              }}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000] p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {locale === "mm"
                  ? selectedItem.title_mm
                  : selectedItem.title_en}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <img
              src={`${Image_URL}${selectedItem.image}`}
              className="rounded-xl w-full h-64 object-cover"
              alt=""
            />

            {/* Description */}
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
              {locale === "mm"
                ? selectedItem.description_mm
                : selectedItem.description_en}
            </p>
          </div>
        </div>
      )}

      {/* Vision & Mission */}
      <VisionMission />
    </section>
  );
}
