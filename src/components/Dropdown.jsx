import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = ["Sofa", "Chair", "Mobile", "Wireless", "Watch"];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filter By Category");

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-[180px] sm:ml-2">
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0e305e] text-white px-4 py-2 pr-10 rounded text-sm cursor-pointer flex justify-between items-center"
      >
        {selected}
        <FaChevronDown className="ml-2 text-xs" />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-md rounded mt-1">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleSelect(category)}
              className="px-4 py-2 text-sm text-[#0e305e] hover:bg-[#0e305e] hover:text-white cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
