import React from 'react';
import { Palette, Smartphone, Briefcase, Flame, FolderKanban, Rocket, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ServicesProps {
  onConsultService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onConsultService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#dfc08f]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#c5a880]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#e2c99c]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#dfc08f]" />;
      case 'FolderKanban':
        return <FolderKanban className="w-6 h-6 text-[#c5a880]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#e2c99c]" />;
      default:
        return <Palette className="w-6 h-6 text-[#dfc08f]" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 relative bg-[#0e0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
            <span>Capabilities</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            Everything You Need to Build Your Online Presence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            From single-page high-converting landing pages to comprehensive multi-page business websites, each solution is engineered for speed, aesthetic appeal, and client conversions.
          </p>
        </div>

        {/* 6 Services Grid with subtle hover animations and clean glass styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/40 hover:bg-[#18191f] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-stone-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#dfc08f] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-stone-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Service highlights list */}
                <ul className="mt-5 space-y-2 border-t border-white/[0.05] pt-4">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-400">
                      <Check className="w-3.5 h-3.5 text-[#dfc08f] shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04]">
                <button
                  type="button"
                  onClick={() => onConsultService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dfc08f] group-hover:text-[#ebd0a3] hover:underline underline-offset-4 transition-colors"
                >
                  <span>Inquire about {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
