import React from 'react';
import { MessagesSquare, Compass, PenTool, Code2, CheckCircle2, Rocket } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessagesSquare className="w-5 h-5 text-[#dfc08f]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#c5a880]" />;
      case 2:
        return <PenTool className="w-5 h-5 text-[#e2c99c]" />;
      case 3:
        return <Code2 className="w-5 h-5 text-[#dfc08f]" />;
      case 4:
        return <CheckCircle2 className="w-5 h-5 text-[#c5a880]" />;
      case 5:
        return <Rocket className="w-5 h-5 text-[#e2c99c]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#dfc08f]" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-20 relative bg-[#0e0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
            <span>Workflow</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Step-by-step</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
            Our Website Creation Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            A clear, collaborative 6-stage roadmap from initial concept discussion to final go-live deployment.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.processSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/35 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-white/[0.08] flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-stone-700 select-none">
                    {item.step}
                  </span>
                </div>

                <div className="text-xs font-medium text-[#dfc08f] font-mono mb-1.5">
                  {item.timeline}
                </div>

                <h3 className="text-xl font-display font-bold text-white">
                  {item.step} — {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-stone-400">
                <span>Phase {index + 1} of 6</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfc08f]/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
