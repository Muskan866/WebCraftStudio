import React from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PricingProps {
  onSelectPackage: (packageId: 'basic' | 'premium') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-14 sm:py-20 relative bg-[#0b0c0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
            <span>Transparent Pricing</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>No Hidden Surprises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            Simple Packages for Every Business Stage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Clear investment tiers tailored to your goals. Whether launching a clean service presence or an advanced multi-page brand platform.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {siteConfig.pricingPackages.map((pkg) => {
            const isPremium = pkg.id === 'premium';
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isPremium
                    ? 'bg-gradient-to-b from-[#1b1915] to-[#121316] border-2 border-[#c5a880]/60 shadow-2xl shadow-stone-950/70 ring-1 ring-[#c5a880]/30'
                    : 'bg-[#121316] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Most Popular Label */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] rounded-full shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1">
                        Tailored website deployment
                      </p>
                    </div>
                  </div>

                  {/* Pricing display with mandatory "Starting from" wording */}
                  <div className="mt-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight tabular-nums">
                        {pkg.startingPrice}
                      </span>
                    </div>
                    <p className="text-xs text-[#dfc08f]/90 mt-1.5 font-medium">
                      One-time project investment · Deployment support included
                    </p>
                  </div>

                  {/* Suitable for list */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                      Best suited for:
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-stone-300">
                      {pkg.suitableFor.map((item, idx) => (
                        <span key={idx} className="inline-flex items-center">
                          <span>{item}</span>
                          {idx < pkg.suitableFor.length - 1 && (
                            <span aria-hidden="true" className="ml-2 text-stone-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                      Included capabilities:
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#dfc08f]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 ${
                      isPremium
                        ? 'text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] shadow-lg shadow-amber-950/40 focus-visible:ring-[#c5a880]'
                        : 'text-white bg-stone-800 hover:bg-stone-700 border border-white/10 hover:border-white/20 focus-visible:ring-stone-400'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Pricing Disclaimer Note */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 p-3 sm:px-5 rounded-xl bg-stone-900/80 border border-white/[0.06] text-xs text-stone-300">
            <HelpCircle className="w-4 h-4 text-[#dfc08f] shrink-0" />
            <p className="leading-relaxed">
              Final pricing may vary depending on website requirements, number of pages, integrations and custom features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
