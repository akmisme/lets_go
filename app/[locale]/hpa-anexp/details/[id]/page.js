"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { ENDPOINT, Image_URL } from "@/app/endpoint/endpoint";
import { useLocale } from "next-intl";

export default function BaganexpDetail() {
  const { id } = useParams();
  const [hpaexp, sethpaexp] = useState(null);
  const locale = useLocale(); // "en" or "mm"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${ENDPOINT.Hpa_Exp_List}/${id}`);
        console.log("API response:", res.data);

        const raw = res.data?.data ?? res.data;

        // Normalize bilingual fields into unified keys
        const normalized = {
          ...raw,
          title: { en: raw.title_en, mm: raw.title_mm },
          para: { en: raw.para_en, mm: raw.para_mm },
          subtitle: { en: raw.subtitle_en, mm: raw.subtitle_mm },
          description: { en: raw.description_en, mm: raw.description_mm },
          subtitle1: { en: raw.subtitle1_en, mm: raw.subtitle1_mm },
          shouldknow: { en: raw.shouldknow_en, mm: raw.shouldknow_mm }, // arrays of strings
        };

        sethpaexp(normalized);
      } catch (err) {
        console.error("Error fetching detail:", err);
      }
    };
    if (id) fetchData();
  }, [id]);

  if (!hpaexp) return <p>Loading...</p>;

  // Pick localized values
  const title = hpaexp.title[locale];
  const para = hpaexp.para[locale];
  const subtitle = hpaexp.subtitle[locale];
  const description = hpaexp.description[locale];
  const subtitle1 = hpaexp.subtitle1[locale];
  const should = hpaexp.shouldknow[locale]; // array of strings

  return (
    <section className="text-base bg-gray-100 mt-30 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-20 bg-white rounded-md p-5 max-xl:mx-5">
        {/* LEFT IMAGE */}
        <div>
          <img
            className="w-full h-full object-cover rounded-md"
            src={`${Image_URL}/${hpaexp.image}`}
            alt={title}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-fit text-justify gap-5">
          <h1 className="text-3xl">{title}</h1>
          <p className="indent-10 leading-relaxed">{para}</p>

          <div className="bg-gray-100 rounded-3xl shadow-md border border-gray-300 flex flex-col p-5 max-w-140">
            <h1 className="text-base font-bold">{subtitle1}</h1>
            <p className="text-sm leading-relaxed indent-10">{description}</p>
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

      {/* Facts Section */}
      <div className="text-base text-justify mx-20 mt-10 max-lg:mx-10">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-justify indent-10 leading-relaxed">{para}</p>
        <h1>{subtitle}</h1>

        {Array.isArray(should) && (
          <ul className="list-disc flex flex-col gap-3">
            {should.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}