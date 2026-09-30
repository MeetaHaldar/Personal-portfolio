import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A large editorial statement. Individual clauses fade in on scroll, and the
 * key phrases are highlighted with the accent for rhythm.
 */
export function Statement() {
  return (
    <Section label="What I care about" className="py-20 sm:py-28 lg:py-36">
      <Reveal className="mx-auto max-w-4xl">
        <p className="eyebrow mb-6 flex items-center gap-2">
          <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
          The short version
        </p>
        <p className="font-display text-2xl leading-[1.35] text-ink sm:text-3xl lg:text-[2.6rem] lg:leading-[1.3]">
          I like software that <span className="text-gradient">does real work</span> — the kind a
          team logs into every day. I care about clean data models, APIs that are pleasant to use,
          and interfaces that <span className="text-gradient">stay out of the way</span>. Not
          buzzwords. Just things that ship and hold up.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span
            aria-hidden="true"
            className="font-display text-3xl italic text-accent"
            style={{ transform: "rotate(-4deg)" }}
          >
            {site.name.split(" ")[0]}
          </span>
          <span aria-hidden="true" className="h-px w-16 bg-line" />
          <span className="text-sm text-subtle">{site.title}</span>
        </div>
      </Reveal>
    </Section>
  );
}
