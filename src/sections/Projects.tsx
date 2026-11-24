import { ArrowRight, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  date: string;
  body: string;
  tags: string[];
  link?: string;
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    title: 'Unified JEPA for Metasurface Inverse Design',
    date: 'Aug 2026 – Present',
    body: 'Built a PyTorch JEPA over a unified occupancy–parameter–spectrum representation for one-shot inverse design of 64×64 metasurface unit cells from 301-point spectra; one forward pass replaces 500–1000 diffusion steps at 2.9× fewer trainable parameters (11.4M vs 32.6M). Designed the evaluation protocol — real/null/shuffled tri-controls, paired per-sample win rate with 95% CIs, hard-stratum breakdowns — and evaluated 3 seeds on 17,489 held-out designs: MAE 0.0490 ± 0.0013 vs 0.0803 and AAE 29.51 ± 0.74 vs 48.34 for MetaDiT-S; win rates 99.7 / 97.7 / 93.0% in pure-inverse, partial, and retrofit regimes.',
    tags: ['PyTorch', 'JEPA', 'Metasurfaces', 'Evaluation'],
    link: 'https://github.com/tegga8/metasurface-jepa',
  },
  {
    title: 'Scan-to-CAD Geometric Reasoning for Adaptive Repair (Patent 202621101529)',
    date: '2026',
    body: 'Reconstructs as-found 3D geometry from optical/laser scans, aligns it to nominal CAD, and computes volumetric deficit and repair envelope for worn components. Processed occupancy/voxel-grid geometry with NumPy/SciPy to detect incomplete deposition, and generated ordered weld-pass toolpaths under bead-overlap and edge-taper rules. Published Indian patent application IN202621101529 A1 (09 Oct 2026).',
    tags: ['CAD', '3D Scanning', 'NumPy/SciPy', 'Manufacturing'],
    links: [{ label: 'Edge-rebuilding patent (PDF)', url: '/patents/IN202621101529-edge-rebuilding.pdf' }],
  },
  {
    title: 'Portable NDT Gold Purity Estimation Device (Patent 202621115061)',
    date: '2026',
    body: 'Fused electrochemical time-series and Archimedes density signals in a handheld device; on-device ML classifies 24K/22K/18K/silver with confidence scoring. Built the acquisition-to-decision pipeline (load cell/HX711), assembled and tested the hardware, and flagged cross-modal disagreement for review. Published Indian patent application IN202621115061 A1 (06 Nov 2026).',
    tags: ['NDT', 'On-device ML', 'Instrumentation', 'Signal Processing'],
    links: [{ label: 'Gold-purity patent (PDF)', url: '/patents/IN202621115061-gold-purity.pdf' }],
  },
  {
    title: 'Knowledge Graph Memory System with Autonomous Reflection',
    date: 'Dec 2025 – Jan 2026',
    body: 'Built a persistent agent-memory layer on DGraph with hybrid graph-and-vector retrieval (Qdrant) to store, retrieve, and audit context across multi-step AI workflows. Implemented reflection and reasoning loops; deployed Go and Python services with Docker on Linux for reproducible agent execution.',
    tags: ['Knowledge Graphs', 'Agentic AI', 'DGraph', 'Go / Python'],
    link: 'https://github.com/AkashKesav/Whitepaper',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          05 — Selected Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              data-animate="scale-in"
              className="group relative bg-[rgba(26,26,26,0.03)] rounded-xl p-6 md:p-8 border-t-[3px] border-t-[#6B7B3E] hover:bg-[rgba(107,123,62,0.06)] transition-colors duration-300"
              style={{ '--index': i } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#1A1A1A]">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(26,26,26,0.4)] hover:text-[#1A1A1A] transition-colors duration-200 shrink-0 ml-3"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="font-body text-[12px] text-[rgba(26,26,26,0.5)] mb-3">
                {project.date}
              </p>

              <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.7] mb-4">
                {project.body}
              </p>

              {'links' in project && project.links && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[13px] text-[#6B7B3E] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="inline-block bg-[rgba(107,123,62,0.1)] text-[#6B7B3E] px-2.5 py-1 rounded text-[12px] font-body font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <ArrowRight
                  size={18}
                  className="text-[#1A1A1A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
