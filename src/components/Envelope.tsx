import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen?: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1500);
  };

  return (
    <div 
      className="min-h-[100dvh] w-full flex items-center justify-center py-4 cursor-pointer"
      onClick={handleEnvelopeClick}
    >
      <div className={`env-base ${isOpen ? 'open' : ''}`}>
        {/* 1. Background */}
        <div className="absolute inset-0 bg-[#FFF8F5] z-[1] shadow-inner rounded-[10px]" />

        {/* 2. Letter */}
        <div className="letter relative h-full">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
            <p className="font-['EB_Garamond'] text-gray-800 text-lg sm:text-xl">You're Invited</p>
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
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#FCE4E0"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span className="logo-text">Ainur & Nimni</span>
        </div>

        {/* 5. Top Flap */}
        <div className="flap"></div>
      </div>
    </div>
  );
};

export default Envelope;