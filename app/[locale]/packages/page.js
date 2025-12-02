import React from "react";
import Image from "next/image";

export default function Package() {
  return (
    <section className="mt-30 bg-gray-100">
      <h1 className="text-center text-4xl font-bold">Our Tours</h1>
      <div className="grid grid-cols-2">
        <div className="flex gap-10 mx-20">
            <Image
              src="/assets/promobanner/bagan.jpg"
              alt="#"
              height={300}
              width={300}
            />
          <div className="flex flex-col gap-5">
            <h1 className="">Bagan Package</h1>
            <div className="flex gap-2">
              <label>Destination:</label>
              <h1>Yangon</h1>
            </div>
            <div className="flex gap-2">
              <label>Start Date:</label>
              <h1>1.12.1999</h1>
            </div>
            <div className="flex gap-2">
              <label>Number of People:</label>
              <h1>5</h1>
            </div>
            <div className="flex gap-2">
              <label>Duration:</label>
              <h1>7 Days/ 6 Nights</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
