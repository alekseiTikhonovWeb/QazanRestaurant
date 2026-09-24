import React, { useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Language, Translations } from '../../types';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuCarousel from './components/MenuCarousel';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import ReservationSection from './components/ReservationSection';

interface HomeProps {
  t: Translations;
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ t, lang }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const location = useLocation();

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-qazan-black w-full overflow-hidden">
      <HeroSection t={t} y1={y1} scale={scale} opacity={opacity} />
      <AboutSection t={t} />
      <MenuCarousel t={t} lang={lang} />
      <TeamSection t={t} />
      <ReviewsSection t={t} />
      <ReservationSection t={t} />
    </div>
  );
};

export default Home;
