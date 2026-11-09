import React, { useState } from 'react';
import { MessageCircle, X, Phone, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    {
      label: '🌾 1121 Kainat Rice Inquiry',
      msg: 'Assalam-o-Alaikum, I am inquiring about current availability and rates for 1121 Kainat Steam Rice.',
    },
    {
      label: '📋 Request Wholesale Rate Sheet',
      msg: 'Assalam-o-Alaikum, please share your current wholesale price list for all milled rice varieties.',
    },
    {
      label: '📦 Custom Bag Packaging & MOQ',
      msg: 'Assalam-o-Alaikum, I want to know about your 25kg/50kg custom brand packaging options.',
    },
    {
      label: '🏭 Schedule Sijawal Plant Visit',
      msg: 'Assalam-o-Alaikum, I would like to visit Khan Muhammad Rice Mills on Shah Kareem Main Road, Sijawal.',
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = `https://wa.me/923003942922?text=${encodeURIComponent(customMsg.trim())}`;
    window.open(url, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  const openWhatsAppWith = (text: string) => {
    const url = `https://wa.me/923003942922?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Card Header */}
          <div className="bg-[#174C35] text-white p-3.5 sm:p-4 flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-2.5 sm:gap-3 relative z-10 min-w-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#D6AA52] flex items-center justify-center font-bold text-xs sm:text-sm text-[#174C35] shadow-md ring-2 ring-white">
                  GA
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full ring-2 ring-white" />
              </div>
              <div className="min-w-0">
                <div className="font-serif font-bold text-xs sm:text-sm text-white truncate">
                  Ghulam Abbas Unar
                </div>
                <div className="text-[10px] sm:text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                  <span className="truncate">Wholesale Support</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Body */}
          <div className="p-3.5 sm:p-4 bg-slate-50 space-y-3 max-h-[340px] sm:max-h-[380px] overflow-y-auto">
            {/* Incoming Welcome Message */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-[#174C35]">
                Assalam-o-Alaikum!
              </p>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                Welcome to Khan Muhammad Rice Mills, Sijawal. Select a topic below to chat directly with us on WhatsApp.
              </p>
              <div className="text-[10px] text-slate-400 text-right pt-0.5">Sijawal Plant · Live</div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block px-1">
                Quick Inquiries:
              </span>
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openWhatsAppWith(item.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#174C35]/5 border border-slate-200 hover:border-[#174C35]/30 text-xs font-medium text-slate-700 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate text-[11px] sm:text-xs">{item.label}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>

            {/* Direct Phone Call Banner */}
            <a
              href="tel:+923003942922"
              className="w-full py-2 px-3 rounded-xl bg-[#D6AA52]/10 hover:bg-[#D6AA52]/20 border border-[#D6AA52]/30 text-xs font-semibold text-[#174C35] flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6AA52] shrink-0" />
              <span className="truncate">Call: +92 300 3942922</span>
            </a>
          </div>

          {/* Custom Message Input */}
          <form onSubmit={handleSendCustom} className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your inquiry..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#174C35] bg-slate-50 min-w-0"
            />
            <button
              type="submit"
              disabled={!customMsg.trim()}
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white disabled:opacity-40 transition-opacity cursor-pointer shrink-0"
              aria-label="Send custom inquiry to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 sm:gap-2.5 p-3 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ring-4 ring-[#25D366]/20"
        aria-label="Toggle WhatsApp Chat Widget"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>

        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />

        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {isOpen ? 'Close Chat' : 'WhatsApp'}
        </span>
      </button>
    </div>
  );
};
