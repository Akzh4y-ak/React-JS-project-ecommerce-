import React from "react";
import Routing from "./navigation/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/productContext";

// ✅ Import Toastify CSS and ToastContainer
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <ProductProvider>
      <Header />
      <Routing />
      <Footer />
      {/* ✅ Toast Container at the bottom */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Optional: use 'light', 'dark', or 'colored'
      />
    </ProductProvider>
  );
}
