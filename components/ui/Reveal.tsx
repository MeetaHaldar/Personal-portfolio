"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  /** Stagger delay in ms. */
  delay?: number;
  /** Direction the element travels in from. */
  direction?: "up" | "left" | "right" | "scale";
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
  children: React.ReactNode;
}

// One shared observer for every Reveal on the page.
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callbacks.get(entry.target)?.();
            sharedObserver?.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
  }
  return sharedObserver;
}

/**
 * Fade + rise on scroll, once. Content is always visible when JS or the
 * observer is unavailable (see `.no-js .reveal` and the immediate fallback).
 */
export function Reveal({
  delay = 0,
  direction = "up",
  as = "div",
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    if (!observer) {
      setVisible(true);
      return;
    }
    callbacks.set(el, () => setVisible(true));
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-dir={direction === "up" ? undefined : direction}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
