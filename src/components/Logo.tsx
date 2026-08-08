import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', lightMode = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {!imgError ? (
        <img
          src="/logo.svg"
          alt="Pulverfabrik Logo"
          className="h-8 md:h-9 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      ) : null}

      {imgError && (
        <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg bg-zinc-900 text-zinc-100 shadow-xs">
          <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current stroke-current stroke-1">
            <circle cx="50" cy="50" r="42" fill="none" strokeWidth="6" />
            <circle cx="50" cy="50" r="14" fill="none" strokeWidth="5" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
            <line x1="50" y1="8" x2="50" y2="36" strokeWidth="4" />
            <line x1="50" y1="64" x2="50" y2="92" strokeWidth="4" />
            <line x1="8" y1="50" x2="36" y2="50" strokeWidth="4" />
            <line x1="64" y1="50" x2="92" y2="50" strokeWidth="4" />
          </svg>
        </div>
      )}

      <div className="flex flex-col">
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 leading-none">
          OBERFLÄCHENTECHNIK
        </span>
        <span className={`text-lg md:text-xl font-black tracking-tight uppercase leading-tight ${lightMode ? 'text-zinc-900' : 'text-white'}`}>
          PULVERFABRIK
        </span>
      </div>
    </div>
  );
};
