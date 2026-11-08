import React, { useState } from 'react';
import { Package, ArrowUpRight, Check, Tag } from 'lucide-react';
import { INITIAL_PRODUCTS, ProductItem } from '../data/companyData.ts';

interface ProductsSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForInquiry,
}) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Milled Rice', 'Wholesale Lots', 'Raw Paddy', 'Processing Services'];

  const filteredProducts =
    filter === 'All'
      ? INITIAL_PRODUCTS
      : INITIAL_PRODUCTS.filter((p) => p.category === filter);

  const handleInquire = (product: ProductItem) => {
    onSelectProductForInquiry(product.name);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-[#F8F7F2] relative border-t border-[#174C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6AA52]">
            Wholesale & Agricultural Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#174C35]">
            Our Rice Products
          </h2>
          <div className="w-16 h-1 bg-[#D6AA52] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed pt-2">
            Explore our range of milled rice, commercial wholesale packaging, and agricultural processing capabilities. Each batch is prepared with strict attention to grain care.
          </p>
        </div>

        {/* Filter Bar (Interactive Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-[#174C35] text-white shadow-md'
                  : 'bg-white text-[#252A27]/70 hover:text-[#174C35] hover:bg-white/80 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#174C35]/15 shadow-sm hover:shadow-xl hover:border-[#D6AA52] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#174C35]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {product.category}
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#D6AA52] tracking-wider uppercase flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {product.variety}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#174C35] mt-1 group-hover:text-[#0f3424] transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#252A27]/75 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-start gap-1.5 text-xs text-[#252A27]/85">
                    <Package className="w-3.5 h-3.5 text-[#174C35] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium leading-tight">
                      {product.packaging}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleInquire(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F8F7F2] hover:bg-[#174C35] text-[#174C35] hover:text-white border border-[#174C35]/20 hover:border-[#174C35] text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Information</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Advisory Note */}
        <div className="mt-12 text-center text-xs text-[#252A27]/60">
          <span>Custom lot sizes and bulk packaging options are available upon inquiry with our Business Representative.</span>
        </div>
      </div>
    </section>
  );
};
