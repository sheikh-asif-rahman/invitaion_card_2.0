import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const Hero: React.FC = () => {
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
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -30,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.06,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -80,
      rotateX: 30,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      rotateY: 15,
      transition: {
        duration: 0.5,
      },
    },
  };

  const heartVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: 30,
      transition: {
        duration: 0.4,
      },
    },
  };

  const nameText = "Ainur & Nimni";

  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 min-h-screen pt-26 sm:pt-40 md:pt-20 pb-0 sm:pb-0 md:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="text-center max-w-6xl w-full mx-auto">
        {/* Image - BIGGER on mobile & tablet */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-10 md:mb-12"
          variants={imageVariants}
        >
          <div className="w-64 sm:w-80 md:w-72 lg:w-80 xl:w-96 2xl:w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FCE4E0] ring-offset-4">
            <img
              src="/Hero.jpg"
              alt="Ainur & Nimni"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Heart Icon - BIGGER */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-5 md:mb-6"
          variants={heartVariants}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="#FCE4E0"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heart-pulse w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>

        {/* Name - BIGGER font on mobile & tablet */}
        <div className="flex flex-wrap justify-center whitespace-nowrap">
          {nameText.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              style={{
                display: "inline-block",
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(3rem, 10vw, 7rem)",
                background: "linear-gradient(135deg, #C41E3A, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;