import { process } from "@/data/process";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowIWork() {
  return (
    <Section id="process" labelledBy="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="03 — Process"
        title="How I"
        accent="work"
        intro="I can take a project from idea to deployment on my own, or as part of a team."
      />

      <ol className="relative mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {/* Connecting gradient line on desktop, behind the number badges. */}
        <span
          aria-hidden="true"
          className="absolute left-5 right-5 top-5 hidden h-px bg-gradient-to-r from-accent via-accent-2 to-gold lg:block"
        />
        {process.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 80}
            direction="up"
            className="group relative"
          >
            <span
              aria-hidden="true"
              className="group-hover:bg-gradient-accent grid h-10 w-10 place-items-center rounded-full border border-line bg-surface font-mono text-sm font-medium text-accent shadow-soft transition-all duration-300 ease-spring group-hover:scale-110 group-hover:text-accent-ink"
            >
              {step.number}
            </span>
            <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
