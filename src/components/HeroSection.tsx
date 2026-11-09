import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Calculator, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden w-full max-w-full">
      {/* Background Photography with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_rice_fields_1793883684222.jpg"
          alt="Golden rice fields ready for harvest in Sindh, Pakistan"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#174C35]/95 via-[#174C35]/85 to-[#0f3424]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/35" />
        {/* Subtle decorative fine grain pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D6AA52_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Urdu Heritage Ribbon */}
        <div className="inline-block max-w-full mb-3 sm:mb-4">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D6AA52]/20 border border-[#D6AA52]/40 text-[#D6AA52] text-[11px] sm:text-sm font-medium tracking-wide backdrop-blur-md text-center max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D6AA52] shrink-0" />
            <span className="leading-snug">خوشبو، معیار اور اعتماد کا سنگم — خان محمد رائس ملز، سجاول</span>
          </div>
        </div>

        {/* Location Indicator & Trust Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-white/80 text-[11px] sm:text-xs font-medium text-center px-2 mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
          <MapPin className="w-3.5 h-3.5 text-[#D6AA52] shrink-0" />
          <span>Shah Kareem Main Road, Sijawal, Tando Muhammad Khan, Sindh, Pakistan</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.15] text-balance max-w-4xl mx-auto px-1 break-words">
          Quality Rice. <span className="text-[#D6AA52]">Trusted Processing.</span> Lasting Partnerships.
        </h1>

        {/* Supporting Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto px-2">
          Khan Muhammad Rice Mills is committed to precision paddy milling, optical color sorting, and reliable wholesale distribution across Pakistan and international export markets.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-xl mx-auto px-2">
          <button
            onClick={() => scrollTo('#estimator')}
            className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-[#D6AA52] hover:bg-[#e5c378] text-[#174C35] font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#174C35] shrink-0" />
            <span>Batch Calculator</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Wholesale Contact</span>
          </button>

          <button
            onClick={() => scrollTo('#comparison')}
            className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3.5 bg-transparent hover:bg-white/10 text-white/90 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Grain Specs</span>
          </button>
        </div>

        {/* Clean Editorial Metadata Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left max-w-3xl mx-auto text-white/85 w-full px-2">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Careful Handling</p>
              <p className="text-xs text-white/80 mt-0.5">Attentive paddy intake, cleaning, and uniform milling</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <span className="font-serif font-bold text-xs">CEO</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Founders &amp; CEOs</p>
              <p className="text-xs text-white/80 mt-0.5">{COMPANY_DATA.leadership.founderCeo1.name} &amp; {COMPANY_DATA.leadership.founderCeo2.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <span className="font-serif font-bold text-xs">B2B</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Business Contact</p>
              <p className="text-xs text-white/80 mt-0.5">{COMPANY_DATA.leadership.contactPerson.name} · {COMPANY_DATA.contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
