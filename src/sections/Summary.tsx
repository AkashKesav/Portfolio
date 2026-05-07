export default function Summary() {
  return (
    <section id="summary" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          01 — Summary
        </p>

        <div className="flex gap-8 md:gap-12 items-start">
          <div
            data-animate="fade-up"
            className="hidden md:block w-[3px] h-[120px] bg-[#6B7B3E] shrink-0"
            style={{ transformOrigin: 'top', transitionDelay: '200ms' }}
          />

          <div className="flex-1">
            <p
              data-animate="fade-up"
              className="font-body text-[18px] text-[#1A1A1A] leading-[1.7] mb-8"
              style={{ transitionDelay: '200ms' }}
            >
              Machine-learning-focused Smart Manufacturing undergraduate at IIITDM Jabalpur (CGPA 7.7/10) with hands-on experience building and evaluating ML systems. Ran 12+ model experiments, achieving up to 98% accuracy on NLP classification and 83% accuracy on semiconductor band-gap prediction. Built LangChain/LangGraph agent systems, shipped a MatterGen package on PyPI, and contributed to an accepted abstract at Materials Today Conference (Elsevier, 2025).
            </p>

            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3"
              style={{ transitionDelay: '400ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#6B7B3E] animate-pulse-slow" />
              <span className="font-body font-medium text-[13px] text-[#6B7B3E]">
                Available for internship: May 2026 – Dec 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
