// src/components/home/Membership.jsx
import React from 'react';

const Membership = () => {
  return (
    <section className="bg-[rgb(33,37,41)] text-white py-12 px-5 border-t-4 border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="font-['Cormorant_Garamond'] text-lg md:text-2xl font-bold mb-2 uppercase tracking-wide">ĐĂNG KÝ ĐỂ TRỞ THÀNH HỘI VIÊN</h3>
          <p className="font-['Quicksand'] text-white text-sm font-light">Gia nhập cộng đồng quý ông TgC – nơi phong cách và sự tinh tế được nâng tầm</p>
        </div>
        <div className="w-full md:w-[45%]">
            <div className="flex w-full border border-white rounded-[4px] overflow-hidden">
                <input 
                  className="flex-grow bg-transparent text-white px-4 py-3 focus:outline-none placeholder-gray-300 text-sm" 
                  placeholder="Địa chỉ email" 
                  type="email"
                />
                <button 
                  className="bg-transparent text-white px-8 py-3 text-sm font-medium hover:bg-white/10 transition uppercase tracking-wider whitespace-nowrap" 
                  type="button"
                >
                  Đăng ký
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
