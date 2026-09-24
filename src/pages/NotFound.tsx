import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Translations } from '../types';

interface NotFoundProps {
  t: Translations['not_found'];
}

const NotFound: React.FC<NotFoundProps> = ({ t }) => {
  // A static host answers 200 for every path, so tell crawlers not to index this one.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
      <span className="text-qazan-ruby uppercase tracking-[0.3em] text-sm font-semibold mb-6">404</span>
      <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">{t.title}</h1>
      <p className="text-gray-400 text-lg font-light max-w-md mb-12">{t.text}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
      >
        <ArrowLeft size={16} />
        {t.back}
      </Link>
    </section>
  );
};

export default NotFound;
