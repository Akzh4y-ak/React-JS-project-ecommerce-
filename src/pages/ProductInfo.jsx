import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../productData/products";
import ProductCard from "../components/ProductCard";
import tableImg from "../assets/product-images/table.jpg";

export default function ProductInfo() {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-xl font-semibold text-red-600">
        Product not found
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <>
      {/* Full-width background header */}
      <div
        className="w-full bg-cover bg-center py-10 mb-8"
        style={{ backgroundImage: `url(${tableImg})` }}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-center text-white drop-shadow-md">
          {product.productName}
        </h2>
      </div>

      {/* Main content container */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="w-[300px] h-[300px] object-contain"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{product.productName}</h3>
            <div className="flex items-center gap-2">
              <div className="text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-sm text-gray-500">
                ({product.reviews?.length || 0} ratings)
              </p>
            </div>

            <p className="text-2xl font-bold text-[#0d0d26]">${product.price}</p>
            <p className="text-gray-500 text-sm">
              Category: {product.category}
            </p>
            <p className="text-gray-700">
              {product.shortDesc || "No short description available."}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 border border-gray-300 rounded px-2 py-1"
              />
              <button className="bg-[#0e305e] text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Description & Reviews Section */}
        <div className="mt-16">
          <div className="flex gap-6 border-b pb-2">
            <button className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">
              Description
            </button>
            <button className="text-gray-500">
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>
          <div className="mt-4 text-gray-600 leading-relaxed">
            <p>{product.description || "No description available."}</p>
          </div>
        </div>

        {/* You Might Also Like Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">You might also like</h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.slice(0, 4).map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  showDiscount={false}
                />
              ))
            ) : (
              <p className="text-gray-500">No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
