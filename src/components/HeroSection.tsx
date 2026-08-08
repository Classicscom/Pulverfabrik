import React from 'react';
import { COMPANY_INFO } from '../data/pulverfabrikData';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Ruler, 
  ShieldCheck,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onStartProject?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject }) => {
  return (
    <section className="relative pt-8 sm:pt-10 md:pt-12 pb-16 md:pb-24 bg-zinc-950 text-white border-b border-zinc-800 overflow-hidden">
      
      {/* Subtle Background Pattern & Silver Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-slate-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Location & Cookie Badge */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-slate-300" />
            Neuer Standort Niedernberg
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-700/80 text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            Boschstraße 3a, {COMPANY_INFO.address.zip} Niedernberg
          </span>

          <div className="cookie-free-badge">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>100% Cookie-frei</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Headline & Action Navigation Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
                Pulver<br className="hidden sm:inline" />beschichtung
                <span className="block text-chrome font-black text-3xl sm:text-5xl lg:text-6xl mt-1 tracking-tight">
                  & Sandstrahlen
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl pt-1">
                Ihr Fachbetrieb in Niedernberg (GF: <strong className="text-white font-semibold">{COMPANY_INFO.ceo}</strong>).
                Industriebeschichtung, Einzelteile & mobiles Sandstrahlen vor Ort.
              </p>
            </div>

            {/* Direct Navigation Buttons in Hero */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-extrabold text-sm btn-chrome uppercase tracking-wider shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span>Leistungen</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </a>

              <a
                href="#kontakt"
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-700 hover:border-slate-400 transition-all uppercase tracking-wider shadow-xs"
              >
                <span>Anfrage senden</span>
              </a>

              <a
                href="#ueber-uns"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-zinc-900/90 text-zinc-300 border border-zinc-700/80 hover:text-white hover:bg-zinc-800 transition-all uppercase tracking-wider"
              >
                <span>Über uns</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-slate-300" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Clean Key Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300" />
                Großteile & Serienteile
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300" />
                Mobiles Strahlen (Holz/Metall)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300" />
                Schnelle Bearbeitung
              </span>
            </div>

          </div>

          {/* Right Column: Prominent Kabine / Oven Specs Card */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-700/80 shadow-2xl space-y-5 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold btn-chrome uppercase tracking-widest shadow-md">
                  XXL Kapazität
                </span>
              </div>
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md icon-box-chrome flex items-center justify-center">
                    <Ruler className="w-3.5 h-3.5 text-slate-200" />
                  </div>
                  Großraumkabine & Ofen
                </span>
                <span className="text-[11px] font-semibold text-zinc-300 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                  Max. Maße
                </span>
              </div>

              {/* 4 Dimension Highlights */}
              <div className="grid grid-cols-2 gap-2.5 text-center">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block mb-0.5">
                    Länge
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-chrome">6,0 m</span>
                  <span className="text-[10px] text-zinc-500 block">6.000 mm</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block mb-0.5">
                    Breite
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-chrome">3,0 m</span>
                  <span className="text-[10px] text-zinc-500 block">3.000 mm</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block mb-0.5">
                    Höhe
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-chrome">3,5 m</span>
                  <span className="text-[10px] text-zinc-500 block">3.500 mm</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block mb-0.5">
                    Gewicht
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-chrome">2,5 t</span>
                  <span className="text-[10px] text-zinc-500 block">2.500 kg</span>
                </div>
              </div>

              {/* Short Note */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>Boschstraße 3a, Niedernberg</span>
                <a
                  href="#kapazitaet"
                  className="font-bold text-slate-200 hover:text-white hover:underline flex items-center gap-1"
                >
                  <span>Maße Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
