import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import logo from "../../assets/images/decani-white.svg";
import { navLinks, site } from "../../lib/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Arrow } from "../ui/Arrow";
import { EASE } from "../../lib/ease";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Solid bar once the top of the page is out of view. */
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [location.pathname]);

  /* Which section is in the middle of the screen. */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }
    const ids = ["services", "approach", "team", "studio"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  /* Menu: lock the page, close on escape, keep tab inside the panel. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      lenis?.start();
    };
  }, [open, lenis]);

  const goToSection = (hash: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }
    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;
    setActive(hash);
    if (lenis) {
      lenis.scrollTo(target, { offset: -72, duration: 1.1 });
    } else {
      target.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 80);
  };

  const solid = scrolled || open || location.pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid
            ? "border-b border-paper/10 bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-ink/60 to-transparent"
        }`}
      >
        <div className="sheet flex h-[72px] items-center justify-between gap-6 md:h-[80px]">
          <Link
            to="/"
            aria-label="Decani Creative Hub, home"
            className="relative z-[60] flex shrink-0 items-center py-3"
          >
            <img
              src={logo}
              alt=""
              width={116}
              height={26}
              className="h-[22px] w-auto md:h-[26px]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-9">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        goToSection(link.href);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative block py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 lg:text-[12px] ${
                        isActive
                          ? "text-paper"
                          : "text-paper/60 hover:text-paper"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-0 h-px bg-accent transition-[width] duration-500 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <ButtonLink
              to="/contact"
              variant={location.pathname === "/contact" ? "accent" : "paper"}
              className="!px-5 !py-2.5"
            >
              Start a project
            </ButtonLink>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-expanded={open}
            aria-controls="site-menu"
            className="relative z-[60] -mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
              {open ? "Close" : "Menu"}
            </span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-[88px] md:hidden"
            initial={
              reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
            }
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="sheet flex flex-1 flex-col justify-between pb-10 pt-6">
              <nav aria-label="Mobile">
                <ul>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={reduced ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: EASE,
                        delay: 0.12 + index * 0.06,
                      }}
                      className="border-b border-paper/10"
                    >
                      <a
                        href={link.href}
                        onClick={(event) => {
                          event.preventDefault();
                          goToSection(link.href);
                        }}
                        className="flex items-center justify-between py-5"
                      >
                        <span className="type-display text-[2.1rem] leading-none">
                          {link.label}
                        </span>
                        <span className="label text-paper/60">
                          0{index + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-5"
              >
                <p className="label text-paper/60">Write to us</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-line block text-[17px] text-paper/85"
                >
                  {site.email}
                </a>
                <p className="copy text-[14px]">
                  {site.location}. Working worldwide.
                </p>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="group inline-flex items-center gap-3 rounded-full border border-paper/35 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper"
                >
                  Start a project
                  <Arrow className="arrow-shift h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
