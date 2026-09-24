import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface AboutSectionProps {
  t: Translations;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImgY = useTransform(aboutScrollY, [0, 1], ["5%", "-5%"]);
  const aboutTextY = useTransform(aboutScrollY, [0, 1], ["20%", "-20%"]);

  return (
    <section id="about" ref={aboutRef} className="py-16 md:py-32 px-6 relative max-w-7xl mx-auto overflow-visible mb-10 md:mb-20">

      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Images - Parallaxed */}
        <div className="lg:col-span-7 relative order-2 lg:order-1 perspective-1000">
          <motion.div style={{ y: aboutImgY }} className="relative z-10">
            <Reveal delay={0.2} width="100%">
              <div className="relative group">
                {/* Main Image */}
                <div className="overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl relative">
                  <img
                    src="/images/qazan_photo.webp"
                    alt="QAZAN restaurant entrance and dining room in Itäkeskus, Helsinki"
                    loading="lazy"
                    width={1600}
                    height={1194}
                    className="w-full h-[400px] md:h-[600px] object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* Repeating Text - "COOL" element */}
                <div className="absolute -left-6 md:-left-10 top-1/4 -rotate-90 origin-center text-white/10 text-6xl md:text-8xl font-serif whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
                  HERITAGE FLAVORS
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Text - Parallaxed Inverse */}
        <div className="lg:col-span-5 order-1 lg:order-2 z-20">
          <motion.div style={{ y: aboutTextY }}>
            <Reveal>
              <div className="glass-panel p-10 md:p-14 rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-md shadow-2xl relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-qazan-ruby/20 rounded-full blur-[80px]"></div>

                <span className="text-qazan-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block border-l-2 border-qazan-gold pl-4">
                  {t.about.tag}
                </span>

                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
                  {t.about.title_main} <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">{t.about.title_sub}</span> <br />
                  <span className="italic text-qazan-ruby font-medium">{t.about.title_end}</span>
                </h2>

                <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">
                  {t.about.p1}
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <Link to="/story" className="text-white hover:text-qazan-gold transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2 group">
                    {t.about.read_more}
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
