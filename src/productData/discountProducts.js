// src/productData/discountProducts.js

import productImg01 from "../assets/product-images/double-sofa-01.png";
import productImg02 from "../assets/product-images/double-sofa-02.png";
import productImg08 from "../assets/product-images/arm-chair-02.jpg";
import productImg09 from "../assets/product-images/arm-chair-03.jpg";
import phone03 from "../assets/product-images/phone-03.png";
import phone04 from "../assets/product-images/phone-04.jpg";

export const discountProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    avgRating: 4.8,
  },
];
