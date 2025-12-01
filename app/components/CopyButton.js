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
      setTimeout(() => setCopied(false), 1000); // reset after 1s
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleCopy}
        className="bg-[#936521] text-white px-4 py-2 rounded hover:bg-[#D8AF53] cursor-pointer"
      >
        Copy Code
      </button>

      {/* Success message */}
      {copied && (
        <div className="bg-green-400 text-white px-3 py-1 rounded text-sm animate-fade-in">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}