import { cn } from "@/lib/utils";

/** Centered max-width wrapper with responsive horizontal padding. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
