import { useState, type FormEvent } from "react";
import { site } from "../lib/site";
import { usePageMeta } from "../lib/usePageMeta";
import { SectionLabel } from "../components/ui/SectionLabel";
import { MaskLine } from "../components/ui/Reveal";
import { Arrow } from "../components/ui/Arrow";

const projectTypes = [
  "Branding and identity",
  "Website or platform",
  "Product and interface",
  "Campaign and content",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "One to three months",
  "Three to six months",
  "Flexible",
];

export default function ContactPage() {
  usePageMeta({
    title: "Contact | Decani Creative Hub",
    description:
      "Tell Decani about the project. A creative studio in Accra working on brand, digital and campaign work worldwide.",
    path: "/contact",
  });

  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const type = String(data.get("type") ?? "");
    const timeline = String(data.get("timeline") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project enquiry: ${type || "new project"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Project: ${type}`,
      `Timeline: ${timeline}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email app should open with the details filled in. If it does not, write to ${site.email}.`,
    );
  };

  return (
    <>
      <section className="paper-surface on-paper relative pt-24 md:pt-32">
        <div className="sheet">
          <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/65 md:text-[11px]">
            <span className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent-deep" />
              Enquiries
            </span>
            <span>{site.location}</span>
          </div>

          <div className="grid gap-14 py-12 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
            <div className="lg:col-span-5">
              <SectionLabel index="01">Start a project</SectionLabel>
              <h1
                aria-label="Let us make something worth keeping."
                className="type-display mt-6 text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[0.92] tracking-[-0.04em] text-ink"
              >
                <MaskLine>Let us make</MaskLine>
                <MaskLine delay={0.05}>something</MaskLine>
                <MaskLine delay={0.1}>worth keeping.</MaskLine>
              </h1>
              <p className="lede mt-7 max-w-[32ch] text-ink/75">
                A few lines about the project is enough to start. We read every
                enquiry ourselves.
              </p>

              <dl className="mt-10 space-y-6 border-t border-ink/20 pt-6">
                <div>
                  <dt className="label text-ink/60">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="link-line text-[1.05rem] text-ink"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-ink/60">Studio</dt>
                  <dd className="mt-2 text-[15px] text-ink/80">
                    {site.location}. Working worldwide.
                  </dd>
                </div>
                <div>
                  <dt className="label text-ink/60">Coordinates</dt>
                  <dd className="mt-2 font-mono text-[12px] tracking-[0.08em] text-ink/70">
                    {site.coordinates}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <form onSubmit={onSubmit}>
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="label mb-1 block text-ink/70"
                    >
                      Name <span className="text-accent-ink">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="label mb-1 block text-ink/70"
                    >
                      Email <span className="text-accent-ink">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="field"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="label mb-1 block text-ink/70"
                    >
                      Company <span className="text-ink/55">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Where you work"
                      className="field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="type"
                      className="label mb-1 block text-ink/70"
                    >
                      Project
                    </label>
                    <select id="type" name="type" className="field" defaultValue={projectTypes[0]}>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="label mb-1 block text-ink/70"
                    >
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" className="field" defaultValue={timelines[1]}>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="label mb-1 block text-ink/70"
                    >
                      What are you making? <span className="text-accent-ink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="The project, the audience, what needs to happen."
                      className="field resize-y"
                    />
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[32ch] text-[12.5px] leading-snug text-ink/65">
                    This form opens your email app. Nothing is stored on this
                    site.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-ink bg-ink px-7 py-3.5 text-[12px] font-medium uppercase leading-none tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink md:text-[13px]"
                  >
                    Send the brief
                    <Arrow className="arrow-shift h-4 w-4" />
                  </button>
                </div>
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-4 min-h-[1.25rem] text-[13px] leading-snug text-ink/70"
                >
                  {status}
                </p>
              </form>
            </div>
          </div>

          <div className="border-t border-ink/20 py-10 md:py-14">
            <p className="label mb-6 text-ink/60">What happens next</p>
            <ol className="grid gap-6 sm:grid-cols-3">
              {[
                ["01", "We read it", "You get a reply from one of us, not an autoresponder."],
                ["02", "A short call", "Twenty minutes to check the fit and the shape of the work."],
                ["03", "A written plan", "Scope, route and cost, in one page. Then you decide."],
              ].map(([index, title, body]) => (
                <li key={index} className="border-t border-ink/15 pt-4">
                  <p className="label text-accent-ink">{index}</p>
                  <h2 className="type-sub mt-2 text-[1.05rem] text-ink">
                    {title}
                  </h2>
                  <p className="copy-ink mt-2 text-[14px]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div aria-hidden="true" className="stripe-band" />
      </section>
    </>
  );
}
