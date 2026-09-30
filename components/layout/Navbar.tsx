"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

/** Section ids tracked for the active-link indicator. */
const SECTION_IDS = ["home", "work", "experience", "services", "about", "contact"];

/** Map a nav href like "/#work" to its section id. */
function hrefToId(href: string): string {
  const hash = href.split("#")[1];
  return hash ?? "";
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tickingRef = useRef(false);

  // Navbar background state on scroll (rAF-throttled boolean).
  useEffect(() => {
    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        tickingRef.current = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section indicator via IntersectionObserver.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,height] duration-300 ease-out-cubic",
        scrolled
          ? "bg-bg/80 border-b border-line shadow-soft backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-[height] duration-300 ease-out-cubic",
          scrolled ? "h-14" : "h-16 sm:h-20"
        )}
      >
        <Link
          href="/#home"
          className="group flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            aria-hidden="true"
            className="bg-gradient-accent grid h-8 w-8 place-items-center rounded-full font-display text-sm font-medium text-accent-ink shadow-soft transition-transform duration-300 ease-spring group-hover:rotate-6 group-hover:scale-110"
          >
            {site.name.charAt(0)}
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => {
              const id = hrefToId(item.href);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "bg-gradient-accent absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-300 ease-out-cubic",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="/#contact" variant="primary" withArrow className="px-4 py-2">
              Let&apos;s talk
            </Button>
          </div>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} triggerRef={triggerRef} />
    </header>
  );
}
