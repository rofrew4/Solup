export function WhyUs() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Why Us</h2>
      <ul className="space-y-2">
        {[
          "We build around your existing systems instead of forcing change. PISA and Sun-based stay where they are; we integrate around them.",
          "No upsells, no shelfware. We only recommend builds with a clear time or revenue ROI.",
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
