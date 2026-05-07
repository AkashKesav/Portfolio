export default function Education() {
  return (
    <section id="education" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          02 — Education
        </p>

        <div className="flex flex-col md:flex-row md:gap-16 gap-8">
          <div data-animate="fade-left" className="md:w-[40%]">
            <h3 className="font-heading font-bold text-[24px] md:text-[28px] text-[#1A1A1A] leading-[1.3] mb-2">
              Indian Institute of Information Technology, Design and Manufacturing, Jabalpur
            </h3>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
              Jabalpur, Madhya Pradesh
            </p>
          </div>

          <div data-animate="fade-right" className="md:w-[60%]" style={{ transitionDelay: '150ms' }}>
            <p className="font-body font-medium text-[16px] text-[#1A1A1A] mb-3">
              Bachelor of Technology in Smart Manufacturing
            </p>
            <div className="flex items-center gap-4 mb-2">
              <span className="inline-block border border-[#1A1A1A] px-3 py-1 rounded text-[14px] font-body font-medium text-[#1A1A1A]">
                CGPA: 7.7 / 10
              </span>
            </div>
            <p className="font-body text-[14px] text-[rgba(26,26,26,0.5)]">
              Expected May 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
