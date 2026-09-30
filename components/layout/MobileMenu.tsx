"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { site } from "@/data/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Ref of the trigger button, so focus returns to it on close. */
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

/** Accessible slide-down menu: focus trap, Escape, scroll lock, staggered links. */
export function MobileMenu({ open, onClose, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      (trigger ?? previouslyFocused)?.focus();
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <button
        type="button"
        aria-label="Close menu"
        className="bg-ink/40 absolute inset-0 h-full w-full"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-bg p-6 shadow-lift"
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-8 flex flex-col">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={onClose}
              className="mm-link border-b border-line py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
