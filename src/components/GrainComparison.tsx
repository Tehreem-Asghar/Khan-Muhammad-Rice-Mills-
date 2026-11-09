import React, { useState } from 'react';
import { Ruler, Sparkles, Flame, Droplets, CheckCircle2, ChevronRight } from 'lucide-react';

interface GrainSpec {
  id: string;
  name: string;
  tagline: string;
  rawLengthMm: number;
  cookedLengthMm: number;
  elongationRatio: string;
  aromaScore: number; // Out of 5
  moisture: string;
  brokenRatio: string;
  whiteness: string;
  chalkyGrains: string;
  idealDishes: string[];
  description: string;
}

const GRAIN_DATA: GrainSpec[] = [
  {
    id: 'kainat-1121',
    name: '1121 Kainat Steam',
    tagline: 'The King of Extra-Long Basmati Grains',
    rawLengthMm: 8.35,
    cookedLengthMm: 18.5,
    elongationRatio: '2.2x Elongation',
    aromaScore: 4,
    moisture: '< 12.0%',
    brokenRatio: '< 2.0%',
    whiteness: 'Silky White Translucent',
    chalkyGrains: '< 1.5%',
    idealDishes: ['Shahi Mutton Biryani', 'Royal Wedding Banquets', 'Diplomatic Dinners', 'Export Cartons'],
    description:
      'Engineered for majesty. 1121 Kainat holds the world record for longest raw and cooked rice grain. Its slender grain separates effortlessly without breakage or clumping.',
  },
  {
    id: 'super-basmati',
    name: 'Super Kernel Basmati',
    tagline: 'The Royal Fragrant Heritage Grain',
    rawLengthMm: 7.4,
    cookedLengthMm: 14.8,
    elongationRatio: '2.0x Elongation',
    aromaScore: 5,
    moisture: '< 11.5%',
    brokenRatio: '< 1.5%',
    whiteness: 'Pearlescent White',
    chalkyGrains: '< 2.0%',
    idealDishes: ['Chicken Yakhni Pulao', 'Hyderabadi Biryani', 'Kheer / Firni', 'Fine Dining Rice Bowls'],
    description:
      'Naturally aged in our ventilated storage to cultivate its signature pandan-like 2-acetyl-1-pyrroline fragrance. Soft, tender, and effortlessly digestible.',
  },
  {
    id: 'gold-sella',
    name: 'Super Gold Sella',
    tagline: 'Parboiled Durability & Nutrient Preservation',
    rawLengthMm: 8.25,
    cookedLengthMm: 17.0,
    elongationRatio: '2.1x Elongation',
    aromaScore: 3,
    moisture: '< 12.5%',
    brokenRatio: '< 1.0%',
    whiteness: 'Golden Amber Lustre',
    chalkyGrains: 'Virtually 0% (Parboiled)',
    idealDishes: ['Large-scale Degi Biryani', 'Hotel Buffets', 'Industrial Food Service', 'Long-haul Shipping'],
    description:
      'Hydrothermally parboiled in paddy state before dehulling. The starch gelatinizes, sealing in vitamins and guaranteeing zero broken grains during vigorous stirring.',
  },
  {
    id: 'irri-6',
    name: 'Irri-6 Long Grain',
    tagline: 'High-Yield Commercial Staple',
    rawLengthMm: 6.1,
    cookedLengthMm: 11.5,
    elongationRatio: '1.9x Elongation',
    aromaScore: 2,
    moisture: '< 13.0%',
    brokenRatio: '< 5.0%',
    whiteness: 'Standard White Polish',
    chalkyGrains: '< 5.0%',
    idealDishes: ['Daily Household Meals', 'Fried Rice / Chinese', 'Commercial Canteens', 'Container Exports'],
    description:
      'The workhorse of Sindh agricultural exports. High starch stability, firm bite, and extremely cost-effective for large commercial food distributors.',
  },
];

