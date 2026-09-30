import Image from "next/image";
import type { ProjectImage } from "@/types";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  image: ProjectImage;
  /** next/image sizes attribute for responsive loading. */
  sizes?: string;
  /** Set true for above-the-fold images (none here are, by default). */
  priority?: boolean;
  className?: string;
  /** Instructional path label shown on the placeholder, e.g. the target file. */
  hint?: string;
}

/**
 * Renders a real image with next/image when `image.src` is set, otherwise a
 * polished placeholder (neutral surface + CSS grid lines) that names the file
 * the owner should add. No fake screenshots are ever drawn.
 */
export function PlaceholderImage({
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
  hint,
}: PlaceholderImageProps) {
  const ratio = `${image.width} / ${image.height}`;

  if (image.src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-line bg-surface-2",
          className
        )}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "to-accent-soft/40 relative grid place-items-center overflow-hidden rounded-xl border border-line bg-gradient-to-br from-surface-2",
        className
      )}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={image.alt}
    >
      {/* Decorative CSS grid lines (not an image). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-[80%] text-center">
        <p className="eyebrow">Screenshot placeholder</p>
        <p className="mt-2 break-words font-mono text-xs text-muted">
          {hint ?? "Add image and set its src in /data/projects.ts"}
        </p>
      </div>
    </div>
  );
}
