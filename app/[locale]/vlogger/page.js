"use client";
import React from "react";
import TikTokPlayer from "@/app/components/tiktokframe";

export default function Page() {
  return (
    <section className="mt-30 pt-5 bg-gray-100 min-h-screen">
      <div>
        <TikTokPlayer />
      </div>
    </section>
  );
}
