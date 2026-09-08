import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const nameText = "Ainur & Nimni";

  return (
    <footer className="w-full relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCE4E0]/30 to-[#FCE4E0]/60" />
      
      {/* Decorative Top Line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heart Decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="mb-6"
        >
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-[#C41E3A]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Warm Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank you for being part of our special day.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#8B4513]"
            >
              Your presence is the greatest gift we could ever receive.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="italic text-[#C41E3A]"
            >
              With love and gratitude,
            </motion.span>
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "clamp(4rem, 20vw, 8rem)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto rounded-full"
        />

        {/* Name with Letter-by-Letter Animation - Using Alex Brush font */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-8 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {nameText.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0, 
                y: 30,
                rotateX: -30,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                delay: 0.8 + (index * 0.06),
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                display: "inline-block",
                fontFamily: "'Alex Brush', cursive",
                fontSize: "clamp(1.8rem, 5vw, 4rem)",
                background: letter === " " ? "none" : "linear-gradient(135deg, #C41E3A, #D4AF37)",
                WebkitBackgroundClip: letter === " " ? "none" : "text",
                WebkitTextFillColor: letter === " " ? "transparent" : "transparent",
                backgroundClip: letter === " " ? "none" : "text",
                fontWeight: "bold",
                color: letter === " " ? "transparent" : "transparent",
                letterSpacing: "0.05em",
                lineHeight: 1.2,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Decorative Hearts Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center items-center gap-3 sm:gap-4 mb-6"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="text-[#C41E3A] text-lg sm:text-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              ❤
            </motion.span>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p 
            className="text-xs sm:text-sm"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
            }}
          >
            © {currentYear} Ainur & Nimni. Made with love.
          </p>
        </motion.div>

        {/* Floating Decorations */}
        <motion.div
          className="absolute top-1/4 left-4 text-[#D4AF37] opacity-20 text-2xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-4 text-[#C41E3A] opacity-20 text-xl"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ✧
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-8 text-[#D4AF37] opacity-10 text-3xl"
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-8 text-[#C41E3A] opacity-10 text-2xl"
          animate={{
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        >
          ✧
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;