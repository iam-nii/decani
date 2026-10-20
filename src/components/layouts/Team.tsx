import { teamMembers } from "../../lib/site";
import { SectionLabel } from "../ui/SectionLabel";
import { MaskLine, Reveal } from "../ui/Reveal";

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="on-paper relative bg-paper-2 text-ink"
    >
      <div className="sheet section-pad">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index="03">Team</SectionLabel>
            <h2
              id="team-title"
              className="type-display type-section mt-7 text-ink"
            >
              <MaskLine>Four people.</MaskLine>
              <MaskLine delay={0.06}>One room.</MaskLine>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-1">
            <p className="lede max-w-[34ch] text-ink/80">
              You talk to the people making the work. No account layer between
              you and the room.
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-[1240px] grid-cols-2 gap-x-5 gap-y-12 md:mt-20 md:gap-x-8 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <li
              key={member.name}
              className={index % 2 === 1 ? "lg:mt-14" : undefined}
            >
              <Reveal delay={index * 0.05}>
                <figure className="group">
                  <div className="relative aspect-square overflow-hidden bg-paper">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      width={249}
                      height={249}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center mix-blend-multiply grayscale transition-[filter,transform] duration-700 ease-stamp group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <span
                      aria-hidden="true"
                      className="label absolute left-0 top-0 bg-ink px-2 py-1.5 tabular-nums text-paper"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <figcaption className="mt-5 border-t border-ink/20 pt-4">
                    <h3 className="text-[16px] font-semibold leading-tight tracking-[-0.01em] md:text-[18px]">
                      {member.name}
                    </h3>
                    <p className="label mt-2 text-ink/70">{member.role}</p>
                    <p className="copy-ink mt-3 text-[13.5px] leading-snug">
                      {member.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
