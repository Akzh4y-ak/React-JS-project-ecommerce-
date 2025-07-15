import React from "react";
import ProductCard from "../components/ProductCard";
import { discountProducts } from "../productData/discountProducts";

const DiscountProducts = () => {
  return (
    <section className="bg-[#f6f6f6] py-6 px-2">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">
          Big Discount Sale
        </h2>

        {/* Reduced spacing between cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-center">
          {discountProducts.map((item) => (
            <div key={item.id} className="flex justify-center">
              <ProductCard
                imgUrl={item.imgUrl}
                productName={item.productName}
                price={item.price}
                discount={item.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
