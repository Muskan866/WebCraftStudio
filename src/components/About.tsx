import React from 'react';
import { Target, Sparkles, Code2, Users, Layers, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 relative bg-[#0b0c0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Authentic Mission */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
              <span>About Us</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Our Ethos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
              We Turn Ideas Into Websites.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              WebCraft Studio is a web-development studio focused on creating modern and professional websites for businesses, creators and individuals. We combine clean design, responsive development and business-focused thinking to create websites that look professional and communicate clearly.
            </p>
            <p className="mt-4 text-sm sm:text-base text-stone-400 leading-relaxed">
              We believe a business website should not merely be a digital business card—it should be an intuitive, trustworthy bridge between your services and your ideal customers.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-900/60 border border-white/[0.06]">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1">
                  <Target className="w-4 h-4 text-[#dfc08f]" />
                  <span>Purpose-Driven Architecture</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Every section and call-to-action serves a tangible business objective.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-white/[0.06]">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4 text-[#c5a880]" />
                  <span>Modern Tech Standards</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Engineered with fast, lightweight, and maintainable modern web practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#18191d] to-[#121316] border border-white/10 shadow-2xl relative">
              <div className="text-xs font-mono text-[#dfc08f] tracking-wider uppercase mb-3">
                Core Philosophy
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                Clean Aesthetics, Zero Clutter.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                We avoid confusing gimmicks and overly complex templates that slow down devices. Instead, we focus on responsive elegance, rapid loading, clear typography, and effortless contact channels.
              </p>

              <div className="space-y-3 border-t border-white/[0.08] pt-5 text-xs text-stone-300">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Design Approach</span>
                  <span className="font-semibold text-white">Custom & Minimalist</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Mobile Standards</span>
                  <span className="font-semibold text-white">Fully Responsive (All Devices)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Integrations</span>
                  <span className="font-semibold text-white">WhatsApp, Forms, Maps, Social</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Deployment Assistance</span>
                  <span className="font-semibold text-white">Included in All Packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
