import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const CeremonyInfo: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  // Simplified container - faster animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.12 to 0.05
        delayChildren: 0.05,   // Reduced from 0.15 to 0.05
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Faster text animation
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.4, // Reduced from 0.7 to 0.4
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      rotateX: 10,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Faster letter animation
  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -20,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.02, // Reduced from 0.06 to 0.02
        duration: 0.4,   // Reduced from 0.7 to 0.4
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -40,
      rotateX: 20,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Faster line animation
  const lineVariants: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "clamp(4rem, 25vw, 8rem)",
      opacity: 1,
      transition: {
        duration: 0.4, // Reduced from 0.8 to 0.4
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,    // Reduced from 0.3 to 0.1
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleText = "Ceremony Information";
  const dateText = "Saturday, December 14, 2024";
  const timeText = "4:00 PM - 10:00 PM";
  const venueText = "The Grand Ballroom, Hotel Luxe";

  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="text-center max-w-4xl w-full mx-auto">
        {/* Title */}
        <div className="flex flex-wrap justify-center whitespace-nowrap mb-5 sm:mb-6 md:mb-8">
          {titleText.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              style={{
                display: "inline-block",
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
                background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-1 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full"
        />

        {/* Info items - All appear together */}
        <motion.p
          variants={textVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4"
          style={{
            fontFamily: "'EB Garamond', serif",
            color: '#6B3A3A',
          }}
        >
          📅 {dateText}
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4"
          style={{
            fontFamily: "'EB Garamond', serif",
            color: '#6B3A3A',
          }}
        >
          🕐 {timeText}
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4"
          style={{
            fontFamily: "'EB Garamond', serif",
            color: '#6B3A3A',
          }}
        >
          📍 {venueText}
        </motion.p>

        {/* Decorative Hearts */}
        <motion.div
          variants={textVariants}
          className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10"
        >
          <span className="text-[#C41E3A] text-xl sm:text-2xl md:text-3xl">❤️</span>
          <span className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl">✦</span>
          <span className="text-[#C41E3A] text-xl sm:text-2xl md:text-3xl">❤️</span>
          <span className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl">✦</span>
          <span className="text-[#C41E3A] text-xl sm:text-2xl md:text-3xl">❤️</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CeremonyInfo;