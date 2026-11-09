import React from 'react';
import { Award, CheckCircle2, Cpu, Warehouse, TrendingUp, ShieldCheck } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '45,000+',
      unit: 'Metric Tons / Year',
      label: 'Milling Capacity',
      description: 'High-volume continuous multi-stage paddy processing plant',
    },
    {
      icon: Cpu,
      value: '99.8%',
      unit: 'Sorting Purity',
      label: 'Optical Color Sorting',
      description: 'Japanese multi-channel optical sorters for zero discolored grains',
    },
    {
      icon: Warehouse,
      value: '15,000+',
      unit: 'Bags Storage',
      label: 'Moisture Controlled Silos',
      description: 'Aerated, pest-controlled storage preserving natural freshness & aroma',
    },
    {
      icon: Award,
      value: '100%',
      unit: 'Sindh Basin Sourced',
      label: 'Indus Valley Paddy',
      description: 'Carefully procured directly from fertile lower Sindh paddy farmers',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#113826] to-[#174C35] text-white py-12 sm:py-16 border-y border-[#D6AA52]/20 overflow-hidden w-full max-w-full">
      {/* Background subtle grain pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6AA52_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6AA52]/20 border border-[#D6AA52]/40 text-[#D6AA52] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D6AA52] shrink-0" />
            <span>Operational Scale &amp; Reliability</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white px-2">
            Milling Excellence by the Numbers
          </h2>
          <p className="mt-2 text-xs sm:text-base text-white/80 px-2">
            Backed by precision engineering, modern infrastructure, and deep agricultural roots in Sijawal, Sindh.
          </p>
        </div>

        {/* 4-Column Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#D6AA52]/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D6AA52]/20 border border-[#D6AA52]/40 flex items-center justify-center text-[#D6AA52] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-[#D6AA52] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D6AA52]/10 border border-[#D6AA52]/20">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#D6AA52] font-serif">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90 uppercase tracking-wide">
                    {stat.unit}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white pt-0.5">
                    {stat.label}
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-transparent via-[#D6AA52]/40 to-transparent group-hover:via-[#D6AA52] transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Bottom Sindh Agricultural Note */}
        <div className="mt-8 sm:mt-12 text-center px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-sm text-white/80 bg-white/5 px-4 sm:px-6 py-2.5 rounded-2xl sm:rounded-full border border-white/10 max-w-full text-center leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#D6AA52] shrink-0" />
            <span>Equipped with Pre-Cleaners, Destoners, Whitening Cones, Mist Polishers &amp; Computerized Weighing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
