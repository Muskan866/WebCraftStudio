export interface Project {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  description: string;
  badge: 'Concept Project' | 'Demo Project';
  image: string;
  deliverables: string[];
  features: string[];
  techStack: string[];
  statsOverview?: {
    highlight: string;
    label: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface PricingPackage {
  id: 'basic' | 'premium';
  name: string;
  badge?: string;
  startingPrice: string;
  numericPrice: number;
  suitableFor: string[];
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  clientName: string;
  company: string;
  role: string;
  projectType: string;
  quote: string;
  badge: string;
}
