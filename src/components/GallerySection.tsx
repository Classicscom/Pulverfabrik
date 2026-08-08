import React, { useState } from 'react';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/pulverfabrikData';
import { GalleryItem } from '../types';
import { Eye, X, Phone, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Arbeiten' },
    { id: 'felgen', label: 'Felgen & KFZ' },
    { id: 'mobiles-sandstrahlen', label: 'Mobiles Sandstrahlen (Holz/Metall)' },
    { id: 'industrie', label: 'Industrie & Serie' },
    { id: 'moebel', label: 'Metallbau & Möbel' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="galerie" className="py-12 md:py-16 bg-zinc-950 border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5 text-slate-300" />
            Einblick in unsere Praxis
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Galerie <span className="text-chrome">& Referenzprojekte</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Auszug aus unseren Arbeiten: Von Alufelgen über Industrieteile bis hin zu mobilen Strahlarbeiten vor Ort.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'btn-chrome uppercase shadow-md'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-zinc-900/90 rounded-2xl border border-zinc-700/80 overflow-hidden hover:border-slate-400/80 transition-all cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-zinc-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold badge-chrome uppercase tracking-wider shadow-md backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl btn-chrome font-black text-xs uppercase shadow-xl">
                      <Eye className="w-4 h-4 text-zinc-950" />
                      Großansicht
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="font-extrabold text-white text-base group-hover:text-slate-200 transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.details && (
                <div className="px-5 pb-4 pt-0">
                  <span className="inline-block text-[10px] font-semibold text-zinc-400 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md">
                    {item.details}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md p-4 flex items-center justify-center">
            <div className="bg-zinc-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-zinc-700 relative text-white">
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-zinc-950/80 text-white hover:bg-zinc-950 border border-zinc-700 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-64 sm:h-80 bg-zinc-950">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-xs font-bold badge-chrome uppercase">
                    {selectedImage.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold">
                    Standort Niedernberg
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase">
                  {selectedImage.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs btn-chrome uppercase"
                  >
                    <Phone className="w-4 h-4 text-zinc-950" />
                    Projekt anfragen
                  </a>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-950 text-zinc-300 hover:bg-zinc-800 border border-zinc-700"
                  >
                    Schließen
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
