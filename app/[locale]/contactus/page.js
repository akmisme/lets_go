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
      <div className="grid grid-cols-2 items-center">
        <Contact />
        <div className="flex flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.6743300391713!2d96.13152027461558!3d16.842504818274506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195e4c8eabd11%3A0xceb012d50969af9f!2sYolo%20Digital%20Marketing%20Company!5e0!3m2!1sen!2smm!4v1764660612346!5m2!1sen!2smm"
            width="600"
            height="500"
            className="rounded-md shadow-md"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
