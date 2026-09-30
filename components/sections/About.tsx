import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const enjoys = [
  "Backend development",
  "API development",
  "Database design",
  "Business applications",
  "Solving real workflow problems",
  "Turning requirements into working products",
];

/** Quick facts sidebar. Plain, verifiable, no invented metrics. */
const facts: Array<{ label: string; value: string }> = [
  { label: "Now", value: "Room Scholars" },
  { label: "Role", value: "Associate Software Developer" },
  { label: "Since", value: `${site.careerStartYear}` },
  { label: "Focus", value: "Backend · APIs · Databases" },
  { label: "Open to", value: "Freelance · Full-time" },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Story column */}
        <div>
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
            05 — About
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl">
            A bit about <span className="text-gradient text-gradient-animate">me</span>
          </h2>

          <div className="prose-body mt-6 space-y-4">
            <p>
              I&apos;m a backend-leaning full-stack developer who enjoys building practical software
              that solves real workflow problems for businesses. I like API development, database
              design, and turning requirements into working products.
            </p>
            <p>
              I&apos;ve worked on inventory and HR/payroll systems, and I now work on Room Scholars.
              Earlier I worked in technical content and frontend at GeeksforGeeks, and I started
              with a frontend internship.
            </p>
            <p>
              I&apos;m comfortable owning a feature end to end: shaping the data model, building the
              API, and implementing the interface people use every day.
            </p>
          </div>

          <div className="mt-8">
            <p className="eyebrow mb-3">What I enjoy working on</p>
            <ul className="flex flex-wrap gap-2">
              {enjoys.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 60} direction="scale">
                  <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition-all duration-300 ease-out-cubic hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Signature */}
          <div className="mt-10 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="font-display text-3xl italic text-accent"
              style={{ transform: "rotate(-4deg)" }}
            >
              {site.name.split(" ")[0]}
            </span>
            <span aria-hidden="true" className="h-px w-14 bg-line" />
            <span className="text-sm text-subtle">Nice to meet you</span>
          </div>
        </div>

        {/* Quick facts card */}
        <Reveal direction="right">
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <span
                aria-hidden="true"
                className="bg-gradient-accent absolute -inset-3 -z-10 rounded-[28px] opacity-15 blur-2xl"
              />
              <div className="bg-surface/90 rounded-xl border border-line p-6 shadow-lift backdrop-blur sm:p-8">
                <p className="eyebrow mb-5">Quick facts</p>
                <dl className="divide-y divide-line">
                  {facts.map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="font-mono text-xs uppercase tracking-wide text-subtle">
                        {row.label}
                      </dt>
                      <dd className="min-w-0 text-right text-sm font-medium text-ink">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {site.cv ? (
                  <a
                    href={site.cv}
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-underline">Download CV</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 ease-out-cubic group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
