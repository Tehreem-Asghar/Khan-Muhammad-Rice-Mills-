import React from 'react';
import { CompanyLogo } from './CompanyLogo.tsx';
import { SocialIcons } from './SocialIcons.tsx';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface FooterProps {
  customLogoUrl?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Our Process', href: '#process' },
    { name: 'Quality Commitment', href: '#quality' },
    { name: 'Products Showcase', href: '#products' },
    { name: 'Business Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#174C35] text-white pt-16 pb-10 border-t border-[#D6AA52]/30 relative overflow-hidden">
      {/* Subtle decorative grain texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6AA52_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <CompanyLogo variant="light" customLogoUrl={customLogoUrl} />
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm mt-3">
              Khan Muhammad Rice Mills is an agricultural processing business in Sindh, Pakistan, committed to quality rice processing, careful handling, and long-term partnerships with wholesalers and distributors.
            </p>

            {/* Social Media Integration: Strictly Facebook and TikTok */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-wider text-[#D6AA52] font-semibold mb-2">
                Official Social Channels
              </p>
              <SocialIcons
                facebookUrl={COMPANY_DATA.social.facebook}
                tiktokUrl={COMPANY_DATA.social.tiktok}
                variant="light"
              />
            </div>
          </div>

          {/* Col 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#D6AA52] tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#D6AA52] transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Personnel & Roles (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#D6AA52] tracking-wide">
              Key Personnel
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-[#D6AA52] font-semibold text-[11px] uppercase">
                  Founders &amp; CEOs
                </p>
                <p className="font-serif text-white font-bold mt-0.5 text-xs">
                  {COMPANY_DATA.leadership.founderCeo1.name} &amp; {COMPANY_DATA.leadership.founderCeo2.name}
                </p>
                <p className="text-white/60 text-[10px] mt-0.5">
                  Directors: {COMPANY_DATA.leadership.director.name}, {COMPANY_DATA.leadership.director2.name} &amp; {COMPANY_DATA.leadership.director3.name}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-[#D6AA52] font-semibold text-[11px] uppercase">
                  Operations & Inquiries
                </p>
                <p className="font-serif text-white font-bold mt-0.5">
                  {COMPANY_DATA.leadership.contactPerson.name}
                </p>
                <p className="text-white/70 text-[10px]">Mill Operations Manager & Inquiries</p>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#D6AA52] tracking-wide">
              Mill Premises & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6AA52] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DATA.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6AA52] shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.contact.phoneClean}`}
                  className="hover:text-[#D6AA52] transition-colors font-medium"
                >
                  {COMPANY_DATA.contact.phoneFormatted}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors text-xs font-semibold shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Representative</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© 2026 Khan Muhammad Rice Mills. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/50">
              Sijawal, Tando Muhammad Khan, Sindh, Pakistan
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#D6AA52] hover:text-[#174C35] text-white transition-colors cursor-pointer flex items-center gap-1.5 text-[11px]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
