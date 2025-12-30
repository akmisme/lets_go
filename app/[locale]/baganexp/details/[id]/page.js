"use client";
import React from "react";
import axios from "axios";
import { ENDPOINT, Image_URL } from "@/app/endpoint/endpoint";


const experiences = [
  {
    title: "Riding hot air balloons in Bagan",
    para: "Riding hot air balloons in Bagan, Myanmar is one of the most iconic travel experiences in the world. It’s often simply called “Bagan Balloon Ride” or “Hot Air Ballooning over Bagan.”",
    subtitle: "Here’s what makes it special:",
    facts: [
      "Most rides happen at dawn, when the mist lifts and the templesglow in golden light.",
      "You’ll float above thousands of ancient pagodas, stupas, and the Irrawaddy River.",
      "Ballooning season usually runs from October to March, when the weather is cool and skies are clear.",
      "Flights are suspended during the rainy season for safety.",
      "Several companies operate in Bagan, offering different packages (classic, premium, private).",
      "They typically include hotel pickup, a light breakfast, and a champagne toast after landing.",
      "The ride lasts about 45 minutes to 1 hour.",
      "It’s calm, quiet, and gives you a bird’s-eye view of one of Asia’s most breathtaking archaeological sites.",
    ],
  },
];

export default function BaganExpDetail() {
  return (
    <section className="text-base bg-gray-100 mt-30 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-20 bg-white rounded-md p-5 max-xl:mx-5">
        {/* LEFT IMAGE */}
        <div>
          <img
            className="w-full h-full object-cover rounded-md"
            src="/assets/promobanner/bagan.jpg"
            alt="Bagan"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-fit text-justify gap-5">
          <h1 className="text-3xl">Riding hot air balloons in Bagan</h1>
          <p className="indent-10 leading-relaxed">
            Floating above Bagan in a hot‑air balloon feels like slipping into
            another world. As the sun rises, the mist slowly lifts to reveal
            thousands of ancient temples scattered across the plains, their
            golden spires catching the first light of day. The air is quiet
            except for the soft roar of the burner, and the landscape seems to
            stretch endlessly in every direction. From above, you see ox carts
            tracing dusty paths, the Irrawaddy River shimmering in the distance,
            and the temples glowing like embers. It’s peaceful, surreal, and
            deeply moving—one of those rare experiences that makes you feel both
            small and incredibly alive at the same time.
          </p>
          <div className="bg-gray-100 rounded-3xl shadow-md border border-gray-300 flex flex-col p-5 max-w-140">
            <h1 className="text-base font-bold">My Test Box</h1>
            <p className="text-sm leading-relaxed indent-10">Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box</p>
          </div>
          <div className="flex gap-4 pt-4 w-fit">
            <button className="bg-yellow-500 text-white px-5 py-2.5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow cursor-pointer">
              Booking
            </button>
            <button className="border border-yellow-500 text-yellow-600 px-5 py-2.5 rounded-xl hover:bg-yellow-50 transition font-semibold shadow cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="text-base text-justify mx-20 mt-10 max-lg:mx-10">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">{exp.title}</h1>
            <p className="text-justify indent-10 leading-relaxed">{exp.para}</p>
            <h1>{exp.subtitle}</h1>
            <ul className="list-disc flex flex-col gap-3">
              {exp.facts.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
