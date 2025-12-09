"use client";
import React, { useEffect, useRef, useState } from "react";

const videos = [
  { id: 1, src: "/videos/vlog1.mp4", title: "Travel Vlog in Bagan" },
  { id: 2, src: "/videos/vlog2.mp4", title: "Street Food in Yangon" },
  { id: 3, src: "/videos/vlog3.mp4", title: "Beach Day at Ngwesaung" },
];

export default function ShortsPage() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which video is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  // Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  return (
    <main className="mt-30 pt-5">
      <div className="h-screen w-full mx-auto overflow-y-scroll snap-y snap-mandatory bg-black">
        {videos.map((vid, i) => (
          <div
            key={vid.id}
            className="h-screen w-full flex items-center justify-center snap-start relative"
          >
            <video
              ref={(el) => {
                if (el) videoRefs.current[i] = el;
              }}
              src={vid.src}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              data-index={i}
            />
            {/* Overlay controls */}
            <div className="absolute right-4 bottom-24 flex flex-col gap-4 text-white">
              <button className="bg-black/50 p-3 rounded-full">❤️</button>
              <button className="bg-black/50 p-3 rounded-full">💬</button>
              <button className="bg-black/50 p-3 rounded-full">🔗</button>
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="font-bold">{vid.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
