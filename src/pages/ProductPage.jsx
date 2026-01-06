import React from 'react';
import SimpleBanner from '../components/common/SimpleBanner';
import ProductDetail from '../components/product/ProductDetail';

const ProductPage = () => {
  return (
    <div className="bg-white">
      <SimpleBanner />
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
