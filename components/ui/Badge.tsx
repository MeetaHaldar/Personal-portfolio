import { cn } from "@/lib/utils";

/** Small pill used for technology tags. */
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-accent-soft/60 inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-xs text-accent transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
