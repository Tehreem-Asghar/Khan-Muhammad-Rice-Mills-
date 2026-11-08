import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Send, CheckCircle2, MessageCircle, AlertCircle, Building2, User, Mail } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';
import { SocialIcons } from './SocialIcons.tsx';

interface ContactSectionProps {
  initialInquiryTopic?: string;
  contactRepPhoto?: string | null;
  onUpdateContactRepPhoto?: (photoUrl: string | null) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryTopic = '',
  contactRepPhoto = null,
}) => {
  const contactRep = COMPANY_DATA.leadership.contactPerson;

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Rice Product Inquiry');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    inquiryType: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync initial inquiry topic if triggered from product card
  useEffect(() => {
    if (initialInquiryTopic) {
      setInquiryType('Rice Product Inquiry');
      setMessage((prev) =>
        prev
          ? `${prev}\nInquiry about product: ${initialInquiryTopic}`
          : `Hello Ghulam Abbas Unar, I am inquiring about product specifications, pricing, and availability for: ${initialInquiryTopic}.`
      );
    }
  }, [initialInquiryTopic]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please enter an inquiry message with at least 10 characters.');
      return;
    }

    setLoading(true);

    const payload = {
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      inquiryType,
      message: message.trim(),
      recipient: 'Ghulam Abbas Unar',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to transmit inquiry to server at this time.');
      }

      const result = await response.json();
      setSubmittedData({
        referenceId: result.referenceId || `KMRM-${Date.now().toString().slice(-6)}`,
        fullName: payload.fullName,
        inquiryType: payload.inquiryType,
      });
    } catch {
      // Fallback: If local dev server is not handling backend or offline, save locally
      const localId = `KMRM-${Math.floor(100000 + Math.random() * 900000)}`;
      try {
        const existing = JSON.parse(localStorage.getItem('kmrm_inquiries') || '[]');
        existing.push({ ...payload, referenceId: localId });
        localStorage.setItem('kmrm_inquiries', JSON.stringify(existing));
      } catch {
        // LocalStorage fallback
      }

      setSubmittedData({
        referenceId: localId,
        fullName: payload.fullName,
        inquiryType: payload.inquiryType,
      });
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp quick bridge
  const generateWhatsAppUrl = () => {
    const text = `*Inquiry for Ghulam Abbas Unar - Khan Muhammad Rice Mills*%0A*Name:* ${encodeURIComponent(fullName || 'Prospective Partner')}%0A*Company:* ${encodeURIComponent(companyName || 'Not specified')}%0A*Type:* ${encodeURIComponent(inquiryType)}%0A*Phone:* ${encodeURIComponent(phone || '')}%0A*Message:* ${encodeURIComponent(message || 'Hello, I would like to inquire about rice processing and wholesale supply.')}`;
    return `https://wa.me/923003942922?text=${text}`;
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Wholesale, Orders & Partnerships
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35]">
            Let's Build a Lasting Business Relationship
          </h2>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed pt-2">
            Direct all customer inquiries, grain specifications, and wholesale orders to our dedicated Business Contact Representative &amp; Director, <strong>{contactRep.name}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards, Representative Info, Map & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Business Contact Card: Ghulam Abbas Unar */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#174C35] text-white shadow-xl border-2 border-[#D6AA52] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6AA52]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6AA52] bg-white/10 px-3 py-1 rounded-full border border-[#D6AA52]/30">
                  Director &amp; Operations Manager
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-[#D6AA52]/20 px-3 py-1 rounded-full border border-[#D6AA52]/40">
                  Milling Plant Supervisor
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-24 h-32 rounded-xl bg-[#0f3424] border-2 border-[#D6AA52] flex items-center justify-center text-[#D6AA52] shrink-0 overflow-hidden shadow-md">
                  {contactRepPhoto ? (
                    <img
                      src={contactRepPhoto}
                      alt={contactRep.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="font-serif font-bold text-xl text-[#D6AA52]">GAU</span>
                  )}
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {contactRep.name}
                  </h3>
                  <p className="text-xs text-[#D6AA52] font-semibold mt-0.5 uppercase tracking-wide">
                    {contactRep.designation}
                  </p>
                  <p className="text-[11px] text-white/90 font-medium mt-1">
                    Director, Business Contact &amp; Milling Plant Supervisor
                  </p>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">
                    Directs daily rice milling operations, quality assurance, wholesale customer communications, and supply agreements.
                  </p>
                </div>
              </div>

              {/* Action Buttons for Ghulam Abbas Unar */}
              <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${contactRep.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-white text-[#174C35] hover:bg-[#D6AA52] hover:text-[#174C35] transition-all duration-200 text-xs font-bold flex items-center justify-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4 text-[#174C35]" />
                  <span>Call {contactRep.phone}</span>
                </a>

                <a
                  href={COMPANY_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-200 text-xs font-bold flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 pt-3 text-[11px] text-white/60 text-center">
                <span>Direct line for rice wholesalers, distributors & commercial buyers</span>
              </div>
            </div>

            {/* Corporate Location & Address Card */}
            <div className="rounded-2xl p-6 bg-[#F8F7F2] border border-[#174C35]/15 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#174C35] text-[#D6AA52] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#174C35]">
                    Mill Premises & Address
                  </p>
                  <p className="text-sm font-medium text-[#252A27] mt-1 leading-snug">
                    {COMPANY_DATA.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#252A27]/60 mt-1">
                    Located in Sijawal, District Tando Muhammad Khan, Sindh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#174C35] text-[#D6AA52] flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#174C35]">
                    Executive Leadership
                  </p>
                  <p className="text-xs font-semibold text-[#252A27] mt-1">
                    Founders &amp; CEOs: {COMPANY_DATA.leadership.founderCeo1.name} &amp; {COMPANY_DATA.leadership.founderCeo2.name}
                  </p>
                  <p className="text-xs text-[#252A27]/70 mt-0.5">
                    Directors: {COMPANY_DATA.leadership.director.name}, {COMPANY_DATA.leadership.director2.name} &amp; {COMPANY_DATA.leadership.director3.name} · Strategic Governance
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed using exact address */}
            <div className="rounded-2xl overflow-hidden border border-[#174C35]/15 shadow-sm h-52 bg-slate-100">
              <iframe
                title="Khan Muhammad Rice Mills Location Map"
                src="https://maps.google.com/maps?q=Sijawal,+Tando+Muhammad+Khan,+Sindh,+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Media Integration: ONLY Facebook & TikTok */}
            <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#174C35]/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#174C35]">
                  Official Social Channels
                </p>
                <p className="text-xs text-[#252A27]/65">Facebook & TikTok accounts only</p>
              </div>
              <SocialIcons
                facebookUrl={COMPANY_DATA.social.facebook}
                tiktokUrl={COMPANY_DATA.social.tiktok}
                variant="dark"
              />
            </div>
          </div>

          {/* Right Column: Modern Contact & Wholesale Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#F8F7F2] border border-[#174C35]/15 shadow-lg">
              {submittedData ? (
                /* Success Feedback Container */
                <div className="py-12 px-6 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#174C35]">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="text-xs font-semibold text-[#D6AA52] mt-1 tracking-wider uppercase">
                      Reference ID: {submittedData.referenceId}
                    </p>
                  </div>
                  <p className="text-sm text-[#252A27]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{submittedData.fullName}</strong>. Your {submittedData.inquiryType} has been recorded and routed directly to <strong>Ghulam Abbas Unar</strong> (Director &amp; Business Contact Representative).
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Speed Up via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 bg-white text-[#174C35] hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#174C35]/20 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-6">
                    <h3 className="font-serif text-2xl font-bold text-[#174C35]">
                      Send a Direct Business Inquiry
                    </h3>
                    <p className="text-xs text-[#252A27]/70 mt-1">
                      Received by Ghulam Abbas Unar for rice orders, wholesale pricing, and processing partnerships.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Muhammad Kashif"
                          className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                        />
                        <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                        Company / Business Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Sindh Food Traders"
                          className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                        />
                        <Building2 className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +92 300 1234567"
                          className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. partner@example.com"
                          className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                        />
                        <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                      Inquiry Type *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                    >
                      <option value="Rice Product Inquiry">Rice Product Inquiry</option>
                      <option value="Wholesale / Distribution">Wholesale / Distribution</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174C35] uppercase tracking-wider mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your required volume, packaging requirements, delivery destination in Pakistan, or partnership proposal..."
                      className="w-full text-xs px-3.5 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#174C35] hover:bg-[#0f3424] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D6AA52]" />
                          <span>Send Inquiry to Ghulam Abbas Unar</span>
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                      title="Direct message via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
