import React, { useState } from 'react';
import { Truck, Sparkles, Cpu, ShieldCheck, PackageCheck, ChevronRight } from 'lucide-react';
import { PROCESSING_STAGES } from '../data/companyData.ts';

const iconMap = {
  Truck: Truck,
  Sparkles: Sparkles,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  PackageCheck: PackageCheck,
};

export const ProcessingSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Milling Operations & Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35]">
            From Paddy to Quality Rice
          </h2>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed pt-2">
            Every grain passes through five essential stages of careful handling, responsible screening, and disciplined milling before dispatch.
          </p>
        </div>

        {/* Connected Process Flow - Desktop Timeline Bar */}
        <div className="hidden lg:flex items-center justify-between relative mb-12 px-6">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-[#174C35]/15 -translate-y-1/2 z-0" />

          {PROCESSING_STAGES.map((stage) => {
            const Icon = iconMap[stage.iconName as keyof typeof iconMap] || Cpu;
            const isSelected = activeStage === stage.stageNumber;

            return (
              <button
                key={stage.stageNumber}
                type="button"
                onClick={() => setActiveStage(stage.stageNumber)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected
                      ? 'bg-[#174C35] text-[#D6AA52] scale-110 ring-4 ring-[#D6AA52]/40'
                      : 'bg-[#F8F7F2] text-[#174C35] hover:bg-[#174C35] hover:text-white border border-[#174C35]/20'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="mt-3 text-xs font-bold text-[#174C35] uppercase tracking-wider">
                  Stage 0{stage.stageNumber}
                </span>
                <span className="text-[11px] text-[#252A27]/70 font-medium max-w-[120px] text-center truncate">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* 5 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESSING_STAGES.map((stage) => {
            const Icon = iconMap[stage.iconName as keyof typeof iconMap] || Cpu;
            const isSelected = activeStage === stage.stageNumber;

            return (
              <div
                key={stage.stageNumber}
                onClick={() => setActiveStage(stage.stageNumber)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#174C35] text-white shadow-xl border-[#D6AA52] scale-[1.02]'
                    : 'bg-[#F8F7F2] text-[#252A27] border-[#174C35]/10 hover:border-[#174C35]/30 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Stage Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-white/15 text-[#D6AA52]'
                          : 'bg-[#174C35] text-[#D6AA52]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-serif text-2xl font-bold ${
                        isSelected ? 'text-[#D6AA52]' : 'text-[#174C35]/30'
                      }`}
                    >
                      0{stage.stageNumber}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-serif text-lg font-bold ${
                        isSelected ? 'text-white' : 'text-[#174C35]'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`text-xs mt-2 leading-relaxed ${
                        isSelected ? 'text-white/90' : 'text-[#252A27]/80'
                      }`}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-current/15">
                  <p
                    className={`text-[11px] leading-normal italic ${
                      isSelected ? 'text-[#D6AA52]' : 'text-[#252A27]/60'
                    }`}
                  >
                    {stage.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Spotlight based on selected stage */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#174C35]/5 border border-[#174C35]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D6AA52]">
              Current Highlight: Stage 0{activeStage}
            </span>
            <h4 className="font-serif text-xl font-bold text-[#174C35]">
              {PROCESSING_STAGES[activeStage - 1].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#252A27]/80 max-w-2xl">
              {PROCESSING_STAGES[activeStage - 1].detail}
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg bg-[#174C35] hover:bg-[#0f3424] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow transition-colors"
          >
            <span>Inquire About Processing</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6AA52]" />
          </a>
        </div>
      </div>
    </section>
  );
};
