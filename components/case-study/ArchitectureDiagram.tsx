import { ArrowRight, ArrowDown } from "lucide-react";
import type { Project } from "@/types";

/**
 * Lightweight architecture diagram built with semantic HTML + CSS (no image, no
 * diagram library). A visually-hidden paragraph provides the text alternative.
 */
export function ArchitectureDiagram({ architecture }: { architecture: Project["architecture"] }) {
  return (
    <figure>
      <p className="sr-only">{architecture.textAlt}</p>
      <ol
        aria-hidden="true"
        className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      >
        {architecture.flow.map((node, i) => (
          <li key={node} className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="w-full rounded-md border border-line bg-surface px-4 py-3 text-center text-sm font-medium text-ink sm:w-auto">
              {node}
            </span>
            {i < architecture.flow.length - 1 ? (
              <>
                <ArrowDown className="h-4 w-4 text-subtle sm:hidden" />
                <ArrowRight className="hidden h-4 w-4 text-subtle sm:block" />
              </>
            ) : null}
          </li>
        ))}
      </ol>
      {architecture.note ? (
        <figcaption className="mt-4 text-sm text-muted">{architecture.note}</figcaption>
      ) : null}
    </figure>
  );
}
