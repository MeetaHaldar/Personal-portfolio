import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const primaryTech = ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "SQL"];

/** Small floating chips that orbit the portrait. */
const orbitChips: Array<{ text: string; className: string; delay: string }> = [
  {
    text: "APIs",
    className: "left-[-8%] top-[18%]",
    delay: "-1s",
  },
  {
    text: "Databases",
    className: "right-[-10%] top-[42%]",
    delay: "-3.5s",
  },
  {
    text: "Full-stack",
    className: "bottom-[10%] left-[-4%]",
    delay: "-5s",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-8 pt-28 sm:pt-32 lg:pb-16 lg:pt-40"
    >
      {/* Decorative aurora — soft drifting colour, hidden from AT. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span
          className="aurora left-[-6rem] top-[-4rem] h-72 w-72 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-1)" }}
        />
        <span
          className="aurora right-[-4rem] top-24 h-80 w-80 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-2)", animationDelay: "-6s" }}
        />
        <span
          className="aurora bottom-[-6rem] left-1/3 h-72 w-72 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-3)", animationDelay: "-12s" }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
          {/* Text column */}
          <div>
            <p className="animate-fade-up bg-surface/80 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted shadow-soft backdrop-blur">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>

            <p
              className="animate-fade-up mt-7 font-display text-xl text-muted sm:text-2xl"
              style={{ animationDelay: "40ms" }}
            >
              Hi, I&apos;m <span className="font-medium text-ink">{site.name.split(" ")[0]}</span>{" "}
              <span aria-hidden="true" className="inline-block motion-safe:animate-wave">
                👋
              </span>
            </p>

            <h1
              id="hero-heading"
              className="animate-fade-up mt-3 text-balance text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.5rem]"
              style={{ animationDelay: "80ms" }}
            >
              I build <span className="text-gradient text-gradient-animate">web apps</span> &amp;
              business software that people rely on.
            </h1>

            <p className="animate-fade-up prose-body mt-6" style={{ animationDelay: "160ms" }}>
              A backend-leaning full-stack developer working from database design and APIs through
              to the interface people actually use. Currently building at Room Scholars.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="/#work" variant="primary" withArrow>
                View my work
              </Button>
              <Button href="/#contact" variant="secondary" withArrow>
                Let&apos;s work together
              </Button>
            </div>

            <div
              className="animate-fade-up mt-10 flex items-center gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
                Working with
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <ul
              className="animate-fade-up mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-subtle"
              style={{ animationDelay: "360ms" }}
            >
              {primaryTech.map((t) => (
                <li key={t} className="transition-colors hover:text-accent">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait column */}
          <div
            className="animate-fade-up relative mx-auto w-full max-w-sm"
            style={{ animationDelay: "220ms" }}
          >
            <div className="relative motion-safe:lg:animate-float-slow">
              {/* Gradient halo */}
              <div
                aria-hidden="true"
                className="bg-gradient-accent absolute -inset-4 -z-10 rounded-[36px] opacity-25 blur-2xl"
              />
              {/* Dotted decorative frame offset behind */}
              <div
                aria-hidden="true"
                className="border-accent/40 absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[32px] border-2 border-dashed"
              />

              {site.portrait ? (
                <div className="relative overflow-hidden rounded-[32px] border border-line shadow-lift">
                  <Image
                    src={site.portrait.src}
                    alt={site.portrait.alt}
                    width={640}
                    height={760}
                    priority
                    sizes="(min-width: 1024px) 384px, 80vw"
                    className="h-auto w-full object-cover"
                  />
                  {/* Soft gradient wash for cohesion with the palette */}
                  <div
                    aria-hidden="true"
                    className="from-accent/15 pointer-events-none absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="bg-gradient-accent grid aspect-[4/5] place-items-center rounded-[32px] text-6xl font-medium text-accent-ink shadow-lift"
                >
                  {site.name.charAt(0)}
                </div>
              )}

              {/* Floating orbit chips */}
              {orbitChips.map((chip) => (
                <span
                  key={chip.text}
                  aria-hidden="true"
                  className={`bg-surface/90 absolute rounded-full border border-line px-3 py-1.5 font-mono text-xs text-accent shadow-soft backdrop-blur motion-safe:animate-float-slow ${chip.className}`}
                  style={{ animationDelay: chip.delay }}
                >
                  {chip.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <Link
          href="/#work"
          aria-label="Scroll to work"
          className="animate-fade-up mt-14 hidden items-center gap-2 text-xs text-subtle transition-colors hover:text-accent lg:inline-flex"
          style={{ animationDelay: "420ms" }}
        >
          <ArrowDown className="h-4 w-4 motion-safe:animate-bounce-soft" aria-hidden="true" />
          Scroll to explore
        </Link>
      </Container>
    </section>
  );
}
