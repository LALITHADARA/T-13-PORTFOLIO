import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import ClientLogos from './ClientLogos';
import WorkShowcase from './WorkShowcase';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Designer Portfolio | Creative Digital Experiences & Interaction Design</title>
        <meta name="description" content="Professional UI/UX designer portfolio showcasing creative digital experiences for Airbnb, Google, Microsoft & FedEx. Expert interaction design solutions for beautiful and joyful digital experiences." />
        <meta property="og:title" content="UI/UX Designer Portfolio | Creative Digital Experiences & Interaction Design" />
        <meta property="og:description" content="Professional UI/UX designer portfolio showcasing creative digital experiences for Airbnb, Google, Microsoft & FedEx. Expert interaction design solutions for beautiful and joyful digital experiences." />
      </Helmet>

      <main className="w-full bg-[linear-gradient(180deg,#010208_0%,#010101_50%,#010101_100%)] min-h-screen">
        <Header />
        <HeroSection />
        <ClientLogos />
        <WorkShowcase />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Portfolio;