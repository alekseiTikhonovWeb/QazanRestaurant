import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';
import SignatureSVG from './SignatureSVG';
import React, { useRef, useState, useEffect } from 'react';

interface TeamSectionProps {
  t: Translations;
}


const TeamSection: React.FC<TeamSectionProps> = ({ t }) => {

    const signatureRef = useRef<HTMLDivElement>(null);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const el = signatureRef.current;
        if (!el) return;
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // only trigger once
            }
          },
          { threshold: 0.5 }
        );
    
        observer.observe(el);
        return () => observer.disconnect();
      }, []);

  return (
    <section id="chef" className="py-32 px-6 bg-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] border border-qazan-gold/20"></div>
              <img
                src="/images/crew.webp"
                alt="The QAZAN team in the restaurant"
                loading="lazy"
                width={1600}
                height={1600}
                className="w-full h-[500px] md:h-[600px] object-cover rounded-[3rem]  transition-all duration-700 filter contrast-125"
              />
            </div>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal delay={0.2}>
            <h4 className="text-qazan-ruby uppercase tracking-widest text-sm mb-8 font-semibold">{t.chef.tag}</h4>
            <blockquote className="text-4xl md:text-6xl font-serif leading-tight mb-10 text-white relative">
              {t.chef.quote}
            </blockquote>
            <p className="font-sans text-gray-400 text-xl leading-relaxed mb-10">
              {t.chef.desc}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
              <div className="font-serif italic text-white/70 text-3xl shrink-0">{t.chef.name}</div>
              <div ref={signatureRef} className="flex-1 flex justify-center">
                <SignatureSVG
                  isVisible={isVisible}
                  className="h-30 md:h-36 w-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
