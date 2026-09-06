import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

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

  const decorativeVariants: Variants = {
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
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="text-center max-w-6xl w-full mx-auto">
        {/* Image */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-5 md:mb-6"
          variants={imageVariants}
        >
          <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-[340px] aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FCE4E0] ring-offset-4">
            <img
              src="/Hero.jpg"
              alt="Ainur & Nimni"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Modern Decorative Elements */}
        <motion.div variants={decorativeVariants}>
          <DecorativeElements />
        </motion.div>

        {/* Name */}
        <div className="flex flex-wrap justify-center whitespace-nowrap mt-4 sm:mt-5 md:mt-6">
          {nameText.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              style={{
                display: "inline-block",
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
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