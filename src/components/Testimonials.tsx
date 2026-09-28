import React from 'react';
import { Quote, MessageSquareDashed } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 relative bg-[#0b0c0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
            <span>Feedback</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            Client Feedback & Demonstrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Illustrative feedback representations showing how client testimonials and project results are presented upon completion.
          </p>
        </div>

        {/* Testimonials Grid with explicit "Sample Testimonial" labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-[#dfc08f]/80" />
                  <span className="text-[11px] font-mono text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-stone-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="text-sm font-semibold text-white">
                  {item.clientName}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-0.5">
                  <span>{item.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#dfc08f]">{item.company}</span>
                </div>
                <p className="text-[11px] text-stone-400 mt-1">
                  Package: {item.projectType}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner helper note for easy replacement */}
        <div className="mt-8 p-4 rounded-xl bg-stone-900/50 border border-dashed border-white/10 flex items-center justify-between gap-3 text-xs text-stone-400 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <MessageSquareDashed className="w-4 h-4 text-[#dfc08f] shrink-0" />
            <span>Website Owner Note: Easily replace sample testimonials in <code className="text-[#dfc08f] font-mono">src/config/siteConfig.ts</code> with your verified client reviews.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
