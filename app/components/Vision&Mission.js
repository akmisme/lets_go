"use client";
import React, { useState, useEffect } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import axios from "axios";
import { ENDPOINT, Image_URL } from "../endpoint/endpoint";
import { useLocale } from "next-intl";

const VisionMission = () => {
  const pathname = usePathname();
  const [vision, setVision] = useState([]);
  const [mission, setMission] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const aboutus = currentLocale === "mm" ? mm.about : en.about;

  const getVisionMission = async () => {
    try {
      const visonres = await axios.get(ENDPOINT.Vision_List);
      setVision(visonres.data.data || []);
      const missionres = await axios.get(ENDPOINT.Mission_List);
      setMission(missionres.data.data || []);
    } catch (error) {
      console.error("Data fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getVisionMission();
  }, []);

  const getTitle = (VisionMission) => {
    switch (locale) {
      case "mm":
        return VisionMission.title_mm;
      default:
        return VisionMission.title_en;
    }
  };
  const getSubTitle = (VisionMission) => {
    switch (locale) {
      case "mm":
        return VisionMission.sub_title_mm;
      default:
        return VisionMission.sub_title_en;
    }
  };
  const getDescription = (VisionMission) => {
    switch (locale) {
      case "mm":
        return VisionMission.description_mm;
      default:
        return VisionMission.description_en;
    }
  };

  // const items = [
  //   {
  //     title: "Our Vision",
  //     subtitle: "Enrich the lives of travelers through organized adventures",
  //     desc: "We connect travel enthusiasts with expert operators who curate memorable and sustainable multi-day journeys. Our platform unleashes exploration, redefines global discovery, and removes decision fatigue through transformative organized adventures.",
  //     icon: "/assets/ourvalues/globe.svg",
  //   },
  //   {
  //     title: "Our Mission",
  //     subtitle: "Make adventure tourism accessible to all",
  //     desc: "We democratize adventure travel, remove barriers, and positively impact people and the planet. As our platform evolves, we make curated travel experiences more sustainable and accessible, promoting diversity and a global mindset.",
  //     icon: "/assets/ourvalues/rocket.svg",
  //   },
  // ];

  return (
    <section className="my-20 px-6">
      {/* Section Title */}
      {aboutus.map((about, index) => (
        <div key={index} className="text-center mb-14">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {about.title5}
          </h1>
          <p className="text-gray-500 mt-2 text-lg">{about.subtitle2}</p>
        </div>
      ))}

      {/* Cards */}
      {/* Loading State */}
      {loading && (
        <p className="mx-auto w-10 h-10 border-4 border-t-[#D8AF53] border-gray-300 rounded-full animate-spin"></p>
      )}
      {!loading && mission.length > 0 && (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-w-6xl mx-auto"
        >
          {vision.map((vision, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-[#F7E7C1] rounded-2xl shadow-inner mb-6 mx-auto">
                <img
                  src={`${Image_URL}${vision.image}`}
                  alt={vision.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center text-gray-800">
                {getTitle(vision)}
              </h2>

              {/* Subtitle */}
              <p className="text-center text-[#936521] font-semibold mt-2 mb-6">
                {getSubTitle(vision)}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-justify">
                {getDescription(vision)}
              </p>
            </div>
          ))}
          {mission.map((mission, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-[#F7E7C1] rounded-2xl shadow-inner mb-6 mx-auto">
                <img
                  src={`${Image_URL}${mission.image}`}
                  alt={mission.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center text-gray-800">
                {getTitle(mission)}
              </h2>

              {/* Subtitle */}
              <p className="text-center text-[#936521] font-semibold mt-2 mb-6">
                {getSubTitle(mission)}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-justify">
                {getDescription(mission)}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VisionMission;
