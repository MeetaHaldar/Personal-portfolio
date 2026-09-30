"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Thin gradient progress bar fixed to the top of the viewport. Updates are
 * rAF-throttled off a passive scroll listener, and it stays a subtle 2px line.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const value = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, value)));
      ticking.current = false;
    }
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left">
      <div
        className="bg-gradient-accent h-full origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
