/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { ProcessingSection } from './components/ProcessingSection.tsx';
import { QualitySection } from './components/QualitySection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TikTokVideoShowcase } from './components/TikTokVideoShowcase.tsx';
import { ContactSection } from './components/ContactSection.tsx';
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

  // Founder & CEO (Atta Muhammad Unar) Photo State initialized with user's uploaded photograph
  const [ceoPhoto, setCeoPhoto] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('kmrm_ceo_photo');
      if (saved && !saved.includes('WhatsApp_Image_2026-11-05')) {
        return saved;
      }
      return COMPANY_DATA.leadership.founderCeo1.photoUrl;
    } catch {
      return COMPANY_DATA.leadership.founderCeo1.photoUrl;
    }
  });

  // Founder & CEO (Naresh Kumar) Photo State initialized with user's uploaded photograph
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

  // Director 3 & Operations Lead (Ghulam Abbas Unar) Photo State initialized with studio portrait
  const [contactRepPhoto, setContactRepPhoto] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('kmrm_contact_rep_photo');
      if (saved && !saved.includes('WhatsApp_Image_2026-11-03')) {
        return saved;
      }
      return COMPANY_DATA.leadership.contactPerson.photoUrl;
    } catch {
      return COMPANY_DATA.leadership.contactPerson.photoUrl;
    }
  });

  // Selected Product inquiry transfer
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  // Save to localStorage when updated
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

  const handleUpdateCeoPhoto = (newPhotoUrl: string | null) => {
    setCeoPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_ceo_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_ceo_photo');
      }
    } catch {
      // Ignore quota errors
    }
  };

  const handleUpdateNareshKumarPhoto = (newPhotoUrl: string | null) => {
    setNareshKumarPhoto(newPhotoUrl);
    try {
      if (newPhotoUrl) {
        localStorage.setItem('kmrm_naresh_kumar_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('kmrm_naresh_kumar_photo');
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

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Meet Our Leadership (Both CEOs in One Frame, and Directors) */}
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

        {/* 4. Rice Processing Section (5 Stages) */}
        <ProcessingSection />

        {/* 6. Quality Commitment Section */}
        <QualitySection />

        {/* 7. Products Section */}
        <ProductsSection onSelectProductForInquiry={setInquiryTopic} />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 9. Photo & Video Gallery Section */}
        <GallerySection />

        {/* 10. Official TikTok Video Reels Showcase (@khanricemill) */}
        <TikTokVideoShowcase />

        {/* 11. Contact Section (G Abbas Unar - Business Contact Representative) */}
        <ContactSection
          initialInquiryTopic={inquiryTopic}
          contactRepPhoto={contactRepPhoto}
          onUpdateContactRepPhoto={handleUpdateContactRepPhoto}
        />
      </main>

      {/* 11. Corporate Footer */}
      <Footer />
    </div>
  );
}
