import React, { useState } from 'react';
import { Ruler, Maximize2, ArrowUp, Weight, Building2, Layers } from 'lucide-react';

export const CapacitySection: React.FC = () => {
  const [unitMode, setUnitMode] = useState<'m' | 'mm' | 'cm'>('m');

  const formatDimension = (valMm: number) => {
    if (unitMode === 'mm') return `${valMm.toLocaleString('de-DE')} mm`;
    if (unitMode === 'cm') return `${(valMm / 10).toLocaleString('de-DE')} cm`;
    return `${(valMm / 1000).toLocaleString('de-DE', { minimumFractionDigits: 1 })} m`;
  };

  return (
    <section id="kapazitaet" className="py-12 md:py-16 bg-zinc-950 border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase">
            <Building2 className="w-3.5 h-3.5 text-slate-300" />
            Neuer Standort Niedernberg
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Ofen & Kabine: <span className="text-chrome">Maximale Bauteilgrößen</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Boschstraße 3a, 63843 Niedernberg. Wir bearbeiten Großteile & Sondergrößen.
          </p>

          {/* Unit Toggle Buttons */}
          <div className="pt-2 flex items-center justify-center gap-1.5">
            <span className="text-xs text-zinc-400 font-semibold mr-1 uppercase">Einheit:</span>
            <button
              onClick={() => setUnitMode('m')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                unitMode === 'm' ? 'btn-chrome uppercase' : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-700'
              }`}
            >
              Meter (m)
            </button>
            <button
              onClick={() => setUnitMode('mm')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                unitMode === 'mm' ? 'btn-chrome uppercase' : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-700'
              }`}
            >
              mm
            </button>
            <button
              onClick={() => setUnitMode('cm')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                unitMode === 'cm' ? 'btn-chrome uppercase' : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-700'
              }`}
            >
              cm
            </button>
          </div>
        </div>

        {/* 4 Capacity Spec Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          {/* Card 1: Length */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-center sm:text-left hover:border-slate-500/80 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-xl icon-box-chrome flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <Ruler className="w-5 h-5 text-slate-200" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
              Max. Länge
            </span>
            <div className="text-3xl font-black text-chrome">
              {formatDimension(6000)}
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Zäune, Geländer, Träger & Profile.
            </p>
          </div>

          {/* Card 2: Width */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-center sm:text-left hover:border-slate-500/80 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-xl icon-box-chrome flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <Maximize2 className="w-5 h-5 text-slate-200" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
              Max. Breite
            </span>
            <div className="text-3xl font-black text-chrome">
              {formatDimension(3000)}
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Schweißbaugruppen & Rahmengestelle.
            </p>
          </div>

          {/* Card 3: Height */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-center sm:text-left hover:border-slate-500/80 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-xl icon-box-chrome flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <ArrowUp className="w-5 h-5 text-slate-200" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
              Max. Höhe
            </span>
            <div className="text-3xl font-black text-chrome">
              {formatDimension(3500)}
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Große Gehäuse & Tore.
            </p>
          </div>

          {/* Card 4: Weight */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-center sm:text-left hover:border-slate-500/80 transition-all shadow-lg">
            <div className="w-10 h-10 rounded-xl icon-box-chrome flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <Weight className="w-5 h-5 text-slate-200" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
              Max. Gewicht
            </span>
            <div className="text-3xl font-black text-chrome">
              2,5 Tonnen
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Schwere Industriebauteile & Stahl.
            </p>
          </div>

        </div>

        {/* Compact Summary Banner */}
        <div className="p-5 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-zinc-700/80 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl icon-box-chrome flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-white">Einbrennofen Niedernberg</div>
              <p className="text-xs text-zinc-400">Gleichmäßige Temperaturverteilung & Aushärtung über volle 6 Meter</p>
            </div>
          </div>

          <a
            href="#kontakt"
            className="px-5 py-2.5 rounded-xl text-xs font-black btn-chrome uppercase whitespace-nowrap"
          >
            Machbarkeit anfragen
          </a>
        </div>

      </div>
    </section>
  );
};
