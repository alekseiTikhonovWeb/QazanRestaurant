import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface MenuHeaderProps {
  t: Translations;
  categories: readonly string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ t, categories, activeCategory, setActiveCategory }) => {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <Reveal width="100%">
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8">{t.menu_page.title}</h1>
          <p className="text-qazan-ruby text-sm font-sans uppercase tracking-[0.3em] font-bold">{t.menu_page.subtitle}</p>
        </Reveal>
      </div>

      {/* Clean Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-24 border-b border-white/10 pb-6 w-full max-w-5xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase tracking-widest text-sm md:text-base font-bold transition-all duration-300 pb-2 relative ${activeCategory === cat ? 'text-qazan-gold scale-105' : 'text-gray-400 hover:text-white'}`}
          >
            {cat === 'all' ? t.menu_page.all_category : t.nav[cat as keyof typeof t.nav]}
            {activeCategory === cat && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 w-full h-[3px] bg-qazan-gold"
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default MenuHeader;
