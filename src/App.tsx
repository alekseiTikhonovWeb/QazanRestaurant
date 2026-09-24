import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

// Loaded only when the visitor navigates there.
const Menu = lazy(() => import('./pages/Menu'));
const Story = lazy(() => import('./pages/Story'));
const ChatBot = lazy(() => import('./components/ChatBot'));

const LANG_STORAGE_KEY = 'qazan-lang';

const isLanguage = (value: unknown): value is Language => value === 'en' || value === 'fi';

// Priority: `?lang=` in the URL (the hreflang links use it), then the visitor's
// last choice, then the browser language, then English.
const getInitialLanguage = (): Language => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); fall through.
  }
  return navigator.language.toLowerCase().startsWith('fi') ? 'fi' : 'en';
};

// Reset the scroll position when the route changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Remembering the language is a convenience, not a requirement.
    }
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-qazan-ruby selection:text-white min-h-screen flex flex-col relative">
        {/* Global ambient effects */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-pattern-overlay opacity-10"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-radial-gradient from-qazan-ruby/10 to-transparent blur-[120px] pointer-events-none z-0 animate-pulse duration-10000"></div>

        <Navbar lang={lang} setLang={setLang} t={t} />

        <main className="grow z-10">
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home t={t} lang={lang} />} />
              <Route path="/menu" element={<Menu t={t} lang={lang} />} />
              <Route path="/story" element={<Story t={t} />} />
              <Route path="*" element={<NotFound t={t.not_found} />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <ChatBot t={t.chatbot} />
        </Suspense>

        <Footer t={t.footer} />
      </div>
    </Router>
  );
};

export default App;
