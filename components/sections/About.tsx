import Image from "next/image";
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

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
            05 — About
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl">
            A bit about <span className="text-gradient text-gradient-animate">me</span>
          </h2>
          {site.portrait ? (
            <Reveal direction="scale" className="mt-8 max-w-[260px]">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="bg-gradient-accent absolute -inset-2 -z-10 rounded-[24px] opacity-30 blur-xl"
                />
                <div className="overflow-hidden rounded-xl border border-line shadow-lift">
                  <Image
                    src={site.portrait.src}
                    alt={site.portrait.alt}
                    width={480}
                    height={600}
                    sizes="260px"
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out-cubic hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>

        <div>
          <div className="prose-body space-y-4">
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
        </div>
      </div>
    </Section>
  );
}
