import { skills } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <Section id="stack" labelledBy="stack-heading">
      <SectionHeading id="stack-heading" eyebrow="06 — Stack" title="Tech" accent="stack" />

      <dl className="mt-12 space-y-8">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 50}
            className="grid gap-3 border-t border-line pt-6 md:grid-cols-[220px_1fr] md:gap-8"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-subtle">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition-all duration-300 ease-out-cubic hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
