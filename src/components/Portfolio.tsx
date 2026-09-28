import React, { useState } from 'react';
import { ArrowUpRight, Eye, Check, Layers, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onRequestProject: (projectName: string) => void;
  externalSelectedProject?: Project | null;
  onClearExternalSelectedProject?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onRequestProject,
  externalSelectedProject,
  onClearExternalSelectedProject,
}) => {
  const [internalSelectedProject, setInternalSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const activeModalProject = externalSelectedProject || internalSelectedProject;

  const handleCloseModal = () => {
    setInternalSelectedProject(null);
    if (onClearExternalSelectedProject) {
      onClearExternalSelectedProject();
    }
  };

  const filteredProjects =
    filter === 'all'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => {
          if (filter === 'shops') return p.id === 'luxebake' || p.id === 'bloom-and-co';
          if (filter === 'studios') return p.id === 'urbanfit' || p.id === 'studioframe';
          if (filter === 'tech-business') return p.id === 'novatech' || p.id === 'primeestate';
          return true;
        });

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative bg-[#0e0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-2">
              <span>Client Work & Concepts</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>All 6 Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Websites We've Crafted
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl font-normal">
              Organized project blueprints built for small businesses, startups, creators, and local brands. Tap any project to inspect included deliverables and tech specifications.
            </p>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-stone-900/90 rounded-xl border border-white/[0.08] self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#c5a880]/20 text-[#dfc08f] border border-[#c5a880]/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Work ({siteConfig.projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('shops')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'shops'
                  ? 'bg-[#c5a880]/20 text-[#dfc08f] border border-[#c5a880]/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Bakery & Boutiques
            </button>
            <button
              type="button"
              onClick={() => setFilter('studios')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'studios'
                  ? 'bg-[#c5a880]/20 text-[#dfc08f] border border-[#c5a880]/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Fitness & Creative
            </button>
            <button
              type="button"
              onClick={() => setFilter('tech-business')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'tech-business'
                  ? 'bg-[#c5a880]/20 text-[#dfc08f] border border-[#c5a880]/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Tech & Real Estate
            </button>
          </div>
        </div>

        {/* 6 Projects in an Organised, Detail-Forward Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#131418] border border-white/[0.08] hover:border-[#c5a880]/45 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              {/* Mockup Preview Area */}
              <div
                className="relative aspect-[16/10] bg-stone-950 overflow-hidden cursor-pointer"
                onClick={() => setInternalSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={`Screenshot mockup for ${project.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131418] via-[#131418]/20 to-transparent" />

                {/* Unboxed Metadata in top corners */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-stone-200 bg-stone-950/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                    {project.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-[#dfc08f] bg-[#1c1a16]/90 backdrop-blur-md px-2.5 py-0.5 rounded border border-[#c5a880]/40">
                    {project.badge}
                  </span>
                </div>

                {/* Center Hover Affordance */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-150">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] rounded-lg shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Specs</span>
                  </span>
                </div>
              </div>

              {/* Organised Project Details Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-[#dfc08f] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#dfc08f] font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Organised Key Deliverables at a Glance */}
                  <div className="mt-4 pt-3.5 border-t border-white/[0.05]">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {project.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-[#dfc08f] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Row */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-stone-400">
                    {project.features.length} interactive features
                  </span>

                  <button
                    type="button"
                    onClick={() => setInternalSelectedProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#dfc08f] hover:text-[#ebd0a3] bg-[#221e18]/80 hover:bg-[#2c261e] border border-[#c5a880]/30 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={handleCloseModal}
        onRequestSimilar={onRequestProject}
      />
    </section>
  );
};
