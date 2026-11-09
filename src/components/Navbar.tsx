import React, { useState, useEffect } from 'react';
import { CompanyLogo } from './CompanyLogo.tsx';
import { SocialIcons } from './SocialIcons.tsx';
import { Menu, X, PhoneCall, Video } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface NavbarProps {
  customLogoUrl?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ customLogoUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Batch Calculator', href: '#estimator' },
    { name: 'Grain Specs', href: '#comparison' },
    { name: 'Process', href: '#process' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Gallery & Videos', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full overflow-hidden ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#174C35]/10 py-2 sm:py-3'
            : 'bg-[#174C35]/95 backdrop-blur-sm text-white py-2 sm:py-3.5 border-b border-white/10'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1 sm:gap-4 w-full">
            {/* Zone 1: Brand Wordmark / Full Logo (Khan Muhammad Rice Mills) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="shrink-0 flex items-center min-w-0"
              aria-label="Khan Muhammad Rice Mills Home"
            >
              <CompanyLogo
                variant={isScrolled ? 'dark' : 'light'}
                customLogoUrl={customLogoUrl}
                size="sm"
              />
            </a>

            {/* Zone 2: Navigation Links (Desktop only >= xl) */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-[13px] font-medium tracking-normal shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap hover:text-[#D6AA52] relative py-1 ${
                    isScrolled ? 'text-[#252A27]' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Desktop Actions (>= sm screens) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Official Social Icons (Facebook & TikTok) */}
              <SocialIcons
                facebookUrl={COMPANY_DATA.social.facebook}
                tiktokUrl={COMPANY_DATA.social.tiktok}
                variant={isScrolled ? 'dark' : 'light'}
                size="md"
              />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm flex items-center gap-1.5 ${
                  isScrolled
                    ? 'bg-[#174C35] text-white hover:bg-[#0f3424]'
                    : 'bg-[#D6AA52] text-[#174C35] hover:bg-[#e5c378]'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>

              {/* Hamburger for tablet (sm to xl) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`xl:hidden p-2 rounded-xl transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-[#174C35] hover:bg-[#174C35]/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Zone 4: Mobile Header Actions (< sm screens, fits 320px perfectly) */}
            <div className="flex sm:hidden items-center gap-1 shrink-0">
              {/* Official Facebook & TikTok Icons in mobile header */}
              <SocialIcons
                facebookUrl={COMPANY_DATA.social.facebook}
                tiktokUrl={COMPANY_DATA.social.tiktok}
                variant={isScrolled ? 'dark' : 'light'}
                size="sm"
              />

              {/* Direct Quick Phone Call */}
              <a
                href="tel:+923003942922"
                className="w-7 h-7 rounded-md bg-[#D6AA52] text-[#174C35] flex items-center justify-center transition-transform active:scale-95 shadow-sm shrink-0"
                aria-label="Call Khan Muhammad Rice Mills"
                title="Call Mill Operations"
              >
                <PhoneCall className="w-3 h-3" />
              </a>

              {/* Mobile Menu Hamburger - Always 100% visible & never cut off */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                  isScrolled
                    ? 'text-[#174C35] hover:bg-[#174C35]/10 border border-[#174C35]/20'
                    : 'text-white hover:bg-white/10 border border-white/20'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-[280px] bg-white shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                <CompanyLogo variant="dark" customLogoUrl={customLogoUrl} size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#252A27] hover:text-[#174C35] hover:bg-slate-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Official Social Video Channels Banner in Drawer */}
              <div className="mt-3.5 p-3 rounded-2xl bg-[#174C35]/5 border border-[#174C35]/15 space-y-2">
                <div className="text-[10px] uppercase font-bold text-[#D6AA52] tracking-wider flex items-center gap-1">
                  <Video className="w-3 h-3 text-[#D6AA52]" />
                  <span>Official Media &amp; Videos:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_DATA.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 rounded-lg bg-black text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-slate-800 transition-colors"
                  >
                    <span>TikTok Reels</span>
                  </a>
                  <a
                    href={COMPANY_DATA.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#1877F2] text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="py-2.5 flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-[#252A27] hover:bg-[#174C35]/5 hover:text-[#174C35] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2.5">
              <div className="text-[11px] text-[#252A27]/80">
                <p className="font-semibold text-[#174C35]">Business Contact:</p>
                <p className="mt-0.5">Ghulam Abbas Unar: +92 300 3942922</p>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full block text-center py-2.5 bg-[#174C35] text-white rounded-lg text-xs font-semibold uppercase tracking-wider shadow"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
