import React from "react";
import { Container } from "@/components/layout/Container";
import { EXPERIENCE_ENTRIES } from "@/lib/experience-data";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <span className="type-mono-meta text-muted">05 / EXPERIENCE</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Section Heading & Supporting Copy */}
        <div className="mb-10 grid grid-cols-1 items-end gap-4 md:mb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2
              id="experience-heading"
              className="type-display-section text-foreground"
            >
              EXPERIENCE
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <p className="type-body text-muted">
              Where I&apos;m learning by working on real problems with real teams.
            </p>
          </div>
        </div>

        {/* Concise Editorial Ledger (No Timeline Clutter, No Cards) */}
        <div className="divide-y divide-border border-t border-b border-border">
          {EXPERIENCE_ENTRIES.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-12"
            >
              {/* Left Column (Cols 1-3): Status & Role Type Metadata */}
              <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-2.5">
                <div className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-medium tracking-[0.08em] text-accent">
                    {entry.status}
                  </span>
                </div>

                <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                  {entry.roleType}
                </span>
              </div>

              {/* Center Column (Cols 4-8): Role Title & Company */}
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  {entry.role}
                </h3>
                <p className="mt-1.5 font-display text-xl italic text-accent">
                  {entry.company}
                </p>
              </div>

              {/* Right Column (Cols 9-12): Concise Factual Statement */}
              <div className="border-t border-border/70 pt-4 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-border lg:pl-8 lg:pt-0">
                <p className="type-body text-muted">{entry.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
