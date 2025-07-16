import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../productData/products"; // no separate file needed

const NewArrivals = () => {
    const newArrivalProducts = products.filter(
        (item) => item.category === "mobile" || item.category === "wireless"
    );

    return (
        <section className="bg-white py-8 px-11 sm:px-4">
            <div className="max-w-[700px] mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                    New Arrivals
                </h2>

                {/* Same grid spacing as DiscountProducts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-3">
                    {newArrivalProducts.map((item) => (
                        <div key={item.id} className="flex justify-center">
                            <ProductCard
                                imgUrl={item.imgUrl}
                                productName={item.productName}
                                price={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
