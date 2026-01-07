import React, { useState } from 'react';
import Membership from '../components/home/Membership';
import mrTuanImg from '../assets/tg-1.png';
import tg2 from '../assets/tg-2.png';
import tg3 from '../assets/tg-3.png';
import banner from '../assets/banner-about.png';
import mainImage from '../assets/main-image.png';
import collarDetail from '../assets/collar.png';
import about3 from '../assets/about-3.png';


const AboutPage = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "TGC chuyên về những phẩm nào?",
      a: "TGC chuyên cung cấp các dòng sơ mi cao cấp ứng dụng công nghệ sáng chế cổ áo độc quyền, giúp giữ form dáng hoàn hảo cho quý ông."
    },
    {
      q: "Cách lựa chọn size áo",
      a: "Chúng tôi có bảng size chi tiết dựa trên cân nặng và chiều cao. Bạn có thể liên hệ hotline để được tư vấn chính xác nhất."
    },
    {
      q: "Đặt hàng như thế nào?",
      a: "Quý khách có thể đặt hàng trực tiếp trên website, fanpage hoặc qua số điện thoại hotline của TGC."
    },
    {
      q: "Chính sách đổi trả",
      a: "TGC hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu có lỗi từ nhà sản xuất hoặc không vừa size."
    }
  ];

  const reviews = [
    { name: "Người mua 007", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: false },
    { name: "Người mua 666", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: false },
    { name: "Người mua 8386", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: true },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Group Image */}
      <section className="w-full">
        <img 
          src={banner} 
          alt="TGC Team" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* 2. Giới Thiệu */}
      <section className="max-w-[1240px] mx-auto py-16 md:py-32 px-6 md:px-12">
        <h2 className="text-[36px] md:text-[70px] font-['Cormorant_Garamond'] font-bold text-[#002D58] mb-8 md:mb-14 uppercase leading-none tracking-tight">
          GIỚI THIỆU
        </h2>
        <div className="max-w-[900px] text-[#212529] font-['Quicksand'] text-[18px] md:text-[25px] leading-[1.35] font-medium">
          <p>
            <span className="font-bold">TGC</span> là thương hiệu áo sơ mi cao cấp dành cho những người đàn ông thành đạt, những người theo đuổi sự hoàn hảo trong phong cách sống và công việc. Sản phẩm của chúng tôi khác biệt nhờ công nghệ cổ áo đứng phom độc quyền, giúp người mặc luôn giữ được phong thái chỉn chu và tự tin tuyệt đối, không chỉ là một món đồ thời trang mà còn là một biểu tượng của sự đẳng cấp.
          </p>
        </div>
      </section>

      {/* 3. Quote Section - "Chúng tôi mang đến..." */}
      <section className="max-w-[1240px] mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col items-center mb-10 md:mb-16">
            <div className="text-[#002D58] text-[40px] mb-4 text-center">
                <i className="fa-solid fa-quote-left"></i>
            </div>
            <h3 className="text-[32px] font-['Cormorant_Garamond'] font-bold text-[#002D58]  tracking-wider text-center">
                Chúng tôi mang đến ...
            </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Left Col */}
            <div className="space-y-12">
                <div>
                    <h4 className="font-bold font-['Cormorant_Garamond'] text-[20px] mb-4  italic">"Tầm nhìn"</h4>
                    <p className="font-['Quicksand'] text-[15px] leading-relaxed text-[#555]">
                        TgC sẽ trở thành thương hiệu áo sơ mi cao cấp hàng đầu Việt Nam, là biểu tượng của sự chỉn chu và đẳng cấp, đồng hành cùng những người đàn ông thành công trên mọi hành trình.
                    </p>
                </div>
                {/* Image with blue shadow */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#002D58] translate-x-4 translate-y-4 rounded-lg"></div>
                    <img src={banner} alt="Vision" className="relative w-full h-[250px] object-cover rounded-lg border border-gray-200" />
                </div>
            </div>

            {/* Right Col */}
            <div className="space-y-12">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#002D58] -translate-x-4 translate-y-4 rounded-lg"></div>
                    <img src={banner} alt="Mission" className="relative w-full h-[250px] object-cover rounded-lg border border-gray-200" />
                </div>
                <div>
                     <h4 className="font-bold font-['Cormorant_Garamond'] text-[20px] mb-4  italic">"Sứ mệnh"</h4>
                     <p className="font-['Quicksand'] text-[15px] leading-relaxed text-[#555]">
                        TGC mang đến những chiếc áo sơ mi với thiết kế đột phá và chất lượng vượt trội, giúp phái mạnh thể hiện phong thái tự tin và đẳng cấp trong công việc và cuộc sống. Chúng tôi không chỉ bán sản phẩm, chúng tôi trao tặng sự hoàn hảo và tôn vinh giá trị của sự chỉn chu.
                     </p>
                     <p className="mt-4 font-['Quicksand'] text-[15px] leading-relaxed text-[#555]">
                        Bên cạnh đó chúng tôi cam kết sẽ mang đến những giải pháp cho ngành may mặc với những chi tiết nhỏ nhưng lại tạo nên sự chỉn chu cho từng vóc dáng của bạn.
                     </p>
                </div>
            </div>
        </div>

        {/* Value Core Section */}
        <div className="mt-24">
             <h4 className="font-bold font-['Cormorant_Garamond'] text-[20px] mb-6  italic">"Giá trị cốt lõi"</h4>
             <div className="space-y-4 font-['Quicksand'] text-[15px] text-[#555] max-w-[900px]">
                <p><span className="font-bold ">Tinh Hoa:</span> Chúng tôi không ngừng nghiên cứu và phát triển để tạo ra những sản phẩm mang tinh hoa của sự hoàn hảo, từ chất liệu đến từng đường may.</p>
                <p><span className="font-bold ">Đẳng Cấp:</span> Mọi sản phẩm và dịch vụ của TGC đều hướng đến sự tinh tế, sang trọng và chất lượng vượt trội.</p>
                <p><span className="font-bold ">Chỉn Chu:</span> Sự tỉ mỉ, cẩn trọng trong từng chi tiết là kim chỉ nam cho mọi hoạt động, từ khâu thiết kế, sản xuất đến trải nghiệm khách hàng.</p>
             </div>
             <div className="mt-12 flex justify-center">
                 <img src={about3} alt="Core Values" className="w-full max-w-[600px] h-auto rounded-xl shadow-2xl" />
             </div>
        </div>
      </section>

      {/* 4. Product Concept Sections */}
      <section className="bg-[#E9ECEF] py-12 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-8 md:gap-12">
                <div className="w-full aspect-[1.4/1] bg-white rounded-[20px] md:rounded-[40px] border border-gray-300 overflow-hidden">
                    <img src={collarDetail} alt="Collar Detail" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#002D58] font-['Quicksand'] max-w-[400px] leading-tight">
                    Cổ áo TgC – Biểu tượng của sự chỉn chu, phong độ và đẳng cấp
                </h3>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 md:gap-12">
                <div className="space-y-6">
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#002D58] font-['Quicksand']">
                        Một chiếc áo TgC không đơn thuần là thời trang
                    </h3>
                    <ul className="space-y-2 font-['Quicksand'] text-[#001D38] text-[16px] md:text-[20px]">
                        <li>+ Nó là tuyên ngôn</li>
                        <li>+ Là phong độ</li>
                        <li>+ Là cảm giác sang trọng lướt qua da thịt ngay khi bạn khoác lên mình</li>
                    </ul>
                </div>
                <div className="w-full aspect-[1.6/1] bg-white rounded-[30px] md:rounded-[50px] border border-gray-300 overflow-hidden">
                    <img src={mainImage} alt="Cuff Detail" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* 5. Tuyên Ngôn Của Tác Giả */}
      <section className="py-12 md:py-24 max-w-[1240px] mx-auto px-6">
        <h2 className="text-center text-[28px] md:text-[36px] font-['Cormorant_Garamond'] font-bold text-[#002D58] mb-10 md:mb-20 uppercase tracking-widest">Tuyên ngôn của tác giả</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 items-center">
            <div className="relative">
                 <div className="absolute inset-0 bg-[#001529] translate-x-6 translate-y-6 rounded-3xl"></div>
                 <img src={mrTuanImg} alt="Mr. Tuan" className="relative w-full h-auto rounded-3xl object-cover" />
            </div>
            <div className="space-y-8 font-['Quicksand']">
                <p className="text-[17px] leading-relaxed text-[#333]">
                    Cổ áo sáng chế TgC – tuyệt tác thiết kế độc quyền trên thế giới, định hình chuẩn mực mới cho phong thái quý ông hiện đại.
                </p>
                <p className="text-[17px] leading-relaxed text-[#333]">
                    Không còn cả vạt, cổ áo vẫn giữ form dựng hoàn hảo, hai lá cổ chụm hờ tinh tế, tôn trọn vẻ lịch lãm – sang trọng – đẳng cấp khi kết hợp cùng vest hoặc áo khoác cao cấp.
                </p>
                <div className="pt-4 text-right">
                    <p className="font-bold text-[#002D58] italic text-[18px]">-- Tác giả Dương Anh Tuấn --</p>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 items-end">
            <img src={tg2} alt="Gallery 1" className="w-full h-[400px] object-cover rounded-2xl shadow-lg" />
            <img src={tg3} alt="Gallery 2" className="w-full h-[600px] object-cover rounded-2xl shadow-lg" />
        </div>

        <div className="text-center max-w-[900px] mx-auto mb-20">
            <p className="font-['Quicksand'] text-[17px] leading-relaxed text-[#333]">
                Sơ mi cổ đứng form hoàn hảo, không quăn, luôn giữ vẻ ngay ngắn và chỉn chu. Hai lá cổ phẳng mịn, cân đối, duy trì khoảng cách ổn định khi mặc sơ mi đơn thuần, mang lại phong thái lịch lãm và tinh tế trong mọi khoảnh khắc.
            </p>
        </div>

        <div className="space-y-8">
             <img src={banner} alt="Full Team" className="w-full h-auto rounded-3xl shadow-xl" />
             <img src={banner} alt="Full Team 2" className="w-full h-auto rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* 6. Customer Reviews Section */}
      <section className="bg-white py-12 md:py-24 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-0 md:px-6">
            <h2 className="text-xl md:text-[28px] font-bold text-[#002D58] font-['Cormorant_Garamond'] uppercase tracking-wider mb-8 md:mb-16 text-center">
                SỰ ĐÓN NHẬN ĐẦY YÊU THƯƠNG CỦA KHÁCH HÀNG
            </h2>

            <div className="flex flex-col gap-8 md:gap-14 max-w-[1100px] mx-auto text-black px-0 md:px-12">
                {reviews.map((review, idx) => (
                    <div key={idx} className="relative group">
                         <div className="absolute inset-0 bg-[#001529] rounded-[20px] md:rounded-[40px] translate-x-[10px] md:translate-x-[15px] translate-y-[10px] md:translate-y-[15px] transition-transform group-hover:translate-x-[12px] md:group-hover:translate-x-[18px] group-hover:translate-y-[12px] md:group-hover:translate-y-[18px]"></div>
                        <div className={`relative bg-white border border-black rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-start transition-colors group-hover:bg-[#F9FBFF] ${review.extraPadding ? 'p-6 md:p-16 min-h-[auto] md:min-h-[220px]' : 'p-6 md:p-8'}`}>
                            <div className="mb-4 md:mb-0">
                                <p className="font-bold text-[18px] mb-2 font-['Quicksand']">{review.name}</p>
                                <p className="text-[17px] italic font-['Quicksand'] text-[#333333]">{review.comment}</p>
                            </div>
                            <div className="flex gap-1 text-[#FFC107]">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 md:mt-24 flex justify-center">
                <button className="relative group">
                    <div className="absolute inset-0 bg-[#001529] rounded-[30px] translate-x-1 translate-y-1 group-active:translate-x-0 group-active:translate-y-0 transition-transform"></div>
                    <div className="relative bg-[#F0F2F5] text-[#002D58] font-bold py-4 px-8 md:px-14 rounded-[30px] border border-[#002D58] hover:bg-white transition-all group-active:translate-x-0.5 group-active:translate-y-0.5 font-['Quicksand'] text-[18px]">
                        Xem thêm
                    </div>
                </button>
            </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-12 md:py-24 max-w-[1000px] mx-auto px-6">
        <h2 className="text-center text-xl md:text-[28px] font-['Cormorant_Garamond'] font-bold text-[#002D58] mb-10 md:mb-16 uppercase tracking-widest">Những câu hỏi thường gặp</h2>
        <div className="space-y-2">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className="w-full py-6 flex items-center justify-between text-left"
                    >
                        <span className="font-['Quicksand'] font-medium text-[16px] uppercase tracking-tight text-[#333] italic">{faq.q}</span>
                        <span className="material-symbols-outlined text-[#002D58]">
                            {openFaq === idx ? 'remove_circle' : 'add_circle'}
                        </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-[200px] pb-6' : 'max-h-0'}`}>
                        <p className="text-[#666] font-['Quicksand'] text-[15px]">{faq.a}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 8. Contact Section */}
      <section className="bg-[#001529] text-white py-12 md:py-24 px-6 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto">
            <div className="space-y-8 md:space-y-12">
                <h3 className="text-[32px] md:text-[44px] font-['Cormorant_Garamond'] font-bold uppercase tracking-wider mb-10 md:mb-20">Liên hệ với chúng tôi</h3>
                
                <div className="space-y-8 md:space-y-12">
                    {/* Phone */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#0088FF] translate-x-1.5 translate-y-1.5 rounded-sm"></div>
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white flex items-center justify-center rounded-sm shadow-sm">
                                <span className="material-symbols-outlined text-[#001529] text-[32px] md:text-[40px] font-bold">phone_enabled</span>
                            </div>
                        </div>
                        <div className="space-y-2 font-['Quicksand']">
                            <p className="font-bold text-[18px] md:text-[22px] leading-none text-white">Điện thoại</p>
                            <p className="text-[16px] md:text-[19px] text-white">0975 035 688</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#0088FF] translate-x-1.5 translate-y-1.5 rounded-sm"></div>
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white flex items-center justify-center rounded-sm shadow-sm">
                                <span className="material-symbols-outlined text-[#001529] text-[32px] md:text-[40px] font-bold">mail</span>
                            </div>
                        </div>
                        <div className="space-y-2 font-['Quicksand']">
                            <p className="font-bold text-[18px] md:text-[22px] leading-none text-white">Hòm thư góp ý</p>
                            <p className="text-[16px] md:text-[19px] text-white">tgc.ctcp@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 9. Message Form Section */}
      <section className="bg-[#F4F7F9] py-12 md:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[28px] md:text-[36px] font-['Cormorant_Garamond'] font-bold text-center uppercase mb-10 md:mb-16 tracking-widest text-[#002D58]">
                HÃY ĐỂ LẠI LỜI NHẮN CỦA BẠN!
            </h3>
            
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium font-['Quicksand'] text-[#001D38] ml-1">Họ và tên</label>
                        <input className="w-full bg-white border border-[#CED4DA] rounded-[8px] px-4 py-3 outline-none focus:border-[#0088FF] shadow-inner transition-all" type="text" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium font-['Quicksand'] text-[#001D38] ml-1">Email</label>
                        <input className="w-full bg-white border border-[#CED4DA] rounded-[8px] px-4 py-3 outline-none focus:border-[#0088FF] shadow-inner transition-all" type="email" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium font-['Quicksand'] text-[#001D38] ml-1">SĐT</label>
                        <input className="w-full bg-white border border-[#CED4DA] rounded-[8px] px-4 py-3 outline-none focus:border-[#0088FF] shadow-inner transition-all" type="text" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[16px] font-medium font-['Quicksand'] text-[#001D38] ml-1">Địa chỉ</label>
                        <input className="w-full bg-white border border-[#CED4DA] rounded-[8px] px-4 py-3 outline-none focus:border-[#0088FF] shadow-inner transition-all" type="text" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-[16px] font-medium font-['Quicksand'] text-[#001D38] ml-1">Nội dung</label>
                    <textarea className="w-full bg-white border border-[#CED4DA] rounded-[8px] px-4 py-3 outline-none focus:border-[#0088FF] shadow-inner transition-all min-h-[150px]" />
                </div>

                <div className="flex justify-center pt-10">
                    <button className="bg-[#0062BD] text-white py-3.5 px-12 rounded-full flex items-center justify-center gap-3 font-bold text-[18px] uppercase transition hover:bg-[#00519d] shadow-md group">
                        GỬI
                        <span className="material-symbols-outlined font-bold transform transition-transform group-hover:translate-x-1">trending_flat</span>
                    </button>
                </div>
            </form>
        </div>
      </section>

      <Membership />
    </div>
  );
};

export default AboutPage;
