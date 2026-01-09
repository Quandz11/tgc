// src/components/common/Header.jsx
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 pt-4 pb-1 flex items-center lg:items-end">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={(e) => handleNavClick('home', e)}>
             <img src={logo} alt="TGC Logo" className="h-16 md:h-20 lg:h-24 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex ml-16 mr-auto space-x-12 text-white text-[20px] font-['Cormorant_Garamond'] uppercase tracking-normal leading-[100%] pb-4">
          <a onClick={(e) => handleNavClick('home', e)} className="cursor-pointer hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/30" href="#">Trang chủ</a>
          <a onClick={(e) => handleNavClick('product', e)} className="cursor-pointer hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/30" href="#">Sản phẩm</a>
          <a onClick={(e) => handleNavClick('about', e)} className="cursor-pointer hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/30" href="#">Về chúng tôi</a>
        </nav>

        {/* Auth Buttons */}
        {/* <div className="hidden sm:flex ml-auto items-center space-x-4 self-center">
          <button className="bg-white text-primary px-5 py-2 rounded-[4px] text-[13px] font-bold hover:bg-gray-100 transition shadow-sm">
            Đăng nhập
          </button>
          <button className="border border-white/40 text-white px-5 py-2 rounded-[4px] text-[13px] font-bold hover:bg-white/10 transition">
            Đăng ký
          </button>
        </div> */}

        {/* Mobile Menu Button box*/}
        <button 
          className="text-white lg:hidden ml-auto sm:ml-4 border border-white/30 p-1 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      
      {/* Mobile Nav Dropdown (Optional implementation based on state) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-gray-700 px-4 py-2 space-y-2">
           <a onClick={(e) => handleNavClick('home', e)} className="block text-white py-2 hover:bg-white/10" href="#">Trang chủ</a>
           <a onClick={(e) => handleNavClick('product', e)} className="block text-white py-2 hover:bg-white/10" href="#">Sản phẩm</a>
           <a onClick={(e) => handleNavClick('about', e)} className="block text-white py-2 hover:bg-white/10" href="#">Về chúng tôi</a>
           {/* <div className="flex flex-col gap-2 pt-2">
             <button className="bg-white text-primary px-4 py-2 rounded text-xs font-bold uppercase w-full">Đăng nhập</button>
             <button className="border border-white text-white px-4 py-2 rounded text-xs font-bold uppercase w-full">Đăng ký</button>
           </div> */}
        </div>
      )}
    </header>
  );
};

export default Header;
