import Contact from "@/app/components/Contact";
import FAQ from "@/app/components/faq";
import SearchSection from "@/app/components/SearchSection";
import React from "react";

export default function ContactUs() {
  return (
    <section className="mt-30 bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative top-5 bg-center bg-cover opacity-80 bg-no-repeat w-350 max-xl:w-auto max-xl:mx-5 h-100 mx-auto rounded-4xl flex"
        style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
      >
        <h1 className="font-bold m-auto text-white text-6xl max-md:text-4xl">
          Contact Us
        </h1>
      </div>
      <SearchSection />
      <FAQ />
      <Contact/>
    </section>
  );
}
