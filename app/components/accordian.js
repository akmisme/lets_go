"use client";
import { useRef, useEffect, useState } from "react";

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 text-white shadow-md rounded-4xl mb-2 transition-all duration-300">
      <button
        className="w-150 rounded-4xl max-xl:w-180 max-md:w-60 max-md:text-[10px] p-4 text-left font-semibold text-lg flex justify-between items-center bg-[#936521] hover:bg-[#D8AF53] focus:outline-none"
        onClick={onToggle}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.5s ease, opacity 0.4s ease 0.1s",
          overflow: "hidden",
        }}
        className="bg-white border-t border-gray-200 rounded-4xl text-gray-400"
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
