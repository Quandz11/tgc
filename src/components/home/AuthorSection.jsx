// src/components/home/AuthorSection.jsx
import React from 'react';
import mrTuanImg from '../../assets/mr-tuan.png';
import msThanhImg from '../../assets/ms-thanh.png';

const AuthorSection = () => {
  return (
    <div className="bg-[#F8F9FA] pb-10 md:pb-20">
      <section className="px-5 py-8 max-w-6xl mx-auto mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Mr. Tuan Image */}
          <div className="w-full md:w-[45%] rounded-[20px] overflow-hidden shadow-lg bg-white relative group">
            {/* Gradient overlay just in case */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <img
              alt="Portrait of Mr. Dương Anh Tuấn"
              className="w-full h-auto object-cover"
              src={mrTuanImg}
            />
          </div>

          {/* Mr. Tuan Text */}
          <div className="w-full md:w-[50%] flex flex-col justify-center text-left pl-0 md:pl-4">
            <h3 className="text-2xl font-bold text-primary mb-3">Mr. Dương Anh Tuấn</h3>
            <p className="font-['Quicksand'] text-justify leading-[100%] tracking-normal text-gray-800 mb-6">
              Tác giả Bằng độc quyền Sáng Chế Cổ Áo Sơ Mi
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              “Cổ Áo Sơ Mi - sáng chế của người Việt - được bảo hộ độc quyền toàn cầu.
              <br />
              Không chỉ là thời trang. Đây là thành tựu trí tuệ”
            </p>
            <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>

 <section className="px-5 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Ms. Thanh Image */}
          <div className="w-full md:w-[45%] rounded-[20px] overflow-hidden shadow-lg bg-white relative group">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <img 
                alt="Portrait of Ms. Nguyễn Thị Thanh Thanh" 
                className="w-full h-auto object-cover" 
                src={msThanhImg}
              />
          </div>
          
          {/* Ms. Thanh Text */}
          <div className="w-full md:w-[50%] flex flex-col justify-center text-left pl-0 md:pl-4">
            <h3 className="text-2xl font-bold text-primary mb-2">Ms. Nguyễn Thị Thanh Thanh</h3>
            <p className="font-['Quicksand'] font-bold text-justify leading-[100%] tracking-normal text-gray-800 mb-6">
              CEO - CTCP Giải pháp TgC
            </p>
            <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorSection;
