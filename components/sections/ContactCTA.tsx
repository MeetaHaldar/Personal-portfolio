import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { site, isTodo } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

/** Build the visible list of contact links, dropping unset TODO placeholders. */
function contactLinks() {
  const links: Array<{ label: string; href: string; external: boolean; Icon: typeof Mail }> = [];
  if (!isTodo(site.email)) {
    links.push({ label: site.email, href: `mailto:${site.email}`, external: false, Icon: Mail });
  }
  if (!isTodo(site.socials.linkedin)) {
    links.push({ label: "LinkedIn", href: site.socials.linkedin, external: true, Icon: Linkedin });
  }
  if (!isTodo(site.socials.github)) {
    links.push({ label: "GitHub", href: site.socials.github, external: true, Icon: Github });
  }
  return links;
}

export function ContactCTA() {
  const links = contactLinks();

  return (
    <Section id="contact" labelledBy="contact-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <span
          className="aurora right-[-4rem] top-0 h-72 w-72 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-2)" }}
        />
        <span
          className="aurora bottom-[-4rem] left-[-4rem] h-72 w-72 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-1)", animationDelay: "-8s" }}
        />
      </div>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
            07 — Contact
          </p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl">
            Have a project in <span className="text-gradient text-gradient-animate">mind?</span>
          </h2>
          <p className="prose-body mt-5">
            I&apos;m happy to talk through websites, web applications, dashboards, APIs and custom
            software. I&apos;m also open to full-time software development roles.
          </p>

          {links.length > 0 ? (
            <ul className="mt-8 space-y-3">
              {links.map(({ label, href, external, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span
                      aria-hidden="true"
                      className="group-hover:bg-gradient-accent grid h-9 w-9 flex-none place-items-center rounded-full bg-accent-soft text-accent transition-all duration-300 ease-spring group-hover:scale-110 group-hover:text-accent-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="link-underline">{label}</span>
                    {external ? (
                      <>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-sm text-subtle">
              Contact links appear here once they are set in{" "}
              <code className="font-mono">/data/site.ts</code>.
            </p>
          )}
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="bg-gradient-accent absolute -inset-2 -z-10 rounded-[24px] opacity-10 blur-2xl"
          />
          <div className="bg-surface/90 rounded-xl border border-line p-6 shadow-lift backdrop-blur sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
