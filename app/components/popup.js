import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/10"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-200 max-md:w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute cursor-pointer top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* ✅ Scrollable content */}
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;