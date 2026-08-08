import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Menu, X, ArrowRight, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/pulverfabrikData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Max. Maße', href: '#kapazitaet' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Über uns', href: '#ueber-uns' },
    { name: 'Anfahrt', href: '#anfahrt' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-zinc-700/80 py-3 sm:py-3.5' 
        : 'bg-zinc-950 border-b border-zinc-700/60 py-4 sm:py-5'
    }`}>
      {/* Metallic highlight accent line at top of header */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40 pointer-events-none" />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group focus:outline-none" aria-label="Pulverfabrik Home">
            <Logo lightMode={false} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons Header */}
          <div className="hidden sm:flex items-center gap-2 md:gap-2.5">
            {/* Über uns Button */}
            <a
              href="#ueber-uns"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all hover:border-slate-500 shadow-xs"
              title="Über uns"
            >
              <Info className="w-3.5 h-3.5 text-slate-300" />
              <span>Über uns</span>
            </a>

            {/* Anfahrt Button */}
            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all hover:border-slate-500 shadow-xs"
              title="Google Maps Anfahrt"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-300" />
              <span>Anfahrt (Maps)</span>
            </a>

            {/* Main CTA Chrome Button */}
            <a
              href="#kontakt"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-lg text-xs font-extrabold btn-chrome uppercase tracking-wider"
            >
              <span>Anfrage</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="p-2.5 rounded-lg bg-zinc-900 text-white font-bold border border-zinc-700 focus:outline-none"
              aria-label="Telefon anrufen"
            >
              <Phone className="w-4 h-4 text-slate-200" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label="Hauptmenü öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-700 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 space-y-3">
            <div className="text-xs text-zinc-400 font-medium px-1">
              📍 Boschstraße 3a, 63843 Niedernberg
            </div>

            <div className="grid grid-cols-3 gap-2">
              <a
                href="#ueber-uns"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-zinc-900 text-zinc-200 font-bold text-xs border border-zinc-700"
              >
                <Info className="w-3.5 h-3.5 text-slate-300 mb-1" />
                Über uns
              </a>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-zinc-900 text-zinc-200 font-bold text-xs border border-zinc-700"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-300 mb-1" />
                Anfahrt
              </a>

              <a
                href="#kontakt"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="flex flex-col items-center justify-center py-2 px-2 rounded-lg btn-chrome font-black text-xs uppercase"
              >
                Anfrage
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
