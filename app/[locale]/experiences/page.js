"use client";
import React from "react";
import BaganExp from "@/app/components/BaganExp";
import MandalayExp from "@/app/components/MandalayExp";
import YangonExp from "@/app/components/YangonExp";
import TaunggyiExp from "@/app/components/TaunggyiExp";
import KalawExp from "@/app/components/KalawExp";
import HpaanExp from "@/app/components/Hpa-anExp";
import InleExp from "@/app/components/InleExp";
import NgwesaungExp from "@/app/components/NgwesaungExp";
import ChaungthaExp from "@/app/components/ChaungthaExp";

export default function Exp() {
  return (
    <main className="mt-25 px-10 pt-5 pb-10 bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative top-5 mb-10 bg-center bg-cover opacity-80 bg-no-repeat w-auto max-xl:w-auto h-100 mx-auto rounded-4xl flex"
        style={{ backgroundImage: "url('/assets/Myanmar.jpg')" }}
      >
        <div className="flex flex-col w-full h-full bg-black/50 rounded-4xl overflow-hidden">
          <div className="my-auto flex flex-col gap-5">
            <h1 className="font-bold text-white text-center text-4xl max-md:text-3">
              Experiences
            </h1>
            <p className="text-white text-center text-base">
              Test Data for this website.
            </p>
          </div>
        </div>
      </div>
      <BaganExp />
      <MandalayExp />
      <YangonExp />
      <TaunggyiExp />
      <KalawExp />
      <HpaanExp />
      <InleExp />
      <NgwesaungExp />
      <ChaungthaExp />
    </main>
  );
}
