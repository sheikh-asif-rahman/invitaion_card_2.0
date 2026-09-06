import React from 'react';
import { motion } from 'framer-motion';

const DecorativeElements: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10">
      {/* Animated Diamond */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 8, ease: "linear", repeat: Infinity },
          scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
        }}
        className="text-[#D4AF37]"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </motion.div>

      {/* Animated Circle with Dot */}
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ 
          rotate: { duration: 10, ease: "linear", repeat: Infinity }
        }}
        className="relative"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#C41E3A" strokeWidth="1.5" />
          <motion.circle
            cx="12"
            cy="2"
            r="2"
            fill="#D4AF37"
            animate={{ 
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut", repeat: Infinity }
            }}
          />
        </svg>
      </motion.div>

      {/* Animated Infinity Symbol */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
        }}
        className="text-[#D4AF37]"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3zm12 0c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3z" />
        </svg>
      </motion.div>

      {/* Animated Cross */}
      <motion.div
        animate={{ 
          rotate: [0, 45, 0],
        }}
        transition={{ 
          rotate: { duration: 4, ease: "easeInOut", repeat: Infinity }
        }}
        className="text-[#C41E3A]"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.div>

      {/* Animated Diamond 2 */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 8, ease: "linear", repeat: Infinity },
          scale: { duration: 2, ease: "easeInOut", repeat: Infinity, delay: 1 }
        }}
        className="text-[#D4AF37]"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DecorativeElements;