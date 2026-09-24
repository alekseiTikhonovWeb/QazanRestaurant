import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

interface NavLinkProps {
  to: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

// Defined outside Navbar so React keeps the same component identity across renders.
const NavLink = ({ to, label, active, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`transition-colors duration-300 font-serif uppercase tracking-[0.15em] text-sm md:text-xs lg:text-sm relative group ${active ? 'text-qazan-gold' : 'hover:text-qazan-ruby'}`}
  >
    {label}
    <span className={`absolute -bottom-2 left-0 w-full h-px bg-qazan-gold transform transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
  </Link>
);

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ─── Handle hash scrolling after navigation ────────────────────────
  // This handles the "Reserve" link which needs to:
  //   1. Navigate to / (home page)
  //   2. THEN scroll to #reservation
  //
  // Why is this needed? With BrowserRouter, <Link to="/#reservation">
  // doesn't automatically scroll to the element. React Router navigates
  // to "/" but ignores the hash. So we handle it manually:
  //   - If already on "/", just scroll to the element
  //   - If on another page, navigate to "/" and scroll after render
  const scrollToReservation = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      // Already on home page — just scroll
      const el = document.getElementById('reservation');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll after the page renders
      navigate('/');
      // setTimeout gives React time to render the home page before scrolling
      setTimeout(() => {
        const el = document.getElementById('reservation');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="flex justify-center w-full">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`
            glass-panel flex justify-between items-center px-8 py-5 transition-colors duration-300
            ${scrolled ? 'w-[95%] md:w-[90%] bg-black/80 backdrop-blur-xl border-white/10 rounded-full shadow-2xl' : 'w-[90%] md:w-auto bg-black/40 backdrop-blur-lg border-white/5 rounded-full'}
          `}>
            {/* Logo */}
            <Link to="/" className="text-3xl font-serif font-bold tracking-widest text-white mr-8 md:mr-12 hover:text-qazan-ruby transition-colors">
              <img src='/images/logo_qazan.svg' alt='qazan logo' width={120} height={24} className="h-6 my-2 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-white/90">
              <NavLink to="/" label={t.nav.home} active={location.pathname === '/'} onClick={closeMenu} />
              <NavLink to="/story" label={t.nav.history} active={location.pathname === '/story'} onClick={closeMenu} />
              <NavLink to="/menu" label={t.nav.menu} active={location.pathname === '/menu'} onClick={closeMenu} />
              {/* Reserve is a button: it scrolls to the section instead of changing the route */}
              <button
                onClick={scrollToReservation}
                className="transition-colors duration-300 font-serif uppercase tracking-[0.15em] text-sm md:text-xs lg:text-sm relative group hover:text-qazan-ruby"
              >
                {t.nav.book}
                <span className="absolute -bottom-2 left-0 w-full h-px bg-qazan-gold transform transition-transform duration-300 scale-x-0 group-hover:scale-x-50"></span>
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center ml-8 md:ml-12 gap-6">
              <div className="flex space-x-3 text-sm font-medium">
                <button
                  onClick={() => setLang('en')}
                  className={`transition-colors ${lang === 'en' ? 'text-qazan-gold' : 'text-white/60 hover:text-white'}`}
                >
                  EN
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setLang('fi')}
                  className={`transition-colors ${lang === 'fi' ? 'text-qazan-gold' : 'text-white/60 hover:text-white'}`}
                >
                  FI
                </button>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden text-white hover:text-qazan-ruby transition-colors z-50">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className={`text-4xl font-serif hover:text-qazan-ruby ${location.pathname === '/' ? 'text-qazan-gold' : 'text-white'}`}>{t.nav.home}</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)} className={`text-4xl font-serif hover:text-qazan-ruby ${location.pathname === '/menu' ? 'text-qazan-gold' : 'text-white'}`}>{t.nav.menu}</Link>
        <Link to="/story" onClick={() => setIsOpen(false)} className={`text-4xl font-serif hover:text-qazan-ruby ${location.pathname === '/story' ? 'text-qazan-gold' : 'text-white'}`}>{t.nav.history}</Link>
        <div className="flex flex-col items-center gap-6 pt-8">
           {/* ─── Mobile reserve also uses the handler ─── */}
           <button onClick={scrollToReservation} className="text-2xl font-serif text-white/60 hover:text-white">{t.nav.book}</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;