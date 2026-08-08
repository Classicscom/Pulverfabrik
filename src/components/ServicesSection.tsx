import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/pulverfabrikData';
import { ServiceItem } from '../types';
import { Sparkles, Disc, Flame, Truck, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-200" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-slate-200" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-slate-200" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-slate-200" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-200" />;
    }
  };

  return (
    <section id="leistungen" className="py-12 md:py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            Unsere Kernkompetenzen
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Leistungen <span className="text-chrome">& Oberflächentechnik</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Industrieaufträge, Einzelstücke & mobiles Sandstrahlen vor Ort bei der <strong className="text-zinc-200">Pulverfabrik Niedernberg</strong>.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 flex flex-col justify-between relative bg-zinc-900/90 rounded-2xl border border-zinc-700/80 hover:border-slate-500/80 transition-all shadow-xl group"
            >
              {/* Top Badge */}
              {service.badge && (
                <div className="absolute top-5 right-5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold badge-chrome uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl icon-box-chrome flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  {service.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-white mb-2 uppercase group-hover:text-slate-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.fullDesc}
                </p>

                <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-slate-200" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <a
                  href="#kontakt"
                  onClick={() => onSelectService && onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-200 hover:text-white transition-colors group-hover:translate-x-0.5"
                >
                  <span className="underline decoration-slate-500 underline-offset-4">Anfrage zu dieser Leistung</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </a>

                <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                  {COMPANY_INFO.address.city}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
