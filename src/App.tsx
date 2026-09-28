import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { About } from './components/About';
import { ResultsTrust } from './components/ResultsTrust';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from './config/siteConfig';
import { Project } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'premium' | 'custom'>('premium');
  const [projectNote, setProjectNote] = useState<string>('');
  const [heroSelectedProject, setHeroSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageId: 'basic' | 'premium') => {
    setSelectedPackage(packageId);
    scrollToContact();
  };

  const handleConsultService = (serviceName: string) => {
    setProjectNote(`Service requested: ${serviceName}`);
    scrollToContact();
  };

  const handleRequestProjectStyle = (projectName: string) => {
    setProjectNote(`Interested in architecture & features similar to "${projectName}" demo project`);
    scrollToContact();
  };

  const handleHeroSelectProject = (projectId: string) => {
    const found = siteConfig.projects.find((p) => p.id === projectId);
    if (found) {
      setHeroSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-stone-100 flex flex-col selection:bg-[#c5a880]/25 selection:text-[#dfc08f]">
      {/* Top Navigation Bar with Quick Jump Links */}
      <Navbar onSelectPlan={handleSelectPackage} />

      <main className="flex-1">
        {/* 1. Hero: Concise, high-impact with immediate project preview in front */}
        <Hero
          onGetStartedClick={scrollToContact}
          onViewWorkClick={scrollToPortfolio}
          onSelectProject={handleHeroSelectProject}
        />

        {/* 2. Portfolio: FRONT AND CENTER with organized project details and specs */}
        <Portfolio
          onRequestProject={handleRequestProjectStyle}
          externalSelectedProject={heroSelectedProject}
          onClearExternalSelectedProject={() => setHeroSelectedProject(null)}
        />

        {/* 3. Pricing Packages: Basic (₹8,000) & Premium (₹12,000) */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 4. Core Services & Capabilities */}
        <Services onConsultService={handleConsultService} />

        {/* 5. Why Choose WebCraft Studio */}
        <WhyChooseUs />

        {/* 6. Creation Process (01 Discuss to 06 Launch) */}
        <Process />

        {/* 7. About Studio Ethos */}
        <About />

        {/* 8. Tangible Results & Client Expectations */}
        <ResultsTrust />

        {/* 9. Sample Testimonials & Feedback */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Final Contact CTA & Lead Form */}
        <Contact
          initialPackage={selectedPackage}
          initialProjectNote={projectNote}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Chat Trigger (Formal Champagne Accent) */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
            'Hi WebCraft Studio, I am interested in building a new website for my business.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] text-stone-950 font-semibold text-xs rounded-full shadow-lg shadow-black/50 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-stone-950 text-stone-950" />
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </a>
      </aside>
    </div>
  );
}
