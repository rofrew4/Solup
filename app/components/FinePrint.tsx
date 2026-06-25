import { finePrintItems } from "../data/content";
import { ExpandableRow } from "./ExpandableRow";
import { FadeIn } from "./FadeIn";

export function FinePrint() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">The Fine Print</h2>

      <div className="divide-y divide-accent/10 rounded-lg border border-accent/20 bg-widget shadow-card">
        {finePrintItems.map((item) => (
          <FadeIn key={item.id}>
            <ExpandableRow
              id={`fine-print-${item.id}`}
              variant="compact"
              header={
                <div className="px-4 py-3.5">
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              }
            >
              <p className="prose-body px-4 pb-4">{item.body}</p>
            </ExpandableRow>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
