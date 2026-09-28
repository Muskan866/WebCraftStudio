import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Laptop, Smartphone, Sparkles, CheckCircle2, ShieldCheck, Zap, Eye } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onGetStartedClick: () => void;
  onViewWorkClick: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onViewWorkClick, onSelectProject }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const currentProject = siteConfig.projects[activeProjectIndex] || siteConfig.projects[0];

  return (
    <section
      id="home"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-radial-[at_top_center] from-[#1c1d22] via-[#0b0c0e] to-[#0b0c0e]"
    >
      {/* Subtle ambient background glow - formal warm champagne */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#b89558]/12 to-[#8c703b]/8 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#c5a880]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          {/* Subtle top kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#dfc08f] mb-4 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfc08f] animate-pulse" />
            <span>Professional Web Development Studio</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400">Packages from ₹8,000</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            {siteConfig.heroHeadline}
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal text-balance">
            {siteConfig.heroSubtext}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onGetStartedClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] rounded-xl shadow-lg shadow-stone-950/40 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
            >
              <span>Get Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onViewWorkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-800/80 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Four Trust Indicators in a clean, compact single row */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-300">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#dfc08f]" />
              <strong className="font-semibold text-white">Modern Design</strong>
            </span>
            <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#c5a880]" />
              <strong className="font-semibold text-white">Mobile Responsive</strong>
            </span>
            <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#e2c99c]" />
              <strong className="font-semibold text-white">Fast & Reliable</strong>
            </span>
            <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#dfc08f]" />
              <strong className="font-semibold text-white">Business Focused</strong>
            </span>
          </div>
        </div>

        {/* Essential Portfolio Front-and-Center Preview Showcase */}
        <div className="relative max-w-5xl mx-auto mt-4">
          <div className="rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm">
            {/* Quick Project Select Tabs directly in the preview frame */}
            <div className="bg-[#121316] rounded-t-xl px-3 sm:px-4 py-2.5 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#dfc08f]/80 inline-block" />
                <span className="text-[11px] text-stone-400 font-mono ml-2 hidden sm:inline">
                  webcraftstudio.example/showcase/{currentProject.id}
                </span>
              </div>

              {/* Quick Project Pill Selector */}
              <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                {siteConfig.projects.slice(0, 4).map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors whitespace-nowrap ${
                      activeProjectIndex === idx
                        ? 'bg-[#c5a880]/20 text-[#dfc08f] border border-[#c5a880]/40'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Showcase Visual Frame with Details in Front */}
            <div className="relative bg-[#090a0c] rounded-b-xl overflow-hidden aspect-[16/9] max-h-[460px]">
              <img
                src={currentProject.image}
                alt={`WebCraft Studio project preview for ${currentProject.name}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-transparent pointer-events-none" />

              {/* Overlay: Organized Project Summary Details in Front */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-xl bg-[#141518]/95 backdrop-blur-md border border-white/10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-display font-bold text-white text-sm sm:text-base">
                      {currentProject.name}
                    </span>
                    <span className="text-stone-500">·</span>
                    <span className="text-stone-300 text-xs font-medium">
                      {currentProject.industry}
                    </span>
                    <span className="text-stone-500 hidden sm:inline">·</span>
                    <span className="text-[#dfc08f] text-[11px] font-semibold hidden sm:inline">
                      {currentProject.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1 max-w-xl">
                    {currentProject.tagline} — {currentProject.deliverables.slice(0, 3).join(' · ')}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onSelectProject(currentProject.id)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] rounded-lg transition-colors shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
