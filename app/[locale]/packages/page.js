"use client";
import React from "react";
import SearchSection from "@/app/components/SearchSection";
import TourCard from "@/app/components/TourCard";
import { usePathname } from "next/navigation";
import en from "../../../messages/en.json";
import mm from "../../../messages/mm.json";

export default function Package() {
  const pathname = usePathname();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const tours = currentLocale === "mm" ? mm.packages : en.packages;
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
      {tours.map((t, i) => (
        <h1 key={i} className="font-bold text-3xl text-center my-10">
          {t.title}
        </h1>
      ))}
      <TourCard />
    </section>
  );
}
