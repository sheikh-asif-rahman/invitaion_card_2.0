import React, { useState } from 'react';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true); // Opens once and stays open
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-[#1661ac] py-4">
      
      <div 
        className={`env-base ${isOpen ? 'open' : 'close'}`}
        onClick={handleEnvelopeClick}
      >
        
        {/* 1. Background */}
        <div className="absolute inset-0 bg-[#f2f2f2] z-[1] shadow-inner" />

        {/* 2. Letter */}
        <div className="letter">
          <div className="text-center">
            <p className="font-['EB_Garamond'] text-gray-800">You're Invited</p>
          </div>
        </div>

        {/* 3. Front Pockets */}
        <div className="absolute inset-0 overflow-hidden z-[3] rounded-b-[10px]">
          <div className="pocket-left"></div>
          <div className="pocket-right"></div>
          <div className="pocket-bottom"></div>
        </div>

        {/* 4. Heart & Names */}
        <div className="logo">
          {/* Heart SVG - Color matches the top flap (#fbe6dd) */}
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="#fbe6dd" 
            stroke="#fbe6dd" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mb-2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          
          {/* Names */}
          <span className="logo-text">Aynur & Nimni</span>
        </div>

        {/* 5. Top Flap */}
        <div className="flap"></div>

      </div>
    </div>
  );
};

export default Envelope;