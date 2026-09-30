import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-out-cubic active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-accent text-accent-ink shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border border-line bg-surface/70 text-ink backdrop-blur hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "text-ink hover:bg-surface-2",
};

interface CommonProps {
  variant?: Variant;
  /** Show a trailing arrow that nudges right on hover. */
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    /** External links open in a new tab with safe rel. */
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Arrow() {
  return (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

/** Polymorphic button that renders a <button>, internal <Link> or external <a>. */
export function Button(props: ButtonProps) {
  const { variant = "primary", withArrow, className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external,
      variant: _v,
      withArrow: _a,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    const content = (
      <>
        {children}
        {withArrow ? <Arrow /> : null}
      </>
    );
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const {
    variant: _v,
    withArrow: _a,
    className: _c,
    children: _ch,
    ...rest
  } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
      {withArrow ? <Arrow /> : null}
    </button>
  );
}
