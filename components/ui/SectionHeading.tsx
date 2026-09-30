import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small mono eyebrow, e.g. "01 — Selected Work". */
  eyebrow?: string;
  title: string;
  /** Optional trailing word rendered with the animated gradient. */
  accent?: string;
  /** id applied to the h2 for aria-labelledby. */
  id?: string;
  intro?: string;
  className?: string;
  align?: "left" | "center";
}

/** Consistent section header: eyebrow + h2 + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  id,
  intro,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-prose", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3 flex items-center gap-2",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl sm:text-4xl">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="text-gradient text-gradient-animate">{accent}</span>
          </>
        ) : null}
      </h2>
      {intro ? (
        <p className={cn("prose-body mt-4", align === "center" && "mx-auto")}>{intro}</p>
      ) : null}
    </div>
  );
}
