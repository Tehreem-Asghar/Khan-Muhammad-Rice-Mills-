import React from 'react';
import { Layers, CheckCircle2, Warehouse, ShieldAlert, HeartHandshake, Handshake, Sparkles } from 'lucide-react';
import { QUALITY_PILLARS } from '../data/companyData.ts';

const iconMap = {
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  Warehouse: Warehouse,
  ShieldAlert: ShieldAlert,
  HeartHandshake: HeartHandshake,
  Handshake: Handshake,
};

export const QualitySection: React.FC = () => {
  return (
    <section id="quality" className="py-20 bg-[#174C35] text-white relative overflow-hidden">
      {/* Decorative background rice pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6AA52_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Standard of Integrity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our Commitment to Quality
          </h2>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full" />
        </div>

        {/* Central Official Statement Box */}
        <div className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D6AA52]/40 text-center relative shadow-2xl">
          <Sparkles className="w-6 h-6 text-[#D6AA52] mx-auto mb-3" />
          <blockquote className="font-serif text-xl sm:text-2xl text-white font-medium leading-relaxed italic">
            "Quality is more than a standard. It is our commitment at every stage of rice processing."
          </blockquote>
          <p className="mt-3 text-xs tracking-wider uppercase text-[#D6AA52] font-semibold">
            Khan Muhammad Rice Mills · Sindh, Pakistan
          </p>
        </div>

        {/* 6 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALITY_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.iconName as keyof typeof iconMap] || CheckCircle2;

            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D6AA52]/70 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D6AA52]/20 border border-[#D6AA52]/40 text-[#D6AA52] flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D6AA52] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center text-[11px] text-[#D6AA52] font-semibold tracking-wider uppercase">
                  <span>Adherence Assured</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
