import React from 'react';
import { Compass, Heart, Award } from 'lucide-react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface ValuesSectionProps {
  t: Translations;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ t }) => {
  return (
    <section className="py-32 bg-qazan-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-qazan-ruby/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-serif text-white">{t.story_page.values_title}</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          <Reveal delay={0} fullHeight>
            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Compass size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value1_title}</h3>
              <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value1_desc}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} fullHeight>
            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Heart size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value2_title}</h3>
              <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value2_desc}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} fullHeight>
            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Award size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value3_title}</h3>
              <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value3_desc}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;