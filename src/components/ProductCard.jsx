import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/cartSlice"; // Adjust this path if needed

const ProductCard = ({
  product,
  id,
  imgUrl,
  productName,
  price,
  discount,
  shortDesc,
  showDiscount = true,
}) => {
  const dispatch = useDispatch();

  // Resolve props
  const finalId = product?.id || id;
  const finalImgUrl = product?.imgUrl || imgUrl;
  const finalProductName = product?.productName || productName;
  const finalPrice = product?.price || price;
  const finalDiscount = product?.discount || discount;
  const finalShortDesc = product?.shortDesc || shortDesc;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: finalId,
        productName: finalProductName,
        imgUrl: finalImgUrl,
        price: finalPrice,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 relative w-full max-w-[230px]">
      {/* Discount Badge */}
      {showDiscount && finalDiscount && (
        <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs font-semibold px-2 py-[2px] rounded-full z-10">
          {finalDiscount}% Off
        </div>
      )}

      {/* Image */}
      <Link to={`/product/${finalId}`} className="block">
        <div className="w-full h-[160px] flex items-center justify-center mb-3">
          <img
            src={finalImgUrl}
            alt={finalProductName}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Product Name */}
      <h3 className="text-gray-900 font-semibold text-sm line-clamp-1 mb-1">
        {finalProductName}
      </h3>

      {/* Optional Short Description */}
      {finalShortDesc && (
        <p className="text-gray-500 text-xs line-clamp-2 mb-1">
          {finalShortDesc}
        </p>
      )}

      {/* Star Rating */}
      <div className="text-yellow-400 text-lg flex gap-[2px] mb-1">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      {/* Price + Add to Cart */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">${finalPrice}</span>
        <button
          onClick={handleAddToCart}
          className="border border-[#0d0d26] text-[#0d0d26] bg-white hover:bg-[#0d0d26] hover:text-white transition-colors duration-200 p-[6px] rounded-full"
        >
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
