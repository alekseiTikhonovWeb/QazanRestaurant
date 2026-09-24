import React from 'react';
import { Instagram, Bike } from 'lucide-react';
import { Translations } from '../types';
import { CONTACT, LINKS, OPENING_HOURS } from '../constants';

// lucide-react has no TikTok glyph, so it is drawn here.
const TikTokIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterProps {
  t: Translations['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#020202] text-white/50 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo_qazan.svg" alt="QAZAN" width={120} height={32} loading="lazy" className="h-8 mb-8 w-auto brightness-0 invert opacity-90" />
          <p className="text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0 text-gray-300">{t.desc}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.contact}</h3>
          <address className="not-italic space-y-4 text-base font-light">
            <p className="text-gray-200">{CONTACT.street}</p>
            <p className="text-gray-400">{CONTACT.city}</p>
            <a href={`tel:${CONTACT.phone}`} className="text-qazan-ruby mt-2 hover:text-white transition-colors font-medium text-lg block">{CONTACT.phoneDisplay}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors block">{CONTACT.email}</a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.hours_title}</h3>
          <div className="text-base space-y-4 font-light">
            {OPENING_HOURS.map((row) => (
              <div key={row.days} className="flex justify-center md:justify-start gap-6">
                <span className="text-gray-400 text-left whitespace-nowrap">{t[row.days]}</span>
                <span className="text-white">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social and delivery */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.social}</h3>

          <div className="flex space-x-8 text-white mb-8">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-qazan-ruby transition-colors transform hover:scale-110 duration-300">
              <Instagram size={24} />
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-qazan-ruby transition-colors transform hover:scale-110 duration-300">
              <TikTokIcon size={24} />
            </a>
          </div>

          <div className="flex flex-col gap-4 text-base w-full">
            <a href={LINKS.wolt} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <Bike size={20} className="text-qazan-ruby group-hover:text-white" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Wolt</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-xs uppercase tracking-widest opacity-40 px-6 font-light">
        &copy; {new Date().getFullYear()} Qazan Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
