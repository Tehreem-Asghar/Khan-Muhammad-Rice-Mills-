/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StatsCounter } from './components/StatsCounter.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { ProcessingSection } from './components/ProcessingSection.tsx';
import { QualitySection } from './components/QualitySection.tsx';
import { GrainComparison } from './components/GrainComparison.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { RiceEstimator } from './components/RiceEstimator.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TikTokVideoShowcase } from './components/TikTokVideoShowcase.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { WhatsAppWidget } from './components/WhatsAppWidget.tsx';
import { Footer } from './components/Footer.tsx';
import { COMPANY_DATA } from './data/companyData.ts';

export default function App() {
  // Both CEOs in One Frame Photo State
  const [bothCeosPhoto, setBothCeosPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_both_ceos_photo') ||
        COMPANY_DATA.leadership.bothCeosPhotoUrl ||
        '/assets/aistudio/both_ceos_in_one_frame.jpg'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.bothCeosPhotoUrl ||
        '/assets/aistudio/both_ceos_in_one_frame.jpg'
      );
    }
  });

  // Director 1 (Abdul Sattar Unar) Photo State
  const [abdulSattarPhoto, setAbdulSattarPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_abdul_sattar_photo') ||
        COMPANY_DATA.leadership.director?.photoUrl ||
        '/assets/aistudio/Professional_Portrait_in_a_Navy_Three-Piece_Suit_cebb4b9e.png'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.director?.photoUrl ||
        '/assets/aistudio/Professional_Portrait_in_a_Navy_Three-Piece_Suit_cebb4b9e.png'
      );
    }
  });

  // Director 2 (Khalil Ahmed Unar) Photo State
  const [khalilPhoto, setKhalilPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_khalil_photo') ||
        COMPANY_DATA.leadership.director2?.photoUrl ||
        '/assets/aistudio/Professional_Navy_Suit_Portrait_8a3b8f39.png'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.director2?.photoUrl ||
        '/assets/aistudio/Professional_Navy_Suit_Portrait_8a3b8f39.png'
      );
    }
  });

  // Founder CEO 1 (Atta Muhammad Unar) Photo State
  const [ceoPhoto, setCeoPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_ceo_photo') ||
        COMPANY_DATA.leadership.founderCeo1?.photoUrl ||
        '/assets/aistudio/Professional_Portrait_in_a_Navy_Suit_047b8ef2.png'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.founderCeo1?.photoUrl ||
        '/assets/aistudio/Professional_Portrait_in_a_Navy_Suit_047b8ef2.png'
      );
    }
  });

  // Founder CEO 2 (Naresh Kumar) Photo State
  const [nareshKumarPhoto, setNareshKumarPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_naresh_kumar_photo') ||
        COMPANY_DATA.leadership.founderCeo2?.photoUrl ||
        '/assets/aistudio/Polished_Three-Piece_Suit_Portrait_381bb90f.png'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.founderCeo2?.photoUrl ||
        '/assets/aistudio/Polished_Three-Piece_Suit_Portrait_381bb90f.png'
      );
    }
  });

  // Contact Rep (Ghulam Abbas Unar) Photo State
  const [contactRepPhoto, setContactRepPhoto] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('kmrm_contact_rep_photo') ||
        COMPANY_DATA.leadership.contactPerson?.photoUrl ||
        '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png'
      );
    } catch {
      return (
        COMPANY_DATA.leadership.contactPerson?.photoUrl ||
        '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png'
      );
    }
  });

  // Active Inquiry Topic (Auto-filled into Contact Form)
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  const handleUpdateBothCeosPhoto = (newPhotoUrl: string | null) => {
    setBothCeosPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_both_ceos_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_both_ceos_photo');
      }
    } catch {
      // Ignore
    }
  };

  const handleUpdateAbdulSattarPhoto = (newPhotoUrl: string | null) => {
    setAbdulSattarPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_abdul_sattar_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_abdul_sattar_photo');
      }
    } catch {
      // Ignore
    }
  };

  const handleUpdateKhalilPhoto = (newPhotoUrl: string | null) => {
    setKhalilPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_khalil_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_khalil_photo');
      }
    } catch {
      // Ignore
    }
  };

  const handleUpdateContactRepPhoto = (newPhotoUrl: string | null) => {
    setContactRepPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_contact_rep_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_contact_rep_photo');
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#252A27] font-sans selection:bg-[#D6AA52]/30 selection:text-[#174C35]">
      {/* Sticky Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Live Operational Statistics Bar */}
        <StatsCounter />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Meet Our Leadership */}
        <LeadershipSection
          bothCeosPhoto={bothCeosPhoto}
          onUpdateBothCeosPhoto={handleUpdateBothCeosPhoto}
          abdulSattarPhoto={abdulSattarPhoto}
          onUpdateAbdulSattarPhoto={handleUpdateAbdulSattarPhoto}
          khalilPhoto={khalilPhoto}
          onUpdateKhalilPhoto={handleUpdateKhalilPhoto}
          ghulamAbbasPhoto={contactRepPhoto}
          onUpdateGhulamAbbasPhoto={handleUpdateContactRepPhoto}
        />

        {/* 5. Products Section */}
        <ProductsSection onSelectProductForInquiry={setInquiryTopic} />

        {/* 6. Interactive Rice Price & Volume Calculator */}
        <RiceEstimator
          onApplyToInquiry={(variety, details) => {
            setInquiryTopic(`${variety} (${details})`);
          }}
        />

        {/* 7. Rice Processing Section (5 Stages) */}
        <ProcessingSection />

        {/* 8. Quality Commitment Section */}
        <QualitySection />

        {/* 9. Interactive Grain Specification Comparison */}
        <GrainComparison />

        {/* 10. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 11. Photo & Video Gallery Section */}
        <GallerySection />

        {/* 12. Official TikTok Video Reels Showcase (@khanricemill) */}
        <TikTokVideoShowcase />

        {/* 13. Wholesale FAQ Accordion */}
        <FaqSection />

        {/* 14. Contact Section (G Abbas Unar - Business Contact Representative) */}
        <ContactSection
          initialInquiryTopic={inquiryTopic}
          contactRepPhoto={contactRepPhoto}
          onUpdateContactRepPhoto={handleUpdateContactRepPhoto}
        />
      </main>

      {/* 15. Corporate Footer */}
      <Footer />

      {/* 16. Floating WhatsApp & Quick Action Button */}
      <WhatsAppWidget />
    </div>
  );
}
