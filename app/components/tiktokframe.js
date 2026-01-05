"use client";
import React, { useEffect, useRef, useState } from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import axios from "axios";
import { ENDPOINT } from "../endpoint/endpoint";

export default function TikTokPlayer() {
  const refs = useRef([]);
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [tiktok, setTikTok] = useState([]);

  const getTiktok = async () => {
    try {
      const res = await axios.get(ENDPOINT.TikTok_List);
      setTikTok(res.data.data || []);
    } catch (error) {
      console.error("Vlog fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTiktok();
  }, []);
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const vlogger = currentLocale === "mm" ? mm.vlogger : en.vlogger;

  useEffect(() => {
    const handleMessage = (event) => {
      const data = event.data;

      // ✅ TikTok sends events inside "event" property
      if (data?.event === "tiktok:player:play") {
        refs.current.forEach((iframe) => {
          if (iframe?.contentWindow && iframe.contentWindow !== event.source) {
            iframe.contentWindow.postMessage(
              { event: "tiktok:player:pause" },
              "*"
            );
          }
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);

      // ✅ Pause all players on unmount
      refs.current.forEach((iframe) => {
        iframe?.contentWindow?.postMessage(
          { event: "tiktok:player:pause" },
          "*"
        );
      });
    };
  }, []);

  // const videoIds = [
  //   "7525117264761244935",
  //   "7522109575479266568",
  //   "7364268104194477320",
  //   "7363170882107215111",
  //   "7565757544451411207",
  //   "7585213156503375124",
  //   "7591467420024409364",
  // ];

  return (
    <main className="pb-5">
      {vlogger.map((v, index) => (
        <h1 key={index} className="text-3xl font-bold mb-4 text-center">
          {v.vlog}
        </h1>
      ))}
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mx-20 max-md:mx-5">
        {tiktok.map((id, idx) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg h-120 border border-[#936521]"
          >
            <iframe
              ref={(el) => (refs.current[idx] = el)}
              src={`https://www.tiktok.com/player/v1/${id}?player_api=1&music_info=1&description=1`}
              allow="fullscreen"
              title={`TikTok Player ${idx}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
