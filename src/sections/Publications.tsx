export default function Publications() {
  return (
    <section id="publications" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          05 — Publications & Patents
        </p>

        <div data-animate="fade-up" className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              Materials Today Conference (Elsevier, 2025)
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
              Contributed to accepted abstract on ML-based material property prediction.
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-[60px] bg-[rgba(26,26,26,0.1)]" />

          <div className="flex-1">
            <h3 className="font-body font-medium text-[16px] text-[#1A1A1A] mb-1">
              Patent Application
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
              Co-filed 1 patent application from academic project work (under review).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
