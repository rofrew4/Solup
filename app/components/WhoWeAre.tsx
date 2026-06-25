export function WhoWeAre() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Who We Are</h2>
      <p className="prose-body mb-5">
        Chesterbrook is a custom AI engineering and strategy firm. We build
        agents, internal tools, data pipelines, and software for operators who
        want to move faster than off-the-shelf software lets them.
      </p>

      <p className="eyebrow mb-3">Why Us</p>
      <ul className="space-y-2">
        {[
          "No red tape. You talk directly to the engineers building, not an account manager who doesn't know how the software actually works.",
          "No upsells, no shelfware. We only recommend builds with a clear time or revenue ROI.",
          "We build around your existing systems instead of forcing change. PISA and Sun-based stay where they are; we integrate around them.",
          "We're young, fast, and accessible. Call us late, we'll pick up.",
        ].map((item) => (
          <li
            key={item.slice(0, 24)}
            className="prose-body relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
