import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Reflective Memory Kernel',
    date: 'Dec 2025 – Feb 2026',
    body: 'Built a persistent agent-memory layer on Dgraph with activation decay and reinforcement for retrieval. A reflection pipeline synthesizes observations, identifies contradictions, and prioritizes relevant context across multi-step AI workflows.',
    tags: ['Knowledge Graphs', 'Agentic AI', 'Dgraph', 'Go / Python'],
    link: 'https://github.com/AkashKesav/Whitepaper',
  },
  {
    title: 'Multilingual Classification and Sentence Entailment',
    date: 'Jul 2024 – Aug 2024',
    body: 'Fine-tuned BERT and XLM-RoBERTa, achieving 98% accuracy on multilingual detection across 20+ languages. Built a 3-class entailment classifier reaching 78% F1-score; recovered minority-class recall by 12 points using weighted loss.',
    tags: ['Hugging Face', 'BERT', 'XLM-RoBERTa', 'NLP'],
    links: [
      { label: 'Language Detection', url: 'https://github.com/AkashKesav/Language_Detection_Classifier' },
      { label: 'Sentence Entailment', url: 'https://github.com/AkashKesav/SentenceClassifier' },
    ],
  },
  {
    title: 'Autonomous DFT Workflow Agent',
    date: '2026',
    body: 'Built a LangGraph agent for adaptive GPAW/VASP runs and automated band-structure and density-of-states analysis using ASE and spglib.',
    tags: ['LangGraph', 'DFT', 'ASE', 'Scientific Automation'],
    link: 'https://github.com/AkashKesav/DFT_AI',
  },
  {
    title: 'MatterGen Python Module',
    date: 'Mar 2026',
    body: 'Published an unofficial Python wrapper for Microsoft\'s MatterGen model, adding APIs for model loading and property-conditioned generation to support candidate-material screening workflows.',
    tags: ['Python', 'PyPI', 'Generative Models', 'Materials'],
    link: 'https://github.com/AkashKesav/Mattergen_Module_unofficial',
  },
  {
    title: 'Thermoelectric Material Property Prediction',
    date: 'Jan 2025 – May 2025',
    body: 'Benchmarked seven ML algorithms on 7,239 thermoelectric materials and found that chemical descriptors outperformed physical descriptors across the evaluated models, informing feature selection for material screening.',
    tags: ['XGBoost', 'Random Forest', 'PyTorch', 'Feature Engineering'],
    link: 'https://github.com/AkashKesav/TE_ML',
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
