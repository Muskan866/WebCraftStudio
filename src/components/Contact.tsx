import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Instagram, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  initialPackage?: 'basic' | 'premium' | 'custom';
  initialProjectNote?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialPackage = 'premium', initialProjectNote = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactValue: '',
    packageChoice: initialPackage,
    projectDescription: initialProjectNote,
    businessType: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageChoice: initialPackage }));
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialProjectNote) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription
          ? `${prev.projectDescription}\nInterested in style similar to: ${initialProjectNote}`
          : `Interested in style similar to: ${initialProjectNote}`,
      }));
    }
  }, [initialProjectNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.contactValue.trim()) {
      setErrorMessage('Please enter an email address or WhatsApp phone number.');
      return;
    }
    if (!formData.projectDescription.trim()) {
      setErrorMessage('Please provide a brief description of your website goals.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  // Generate a pre-filled WhatsApp link with inquiry message
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello WebCraft Studio! My name is ${formData.name || 'there'}. I am interested in the ${
        formData.packageChoice === 'basic' ? 'Basic Website (₹8,000)' : formData.packageChoice === 'premium' ? 'Premium Website (₹12,000)' : 'Custom Website'
      }. Project details: ${formData.projectDescription || 'I would like to discuss a new website.'}`
    );
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Website Inquiry - ${formData.name || 'New Project'}`);
    const body = encodeURIComponent(
      `Hi WebCraft Studio,\n\nName: ${formData.name}\nContact: ${formData.contactValue}\nPackage: ${formData.packageChoice}\nBusiness Type: ${formData.businessType}\n\nProject Overview:\n${formData.projectDescription}`
    );
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative bg-[#0b0c0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline and Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight text-balance">
                Ready to Build Your Website?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
                Tell us what you have in mind and let's turn your idea into a professional online presence.
              </p>

              {/* Direct Contact Channels using clearly defined placeholders */}
              <div className="mt-10 space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/40 hover:bg-[#18191f] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c5a880]/15 text-[#dfc08f] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-400">Direct WhatsApp</p>
                    <p className="text-sm font-semibold text-white truncate font-mono mt-0.5">
                      {siteConfig.contact.whatsapp}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#dfc08f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/40 hover:bg-[#18191f] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c5a880]/15 text-[#dfc08f] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-400">Email Address</p>
                    <p className="text-sm font-semibold text-white truncate font-mono mt-0.5">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#dfc08f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={`https://instagram.com/${siteConfig.contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/40 hover:bg-[#18191f] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c5a880]/15 text-[#dfc08f] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-400">Instagram</p>
                    <p className="text-sm font-semibold text-white truncate font-mono mt-0.5">
                      {siteConfig.contact.instagram}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#dfc08f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-stone-400">
              <p>📍 {siteConfig.contact.location}</p>
              <p className="mt-1">⏱️ {siteConfig.contact.workingHours}</p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-[#131418] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-10 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#c5a880]/20 text-[#dfc08f] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-black/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="mt-2 text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                    We've received your project inquiry for the{' '}
                    <span className="text-[#dfc08f] font-semibold uppercase">{formData.packageChoice}</span> package. We'll review your requirements and reach out promptly.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] rounded-xl shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          contactValue: '',
                          packageChoice: 'premium',
                          projectDescription: '',
                          businessType: '',
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/[0.06] pb-4 mb-2">
                    <h3 className="text-xl font-display font-bold text-white">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      Fill out the form below or message us directly on WhatsApp.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Package Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                      Selected Package
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, packageChoice: 'basic' })}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          formData.packageChoice === 'basic'
                            ? 'bg-stone-850 border-[#c5a880] text-white shadow-sm ring-1 ring-[#c5a880]/30'
                            : 'bg-stone-900/60 border-white/[0.08] text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">Basic Website</span>
                          <span className="text-xs font-mono text-[#dfc08f]">₹8,000+</span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-1">Essential presence & landing pages</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, packageChoice: 'premium' })}
                        className={`p-3.5 rounded-xl border text-left transition-all relative ${
                          formData.packageChoice === 'premium'
                            ? 'bg-gradient-to-r from-stone-850 to-stone-800 border-[#c5a880] text-white shadow-sm ring-1 ring-[#c5a880]/40'
                            : 'bg-stone-900/60 border-white/[0.08] text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">Premium Website</span>
                          <span className="text-xs font-mono text-[#dfc08f]">₹12,000+</span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-1">Multi-page, animations & advanced UI</p>
                      </button>
                    </div>
                  </div>

                  {/* Name and Contact Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="client-name" className="block text-xs font-medium text-stone-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/[0.08] text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-contact" className="block text-xs font-medium text-stone-300 mb-1.5">
                        Email or WhatsApp Number *
                      </label>
                      <input
                        id="client-contact"
                        type="text"
                        placeholder="e.g. rahul@example.com or +91..."
                        value={formData.contactValue}
                        onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/[0.08] text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Type / Industry */}
                  <div>
                    <label htmlFor="business-type" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Business or Project Type (Optional)
                    </label>
                    <input
                      id="business-type"
                      type="text"
                      placeholder="e.g. Bakery, Fitness Studio, Law Firm, Creator Portfolio..."
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/[0.08] text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="project-desc" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Tell us about your project & requirements *
                    </label>
                    <textarea
                      id="project-desc"
                      rows={4}
                      placeholder="Describe what you want to achieve, how many pages you need, any special features (e.g. WhatsApp ordering, maps, class schedules)..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/[0.08] text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] shadow-lg shadow-black/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-[#dfc08f] bg-[#221e18] hover:bg-[#2c261e] border border-[#c5a880]/35 flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
