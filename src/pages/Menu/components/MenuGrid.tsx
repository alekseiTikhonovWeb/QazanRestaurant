import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language, MenuItem, Translations } from '../../../types';
import MenuItemModal from './MenuItemModal';

interface MenuGridProps {
  t: Translations;
  lang: Language;
  activeCategory: string;
  filteredItems: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ t, lang, activeCategory, filteredItems }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div className="w-full">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid grid-cols-1 ${activeCategory === 'drinks' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-2'} gap-x-16 gap-y-24 justify-items-center`}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-xl group flex flex-col h-full cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2.5rem] h-[400px] mb-10 border border-white/5 bg-white/5 w-full shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={800}
                height={400}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/80 transition-all duration-500 text-sm uppercase tracking-[0.3em] font-semibold translate-y-4 group-hover:translate-y-0">
                  {t.menu_page.view_details}
                </span>
              </div>
            </div>

            {/* Food Details */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-6 gap-4">
                <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap">
                  <h4 className="text-4xl font-serif text-white group-hover:text-qazan-ruby transition-colors">{item.title}</h4>
                  {item.dietary?.map(tag => (
                    <span key={tag} className="border border-white/20 text-white/50 text-xs px-2 py-1 rounded uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-qazan-gold font-serif text-3xl">{item.price}</span>
              </div>
              <div className="w-16 h-px bg-white/10 mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-300 font-light text-xl leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center text-gray-500 py-24 text-xl">
          <p>{t.menu_page.no_items}</p>
        </div>
      )}

      {/* Modal */}
      <MenuItemModal
        t={t}
        lang={lang}
        item={selectedItem}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default MenuGrid;
