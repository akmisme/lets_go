import React, { useState } from "react";

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
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="bg-[#936521] text-white px-4 py-2 rounded hover:bg-[#D8AF53] cursor-pointer"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  );
}
