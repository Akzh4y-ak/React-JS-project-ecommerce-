import React from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e305e] text-white pt-12 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10 text-sm">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-4 text-white text-2xl font-bold">
            <FaShoppingBag className="mr-2" />
            Mart
          </div>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
            Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">About Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Our Stores</a></li>
            <li><a href="#" className="hover:text-white">Our Cares</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Customer Care</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">How to Buy</a></li>
            <li><a href="#" className="hover:text-white">Track Your Order</a></li>
            <li><a href="#" className="hover:text-white">Corporate & Bulk Purchasing</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>70 Washington Square South,</li>
            <li>New York, NY 10012, United States</li>
            <li>Email: example@gmail.com</li>
            <li>Phone: +1 1123 456 780</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
