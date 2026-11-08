import React from 'react';
import { MapPin, CheckCircle2, Building2, Users2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography & Visual Anchor */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#174C35]/15 group">
              <img
                src="/assets/aistudio/images__1__54377b79.jpg"
                alt="Khan Muhammad Rice Mills Facility, Warehouse & Grain Transport on Shah Kareem Main Road"
                className="w-full h-80 sm:h-96 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Official Seal Emblem Badge */}
              <div className="absolute top-4 right-4 z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-2xl border-2 border-[#D6AA52] flex items-center justify-center">
                <img
                  src={COMPANY_DATA.logoUrl}
                  alt="Khan Muhammad Official Seal"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D6AA52] bg-[#174C35]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  Mill Premises & Dispatch Yard
                </span>
                <p className="text-sm font-medium text-white/95 mt-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D6AA52] shrink-0" />
                  Shah Kareem Main Road, Sijawal, Tando Muhammad Khan
                </p>
              </div>
            </div>

            {/* Secondary Image Strip for Agricultural Authenticity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm border border-[#174C35]/10 h-36 relative group">
                <img
                  src="/assets/aistudio/images_d6a94c2d.jpg"
                  alt="Live grain quality check and sack packaging at Khan Muhammad Rice Mills"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] text-white font-medium">Grain Quality Inspection</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm border border-[#174C35]/10 h-36 relative group">
                <img
                  src="/assets/aistudio/images__2__7d74f0a8.jpg"
                  alt="Active milling yard and paddy unloading at Khan Muhammad Rice Mills"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] text-white font-medium">Active Processing Yard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Business Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
                Our Company Overview
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35] leading-tight text-balance">
                About Khan Muhammad Rice Mills
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#252A27]/85 leading-relaxed">
              <p>
                Khan Muhammad Rice Mills is an agricultural processing business located on Shah Kareem Main Road, Sijawal, Tando Muhammad Khan. Our commitment is centered on quality rice processing, responsible handling, and building long-term relationships with customers and business partners.
              </p>
              <p>
                We believe that quality begins with careful attention to every stage of the milling process. Through dedication, consistency, and a customer-focused approach, we strive to deliver rice products that meet the expectations of the people and businesses we serve.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#174C35] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-medium">
                  Careful paddy intake & moisture checks
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#174C35] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-medium">
                  Reliable milling consistency
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#174C35] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-medium">
                  Wholesale & distributor focus
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#174C35] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-medium">
                  Clean & secure warehouse storage
                </span>
              </div>
            </div>

            {/* Business Contact & Leadership Callout Box */}
            <div className="pt-4 border-t border-[#174C35]/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#174C35]/10 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C35]">
                  <Building2 className="w-4 h-4 text-[#D6AA52]" />
                  <span>Executive Governance</span>
                </div>
                <p className="mt-1.5 font-serif font-bold text-sm sm:text-base text-[#174C35] leading-snug">
                  Atta Muhammad Unar &amp; Naresh Kumar (Founders &amp; CEOs)
                </p>
                <p className="text-xs text-[#252A27]/75 mt-0.5 font-medium">
                  Abdul Sattar Unar, Khalil Ahmed Unar &amp; Ghulam Abbas Unar · Directors
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#174C35]/5 border border-[#174C35]/15 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C35]">
                  <Users2 className="w-4 h-4 text-[#D6AA52]" />
                  <span>Customer & Trade Inquiries</span>
                </div>
                <p className="mt-1.5 font-serif font-bold text-base text-[#174C35]">
                  {COMPANY_DATA.leadership.contactPerson.name}
                </p>
                <p className="text-xs text-[#252A27]/70">
                  {COMPANY_DATA.leadership.contactPerson.designation} · {COMPANY_DATA.contact.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
