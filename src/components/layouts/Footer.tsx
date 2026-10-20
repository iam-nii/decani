import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import logo from "../../assets/images/decani-white.svg";
import { footer, site } from "../../lib/site";
import { ArrowUp } from "../ui/Arrow";

function useAccraTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Accra",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(format());
    const timer = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export default function Footer() {
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const time = useAccraTime();
  const year = new Date().getFullYear();

  const toTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink pt-16 md:pt-20">
      <div className="sheet">
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <img
              src={logo}
              alt="Decani Creative Hub"
              width={140}
              height={32}
              className="h-[26px] w-auto"
            />
            <p className="copy mt-6 max-w-[34ch]">{footer.blurb}</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line mt-7 inline-block py-1.5 text-[15px] text-paper/85 hover:text-paper"
            >
              {site.email}
            </a>
          </div>

          <nav
            aria-label="Studio"
            className="md:col-span-2 md:col-start-6"
          >
            <h2 className="label mb-5 text-paper/60">Studio</h2>
            <ul className="space-y-3">
              {footer.columns[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-[14px] text-paper/70 transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Services"
            className="md:col-span-2 md:col-start-8"
          >
            <h2 className="label mb-5 text-paper/60">Services</h2>
            <ul className="space-y-3">
              {footer.columns[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-[14px] text-paper/70 transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:col-start-10">
            <h2 className="label mb-5 text-paper/60">Contact</h2>
            <p className="text-[14px] leading-relaxed text-paper/70">
              {site.location}
              <br />
              Working worldwide
            </p>
            <p className="label mt-6 flex items-center gap-2 text-paper/60">
              Local time
              <span className="text-paper/80" aria-live="off">
                {time || "--:--"}
              </span>
              <span className="text-paper/60">GMT</span>
            </p>
            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
            >
              Start a project
              <ArrowUp className="h-3.5 w-3.5 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-paper/60">
            © {year} Decani Creative Hub. All rights reserved.
          </p>
          <p className="label hidden text-paper/60 md:block">
            Brand / Digital / Campaigns
          </p>
          <button
            type="button"
            onClick={toTop}
            className="label group flex items-center gap-2 self-start py-2 text-paper/60 transition-colors duration-300 hover:text-paper sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="type-display -mb-[0.13em] select-none whitespace-nowrap px-[1.2vw] text-[clamp(4.2rem,20vw,20rem)] leading-[0.7] tracking-[-0.06em] text-transparent"
        style={{ WebkitTextStroke: "1px rgba(243,239,228,0.22)" }}
      >
        Decani
      </p>
    </footer>
  );
}
