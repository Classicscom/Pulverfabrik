import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/pulverfabrikData';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-10 pb-20 md:pb-10 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-zinc-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-3">
            <Logo lightMode={false} />

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Ihr Fachbetrieb für Pulverbeschichtung, Sandstrahlen, Entlackung und mobiles Sandstrahlen vor Ort in Niedernberg.
            </p>

            <div className="cookie-free-badge">
              <ShieldCheck className="w-3 h-3 text-zinc-400" />
              <span>100% Cookie-frei & DSGVO-konform</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
              </li>
              <li>
                <a href="#kapazitaet" className="hover:text-white transition-colors">Bauteilgrößen (6x3x3,5m)</a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-white transition-colors">Galerie & Referenzen</a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-white transition-colors">Über uns ({COMPANY_INFO.ceo})</a>
              </li>
              <li>
                <a href="#anfahrt" className="hover:text-white transition-colors">Standort Niedernberg</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Standort & Kontakt
            </h4>

            <div className="text-xs space-y-1.5 text-zinc-300">
              <p className="font-bold text-white">
                {COMPANY_INFO.fullName}
              </p>

              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="font-bold text-white hover:underline">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:underline text-zinc-300">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 pt-0.5">
                Geschäftsführer: <strong>{COMPANY_INFO.ceo}</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.</p>

          <div className="flex items-center gap-3">
            <a href="#anfahrt" className="hover:text-white transition-colors">Impressum & Datenschutz</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all border border-zinc-800"
              title="Nach oben"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
