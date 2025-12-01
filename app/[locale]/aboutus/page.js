import React from "react";
import SearchSection from "@/app/components/SearchSection";
import OurValue from "@/app/components/ourvalues";
import VisionMission from "@/app/components/Vision&Mission";
import ExecutiveTeam from "@/app/components/ExecutiveTeam";

export default function AboutUs() {
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
      <SearchSection />
      {/* About Us */}
      <div className="flex flex-col mx-30 text-justify gap-3 mt-10 max-lg:mx-5">
        <h1 className="font-bold text-3xl">Our Origin</h1>
        <p className="indent-10 leading-relaxed text-base">
          Brothers Travis and Shawn Pittman left Queensland, Australia, to live
          and work in London, UK. Their experiences opened their eyes to the
          power of travel. As is the case for many founders, the idea for Golden
          Yellow was born of a problem they faced. When trying to book a
          one-week sailing tour in Croatia online through a US-based company,
          the process was incredibly complicated and risky. They had to spend
          ages searching through websites, brochures, and magazines, transfer
          money to a company (that they weren’t even sure existed), figure out
          transportation to and from the airport, and wander around a foreign
          town to find the operator’s small office. That’s when they realized
          that there could be a better, safer solution for this, so they founded
          Golden Yellow.
        </p>
      </div>
      <div className="grid grid-cols-2 max-xl:grid-cols-1 mx-30 text-justify gap-10 mt-10 max-lg:mx-5">
        <div>
          <img
            src="/assets/chaungthar.jpg"
            alt="#"
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
            worldwide. Golden Yellow connects travelers and travel agents with
            over 2,500 multi-day operators, offering 50,000+ adventures in 160+
            countries. We pride ourselves on a seamless, user-friendly
            experience.{" "}
          </p>
          <p className="indent-10 leading-relaxed text-base">
            With offices in North America, Europe, and Australia, Golden
            Yellow’s global travel experts are available online 24/7 to support
            the entire booking and travel experience. Golden Yellow promotes
            environmentally sustainable travel by enabling all travelers to view
            and offset the carbon impact of their adventures, and the company
            works tirelessly with local operators to help protect and strengthen
            the communities that benefit from adventure tourism.
          </p>
        </div>
      </div>
      {/* End About Us */}
      <OurValue />
      <ExecutiveTeam />
      <VisionMission />
    </section>
  );
}
