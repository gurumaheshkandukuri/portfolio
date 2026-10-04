import React from "react";
import { Container } from "@/components/layout/Container";
import { LazyCharacterMedia } from "@/components/sections/LazyCharacterMedia";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";
import { CURRENTLY_BUILDING_DATA } from "@/lib/currently-building-data";

export function CurrentlyBuilding() {
  return (
    <section
      id="currently-building"
      aria-labelledby="currently-building-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <ScrollReveal as="span" className="type-mono-meta text-muted">
            {CURRENTLY_BUILDING_DATA.sectionLabel}
          </ScrollReveal>
          <ScrollReveal
            as="span"
            variant="line-draw"
            className="h-px flex-1 bg-border"
            aria-hidden="true"
          />
        </div>

        {/* Section Heading & Supporting Line */}
        <ScrollReveal className="mb-8 grid grid-cols-1 items-end gap-4 md:mb-11 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2
              id="currently-building-heading"
              className="type-display-section text-foreground"
            >
              {CURRENTLY_BUILDING_DATA.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <p className="type-body text-muted">
              {CURRENTLY_BUILDING_DATA.supportingLine}
            </p>
          </div>
        </ScrollReveal>

        {/* PRIMARY CONTENT: Asymmetric 12-Column Editorial Entries (Thin Dividers, No Generic Cards) */}
        <div className="divide-y divide-border border-t border-b border-border">
          {CURRENTLY_BUILDING_DATA.projects.map((project, idx) => (
            <ScrollReveal
              as="article"
              key={project.index}
              delayMs={idx * 65}
              className="editorial-ledger-row grid grid-cols-1 gap-5 py-8 sm:py-9 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-10"
            >
              {/* Col 1-4: Index, Project Name & Role */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:col-span-4 lg:flex-col lg:items-start lg:justify-start lg:gap-2.5">
                <div className="flex items-baseline gap-3.5">
                  <span className="editorial-row-index font-display text-2xl leading-none text-accent sm:text-3xl">
                    {project.index}
                  </span>
                  <h3 className="editorial-row-title font-display text-2xl leading-tight text-foreground sm:text-[1.65rem]">
                    {project.name}
                  </h3>
                </div>

                <div className="pl-9 sm:pl-0 lg:pl-9">
                  <span className="font-mono text-xs font-medium tracking-[0.04em] text-muted">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Col 5-9: Verified One-Sentence Description */}
              <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
                <p className="type-body text-foreground/90">
                  {project.description}
                </p>
              </div>

              {/* Col 10-12: Verified Technologies */}
              <div className="border-t border-border pt-4 lg:col-span-3 lg:border-t-0 lg:border-l lg:border-border lg:pl-6 lg:pt-0">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  VERIFIED STACK
                </span>
                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`${project.name} verified technologies`}
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[3px] border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.03em] text-foreground transition-colors duration-fast"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* SECONDARY EDITORIAL VISUAL: Active Building Character (Restrained below primary project ledger) */}
        <ScrollReveal
          delayMs={120}
          className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-accent">
                ACTIVE WORKSPACE
              </span>
            </div>
            <p className="mt-2 max-w-[48ch] font-display text-xl leading-snug text-foreground sm:text-2xl">
              Exploring ideas, validating approaches, and turning them into working software.
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
            <LazyCharacterMedia
              videoSrc={PUBLIC_SECTION_ASSETS.currentlyBuilding.videoSrc}
              fallbackImageSrc={
                PUBLIC_SECTION_ASSETS.currentlyBuilding.fallbackImageSrc
              }
              alt={PUBLIC_SECTION_ASSETS.currentlyBuilding.alt}
              eyebrow="IN PROGRESS"
              caption="Write · Test · Refine"
              className="max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
