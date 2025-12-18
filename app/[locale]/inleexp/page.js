"use client";
import InleExp from "@/app/components/InleExp";
import React from "react";

const inleexp = () => {
  return (
    <section className="mt-25 py-5 bg-gray-100">
      <div className="mx-20 max-lg:mx-5">
        {/* Banner Section */}
        <div
          className="relative top-5 mb-10 bg-center bg-cover opacity-80 bg-no-repeat w-auto max-xl:w-auto h-100 mx-auto rounded-4xl flex"
          style={{ backgroundImage: "url('/assets/inle.jpg')" }}
        >
          <div className="flex flex-col w-full h-full bg-black/50 rounded-4xl overflow-hidden">
            <div className="my-auto flex flex-col gap-5">
              <h1 className="font-bold text-white text-center text-4xl max-md:text-3">
                Inle Experiences
              </h1>
              <p className="text-white text-center text-base">
                Test Data for this website.
              </p>
            </div>
          </div>
        </div>
        <InleExp />
      </div>
    </section>
  );
};

export default inleexp;
