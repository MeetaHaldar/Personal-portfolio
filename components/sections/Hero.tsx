import { Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** At-a-glance factual rows. Edit via /data if these change. */
const glance: Array<{ label: string; value: string }> = [
  { label: "Role", value: "Associate Software Developer" },
  { label: "Currently", value: "Room Scholars" },
  { label: "Focus", value: "Backend, APIs, databases" },
  { label: "Open to", value: "Freelance projects · Full-time roles" },
];

const primaryTech = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "SQL"];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40"
    >
      {/* Decorative aurora — soft drifting colour, hidden from AT. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
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
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="animate-fade-up bg-surface/80 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted shadow-soft backdrop-blur">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>

            <h1
              id="hero-heading"
              className="animate-fade-up mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.75rem]"
              style={{ animationDelay: "60ms" }}
            >
              Backend-leaning{" "}
              <span className="text-gradient text-gradient-animate">full-stack developer</span>.
            </h1>

            <p className="animate-fade-up prose-body mt-5" style={{ animationDelay: "140ms" }}>
              I build reliable web applications and business software, from database design and APIs
              to the interface people actually use. Currently building at Room Scholars.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "220ms" }}
            >
              <Button href="/#work" variant="primary" withArrow>
                View my work
              </Button>
              <Button href="/#contact" variant="secondary" withArrow>
                Let&apos;s work together
              </Button>
            </div>

            <ul
              className="animate-fade-up mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-subtle"
              style={{ animationDelay: "300ms" }}
            >
              {primaryTech.map((t) => (
                <li key={t} className="transition-colors hover:text-accent">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* At-a-glance panel: typographic, floating, no fake code window. */}
          <div className="animate-fade-up relative" style={{ animationDelay: "260ms" }}>
            <div className="motion-safe:lg:animate-float-slow">
              {/* Soft gradient halo behind the card. */}
              <div
                aria-hidden="true"
                className="bg-gradient-accent absolute -inset-3 -z-10 rounded-[28px] opacity-20 blur-2xl"
              />
              <div className="bg-surface/90 rounded-xl border border-line p-6 shadow-lift backdrop-blur sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                  <p className="eyebrow">At a glance</p>
                </div>
                <dl className="divide-y divide-line">
                  {glance.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wide text-subtle">
                        {row.label}
                      </dt>
                      <dd className="min-w-0 text-sm font-medium text-ink sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
