import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = ["Sofa", "Chair", "Mobile", "Wireless", "Watch"];

const Dropdown = ({ onSelect }) => {
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
            className="relative w-full sm:w-[200px]"
        >
            {/* Dropdown Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="appearance-none w-full bg-[#0e305e] text-white rounded text-sm flex items-center justify-between focus:outline-none relative px-3 py-2 sm:px-4 sm:py-2 pr-10"
            >
                {selected}

                {/* Vertical line + arrow */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                    <span className="w-[1px] h-4 bg-white"></span>
                    <FaChevronDown className="text-white text-xs" />
                </span>
            </button>

            {/* Dropdown List */}
            {isOpen && (
               <ul className="absolute left-0 z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md">

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

export default Dropdown;
