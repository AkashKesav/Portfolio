const languagesFrameworks = [
  'Python', 'Go', 'SQL', 'PyTorch', 'PyTorch Geometric', 'TensorFlow',
  'Scikit-learn', 'XGBoost', 'Hugging Face', 'LangChain', 'LangGraph',
  'Pandas', 'NumPy',
];

const coreML = [
  'Deep Learning', 'GNNs', 'NLP', 'Transformers', 'Feature Engineering',
  'Model Evaluation', 'Cross-Validation',
];

const mlopsBackend = [
  'Docker', 'GCP', 'REST APIs', 'Go Fiber', 'NATS', 'Git', 'Linux', 'CI/CD',
];

const databases = ['PostgreSQL', 'MongoDB', 'Redis'];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          06 — Technical Skills
        </p>

        {/* Languages & Frameworks */}
        <div data-animate="fade-up" className="mb-12">
          <h3 className="font-heading font-bold text-[18px] text-[#1A1A1A] mb-5">
            Languages & Frameworks
          </h3>
          <div className="flex flex-wrap gap-3">
            {languagesFrameworks.map((skill, i) => (
              <span
                key={skill}
                className="inline-block border border-[rgba(26,26,26,0.15)] rounded-md px-4 py-2 font-body font-medium text-[13px] text-[#1A1A1A] hover:border-[#6B7B3E] hover:text-[#6B7B3E] transition-colors duration-150 whitespace-nowrap"
                style={{ transitionDelay: `${i * 30}ms` } as React.CSSProperties}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Core ML / DL and MLOps */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-12">
          <div data-animate="fade-up" className="flex-1" style={{ transitionDelay: '100ms' }}>
            <h3 className="font-heading font-bold text-[18px] text-[#1A1A1A] mb-5">
              Core ML / DL
            </h3>
            <ul className="space-y-2">
              {coreML.map((skill) => (
                <li
                  key={skill}
                  className="font-body text-[15px] text-[#1A1A1A] leading-[1.6] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1 before:h-1 before:bg-[#6B7B3E] before:rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div data-animate="fade-up" className="flex-1" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-heading font-bold text-[18px] text-[#1A1A1A] mb-5">
              MLOps & Backend
            </h3>
            <ul className="space-y-2">
              {mlopsBackend.map((skill) => (
                <li
                  key={skill}
                  className="font-body text-[15px] text-[#1A1A1A] leading-[1.6] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1 before:h-1 before:bg-[#6B7B3E] before:rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Databases */}
        <div data-animate="fade-up" style={{ transitionDelay: '300ms' }}>
          <h3 className="font-heading font-bold text-[18px] text-[#1A1A1A] mb-5">
            Databases
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {databases.map((skill) => (
              <span
                key={skill}
                className="inline-block border border-[rgba(26,26,26,0.15)] rounded-md px-3.5 py-1.5 font-body font-medium text-[13px] text-[#1A1A1A] hover:border-[#6B7B3E] hover:text-[#6B7B3E] transition-colors duration-150"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
