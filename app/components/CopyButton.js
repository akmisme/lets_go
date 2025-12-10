import React, { useState } from "react";
import { Copy, BookOpenText, CircleDollarSign } from "lucide-react";

export default function CopyTextButton({ text = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) {
      console.warn("No text provided to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // reset after 1s
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={handleCopy}
        className="flex gap-2 text-[#936521] hover:text-[#D8AF53] transition ease-in-out duration-500 rounded cursor-pointer"
      >
        <Copy />
        <p>Promo Code - BLACKFRIDAY2025</p>
      </div>
      {/* Success message */}
      {copied && (
        <div className="bg-green-400 text-white px-3 py-1 rounded text-sm animate-fade-in">
          Copied to clipboard!
        </div>
      )}
      <div className="flex gap-2 text-[#936521] hover:text-[#D8AF53] transition ease-in-out duration-500 rounded cursor-pointer">
        <CircleDollarSign />
        <p>Package Fees - 500$</p>
      </div>
      <div className="flex gap-2 justify-center text-[#936521] hover:text-[#D8AF53] transition ease-in-out duration-500 rounded cursor-pointer">
        <button className="text-white bg-[#936521] p-2 hover:bg-[#D8AF53] transition ease-in-out duration-500 rounded-md cursor-pointer">Book Now</button>
      </div>
    </div>
  );
}
