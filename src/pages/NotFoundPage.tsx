import { usePageMeta } from "../lib/usePageMeta";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionLabel } from "../components/ui/SectionLabel";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found | Decani Creative Hub",
    description:
      "That page is not on the press. Head back to Decani Creative Hub or start a project.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="relative flex min-h-[86svh] items-center overflow-hidden bg-ink pb-20 pt-32">
      <div className="sheet">
        <SectionLabel index="404" className="text-paper/60">
          Off the sheet
        </SectionLabel>

        <p
          aria-hidden="true"
          className="type-display mt-6 select-none text-[clamp(7rem,28vw,24rem)] leading-[0.72] tracking-[-0.06em] text-paper/15"
        >
          404
        </p>

        <div className="mt-8 grid gap-8 border-t border-paper/15 pt-8 md:grid-cols-12">
          <h1 className="type-display type-sub col-span-full max-w-[18ch] text-paper md:col-span-6">
            This page is not on the press.
          </h1>
          <div className="md:col-span-5 md:col-start-8">
            <p className="copy max-w-[40ch]">
              It may have moved, or it may never have existed. The studio is
              still here.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink to="/" variant="paper">
                Back to the studio
              </ButtonLink>
              <ButtonLink to="/contact" variant="paper" arrow={false}>
                Start a project
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
