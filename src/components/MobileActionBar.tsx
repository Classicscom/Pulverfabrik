import React from 'react';
import { COMPANY_INFO } from '../data/pulverfabrikData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-2 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-white text-zinc-950 font-extrabold text-[11px] active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 mb-0.5 text-zinc-950" />
          <span>Anrufen</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${COMPANY_INFO.contact.email}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-zinc-900 text-zinc-200 font-semibold text-[11px] border border-zinc-800 active:scale-95 transition-transform"
        >
          <Mail className="w-3.5 h-3.5 mb-0.5 text-zinc-400" />
          <span>E-Mail</span>
        </a>

        {/* Maps Button */}
        <a
          href={COMPANY_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-zinc-900 text-zinc-200 font-semibold text-[11px] border border-zinc-800 active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 mb-0.5 text-zinc-400" />
          <span>Anfahrt</span>
        </a>

      </div>
    </div>
  );
};
