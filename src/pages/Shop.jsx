import ProductCard from "../components/ProductCard";
import { products } from "../productData/products";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "../components/Dropdown";

const Shop = () => {
  const sofaProducts = products.filter((item) => item.category === "sofa");

  return (
    <>
      <div
        className="bg-cover bg-center py-10 mb-8 "
        style={{
          backgroundImage: `url('/src/assets/product-images/table.jpg')`, // ✅ update path if needed
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
            {/* Dropdown */}
            <div >
           <Dropdown/>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:flex-1 lg:w-[500px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white border border-gray-300 px-4 py-2 pr-10 rounded-full text-sm text-gray-700 focus:outline-none"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-400 text-lg" />
            </div>
          </div>

          {/* 🛍 Product Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-8">
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
    </>
  );
};

export default Shop;
