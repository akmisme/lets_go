import React from "react";

export default function InleExpDetail() {
  return (
    <section className="text-base bg-gray-100 mt-30 py-5">
      <h1 className="text-center text-3xl font-bold">
        Riding hot air balloons in Bagan
      </h1>
      <div className="grid grid-cols-2 max-xl:mx-5 max-lg:grid-cols-1 mt-5 mx-auto max-w-6xl text-justify bg-white pr-5 max-lg:pr-0 rounded-md">
        <div>
          <img
            className="w-130 h-full rounded-l-md max-lg:w-full max-lg:rounded-md"
            src="/assets/promobanner/bagan.jpg"
          />
        </div>
        <div className="flex flex-col max-lg:mx-5 gap-2">
          <p className="text-base indent-10 leading-relaxed pt-5">
            Riding hot air balloons in Bagan, Myanmar is one of the most iconic
            travel experiences in the world. It’s often simply called “Bagan
            Balloon Ride” or “Hot Air Ballooning over Bagan.”
          </p>
          <h1 className="text-base font-bold">Here’s what makes it special:</h1>
          <ul className="text-base text-justify list-disc leading-relaxed pb-2">
            <li>
              Most rides happen at dawn, when the mist lifts and the temples
              glow in golden light.
            </li>
            <li>
              You’ll float above thousands of ancient pagodas, stupas, and the
              Irrawaddy River.
            </li>
            <li>
              Ballooning season usually runs from October to March, when the
              weather is cool and skies are clear.
            </li>
            <li>Flights are suspended during the rainy season for safety.</li>
            <li>
              Several companies operate in Bagan, offering different packages
              (classic, premium, private).
            </li>
            <li>
              They typically include hotel pickup, a light breakfast, and a
              champagne toast after landing.
            </li>
            <li>The ride lasts about 45 minutes to 1 hour.</li>
            <li>
              It’s calm, quiet, and gives you a bird’s-eye view of one of Asia’s
              most breathtaking archaeological sites.
            </li>
          </ul>
          <button className="p-2 w-fit mx-auto text-white bg-[#936521] hover:bg-[#D8AF53] mb-5 rounded-md cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