export const GrainComparison: React.FC = () => {
  const [selectedGrain, setSelectedGrain] = useState<GrainSpec>(GRAIN_DATA[0]);

  // Max mm ruler benchmark (up to 20mm for visualization)
  const maxRulerMm = 20;

  return (
    <section id="comparison" className="py-20 bg-white relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6AA52]/15 border border-[#D6AA52]/30 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5 text-[#D6AA52]" />
            <span>Precision Grain Laboratory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35]">
            Grain Anatomy &amp; Specification Comparison
          </h2>
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed">
            Every grain variety possesses distinctive elongation, moisture absorption, and cooking dynamics. Compare our laboratory parameters below.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {GRAIN_DATA.map((grain) => {
            const isSelected = selectedGrain.id === grain.id;
            return (
              <button
                key={grain.id}
                type="button"
                onClick={() => setSelectedGrain(grain)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#174C35] text-white shadow-lg shadow-[#174C35]/25 ring-2 ring-[#D6AA52]'
                    : 'bg-[#F8F7F2] text-[#174C35] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{grain.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#D6AA52] text-[#174C35]' : 'bg-slate-200 text-slate-600'}`}>
                  {grain.rawLengthMm} mm
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Card */}
        <div className="bg-[#F8F7F2] rounded-3xl border border-[#174C35]/15 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Ruler & Scale (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-bold text-[#D6AA52] uppercase tracking-wider">Visual Measurement Scale</span>
              <h3 className="font-serif text-2xl font-bold text-[#174C35] mt-0.5">
                {selectedGrain.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{selectedGrain.tagline}</p>
            </div>

            {/* Visual Grain Length Bars */}
            <div className="space-y-5 pt-2">
              {/* Raw Grain */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-[#174C35] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#174C35]" />
                    Raw Uncooked Kernel Length:
                  </span>
                  <span className="text-sm font-bold text-[#174C35]">{selectedGrain.rawLengthMm} mm</span>
                </div>
                <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden p-1 border border-slate-200 relative flex items-center">
                  <div
                    className="h-full bg-gradient-to-r from-[#174C35] to-[#2a7a57] rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2 text-[10px] font-bold text-white shadow-sm"
                    style={{ width: `${(selectedGrain.rawLengthMm / maxRulerMm) * 100}%` }}
                  >
                    {selectedGrain.rawLengthMm} mm
                  </div>
                </div>
              </div>

              {/* Cooked Grain Elongation */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-[#D6AA52] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D6AA52]" />
                    Post-Cooking Elongated Length:
                  </span>
                  <span className="text-sm font-bold text-[#174C35]">
                    {selectedGrain.cookedLengthMm} mm <span className="text-[11px] font-normal text-slate-500">({selectedGrain.elongationRatio})</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden p-1 border border-slate-200 relative flex items-center">
                  <div
                    className="h-full bg-gradient-to-r from-[#D6AA52] to-[#f0c978] rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2 text-[10px] font-bold text-[#174C35] shadow-sm"
                    style={{ width: `${(selectedGrain.cookedLengthMm / maxRulerMm) * 100}%` }}
                  >
                    {selectedGrain.cookedLengthMm} mm
                  </div>
                </div>
              </div>

              {/* Millimeter Gauge Rulers */}
              <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-200">
                <span>0 mm</span>
                <span>5 mm</span>
                <span>10 mm</span>
                <span>15 mm</span>
                <span>20 mm (Max)</span>
              </div>
            </div>

            {/* Aroma Meter */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D6AA52]" />
                  Natural Aroma Level:
                </span>
                <span className="font-bold text-[#174C35]">{selectedGrain.aromaScore} / 5</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      star <= selectedGrain.aromaScore ? 'bg-[#D6AA52]' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lab Specifications Grid (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm text-[#252A27]/85 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200">
              {selectedGrain.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Moisture Content</div>
                <div className="text-base font-bold text-[#174C35] mt-0.5">{selectedGrain.moisture}</div>
                <div className="text-[10px] text-slate-500">Milling laboratory standard</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Broken Grain Ratio</div>
                <div className="text-base font-bold text-[#D6AA52] mt-0.5">{selectedGrain.brokenRatio}</div>
                <div className="text-[10px] text-slate-500">Separated via length grader</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Color & Polish</div>
                <div className="text-base font-bold text-[#174C35] mt-0.5">{selectedGrain.whiteness}</div>
                <div className="text-[10px] text-slate-500">High friction mist polished</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-[10px] uppercase font-bold text-slate-400">Chalkiness Max</div>
                <div className="text-base font-bold text-[#174C35] mt-0.5">{selectedGrain.chalkyGrains}</div>
                <div className="text-[10px] text-slate-500">Clean solid grain core</div>
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#174C35]">
                Culinary &amp; Export Recommendations:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedGrain.idealDishes.map((dish, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#174C35]/5 text-[#174C35] font-medium border border-[#174C35]/15"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#D6AA52]" />
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
