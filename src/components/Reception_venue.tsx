import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

const ReceptionVenue: React.FC = () => {
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

  const mapVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };


  const glowVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.4,
      },
    },
  };

  const titleText = "RECEPTION VENUE";

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
        {/* Title */}
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
            {titleText}
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] mx-auto mb-5 sm:mb-6 md:mb-8 rounded-full"
        />

        {/* Venue Name with Animation */}
        <motion.div 
          variants={textVariants} 
          className="mb-4 sm:mb-5 md:mb-6"
        >
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#6B3A3A',
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Azampur Bazar
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: '#8B4513',
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Azampur, Feni, Bangladesh
          </motion.p>
        </motion.div>

        {/* Google Maps Embed with Glow Effect */}
        <motion.div
          variants={glowVariants}
          className="relative"
        >
          {/* Animated Glow Behind Map */}
          <motion.div 
            className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#C41E3A]/20 via-[#D4AF37]/20 to-[#C41E3A]/20 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Map Container */}
          <motion.div
            variants={mapVariants}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FCE4E0]"
            whileHover={{
              scale: 1.02,
              borderColor: '#D4AF37',
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full pb-[75%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183077.73918276408!2d91.45436602387079!3d22.83354633499647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37534702e93712fb%3A0x57044c4a623ab729!2sAzampur%20Bazar!5e0!3m2!1sen!2sbd!4v1788845543192!5m2!1sen!2sbd"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Reception Venue Map"
              />
            </div>

            {/* Corner Decorations */}
            <motion.div 
              className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg opacity-60"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg opacity-60"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg opacity-60"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg opacity-60"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
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

export default ReceptionVenue;