import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../productData/products";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <div className="text-center mt-10 text-xl">Product Not Found</div>;

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className="p-4 md:p-10">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={product.imgUrl}
          alt={product.productName}
          className="w-[300px] h-auto rounded-lg shadow-lg"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.productName}</h1>
          <p className="text-xl text-blue-600 font-semibold">${product.price}</p>
          <p className="text-gray-600">{product.shortDesc}</p>
          <button className="bg-[#0e305e] text-white px-6 py-2 rounded-lg hover:bg-[#0b2548] transition">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="w-full h-[200px] object-contain"
                />
                <h3 className="mt-2 text-lg font-semibold">{item.productName}</h3>
                <p className="text-blue-500 font-medium mt-1">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
