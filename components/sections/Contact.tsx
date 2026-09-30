import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CONTACT_SECTION_DATA } from "@/lib/contact-data";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-b border-border bg-background py-14 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <span className="type-mono-meta text-muted">
            {CONTACT_SECTION_DATA.sectionLabel}
          </span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* 12-Column Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* LEFT COLUMN (Cols 1-7): Heading, Supporting Copy, Primary CTA & Verified Links */}
          <div className="flex flex-col items-start lg:col-span-7">
            <h2
              id="contact-heading"
              className="type-display-section text-foreground"
            >
              {CONTACT_SECTION_DATA.heading}
            </h2>

            <p className="type-body-lead mt-4 max-w-[46ch] text-muted">
              {CONTACT_SECTION_DATA.supportingText}
            </p>

            {/* Primary CTA */}
            <div className="mt-8">
              <a
                href={CONTACT_SECTION_DATA.primaryCta.href}
                className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[4px] border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span>{CONTACT_SECTION_DATA.primaryCta.label}</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-fast group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Verified Contact Details (Email, GitHub, LinkedIn, Resume) */}
            <div className="mt-9 grid w-full grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-6">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  EMAIL
                </span>
                <a
                  href={CONTACT_SECTION_DATA.primaryCta.href}
                  className="inline-flex min-h-[36px] items-center break-all font-mono text-xs tracking-[0.03em] text-foreground underline-offset-4 transition-colors duration-fast hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-[13px]"
                >
                  {CONTACT_SECTION_DATA.primaryCta.email}
                </a>
              </div>

              <div className="sm:col-span-6">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  PROFILES &amp; RESUME
                </span>
                <ul
                  className="flex flex-wrap items-center gap-x-6 gap-y-2"
                  aria-label="Verified external profiles and resume"
                >
                  {CONTACT_SECTION_DATA.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group/ext inline-flex min-h-[36px] items-center gap-1.5 font-display text-xl text-foreground transition-colors duration-fast hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          className="h-4 w-4 text-muted transition-transform duration-fast group-hover/ext:-translate-y-0.5 group-hover/ext:translate-x-0.5 group-hover/ext:text-accent"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Cols 8-12): Secondary Supporting Contact Character (Static PNG Only) */}
          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
            <figure className="max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] border border-border bg-surface">
                <img
                  src={CONTACT_SECTION_DATA.media.imageSrc}
                  alt={CONTACT_SECTION_DATA.media.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full scale-[1.12] object-cover object-center"
                />
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
