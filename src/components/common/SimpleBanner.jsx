// src/components/common/SimpleBanner.jsx
import React from 'react';
import heroBanner from '../../assets/banner-product.png';

const SimpleBanner = () => {
  return (
    <section className="relative bg-[#F8F9FA] pb-10">
      <div className="w-full relative">
        <img 
            alt="Men in white shirts standing in a row" 
            className="w-full h-auto object-cover min-h-[250px] md:min-h-[400px]" 
            src={heroBanner} 
        />
      </div>
    </section>
  );
};

export default SimpleBanner;
