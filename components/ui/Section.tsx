import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  /** id of the heading element for aria-labelledby. */
  labelledBy?: string;
  className?: string;
  /** Set false to render without the inner Container. */
  contained?: boolean;
  children: React.ReactNode;
}

/** Semantic <section> with consistent vertical rhythm. */
export function Section({ id, labelledBy, className, contained = true, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-24 lg:py-32", className)}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
