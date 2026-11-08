import React, { useState, useEffect } from 'react';
import { CompanyLogo } from './CompanyLogo.tsx';
import { SocialIcons } from './SocialIcons.tsx';
import { Menu, X, PhoneCall } from 'lucide-react';
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
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Our Process', href: '#process' },
    { name: 'Quality', href: '#quality' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery & Videos', href: '#gallery' },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#174C35]/10 py-3'
            : 'bg-[#174C35]/95 backdrop-blur-sm text-white py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="shrink-0"
              aria-label="Khan Muhammad Rice Mills Home"
            >
              <CompanyLogo
                variant={isScrolled ? 'dark' : 'light'}
                customLogoUrl={customLogoUrl}
              />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-normal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#D6AA52] relative py-1 ${
                    isScrolled
                      ? 'text-[#252A27]'
                      : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action + Social Media (Facebook & TikTok ONLY) */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <SocialIcons
                variant={isScrolled ? 'dark' : 'light'}
                facebookUrl={COMPANY_DATA.social.facebook}
                tiktokUrl={COMPANY_DATA.social.tiktok}
                className="hidden xl:flex"
              />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm flex items-center gap-2 ${
                  isScrolled
                    ? 'bg-[#174C35] text-white hover:bg-[#0f3424] hover:shadow'
                    : 'bg-[#D6AA52] text-[#174C35] hover:bg-[#e5c378] hover:shadow'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Get in Touch
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D6AA52] text-[#174C35]"
              >
                Inquire
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-[#174C35] hover:bg-[#174C35]/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <CompanyLogo variant="dark" customLogoUrl={customLogoUrl} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#252A27] hover:text-[#174C35]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#252A27] hover:bg-[#174C35]/5 hover:text-[#174C35] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="text-xs text-[#252A27]/70">
                <p className="font-semibold text-[#174C35]">Business Contact:</p>
                <p className="mt-0.5">Ghulam Abbas Unar: +923003942922</p>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full block text-center py-3 bg-[#174C35] text-white rounded-lg text-xs font-semibold uppercase tracking-wider shadow"
              >
                Get in Touch
              </a>

              {/* Socials: Strictly Facebook and TikTok */}
              <div className="flex justify-center pt-2">
                <SocialIcons
                  facebookUrl={COMPANY_DATA.social.facebook}
                  tiktokUrl={COMPANY_DATA.social.tiktok}
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
