import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="04 — Services"
        title="What I can"
        accent="build"
        intro="Websites, applications and internal systems, built end to end or as part of a team."
      />

      <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            as="li"
            key={service.title}
            delay={i * 70}
            direction="scale"
            className="card-soft group p-6 sm:p-8"
          >
            <span
              aria-hidden="true"
              className="group-hover:bg-gradient-accent grid h-10 w-10 place-items-center rounded-full bg-accent-soft font-mono text-sm font-medium text-accent transition-all duration-300 ease-spring group-hover:scale-110 group-hover:text-accent-ink"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl text-ink">{service.title}</h3>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
          </Reveal>
        ))}
      </ul>

      <p className="mt-10 text-base text-muted">
        Have a project in mind? <LinkArrow href="/#contact">Let&apos;s build it</LinkArrow>
      </p>
    </Section>
  );
}
