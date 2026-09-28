import { FAQItem, PricingPackage, ProcessStep, Project, ServiceItem, TestimonialItem } from '../types';

import heroLaptopImg from '../assets/images/hero_laptop_web_interface_1790614367620.jpg';
import luxeBakeImg from '../assets/images/project_luxebake_preview_1790614382684.jpg';
import urbanFitImg from '../assets/images/project_urbanfit_preview_1790614394965.jpg';
import novaTechImg from '../assets/images/project_novatech_preview_1790614406766.jpg';

export const siteConfig = {
  name: 'WebCraft Studio',
  tagline: 'Building modern websites for modern businesses.',
  heroHeadline: 'We Build Websites That Build Your Business.',
  heroSubtext: 'Modern, responsive and conversion-focused websites designed to help businesses stand out, build trust and grow online.',
  
  // Easily customizable contact configuration
  contact: {
    whatsapp: '919785160669',
    whatsappFormatted: '+91 97851 60669',
    phone: '+91 97851 60669',
    email: 'webcraftstudio1002@gmail.com',
    emailAddress: 'webcraftstudio1002@gmail.com',
    instagram: 'webcraftstudio1002',
    instagramHandle: '@webcraftstudio1002',
    location: 'Remote · Serving Clients Across India & Worldwide',
    workingHours: 'Mon – Sat · 9:00 AM – 8:00 PM IST',
  },

  trustIndicators: [
    { label: 'Modern Design', detail: 'Tailored aesthetic crafted for your audience' },
    { label: 'Mobile Responsive', detail: 'Pixel-perfect across phones, tablets & desktops' },
    { label: 'Fast & Reliable', detail: 'High-speed performance with clean code' },
    { label: 'Business Focused', detail: 'Engineered to generate inquiries and trust' },
  ],

  services: [
    {
      id: 'website-design',
      title: 'Website Design',
      description: 'Beautiful and professional website designs tailored to each business.',
      highlights: ['Custom visual identity', 'Brand-aligned layouts', 'Clean typography & spacing', 'Engaging interactive states'],
      icon: 'Palette',
    },
    {
      id: 'responsive-development',
      title: 'Responsive Development',
      description: 'Websites that work smoothly across phones, tablets and desktops.',
      highlights: ['Fluid layouts for every device', 'Touch-friendly navigation', 'Retina image scaling', 'Zero layout shifts'],
      icon: 'Smartphone',
    },
    {
      id: 'business-websites',
      title: 'Business Websites',
      description: 'Professional websites designed specifically for businesses and service providers.',
      highlights: ['Clear service presentation', 'Customer inquiry funnels', 'Credibility & trust sections', 'Direct contact integration'],
      icon: 'Briefcase',
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'Focused landing pages designed to present a product, service or offer clearly.',
      highlights: ['High-conversion architecture', 'Compelling call-to-actions', 'Lead capture integration', 'Lightning fast loading'],
      icon: 'Flame',
    },
    {
      id: 'portfolio-websites',
      title: 'Portfolio Websites',
      description: 'Modern personal and professional portfolios that showcase work and achievements.',
      highlights: ['Curated project galleries', 'High-impact visuals', 'Interactive case studies', 'Personal brand storytelling'],
      icon: 'FolderKanban',
    },
    {
      id: 'website-deployment',
      title: 'Website Deployment',
      description: 'Help with hosting and deploying the website so it can go live.',
      highlights: ['Domain setup guidance', 'Reliable cloud hosting deployment', 'SSL security certificate', 'Post-launch verification'],
      icon: 'Rocket',
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'luxebake',
      name: 'LuxeBake',
      industry: 'Bakery & Patisserie',
      tagline: 'Artisanal Sourdough & French Pastry Showcase',
      description: 'A warm, elegant culinary website designed for a boutique bakery. Features a dynamic artisanal menu showcase, daily fresh bake announcements, catering inquiry forms, and WhatsApp ordering.',
      badge: 'Concept Project',
      image: luxeBakeImg,
      deliverables: ['Custom Brand UI', 'Interactive Daily Menu', 'Direct WhatsApp Ordering', 'Catering Inquiry Form', 'Mobile-First Layout'],
      features: ['Real-time bake status indicator', 'Dietary filter tags (Vegan/GF)', 'Interactive location & pickup guide', 'High-res food photography display'],
      techStack: ['Modern React', 'Tailwind CSS', 'Vite', 'Cloudflare Pages / Vercel'],
      statsOverview: {
        highlight: '100% Mobile Ready',
        label: 'Optimized touch navigation for food orders on the go',
      },
    },
    {
      id: 'urbanfit',
      name: 'UrbanFit',
      industry: 'Fitness Studio & Gym',
      tagline: 'High-Energy Strength & Functional Training Hub',
      description: 'High-contrast, dynamic fitness website built for a boutique athletic studio. Highlights workout class schedules, certified personal trainer profiles, and free trial booking flow.',
      badge: 'Concept Project',
      image: urbanFitImg,
      deliverables: ['Weekly Class Timetable', 'Trainer Roster & Bios', 'Free Trial Pass Funnel', 'Membership Comparison', 'Google Maps Pin'],
      features: ['Day-by-day workout class filters', '1-click trial booking form', 'Studio facility visual tour', 'Member transformation highlights'],
      techStack: ['Modern React', 'Tailwind CSS', 'Motion FX', 'Vercel Deployment'],
      statsOverview: {
        highlight: '< 1.2s Load Speed',
        label: 'Instant schedule access without friction',
      },
    },
    {
      id: 'novatech',
      name: 'NovaTech',
      industry: 'Technology Business',
      tagline: 'Next-Generation Cloud Solutions & Infrastructure',
      description: 'A sleek, tech-focused corporate website for a cloud software company. Features interactive product modules, security compliance badges, live documentation previews, and enterprise consultation booking.',
      badge: 'Concept Project',
      image: novaTechImg,
      deliverables: ['Enterprise Capability Grid', 'Security & Compliance Matrix', 'B2B Consultation Form', 'Interactive Tech Diagram', 'Dark Mode UI'],
      features: ['Interactive architectural diagrams', 'Technical feature deep-dives', 'Multi-step contact form', 'Client case study summaries'],
      techStack: ['TypeScript', 'React 19', 'Tailwind CSS', 'Accessible Headless UI'],
      statsOverview: {
        highlight: '98+ Lighthouse',
        label: 'Pristine technical SEO & core web vitals',
      },
    },
    {
      id: 'studioframe',
      name: 'StudioFrame',
      industry: 'Creative Portfolio',
      tagline: 'Architecture & Interior Design Showcase',
      description: 'An editorial, minimalist portfolio website for an interior architecture practice. Implements full-bleed gallery transitions, blueprint viewports, and client consultation scheduling.',
      badge: 'Concept Project',
      // High-quality editorial preview for creative studio
      image: heroLaptopImg,
      deliverables: ['Editorial Project Grid', 'Project Detail Modal Views', 'Press & Recognition Index', 'Architectural Specs', 'Direct Studio Contact'],
      features: ['Filterable portfolio by sector', 'High-res image masonry view', 'Client brief breakdown', 'Custom inquiry intake'],
      techStack: ['React', 'Tailwind CSS', 'Motion', 'Vercel CDN'],
      statsOverview: {
        highlight: 'Curated Typography',
        label: 'Balanced editorial aesthetics with zero clutter',
      },
    },
    {
      id: 'bloom-and-co',
      name: 'Bloom & Co.',
      industry: 'Boutique Business',
      tagline: 'Bespoke Floral Design & Botanical Decor',
      description: 'A refined boutique website for an independent floral studio. Features bespoke seasonal bouquet collections, wedding floral consultation scheduling, and local delivery area checker.',
      badge: 'Concept Project',
      image: luxeBakeImg,
      deliverables: ['Seasonal Lookbook', 'Wedding Booking Questionnaire', 'Local Delivery Radius Map', 'Care Guides & FAQs', 'WhatsApp Express Chat'],
      features: ['Interactive floral arrangement slider', 'Event date availability checker', 'Mobile-first inquiry capture', 'Instagram gallery feed integration'],
      techStack: ['React', 'Tailwind CSS', 'Lucide Icons', 'Vercel'],
      statsOverview: {
        highlight: 'Direct WhatsApp',
        label: 'Seamless instant inquiries directly on customer phone',
      },
    },
    {
      id: 'primeestate',
      name: 'PrimeEstate',
      industry: 'Real Estate Website',
      tagline: 'Luxury Residential Properties & Developments',
      description: 'A premium real estate showcase presenting luxury villas and architectural developments. Includes floor-plan galleries, neighborhood amenity checklists, and private viewing request forms.',
      badge: 'Concept Project',
      image: novaTechImg,
      deliverables: ['Property Showcase Catalog', 'Floor Plan Visualizer', 'Neighborhood Highlights', 'Private Tour Booking', 'Agent Contact Card'],
      features: ['Bedrooms / Sqft / Price filter simulation', 'Interactive brochure request', 'High-contrast dark luxury theme', 'Instant agent WhatsApp callout'],
      techStack: ['React', 'Tailwind CSS', 'Vite', 'Vercel Ready'],
      statsOverview: {
        highlight: 'Lead Capture Focus',
        label: 'Designed to convert qualified buyers into viewing appointments',
      },
    },
  ] as Project[],

  whyChooseUs: [
    {
      title: 'Custom Design',
      description: "Every website is designed around the client's business and goals.",
      detail: 'No cookie-cutter templates. We tailor layouts, colors, and content structure to elevate your brand authority.',
    },
    {
      title: 'Mobile First',
      description: 'Websites are designed to work beautifully on mobile devices.',
      detail: 'Over 70% of web traffic comes from smartphones. We optimize every button, font size, and touch target.',
    },
    {
      title: 'Modern Technology',
      description: 'Use modern web technologies and development practices.',
      detail: 'Built with React, clean semantic HTML5, and Tailwind CSS for rapid load times and long-term durability.',
    },
    {
      title: 'Performance Focused',
      description: 'Keep the website lightweight, responsive and optimized.',
      detail: 'Fast websites rank higher on Google and keep visitors engaged instead of bouncing away.',
    },
    {
      title: 'Clear Communication',
      description: 'Keep the client informed throughout the website creation process.',
      detail: 'Transparent milestones, organized updates, and direct support via WhatsApp and email at every step.',
    },
    {
      title: 'Business Focused',
      description: 'Design websites with the goal of presenting the business professionally and generating enquiries.',
      detail: 'Strategic placement of call-to-actions, credibility proof, and easy inquiry buttons to turn visitors into leads.',
    },
  ],

  pricingPackages: [
    {
      id: 'basic',
      name: 'Basic Website',
      startingPrice: 'Starting from ₹8,000',
      numericPrice: 8000,
      suitableFor: [
        'Small businesses',
        'Personal portfolios',
        'Local businesses',
        'Simple service websites',
        'Landing pages',
      ],
      features: [
        'Modern responsive design',
        'Mobile, tablet and desktop support',
        'Professional homepage',
        'About section',
        'Services section',
        'Contact section',
        'WhatsApp/contact integration',
        'Basic SEO structure',
        'Fast loading',
        'Deployment assistance',
      ],
      ctaText: 'Choose Basic',
      highlighted: false,
    },
    {
      id: 'premium',
      name: 'Premium Website',
      badge: 'Most Popular',
      startingPrice: 'Starting from ₹12,000',
      numericPrice: 12000,
      suitableFor: [
        'Growing businesses',
        'Brands',
        'Startups',
        'Professional businesses',
        'Businesses wanting a more advanced online presence',
      ],
      features: [
        'Everything in Basic',
        'Premium modern UI/UX',
        'Multiple pages',
        'Advanced animations',
        'Interactive sections',
        'Advanced contact/lead forms',
        'Google Maps integration where appropriate',
        'Social media integration',
        'Better SEO structure',
        'Performance optimization',
        'Deployment assistance',
        'More customization',
      ],
      ctaText: 'Choose Premium',
      highlighted: true,
    },
  ] as PricingPackage[],

  processSteps: [
    {
      step: '01',
      title: 'Discuss',
      description: 'We understand your business, goals and requirements.',
      timeline: 'Initial discovery & scope',
    },
    {
      step: '02',
      title: 'Plan',
      description: 'We plan the website structure, content and visual direction.',
      timeline: 'Architecture & wireframes',
    },
    {
      step: '03',
      title: 'Design',
      description: 'We create a modern design tailored to your brand.',
      timeline: 'Interactive design prototype',
    },
    {
      step: '04',
      title: 'Build',
      description: 'We develop the responsive website.',
      timeline: 'Clean, production-grade code',
    },
    {
      step: '05',
      title: 'Review',
      description: 'You review the website and request necessary changes.',
      timeline: 'Collaborative feedback & polish',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'The final website is deployed and made ready for your audience.',
      timeline: 'Go-live & domain setup',
    },
  ] as ProcessStep[],

  resultsExpectations: [
    {
      title: 'Professional Online Presence',
      description: 'A polished digital storefront that gives your brand immediate credibility when prospective clients search for you.',
    },
    {
      title: 'Responsive Experience',
      description: 'Seamless interaction whether viewed on an iPhone, Android, iPad, laptop, or ultra-wide desktop monitor.',
    },
    {
      title: 'Clear Business Presentation',
      description: 'Your services, pricing points, and key differentiators explained concisely without confusing clutter.',
    },
    {
      title: 'Easy Customer Contact',
      description: 'Direct WhatsApp click-to-chat, frictionless inquiry forms, and click-to-call buttons for instant customer inquiries.',
    },
    {
      title: 'Modern Brand Image',
      description: 'Elevated visual aesthetics, crisp typography, and subtle micro-interactions that make you stand apart from local competitors.',
    },
    {
      title: 'Scalable Website Structure',
      description: 'Clean modular code and architecture ready to expand as you introduce new services, products, or team members.',
    },
  ],

  testimonials: [
    {
      clientName: 'Rahul Verma',
      company: 'Verma Logistics & Retail',
      role: 'Managing Partner',
      projectType: 'Business Website Package',
      quote: 'WebCraft Studio delivered exactly what our company needed. Our new website looks modern, loads within a second on phones, and customers can reach us on WhatsApp with one click.',
      badge: 'Sample Testimonial',
    },
    {
      clientName: 'Priya Sundaram',
      company: 'Bloom & Co. Florals',
      role: 'Founder & Florist',
      projectType: 'Premium Website Package',
      quote: 'The team was patient with all our visual requirements. The project gallery and custom wedding inquiry form helped us book three new clients within the first two weeks of launching.',
      badge: 'Sample Testimonial',
    },
    {
      clientName: 'Arjun Mehta',
      company: 'Apex Digital Consulting',
      role: 'Independent Consultant',
      projectType: 'Basic Website Package',
      quote: 'Straightforward process with clear communication throughout. The deployment assistance made connecting my custom domain painless.',
      badge: 'Sample Testimonial',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: 'How much does a website cost?',
      answer: 'Basic websites start from ₹8,000 and Premium websites start from ₹12,000. Final pricing depends on your specific requirements, number of pages, custom interactive features, and integrations.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the website size, content readiness, and feature requirements. A Basic website is typically completed within 5 to 7 working days, while a Premium website usually takes 10 to 14 working days. We define the exact timeline together before starting.',
    },
    {
      question: 'Will my website work on mobile?',
      answer: 'Yes, absolutely. Every website we build is designed mobile-first and thoroughly tested across modern mobile, tablet, laptop, and desktop screen sizes to ensure fluid responsiveness and intuitive touch targets.',
    },
    {
      question: 'Can I request custom features?',
      answer: 'Yes. Custom features such as multi-step forms, filterable galleries, custom interactive calculators, or specific third-party integrations can be incorporated. We discuss and scope any custom requirements during the planning stage.',
    },
    {
      question: 'Do you help with deployment?',
      answer: 'Yes. WebCraft Studio provides hands-on assistance with deploying the finished website to fast, secure cloud platforms like Vercel or Cloudflare, ensuring your site goes live smoothly.',
    },
    {
      question: 'Can you connect my domain?',
      answer: 'Yes. We provide domain-connection assistance where applicable, guiding you through DNS configuration to link your custom domain (e.g. yourbusiness.com) to the hosted website.',
    },
    {
      question: 'Can I update my website later?',
      answer: 'Yes. The website code and structure are cleanly designed to support future updates. We explain the available maintenance and update arrangements so your website can evolve as your business grows.',
    },
    {
      question: 'Do you provide hosting?',
      answer: 'Hosting and domain registrations are separate third-party services. We guide you on the best cost-effective or free modern hosting options (such as Vercel or Netlify) and help set everything up during deployment.',
    },
  ] as FAQItem[],
};
