import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface StoryHeroProps {
  t: Translations;
  y1: MotionValue<number>;
}

const StoryHero: React.FC<StoryHeroProps> = ({ t, y1 }) => {
  return (
    <header className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] z-0 -top-[10%]">
        <img
          src="/images/story_main.webp"
          alt="Eagle hunter in traditional dress against mountains"
          width={1200}
          height={800}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-qazan-black"></div>
      </motion.div>

      <div className="relative z-10">
        <Reveal>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8">
            {t.story_page.hero_title}
          </h1>
          <p className="text-qazan-gold text-base md:text-xl uppercase tracking-[0.3em] font-light">
            {t.story_page.hero_subtitle}
          </p>
        </Reveal>
      </div>
    </header>
  );
};

export default StoryHero;
