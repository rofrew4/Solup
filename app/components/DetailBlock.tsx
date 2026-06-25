interface DetailBlockProps {
  label: string;
  children: React.ReactNode;
}

export function DetailBlock({ label, children }: DetailBlockProps) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="eyebrow mb-1">{label}</p>
      <div className="prose-body">{children}</div>
    </div>
  );
}
