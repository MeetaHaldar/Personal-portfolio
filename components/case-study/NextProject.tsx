import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

/** "Next project" navigation + a closing CTA. */
export function NextProject({ currentSlug }: { currentSlug: string }) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="border-t border-line pt-10">
      <div className="rounded-lg border border-line bg-surface p-8 sm:p-10">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Have a project like this in mind?
        </h2>
        <p className="prose-body mt-3">
          I&apos;m happy to talk through what you&apos;re building and how I can help.
        </p>
        <div className="mt-6">
          <Button href="/#contact" variant="primary" withArrow>
            Start a conversation
          </Button>
        </div>
      </div>

      {next && next.slug !== currentSlug ? (
        <Link
          href={`/work/${next.slug}`}
          className="group mt-10 flex items-center justify-between gap-4 rounded-lg border border-line p-6 transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>
            <span className="font-mono text-xs uppercase tracking-wide text-subtle">
              Next project
            </span>
            <span className="mt-1 block font-display text-xl text-ink">{next.title}</span>
          </span>
          <ArrowRight
            className="h-5 w-5 flex-none text-muted transition-transform duration-200 ease-out-cubic group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
