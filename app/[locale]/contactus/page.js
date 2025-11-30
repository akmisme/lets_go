import Contact from "@/app/components/Contact";
import SearchSection from "@/app/components/SearchSection";
import React from "react";


export default function ContactUs() {
  return (
    <section className="mt-35">
      <div
        className="relative bg-center bg-cover opacity-80 bg-no-repeat w-350 max-xl:w-auto max-xl:mx-5 h-100 mx-auto rounded-4xl flex"
        style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
      >
        <h1 className="font-bold m-auto text-white text-6xl">Contact Us</h1>
      </div>
      <SearchSection/>
      <Contact/>
    </section>
  );
}
