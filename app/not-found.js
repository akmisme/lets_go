"use client";
import React from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      
      {/* Animation */}
      <div>
        <DotLottieReact
          src="https://lottie.host/f6884899-f9ff-46f5-89ad-96b3be1f346a/2z2vJ5gf3s.lottie"
          loop
          autoplay
          height={120}
        />
      </div>
    </div>
  );
}