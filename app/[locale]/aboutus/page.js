"use client";
import React, { useState } from "react";
import SearchSection from "@/app/components/SearchSection";
import OurValue from "@/app/components/ourvalues";
import VisionMission from "@/app/components/Vision&Mission";
import en from "../../../messages/en.json";
import mm from "../../../messages/mm.json";
import { usePathname } from "next/navigation";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const aboutus = currentLocale === "mm" ? mm.about : en.about;

  const items = [
    {
      title: "Travis Pittman, Co-Founder & CE",
      description:
        "Originally from Australia, Travis has lived in Europe for the past 15 years and has called Vienna, Austria home for over a decade. In 2010, together with his brother Shawn, he founded TourRadar to help connect people to life-enriching travel experiences. TourRadar’s vision is for its platform to be the epicenter of the $200bn global adventure travel ecosystem, by connecting travelers, operators, and distribution partners like travel advisors, OTAs, GDSs, airlines, influencers, and content providers. Travis' passion for adventure began when he was growing up in the Northern Territory in Australia, so when he's not leading his team, he enjoys spending time mountain biking, wakeboarding, running, and in general outdoors. Under his leadership, TourRadar has grown into a diverse team of 45+ nationalities and is the leading Organized Adventure Platform with 50,000+ organized adventures in more than 160 countries. TourRadar has raised $60m+ from world-class investors such as Cherry Ventures, Endeit Capital, Hoxton Ventures, Speedinvest, and TCV.",
      image: "/assets/executiveteam/CEO.jpg",
    },
    {
      title: "Travis Pittman, Co-Founder & CEO",
      description:
        "Originally from Australia, Travis has lived in Europe for the past 15 years and has called Vienna, Austria home for over a decade. In 2010, together with his brother Shawn, he founded TourRadar to help connect people to life-enriching travel experiences. TourRadar’s vision is for its platform to be the epicenter of the $200bn global adventure travel ecosystem, by connecting travelers, operators, and distribution partners like travel advisors, OTAs, GDSs, airlines, influencers, and content providers. Travis' passion for adventure began when he was growing up in the Northern Territory in Australia, so when he's not leading his team, he enjoys spending time mountain biking, wakeboarding, running, and in general outdoors. Under his leadership, TourRadar has grown into a diverse team of 45+ nationalities and is the leading Organized Adventure Platform with 50,000+ organized adventures in more than 160 countries. TourRadar has raised $60m+ from world-class investors such as Cherry Ventures, Endeit Capital, Hoxton Ventures, Speedinvest, and TCV.",
      image: "/assets/executiveteam/CEO.jpg",
    },
    {
      title: "Travis Pittman, Co-Founder & CEO",
      description:
        "Originally from Australia, Travis has lived in Europe for the past 15 years and has called Vienna, Austria home for over a decade. In 2010, together with his brother Shawn, he founded TourRadar to help connect people to life-enriching travel experiences. TourRadar’s vision is for its platform to be the epicenter of the $200bn global adventure travel ecosystem, by connecting travelers, operators, and distribution partners like travel advisors, OTAs, GDSs, airlines, influencers, and content providers. Travis' passion for adventure began when he was growing up in the Northern Territory in Australia, so when he's not leading his team, he enjoys spending time mountain biking, wakeboarding, running, and in general outdoors. Under his leadership, TourRadar has grown into a diverse team of 45+ nationalities and is the leading Organized Adventure Platform with 50,000+ organized adventures in more than 160 countries. TourRadar has raised $60m+ from world-class investors such as Cherry Ventures, Endeit Capital, Hoxton Ventures, Speedinvest, and TCV.",
      image: "/assets/executiveteam/CEO.jpg",
    },
    {
      title: "Travis Pittman, Co-Founder & CEO",
      description:
        "Originally from Australia, Travis has lived in Europe for the past 15 years and has called Vienna, Austria home for over a decade. In 2010, together with his brother Shawn, he founded TourRadar to help connect people to life-enriching travel experiences. TourRadar’s vision is for its platform to be the epicenter of the $200bn global adventure travel ecosystem, by connecting travelers, operators, and distribution partners like travel advisors, OTAs, GDSs, airlines, influencers, and content providers. Travis' passion for adventure began when he was growing up in the Northern Territory in Australia, so when he's not leading his team, he enjoys spending time mountain biking, wakeboarding, running, and in general outdoors. Under his leadership, TourRadar has grown into a diverse team of 45+ nationalities and is the leading Organized Adventure Platform with 50,000+ organized adventures in more than 160 countries. TourRadar has raised $60m+ from world-class investors such as Cherry Ventures, Endeit Capital, Hoxton Ventures, Speedinvest, and TCV.",
      image: "/assets/executiveteam/CEO.jpg",
    },
    {
      title: "Travis Pittman, Co-Founder & CEO",
      description:
        "Originally from Australia, Travis has lived in Europe for the past 15 years and has called Vienna, Austria home for over a decade. In 2010, together with his brother Shawn, he founded TourRadar to help connect people to life-enriching travel experiences. TourRadar’s vision is for its platform to be the epicenter of the $200bn global adventure travel ecosystem, by connecting travelers, operators, and distribution partners like travel advisors, OTAs, GDSs, airlines, influencers, and content providers. Travis' passion for adventure began when he was growing up in the Northern Territory in Australia, so when he's not leading his team, he enjoys spending time mountain biking, wakeboarding, running, and in general outdoors. Under his leadership, TourRadar has grown into a diverse team of 45+ nationalities and is the leading Organized Adventure Platform with 50,000+ organized adventures in more than 160 countries. TourRadar has raised $60m+ from world-class investors such as Cherry Ventures, Endeit Capital, Hoxton Ventures, Speedinvest, and TCV.",
      image: "/assets/executiveteam/CEO.jpg",
    },
  ];

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
      <div className="flex flex-col mx-30 text-justify gap-3 mt-10 max-lg:mx-5">
        {aboutus.map((about, index) => (
          <h1 key={index} className="font-bold text-3xl">
            {about.title1}
          </h1>
        ))}
        <p className="indent-10 leading-relaxed text-base">
          Brothers Travis and Shawn Pittman left Queensland, Australia, to live
          and work in London, UK. Their experiences opened their eyes to the
          power of travel...
        </p>
      </div>
      <div className="grid grid-cols-2 max-xl:grid-cols-1 mx-30 text-justify gap-10 mt-10 max-lg:mx-5">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          <img
            src="/assets/chaungthar.jpg"
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
          {aboutus.map((about, index) => (
            <h1 key={index} className="font-bold text-2xl">
              {about.title2}
            </h1>
          ))}
          <p className="indent-10 leading-relaxed text-base">
            Golden Yellow is the Organized Adventure Platform, offering the
            world’s largest selection of multi-day organized adventures
            worldwide...
          </p>
          <p className="indent-10 leading-relaxed text-base">
            With offices in North America, Europe, and Australia, Golden
            Yellow’s global travel experts are available online 24/7 to support
            the entire booking and travel experience...
          </p>
        </div>
      </div>

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
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 mx-20 max-md:mx-5">
        {items.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={item.image}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h1 className="font-bold text-xl text-gray-800">{item.title}</h1>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>

            <button
              className="text-[#936521] font-semibold hover:text-[#D8AF53] transition cursor-pointer w-fit"
              onClick={() => {
                setSelectedItem(item);
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
                {selectedItem.title}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <img
              src={selectedItem.image}
              className="rounded-xl w-full h-64 object-cover"
            />

            {/* Description */}
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}

      {/* Vision & Mission */}
      <VisionMission />
    </section>
  );
}
