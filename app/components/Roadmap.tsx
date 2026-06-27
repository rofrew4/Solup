import { roadmapItems } from "../data/content";
import { DetailBlock } from "./DetailBlock";
import { ExpandableRow } from "./ExpandableRow";
import { FadeIn } from "./FadeIn";

function scopeColorClass(scope: string): string {
  const s = scope.toUpperCase().replace(/\u2013/g, "-");
  if (s.startsWith("LOW")) return "text-scope-low";
  if (s === "MED" || s === "MED-HIGH") return "text-scope-med";
  if (s === "HIGH") return "text-scope-high";
  return "text-scope-low";
}

function ScopeKey() {
  const items = [
    { label: "Low", hours: "20+ hrs", color: "text-scope-low" },
    { label: "Med", hours: "35+ hrs", color: "text-scope-med" },
    { label: "High", hours: "50+ hrs", color: "text-scope-high" },
  ] as const;

  return (
    <div className="mb-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[12px] tracking-wide">
      {items.map((item) => (
        <span key={item.label} className="whitespace-nowrap">
          <span className={`font-semibold uppercase ${item.color}`}>
            {item.label}
          </span>
          <span className="ml-1.5 text-foreground/70">≈ {item.hours}</span>
        </span>
      ))}
    </div>
  );
}

function RoadmapRowHeader({
  number,
  title,
  scope,
}: {
  number: string;
  title: string;
  scope: string;
}) {
  return (
    <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4 sm:gap-y-1">
      <div className="flex min-w-0 items-baseline gap-3">
        <span className="row-number shrink-0 font-mono text-[13px] font-medium tabular-nums text-accent/45 transition-colors duration-[250ms]">
          [ {number} ]
        </span>
        <h3 className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
          {title}
        </h3>
      </div>
      <span
        className={`self-start font-mono text-[11px] font-semibold uppercase tracking-[0.08em] sm:self-auto ${scopeColorClass(scope)}`}
      >
        {scope}
      </span>
    </div>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="doc-section">
      <h2 className="doc-h2">The Roadmap</h2>
      <ScopeKey />

      <div className="divide-y divide-accent/10 rounded-lg border border-accent/20 bg-widget shadow-card">
        {roadmapItems.map((item) => (
          <FadeIn key={item.id}>
            <ExpandableRow
              id={item.id}
              variant="roadmap"
              infrastructure={item.isInfrastructure}
              header={
                <RoadmapRowHeader
                  number={item.number}
                  title={item.title}
                  scope={item.scope}
                />
              }
            >
            <div className="px-4 pb-2 pt-1 md:pl-[4.25rem] md:pr-5">
              <DetailBlock label="What it is">{item.whatItIs}</DetailBlock>

              {Array.isArray(item.whatItDoes) && item.whatItDoes.length > 0 ? (
                <DetailBlock label="What it does">
                  <ul className="space-y-1">
                    {item.whatItDoes.map((point) => (
                      <li
                        key={point.slice(0, 32)}
                        className="relative pl-3.5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50 before:content-['']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              ) : typeof item.whatItDoes === "string" && item.whatItDoes ? (
                <DetailBlock label="What it does">{item.whatItDoes}</DetailBlock>
              ) : null}

              <DetailBlock label="Your benefit">{item.whyItMatters}</DetailBlock>

              {item.scopeNote && (
                <p className="mt-1 font-mono text-[12px] leading-relaxed text-foreground/60">
                  Scope note: {item.scopeNote}
                </p>
              )}
            </div>
          </ExpandableRow>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
