import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="02 — Experience"
        title="Where I've"
        accent="worked"
        intro="Roles across software development and technical content, most recent first."
      />

      <ol className="relative mt-14 sm:mt-16">
        {/* Timeline spine */}
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-[7px] top-4 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:left-[calc(180px+7px)]"
        />
        {experience.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.company}-${item.period}`}
            delay={i * 80}
            direction="right"
            className="relative grid gap-4 py-8 pl-8 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0"
          >
            <div className="md:pr-8 md:text-right">
              <p className="font-mono text-xs uppercase tracking-wide text-subtle">{item.period}</p>
            </div>
            <span
              aria-hidden="true"
              className="bg-gradient-accent absolute left-0 top-9 h-3.5 w-3.5 rounded-full border-2 border-bg shadow-soft md:left-[180px]"
            />
            <div>
              <h3 className="font-display text-xl text-ink">{item.role}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-accent"
                    />
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li key={t}>
                    <Badge>{t}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
