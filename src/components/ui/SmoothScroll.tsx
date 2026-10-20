import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

/**
 * Smooth scroll for pointer devices. Switched off entirely for people who ask
 * for reduced motion, so the page keeps native scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.3,
      }}
    >
      {children}
    </ReactLenis>
  );
}
