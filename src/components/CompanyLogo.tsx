import React from 'react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface CompanyLogoProps {
  variant?: 'light' | 'dark' | 'footer' | 'emblem-only';
  className?: string;
  customLogoUrl?: string | null;
  size?: 'sm' | 'md' | 'lg';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'dark',
  className = '',
  customLogoUrl = null,
  size = 'md',
}) => {
  const logoSrc = customLogoUrl || COMPANY_DATA.logoUrl;
  const isLight = variant === 'light';

  // Dimension presets
  const emblemSize = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  }[size];

  if (variant === 'emblem-only') {
    return (
      <div
        className={`relative ${emblemSize} rounded-full overflow-hidden shrink-0 border-2 border-[#D6AA52] shadow-md bg-white ${className}`}
      >
        <img
          src={logoSrc}
          alt="Khan Muhammad Rice Mills Official Emblem"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Official Circular Logo Emblem */}
      <div
        className={`relative ${emblemSize} rounded-full overflow-hidden shrink-0 border-2 transition-transform duration-200 group-hover:scale-105 shadow-md bg-white ${
          isLight
            ? 'border-[#D6AA52] ring-2 ring-white/15'
            : 'border-[#D6AA52] ring-2 ring-[#174C35]/15'
        }`}
      >
        <img
          src={logoSrc}
          alt="Khan Muhammad Official Logo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif tracking-wider font-bold text-base sm:text-lg uppercase transition-colors ${
            isLight ? 'text-white' : 'text-[#174C35]'
          }`}
        >
          Khan Muhammad
        </span>
        <span
          className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mt-1 text-[#D6AA52]"
        >
          Rice Mills
        </span>
      </div>
    </div>
  );
};
