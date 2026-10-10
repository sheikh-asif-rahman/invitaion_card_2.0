import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

const CeremonyInfo: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
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
        duration: 0.4,
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
        delay: i * 0.02,
        duration: 0.4,
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

  const lineVariants: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "clamp(2rem, 15vw, 5rem)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
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

  const titleText = "CEREMONY INFO";

  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 pt-2 sm:pt-3 md:pt-4 pb-6 sm:pb-8 md:pb-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="text-center max-w-6xl w-full mx-auto">
        {/* Title */}
        <div className="flex flex-wrap justify-center whitespace-nowrap mb-2 sm:mb-3 md:mb-4">
          {titleText.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              style={{
                display: "inline-block",
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1rem, 2.8vw, 2.5rem)",
                background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                letterSpacing: "0.1em",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-3 sm:mb-4 md:mb-5 rounded-full"
        />

        {/* Parents Section - Side by side on large screens */}
        <motion.div
          variants={textVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 sm:mb-4 md:mb-5"
        >
          {/* Groom's Parents */}
          <div className="flex flex-col items-center">
            <p 
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#8B4513',
                fontWeight: 600,
                letterSpacing: '0.2em',
              }}
            >
              Mr. & Mrs.
            </p>
            <p 
              className="text-xs sm:text-base md:text-lg lg:text-xl font-bold"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#6B3A3A',
              }}
            >
              Mohammed Monayem Hossain
            </p>
            <p 
              className="text-[10px] sm:text-sm md:text-base lg:text-lg"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#6B3A3A',
              }}
            >
              Aklima Begum
            </p>
          </div>

          {/* Bride's Parents */}
          <div className="flex flex-col items-center">
            <p 
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#8B4513',
                fontWeight: 600,
                letterSpacing: '0.2em',
              }}
            >
              Mr. & Mrs.
            </p>
            <p 
              className="text-xs sm:text-base md:text-lg lg:text-xl font-bold"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#6B3A3A',
              }}
            >
              Md. Wahidul Islam
            </p>
            <p 
              className="text-[10px] sm:text-sm md:text-base lg:text-lg"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#6B3A3A',
              }}
            >
              Selina Begum
            </p>
          </div>
        </motion.div>

        {/* Announcement */}
        <motion.div
          variants={textVariants}
          className="mb-2 sm:mb-3 md:mb-4"
        >
          <p 
            className="text-[10px] sm:text-xs md:text-sm tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
              fontWeight: 600,
              letterSpacing: '0.15em',
            }}
          >
            WITH JOY WE ANNOUNCE THE MARRIAGE OF
          </p>
          <p 
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
          >
            Mumtahina Mou <span className="text-[#D4AF37]">&amp;</span> Shadman Sakib Saad
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-3 sm:mb-4 md:mb-5 rounded-full"
        />

        {/* Wedding Details */}
        <motion.div
          variants={textVariants}
          className="mb-2 sm:mb-3"
        >
          <p 
            className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            Wedding Ceremony
          </p>
          <p 
            className="text-xs sm:text-base md:text-lg lg:text-xl"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
          >
            Nasirabad Convention Hall
          </p>
          <p 
            className="text-[10px] sm:text-sm md:text-base lg:text-lg"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
          >
            TIME: 8:00 PM
          </p>
        </motion.div>

        {/* Date - Updated to October 30, 2026 */}
        <motion.div
          variants={textVariants}
          className="flex flex-col items-center"
        >
          <p 
            className="text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-wider"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
          >
            FRIDAY
          </p>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <p 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{
                fontFamily: "'EB Garamond', serif",
                background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              30
            </p>
            <span 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#D4AF37',
              }}
            >
              |
            </span>
            <p 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "'EB Garamond', serif",
                background: "linear-gradient(135deg, #D4AF37, #C41E3A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OCTOBER
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div variants={textVariants}>
          <DecorativeElements />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CeremonyInfo;