export interface RoadmapItem {
  id: string;
  number: string;
  title: string;
  scope: string;
  whatItIs: string;
  whatItDoes: string | string[];
  whyItMatters: string;
  scopeNote?: string;
  isInfrastructure?: boolean;
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "bom-verification",
    number: "01",
    title: "BOM Verification",
    scope: "LOW–MED",
    whatItIs:
      "A check that compares the plan set against the BOM in PISA at permit-submission time. Flags conflicts before the warehouse pulls the wrong product.",
    whatItDoes: [
      "Parses the relevant fields off the plan set (inverter model, rail type, module, breaker, disconnect, domestic content flags).",
      "Reads the current BOM out of PISA.",
      "Flags conflicts on the spot, with the exact line item and the exact mismatch.",
    ],
    whyItMatters:
      'This is the "domestic rail" problem Victor walked us through. A plan revision happens, the BOM never gets updated, the warehouse pulls the wrong inverter, and the installer\'s on a roof with the wrong product.',
    scopeNote:
      "Low if the plan parses cleanly and the BOM pulls easily from the PISA API. Higher if either gets messy.",
  },
  {
    id: "post-install-photo-qa",
    number: "02",
    title: "Post-Install Photo QA",
    scope: "MED",
    whatItIs:
      "An automated check on the ~80–100-photo lender submission package, run before Sol-Up sends it out. Catches missing serials, blurred shots, missing required angles.",
    whatItDoes: [
      "Static checks first: blur detection, missing serials, barcode-based serial identification.",
      "LLM/vision-API calls layered in only where the static checks can't decide.",
      "Outputs a deficiency report flagging the exact photos that need retaking.",
    ],
    whyItMatters:
      "One bad or missing photo kicks the whole lender package back and delays final payment. This catches the kickback inside Sol-Up's four walls instead of the lender's.",
  },
  {
    id: "hoa-submission-generator",
    number: "03",
    title: "HOA Submission Generator",
    scope: "LOW–MED",
    whatItIs:
      "A tool that auto-fills the ARC form from PISA client data and pre-checks the package against that HOA's encoded rules, flagging deficiencies before it goes out.",
    whatItDoes: [
      "Pulls client and project data out of PISA and auto-populates the correct ARC form for the target HOA.",
      "Cross-checks the assembled package against that HOA's solar installation guidelines (encoded once, reused forever).",
      "Flags deficiencies before submission — missing skirting language, missing renderings, missing setbacks, whatever each HOA requires.",
    ],
    whyItMatters:
      'Same problem as a jurisdiction permit kickback, but cheaper to solve and faster to ship. Steve made the strongest case for this on the call ("eliminates a process").',
    scopeNote:
      "Low-Med for 3–5 HOAs. Each additional HOA after that is a small, predictable lift.",
  },
  {
    id: "safety-plan-generator",
    number: "04",
    title: "Safety Plan Generator",
    scope: "LOW–MED",
    whatItIs:
      "A browser-automation tool that fills out the third-party safety plan form Victor does ~100×/month, end-to-end.",
    whatItDoes:
      "Pulls the project address from PISA, opens the safety plan portal, picks the closest hospital and fire department, completes the form, downloads the PDF.",
    whyItMatters:
      "Five-minute task done a hundred times a month — roughly 8 hours of Victor's time back, every month. This is also our wedge for standing up reusable browser-automation tooling that the permitting projects downstream will need.",
  },
  {
    id: "17-point-inspection-scoring",
    number: "05",
    title: "17-Point Inspection Scoring",
    scope: "MED",
    whatItIs:
      "A capture path for the 17-point pre-inspection scores Steve already runs, plus a flag for likely-to-fail jobs before the jurisdiction is called.",
    whatItDoes: [
      "Field-friendly capture path for the 17 scores per job.",
      "A flag at submission time: based on this team's historical scores, this job is high-risk for failing inspection on X.",
      "A management view that surfaces patterns by crew over time.",
    ],
    whyItMatters:
      "The analysis itself is trivial. The bottleneck is consistent capture. The real win is fewer failed jurisdictional inspections, which are expensive in calendar time.",
  },
  {
    id: "permit-form-auto-fill",
    number: "06",
    title: "Permit Form Auto-Fill",
    scope: "MED–HIGH",
    whatItIs:
      "A tool that parses the plan set and auto-fills the jurisdiction portal forms Victor fills out manually today. Victor reviews and submits.",
    whatItDoes: [
      "Reads the plan set from Fluent and pulls the structured fields: system size, panel count, inverter model, mounting type, service panel info, jurisdiction-specific cover-page data.",
      "Opens the relevant jurisdiction portal (Henderson, Clark County, North Las Vegas, etc.) and fills the form.",
      "Stops at upload-and-submit. Victor reviews and submits.",
    ],
    whyItMatters:
      "Steve said this is 50–80% of his day on busy days. The complexity is multi-jurisdiction sprawl, which we layer in jurisdiction-by-jurisdiction as ROI proves out.",
  },
  {
    id: "permit-status-monitoring",
    number: "07",
    title: "Permit Status Monitoring",
    scope: "MED–HIGH",
    whatItIs:
      "One combined notifier that watches every jurisdiction portal Sol-Up submits to and pings Victor when status changes — instead of Victor logging into each portal every day.",
    whatItDoes:
      "Pulls signals from multiple sources (email notifications when they fire, daily portal scrapers when they don't, custom webhooks where available, a simple refresh otherwise) and routes status changes into one feed tied to the PISA permit record.",
    whyItMatters:
      "Removes a recurring daily-check task across 8–10 jurisdictions.",
    scopeNote:
      "Lots of heterogeneous sources to wire up plus ongoing per-jurisdiction maintenance. Should be built after the auto-fill tool has already mapped each portal's structure.",
  },
  {
    id: "complex-solarapp-form",
    number: "08",
    title: "Complex SolarAPP+ Form Auto-Fill",
    scope: "HIGH",
    whatItIs:
      "The ~41-page form Victor walked us through, which needs values read off the electrical drawing — not just lifted from text.",
    whatItDoes:
      "If the design files have a text backend, parse values directly. Otherwise vision-parse the diagram, with the model citing the cropped source region next to each extracted value so human review is fast.",
    whyItMatters:
      "This is the form that takes Victor 30 minutes per submission today. Big time savings if it works.",
    scopeNote: "Drops to Med if a text backend exists. High if vision-only.",
  },
  {
    id: "crew-input-infrastructure",
    number: "★",
    title: "Crew Input as Infrastructure",
    scope: "HIGH",
    whatItIs:
      "A multimodal capture layer (voice, photo, checklist) tied to paperwork crews already have to do, so clean field data flows back into PISA without adding a separate logging burden.",
    whatItDoes: [],
    whyItMatters:
      "Clean field-data capture is the shared bottleneck behind several projects above (17-point scoring, photo QA, BOM verification). Building this infrastructure once makes several future projects materially cheaper. High interest from the calls, but horizontal — not a first project.",
    isInfrastructure: true,
  },
];

