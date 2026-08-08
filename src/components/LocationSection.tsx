import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/pulverfabrikData';
import { MapPin, Phone, Mail, ExternalLink, Copy, Check, ShieldCheck, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="anfahrt" className="py-10 md:py-14 bg-zinc-950 text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 uppercase tracking-wider">
            Standort & Anfahrt
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase">
            So finden Sie zu uns
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Besuchen Sie uns an unserem neuen Standort in Niedernberg. Um Ihre Privatsphäre zu schützen und Cookies zu vermeiden, nutzen wir direkte Navigationslinks.
          </p>

          <div className="cookie-free-badge">
            <ShieldCheck className="w-3 h-3" />
            <span>100% Cookie-frei – Keine Tracking-Skripte</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Address Card & Contact Details */}
          <div className="lg:col-span-7 card-dark-clean p-6 flex flex-col justify-between space-y-4 bg-zinc-900 border border-zinc-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  Neue Adresse
                </span>
                <span className="text-xs font-medium text-zinc-400">
                  {COMPANY_INFO.address.zip} Niedernberg
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase mb-1">
                {COMPANY_INFO.fullName}
              </h3>

              <div className="text-base font-bold text-white mb-4">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              </div>

              {/* Address details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 block mb-0.5">Geschäftsleitung</span>
                  <p className="font-extrabold text-white text-sm">{COMPANY_INFO.ceo}</p>
                  <span className="text-[10px] text-zinc-400">{COMPANY_INFO.role}</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 block mb-0.5">Telefon / Mobil</span>
                  <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="font-extrabold text-white text-sm hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    {COMPANY_INFO.contact.phone}
                  </a>
                  <span className="text-[10px] text-zinc-400">Direkt erreichbar</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 block mb-0.5">E-Mail</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="font-semibold text-zinc-200 text-xs hover:underline flex items-center gap-1 break-all">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 block mb-0.5">Öffnungszeiten</span>
                  <p className="font-medium text-zinc-300 text-xs">
                    {COMPANY_INFO.contact.hours}
                  </p>
                </div>

              </div>
            </div>

            {/* Address Copy & Navigation buttons */}
            <div className="pt-3 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all border border-zinc-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copied ? 'Adresse kopiert!' : 'Adresse kopieren'}</span>
              </button>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs bg-white text-zinc-950 hover:bg-zinc-200 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>In Google Maps öffnen</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Link Banner Box */}
          <div className="lg:col-span-5 bg-zinc-900 rounded-xl p-6 border border-zinc-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center border border-zinc-700">
                <Navigation className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-extrabold text-white uppercase">
                Cookie-freie Routenplanung
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Wir legen großen Wert auf Ihren Datenschutz. Statt Google Maps mit Tracking-Cookies einzubetten, leiten wir direkt zu Ihrer präferierten Karten-App weiter.
              </p>

              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                <span className="font-bold text-white block uppercase text-[10px]">
                  Anfahrt Niedernberg:
                </span>
                <p className="text-xs text-zinc-400">
                  Gewerbegebiet Niedernberg (Nahe B26 / B469). Ausreichend Platz für LKW-Anlieferungen.
                </p>
              </div>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-zinc-950 font-bold text-xs uppercase hover:bg-zinc-200 transition-all"
            >
              <MapPin className="w-4 h-4 text-zinc-950" />
              Route in Google Maps planen
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
