interface DetailBlockProps {
  label: string;
  children: React.ReactNode;
  boldLabel?: boolean;
}

export function DetailBlock({ label, children, boldLabel = false }: DetailBlockProps) {
  return (
    <div className="mb-3 last:mb-0">
      <p className={`eyebrow mb-1 ${boldLabel ? "font-bold" : ""}`}>{label}</p>
      <div className="prose-body">{children}</div>
    </div>
  );
}
