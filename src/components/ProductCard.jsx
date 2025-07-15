import React from "react";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ imgUrl, productName, price, discount }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 w-full max-w-[250px] relative">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-[2px] rounded-full z-10">
          {discount}% Off
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-[160px] flex items-center justify-center mb-3">
        <img src={imgUrl} alt={productName} className="max-h-full object-contain" />
      </div>

      {/* Product Name */}
      <h3 className="text-gray-900 font-semibold text-sm line-clamp-1 mb-1">
        {productName}
      </h3>

      {/* Static 5-Star Rating */}
      <div className="text-yellow-400 text-sm flex gap-[2px] mb-1">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      {/* Price and Add Button */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">${price}</span>
        <button className="bg-gray-900 hover:bg-gray-700 text-white p-2 rounded-full">
          <FiPlus size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
