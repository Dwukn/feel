'use client'
// app/page.tsx
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import ContactSection from '@/components/Contact';

const LandingPage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} contactRef={contactRef} />
      <HeroSection />
      <AboutSection ref={aboutRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
};

export default LandingPage;
