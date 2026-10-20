import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "./Arrow";

type Variant = "paper" | "ink" | "accent";

const variants: Record<Variant, string> = {
  paper:
    "border-paper/35 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  ink: "border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  accent:
    "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
};

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

/** The one button in the system. Square arrows, pill body. */
export function ButtonLink({
  children,
  to,
  href,
  variant = "paper",
  className = "",
  arrow = true,
}: Props) {
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-[12px] font-medium uppercase leading-none tracking-[0.14em] transition-colors duration-300 md:text-[13px] ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <Arrow className="arrow-shift h-[15px] w-[15px]" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}
