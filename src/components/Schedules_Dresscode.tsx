import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

const SchedulesDresscode: React.FC = () => {
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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
      rotateY: -10,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.9,
      rotateY: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const colorVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateY: 90,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.06 + 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.5,
      rotateY: -90,
      transition: {
        duration: 0.3,
      },
    },
  };

  const scheduleData = [
    { time: "8:00 PM", event: "Welcome", icon: "👋" },
    { time: "8:15 PM", event: "Reception", icon: "🥂" },
    { time: "9:00 PM", event: "Dinner", icon: "🍽️" },
    { time: "11:30 PM", event: "Farewell", icon: "🌙" },
  ];

  const dressColors = [
    { name: "Tropical Blue", hex: "#4A90D9" },
    { name: "Surf Crest", hex: "#7EC8E3" },
    { name: "China Ivory", hex: "#FDF5E6" },
    { name: "Snuff", hex: "#E8D5C4" },
    { name: "Amour", hex: "#F5C6D0" },
    { name: "Melrose", hex: "#C8B8E0" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Peach Cream", hex: "#FDD9B5" },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 py-6 sm:py-8 md:py-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="text-center max-w-4xl w-full mx-auto">
        {/* Schedule Title */}
        <motion.div variants={textVariants} className="mb-2 sm:mb-3 md:mb-4">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider"
            style={{
              fontFamily: "'EB Garamond', serif",
              background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: '0.1em',
            }}
          >
            SCHEDULES
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-5 sm:mb-6 md:mb-8 rounded-full"
        />

        {/* Schedule Cards */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                scale: 1.03, 
                x: 10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-5 border border-[#FCE4E0] overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Animated Background Gradient on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                <div className="relative flex items-center justify-between z-10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.span 
                      className="text-2xl sm:text-3xl"
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <div className="text-left">
                      <motion.p 
                        className="text-sm sm:text-base md:text-lg font-semibold"
                        style={{
                          fontFamily: "'EB Garamond', serif",
                          color: '#6B3A3A',
                        }}
                      >
                        {item.event}
                      </motion.p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg font-bold"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.time}
                  </motion.p>
                </div>

                {/* Animated Decorative Line on Card */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6, ease: "easeOut" }}
                />

                {/* Shimmer Effect on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-6 sm:mb-8 md:mb-10 rounded-full"
        />

        {/* Dress Code Title */}
        <motion.div variants={textVariants} className="mb-2 sm:mb-3 md:mb-4">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider"
            style={{
              fontFamily: "'EB Garamond', serif",
              background: "linear-gradient(135deg, #D4AF37, #C41E3A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: '0.1em',
            }}
          >
            DRESS CODE
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C41E3A] mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"
        />

        {/* Dress Code Description */}
        <motion.div 
          variants={textVariants}
          className="mb-5 sm:mb-6 md:mb-8"
        >
          <p 
            className="text-sm sm:text-base md:text-lg italic"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
            }}
          >
            We kindly encourage soft pastel tones and elegant neutral shades
          </p>
        </motion.div>

        {/* Color Palette - ALWAYS 4 per row */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {dressColors.map((color, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={colorVariants}
              className="group flex flex-col items-center"
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <div className="relative">
                {/* Color Circle */}
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full shadow-lg border-2 sm:border-3 border-[#FCE4E0] cursor-pointer mx-auto"
                  style={{ backgroundColor: color.hex }}
                  whileHover={{
                    boxShadow: `0 0 30px ${color.hex}80, 0 0 60px ${color.hex}40`,
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(0,0,0,0.1)",
                      `0 4px 25px ${color.hex}40`,
                      "0 4px 15px rgba(0,0,0,0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                >
                  {/* Inner Glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 70%)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                  />
                </motion.div>

                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                  initial={{ scale: 1, opacity: 0.3 }}
                  whileHover={{
                    scale: 1.3,
                    opacity: 0,
                    transition: { duration: 0.5 }
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                />

                {/* Second Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#C41E3A]"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1 + 0.5,
                  }}
                />

                {/* Checkmark on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Color Name */}
              <motion.p 
                className="text-[8px] xs:text-[10px] sm:text-xs font-medium mt-1.5 sm:mt-2 text-center truncate w-full px-1"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
                whileHover={{ scale: 1.05 }}
              >
                {color.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div variants={textVariants}>
          <DecorativeElements />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SchedulesDresscode;