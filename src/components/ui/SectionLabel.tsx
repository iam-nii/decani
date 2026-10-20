import type { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
      <span className="tabular-nums opacity-50">{index}</span>
      <span>{children}</span>
    </p>
  );
}
