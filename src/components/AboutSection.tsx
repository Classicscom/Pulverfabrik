import React from 'react';
import { COMPANY_INFO, ADVANTAGES } from '../data/pulverfabrikData';
import { MapPin, ShieldCheck, CheckCircle2, Award, Info } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-12 md:py-16 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5 text-slate-300" />
              Über die Pulverfabrik
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Präzision <span className="text-chrome">& Leidenschaft</span> für Oberflächen
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Die <strong className="text-white">Pulverfabrik</strong> steht für erstklassige Beschichtungslösungen im Großraum Niedernberg, Aschaffenburg und Miltenberg. Unter der Leitung von Geschäftsführer <strong className="text-white">{COMPANY_INFO.ceo}</strong> kombinieren wir handwerkliche Sorgfalt mit modernster Anlagentechnik.
            </p>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Neuer Standort: <strong className="text-white">Boschstraße 3a in 63843 Niedernberg</strong>. Wir bearbeiten Bauteile bis zu <strong className="text-white">6,0 m Länge und 2,5 Tonnen Gewicht</strong>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 grid grid-cols-2 gap-3 text-xs font-bold text-zinc-200 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg icon-box-chrome flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-slate-200" />
                </div>
                <span>GF: {COMPANY_INFO.ceo}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg icon-box-chrome flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-slate-200" />
                </div>
                <span>Niedernberg</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-700/80 p-6 space-y-4 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Unser 3-Stufen Qualitäts-Prozess
                </span>
                <div className="cookie-free-badge">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Cookie-frei</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <strong className="text-slate-100 block mb-0.5 text-xs uppercase font-extrabold flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded icon-box-chrome text-[10px] flex items-center justify-center text-slate-200">1</span>
                    Gründliche Vorbehandlung
                  </strong>
                  Sandstrahlen oder Entlacken entfernt Rost, Altlack und Verunreinigungen vollständig.
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <strong className="text-slate-100 block mb-0.5 text-xs uppercase font-extrabold flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded icon-box-chrome text-[10px] flex items-center justify-center text-slate-200">2</span>
                    Präzise Abdeckung
                  </strong>
                  Gewinde, Passungen und Dichtflächen werden mit hitzebeständigen Spezialklebebändern geschützt.
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <strong className="text-slate-100 block mb-0.5 text-xs uppercase font-extrabold flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded icon-box-chrome text-[10px] flex items-center justify-center text-slate-200">3</span>
                    Beschichtung & Einbrennen
                  </strong>
                  Gleichmäßiges Auftragen hochwertiger Pulverlacke und Einbrennen im Großofen bei ~180–200°C.
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 space-y-2.5 hover:border-slate-500/80 transition-all shadow-md"
            >
              <div className="w-9 h-9 rounded-xl icon-box-chrome flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-slate-200" />
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase">
                {adv.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
