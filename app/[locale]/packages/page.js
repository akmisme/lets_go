import React from "react";
import SearchSection from "@/app/components/SearchSection";
import TourCard from "@/app/components/TourCard";

export default function Package() {
  return (
    <section className="min-h-screen px-4 pb-10 bg-gray-100 mt-30">
      {/* Banner Section */}
      <div
        className="relative top-5 bg-center bg-cover opacity-80 bg-no-repeat w-350 max-xl:w-auto max-xl:mx-5 h-100 mx-auto rounded-4xl flex"
        style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
      >
        <h1 className="font-bold m-auto text-white text-6xl max-md:text-4xl">
          Packages
        </h1>
      </div>
      <SearchSection />
      <h1 className="font-bold text-3xl text-center my-10">Our Tours</h1>
      <TourCard />
    </section>
  );
}
