import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services, type Service } from "../../lib/site";
import { EASE } from "../../lib/ease";
import { SectionLabel } from "../ui/SectionLabel";
import { MaskLine } from "../ui/Reveal";
import { CropMarks } from "../ui/CropMarks";
import { Arrow } from "../ui/Arrow";
import { ButtonLink } from "../ui/ButtonLink";

function ServicePlate({ service }: { service: Service }) {
  return (
    <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${service.id}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-2">
        <AnimatePresence initial={false}>
          <motion.img
            key={service.id}
            src={service.image}
            srcSet={`${service.imageSmall} 800w, ${service.image} 1600w`}
            sizes="(min-width: 1024px) 32vw, 100vw"
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
        <CropMarks tone="paper" size={12} inset={10} />
        <p className="label absolute inset-x-4 bottom-4 flex items-baseline justify-between text-paper/75">
          <span>Plate {service.index}</span>
          <span className="hidden text-right sm:inline">{service.caption}</span>
        </p>
      </div>

      <div className="mt-6">
        <p className="copy min-h-[5.5rem]">{service.body}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="label border border-paper/20 px-3 py-1.5 text-paper/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = services.length - 1;
    const move = (next: number) => {
      event.preventDefault();
      setActive(next);
      document.getElementById(`service-tab-${services[next].id}`)?.focus();
    };
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      move(index === last ? 0 : index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      move(index === 0 ? last : index - 1);
    } else if (event.key === "Home") {
      move(0);
    } else if (event.key === "End") {
      move(last);
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-pad relative bg-ink"
    >
      <div className="sheet">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <SectionLabel index="01" className="text-paper/70">
              Services
            </SectionLabel>
            <h2
              id="services-title"
              className="type-display type-section mt-7 text-paper md:mt-10"
            >
              <MaskLine>Brand, product,</MaskLine>
              <MaskLine delay={0.06}>campaign.</MaskLine>
              <MaskLine delay={0.12}>
                <span className="type-quote text-[1.06em] normal-case text-accent">
                  One studio.
                </span>
              </MaskLine>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:self-end lg:pb-2">
            <p className="lede max-w-[32ch] text-paper/75">
              Most projects need three of the five. They stay in one room, so
              the seams do not show.
            </p>
          </div>
        </div>

        {/* Desktop: index and plate */}
        <div className="mt-14 hidden gap-10 lg:mt-20 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              role="tablist"
              aria-label="Services"
              aria-orientation="vertical"
              className="border-t border-paper/15"
            >
              {services.map((service, index) => {
                const selected = index === active;
                return (
                  <button
                    key={service.id}
                    id={`service-tab-${service.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="service-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className="group flex w-full items-center gap-4 border-b border-paper/15 py-5 text-left md:gap-6 md:py-6"
                  >
                    <span
                      className={`label w-7 shrink-0 tabular-nums transition-colors duration-300 ${
                        selected ? "text-accent" : "text-paper/55"
                      }`}
                    >
                      {service.index}
                    </span>
                    <span
                      className={`type-display text-[clamp(2.1rem,4.4vw,4.25rem)] transition-colors duration-500 ${
                        selected
                          ? "text-paper"
                          : "text-paper/50 group-hover:text-paper/70"
                      }`}
                    >
                      {service.name}
                    </span>
                    <span className="ml-auto flex shrink-0 items-center gap-4">
                      <span
                        aria-hidden="true"
                        className={`hidden h-1.5 w-1.5 transition-colors duration-300 sm:block ${
                          selected ? "bg-accent" : "bg-transparent"
                        }`}
                      />
                      <Arrow
                        className={`h-5 w-5 transition-[transform,color] duration-500 ${
                          selected
                            ? "-rotate-45 text-accent"
                            : "text-paper/45 group-hover:text-paper/70"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="copy max-w-[38ch]">
                Not sure which you need? Most projects start with a
                conversation, not a scope.
              </p>
              <ButtonLink to="/contact" variant="paper">
                Start a project
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ServicePlate service={current} />
          </div>
        </div>

        {/* Phone: every service, opened up */}
        <ol className="mt-12 lg:hidden">
          {services.map((service) => (
            <li
              key={service.id}
              className="border-t border-paper/15 py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-4">
                <span className="label tabular-nums text-accent">
                  {service.index}
                </span>
                <h3 className="type-display text-[clamp(1.8rem,7.8vw,3rem)] text-paper">
                  {service.name}
                </h3>
              </div>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden bg-ink-2">
                <img
                  src={service.image}
                  srcSet={`${service.imageSmall} 800w, ${service.image} 1600w`}
                  sizes="(min-width: 640px) 90vw, 100vw"
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <CropMarks size={10} inset={8} />
                <p className="label absolute inset-x-3 bottom-3 flex justify-between text-paper/75">
                  <span>Plate {service.index}</span>
                  <span>{service.caption}</span>
                </p>
              </div>
              <p className="copy mt-5">{service.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="label border border-paper/20 px-3 py-1.5 text-paper/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-2 flex flex-col gap-5 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between lg:hidden">
          <p className="copy max-w-[38ch]">
            Not sure which you need? Most projects start with a conversation,
            not a scope.
          </p>
          <ButtonLink to="/contact" variant="paper">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
