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
      "You stop sending installers to the roof with the wrong equipment because a plan revision never made it into the BOM.",
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
      "You get final payment sooner because lender packages go out clean the first time instead of bouncing back for bad or missing photos.",
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
      "You stop losing days to HOA rejections by catching missing documents and requirements before the ARC package goes out.",
    scopeNote:
      "Low-Med for 3–5 HOAs. Each additional HOA after that is a small, predictable lift.",
  },
  {
    id: "safety-plan-generator",
    number: "04",
    title: "Safety Plan Generator",
    scope: "LOW–MED",
    whatItIs:
      "A browser-automation tool that fills out the third-party safety plan form Steve does ~100×/month, end-to-end.",
    whatItDoes:
      "Pulls the project address from PISA, opens the safety plan portal, picks the closest hospital and fire department, completes the form, downloads the PDF.",
    whyItMatters:
      "Your team stops filling out the same safety plan form by hand roughly a hundred times a month.",
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
      "You fail fewer jurisdictional inspections because scores are captured consistently and risky jobs get flagged before the inspector is called.",
  },
  {
    id: "permit-form-auto-fill",
    number: "06",
    title: "Permit Form Auto-Fill",
    scope: "MED–HIGH",
    whatItIs:
      "A tool that parses the plan set and auto-fills the jurisdiction portal forms Steve fills out manually today. Steve reviews and submits.",
    whatItDoes: [
      "Reads the plan set from Fluent and pulls the structured fields: system size, panel count, inverter model, mounting type, service panel info, jurisdiction-specific cover-page data.",
      "Opens the relevant jurisdiction portal (Henderson, Clark County, North Las Vegas, etc.) and fills the form.",
      "Stops at upload-and-submit. Steve reviews and submits.",
    ],
    whyItMatters:
      "Your permitting team gets back most of the day on heavy permit days because jurisdiction portal forms are pre-filled from the plan set instead of typed in by hand.",
  },
  {
    id: "permit-status-monitoring",
    number: "07",
    title: "Permit Status Monitoring",
    scope: "MED–HIGH",
    whatItIs:
      "One combined notifier that watches every jurisdiction portal Sol-Up submits to and pings Steve when status changes — instead of Steve logging into each portal every day.",
    whatItDoes:
      "Pulls signals from multiple sources (email notifications when they fire, daily portal scrapers when they don't, custom webhooks where available, a simple refresh otherwise) and routes status changes into one feed tied to the PISA permit record.",
    whyItMatters:
      "Your team stops logging into eight to ten jurisdiction portals every day and still knows right away when a permit status changes.",
    scopeNote:
      "Lots of heterogeneous sources to wire up plus ongoing per-jurisdiction maintenance. Should be built after the auto-fill tool has already mapped each portal's structure.",
  },
  {
    id: "complex-solarapp-form",
    number: "08",
    title: "Complex SolarAPP+ Form Auto-Fill",
    scope: "HIGH",
    whatItIs:
      "The ~41-page form Steve walked us through, which needs values read off the electrical drawing — not just lifted from text.",
    whatItDoes:
      "If the design files have a text backend, parse values directly. Otherwise vision-parse the diagram, with the model citing the cropped source region next to each extracted value so human review is fast.",
    whyItMatters:
      "Each complex submission saves about thirty minutes of manual data entry by pulling values straight off the electrical drawing.",
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
      "Your crews capture field data once, in the flow of work they already do, so downstream tools like photo QA, BOM checks, and inspection scoring all run on reliable data without extra logging.",
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
