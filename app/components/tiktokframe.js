"use client";

import { useEffect, useRef } from "react";

export default function TikTokPlayer() {
  const refs = useRef([]);

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

  const videoIds = [
    "7525117264761244935",
    "7522109575479266568",
    "7364268104194477320",
    "7363170882107215111",
    "7565757544451411207",
  ];

  return (
    <main className="pb-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Vlog</h1>

      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mx-20 max-md:mx-5">
        {videoIds.map((id, idx) => (
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