import React from 'react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface RootsSectionProps {
  t: Translations;
}

const RootsSection: React.FC<RootsSectionProps> = ({ t }) => {
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <Reveal width="100%">
          <div className="lg:pr-12 text-center lg:text-left">
            <span className="text-qazan-ruby uppercase tracking-widest text-sm font-semibold block mb-6">{t.story_page.section1_tag}</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              {t.story_page.section1_title}
            </h2>
            <div className="h-[2px] w-24 bg-white/20 mb-10 mx-auto lg:mx-0"></div>
            <p className="text-gray-300 font-light leading-loose text-xl text-justify">
              {t.story_page.section1_text}
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <div className="relative group">
            <img
              src="/images/story.webp"
              alt="Musician playing by a campfire in the Altai steppe"
              loading="lazy"
              width={1200}
              height={650}
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-t-[10rem] rounded-b-4xl border border-white/10 transition-all duration-700 shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RootsSection;
