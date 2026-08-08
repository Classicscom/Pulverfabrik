import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/pulverfabrikData';
import { Mail, Phone, Copy, Check, ShieldCheck, X, Send } from 'lucide-react';

interface ContactFormProps {
  initialMessage?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialMessage = '',
  isOpenModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partType: 'Felgen / KFZ-Teile',
    quantity: '1',
    dimensions: '',
    color: 'RAL Wunschfarbe (z.B. Schwarz Glanz)',
    message: initialMessage,
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const generateEmailBody = () => {
    return `Hallo Pulverfabrik-Team,

hiermit frage ich unverbindlich folgende Arbeiten an:

Name: ${formData.name || 'Nicht angegeben'}
E-Mail: ${formData.email || 'Nicht angegeben'}
Telefon: ${formData.phone || 'Nicht angegeben'}

Anfrage-Details:
----------------------------------
- Art der Teile: ${formData.partType}
- Stückzahl: ${formData.quantity}
- Ca. Maße / Gewicht: ${formData.dimensions || 'Standardmaß'}
- Wunsch-Farbe / Finish: ${formData.color}

Nachricht / Anmerkungen:
${formData.message || 'Keine zusätzlichen Anmerkungen.'}

---
Gesendet über die Website pulver-fabrik.de (Standort Niedernberg)`.trim();
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage Pulverbeschichtung / Sandstrahlen - ${formData.partType}`);
    const body = encodeURIComponent(generateEmailBody());
    window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formContent = (
    <div className="space-y-4 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md badge-chrome text-xs font-semibold uppercase tracking-wider mb-1.5">
            <Send className="w-3.5 h-3.5 text-slate-300" />
            Schnell & Cookie-frei
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">
            Unverbindliche <span className="text-chrome">Anfrage</span>
          </h3>
          <p className="text-xs text-zinc-400">
            Füllen Sie die Eckdaten aus. Wir leiten Sie direkt zu Ihrer E-Mail-App weiter.
          </p>
        </div>

        <div className="cookie-free-badge self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>Keine Speicherung, keine Cookies</span>
        </div>
      </div>

      <form onSubmit={handleSendMailto} className="space-y-3.5">
        
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Ihr Name / Firma *
            </label>
            <input
              type="text"
              required
              placeholder="z.B. Max Mustermann"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Telefonnummer *
            </label>
            <input
              type="tel"
              required
              placeholder="z.B. 0170 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
          </div>
        </div>

        {/* Row 2: Email & Part Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Ihre E-Mail *
            </label>
            <input
              type="email"
              required
              placeholder="z.B. name@beispiel.de"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Art der Teile
            </label>
            <select
              value={formData.partType}
              onChange={(e) => setFormData({ ...formData, partType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            >
              <option value="Felgen / KFZ-Teile">Felgen & KFZ-Teile (PKW, Motorrad)</option>
              <option value="Mobiles Sandstrahlen (vor Ort)">Mobiles Sandstrahlen (z.B. Holzbalken)</option>
              <option value="Industrieteile / Serienteile">Industrieteile / Serienteile</option>
              <option value="Zaun / Geländer / Schweißkonstruktion">Zaun / Geländer / Konstruktion</option>
              <option value="Sandstrahlen & Entlacken">Nur Sandstrahlen / Entlacken</option>
              <option value="Sonstiges">Sonstige Teile</option>
            </select>
          </div>
        </div>

        {/* Row 3: Dimensions & Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Maße / Stückzahl
            </label>
            <input
              type="text"
              placeholder="z.B. 4 Felgen 19 Zoll"
              value={formData.dimensions}
              onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Wunsch-Farbe / Finish
            </label>
            <input
              type="text"
              placeholder="z.B. Schwarz Glanz, RAL 9005"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
            Nachricht / Anmerkungen
          </label>
          <textarea
            rows={2}
            placeholder="Material, Zustand (lackiert, verrostet) oder Wünsche..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
          />
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-xs btn-chrome uppercase tracking-wider"
          >
            <Mail className="w-4 h-4 text-zinc-950" />
            <span>In E-Mail-App öffnen</span>
          </button>

          <button
            type="button"
            onClick={handleCopyText}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-bold text-xs text-zinc-200 bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Kopiert!' : 'Text kopieren'}</span>
          </button>

        </div>

        {submitted && (
          <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Vielen Dank! Ihre E-Mail-App wurde geöffnet.
          </div>
        )}

        <div className="pt-1 text-center">
          <p className="text-xs text-zinc-400">
            Direkter Anruf: <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="font-extrabold text-white underline">{COMPANY_INFO.contact.phone}</a> (GF {COMPANY_INFO.ceo})
          </p>
        </div>

      </form>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md p-4 flex items-center justify-center">
        <div className="bg-zinc-900 rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-zinc-700 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950 text-zinc-300 hover:bg-zinc-800 border border-zinc-700 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="kontakt" className="py-12 md:py-16 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/90 rounded-3xl border border-zinc-700/80 p-6 sm:p-9 shadow-2xl">
          {formContent}
        </div>
      </div>
    </section>
  );
};
