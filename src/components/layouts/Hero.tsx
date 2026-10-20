import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useLenis } from "lenis/react";
import { hero, site } from "../../lib/site";
import { EASE } from "../../lib/ease";
import { MaskLine } from "../ui/Reveal";

const tickerItems = [
  "Branding",
  "Creative design",
  "UI and UX",
  "Development",
  "Marketing",
  "Accra, Ghana",
  "Working worldwide",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const onCue = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("services");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -72, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* Plate */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-x-0 -inset-y-[8%]"
          style={{ y: reduced ? 0 : backgroundY }}
        >
          <motion.div
            className="h-full w-full"
            initial={reduced ? false : { scale: 1.16 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.6, ease: EASE }}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet="/hero-tall.jpg" />
              <img
                src="/hero-wide.jpg"
                alt=""
                width={1920}
                height={1100}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center brightness-[0.58] contrast-[1.08] saturate-[0.5]"
              />
            </picture>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/25 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_0%,rgba(10,11,10,0.62)_100%)]" />
        <div className="absolute inset-0 bg-accent/20 mix-blend-soft-light" />
      </div>

      <div className="sheet relative z-10 flex flex-1 flex-col justify-between gap-8 pb-6 pt-20 md:pb-8 md:pt-24">
        {/* Corner meta */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60 md:text-[11px]"
        >
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            {hero.metaLeft}
          </span>
          <span className="text-right">
            {site.location}
            <span className="hidden sm:inline">
              {" "}
              <span className="text-paper/30">/</span> {site.coordinates}
            </span>
          </span>
        </motion.div>

        <h1
          id="hero-title"
          aria-label="Decani Creative Agency"
          className="type-display type-hero text-paper"
        >
          {hero.words.map((word, index) => (
            <MaskLine
              key={word}
              trigger="load"
              delay={0.12 + index * 0.09}
              duration={1.15}
            >
              {index === 1 ? (
                <span className="type-outline">{word}</span>
              ) : (
                <>
                  {word}
                  {index === 2 ? (
                    <span
                      aria-hidden="true"
                      className="ml-[0.05em] inline-block h-[0.13em] w-[0.13em] translate-y-[-0.05em] bg-accent"
                    />
                  ) : null}
                </>
              )}
            </MaskLine>
          ))}
        </h1>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="lede max-w-[36ch] text-paper/75"
          >
            {hero.lede}
          </motion.p>

          <motion.a
            href="#services"
            onClick={onCue}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="group flex items-center gap-4 self-start sm:self-auto"
          >
            <span
              aria-hidden="true"
              className="relative block h-12 w-px overflow-hidden bg-paper/25"
            >
              {reduced ? (
                <span className="absolute inset-x-0 top-0 block h-1/2 bg-accent" />
              ) : (
                <motion.span
                  className="absolute inset-x-0 top-0 block h-1/2 bg-accent"
                  animate={{ y: ["-100%", "220%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60 transition-colors duration-300 group-hover:text-paper md:text-[11px]">
              Scroll to the index
            </span>
          </motion.a>
        </div>
      </div>

      {/* Service ticker, part of the hero frame */}
      <div
        aria-hidden="true"
        className="relative z-10 flex h-11 items-center overflow-hidden border-t border-ink/20 bg-accent text-ink"
      >
        <div className="marquee w-full">
          <div className="marquee-track">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {tickerItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
                  >
                    {item}
                    <span className="h-1 w-1 bg-ink/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
