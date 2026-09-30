import { Mail, Linkedin, Github, Twitter, Code2, ArrowUpRight } from "lucide-react";
import { site, isTodo } from "@/data/site";
import { Section } from "@/components/ui/Section";

/** Build the visible list of connection links, dropping unset TODO placeholders. */
function contactLinks() {
  const links: Array<{
    label: string;
    handle: string;
    href: string;
    external: boolean;
    Icon: typeof Mail;
  }> = [];
  if (!isTodo(site.email)) {
    links.push({
      label: "Email",
      handle: site.email,
      href: `mailto:${site.email}`,
      external: false,
      Icon: Mail,
    });
  }
  if (!isTodo(site.socials.linkedin)) {
    links.push({
      label: "LinkedIn",
      handle: "Connect with me",
      href: site.socials.linkedin,
      external: true,
      Icon: Linkedin,
    });
  }
  if (!isTodo(site.socials.github)) {
    links.push({
      label: "GitHub",
      handle: "See my code",
      href: site.socials.github,
      external: true,
      Icon: Github,
    });
  }
  if (!isTodo(site.socials.twitter)) {
    links.push({
      label: "Twitter",
      handle: "Follow me",
      href: site.socials.twitter,
      external: true,
      Icon: Twitter,
    });
  }
  if (!isTodo(site.socials.leetcode)) {
    links.push({
      label: "LeetCode",
      handle: "See my solutions",
      href: site.socials.leetcode,
      external: true,
      Icon: Code2,
    });
  }
  return links;
}

export function ContactCTA() {
  const links = contactLinks();

  return (
    <Section id="contact" labelledBy="contact-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <span
          className="aurora left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 motion-safe:animate-blob-drift"
          style={{ background: "var(--blob-1)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="eyebrow mb-4 flex items-center gap-2">
          <span aria-hidden="true" className="bg-gradient-accent h-px w-6" />
          Contact
        </p>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl">
          Let&apos;s build something <span className="text-gradient">together</span>
        </h2>
        <p className="prose-body mx-auto mt-5">
          Open to freelance projects and full-time software development roles. The quickest way to
          reach me is by email — or find me on the platforms below.
        </p>

        {links.length > 0 ? (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {links.map(({ label, handle, href, external, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                className="group flex w-40 flex-col items-center gap-3 rounded-xl border border-line bg-surface/70 px-6 py-7 backdrop-blur transition-[transform,border-color,box-shadow] duration-300 ease-out-cubic hover:-translate-y-1 hover:border-accent hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span
                  aria-hidden="true"
                  className="group-hover:bg-gradient-accent grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent transition-all duration-300 ease-spring group-hover:scale-105 group-hover:text-accent-ink"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-ink">
                  {label}
                  {external ? (
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-subtle transition-transform duration-200 ease-out-cubic group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
                <span className="text-xs text-subtle">{handle}</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-subtle">
            Connection links appear here once they are set in{" "}
            <code className="font-mono">/data/site.ts</code>.
          </p>
        )}
      </div>
    </Section>
  );
}
