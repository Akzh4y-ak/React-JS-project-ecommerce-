import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ id, imgUrl, productName, price, discount }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 relative w-full max-w-[230px]">
      
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs font-semibold px-2 py-[2px] rounded-full z-10">
          {discount}% Off
        </div>
      )}

      {/* Image (wrapped with link to product info page) */}
      <Link to={`/product/${id}`} className="block">
        <div className="w-full h-[160px] flex items-center justify-center mb-3">
          <img
            src={imgUrl}
            alt={productName}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Product Name */}
      <h3 className="text-gray-900 font-semibold text-sm line-clamp-1 mb-1">
        {productName}
      </h3>

      {/* Star Rating (static for now) */}
      <div className="text-yellow-400 text-lg flex gap-[2px] mb-1">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      {/* Price + Add to Cart */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹{price}</span>
        <button className="border border-[#0d0d26] text-[#0d0d26] bg-white hover:bg-[#0d0d26] hover:text-white transition-colors duration-200 p-[6px] rounded-full">
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
