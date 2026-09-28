import React, { useEffect } from 'react';
import { X, CheckCircle, Sparkles, Layers, ArrowRight, Laptop, Smartphone } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-[#111215] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-10 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header bar with close button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.08] bg-[#0c0d0f]">
          <div className="flex items-center gap-2.5 text-xs text-stone-400">
            <span className="font-semibold text-white">{project.industry}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#dfc08f] font-medium">{project.badge}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
            aria-label="Close project preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Visual Preview Frame */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-stone-950 relative aspect-[16/9] shadow-inner">
            <img
              src={project.image}
              alt={`Preview mockup of ${project.name} website`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
              <span className="font-mono text-[#dfc08f]">{project.tagline}</span>
              <span className="hidden sm:inline text-stone-400">Concept Architecture</span>
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.name}
              </h3>
              {project.statsOverview && (
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-[#dfc08f]">
                    {project.statsOverview.highlight}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-2.5 text-sm sm:text-base text-stone-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables & Built Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-4 rounded-xl bg-stone-900/60 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#dfc08f] uppercase tracking-wider mb-3">
                <CheckCircle className="w-4 h-4" />
                <span>Included Deliverables</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#dfc08f] font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Specialized Features</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#c5a880] font-bold">›</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] bg-stone-900 px-2.5 py-1 rounded text-stone-300 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action CTA */}
        <div className="px-5 sm:px-6 py-4 border-t border-white/[0.08] bg-[#0c0d0f] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400 text-center sm:text-left">
            <span>Want a website with similar capabilities?</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/60 hover:bg-stone-700/60 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onRequestSimilar(project.name);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-950 bg-gradient-to-r from-[#c5a880] to-[#dfc08f] hover:from-[#d3b791] hover:to-[#ebd0a3] rounded-lg shadow-sm transition-all"
            >
              <span>Build Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
