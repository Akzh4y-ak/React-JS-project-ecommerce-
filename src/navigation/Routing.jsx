import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductInfo from '../pages/ProductInfo';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
};

export default Routing;
