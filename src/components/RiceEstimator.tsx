import React, { useState, useId } from 'react';
import { Calculator, Package, Check, ArrowRight, Sparkles, MessageCircle, FileText, Truck, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface RiceEstimatorProps {
  onApplyToInquiry?: (variety: string, details: string) => void;
}

interface VarietyOption {
  id: string;
  name: string;
  category: string;
  grainLength: string;
  brokenPercentage: string;
  moistureLimit: string;
  description: string;
  popularFor: string;
}

const VARIETIES: VarietyOption[] = [
  {
    id: 'kainat-1121',
    name: '1121 Kainat Steam Rice',
    category: 'Extra Long Grain',
    grainLength: '8.35 mm+',
    brokenPercentage: '< 2.0%',
    moistureLimit: '12.0% Max',
    description: 'World-renowned extra long grain, non-sticky with exceptional double elongation upon cooking.',
    popularFor: 'Export, Luxury Biryani, High-end Banquets',
  },
  {
    id: 'super-basmati',
    name: 'Super Kernel Basmati Rice',
    category: 'Traditional Basmati',
    grainLength: '7.40 mm',
    brokenPercentage: '< 1.5%',
    moistureLimit: '11.5% Max',
    description: 'Heritage aroma and royal dining texture, naturally aged for peak fragrance and slender fluffiness.',
    popularFor: 'Fine Dining, Gourmet Catering, Household Luxury',
  },
  {
    id: 'super-sella',
    name: 'Super Gold Sella (Parboiled)',
    category: 'Parboiled Premium',
    grainLength: '8.25 mm',
    brokenPercentage: '< 1.0%',
    moistureLimit: '12.5% Max',
    description: 'Hardened kernel parboiled to lock in bran nutrients, withstands high-temperature cooking without breaking.',
    popularFor: 'Commercial Caterers, Hotels, Pulao Masters',
  },
  {
    id: 'pk-386',
    name: 'PK-386 Fragrant Rice',
    category: 'Non-Basmati Aromatic',
    grainLength: '6.80 mm',
    brokenPercentage: '< 3.0%',
    moistureLimit: '12.5% Max',
    description: 'Highly economical aromatic grain that mimics basmati tenderness at commercial bulk pricing.',
    popularFor: 'Restaurants, Wholesale Wholesalers, Institutional Catering',
  },
  {
    id: 'irri-6',
    name: 'Irri-6 Long Grain White',
    category: 'Commercial Export Grade',
    grainLength: '6.00 mm',
    brokenPercentage: '< 5.0%',
    moistureLimit: '13.0% Max',
    description: 'High-yield Sindh staple celebrated for food security, export containers, and industrial packaging.',
    popularFor: 'African & Middle East Export, Bulk Grain Traders',
  },
];

interface PackagingOption {
  id: string;
  name: string;
  weightKg: number;
  material: string;
}

const PACKAGING_OPTIONS: PackagingOption[] = [
  { id: 'bag-50', name: '50 kg Master PP Bag', weightKg: 50, material: 'Durable Polypropylene Woven' },
  { id: 'bag-25', name: '25 kg Non-Woven Bag', weightKg: 25, material: 'Reinforced Non-Woven Fabric' },
  { id: 'bag-10', name: '10 kg Retail Handle Bag', weightKg: 10, material: 'Premium Laminated Cotton' },
  { id: 'bulk-1000', name: '1,000 kg Jumbo Bulk Tote', weightKg: 1000, material: 'Heavy Industrial Container Bag' },
];

export const RiceEstimator: React.FC<RiceEstimatorProps> = ({ onApplyToInquiry }) => {
  const varietySelectId = useId();
  const packagingSelectId = useId();
  const quantityInputId = useId();

  const [selectedVariety, setSelectedVariety] = useState<VarietyOption>(VARIETIES[0]);
  const [selectedPackaging, setSelectedPackaging] = useState<PackagingOption>(PACKAGING_OPTIONS[0]);
  const [bagCount, setBagCount] = useState<number>(100);

  // Calculations
  const totalWeightKg = bagCount * selectedPackaging.weightKg;
  const totalMetricTons = (totalWeightKg / 1000).toFixed(2);
  const totalMaunds = (totalWeightKg / 40).toFixed(1); // 1 Maund = 40 kg in Pakistan

  const handleApplyToForm = () => {
    const summary = `${bagCount} bags of ${selectedPackaging.name} (${totalMetricTons} MT / ${totalMaunds} Maunds) of ${selectedVariety.name}`;
    if (onApplyToInquiry) {
      onApplyToInquiry(selectedVariety.name, summary);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppMessage = () => {
    const message = `Assalam-o-Alaikum Ghulam Abbas Bhai, I am interested in a wholesale quotation for:\n\n• Product: ${selectedVariety.name}\n• Packaging: ${selectedPackaging.name}\n• Quantity: ${bagCount} bags (${totalMetricTons} Metric Tons / ${totalMaunds} Maunds)\n• Required Grain Spec: ${selectedVariety.grainLength}, Broken ${selectedVariety.brokenPercentage}\n\nPlease share availability and current factory-gate rate from Khan Muhammad Rice Mills, Sijawal.`;
    return encodeURIComponent(message);
  };

  return (
    <section id="estimator" className="py-20 bg-gradient-to-b from-[#F8F7F2] to-white relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174C35]/10 text-[#174C35] text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#D6AA52]" />
            <span>Interactive Wholesale Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35]">
            Custom Batch &amp; Volume Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed">
            Configure your order by grain variety, packaging style, and target volume to inspect milling metrics and request an instant wholesale dispatch quote.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#174C35]/15 shadow-xl space-y-8">
            {/* Step 1: Rice Variety */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={varietySelectId} className="text-xs font-bold uppercase tracking-wider text-[#174C35] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#174C35] text-white flex items-center justify-center text-[10px]">1</span>
                  Select Rice Variety
                </label>
                <span className="text-xs font-medium text-[#D6AA52]">{selectedVariety.category}</span>
              </div>

              {/* Accessible Dropdown for Mobile / Screen Readers */}
              <select
                id={varietySelectId}
                aria-label="Select Rice Variety"
                value={selectedVariety.id}
                onChange={(e) => {
                  const v = VARIETIES.find((item) => item.id === e.target.value);
                  if (v) setSelectedVariety(v);
                }}
                className="w-full sm:hidden p-3 rounded-xl border border-slate-300 text-sm font-semibold text-[#174C35] bg-slate-50 mb-3"
              >
                {VARIETIES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.category})
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VARIETIES.map((v) => {
                  const isSelected = selectedVariety.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariety(v)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#174C35] bg-[#174C35]/5 shadow-sm ring-1 ring-[#174C35]'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#174C35]">{v.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#174C35]" />}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{v.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Packaging Style */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={packagingSelectId} className="text-xs font-bold uppercase tracking-wider text-[#174C35] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#174C35] text-white flex items-center justify-center text-[10px]">2</span>
                  Choose Packaging Type
                </label>
                <span className="text-xs text-slate-500">{selectedPackaging.material}</span>
              </div>

              {/* Accessible Dropdown for Mobile / Screen Readers */}
              <select
                id={packagingSelectId}
                aria-label="Choose Packaging Type"
                value={selectedPackaging.id}
                onChange={(e) => {
                  const p = PACKAGING_OPTIONS.find((item) => item.id === e.target.value);
                  if (p) setSelectedPackaging(p);
                }}
                className="w-full sm:hidden p-3 rounded-xl border border-slate-300 text-sm font-semibold text-[#174C35] bg-slate-50 mb-3"
              >
                {PACKAGING_OPTIONS.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} ({pkg.weightKg} kg)
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PACKAGING_OPTIONS.map((pkg) => {
                  const isSelected = selectedPackaging.id === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackaging(pkg)}
                      className={`text-center p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#D6AA52] bg-[#D6AA52]/10 ring-1 ring-[#D6AA52]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Package className={`w-5 h-5 mx-auto mb-1 ${isSelected ? 'text-[#D6AA52]' : 'text-slate-400'}`} />
                      <div className="font-bold text-xs text-[#174C35]">{pkg.name.split(' ')[0]} {pkg.name.split(' ')[1]}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{pkg.weightKg} kg / unit</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={quantityInputId} className="text-xs font-bold uppercase tracking-wider text-[#174C35] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#174C35] text-white flex items-center justify-center text-[10px]">3</span>
                  Target Quantity (Number of Units)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={quantityInputId}
                    type="number"
                    min="10"
                    max="5000"
                    value={bagCount}
                    onChange={(e) => setBagCount(Math.max(1, Number(e.target.value) || 1))}
                    aria-label="Quantity of bags"
                    className="w-20 px-2.5 py-1 text-center font-bold text-sm rounded-lg border border-[#174C35]/30 text-[#174C35] focus:outline-none focus:ring-2 focus:ring-[#D6AA52]"
                  />
                  <span className="text-xs font-bold text-[#174C35]">Bags</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="20"
                max="2000"
                step="20"
                value={bagCount}
                onChange={(e) => setBagCount(Number(e.target.value))}
                aria-label="Adjust quantity slider"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#174C35]"
              />

              {/* Quick Select Preset Buttons */}
              <div className="flex items-center gap-2 mt-3 text-xs">
                <span className="text-slate-400 text-[11px]">Quick Lots:</span>
                {[50, 100, 250, 500, 1000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setBagCount(preset)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer ${
                      bagCount === preset
                        ? 'bg-[#174C35] text-white border-[#174C35]'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {preset} Bags
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result / Quotation Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#174C35] via-[#123d2b] to-[#0f3424] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#D6AA52]/30 relative overflow-hidden flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6AA52]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6AA52]">Batch Specification</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {selectedVariety.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D6AA52]/20 border border-[#D6AA52]/40 flex items-center justify-center text-[#D6AA52]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-[11px] text-white/70 uppercase tracking-wide">Total Volume</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D6AA52] font-serif mt-1">
                    {totalMetricTons} <span className="text-xs font-normal text-white/80">MT</span>
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">({totalWeightKg.toLocaleString()} kg)</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-[11px] text-white/70 uppercase tracking-wide">Local Weight (Sindh)</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D6AA52] font-serif mt-1">
                    {totalMaunds} <span className="text-xs font-normal text-white/80">Maunds</span>
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">(40 kg / Maund)</div>
                </div>
              </div>

              {/* Grain Technical Parameter Badges */}
              <div className="space-y-2 bg-black/20 p-4 rounded-2xl border border-white/10 text-xs">
                <div className="text-[11px] font-bold text-[#D6AA52] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Milling Quality Guarantee
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/75">Average Grain Length (AGL):</span>
                  <span className="font-semibold text-white">{selectedVariety.grainLength}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/75">Maximum Broken Ratio:</span>
                  <span className="font-semibold text-[#D6AA52]">{selectedVariety.brokenPercentage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/75">Safe Moisture Limit:</span>
                  <span className="font-semibold text-white">{selectedVariety.moistureLimit}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/75">Plant Dispatch Dispatch:</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#D6AA52]" />
                    Within 24-48 Hours
                  </span>
                </div>
              </div>

              <div className="text-xs text-white/80 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="font-semibold text-[#D6AA52]">Best suited for:</span> {selectedVariety.popularFor}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-6 space-y-3 mt-6 border-t border-white/15">
              <a
                href={`https://wa.me/923003942922?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-green-900/40 hover:shadow-xl cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Instant Quote via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#D6AA52]" />
                <span>Auto-Fill into Official Inquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[10px] text-center text-white/60">
                * Rates depend on ongoing Sindh paddy market auctions and seasonal mandi benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
