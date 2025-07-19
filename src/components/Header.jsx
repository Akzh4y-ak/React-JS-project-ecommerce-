import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="w-32 shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-end space-x-8 text-[16px] font-medium text-gray-800 mr-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-xl text-gray-800">
          <FaUser className="cursor-pointer hover:text-blue-600" />

          <Link to="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="hover:text-blue-600" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#0e305e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu icon */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 border-t text-sm font-medium">
          <Link to="/" className="block py-2 text-gray-700">Home</Link>
          <Link to="/shop" className="block py-2 text-gray-700">Shop</Link>
          <Link to="/cart" className="block py-2 text-gray-700">Cart</Link>
        </div>
      )}
    </header>
  );
}
