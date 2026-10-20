import { approach } from "../../lib/site";
import { SectionLabel } from "../ui/SectionLabel";
import { MaskLine, Reveal } from "../ui/Reveal";

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="paper-surface on-paper relative"
    >
      <div className="sheet section-pad">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionLabel index="02">{approach.label}</SectionLabel>
              <h2
                id="approach-title"
                className="type-display mt-8 text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.94] tracking-[-0.035em] text-ink"
              >
                <MaskLine>A short route</MaskLine>
                <MaskLine delay={0.05}>from question</MaskLine>
                <MaskLine delay={0.1}>to launch.</MaskLine>
              </h2>
              <p className="copy-ink mt-8 max-w-[34ch]">{approach.note}</p>
              <p className="label mt-10 flex items-center gap-3 text-ink/65">
                <span aria-hidden="true" className="h-px w-8 bg-accent-deep" />
                Four steps, no black boxes
              </p>
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {approach.steps.map((step, index) => (
              <li key={step.index}>
                <Reveal delay={index * 0.04}>
                  <div
                    className={`grid grid-cols-[3rem_1fr] gap-5 border-t border-ink/15 py-8 md:grid-cols-[4.5rem_1fr] md:gap-8 md:py-10 ${
                      index === approach.steps.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="type-display type-outline-ink text-[1.9rem] leading-none md:text-[2.5rem]"
                    >
                      {step.index}
                    </span>
                    <div>
                      <h3 className="type-sub text-ink">{step.title}</h3>
                      <p className="copy-ink mt-3 max-w-[46ch]">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-ink/20 pt-8 md:mt-24">
          <p className="label mb-8 text-ink/65">What you can expect</p>
          <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
            {approach.expectations.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 0.05}>
                  <h3 className="type-sub text-[1.15rem] text-ink md:text-[1.3rem]">
                    {item.title}
                  </h3>
                  <p className="copy-ink mt-3 text-[15px]">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="stripe-band" />
    </section>
  );
}
