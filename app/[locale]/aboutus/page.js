"use client";
import React, { useState } from "react";
import SearchSection from "@/app/components/SearchSection";
import OurValue from "@/app/components/ourvalues";
import VisionMission from "@/app/components/Vision&Mission";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
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
        <h1 className="font-bold text-3xl">Our Origin</h1>
        <p className="indent-10 leading-relaxed text-base">
          Brothers Travis and Shawn Pittman left Queensland, Australia, to live
          and work in London, UK. Their experiences opened their eyes to the
          power of travel...
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="grid grid-cols-2 max-xl:grid-cols-1 mx-30 text-justify gap-10 mt-10 max-lg:mx-5"
      >
        <div>
          <img
            src="/assets/chaungthar.jpg"
            alt="Chaung Thar"
            width={600}
            height={400}
            className="rounded-4xl hover:opacity-80 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div className="flex flex-col text-justify gap-5">
          <h1 className="font-bold text-2xl">What is Golden Yellow?</h1>
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
      <h1 className="text-2xl font-bold mb-5 mx-20 my-10">Executive Team</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="grid grid-cols-4 max-lg:grid-cols-2 max-md:mx-2 max-md:grid-cols-1 gap-10 mx-20"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white p-2 rounded-xl shadow-md"
          >
            <img src={item.image} className="rounded-xl w-full h-auto" />
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="text-base leading-relaxed indent-10 line-clamp-4">
              {item.description}
            </p>
            <span
              className="w-fit text-[#936521] rounded-md cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(true);
              }}
            >
              see more
            </span>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isOpen && selectedItem && (
        <div className="fixed z-1001 inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-[600px] max-md:w-[90%] max-h-[80%] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{selectedItem.title}</h2>
              <button
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-5">
              <img
                src={selectedItem.image}
                className="rounded-xl w-75 h-auto mx-auto"
              />
            </div>
            <div className="space-y-2 mt-4">
              <p className="px-4 py-2 rounded-md indent-10 text-justify">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Vision & Mission */}
      <VisionMission />
    </section>
  );
}
