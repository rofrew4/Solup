export function Overview() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Overview</h2>
      <div className="space-y-3 prose-body">
        <p>
          Our recommendation is to start small. The first two projects are the
          HOA submission generator and BOM verification. Both are bounded,
          shippable in weeks, and hit the top operational priorities. They also
          stand up the PISA integration on lower-risk projects, which is the same
          plumbing the permitting tools will need later. Permitting is a real
          bottleneck, but it&apos;s a larger build. The right move is to prove
          value together on smaller projects first.
        </p>
        <p>
          This document lays out the full set of opportunities we&apos;d
          recommend, sorted by where to start. Nothing is locked in. Each
          project gets approved (or skipped) on its own before any build work
          starts.
        </p>
      </div>
    </section>
  );
}
