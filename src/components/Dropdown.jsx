import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = ["Sofa", "Chair", "Mobile", "Wireless", "Watch"];

const CustomDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filter By Category");
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full sm:w-[180px] sm:ml-2 text-sm"
    >
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="appearance-none w-full bg-[#0e305e] text-white rounded text-sm flex items-center justify-between focus:outline-none relative px-3 py-2 sm:px-4 sm:py-2"

      >
        {selected}
        <FaChevronDown className="absolute right-3 text-xs pointer-events-none" />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white mt-1 rounded shadow-md z-10">
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
