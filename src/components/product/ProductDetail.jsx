import React, { useState } from 'react';
import UserGuide from './UserGuide';
import Reviews from './Reviews';
import Membership from '../home/Membership';

// Shirt Pocket
import shirtPocketMain from '../../assets/owen/main-shirt-pocket.png';
import shirtPocketDetail1 from '../../assets/owen/detail-shirt-pocket-1.png';
import shirtPocketDetail2 from '../../assets/owen/detail-shirt-pocket-2.png';
import shirtPocketThumb1 from '../../assets/owen/Thumnail1.png';
import shirtPocketThumb2 from '../../assets/owen/Thumnail2.png';
import shirtPocketThumb3 from '../../assets/owen/Thumnail3.png';
import shirtPocketThumb4 from '../../assets/owen/Thumnail4.png';
import shirtPocketDes1 from '../../assets/owen/des-shirt-pocket-1.png';
import shirtPocketDes2 from '../../assets/owen/des-shirt-pocket-2.png';
import shirtPocketDes3 from '../../assets/owen/des-shirt-pocket-3.png';
import shirtPocketDes4 from '../../assets/owen/des-shirt-pocket-4.png';

// Shirt No Pocket
import shirtNoPocketMain from '../../assets/owen/main-shirt-nopocket.png';
import shirtNoPocketDetail1 from '../../assets/owen/detail-shirt-nopocket-1.png';
import shirtNoPocketDetail2 from '../../assets/owen/detail-shirt-nopocket-2.png';
import shirtNoPocketThumb1 from '../../assets/owen/thumb-shirt-nopocket-1.png';
import shirtNoPocketThumb2 from '../../assets/owen/thumb-shirt-nopocket-2.png';
import shirtNoPocketThumb3 from '../../assets/owen/thumb-shirt-nopocket-3.png';
import shirtNoPocketThumb4 from '../../assets/owen/thumb-shirt-nopocket-4.png';
import shirtNoPocketDes1 from '../../assets/owen/des-shirt-nopocket-1.png';
import shirtNoPocketDes2 from '../../assets/owen/des-shirt-nopocket-2.png';
import shirtNoPocketDes3 from '../../assets/owen/des-shirt-nopocket-3.png';
import shirtNoPocketDes4 from '../../assets/owen/des-shirt-nopocket-4.png';

// Collar
import collarMain from '../../assets/owen/main-collar.png';
import collarDetail1 from '../../assets/owen/detail-collar-1.png';
import collarDetail2 from '../../assets/owen/detail-collar-2.png';
import collarThumb1 from '../../assets/owen/thumb-collar-1.png';
import collarThumb2 from '../../assets/owen/thumb-collar-2.png';
import collarThumb3 from '../../assets/owen/thumb-collar-3.png';
import collarThumb4 from '../../assets/owen/thumb-collar-4.png';
import collarDes1 from '../../assets/owen/des-collar-2.png';
import collarDes2 from '../../assets/owen/des-collar-1.png';


