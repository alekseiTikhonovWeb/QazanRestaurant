import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, MenuItem, Translations } from '../../../types';
import { TEA_VARIANTS, SODA_VARIANTS, DISH_DETAILS } from '../../../constants';

interface MenuItemModalProps {
  t: Translations;
  lang: Language;
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const isTeaItem = (item: MenuItem | null): boolean => {
  return item?.id === 'dr1';
};

const isSodaItem = (item: MenuItem | null): boolean => {
  return item?.id === 'dr2';
};

const MenuItemModal: React.FC<MenuItemModalProps> = ({ t, lang, item, isOpen, onClose }) => {
  const [teaIndex, setTeaIndex] = useState(0);
  const [sodaIndex, setSodaIndex] = useState(0);

  const teaVariants = TEA_VARIANTS[lang];
  const sodaVariants = SODA_VARIANTS[lang];
  const dishDetails = DISH_DETAILS[lang];

  // Reset the variant carousels on close so the next item opens on its first variant.
  const handleClose = useCallback(() => {
    setTeaIndex(0);
    setSodaIndex(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (isTeaItem(item)) {
        if (e.key === 'ArrowRight') setTeaIndex(prev => (prev + 1) % teaVariants.length);
        if (e.key === 'ArrowLeft') setTeaIndex(prev => (prev - 1 + teaVariants.length) % teaVariants.length);
      }
      if (isSodaItem(item)) {
        if (e.key === 'ArrowRight') setSodaIndex(prev => (prev + 1) % sodaVariants.length);
        if (e.key === 'ArrowLeft') setSodaIndex(prev => (prev - 1 + sodaVariants.length) % sodaVariants.length);
      }
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, item, handleClose, teaVariants.length, sodaVariants.length]);

  const details = item && !isTeaItem(item) && !isSodaItem(item) ? dishDetails[item.id] : null;
  const tea = isTeaItem(item) ? teaVariants[teaIndex] : null;
  const soda = isSodaItem(item) ? sodaVariants[sodaIndex] : null;

  const nextTea = () => setTeaIndex(prev => (prev + 1) % teaVariants.length);
  const prevTea = () => setTeaIndex(prev => (prev - 1 + teaVariants.length) % teaVariants.length);

  const nextSoda = () => setSodaIndex(prev => (prev + 1) % sodaVariants.length);
  const prevSoda = () => setSodaIndex(prev => (prev - 1 + sodaVariants.length) % sodaVariants.length);

  // Unified display — tea or soda variant takes priority over base item
  const variant = tea || soda;
  const displayImage = variant ? variant.image : item?.image || '';
  const displayTitle = variant ? variant.name : item?.title || '';
  const displayDesc = variant ? variant.description : item?.description || '';
  const displayIngredients = variant ? variant.ingredients : details?.ingredients || '';
  const displayTaste = variant ? variant.taste : details?.taste || '';
  const displayNote = variant ? variant.note : details?.pair || '';

  return createPortal(
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal wrapper */}
          <motion.div
            className="relative z-10 w-[95vw] max-w-4xl max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute -top-[-10px] -right-[-10px] z-30 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-lg"
            >
              <X size={18} />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto rounded-4xl border border-white/10 bg-qazan-black shadow-2xl">

            {/* Image Section */}
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-t-4xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={displayImage}
                  src={displayImage}
                  alt={displayTitle}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-qazan-black via-transparent to-transparent z-10" />

              {/* Price badge */}
              <motion.div
                className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-qazan-gold font-serif text-2xl">{variant ? variant.price : item.price}</span>
              </motion.div>

              {/* Dietary tags */}
              {item.dietary && item.dietary.length > 0 && !tea && !soda && (
                <motion.div
                  className="absolute bottom-6 left-6 z-20 flex gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  {item.dietary.map(tag => (
                    <span key={tag} className="bg-white/10 backdrop-blur-md border border-white/20 text-white/70 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* Tea Navigation Arrows */}
              {tea && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevTea(); }}
                    aria-label="Previous tea"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 active:scale-90"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextTea(); }}
                    aria-label="Next tea"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 active:scale-90"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Soda Navigation Arrows */}
              {soda && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSoda(); }}
                    aria-label="Previous soda"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 active:scale-90"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSoda(); }}
                    aria-label="Next soda"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 active:scale-90"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Tea Variant Dots */}
            {tea && (
              <div className="flex justify-center gap-3 pt-5 pb-1">
                {teaVariants.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTeaIndex(i)}
                    aria-label={`Tea variant ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === teaIndex
                        ? 'bg-qazan-gold w-6'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Soda Variant Dots */}
            {soda && (
              <div className="flex justify-center gap-3 pt-5 pb-1">
                {sodaVariants.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSodaIndex(i)}
                    aria-label={`Soda variant ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === sodaIndex
                        ? 'bg-qazan-gold w-6'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Content Section */}
            <div className="px-8 md:px-12 pb-10 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayTitle}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Tea label */}
                  {tea && (
                    <span className="text-qazan-ruby uppercase tracking-widest text-xs font-semibold block mb-3">
                      {t.modal.tea_collection} · {teaIndex + 1} {t.modal.of} {teaVariants.length}
                    </span>
                  )}

                  {/* Soda label */}
                  {soda && (
                    <span className="text-qazan-ruby uppercase tracking-widest text-xs font-semibold block mb-3">
                      {t.modal.soda_collection} · {sodaIndex + 1} {t.modal.of} {sodaVariants.length}
                    </span>
                  )}

                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                    {displayTitle}
                  </h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                    {displayDesc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Divider */}
              <motion.div
                className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />

              {/* Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayTitle + '-details'}
                  className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-white/5 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <div className="p-7 md:border-r border-b md:border-b-0 border-white/5 group hover:bg-white/2 transition-colors duration-500">
                    <span className="font-serif italic text-qazan-gold text-base mb-3 block">{t.modal.whats_in_it}</span>
                    <p className="text-gray-400 text-[15px] leading-relaxed">{displayIngredients}</p>
                  </div>

                  <div className="p-7 md:border-r border-b md:border-b-0 border-white/5 group hover:bg-white/2 transition-colors duration-500">
                    <span className="font-serif italic text-qazan-gold text-base mb-3 block">{t.modal.how_it_tastes}</span>
                    <p className="text-gray-400 text-[15px] leading-relaxed">{displayTaste}</p>
                  </div>

                  <div className="p-7 group hover:bg-white/2 transition-colors duration-500">
                    <span className="font-serif italic text-qazan-gold text-base mb-3 block">{t.modal.good_to_know}</span>
                    <p className="text-gray-400 text-[15px] leading-relaxed">{displayNote}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MenuItemModal;
