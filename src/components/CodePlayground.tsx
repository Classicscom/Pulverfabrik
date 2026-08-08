import React, { useState, useEffect } from 'react';
import { Terminal, Play, RefreshCw, Copy, Check, Sparkles, Monitor, Smartphone, Layers, Code2 } from 'lucide-react';

interface CodePreset {
  id: string;
  name: string;
  category: string;
  html: string;
  css: string;
}

const CODE_PRESETS: CodePreset[] = [
  {
    id: 'glow-btn',
    name: 'Glow Button Skript',
    category: 'Buttons',
    html: `<button class="glow-btn">
  <span>Hover Me</span>
  <div class="glow-effect"></div>
</button>`,
    css: `.glow-btn {
  position: relative;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: #1e1b4b;
  border: 1px solid #6366f1;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.6);
  border-color: #818cf8;
}

.glow-effect {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, rgba(99,102,241,0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.glow-btn:hover .glow-effect {
  opacity: 1;
}`
  },
  {
    id: 'glass-card',
    name: 'Glassmorphism Card',
    category: 'Karten',
    html: `<div class="glass-box">
  <div class="icon-wrap">⚡</div>
  <h3>HTML5 & CSS3 Power</h3>
  <p>Maximale Performance durch sauberen Code ohne schwere Frameworks.</p>
  <a href="#" class="card-link">Mehr erfahren &rarr;</a>
</div>`,
    css: `.glass-box {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 24px;
  color: #ffffff;
  max-width: 320px;
  font-family: system-ui, sans-serif;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.icon-wrap {
  font-size: 28px;
  margin-bottom: 12px;
}

.glass-box h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
}

.glass-box p {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-link {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}`
  },
  {
    id: 'pulse-badge',
    name: 'Status Badge Skript',
    category: 'Badges',
    html: `<div class="status-badge">
  <span class="pulse-dot"></span>
  <span class="badge-text">SYSTEM ONLINE (HTML5)</span>
</div>`,
    css: `.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #10b981;
  font-family: monospace;
  font-weight: 600;
  font-size: 13px;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}`
  },
  {
    id: 'grid-layout',
    name: 'CSS Grid Produktraster',
    category: 'Layout',
    html: `<div class="grid-container">
  <div class="grid-item">HTML Skript #1</div>
  <div class="grid-item">CSS Animation #2</div>
  <div class="grid-item">Flexbox Layout #3</div>
</div>`,
    css: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  width: 100%;
}

.grid-item {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 16px;
  color: #f8fafc;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  transition: transform 0.2s;
}

.grid-item:hover {
  transform: translateY(-3px);
  border-color: #6366f1;
}`
  }
];

export const CodePlayground: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<CodePreset>(CODE_PRESETS[0]);
  const [htmlCode, setHtmlCode] = useState<string>(CODE_PRESETS[0].html);
  const [cssCode, setCssCode] = useState<string>(CODE_PRESETS[0].css);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setHtmlCode(selectedPreset.html);
    setCssCode(selectedPreset.css);
  }, [selectedPreset]);

  const handleReset = () => {
    setHtmlCode(selectedPreset.html);
    setCssCode(selectedPreset.css);
  };

  const copyFullScript = () => {
    const combined = `<!-- HTML SKRIPT -->\n${htmlCode}\n\n/* CSS STYLES */\n<style>\n${cssCode}\n</style>`;
    navigator.clipboard.writeText(combined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderedSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            margin: 0;
            padding: 30px;
            background-color: #0b0f19;
            color: #ffffff;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            box-sizing: border-box;
          }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  return (
    <section id="playground" className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interaktiver HTML/CSS Code-Editor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            HTML & CSS Skripte live im Browser testen
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Wählen Sie ein Skript-Beispiel aus oder bearbeiten Sie den HTML/CSS Code direkt im Editor und erleben Sie die Live-Vorschau in Echtzeit.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Vorlage wählen:
          </span>
          {CODE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPreset(preset)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                selectedPreset.id === preset.id
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Main Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Editor */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
            {/* Editor Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                    activeTab === 'html'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  HTML Code
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                    activeTab === 'css'
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  CSS Code
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Auf Vorlage zurücksetzen"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={copyFullScript}
                  className="px-3 py-1 rounded text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Code kopieren</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Inputs */}
            <div className="p-4 bg-slate-950 flex-1 min-h-[360px] flex flex-col">
              {activeTab === 'html' ? (
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-mono text-slate-500 mb-1">&lt;!-- HTML Strukturelement --&gt;</div>
                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    className="w-full flex-1 bg-transparent font-mono text-xs sm:text-sm text-indigo-200 resize-none focus:outline-none leading-relaxed"
                    spellCheck={false}
                  />
                </div>
              ) : (
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-mono text-slate-500 mb-1">/* CSS Stylesheet Rules */</div>
                  <textarea
                    value={cssCode}
                    onChange={(e) => setCssCode(e.target.value)}
                    className="w-full flex-1 bg-transparent font-mono text-xs sm:text-sm text-purple-200 resize-none focus:outline-none leading-relaxed"
                    spellCheck={false}
                  />
                </div>
              )}
            </div>

            <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
              <span>Bearbeiten Sie den Text oben – Live-Vorschau aktualisiert sich sofort</span>
              <span className="font-mono text-indigo-400">HTML5 + CSS3</span>
            </div>
          </div>

          {/* Right Column: Live Iframe Sandbox Preview */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
            {/* Preview Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span className="text-xs font-semibold text-white">Live Resultat / Output</span>
              </div>

              {/* Responsive Size Toggle */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`p-1 rounded transition-colors ${
                    previewMode === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop Ansicht"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-1 rounded transition-colors ${
                    previewMode === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile Ansicht"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sandbox Viewport */}
            <div className="flex-1 bg-slate-950 p-4 flex items-center justify-center min-h-[360px]">
              <div
                className={`w-full transition-all duration-300 rounded-xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950 flex items-center justify-center ${
                  previewMode === 'mobile' ? 'max-w-[320px] h-[360px]' : 'h-full min-h-[340px]'
                }`}
              >
                <iframe
                  title="HTML CSS Live Preview"
                  srcDoc={renderedSrcDoc}
                  className="w-full h-full border-0 bg-slate-950"
                  sandbox="allow-scripts"
                />
              </div>
            </div>

            {/* Output Footer */}
            <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Skript ohne Fehler gerendert
              </span>
              <span className="text-slate-500 font-mono">Clean DOM Execution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
