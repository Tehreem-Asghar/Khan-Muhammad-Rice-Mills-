import React from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Location Indicator & Trust Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D6AA52] text-xs font-medium tracking-wide mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#D6AA52]" />
          <span>Sijawal, Tando Muhammad Khan, Sindh, Pakistan</span>
          <span className="text-white/40">·</span>
          <span className="text-white/90 font-normal">Agricultural Processing</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance max-w-4xl mx-auto">
          Quality Rice. <span className="text-[#D6AA52]">Trusted Processing.</span> Lasting Partnerships.
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          Khan Muhammad Rice Mills is committed to quality rice processing, careful handling, and reliable service. We bring dedication and attention to detail to every stage of our milling process.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D6AA52] hover:bg-[#e5c378] text-[#174C35] font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo('#process')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white font-medium text-sm rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discover Our Process</span>
          </button>
        </div>

        {/* Clean Editorial Metadata Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto text-white/85">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Careful Handling</p>
              <p className="text-xs text-white/80 mt-0.5">Attentive paddy intake, cleaning, and uniform milling</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <span className="font-serif font-bold text-xs">CEO</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Founders &amp; CEOs</p>
              <p className="text-xs text-white/80 mt-0.5">{COMPANY_DATA.leadership.founderCeo1.name} &amp; {COMPANY_DATA.leadership.founderCeo2.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D6AA52]/20 border border-[#D6AA52]/30 flex items-center justify-center shrink-0 text-[#D6AA52] mt-0.5">
              <span className="font-serif font-bold text-xs">B2B</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D6AA52]">Business Contact</p>
              <p className="text-xs text-white/80 mt-0.5">{COMPANY_DATA.leadership.contactPerson.name} · {COMPANY_DATA.contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
