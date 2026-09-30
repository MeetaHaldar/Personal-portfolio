/** Structured grid of feature bullets for a case study. */
export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {features.map((f) => (
        <li
          key={f}
          className="flex gap-2.5 rounded-md border border-line bg-surface p-4 text-sm text-muted"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent"
          />
          <span className="min-w-0">{f}</span>
        </li>
      ))}
    </ul>
  );
}
