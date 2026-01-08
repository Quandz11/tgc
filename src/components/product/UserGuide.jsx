import React, { useRef, useState } from 'react';
import step1sm from '../../assets/step-1-sm.png';
import step2sm from '../../assets/step-2-sm.png';
import step3sm from '../../assets/step-3-sm.png';
import step4sm from '../../assets/step-4-sm.png';
import step5sm from '../../assets/step-5-sm.png';
import step6sm from '../../assets/step-6-sm.png';
import step7sm from '../../assets/step-7-sm.png';
import step1c from '../../assets/step-1-c.png';
import step2c from '../../assets/step-2-c.png';
import step3c from '../../assets/step-3-c.png';
import step4c from '../../assets/step-4-c.png';
import step5c from '../../assets/step-5-c.png';
import step6c from '../../assets/step-6-c.png';
import step7c from '../../assets/step-7-c.png';

const UserGuide = ({ activeTab }) => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const shirtSteps = [
        { id: 1, img: step1sm },
        { id: 2, img: step2sm },
        { id: 3, img: step3sm },
        { id: 4, img: step4sm },
        { id: 5, img: step5sm },
        { id: 6, img: step6sm },
        { id: 7, img: step7sm },
    ];
    
    const collarSteps = [
        { id: 1, img: step1c },
        { id: 2, img: step2c },
        { id: 3, img: step3c },
        { id: 4, img: step4c },
        { id: 5, img: step5c },
        { id: 6, img: step6c },
        { id: 7, img: step7c },
    ];

    const currentSteps = activeTab === 'shirt' ? shirtSteps : collarSteps;

    const handleMouseDown = (e) => {
        setIsDown(true);
        sliderRef.current.style.cursor = 'grabbing';
        sliderRef.current.style.scrollBehavior = 'auto';
        sliderRef.current.style.scrollSnapType = 'none';
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        if (!isDown) return;
        setIsDown(false);
        sliderRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        setIsDown(false);
        sliderRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1; // Kéo 1:1
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="mt-12 md:mt-24 border-t border-gray-100 pt-8">
            <div className="mb-6 md:mb-12">
                <h2 className="text-xl md:text-[28px] font-bold text-[#002D58] font-['Cormorant_Garamond'] uppercase tracking-wider">
                    Hướng dẫn sử dụng
                </h2>
            </div>

            <div 
                ref={sliderRef}
                className="flex gap-4 md:gap-10 overflow-x-auto pb-6 md:pb-12 no-scrollbar snap-x snap-mandatory h-auto px-4 md:px-0 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {currentSteps.map((step, idx) => (
                    <div key={idx} className="min-w-[85vw] md:min-w-[595px] h-[250px] md:h-[320px] rounded-[20px] md:rounded-[30px] overflow-hidden snap-center transition-all duration-500 shadow-xl md:shadow-2xl shrink-0 relative group">
                        {/* Step Number Overlay */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-8 z-10">
                            <span className="text-red-600 font-black text-[24px] md:text-[32px] drop-shadow-md">
                                {step.id}
                            </span>
                        </div>
                        
                        <img 
                            src={step.img} 
                            alt={`${activeTab === 'shirt' ? 'Sơ mi' : 'Cổ áo'} Step ${step.id}`} 
                            draggable="false"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 select-none" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserGuide;
