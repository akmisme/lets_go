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
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  );
}
