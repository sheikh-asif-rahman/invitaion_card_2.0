import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0ED] via-[#FDF5E6] to-[#FFF0ED]">
        {/* Decorative Light Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Soft glow spots */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FCE4E0] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F5E6CA] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDF5E6] rounded-full opacity-10 blur-3xl"></div>
          
          {/* Decorative floating particles */}
          <div className="absolute top-20 left-20 text-2xl opacity-10 animate-float-slow">✦</div>
          <div className="absolute bottom-32 right-20 text-3xl opacity-10 animate-float-slower">✦</div>
          <div className="absolute top-40 right-40 text-xl opacity-10 animate-float-slow">✧</div>
          <div className="absolute bottom-40 left-32 text-2xl opacity-10 animate-float-slower">✧</div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#C41E3A] rounded-full opacity-15"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-[#D4AF37] rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#C41E3A] rounded-full opacity-15"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;