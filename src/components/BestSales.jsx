import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../productData/products";

const BestSales = () => {
  // Filter only sofa products
  const sofaProducts = products.filter(item => item.category === "sofa");

  return (
    <section className="bg-[#f6f6f6] py-8 px-2 sm:px-4">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Best Sales
        </h2>

        {/* Grid: 3 fixed-width columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6">
          {sofaProducts.map((item) => (
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

export default BestSales;
