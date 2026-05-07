export default function Experience() {
  const experiences = [
    {
      role: 'AI/ML Backend Development Intern',
      type: 'Remote',
      company: 'Rakumura IT Solutions',
      date: 'Jun 2025 – Nov 2025',
      location: 'Chennai, Tamil Nadu',
      bullets: [
        'Architected multi-agent AI systems using 2 orchestration frameworks (LangChain, LangGraph), automating triage, assignment, and status tracking while reducing manual coordination overhead for internal operations teams.',
        'Built backend services for a node-based workflow editor, enabling teams to configure executable multi-step inference and data-processing pipelines.',
        'Integrated a 4-system stack (PostgreSQL, MongoDB, Redis, NATS) for asynchronous stateful execution across internal workflow endpoints; containerized services with Docker for reproducible deployments.',
      ],
    },
    {
      role: 'Research Intern – Machine Learning',
      type: 'On-site',
      company: 'IIITDM Jabalpur – Materials Science Lab',
      date: 'Nov 2023 – Apr 2024',
      location: 'Jabalpur, Madhya Pradesh',
      bullets: [
        'Benchmarked 5 ML architectures (GNNs, XGBoost, Random Forest, DNNs) on semiconductor band-gap prediction, achieving 83% accuracy.',
        'Designed an automated data-collection and preprocessing pipeline ingesting 1,600+ material records from the Materials Project API across all 118 elements.',
        'Evaluated model performance using MSE, MAE, and R² to compare architectures and select robust baselines.',
        'Contributed to research abstract accepted at Materials Today Conference (Elsevier, 2025).',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          03 — Experience
        </p>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <article
              key={i}
              data-animate="fade-up"
              className="border border-[rgba(26,26,26,0.1)] rounded-lg p-6 md:p-8 hover:border-[rgba(107,123,62,0.4)] transition-colors duration-300"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-[#1A1A1A]">
                      {exp.role}
                    </h3>
                    <span className="inline-block border border-[#1A1A1A] px-2 py-0.5 rounded text-[12px] font-body font-medium text-[#1A1A1A]">
                      {exp.type}
                    </span>
                  </div>
                  <p className="font-body font-medium text-[14px] text-[#6B7B3E]">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right md:text-right">
                  <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
                    {exp.date}
                  </p>
                  <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-body text-[15px] text-[#1A1A1A] leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-[#6B7B3E] before:rounded-full"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
