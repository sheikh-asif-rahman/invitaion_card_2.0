import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

const CelebrateTime: React.FC = () => {
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

  // Countdown Timer - Target: October 30, 2026 at 8:00 PM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-30T20:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calendar data for October 2026
  const calendarData = {
    month: "October",
    year: "2026",
    days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, date: i + 1 })),
    firstDayOfMonth: 3 // Thursday (0 = Sunday, 3 = Thursday)
  };

  const weekDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

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
        {/* Main Message */}
        <motion.div variants={textVariants} className="mb-4 sm:mb-5 md:mb-6">
          <p 
            className="text-sm sm:text-base md:text-lg tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
              fontWeight: 600,
              letterSpacing: '0.15em',
            }}
          >
            WE INVITE YOU TO
          </p>
          <p 
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mt-1"
            style={{
              fontFamily: "'EB Garamond', serif",
              background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CELEBRATE WITH US AT:
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-5 sm:mb-6 md:mb-8 rounded-full"
        />

        {/* Event Schedule */}
        <motion.div variants={textVariants} className="mb-5 sm:mb-6 md:mb-8">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div>
              <p 
                className="text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                  fontWeight: 600,
                }}
              >
                GUESTS ARRIVE
              </p>
              <p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                8:00 PM
              </p>
            </div>
            <div>
              <p 
                className="text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                  fontWeight: 600,
                }}
              >
                RECEPTION BEGINS
              </p>
              <p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                8:15 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Date - Friday 30 October */}
        <motion.div variants={textVariants} className="mb-5 sm:mb-6 md:mb-8">
          <p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider"
            style={{
              fontFamily: "'EB Garamond', serif",
              background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FRIDAY — 30 — OCTOBER
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-5 sm:mb-6 md:mb-8 rounded-full"
        />

        {/* Countdown Timer */}
        <motion.div variants={textVariants} className="mb-5 sm:mb-6 md:mb-8">
          <p 
            className="text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase mb-3"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
              fontWeight: 600,
            }}
          >
            COUNTING DOWN
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-wider mt-1"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                }}
              >
                DAYS
              </span>
            </div>
            <span 
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#D4AF37',
              }}
            >
              |
            </span>
            <div className="flex flex-col items-center">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-wider mt-1"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                }}
              >
                HOURS
              </span>
            </div>
            <span 
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#D4AF37',
              }}
            >
              |
            </span>
            <div className="flex flex-col items-center">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-wider mt-1"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                }}
              >
                MIN
              </span>
            </div>
            <span 
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: '#D4AF37',
              }}
            >
              |
            </span>
            <div className="flex flex-col items-center">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#6B3A3A',
                }}
              >
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-wider mt-1"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: '#8B4513',
                }}
              >
                SEC
              </span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-5 sm:mb-6 md:mb-8 rounded-full"
        />

        {/* Animated Calendar */}
        <motion.div variants={textVariants} className="w-full max-w-md mx-auto">
          <motion.div 
            className="relative bg-gradient-to-br from-white/80 to-[#FFF5F0]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border border-[#FCE4E0] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated Border Glow */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C41E3A] via-[#D4AF37] to-[#C41E3A] opacity-20 blur-sm"
              animate={{
                background: [
                  "linear-gradient(135deg, #C41E3A, #D4AF37, #C41E3A)",
                  "linear-gradient(225deg, #D4AF37, #C41E3A, #D4AF37)",
                  "linear-gradient(135deg, #C41E3A, #D4AF37, #C41E3A)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner border with animation */}
            <motion.div 
              className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/80 to-[#FFF5F0]/80"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(196, 30, 58, 0.1)",
                  "0 0 40px rgba(212, 175, 55, 0.2)",
                  "0 0 20px rgba(196, 30, 58, 0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Calendar Content */}
            <div className="relative z-10">
              {/* Calendar Header with animation */}
              <motion.div 
                className="text-center mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: '#6B3A3A',
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {calendarData.month} {calendarData.year}
                </motion.h3>
                <motion.div 
                  className="w-16 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mt-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </motion.div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Weekday Headers */}
                {weekDays.map((day, index) => (
                  <motion.div 
                    key={`header-${index}`}
                    className="text-[10px] sm:text-xs font-semibold py-1 sm:py-2"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      color: '#8B4513',
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.03 }}
                  >
                    {day}
                  </motion.div>
                ))}

                {/* Empty cells for days before month starts */}
                {Array.from({ length: calendarData.firstDayOfMonth }).map((_, index) => (
                  <div key={`empty-${index}`} className="py-1 sm:py-2"></div>
                ))}

                {/* Calendar Days with staggered animation */}
                {calendarData.days.map((day, index) => {
                  const isToday = day.date === 30;
                  return (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ 
                        delay: 0.3 + (index + calendarData.firstDayOfMonth) * 0.01,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotateY: 0,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer
                        ${isToday 
                          ? 'text-white shadow-lg transform scale-110' 
                          : 'hover:bg-[#FCE4E0]'
                        }`}
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        color: isToday ? '#FFFFFF' : '#6B3A3A',
                      }}
                    >
                      {isToday && (
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.01, type: "spring", stiffness: 300 }}
                        />
                      )}
                      <motion.span 
                        className="relative z-10"
                        animate={isToday ? {
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={isToday ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                      >
                        {day.date}
                      </motion.span>
                      {isToday && (
                        <motion.div 
                          className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] opacity-30 blur-sm"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Highlighted Date with animation */}
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="inline-block px-4 py-1 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] text-white rounded-full text-sm sm:text-base font-semibold shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(196, 30, 58, 0.3)",
                      "0 4px 25px rgba(212, 175, 55, 0.5)",
                      "0 4px 15px rgba(196, 30, 58, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⭐ 30 October 2026
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative corner accents */}
            <motion.div 
              className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div variants={textVariants}>
          <DecorativeElements />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CelebrateTime;