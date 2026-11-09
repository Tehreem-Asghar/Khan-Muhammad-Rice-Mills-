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

  // Dimension presets with ultra-small 320px support
  const emblemSize = {
    sm: 'w-7 h-7 sm:w-9 sm:h-9',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-14 sm:h-14',
  }[size];

  if (variant === 'emblem-only') {
    return (
      <div
        className={`relative ${emblemSize} rounded-full overflow-hidden shrink-0 border border-[#D6AA52] shadow-sm bg-white ${className}`}
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
    <div className={`flex items-center gap-1.5 sm:gap-2.5 group cursor-pointer shrink-0 ${className}`}>
      {/* Official Circular Logo Emblem */}
      <div
        className={`relative ${emblemSize} rounded-full overflow-hidden shrink-0 border transition-transform duration-200 group-hover:scale-105 shadow-sm bg-white ${
          isLight
            ? 'border-[#D6AA52] ring-1 ring-white/20'
            : 'border-[#D6AA52] ring-1 ring-[#174C35]/15'
        }`}
      >
        <img
          src={logoSrc}
          alt="Khan Muhammad Official Logo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col text-left leading-none shrink-0">
        <span
          className={`font-serif tracking-normal sm:tracking-wider font-bold text-xs sm:text-base lg:text-lg uppercase transition-colors whitespace-nowrap ${
            isLight ? 'text-white' : 'text-[#174C35]'
          }`}
        >
          Khan Muhammad
        </span>
        <span
          className="text-[8px] sm:text-[11px] font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#D6AA52] whitespace-nowrap mt-0.5"
        >
          Rice Mills
        </span>
      </div>
    </div>
  );
};
