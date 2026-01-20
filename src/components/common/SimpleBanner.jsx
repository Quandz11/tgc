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
        <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center">
          <div className="text-center px-4 bg-white bg-opacity-90 py-8 px-8 rounded-lg shadow-lg">
            <h2 className="text-black text-lg md:text-2xl font-bold mb-4">
              CỔ ÁO SƠ MI KHI KHÔNG MẶC ÁO KHOÁC NGOÀI
            </h2>
            <p className="text-black text-xs md:text-sm">
              (Ảnh 5 mẫu có vest: CỔ ÁO SƠ MI - KHI MẶC VỚI VEST/ÁO KHOÁC NGOÀI, 2 ĐẦU LÁ CỔ KHÉP GẦN NHAU)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBanner;
