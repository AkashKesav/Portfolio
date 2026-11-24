const research = [
  {
    title: 'Trust-Minimized Hybrid Distributed Training over Untrusted Networks',
    date: 'Feb 2026 – Present',
    subtitle: 'Under review at Computing (Springer) · Equal-contributing author',
    body: 'Co-designed a hybrid data/model-parallel framework with one-shot Krum filtering, softmax-weighted aggregation, and commit–reveal validation. Ran 3-seed benchmarks on A100 GPUs across data-parallel and pipeline configurations, including Byzantine-fault scenarios; clean pipelines matched the single-GPU baseline within 0.23 pp.',
    tags: ['Distributed ML', 'Robust Aggregation', 'A100', 'Trust Systems'],
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-[#F5F5F0] py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          data-animate="fade-up"
          className="font-body font-medium text-[12px] text-[#6B7B3E] tracking-[0.08em] uppercase mb-12"
        >
          03 — Current Research
        </p>

        <div className="space-y-6">
          {research.map((item, i) => (
            <article
              key={item.title}
              data-animate="fade-up"
              className="grid gap-5 border-l-[3px] border-[#6B7B3E] bg-[rgba(26,26,26,0.025)] p-6 md:grid-cols-[minmax(0,1fr)_170px] md:p-8"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div>
                <h3 className="font-heading font-bold text-[20px] md:text-[23px] text-[#1A1A1A] leading-[1.3] mb-2">
                  {item.title}
                </h3>
                <p className="font-body font-medium text-[13px] text-[#6B7B3E] mb-4">
                  {item.subtitle}
                </p>
                <p className="font-body text-[15px] text-[#1A1A1A] leading-[1.75] mb-5">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[rgba(107,123,62,0.1)] px-2.5 py-1 font-body text-[12px] font-medium text-[#6B7B3E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-body text-[13px] text-[rgba(26,26,26,0.5)] md:text-right">
                {item.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
