import React from "react";
import { Container } from "@/components/layout/Container";
import { LazyCharacterMedia } from "@/components/sections/LazyCharacterMedia";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ABOUT_SECTION_DATA } from "@/lib/about-data";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-16 md:scroll-mt-28 md:py-20 lg:py-24"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <ScrollReveal as="span" className="type-mono-meta text-muted">
            {ABOUT_SECTION_DATA.sectionLabel}
          </ScrollReveal>
          <ScrollReveal
            as="span"
            variant="line-draw"
            className="h-px flex-1 bg-border"
            aria-hidden="true"
          />
        </div>

        {/* Section Header Row (Ensures Heading Leads on Both Mobile & Desktop) */}
        <ScrollReveal className="mb-10 grid grid-cols-1 items-end gap-4 md:mb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-[0.08em] uppercase text-accent">
              CURIOUS ENGINEER
            </p>
          </div>
          <div className="lg:col-span-8 lg:pl-12">
            <h2
              id="about-heading"
              className="type-display-section text-foreground"
            >
              {ABOUT_SECTION_DATA.heading}
            </h2>
            <p className="type-hand-accent mt-2 text-2xl text-accent sm:text-3xl">
              &ldquo;{ABOUT_SECTION_DATA.handwrittenLead}&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* Main 12-Column Editorial Split */}
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pt-12">
          {/* Left Column (Cols 1-4): Primary Personal Photograph & Metadata */}
          <ScrollReveal delayMs={40} className="lg:col-span-4">
            <figure className="max-w-[300px] sm:max-w-[340px] lg:max-w-none">
              <div className="overflow-hidden rounded-[4px] border border-border bg-surface">
                <img
                  src={ABOUT_SECTION_DATA.photo.src}
                  alt={ABOUT_SECTION_DATA.photo.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex flex-col gap-0.5 border-t border-border pt-2.5">
                <span className="font-mono text-xs font-medium tracking-[0.06em] text-foreground">
                  {ABOUT_SECTION_DATA.photo.caption}
                </span>
                <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
                  {ABOUT_SECTION_DATA.photo.subCaption}
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Right Column (Cols 5-12): Personal Story, Learning Philosophy & Grounded Details */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            {/* Primary Idea & Narrative Paragraphs */}
            <ScrollReveal delayMs={90} className="space-y-5">
              <p className="font-display text-xl italic leading-snug text-foreground sm:text-2xl">
                {ABOUT_SECTION_DATA.coreIdea}
              </p>

              {ABOUT_SECTION_DATA.paragraphs.map((paragraph, index) => (
                <p key={index} className="type-body text-muted">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            {/* Editorial Callout: LEARNING BY BUILDING + Secondary Character Visual */}
            <ScrollReveal
              delayMs={140}
              className="grid grid-cols-1 items-center gap-6 border-l-2 border-accent bg-surface/40 py-5 pl-5 pr-4 sm:pr-5 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-7">
                <p className="mb-1.5 font-mono text-xs font-medium tracking-[0.08em] uppercase text-accent">
                  {ABOUT_SECTION_DATA.philosophy.label}
                </p>
                <p className="type-body text-foreground/90">
                  {ABOUT_SECTION_DATA.philosophy.statement}
                </p>
              </div>

              <div className="md:col-span-5">
                <LazyCharacterMedia
                  videoSrc={PUBLIC_SECTION_ASSETS.about.videoSrc}
                  fallbackImageSrc={
                    PUBLIC_SECTION_ASSETS.about.fallbackImageSrc
                  }
                  alt={PUBLIC_SECTION_ASSETS.about.alt}
                  className="max-w-[260px] sm:max-w-[300px] md:max-w-none"
                />
              </div>
            </ScrollReveal>

            {/* Confirmed Academic & Community Context Strip */}
            <dl className="grid grid-cols-1 divide-y divide-border border-t border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {ABOUT_SECTION_DATA.contextNotes.map((item, idx) => (
                <ScrollReveal
                  key={item.label}
                  delayMs={180 + idx * 65}
                  className="editorial-ledger-row py-4 sm:px-4 sm:py-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                    {item.label}
                  </dt>
                  <dd className="m-0 mt-1.5">
                    <span className="editorial-row-title block font-display text-lg leading-snug text-foreground">
                      {item.value}
                    </span>
                    <span className="mt-0.5 block font-mono text-xs text-muted">
                      {item.detail}
                    </span>
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
