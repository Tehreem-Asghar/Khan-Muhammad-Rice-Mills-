import React, { useState } from 'react';
import { Camera, Quote, Award, Shield, ArrowRight, Users, Sparkles, Building2, PhoneCall } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';
import { PhotoUploadModal } from './PhotoUploadModal.tsx';

interface LeadershipSectionProps {
  bothCeosPhoto: string | null;
  onUpdateBothCeosPhoto: (newPhotoUrl: string | null) => void;
  abdulSattarPhoto: string | null;
  onUpdateAbdulSattarPhoto: (newPhotoUrl: string | null) => void;
  khalilPhoto: string | null;
  onUpdateKhalilPhoto: (newPhotoUrl: string | null) => void;
  ghulamAbbasPhoto: string | null;
  onUpdateGhulamAbbasPhoto: (newPhotoUrl: string | null) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  bothCeosPhoto,
  onUpdateBothCeosPhoto,
  abdulSattarPhoto,
  onUpdateAbdulSattarPhoto,
  khalilPhoto,
  onUpdateKhalilPhoto,
  ghulamAbbasPhoto,
  onUpdateGhulamAbbasPhoto,
}) => {
  const [activeModal, setActiveModal] = useState<
    'bothCeos' | 'abdulSattar' | 'khalil' | 'ghulamAbbas' | null
  >(null);

  const director = COMPANY_DATA.leadership.director;
  const director2 = COMPANY_DATA.leadership.director2;
  const director3 = COMPANY_DATA.leadership.director3;

  const resolvedBothCeosPhoto =
    bothCeosPhoto ||
    COMPANY_DATA.leadership.bothCeosPhotoUrl ||
    '/assets/aistudio/both_ceos_in_one_frame.jpg';

  const resolvedAbdulSattarPhoto =
    abdulSattarPhoto ||
    director?.photoUrl ||
    '/assets/aistudio/Professional_Portrait_in_a_Navy_Three-Piece_Suit_cebb4b9e.png';

  const resolvedKhalilPhoto =
    khalilPhoto ||
    director2?.photoUrl ||
    '/assets/aistudio/Professional_Navy_Suit_Portrait_8a3b8f39.png';

  const resolvedGhulamAbbasPhoto =
    ghulamAbbasPhoto ||
    director3?.photoUrl ||
    '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png';

  return (
    <section id="leadership" className="py-20 bg-white relative overflow-hidden border-t border-[#174C35]/10">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6AA52]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#174C35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Executive Governance &amp; Stewardship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35]">
            Meet Our Leadership
          </h2>
          <p className="text-sm text-[#252A27]/75 max-w-2xl mx-auto">
            Guiding Khan Muhammad Rice Mills with unified leadership, agricultural heritage, and uncompromising commitment to quality rice processing in Sindh.
          </p>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full mt-3" />
        </div>

        {/* 1. PRIMARY SHOWCASE: Both Founders & CEOs in One Frame */}
        <div className="mb-14 bg-[#F8F7F2] rounded-3xl border-2 border-[#174C35]/15 shadow-2xl overflow-hidden hover:border-[#D6AA52] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* The One-Frame Portrait Area */}
            <div className="lg:col-span-7 bg-[#174C35] relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center p-6 sm:p-8">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D6AA52] bg-[#0f3424] flex items-center justify-center group">
                {resolvedBothCeosPhoto ? (
                  <img
                    src={resolvedBothCeosPhoto}
                    alt="Atta Muhammad Unar & Naresh Kumar - Founders & CEOs in One Frame"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white bg-gradient-to-b from-[#174C35] to-[#0a2318]">
                    <Users className="w-16 h-16 text-[#D6AA52] mb-3" />
                    <p className="font-serif text-xl font-bold">Atta Muhammad Unar &amp; Naresh Kumar</p>
                    <p className="text-xs text-[#D6AA52] uppercase tracking-wider mt-1">Founders &amp; CEOs</p>
                  </div>
                )}

                {/* Single Frame Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#174C35]/90 backdrop-blur-md border border-[#D6AA52]/60 text-white text-xs font-semibold shadow-lg">
                  <Award className="w-3.5 h-3.5 text-[#D6AA52]" />
                  <span>Founders &amp; Co-CEOs in One Frame</span>
                </div>

                {/* Quick Photo Upload / Replace button on hover */}
                <button
                  type="button"
                  onClick={() => setActiveModal('bothCeos')}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#174C35]/90 hover:bg-[#174C35] text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md border border-[#D6AA52]/60 shadow-lg cursor-pointer transition-all hover:scale-105"
                  title="Upload / Replace Unified Both CEOs Photograph"
                >
                  <Camera className="w-3.5 h-3.5 text-[#D6AA52]" />
                  <span>Change Frame Photo</span>
                </button>
              </div>
            </div>

            {/* Profile Details & Unified Executive Vision */}
            <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D6AA52]/15 text-[#174C35] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D6AA52]" />
                    <span>Executive Leadership Partnership</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#174C35] leading-snug">
                    Atta Muhammad Unar &amp; Naresh Kumar
                  </h3>
                  <p className="text-sm font-semibold text-[#D6AA52] mt-1 tracking-wide">
                    Founders &amp; Chief Executive Officers (Co-CEOs)
                  </p>
                </div>

                {/* Shared Vision Quote */}
                <div className="relative pl-5 border-l-2 border-[#D6AA52] py-1">
                  <Quote className="w-6 h-6 text-[#D6AA52]/20 absolute -top-2 -left-3 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-[#252A27]/85 leading-relaxed italic">
                    "Together, we lead Khan Muhammad Rice Mills with a unified mission: honoring the rich agricultural heritage of Sindh while deploying modern, rigorous milling standards to deliver trusted rice products nationwide."
                  </p>
                </div>

                {/* Individual Pillars */}
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-[#174C35]/10 shadow-sm">
                    <p className="font-serif font-bold text-sm text-[#174C35] flex items-center justify-between">
                      <span>Atta Muhammad Unar</span>
                      <span className="text-[10px] font-sans font-bold text-[#D6AA52] uppercase px-2 py-0.5 rounded bg-[#D6AA52]/10">Founder &amp; CEO</span>
                    </p>
                    <p className="text-xs text-[#252A27]/75 mt-1 leading-relaxed">
                      Oversees foundational mill operations, raw paddy intake, grower relationships, and time-tested quality craftsmanship.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#174C35]/10 shadow-sm">
                    <p className="font-serif font-bold text-sm text-[#174C35] flex items-center justify-between">
                      <span>Naresh Kumar</span>
                      <span className="text-[10px] font-sans font-bold text-[#D6AA52] uppercase px-2 py-0.5 rounded bg-[#D6AA52]/10">Founder &amp; CEO</span>
                    </p>
                    <p className="text-xs text-[#252A27]/75 mt-1 leading-relaxed">
                      Directs modern processing technologies, operational efficiencies, commercial strategy, and long-term wholesale partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shared Frame Footer */}
              <div className="pt-4 border-t border-[#174C35]/15 flex items-center justify-between text-xs text-[#174C35] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#D6AA52]" />
                  Executive Governance
                </span>
                <span className="text-[11px] text-[#252A27]/60">Sijawal, Sindh, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BOARD OF DIRECTORS: 3-Director Grid */}
        <div className="mb-12 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
              Corporate Counsel &amp; Operations Oversight
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#174C35] mt-1">
              Board of Directors
            </h3>
            <p className="text-xs text-[#252A27]/70 mt-1 max-w-lg mx-auto">
              Our esteemed Directors provide corporate governance, financial stewardship, and plant supervision across all milling activities.
            </p>
            <div className="w-12 h-0.5 bg-[#D6AA52] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Director 1: Abdul Sattar Unar */}
            <div className="bg-[#F8F7F2] rounded-3xl border-2 border-[#174C35]/15 shadow-lg overflow-hidden hover:border-[#D6AA52] transition-all p-6 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-[#D6AA52] bg-[#174C35] mb-4 group flex items-center justify-center">
                  {resolvedAbdulSattarPhoto ? (
                    <img
                      src={resolvedAbdulSattarPhoto}
                      alt={`${director.name} - ${director.designation}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-white">
                      <span className="font-serif text-3xl font-bold text-[#D6AA52]">ASU</span>
                      <p className="text-xs text-white/80 mt-1">{director.name}</p>
                    </div>
                  )}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#174C35]/90 text-[10px] font-bold text-[#D6AA52] border border-[#D6AA52]/40 shadow">
                    Director
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal('abdulSattar')}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#174C35]/90 hover:bg-[#174C35] text-white text-[10px] font-medium flex items-center gap-1 border border-[#D6AA52]/50 shadow cursor-pointer transition-all hover:scale-105"
                    title="Upload / Change Director Photograph"
                  >
                    <Camera className="w-3 h-3 text-[#D6AA52]" />
                    <span>Change</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6AA52]">
                    Board Governance
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#174C35]">
                    {director.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#D6AA52]">
                    {director.designation}
                  </p>
                  <p className="text-xs text-[#252A27]/80 leading-relaxed pt-1">
                    {director.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#174C35] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#D6AA52]" />
                  Board of Directors
                </span>
                <span className="text-[11px] text-[#252A27]/60">Sijawal</span>
              </div>
            </div>

            {/* Director 2: Khalil Ahmed Unar */}
            <div className="bg-[#F8F7F2] rounded-3xl border-2 border-[#174C35]/15 shadow-lg overflow-hidden hover:border-[#D6AA52] transition-all p-6 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-[#D6AA52] bg-[#174C35] mb-4 group flex items-center justify-center">
                  {resolvedKhalilPhoto ? (
                    <img
                      src={resolvedKhalilPhoto}
                      alt={`${director2?.name || 'Khalil Ahmed Unar'} - ${director2?.designation || 'Director'}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-white">
                      <span className="font-serif text-3xl font-bold text-[#D6AA52]">KAU</span>
                      <p className="text-xs text-white/80 mt-1">{director2?.name || 'Khalil Ahmed Unar'}</p>
                    </div>
                  )}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#174C35]/90 text-[10px] font-bold text-[#D6AA52] border border-[#D6AA52]/40 shadow">
                    Director
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal('khalil')}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#174C35]/90 hover:bg-[#174C35] text-white text-[10px] font-medium flex items-center gap-1 border border-[#D6AA52]/50 shadow cursor-pointer transition-all hover:scale-105"
                    title="Upload / Change Director Photograph"
                  >
                    <Camera className="w-3 h-3 text-[#D6AA52]" />
                    <span>Change</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6AA52]">
                    Commercial Strategy
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#174C35]">
                    {director2?.name || 'Khalil Ahmed Unar'}
                  </h4>
                  <p className="text-xs font-semibold text-[#D6AA52]">
                    {director2?.designation || 'Director'}
                  </p>
                  <p className="text-xs text-[#252A27]/80 leading-relaxed pt-1">
                    {director2?.description || 'Providing strategic board direction, commercial oversight, and corporate development counsel.'}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#174C35] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#D6AA52]" />
                  Board of Directors
                </span>
                <span className="text-[11px] text-[#252A27]/60">Sijawal</span>
              </div>
            </div>

            {/* Director 3: Ghulam Abbas Unar */}
            <div className="bg-[#F8F7F2] rounded-3xl border-2 border-[#174C35]/15 shadow-lg overflow-hidden hover:border-[#D6AA52] transition-all p-6 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-[#D6AA52] bg-[#174C35] mb-4 group flex items-center justify-center">
                  {resolvedGhulamAbbasPhoto ? (
                    <img
                      src={resolvedGhulamAbbasPhoto}
                      alt={`${director3?.name || 'Ghulam Abbas Unar'} - ${director3?.designation || 'Director'}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-white">
                      <span className="font-serif text-3xl font-bold text-[#D6AA52]">GAU</span>
                      <p className="text-xs text-white/80 mt-1">{director3?.name || 'Ghulam Abbas Unar'}</p>
                    </div>
                  )}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#174C35]/90 text-[10px] font-bold text-[#D6AA52] border border-[#D6AA52]/40 shadow">
                    Director &amp; Operations
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal('ghulamAbbas')}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#174C35]/90 hover:bg-[#174C35] text-white text-[10px] font-medium flex items-center gap-1 border border-[#D6AA52]/50 shadow cursor-pointer transition-all hover:scale-105"
                    title="Upload / Change Director Photograph"
                  >
                    <Camera className="w-3 h-3 text-[#D6AA52]" />
                    <span>Change</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6AA52]">
                    Operations Lead &amp; Plant Supervisor
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#174C35]">
                    {director3?.name || 'Ghulam Abbas Unar'}
                  </h4>
                  <p className="text-xs font-semibold text-[#D6AA52]">
                    Director &amp; Mill Operations Manager
                  </p>
                  <p className="text-xs text-[#252A27]/80 leading-relaxed pt-1">
                    {director3?.description || 'Milling Plant Supervisor, Business Contact Representative, and Director overseeing operations and customer relations.'}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#174C35] font-semibold">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#D6AA52]" />
                  +923003942922
                </span>
                <span className="text-[11px] text-[#252A27]/60">Sijawal</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Crucial Distinguishing Guidance Box */}
        <div className="p-6 rounded-2xl bg-[#F8F7F2] border border-[#174C35]/15 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#174C35]">
              Commercial Inquiries &amp; Operations Notice
            </p>
            <p className="text-xs sm:text-sm text-[#252A27]/80">
              Our Founders, CEOs, and Directors provide executive oversight and strategic vision. For day-to-day customer inquiries, sample requests, price quotes, and wholesale orders, please contact our dedicated Business Contact Representative, <strong className="text-[#174C35]">{COMPANY_DATA.leadership.contactPerson.name}</strong>.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#174C35] text-white hover:bg-[#0f3424] text-xs font-semibold shadow transition-all shrink-0"
          >
            <span>Contact Ghulam Abbas Unar</span>
            <ArrowRight className="w-4 h-4 text-[#D6AA52]" />
          </a>
        </div>
      </div>

      {/* Dynamic Photo Upload Modals */}
      {activeModal === 'bothCeos' && (
        <PhotoUploadModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Both CEOs in One Frame Photograph"
          subtitle="Upload unified portrait of Atta Muhammad Unar & Naresh Kumar"
          currentPhotoUrl={resolvedBothCeosPhoto}
          onSavePhoto={onUpdateBothCeosPhoto}
        />
      )}

      {activeModal === 'abdulSattar' && (
        <PhotoUploadModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Abdul Sattar Unar Photograph"
          subtitle="Director Portrait"
          currentPhotoUrl={resolvedAbdulSattarPhoto}
          onSavePhoto={onUpdateAbdulSattarPhoto}
        />
      )}

      {activeModal === 'khalil' && (
        <PhotoUploadModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Khalil Ahmed Unar Photograph"
          subtitle="Director Portrait"
          currentPhotoUrl={resolvedKhalilPhoto}
          onSavePhoto={onUpdateKhalilPhoto}
        />
      )}

      {activeModal === 'ghulamAbbas' && (
        <PhotoUploadModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Ghulam Abbas Unar Photograph"
          subtitle="Director & Operations Manager Portrait"
          currentPhotoUrl={resolvedGhulamAbbasPhoto}
          onSavePhoto={onUpdateGhulamAbbasPhoto}
        />
      )}
    </section>
  );
};
