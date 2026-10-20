import { site } from "../../lib/site";
import { MaskLine } from "../ui/Reveal";
import { ButtonLink } from "../ui/ButtonLink";

export default function CallToAction() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="on-accent relative overflow-hidden bg-accent text-ink"
    >
      <div className="sheet flex min-h-[76svh] flex-col justify-between gap-14 py-14 md:gap-20 md:py-20">
        <div className="flex items-start justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/75 md:text-[11px]">
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-ink" />
            05 / Start a project
          </span>
          <a href={`mailto:${site.email}`} className="link-line hidden py-1.5 sm:block">
            {site.email}
          </a>
        </div>

        <h2
          id="cta-title"
          className="type-display text-[clamp(2.9rem,9.6vw,9.5rem)] leading-[0.85] tracking-[-0.055em]"
        >
          <MaskLine>
            <span className="type-quote text-[1.03em] normal-case leading-[0.9]">
              Imagine.
            </span>
          </MaskLine>
          <MaskLine delay={0.07}>Then let us build.</MaskLine>
        </h2>

        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink/80 md:col-span-7 md:text-[16px]">
            Tell us what you are making, who it is for and when it needs to be
            live. We will tell you honestly whether we are the right studio for
            it.
          </p>
          <div className="md:col-span-5 md:flex md:justify-end">
            <ButtonLink to="/contact" variant="accent">
              Start a project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
