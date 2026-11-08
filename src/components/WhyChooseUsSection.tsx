import React from 'react';
import { Award, Cog, HeartHandshake, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_BENEFITS } from '../data/companyData.ts';

const benefitIcons = [
  Award,
  Cog,
  HeartHandshake,
  ShieldCheck,
  Sprout,
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Our Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35]">
            Why Choose Khan Muhammad Rice Mills?
          </h2>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed pt-2">
            Built on agricultural integrity, dependable processing standards, and dedicated client relationships in Sindh.
          </p>
        </div>

        {/* 5 Benefits Grid - Clean editorial arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_BENEFITS.map((item, index) => {
            const Icon = benefitIcons[index] || Award;

            return (
              <div
                key={item.number}
                className={`p-8 rounded-2xl border border-[#174C35]/15 bg-[#F8F7F2] hover:bg-white hover:border-[#D6AA52] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#174C35] text-[#D6AA52] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#D6AA52]/60 group-hover:text-[#D6AA52] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#174C35] group-hover:text-[#0f3424] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#252A27]/80 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#174C35]/10 flex items-center justify-between text-xs font-semibold text-[#174C35]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D6AA52]">
                    Core Pillar
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 group-hover:text-[#D6AA52] transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
