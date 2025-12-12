import React from 'react';

const FilterButton = ({ category, activeCategory, onClick }) => {
  const isActive = category === activeCategory;
  const buttonClasses = `px-4 py-2 rounded-md ${
    isActive ? 'bg-[#936521] text-white text-sm cursor-pointer' : 'bg-gray-200 text-gray-800 text-sm cursor-pointer'
  }`;

  return (
    <button className={buttonClasses} onClick={() => onClick(category)}>
      {category}
    </button>
  );
};

export default FilterButton;