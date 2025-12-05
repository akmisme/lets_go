"use client";
import React, { useState } from "react";

const ScrollablePopup = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    "Sports",
    "Music",
    "Movies",
    "Books",
    "Tech",
    "Travel",
    "Food",
    "Fashion",
    "Gaming",
    "Health",
    "Art",
    "Science",
    "History",
  ];

  return (
    <div className="p-6">
      {/* Trigger button */}
      <div
        className="px-2 w-fit text-[#936521] rounded-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <p>see more</p>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-80 max-h-96 overflow-y-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Select Item</h2>
              <button
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Scrollable clickable divs */}
            <div className="space-y-2">
              {items.map((item) => {
                const isActive = item === activeItem;
                return (
                  <div
                    key={item}
                    onClick={() => setActiveItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === "Enter" && setActiveItem(item)}
                    className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
                      isActive
                        ? "bg-[#B30602] text-white text-sm"
                        : "bg-gray-200 text-gray-800 text-sm"
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollablePopup;