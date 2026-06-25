import type { ReactNode } from "react";

interface ExpandableRowProps {
  id: string;
  header: ReactNode;
  children: ReactNode;
  variant?: "roadmap" | "compact";
  infrastructure?: boolean;
}

export function ExpandableRow({
  id,
  header,
  children,
  variant = "roadmap",
  infrastructure = false,
}: ExpandableRowProps) {
  return (
    <details
      id={id}
      className={[
        "expandable-row group",
        `expandable-row--${variant}`,
        infrastructure ? "expandable-row--infrastructure" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <summary className="row-summary">{header}</summary>
      <div className="row-body">{children}</div>
    </details>
  );
}
