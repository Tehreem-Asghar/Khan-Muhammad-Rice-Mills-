import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData.ts';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  badge?: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'moq',
    question: 'What is the Minimum Order Quantity (MOQ) for wholesale purchase?',
    badge: 'Wholesale & Logistics',
    answer:
      'For domestic wholesale orders across Sindh and Pakistan, our typical MOQ starts at 50 to 100 bags (2.5 to 5.0 Metric Tons). For export-ready ocean container bookings to Karachi Port (KPT / Port Qasim), standard order volume is one 20ft Full Container Load (approx. 24 to 26 Metric Tons). Smaller trial lots can be coordinated directly with our operations manager.',
  },
  {
    id: 'packaging',
    question: 'Can you customize bag packaging with our own private brand logo?',
    badge: 'Custom Packaging',
    answer:
      'Yes, absolutely. We support complete private labeling and OEM packaging for domestic brands, supermarket chains, and overseas importers. We supply 50 kg PP woven bags, 25 kg non-woven fabric bags, and 10 kg / 5 kg laminated retail pouches printed with your custom artwork, nutritional labeling, and barcode specifications.',
  },
  {
    id: 'quality',
    question: 'How do you guarantee grain purity and eliminate broken/chalky grains?',
    badge: 'Milling Standards',
    answer:
      'Our processing line utilizes multi-pass closed-loop cleaning: vibrating pre-cleaners, specific gravity destoners, rubber roller hullers, precision thickness and length classifiers, mist polishing cones, and high-resolution optical color sorters that eject discolored, pecky, or immature kernels at microsecond speeds. Broken ratios are strictly maintained under 1.5% to 2.0% for premium lots.',
  },
  {
    id: 'logistics',
    question: 'How are delivery and dispatch arranged across Pakistan and to ports?',
    badge: 'Logistics',
    answer:
      'We have established agreements with heavy freight transport networks operating out of Tando Muhammad Khan and Hyderabad. We arrange safe transit to Karachi Port Qasim, KPT terminals, and major commodity markets throughout Punjab, Khyber Pakhtunkhwa, and Balochistan. Export customs inspection and fumigation documentation are assisted upon request.',
  },
  {
    id: 'visit',
    question: 'Can prospective buyers visit the rice mill in Sijawal in person?',
    badge: 'Transparency',
    answer:
      'We welcome buyers, export consolidators, and agricultural traders to inspect our milling line, aeration warehouses, and quality inspection lab on Shah Kareem Main Road, Sijawal, Tando Muhammad Khan. Please coordinate with Ghulam Abbas Unar (+92 300 3942922) prior to arrival to schedule a guided facility tour.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('moq');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F7F2] relative border-t border-[#174C35]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174C35]/10 text-[#174C35] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#D6AA52]" />
            <span>Commercial &amp; Trade Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#252A27]/75">
            Essential answers on order thresholds, packaging customization, dispatch logistics, and quality assurance.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#174C35]/15 overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1">
                    {faq.badge && (
                      <span className="text-[10px] font-bold text-[#D6AA52] uppercase tracking-wider">
                        {faq.badge}
                      </span>
                    )}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#174C35]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#174C35] text-white rotate-180' : 'bg-slate-100 text-[#174C35]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#252A27]/80 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need additional clarification box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#D6AA52]/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#D6AA52]/20 border border-[#D6AA52]/40 flex items-center justify-center text-[#D6AA52] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif font-bold text-sm text-[#174C35]">Have a specific commercial tender or container requirement?</div>
              <div className="text-xs text-slate-500">Speak directly with our Operations Director Ghulam Abbas Unar.</div>
            </div>
          </div>
          <a
            href={COMPANY_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#174C35] hover:bg-[#113826] text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-md"
          >
            Ask via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
