import DecaniYellowLogo from "../../assets/images/decani-yellow.svg";
import { site, studio } from "../../lib/site";
import { SectionLabel } from "../ui/SectionLabel";
import { MaskLine, Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/ButtonLink";

export default function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="section-pad relative overflow-hidden bg-ink"
    >
      <img
        src={DecaniYellowLogo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden w-[520px] -translate-y-1/2 rotate-90 opacity-[0.07] lg:block"
      />

      <div className="sheet relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionLabel index="04" className="text-paper/70">
              {studio.label}
            </SectionLabel>
            <h2
              id="studio-title"
              className="type-display mt-8 text-[clamp(2.2rem,4vw,3.7rem)] leading-[0.94] tracking-[-0.035em] text-paper"
            >
              <MaskLine>A studio built</MaskLine>
              <MaskLine delay={0.05}>for the part</MaskLine>
              <MaskLine delay={0.1}>after the pitch.</MaskLine>
            </h2>
            <Reveal>
              <blockquote className="mt-12 border-l border-accent/70 pl-5">
                <p className="type-quote text-[clamp(1.5rem,2.2vw,2rem)] text-paper">
                  Good work is a decision, made early, and defended.
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="lede max-w-[38ch] text-paper/90">
                {studio.paragraphs[0]}
              </p>
            </Reveal>
            <div className="mt-7 space-y-5">
              {studio.paragraphs.slice(1).map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                  <p className="copy max-w-[52ch]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7">
              {studio.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-paper/15 pt-3"
                >
                  <dt className="label text-paper/60">{fact.label}</dt>
                  <dd className="mt-2 text-[15px] text-paper/85 md:text-[16px]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
              <ButtonLink to="/contact" variant="paper">
                Work with us
              </ButtonLink>
              <a
                href={`mailto:${site.email}`}
                className="link-line py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/75 hover:text-paper md:text-[12px]"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
