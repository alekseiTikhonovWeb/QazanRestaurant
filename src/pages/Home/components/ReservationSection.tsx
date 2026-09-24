import React from 'react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';
import { LINKS } from '../../../constants';

interface ReservationSectionProps {
  t: Translations;
}

// Reservations are handled by Tebi; the button opens its booking page in a new tab.
const ReservationSection: React.FC<ReservationSectionProps> = ({ t }) => {
  return (
    <section
      id="reservation"
      className="py-32 relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-qazan-ruby/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="glass-panel p-10 md:p-20 rounded-[4rem] border border-white/10 text-center bg-black/60 backdrop-blur-xl shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white">
              {t.reservation.title}
            </h2>
            <p className="text-qazan-ruby text-sm md:text-base uppercase tracking-widest mb-16 font-semibold">
              {t.reservation.subtitle}
            </p>

            <div className="text-center">
              <a
                href={LINKS.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-qazan-gold hover:bg-white text-black w-full md:w-auto px-10 md:px-16 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-qazan-gold/50 max-w-full"
              >
                {t.reservation.btn_submit}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ReservationSection;
