import React, { useState } from 'react';
import { PRICING_OPTIONS } from '../data/websiteData';
import { PricingOption } from '../types';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPackage: (summary: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPackage }) => {
  const baseOptions = PRICING_OPTIONS.filter((o) => o.category === 'base');
  const featureOptions = PRICING_OPTIONS.filter((o) => o.category === 'feature');

  const [selectedBase, setSelectedBase] = useState<PricingOption>(baseOptions[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['feat-seo', 'feat-anim']);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculateTotal = () => {
    let total = selectedBase.price;
    let days = selectedBase.days;

    selectedFeatures.forEach((featId) => {
      const feat = PRICING_OPTIONS.find((o) => o.id === featId);
      if (feat) {
        total += feat.price;
        days += feat.days;
      }
    });

    return { total, days };
  };

  const { total, days } = calculateTotal();

  const handleRequestPackage = () => {
    const selectedFeatureNames = selectedFeatures
      .map((id) => PRICING_OPTIONS.find((o) => o.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summaryText = `Gewähltes Paket: ${selectedBase.name} + Zusatzleistungen: [${selectedFeatureNames || 'Keine'}] (Geschätzter Gesamtpreis: ${total} €, Dauer: ca. ${days} Werktage)`;

    onSelectPackage(summaryText);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            <span>Transparente Kosten-Kalkulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Interaktiver Website-Preiskalkulator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Wählen Sie den Website-Typ und gewünschte Zusatz-Funktionen. Erhalten Sie sofort eine unverbindliche Aufwandsschätzung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Selection Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Base Type */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">1</span>
                Basis-Paket wählen
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {baseOptions.map((opt) => {
                  const isSelected = selectedBase.id === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedBase(opt)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg'
                          : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white font-heading">{opt.name}</h4>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 mb-4">{opt.description}</p>
                      <div className="text-xl font-extrabold text-indigo-400 font-heading">
                        ab {opt.price} € <span className="text-xs text-slate-400 font-normal">({opt.days} Tage)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Features Checkboxes */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-heading">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">2</span>
                Gewünschte Zusatzfunktionen & HTML/CSS Skripte
              </h3>

              <div className="space-y-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-slate-800/90 border-indigo-500/80 shadow-md'
                          : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{feat.name}</div>
                          <div className="text-xs text-slate-400">{feat.description}</div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold text-indigo-300 text-sm">+{feat.price} €</div>
                        <div className="text-[10px] text-slate-400">+{feat.days} Tag</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 font-heading border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Kalkulation Übersicht</span>
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </h3>

              {/* Selected List */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-300 font-medium">{selectedBase.name}</span>
                  <span className="font-mono font-bold text-white">{selectedBase.price} €</span>
                </div>

                {selectedFeatures.map((id) => {
                  const f = PRICING_OPTIONS.find((o) => o.id === id);
                  if (!f) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-xs text-slate-400 py-1 border-t border-slate-900">
                      <span>+ {f.name}</span>
                      <span className="font-mono text-slate-300">+{f.price} €</span>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    Geschätzte Dauer:
                  </span>
                  <span className="font-semibold text-slate-200">ca. {days} Werktage</span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                  <span className="text-sm font-bold text-slate-300">Gesamtpreis netto:</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-white font-heading">{total} €</span>
                    <div className="text-[10px] text-slate-500">zzgl. MwSt.</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRequestPackage}
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Dieses Paket anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Festpreisgarantie & Quellcode Übergabe</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
