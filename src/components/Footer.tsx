import React from 'react';
import { MessageSquare, Mail, Instagram, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08090a] border-t border-white/[0.08] text-stone-400 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#b89558] to-[#dfc08f] flex items-center justify-center font-display font-bold text-stone-950 text-base shadow-sm">
                W
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3.5 text-sm text-stone-300 leading-relaxed max-w-sm">
              “{siteConfig.tagline}”
            </p>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed max-w-sm">
              Creating professional, modern and responsive websites for businesses, creators, startups, shops, professionals and personal brands.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Quick Navigation
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#dfc08f] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Contact Placeholders */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Direct Inquiries
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#dfc08f] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#dfc08f] shrink-0" />
                  <span className="truncate">WhatsApp: {siteConfig.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-[#dfc08f] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#dfc08f] shrink-0" />
                  <span className="truncate">Email: {siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${siteConfig.contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#dfc08f] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#dfc08f] shrink-0" />
                  <span className="truncate">Instagram: {siteConfig.contact.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#dfc08f] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] rounded px-2 py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
