import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { EASE } from "../../lib/ease";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
};

/** Quiet content lift. Skipped for reduced motion so nothing hides. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type MaskLineProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "load" | "view";
  duration?: number;
};

/** A single line of type that rises out of its own mask. */
export function MaskLine({
  children,
  className,
  delay = 0,
  trigger = "view",
  duration = 1,
}: MaskLineProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  if (reduced) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  const visible = trigger === "load" || inView;

  return (
    <span
      ref={ref}
      className="block overflow-hidden pb-[0.06em]"
    >
      <motion.span
        className={`block will-change-transform ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={visible ? { y: "0%" } : { y: "110%" }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Image that opens like a plate going onto the press. */
export function ClipReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
