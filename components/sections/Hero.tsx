import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HeroCharacterMedia } from "@/components/sections/HeroCharacterMedia";
import { MagneticWrap } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 border-b border-border py-10 sm:py-12 md:scroll-mt-28 md:py-16 lg:py-20 2xl:py-24"
    >
      <Container>
        {/* Subtle Editorial Index Line (0ms) */}
        <div className="mb-8 flex items-center gap-4 md:mb-10 lg:mb-12">
          <span className="hero-seq-intro type-mono-meta text-muted">
            01 / INTRODUCTION
          </span>
          <span
            className="hero-seq-line h-px flex-1 bg-border"
            aria-hidden="true"
          />
        </div>

        {/* 12-Column Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* LEFT COLUMN: Identity, Typography & Editorial CTAs */}
          <div className="flex flex-col items-start lg:col-span-5">
            <p className="hero-seq-eyebrow type-mono-meta mb-3 text-muted sm:mb-4">
              SOFTWARE DEVELOPER · CSE (AIML)
            </p>

            <h1
              id="hero-heading"
              className="hero-seq-title type-display-hero mb-3 text-foreground sm:mb-4"
            >
              <span className="block">GURU MAHESH</span>{" "}
              <span className="block">KANDUKURI</span>
            </h1>

            <p className="hero-seq-subtitle mb-5 font-display text-xl italic tracking-wide text-accent sm:text-2xl md:mb-6">
              CURIOUS ENGINEER
            </p>

            <p className="hero-seq-desc type-body-lead mb-8 max-w-[38ch] text-muted md:mb-9">
              Curious by nature. Always building, learning and experimenting.
            </p>

            {/* Primary & Secondary Editorial Actions (290ms) */}
            <div className="hero-seq-cta flex w-full flex-wrap items-center gap-3.5 sm:w-auto sm:gap-4">
              <MagneticWrap>
                <a
                  href="#work"
                  className="editorial-cta group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[4px] border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight
                    className="editorial-cta-arrow h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </a>
              </MagneticWrap>

              <MagneticWrap>
                <a
                  href="#about"
                  className="editorial-cta group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[4px] border border-border-strong bg-transparent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-fast hover:bg-surface/70"
                >
                  <span>ABOUT ME</span>
                  <ArrowRight
                    className="editorial-cta-arrow h-3.5 w-3.5 text-muted group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </a>
              </MagneticWrap>
            </div>
          </div>

          {/* RIGHT COLUMN: Approved Guru Character & Workspace (160ms) */}
          <div className="hero-seq-media w-full lg:col-span-7">
            <HeroCharacterMedia />
          </div>
        </div>
      </Container>
    </section>
  );
}
