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

        <div data-animate="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
              Patent Application
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)] mb-2">
              Co-filed one patent application arising from academic project work.
            </p>
            <span className="font-body text-[12px] text-[#6B7B3E] tracking-[0.02em]">
              Filed · Under review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