const productData = {
    shirt: {
        title: "SƠ MI CỔ ÁO SÁNG CHẾ TgC BẢN CÓ TÚI",
        price: "1.590.000 VNĐ",
        features: [
            "Phom dáng chuẩn Quốc tế, tôn dáng người mặc.",
            "Vải cao cấp mềm mại, co giãn, thoáng khí, ít nhăn, thấm hút mồ hôi.",
            "Đường may mũi chỉ hoàn mỹ, tinh tế đến từng chi tiết."
        ],
        highlight: "Tổng thể tạo nên một chiếc áo sang trọng - hào hoa - lịch lãm, giúp Quý Ông khẳng định dấu ấn riêng biệt về tư duy, phong cách và đẳng cấp đỉnh cao.",
        mainImage: shirtPocketMain,
        detailImages: [
            shirtPocketDetail1,
            shirtPocketDetail2
        ],
        thumbnails: [
            shirtPocketMain, shirtPocketThumb1, shirtPocketThumb2, shirtPocketThumb3, shirtPocketThumb4
        ],
        descriptionImages: [
            shirtPocketDes1, shirtPocketDes2, shirtPocketDes3, shirtPocketDes4
        ]
    },
    collar: {
        title: "07 ĐIỂM VƯỢT TRỘI CỦA CỔ ÁO SÁNG CHẾ TGC",
        price: "150.000 VNĐ",
        features: [
            "Thiết kế tháo rời độc đáo, tiện lợi khi giặt ủi.",
            "Giữ phom cổ luôn cứng cáp, không bị nát khi giặt máy.",
            "Dễ dàng thay đổi phong cách với các loại cổ khác nhau."
        ],
        highlight: "Giải pháp thông minh giúp cổ áo luôn có được phom dáng đẹp và tránh được các tác động xấu của nhiệt độ nắng phơi, nước, chất tẩy, lực giặt vò. Sự kết hợp hoàn hảo giữa công năng và thẩm mỹ.",
        mainImage: collarMain,
        detailImages: [
            collarDetail1,
            collarDetail2
        ],
        thumbnails: [
            collarMain, collarThumb1, collarThumb2, collarThumb3, collarThumb4
        ],
        descriptionImages: [
            collarDes1, collarDes2
        ]
    },
    shirt_no_pocket: {
        title: "SƠ MI CỔ ÁO SÁNG CHẾ TgC BẢN KHÔNG TÚI",
        price: "1.590.000 VNĐ",
        features: [
            "Phom dáng chuẩn Quốc tế, tôn dáng người mặc.",
            "Vải cao cấp mềm mại, co giãn, thoáng khí, ít nhăn, thấm hút mồ hôi.",
            "Đường may mũi chỉ hoàn mỹ, tinh tế đến từng chi tiết."
        ],
        highlight: "Tổng thể tạo nên một chiếc áo sang trọng - hào hoa - lịch lãm, giúp Quý Ông khẳng định dấu ấn riêng biệt về tư duy, phong cách và đẳng cấp đỉnh cao.",
        mainImage: shirtPocketMain,
        detailImages: [
            shirtPocketDetail1,
            shirtPocketDetail2
        ],
        thumbnails: [
            shirtPocketMain, shirtPocketThumb1, shirtPocketThumb2, shirtPocketThumb3, shirtPocketThumb4
        ],
        descriptionImages: [
            shirtPocketDes1, shirtPocketDes2, shirtPocketDes3, shirtPocketDes4
        ]
    }
};

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('shirt');
    const [isDescOpen, setIsDescOpen] = useState(false);
    const [isShirtMenuOpen, setIsShirtMenuOpen] = useState(false);
    const data = productData[activeTab];
    const [currentImage, setCurrentImage] = useState(data.mainImage);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    // Calculate visible thumbnails: exclude mainImage if it is currently displayed
    const visibleThumbnails = currentImage === data.mainImage
        ? data.thumbnails.filter(img => img !== data.mainImage)
        : data.thumbnails;

    React.useEffect(() => {
        setCurrentImage(data.mainImage);
        setStartIndex(0);
    }, [activeTab]);

    // Reset startIndex if we switch to main image (list shrinks)
    React.useEffect(() => {
        if (currentImage === data.mainImage) {
            setStartIndex(0);
        }
    }, [currentImage, data.mainImage]);

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNext = () => {
        if (startIndex < visibleThumbnails.length - 4) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <>
            <div className="container mx-auto px-4 pt-10 md:pt-16 pb-0 max-w-[1240px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] mb-8 lg:mb-16">
                    {/* LEFT COLUMN */}
                    <div className="lg:w-[480px] shrink-0 w-full" onClick={() => setIsShirtMenuOpen(false)}>
                        {/* Tabs */}
                        <div className="flex gap-8 md:gap-12 mb-6 md:mb-10 relative">
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!activeTab.startsWith('shirt')) {
                                            setActiveTab('shirt');
                                        }
                                        setIsShirtMenuOpen(!isShirtMenuOpen);
                                    }}
                                    className={`pb-1 text-[24px] md:text-[32px] font-['Cormorant_Garamond'] font-bold uppercase tracking-wide transition-colors relative flex items-center gap-2 ${activeTab.startsWith('shirt') ? 'text-[#002D58]' : 'text-[#A0A0A0]'}`}
                                >
                                    ÁO SƠ MI
                                    <span className="material-symbols-outlined text-[20px] md:text-[24px]">
                                        {isShirtMenuOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                                    </span>
                                    {activeTab.startsWith('shirt') && (
                                        <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#002D58]"></div>
                                    )}
                                </button>

                                {/* Dropdown Menu */}
                                {isShirtMenuOpen && (
                                    <div className="absolute top-full left-0 z-20 mt-2 w-[320px] bg-white border border-[#EBEBEB] shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2">
                                        <div
                                            onClick={() => {
                                                setActiveTab('shirt');
                                                setIsShirtMenuOpen(false);
                                            }}
                                            className={`px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 ${activeTab === 'shirt' ? 'bg-blue-50/50' : ''}`}
                                        >
                                            <div className={`font-['Quicksand'] text-[16px] font-semibold ${activeTab === 'shirt' ? 'text-[#002D58]' : 'text-[#333333]'}`}>
                                                Sơ mi cổ áo sáng chế bản có túi
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setActiveTab('shirt_no_pocket');
                                                setIsShirtMenuOpen(false);
                                            }}
                                            className={`px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${activeTab === 'shirt_no_pocket' ? 'bg-blue-50/50' : ''}`}
                                        >
                                            <div className={`font-['Quicksand'] text-[16px] font-semibold ${activeTab === 'shirt_no_pocket' ? 'text-[#002D58]' : 'text-[#333333]'}`}>
                                                Sơ mi cổ áo sáng chế bản không túi
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => {
                                    setActiveTab('collar');
                                    setIsShirtMenuOpen(false);
                                }}
                                className={`pb-1 text-[24px] md:text-[32px] font-['Cormorant_Garamond'] font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'collar' ? 'text-[#002D58]' : 'text-[#A0A0A0]'
                                    }`}
                            >
                                CỔ ÁO
                                {activeTab === 'collar' && (
                                    <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#002D58]"></div>
                                )}
                            </button>
                        </div>

                        {/* Main Photo Frame */}
                        <div
                            className="bg-[#EBEBEB] w-full aspect-[440/544] mb-6 flex items-center justify-center p-4 cursor-pointer"
                            onDoubleClick={() => setIsPopupOpen(true)}
                        >
                            <img
                                src={currentImage}
                                alt={data.title}
                                className={`w-full h-full ${activeTab.startsWith('shirt') ? 'object-cover' : 'object-contain'} transition-all duration-300`}
                            />
                        </div>

                        {/* Thumbnails with Arrows */}
                        <div className="relative flex items-center gap-2 group">
                            {/* Left Arrow */}
                            <button
                                className={`absolute left-[-10px] z-10 w-8 h-8 flex items-center justify-center bg-transparent ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                onClick={handlePrev}
                                disabled={startIndex === 0}
                            >
                                <span className="material-symbols-outlined text-[40px] font-bold">chevron_left</span>
                            </button>

                            <div className="flex gap-4 w-full overflow-hidden">
                                {visibleThumbnails.slice(startIndex, startIndex + 4).map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] border shrink-0 bg-white cursor-pointer hover:border-[#002D58] transition-all ${currentImage === img ? 'border-[#002D58]' : 'border-[#CCD8E0]'}`}
                                        onClick={() => setCurrentImage(img)}
                                        onDoubleClick={() => { setCurrentImage(img); setIsPopupOpen(true); }}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-contain p-1" />
                                    </div>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <button
                                className={`absolute right-[-10px] z-10 w-8 h-8 flex items-center justify-center bg-transparent ${startIndex >= visibleThumbnails.length - 4 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                onClick={handleNext}
                                disabled={startIndex >= visibleThumbnails.length - 4}
                            >
                                <span className="material-symbols-outlined text-[40px] font-bold">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1">
                        {/* Top Small Detail Images - Pushed down to align with top of Main Photo */}
                        <div className="flex gap-4 md:gap-10 mb-8 md:mb-12 mt-4 lg:mt-[88px] overflow-x-auto pb-2">
                            {data.detailImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`w-[120px] h-[160px] md:w-[180px] md:h-[240px] border-2 shadow-[0_4px_10px_rgba(0,0,0,0.15)] bg-white p-[2px] shrink-0 cursor-pointer hover:border-[#002D58] transition-all ${currentImage === img ? 'border-[#002D58]' : 'border-[#88D1FF]'}`}
                                    onClick={() => setCurrentImage(img)}
                                    onDoubleClick={() => { setCurrentImage(img); setIsPopupOpen(true); }}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Product Title */}
                        <h1 className="text-[28px] font-bold text-[#002D58] mb-6 leading-tight uppercase font-['Cormorant_Garamond']">
                            {activeTab === 'collar' ? (
                                <>
                                    <span className="font-['Times_New_Roman'] font-black inline-block align-baseline opacity-85">
                                        07</span> ĐIỂM VƯỢT TRỘI CỦA CỔ ÁO SÁNG CHẾ TGC
                                </>
                            ) : (
                                data.title
                            )}
                        </h1>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
                            {data.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="text-black text-xl font-bold mt-[-2px]">✓</span>
                                    <span className="font-['Quicksand'] text-[17px] text-[#333333] leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Highlight Description Box */}
                        <div className="bg-white border-[2.5px] border-[#79C9FF] p-6 rounded-[20px] mb-8 shadow-sm">
                            <p className="text-[#333333] text-[17px] font-['Quicksand'] font-bold leading-normal">
                                {data.highlight}
                            </p>
                        </div>

                        {/* Price, Social, Sold & Buy Now Button */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    {activeTab !== 'collar' && (
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[44px] font-bold text-black font-sans tracking-tight leading-none">
                                                {data.price}
                                            </span>
                                            <div className="text-[18px] text-[#333333] font-['Quicksand'] font-medium">
                                                Đã bán 10K+
                                            </div>
                                        </div>
                                    )}

                                    <div className="hidden md:flex items-center gap-4">
                                        <span className="text-[20px] font-bold text-[#333333] font-['Quicksand']">Chia sẻ</span>
                                        <div className="flex gap-3">
                                            <button className="w-[38px] h-[38px] rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                                <i className="fa-brands fa-facebook-f text-lg"></i>
                                            </button>
                                            <button className="w-[38px] h-[38px] rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                                <i className="fa-brands fa-twitter text-lg"></i>
                                            </button>
                                            <button className="w-[38px] h-[38px] rounded-full bg-[#E60023] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                                <i className="fa-brands fa-pinterest-p text-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Buy Now Button */}
                            <div className="flex justify-end pr-4">
                                <button className="bg-[#001D3D] text-white font-['Quicksand'] font-bold text-[22px] py-4 px-16 rounded-full shadow-[0_4px_15px_rgba(0,136,255,0.4)] hover:bg-black transition-all">
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION ACCORDION SECTION */}
                <div className="mt-16 md:mt-32 border-t border-gray-100 pt-8">
                    <div
                        onClick={() => setIsDescOpen(!isDescOpen)}
                        className="flex justify-between items-center cursor-pointer group px-4"
                    >
                        <span className="text-[24px] md:text-[32px] font-bold text-[#333333] font-['Cormorant_Garamond']">
                            Mô tả
                        </span>
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-md ${isDescOpen ? 'bg-[#001529] text-white' : 'bg-white text-[#001529] border border-gray-200'}`}>
                            <span className="material-symbols-outlined text-[24px] md:text-[32px] font-bold">
                                {isDescOpen ? 'remove' : 'add'}
                            </span>
                        </div>
                    </div>

                    {isDescOpen && (
                        <div className="mt-8 md:mt-12 bg-white rounded-[20px] md:rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-black p-6 md:p-12 animate-in fade-in slide-in-from-top-4 duration-500">
                            {activeTab.startsWith('shirt') ? (
                                <div className="max-w-[1000px] mx-auto">
                                    <h2 className="text-center text-[20px] md:text-[28px] font-bold font-['Cormorant_Garamond'] text-black mb-8 md:mb-12 uppercase">
                                        CỔ ÁO SÁNG CHẾ TgC – CHUẨN FORM, GIỮ PHONG CÁCH SANG TRỌNG                                    </h2>

                                    <p className="font-bold text-[18px] mb-4 font-['Quicksand']">Thông tin chi tiết sơ mi:</p>
                                    <p className="mb-4 text-[16px] font-['Quicksand']">Sản phẩm áo sơ mi có cổ sáng chế TgC được thiết kế với:</p>
                                    <ul className="space-y-3 mb-6 ml-8 list-none font-['Quicksand'] text-[16px]">
                                        <li>Phom dáng chuẩn Quốc tế, tôn dáng người mặc.</li>
                                        <li>Vải cao cấp mềm mại, co giãn, thoáng khí, ít nhăn, thấm hút mồ hôi.</li>
                                        <li>Đường may mũi chỉ hoàn mỹ, tinh tế đến từng chi tiết.</li>
                                    </ul>
                                    <p className="text-[16px] leading-relaxed font-['Quicksand'] mb-12">
                                        Tổng thể tạo nên một chiếc áo sang trọng – hào hoa – lịch lãm, giúp Quý Ông khẳng định dấu ấn riêng biệt về tư duy, phong cách và đẳng cấp đỉnh cao.
                                    </p>

                                    <p className="font-bold text-[18px] mb-6 font-['Quicksand']">Mô tả sơ mi:</p>
                                    <p className="text-[16px] leading-relaxed font-['Quicksand'] mb-12">
                                        Mang trong mình tinh thần sáng tạo và sự chuẩn mực của thời trang quốc tế, sơ mi TgC với phần cổ sáng chế được thiết kế dành riêng cho những quý ông đề cao phong cách lịch lãm – tinh tế – và bản lĩnh khác biệt.
                                    </p>

                                    <div className="space-y-16 flex flex-col items-center">
                                        <div className="w-full flex justify-center">
                                            <img src={data.descriptionImages[0]} alt="Full Shirt" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                        </div>

                                        <div className="w-full">
                                            <p className="text-[16px] font-['Quicksand'] mb-6">
                                                <span className="font-bold">* Phom dáng chuẩn Quốc tế:</span> Tỉ lệ hoàn hảo, tôn dáng người mặc, mang lại vẻ ngoài tự tin và khí chất sang trọng trong mọi hoàn cảnh.
                                            </p>
                                            <div className="flex justify-center">
                                                <img src={data.descriptionImages[1]} alt="Collar" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <p className="text-[16px] font-['Quicksand'] mb-6">
                                                <span className="font-bold">* Chất liệu cao cấp:</span> Vải mềm mại, co giãn nhẹ, thoáng khí, thấm hút mồ hôi tốt – giúp bạn luôn thoải mái, chỉn chu suốt ngày dài.
                                            </p>
                                            <div className="flex justify-center">
                                                <img src={data.descriptionImages[2]} alt="Fabric" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <p className="text-[16px] font-['Quicksand'] mb-6">
                                                <span className="font-bold">* Từng đường kim mũi chỉ tinh xảo:</span> Gia công tỉ mỉ đến từng chi tiết, thể hiện tay nghề và tiêu chuẩn hoàn mỹ của thương hiệu TgC.
                                            </p>
                                            <div className="flex justify-center">
                                                <img src={data.descriptionImages[3]} alt="Cuff" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-16 text-[16px] leading-relaxed font-['Quicksand'] text-center">
                                        Tổng thể tạo nên một thiết kế sang trọng – hào hoa – lịch lãm, giúp quý ông hiện đại khẳng định dấu ấn riêng biệt về tư duy, phong cách và đẳng cấp đỉnh cao.
                                    </p>

                                    <p className="mt-8 text-center italic font-['Quicksand'] font-bold text-[18px]">
                                        “Không chỉ là một chiếc sơ mi – mà là tuyên ngôn về vị thế và bản lĩnh của người đàn ông thành công.”
                                    </p>
                                </div>
                            ) : (
                                <div className="max-w-[1000px] mx-auto font-['Quicksand']">
                                    <h2 className="text-center text-[24px] md:text-[28px] font-bold font-['Cormorant_Garamond'] text-black mb-12 uppercase">
                                        CỔ ÁO SÁNG CHẾ TgC – CHUẨN FORM, GIỮ PHONG CÁCH SANG TRỌNG
                                    </h2>

                                    <p className="font-bold text-[18px] mb-4">Thông tin chi tiết cổ áo:</p>
                                    <p className="mb-6 text-[16px]">Hai miếng chống cong vênh (Anti-Curl Inserts): được gắn ở hai đầu lá cổ, giúp cổ không bị cong quăn.</p>

                                    <p className="font-bold text-[18px] mb-4">Chất liệu & công năng:</p>
                                    <ul className="space-y-6 mb-12">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-black font-bold">✓</span>
                                            <div>
                                                <p className="font-bold text-[16px]">Vành nhựa cao cấp:</p>
                                                <p className="text-[15px] mb-1">Làm từ nhựa dẻo kỹ thuật cao cấp, trọng lượng nhẹ, độ đàn hồi tốt, không gãy gập.</p>
                                                <p className="text-[15px] mb-1">An toàn khi tiếp xúc vải và da.</p>
                                                <p className="text-[15px]">Có thể tháo lắp nhanh bằng thao tác đơn giản.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-black font-bold">✓</span>
                                            <div>
                                                <p className="font-bold text-[16px]">Miếng chống cong vênh:</p>
                                                <p className="text-[15px] mb-1">Là thanh composite mỏng, đặt khéo léo ở 2 đầu lá cổ, chống cong quăn.</p>
                                                <p className="text-[15px]">Giúp cổ áo luôn phẳng, cứng cáp, tạo đường nét thanh lịch.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <p className="font-bold text-[18px] mb-6">Mô tả cổ áo:</p>
                                    <p className="text-[16px] mb-12">
                                        Điểm nhấn độc quyền của chiếc sơ mi TgC nằm ở cấu trúc cổ áo sáng chế, được nghiên cứu kỹ lưỡng để giữ dáng chuẩn trong suốt thời gian mặc áo.
                                    </p>

                                    <div className="flex flex-col items-center gap-8 md:gap-16">
                                        <div className="w-full flex justify-center">
                                            <img src={data.descriptionImages[0]} alt="Collar Detail 1" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                        </div>

                                        <p className="text-[16px] leading-relaxed max-w-[800px]">
                                            Cổ áo được tích hợp vành nhựa định hình cùng hai miếng chống cong vênh, giúp cổ luôn có phom dáng của phụ kiện mà không bị xô lệch dù mặc lâu hay di chuyển nhiều. Người mặc chỉ cần lồng vành nhựa vào cổ áo khi mặc áo và rút ra khi giặt – thao tác nhanh, đơn giản nhưng mang lại hiệu quả giữ form tuyệt đối.                                            </p>

                                        <div className="w-full flex justify-center">
                                            <img src={data.descriptionImages[1]} alt="Collar Detail 2" className="w-full max-w-[600px] h-auto border border-gray-100 shadow-sm" />
                                        </div>
                                    </div>

                                    <p className="mt-16 text-[16px] text-center leading-relaxed">
                                        Thiết kế này giúp cổ áo luôn dựng phom – không cong quăn, tạo nên diện mạo chỉn chu, sang trọng và chuyên nghiệp cho quý ông hiện đại.
                                    </p>

                                    <p className="mt-12 text-center font-bold text-[18px]">
                                        “Một chi tiết nhỏ – tạo nên khác biệt lớn. Cổ áo luôn hoàn hảo, như chính phong thái của bạn.”                                </p>

                                    <div className="mt-12 text-center text-gray-300 tracking-[10px]">---</div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Image Popup / Lightbox */}
                {isPopupOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
                        onClick={() => setIsPopupOpen(false)}
                    >
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 transition-colors bg-white/10 rounded-full p-2"
                            title="Đóng"
                        >
                            <span className="material-symbols-outlined text-4xl">close</span>
                        </button>

                        <div
                            className="w-full h-full flex flex-col items-center justify-between gap-4 py-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Main Popup Image */}
                            <div className="flex-1 w-full flex items-center justify-center overflow-hidden px-4">
                                <img
                                    src={currentImage}
                                    alt="Zoomed View"
                                    className="max-w-full max-h-full object-contain select-none shadow-2xl rounded-lg"
                                />
                            </div>

                            {/* Thumbnails Slider for Popup */}
                            <div className="h-[80px] md:h-[100px] w-full max-w-[90vw] shrink-0 overflow-x-auto no-scrollbar">
                                <div className="flex justify-start md:justify-center min-w-full gap-2 md:gap-4 h-full pb-2 px-4">
                                    {[data.mainImage, ...data.detailImages, ...data.thumbnails].map((img, idx) => (
                                        <div
                                            key={`popup-thumb-${idx}`}
                                            className={`h-full aspect-square border-2 shrink-0 cursor-pointer transition-all rounded-sm overflow-hidden bg-white ${currentImage === img ? 'border-white opacity-100 ring-2 ring-white/50' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                            onClick={() => setCurrentImage(img)}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <UserGuide activeTab={activeTab} />
                <Reviews />
            </div>
            <Membership />
        </>
    );
};

export default ProductDetail;
