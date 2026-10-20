type Tone = "paper" | "ink";

/** Four corner registration marks. Purely a print device, hidden from AT. */
export function CropMarks({
  tone = "paper",
  size = 14,
  inset = 0,
}: {
  tone?: Tone;
  size?: number;
  inset?: number;
}) {
  const color = tone === "ink" ? "border-ink/45" : "border-paper/45";
  const shared = `${color} pointer-events-none absolute`;

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span
        className={`${shared} border-l border-t`}
        style={{ width: size, height: size, top: inset, left: inset }}
      />
      <span
        className={`${shared} border-r border-t`}
        style={{ width: size, height: size, top: inset, right: inset }}
      />
      <span
        className={`${shared} border-b border-l`}
        style={{ width: size, height: size, bottom: inset, left: inset }}
      />
      <span
        className={`${shared} border-b border-r`}
        style={{ width: size, height: size, bottom: inset, right: inset }}
      />
    </span>
  );
}
