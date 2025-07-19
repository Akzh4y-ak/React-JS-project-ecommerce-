// src/context/ProductContext.jsx
import React, { createContext, useContext } from "react";
import { products } from "../productData/products";

// Create Context
const ProductContext = createContext();

// Provider Component
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

//  Custom Hook (for cleaner usage)
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
