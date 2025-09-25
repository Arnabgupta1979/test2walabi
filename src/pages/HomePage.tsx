import React from 'react';
import HeroSection from '../components/HeroSection';
import WhoWeHelpSection from '../components/WhoWeHelpSection';
import ServicesSection from '../components/ServicesSection';
import ResultsSection from '../components/ResultsSection';
import ResourcesSection from '../components/ResourcesSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <ResultsSection />
      <ResourcesSection />
      <AboutSection />
      <CTASection />
    </main>
  );
};

export default HomePage;