import type { Project } from "@/types";
import { isTodo } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

function dirFor(slug: string): string {
  if (slug === "room-scholars") return "room-scholars";
  if (slug === "hrm-payroll-system") return "hrm";
  return "inventory";
}

export function CaseStudyHero({ project }: { project: Project }) {
  const showLive = Boolean(project.liveUrl) && !isTodo(project.liveUrl);
  const showGithub = Boolean(project.githubUrl) && !isTodo(project.githubUrl);

  return (
    <header>
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.category}</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">{project.title}</h1>
      <p className="prose-body mt-4">{project.summary}</p>

      <dl className="mt-8 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-subtle">Role</dt>
          <dd className="mt-1 text-sm text-ink">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-subtle">Timeframe</dt>
          <dd className="mt-1 text-sm text-ink">{project.timeframe}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-subtle">Stack</dt>
          <dd className="mt-1 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </dd>
        </div>
      </dl>

      {showLive || showGithub ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {showLive ? (
            <Button href={project.liveUrl as string} external variant="primary" withArrow>
              Live project
            </Button>
          ) : null}
          {showGithub ? (
            <Button href={project.githubUrl as string} external variant="secondary" withArrow>
              GitHub
            </Button>
          ) : null}
        </div>
      ) : null}

      <div className="mt-10">
        <PlaceholderImage
          image={project.cover}
          hint={`Add: /public/projects/${dirFor(project.slug)}/cover.png (${project.cover.width}×${project.cover.height})`}
          sizes="(min-width: 1024px) 960px, 100vw"
        />
      </div>
    </header>
  );
}
