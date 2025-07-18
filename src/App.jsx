import React from "react";
import Routing from "./navigation/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/productContext"; // ✅ import the provider

export default function App() {
  return (
    <ProductProvider> {/* ✅ Wrap the whole app */}
      <Header />
      <Routing />
      <Footer />
    </ProductProvider>
  );
}
