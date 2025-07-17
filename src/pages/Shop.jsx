import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../productData/products";
import { FiSearch } from "react-icons/fi";
import Dropdown from "../components/Dropdown";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("sofa");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Filter logic
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.productName.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If search query is not empty → return matches from all categories
    if (searchQuery.trim() !== "") {
      return matchSearch;
    }

    // Else → default to filtering by selected category
    const matchCategory = item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchCategory;
  });

  return (
    <>
      <div
        className="bg-cover bg-center py-10 mb-8"
        style={{
          backgroundImage: `url('/src/assets/product-images/table.jpg')`,
        }}
      >
        <h2 className="text-xl sm:text-4xl font-bold text-center text-white drop-shadow-md">
          Products
        </h2>
      </div>

      <section className="bg-white py-10 px-4">
        <div className="max-w-[800px] mx-auto">

          {/* 🔍 Filter + Search Row */}
          <div className="flex flex-col sm:flex-row items-center justify-start mb-10 gap-3 sm:gap-4">
            
            {/* Dropdown - only works if search is empty */}
            <Dropdown onSelect={(value) => setSelectedCategory(value)} />

            {/* Search Input */}
            <div className="relative w-full sm:flex-1 lg:w-[500px]">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 px-4 py-2 pr-10 rounded-full text-sm text-gray-700 focus:outline-none"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-400 text-lg" />
            </div>
          </div>

          {/* 🛍 Product Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div key={item.id} className="flex justify-center">
                  <ProductCard
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    price={item.price}
                    discount={item.discount}
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
