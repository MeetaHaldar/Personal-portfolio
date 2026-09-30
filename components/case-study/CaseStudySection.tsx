interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
}

/** A titled block within a case study. Render nothing if there is no content. */
export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section aria-label={title} className="border-t border-line pt-10">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
