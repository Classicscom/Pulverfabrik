import React, { useState } from 'react';
import { FAQS } from '../data/pulverfabrikData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-10 md:py-14 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            Häufige Fragen
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            Häufig gestellte Fragen
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Wissenswertes zu Standort Niedernberg, Verfahren und Auftragsabwicklung.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 font-bold text-white text-xs sm:text-sm flex items-center justify-between gap-3 hover:bg-zinc-800/80 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800">
                    <p className="pt-2.5">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
