import React from "react";
import { motion, MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Translations } from "../../../types";

interface HeroSectionProps {
  t: Translations;
  y1: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, y1, scale, opacity }) => {
  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4">
      <motion.div
        style={{ y: y1, scale }}
        className="absolute -top-[10%] left-0 w-full h-[120%] z-0"
      >
        <img
          src="/images/hero_photo.webp"
          alt="Plov, manty, samsa and fresh vegetables on a wooden table"
          width={2000}
          height={1116}
          fetchPriority="high"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-qazan-dark"></div>
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10">
        <p className="text-white text-shadow-strong text-base md:text-lg uppercase tracking-[0.4em] mb-6 animate-pulse">
          {t.hero.subtitle}
        </p>
        <h1 className="text-6xl md:text-9xl font-serif font-medium text-white mb-8 overflow-visible">
          <span className="block leading-none">{t.hero.title_main}</span>
          <span className="block italic text-transparent bg-clip-text bg-linear-to-r from-[#ff1500] to-[#ffd000b9] leading-normal pt-1">
            {t.hero.title_sub}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-100 font-light text-base md:text-xl leading-relaxed mix-blend-screen px-4">
          {t.hero.desc}
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={40} />
      </motion.div>
    </header>
  );
};

export default HeroSection;
