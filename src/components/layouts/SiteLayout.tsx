import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import { SmoothScroll } from "../ui/SmoothScroll";

function SiteFrame() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      const timer = window.setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(target, { offset: -72, duration: 1.1 });
        } else {
          target.scrollIntoView({
            behavior: reduced ? "auto" : "smooth",
            block: "start",
          });
        }
      }, 80);
      return () => window.clearTimeout(timer);
    }

    if (previousPath.current !== pathname) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
    previousPath.current = pathname;
  }, [pathname, hash, lenis, reduced]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-paper focus:px-4 focus:py-3 focus:text-[13px] focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <div
        id="scroll-sentinel"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-12 w-px"
      />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <div aria-hidden="true" className="grain-layer" />
    </>
  );
}

export default function SiteLayout() {
  return (
    <SmoothScroll>
      <SiteFrame />
    </SmoothScroll>
  );
}
