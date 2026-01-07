// src/components/home/Hero.jsx
import React from 'react';
import heroBanner from '../../assets/banner.png';

const Hero = () => {
  return (
    <section className="relative bg-[#F8F9FA] pb-10">
      <div className="w-full relative">
        <img 
            alt="Men in white shirts standing in a row" 
            className="w-full h-auto object-cover min-h-[250px] md:min-h-[400px]" 
            src={heroBanner} 
        />
      </div>
      
      {/* Title Section with Decorative Lines */}
      <div className="py-10 md:py-20 bg-white w-full">
        <div className="flex items-center justify-between w-full">
          {/* Left Decoration */}
          <div className="flex flex-col gap-2 md:gap-5 w-[7.5%] md:w-[175px]">
             <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-full shadow-sm"></div>
             <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[80%] shadow-sm"></div>
             <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[60%] shadow-sm"></div>
             <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[80%] shadow-sm"></div>
             <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-full shadow-sm"></div>
          </div>
          
          <h1 className="flex-1 font-['Cormorant_Garamond'] text-[24px] md:text-[50px] font-bold text-[#0A1D3A] uppercase tracking-normal text-center px-4 leading-[100%]">
            Tinh Hoa Việt - Chuẩn Mực Thế Giới
          </h1>

          {/* Right Decoration */}
          <div className="flex flex-col gap-2 md:gap-5 w-[7.5%] md:w-[175px] items-end">
            <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-full shadow-sm"></div>
            <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[80%] shadow-sm"></div>
            <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[60%] shadow-sm"></div>
            <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-[80%] shadow-sm"></div>
            <div className="h-[3px] md:h-[6px] bg-[#0B64B8] w-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
