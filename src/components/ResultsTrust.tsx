import React from 'react';
import { ShieldCheck, MonitorSmartphone, FileSpreadsheet, MessageCircle, Sparkles, Network } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ResultsTrust: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-[#dfc08f]" />;
      case 1:
        return <MonitorSmartphone className="w-5 h-5 text-[#c5a880]" />;
      case 2:
        return <FileSpreadsheet className="w-5 h-5 text-[#e2c99c]" />;
      case 3:
        return <MessageCircle className="w-5 h-5 text-[#dfc08f]" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-[#c5a880]" />;
      case 5:
        return <Network className="w-5 h-5 text-[#e2c99c]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#dfc08f]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 relative bg-[#0e0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
            <span>Client Expectations</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Measurable Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            What You Can Expect From Our Websites
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            No empty claims or inflated vanity metrics. Here are the core foundations built into every website we deliver.
          </p>
        </div>

        {/* 6 Grid expectations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.resultsExpectations.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/35 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-900 border border-white/[0.08] flex items-center justify-center mb-5">
                {getIcon(index)}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
