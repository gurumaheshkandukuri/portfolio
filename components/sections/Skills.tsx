import React from "react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";
import { SKILLS_SECTION_DATA } from "@/lib/skills-data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <ScrollReveal as="span" className="type-mono-meta text-muted">
            {SKILLS_SECTION_DATA.sectionLabel}
          </ScrollReveal>
          <ScrollReveal
            as="span"
            variant="line-draw"
            className="h-px flex-1 bg-border"
            aria-hidden="true"
          />
        </div>

        {/* Asymmetric 12-Column Editorial Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* LEFT COLUMN (Cols 1-4): Heading, Supporting Copy & Secondary Learning Visual */}
          <ScrollReveal className="lg:col-span-4">
            <h2
              id="skills-heading"
              className="type-display-section text-foreground"
            >
              {SKILLS_SECTION_DATA.heading}
            </h2>
            <p className="type-body mt-4 text-muted">
              {SKILLS_SECTION_DATA.supportingLine}
            </p>

            {/* Secondary Editorial Visual Cue (Static PNG Only — No Video) */}
            <figure className="mt-8 max-w-[300px] border-t border-border pt-6 sm:max-w-[340px] lg:max-w-none">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] border border-border bg-surface">
                <img
                  src={PUBLIC_SECTION_ASSETS.skills.imageSrc}
                  alt={PUBLIC_SECTION_ASSETS.skills.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full scale-[1.03] object-cover object-center"
                />
              </div>
              <figcaption className="mt-2.5 flex items-baseline justify-between gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  CONTINUOUS LEARNING
                </span>
                <span className="type-hand-accent text-base text-foreground/90">
                  Learn by building
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* RIGHT COLUMN (Cols 5-12): Grouped Technical Inventory */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            <dl className="divide-y divide-border border-t border-b border-border">
              {SKILLS_SECTION_DATA.groups.map((group, groupIdx) => (
                <ScrollReveal
                  key={group.category}
                  delayMs={groupIdx * 65}
                  className="editorial-ledger-row grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-7"
                >
                  {/* Category Index & Mono Label */}
                  <dt className="flex items-baseline gap-2.5 sm:col-span-5">
                    <span className="editorial-row-index font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                      {group.index}
                    </span>
                    <span className="font-mono text-xs tracking-[0.08em] uppercase text-muted">
                      {group.category}
                    </span>
                  </dt>

                  {/* Editorial Grouped List of Technologies */}
                  <dd className="m-0 sm:col-span-7">
                    <ul
                      className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5"
                      aria-label={group.category}
                    >
                      {group.items.map((skill, idx) => (
                        <li
                          key={skill}
                          className="inline-flex items-baseline gap-2.5"
                        >
                          <span className="font-display text-xl leading-snug text-foreground transition-colors duration-fast hover:text-accent sm:text-[1.35rem]">
                            {skill}
                          </span>
                          {idx < group.items.length - 1 && (
                            <span
                              className="font-mono text-xs text-muted/70 select-none"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
