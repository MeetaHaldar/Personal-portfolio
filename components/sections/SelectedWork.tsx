import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils";

function coverHint(project: Project): string {
  const dir =
    project.slug === "room-scholars"
      ? "room-scholars"
      : project.slug === "hrm-payroll-system"
        ? "hrm"
        : "inventory";
  return `Add: /public/projects/${dir}/cover.png (${project.cover.width}×${project.cover.height})`;
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal
      as="article"
      direction={flip ? "right" : "left"}
      className={cn(
        "group grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12",
        project.featured && "lg:gap-16"
      )}
    >
      <Link
        href={`/work/${project.slug}`}
        className="relative block overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:order-1"
        aria-label={`View case study: ${project.title}`}
      >
        {/* Gradient halo revealed on hover. */}
        <span
          aria-hidden="true"
          className="bg-gradient-accent absolute -inset-2 -z-10 rounded-[24px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        />
        <div className="overflow-hidden rounded-xl border border-line">
          <div className="transition-transform duration-700 ease-out-cubic group-hover:scale-[1.04]">
            <PlaceholderImage
              image={project.cover}
              hint={coverHint(project)}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Link>

      <div className={cn(flip && "lg:order-0")}>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 flex-none place-items-center rounded-full bg-accent-soft font-mono text-xs font-medium text-accent"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category}
          </p>
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
          <Link
            href={`/work/${project.slug}`}
            className="link-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="prose-body mt-3">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-1.5 text-sm text-muted">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
              <span className="min-w-0">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/work/${project.slug}`}
          className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="link-underline">View case study</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Reveal>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="01 — Selected Work"
        title="Selected"
        accent="work"
        intro="A few projects that show how I build: from the data model and APIs through to the interface."
      />
      <div className="mt-14 space-y-20 sm:mt-16 lg:space-y-28">
        {projects.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
