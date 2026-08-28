export default function Publications() {
  return (
    <section id="publications" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          06 — Publications & Patents
        </p>

        <div data-animate="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              Machine Learning (Springer) — Under Review
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)] mb-2">
              Saksena, A., Kesav, A., Malpani, A., &amp; Parihar, A. S. (Aug. 2026). “Trust-minimized hybrid distributed training over untrusted networks: Simulated verifiable coordination and adaptive trust management.”
            </p>
            <span className="font-body text-[12px] text-[#6B7B3E] tracking-[0.02em]">
              Impact Factor 4.9 · Submitted Aug 2026
            </span>
          </div>

          <div>
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              Materials Today Conference 2025 — Poster
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)] mb-2">
              “Comparative analysis of materials descriptors for Machine Learning-based band gap prediction,” Abstract 587.
            </p>
            <span className="font-body text-[12px] text-[#6B7B3E] tracking-[0.02em]">
              23–26 June 2025 · Sitges, Spain
            </span>
          </div>

          <div>
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              SECUF-2026 — Invited Talk
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)] mb-2">
              “Inverse design of magneto-excitonic semiconductors” — co-author.
            </p>
            <span className="font-body text-[12px] text-[#6B7B3E] tracking-[0.02em]">
              5th Conf. on Physics under Synergetic Extreme Conditions
            </span>
          </div>

          <div>
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              Patents
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)] mb-2">
              Co-inventor on a filed patent (automated scanning-based welding and additive-deposition system for path-edge restoration) and a pending application (portable non-destructive gold-purity estimator).
            </p>
            <span className="font-body text-[12px] text-[#6B7B3E] tracking-[0.02em]">
              One filed · One pending
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
