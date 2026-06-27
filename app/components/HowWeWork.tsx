const items = [
  {
    title: "Billing",
    body: "$110/hour, billed biweekly based on actual time worked, one project at a time. If a phase is tracking over estimate, we flag it before we go over.",
  },
  {
    title: "Communication",
    body: "Once kickoff begins, we set up a shared Slack channel or email thread. Ask us questions any time. Biweekly syncs to demo progress.",
  },
  {
    title: "Pause anytime",
    body: "Stop at any phase boundary. You only pay for hours worked through that point. No long-term commitment.",
  },
  {
    title: "Optional retainer",
    body: "Most clients request to stay on a flexible retainer to handle new fixes, updates, and maintenance. This is optional and not always necessary.",
  },
];

export function HowWeWork() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">How We Work</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-t-2 border-accent/25 pt-4"
          >
            <h3 className="mb-1.5 text-[15px] font-semibold text-accent">
              {item.title}
            </h3>
            <p className="prose-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
