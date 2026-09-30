import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { resolvedContactLinks } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  const contactLinks = resolvedContactLinks();

  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg text-ink">{site.name}</p>
            <p className="mt-2 text-sm text-muted">{site.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Footer" className="flex flex-col gap-2">
              <p className="eyebrow mb-1">Site</p>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {contactLinks.length > 0 ? (
              <div className="flex flex-col gap-2">
                <p className="eyebrow mb-1">Connect</p>
                {contactLinks.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp
              className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
