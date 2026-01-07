import React from 'react';

const Reviews = () => {
    const reviews = [
        { name: "Người mua 007", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: false },
        { name: "Người mua 666", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: false },
        { name: "Người mua 8386", rating: 5, comment: "\"Nội dung nhận xét\"", extraPadding: true },
    ];

    return (
        <div className="mt-12 md:mt-24 mb-8 border-t border-gray-100 pt-8">
            <h2 className="text-xl md:text-[28px] font-bold text-[#002D58] font-['Cormorant_Garamond'] uppercase tracking-wider mb-8 md:mb-12">
                Phản hồi của khách hàng
            </h2>

            <div className="flex flex-col gap-8 md:gap-14 max-w-[1100px] text-black px-0 md:px-12">
                {reviews.map((review, idx) => (
                    <div key={idx} className="relative group">
                        {/* THE OFFSET SHADOW BOX */}
                        <div className="absolute inset-0 bg-[#001529] rounded-[20px] md:rounded-[40px] translate-x-[10px] md:translate-x-[15px] translate-y-[10px] md:translate-y-[15px] transition-transform group-hover:translate-x-[12px] md:group-hover:translate-x-[18px] group-hover:translate-y-[12px] md:group-hover:translate-y-[18px]"></div>
                        
                        {/* THE MAIN CARD CONTENT */}
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

            {/* See More Button */}
            <div className="mt-12 md:mt-24 flex justify-center">
                <button className="relative group">
                    {/* Shadow layer */}
                    <div className="absolute inset-0 bg-[#001529] rounded-[30px] translate-x-1 translate-y-1 group-active:translate-x-0 group-active:translate-y-0 transition-transform"></div>
                    {/* Main layer */}
                    <div className="relative bg-[#F0F2F5] text-[#002D58] font-bold py-4 px-8 md:px-14 rounded-[30px] border border-[#002D58] hover:bg-white transition-all group-active:translate-x-0.5 group-active:translate-y-0.5 font-['Quicksand'] text-[18px]">
                        Xem thêm
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Reviews;