export interface FinePrintItem {
  id: string;
  title: string;
  body: string;
}

export const finePrintItems: FinePrintItem[] = [
  {
    id: "ip",
    title: "Intellectual Property",
    body: "Sol-Up owns all deliverables, code, and work product produced under this engagement upon full payment. Chesterbrook retains no ownership of the deliverables or their contents. Chesterbrook may retain and reuse general methods, patterns, and frameworks developed over the course of its broader consultancy work, but will not reuse any Sol-Up-proprietary data, client information, or project-specific logic.",
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: "Both parties agree to keep proprietary business information, technical details, and project-specific data confidential. This covers PISA contents, customer data, BOM and plan data, lender submission contents, and any operational intelligence shared during the engagement. Standard exceptions apply (public information, independently developed knowledge, legally compelled disclosure).",
  },
  {
    id: "termination",
    title: "Termination",
    body: "Either party may terminate this agreement with written notice. On termination, Sol-Up pays for all hours worked through the termination date. Any completed deliverables transfer to Sol-Up per the IP terms above. No long-term commitment, no cancellation fees.",
  },
  {
    id: "contracting",
    title: "Contracting Entity",
    body: "Services under this agreement are provided by OLD CHESTERBROOK LLC, doing business as Chesterbrook.",
  },
  {
    id: "payment",
    title: "Payment Terms",
    body: "We bill at $110/engineering hour. Invoices issued biweekly based on actual hours worked through each sync, due within 7 days of receipt. Payments processed through Stripe. Third-party infrastructure costs (if applicable) passed through at cost and itemized separately.",
  },
];
