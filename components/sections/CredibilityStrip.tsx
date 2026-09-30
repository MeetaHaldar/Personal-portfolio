import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Only supported facts. "Since" is derived from careerStartYear in site.ts. */
const items: Array<{ label: string; statement: string }> = [
  { label: `Since ${site.careerStartYear}`, statement: "Professional web & software roles" },
  { label: "Full-stack", statement: "React / Next.js + Node.js / Express" },
  { label: "End-to-end", statement: "Design → build → test → deploy" },
  { label: "Business apps", statement: "Inventory, HRM & payroll systems" },
];

export function CredibilityStrip() {
  return (
    <section aria-label="At a glance" className="relative">
      <Container>
        <div className="bg-surface/70 rounded-xl border border-line p-2 shadow-soft backdrop-blur sm:p-3">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                delay={i * 80}
                direction="scale"
                className="hover:bg-accent-soft/50 group rounded-lg px-4 py-6 transition-colors sm:px-6"
              >
                <p className="bg-gradient-accent bg-clip-text font-mono text-xs uppercase tracking-wide text-transparent">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-muted">{item.statement}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
