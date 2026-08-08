import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapacitySection } from './components/CapacitySection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ServiceItem } from './types';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [presetMessage, setPresetMessage] = useState('');

  const handleStartProject = () => {
    setPresetMessage('Hallo Herr Mazzeo, ich würde gerne eine unverbindliche Anfrage für Pulverbeschichtung / Sandstrahlen stellen.');
    setContactModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setPresetMessage(`Hallo Herr Mazzeo, ich habe eine Anfrage zur Leistung: "${service.title}" (${service.subtitle}).`);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-zinc-950">
      
      {/* Top Navbar */}
      <Navbar onOpenContact={handleStartProject} />

      {/* Main Content Flow */}
      <main id="main-content">
        
        {/* Hero Section */}
        <HeroSection onStartProject={handleStartProject} />

        {/* Max Dimensions & Capacity Section */}
        <CapacitySection />

        {/* Services Overview */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Gallery & Showcase */}
        <GallerySection />

        {/* About Us & Leadership */}
        <AboutSection />

        {/* Location & Directions */}
        <LocationSection />

        {/* Contact Form */}
        <ContactForm initialMessage={presetMessage} />

        {/* FAQ Accordion */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileActionBar />

      {/* Popup Contact Modal */}
      {contactModalOpen && (
        <ContactForm
          initialMessage={presetMessage}
          isOpenModal={true}
          onCloseModal={() => setContactModalOpen(false)}
        />
      )}

    </div>
  );
}
