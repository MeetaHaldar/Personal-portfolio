import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkArrowProps {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Inline text link with an arrow that nudges on hover. */
export function LinkArrow({ href, external, className, children }: LinkArrowProps) {
  const classes = cn(
    "group inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent focus-visible:text-accent",
    className
  );
  const inner = (
    <>
      <span className="link-underline">{children}</span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
