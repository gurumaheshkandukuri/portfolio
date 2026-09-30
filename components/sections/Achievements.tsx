import React from "react";
import { Container } from "@/components/layout/Container";
import { LazyCharacterMedia } from "@/components/sections/LazyCharacterMedia";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";
import { ACHIEVEMENTS_SECTION_DATA } from "@/lib/achievements-data";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <span className="type-mono-meta text-muted">
            {ACHIEVEMENTS_SECTION_DATA.sectionLabel}
          </span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* 12-Column Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* LEFT COLUMN (Cols 1-4): Section Heading, Supporting Copy & Secondary Hackathon Visual */}
          <div className="lg:col-span-4">
            <h2
              id="achievements-heading"
              className="type-display-section text-foreground"
            >
              {ACHIEVEMENTS_SECTION_DATA.heading}
            </h2>
            <p className="type-body mt-4 text-muted">
              {ACHIEVEMENTS_SECTION_DATA.supportingLine}
            </p>

            {/* Secondary Editorial Visual (Lazy-loaded Hackathon Motion + Static PNG Fallback) */}
            <div className="mt-8 border-t border-border pt-6">
              <LazyCharacterMedia
                videoSrc={PUBLIC_SECTION_ASSETS.achievements.videoSrc}
                fallbackImageSrc={
                  PUBLIC_SECTION_ASSETS.achievements.fallbackImageSrc
                }
                alt={PUBLIC_SECTION_ASSETS.achievements.alt}
                eyebrow="PRACTICE · COLLABORATION"
                caption="Code · Compete · Contribute"
                imageScaleClassName="scale-[1.06]"
                className="max-w-[320px] sm:max-w-[360px] lg:max-w-none"
              />
            </div>
          </div>

          {/* RIGHT COLUMN (Cols 5-12): Vertical Editorial Proof List */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            <div className="divide-y divide-border border-t border-b border-border">
              {ACHIEVEMENTS_SECTION_DATA.entries.map((entry) => (
                <article
                  key={entry.index}
                  className="group grid grid-cols-1 gap-3 py-6 transition-colors duration-fast sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-7"
                >
                  {/* Entry Index & Category Label */}
                  <div className="flex items-baseline gap-2.5 sm:col-span-4">
                    <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                      {entry.index}
                    </span>
                    <span className="font-mono text-xs tracking-[0.08em] uppercase text-muted">
                      {entry.category}
                    </span>
                  </div>

                  {/* Entry Title, Detail/Source & Short Description */}
                  <div className="sm:col-span-8">
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4 sm:gap-y-1">
                      <h3 className="font-display text-xl leading-snug text-foreground transition-colors duration-fast group-hover:text-accent sm:text-2xl">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-xs tracking-[0.04em] text-secondary">
                        {entry.detail}
                      </span>
                    </div>

                    <p className="type-body mt-2 text-muted">
                      {entry.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
