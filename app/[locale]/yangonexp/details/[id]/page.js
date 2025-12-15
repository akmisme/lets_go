"use client";
import React, { useState } from "react";

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

export default function YangonExpDetail() {
  const [cardType, setCardType] = useState("mastercard");

  // Mastercard state
  const [mcNumber, setMcNumber] = useState("");
  const [mcExpiry, setMcExpiry] = useState("");
  const [mcCvv, setMcCvv] = useState("");

  // Visa state
  const [visaNumber, setVisaNumber] = useState("");
  const [visaExpiry, setVisaExpiry] = useState("");
  const [visaCvv, setVisaCvv] = useState("");

  return (
    <section className="text-base bg-gray-100 mt-30 py-5">
      <h1 className="text-center text-3xl font-bold mb-5">
        Riding hot air balloons in Bagan
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-7xl bg-white rounded-md p-5 max-xl:mx-5">
        {/* LEFT IMAGE */}
        <div>
          <img
            className="w-full h-full object-cover rounded-md"
            src="/assets/promobanner/bagan.jpg"
            alt="Bagan"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8 mx-auto my-6 w-full max-w-md">
          {/* TITLE */}
          <h1 className="text-center text-3xl font-bold text-[#936521]">
            Payment Types
          </h1>

          {/* CARD TYPE SWITCH */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCardType("mastercard")}
              className={`px-5 py-2 rounded-3xl font-semibold transition-all duration-300 ${
                cardType === "mastercard"
                  ? "bg-[#936521] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Mastercard
            </button>

            <button
              onClick={() => setCardType("visa")}
              className={`px-5 py-2 rounded-3xl font-semibold transition-all duration-300 ${
                cardType === "visa"
                  ? "bg-[#936521] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Visa
            </button>
          </div>

          {/* ✅ MASTERCARD FORM */}
          {cardType === "mastercard" && (
            <form className="bg-gray-100 p-6 rounded-3xl shadow-md border border-gray-300 space-y-5">
              <h2 className="text-xl font-semibold text-[#936521]">
                Mastercard Payment
              </h2>

              {/* CARD NUMBER */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  value={mcNumber}
                  onChange={(e) =>
                    setMcNumber(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                    )
                  }
                  placeholder="1234 5678 9012 3456"
                  className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                />
              </div>

              {/* EXPIRY + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">
                    Expiry (MM/YY)
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    value={mcExpiry}
                    onChange={(e) =>
                      setMcExpiry(
                        e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                      )
                    }
                    placeholder="08/27"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    value={mcCvv}
                    onChange={(e) =>
                      setMcCvv(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="123"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>
              </div>

              <button className="w-full bg-[#936521] text-white py-3 rounded-3xl font-semibold hover:bg-[#D8AF53] transition-all duration-300">
                Pay Now
              </button>
            </form>
          )}

          {/* ✅ VISA FORM */}
          {cardType === "visa" && (
            <form className="bg-gray-100 p-6 rounded-3xl shadow-md border border-gray-300 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  className="w-14"
                  alt="Visa"
                />
                <h2 className="text-xl font-semibold text-[#936521]">
                  Visa Payment
                </h2>
              </div>

              {/* CARD NUMBER */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  value={visaNumber}
                  onChange={(e) =>
                    setVisaNumber(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                    )
                  }
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                />
              </div>

              {/* EXPIRY + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">Expiry</label>
                  <input
                    type="text"
                    maxLength={5}
                    value={visaExpiry}
                    onChange={(e) =>
                      setVisaExpiry(
                        e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                      )
                    }
                    placeholder="MM/YY"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    value={visaCvv}
                    onChange={(e) =>
                      setVisaCvv(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="***"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>
              </div>

              <button className="w-full bg-[#936521] text-white py-3 rounded-3xl font-semibold hover:bg-[#D8AF53] transition-all duration-300">
                Continue
              </button>
            </form>
          )}
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
