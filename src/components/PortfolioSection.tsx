import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/websiteData';
import { PortfolioItem } from '../types';
import { ExternalLink, Tag, Sparkles, Eye, X } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Referenzen & Beispiele</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Ausgewählte Projekte & Web-Design
            </h2>
            <p className="mt-2 text-slate-300 max-w-xl text-base">
              Ein Einblick in moderne Websites, HTML5 Landingpages und responsive Web-Anwendungen.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['all', 'Landingpage', 'E-Commerce', 'Web-App', 'Design-System'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'Alle Projekte' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-indigo-500/40 transition-all flex flex-col shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Metrics Pill if exists */}
                {project.metrics && (
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span>{project.metrics.label}:</span>
                    <span className="font-bold text-white">{project.metrics.value}</span>
                  </div>
                )}

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold text-xs rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Details ansehen</span>
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-800 text-slate-300 rounded-md border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for detail view */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-950/80 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6">
              <div className="inline-block px-2.5 py-1 bg-indigo-950 text-indigo-300 text-xs font-semibold rounded mb-2 border border-indigo-800">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">{selectedProject.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-medium">Technologien:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-indigo-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
