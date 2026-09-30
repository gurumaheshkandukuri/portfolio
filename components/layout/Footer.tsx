import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HEADER_CONTACT_ACTION, HEADER_NAV_ITEMS } from "@/lib/assets";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-10 text-foreground sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Identity & Role */}
          <div>
            <a
              href="/#top"
              className="font-display text-xl tracking-tight text-foreground transition-colors duration-fast hover:text-accent sm:text-2xl"
            >
              Guru Mahesh Kandukuri
            </a>
            <p className="mt-1 font-display text-base italic text-accent">
              Curious Engineer
            </p>
          </div>

          {/* Minimal Editorial Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.08em] text-muted transition-colors duration-fast hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight
                        className="h-3 w-3 text-muted"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={HEADER_CONTACT_ACTION.href}
                  className="font-mono text-xs tracking-[0.08em] text-muted transition-colors duration-fast hover:text-foreground"
                >
                  {HEADER_CONTACT_ACTION.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Hairline & Dynamic Copyright */}
        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            &copy; {currentYear} Guru Mahesh Kandukuri.
          </p>
          <p className="font-mono text-xs text-muted">
            Always building, learning and experimenting.
          </p>
        </div>
      </Container>
    </footer>
  );
}
