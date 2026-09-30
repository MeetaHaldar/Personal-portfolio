import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { getProject, projectSlugs } from "@/data/projects";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { FeatureList } from "@/components/case-study/FeatureList";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { ScreenshotGallery } from "@/components/case-study/ScreenshotGallery";
import { NextProject } from "@/components/case-study/NextProject";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildPageMetadata({
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasScreenshots = project.screenshots.length > 0;

  return (
    <article className="pt-28 sm:pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-subtle">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-ink">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="text-muted">
                {project.title}
              </li>
            </ol>
          </nav>

          <CaseStudyHero project={project} />

          <div className="mt-14 space-y-12">
            {project.overview ? (
              <CaseStudySection title="Overview">
                <p className="prose-body">{project.overview}</p>
              </CaseStudySection>
            ) : null}

            {project.problem ? (
              <CaseStudySection title="The problem">
                <p className="prose-body">{project.problem}</p>
              </CaseStudySection>
            ) : null}

            {project.contribution ? (
              <CaseStudySection title="My contribution">
                <p className="prose-body">{project.contribution}</p>
              </CaseStudySection>
            ) : null}

            {project.features.length > 0 ? (
              <CaseStudySection title="Key features">
                <FeatureList features={project.features} />
              </CaseStudySection>
            ) : null}

            {project.architecture.flow.length > 0 ? (
              <CaseStudySection title="Architecture & workflow">
                <ArchitectureDiagram architecture={project.architecture} />
              </CaseStudySection>
            ) : null}

            {project.techGroups.length > 0 ? (
              <CaseStudySection title="Technology used">
                <dl className="space-y-4">
                  {project.techGroups.map((group) => (
                    <div key={group.label} className="sm:flex sm:gap-6">
                      <dt className="font-mono text-xs uppercase tracking-wide text-subtle sm:w-40 sm:flex-none sm:pt-1">
                        {group.label}
                      </dt>
                      <dd className="mt-1 flex flex-wrap gap-2 sm:mt-0">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-line bg-surface px-3 py-1 text-sm text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CaseStudySection>
            ) : null}

            {hasScreenshots ? (
              <CaseStudySection title="Screenshots">
                <ScreenshotGallery slug={project.slug} screenshots={project.screenshots} />
              </CaseStudySection>
            ) : null}

            <NextProject currentSlug={project.slug} />

            <Link
              href="/#work"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to all work
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
