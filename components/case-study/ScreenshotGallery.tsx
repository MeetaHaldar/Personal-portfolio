import type { ProjectImage } from "@/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

function dirFor(slug: string): string {
  if (slug === "room-scholars") return "room-scholars";
  if (slug === "hrm-payroll-system") return "hrm";
  return "inventory";
}

export function ScreenshotGallery({
  slug,
  screenshots,
}: {
  slug: string;
  screenshots: ProjectImage[];
}) {
  const dir = dirFor(slug);
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {screenshots.map((shot, i) => (
        <li key={shot.alt}>
          <figure>
            <PlaceholderImage
              image={shot}
              hint={`Add: /public/projects/${dir}/screenshot-${i + 1}.png (${shot.width}×${shot.height})`}
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            {shot.caption ? (
              <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>
            ) : null}
          </figure>
        </li>
      ))}
    </ul>
  );
}
