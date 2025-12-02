"use client"; // Important for client-side functionality

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // You can customize global settings here
      duration: 1200, // Example: animation duration
      once: false, // Example: animate only once
      // ... other AOS options
    });
  }, []);

  return null; // This component doesn't render anything visible
}
