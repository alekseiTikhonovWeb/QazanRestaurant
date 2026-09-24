import React, { useState } from 'react';
import { MessageSquare, X, ChevronLeft, Calendar, Bike, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Translations } from '../types';
import { CONTACT, LINKS } from '../constants';

interface ChatBotProps {
  t: Translations['chatbot'];
}

type ChatView = 'main' | 'order' | 'faq' | 'contact';

const ChatBot: React.FC<ChatBotProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ChatView>('main');
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setView('main'), 300);
  };

  const scrollToReservation = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      const elem = document.getElementById('reservation');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const elem = document.getElementById('reservation');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const faqItems = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
  ];

  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const viewVariants = {
      enter: { x: 50, opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-60 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-[350px] bg-qazan-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '600px', height: 'auto' }}
          >
            {/* Header */}
            <div className="bg-linear-to-r from-qazan-ruby to-rose-900 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                 {view !== 'main' && (
                     <button onClick={() => setView('main')} aria-label={t.back} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                         <ChevronLeft size={20} />
                     </button>
                 )}
                 <h3 className="font-serif font-bold tracking-wider">{t.concierge}</h3>
              </div>
              <button onClick={handleClose} aria-label="Close chat" className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[450px]">
                <AnimatePresence mode="wait">

                    {/* Main Menu View */}
                    {view === 'main' && (
                        <motion.div
                            key="main"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                            {/* Bot Message */}
                            <div className="flex gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-qazan-gold flex items-center justify-center text-black font-serif font-bold shrink-0">
                                    Q
                                </div>
                                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed">
                                    {t.greeting}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <button onClick={scrollToReservation} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Calendar size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_book}</span>
                                </button>

                                <button onClick={() => setView('order')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Bike size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_order}</span>
                                </button>

                                <button onClick={() => setView('faq')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><HelpCircle size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_faq}</span>
                                </button>

                                <button onClick={() => setView('contact')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Phone size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_contact}</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Order View */}
                    {view === 'order' && (
                        <motion.div
                            key="order"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                             <div className="mb-4 text-sm text-gray-400">{t.order_title}</div>
                             <div className="space-y-3">
                                <a href={LINKS.wolt} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-[#009de0]/10 border border-[#009de0]/30 hover:bg-[#009de0]/20 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <Bike size={20} className="text-[#009de0]" />
                                        <span className="text-white font-medium">Wolt</span>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white" />
                                </a>
                             </div>
                        </motion.div>
                    )}

                    {/* FAQ View */}
                    {view === 'faq' && (
                        <motion.div
                            key="faq"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                            <div className="text-sm text-qazan-gold mb-2 font-serif">{t.faq_title}</div>

                            {faqItems.map((item, i) => (
                                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <p className="text-white text-sm font-medium mb-2">{item.q}</p>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Contact View */}
                    {view === 'contact' && (
                        <motion.div
                            key="contact"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                           <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                               <p className="text-qazan-gold font-serif text-lg mb-1">QAZAN Helsinki</p>
                               <p className="text-gray-300 text-sm mb-4">{CONTACT.street}, {CONTACT.city}</p>
                               <a href={`tel:${CONTACT.phone}`} className="block bg-white/10 py-3 rounded-lg text-white text-sm font-bold mb-3 hover:bg-qazan-ruby transition-colors">{CONTACT.phoneDisplay}</a>
                               <a href={`mailto:${CONTACT.email}`} className="block text-gray-400 text-sm hover:text-white underline">{CONTACT.email}</a>
                           </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            {/* Footer / Branding */}
            <div className="p-3 bg-black/40 text-center border-t border-white/5">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.guest_service}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={isOpen ? handleClose : handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-qazan-ruby text-white'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
