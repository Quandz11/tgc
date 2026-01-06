import React from 'react';
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

    return (
        <div className="mt-24 border-t border-gray-100 pt-8">
            <div className="mb-12">
                <h2 className="text-[28px] font-bold text-[#002D58] font-['Cormorant_Garamond'] uppercase tracking-wider">
                    Hướng dẫn sử dụng
                </h2>
            </div>

            <div className="flex gap-10 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory h-auto px-4 md:px-0">
                {currentSteps.map((step, idx) => (
                    <div key={idx} className="min-w-full md:min-w-[595px] h-[320px] rounded-[30px] overflow-hidden snap-center transition-all duration-500 shadow-2xl shrink-0 relative group">
                        {/* Step Number Overlay */}
                        <div className="absolute top-6 right-8 z-10">
                            <span className="text-red-600 font-black text-[32px] drop-shadow-md">
                                {step.id}
                            </span>
                        </div>
                        
                        <img 
                            src={step.img} 
                            alt={`${activeTab === 'shirt' ? 'Sơ mi' : 'Cổ áo'} Step ${step.id}`} 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserGuide;
