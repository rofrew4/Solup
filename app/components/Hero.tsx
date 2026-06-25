export function Hero() {
  return (
    <header className="doc-section">
      <p className="eyebrow mb-4">Prepared 06.2026 · Sol-Up × Chesterbrook</p>

      <h1 className="hero-title text-foreground">Sol-Up Engineering Roadmap</h1>
      <div className="hero-rule" aria-hidden="true" />

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-accent/15 pt-5 text-[14px] sm:grid-cols-2 sm:gap-8">
        <div>
          <p className="eyebrow mb-1">For</p>
          <p className="font-medium text-foreground">Frank Rieger & Victor Martinez</p>
          <p className="font-medium text-accent">Sol-Up</p>
        </div>
        <div>
          <p className="eyebrow mb-1">By</p>
          <p className="font-medium text-foreground">Rowan Frew & Wyatt Bracy</p>
          <p className="font-medium text-accent">Chesterbrook</p>
        </div>
      </div>
    </header>
  );
}
