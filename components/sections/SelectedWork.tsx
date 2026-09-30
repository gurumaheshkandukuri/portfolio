import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { LazyCharacterMedia } from "@/components/sections/LazyCharacterMedia";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";
import {
  SELECTED_WORK_PROJECTS,
  type SelectedWorkProject,
} from "@/lib/selected-work-data";

function ProjectActionLinks({ project }: { readonly project: SelectedWorkProject }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {project.links.caseStudy ? (
        <>
          <Link
            href={project.links.caseStudy}
            className="group/link inline-flex min-h-[40px] items-center gap-2 rounded-[4px] border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90"
          >
            <span>VIEW PROJECT</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-fast group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/git inline-flex min-h-[40px] items-center gap-1.5 border-b border-border-strong py-1 font-mono text-xs tracking-[0.08em] text-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
          >
            <span>GITHUB</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover/git:-translate-y-0.5 group-hover/git:translate-x-0.5 group-hover/git:text-accent"
              aria-hidden="true"
            />
          </a>
        </>
      ) : project.links.live ? (
        <>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-[40px] items-center gap-2 rounded-[4px] border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90"
          >
            <span>VIEW PROJECT</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-fast group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/git inline-flex min-h-[40px] items-center gap-1.5 border-b border-border-strong py-1 font-mono text-xs tracking-[0.08em] text-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
          >
            <span>GITHUB</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover/git:-translate-y-0.5 group-hover/git:translate-x-0.5 group-hover/git:text-accent"
              aria-hidden="true"
            />
          </a>
        </>
      ) : (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex min-h-[40px] items-center gap-2 rounded-[4px] border border-border-strong bg-transparent px-4 py-2 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-fast hover:border-accent hover:bg-surface/70"
        >
          <span>VIEW PROJECT</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}

export function SelectedWork() {
  const [nexcivic, nexus, intentix] = SELECTED_WORK_PROJECTS;

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-14 md:scroll-mt-28 md:py-16 lg:py-20"
    >
      <Container>
        {/* Editorial Section Index Line */}
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <span className="type-mono-meta text-muted">04 / SELECTED WORK</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Section Heading & Supporting Statement */}
        <div className="mb-8 grid grid-cols-1 items-end gap-4 md:mb-11 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2
              id="selected-work-heading"
              className="type-display-section text-foreground"
            >
              SELECTED WORK
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <p className="type-body text-muted">
              A few things I&apos;ve built, led, and contributed to.
            </p>
          </div>
        </div>

        {/* Asymmetric 12-Column Editorial Sequence (No Generic Card Grid) */}
        <div className="divide-y divide-border border-t border-b border-border">
          {/* ==============================================================
              01 / NEXCIVIC — Lead Feature Split (3 / 5 / 4 Columns)
             ============================================================== */}
          <article
            data-project-slug={nexcivic.slug}
            className="group grid grid-cols-1 gap-6 py-8 sm:py-9 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-11"
          >
            {/* Col 1-3: Project Number & Role */}
            <div className="flex items-baseline justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-4">
              <span className="font-display text-3xl leading-none text-accent transition-transform duration-fast group-hover:translate-x-0.5 sm:text-4xl">
                {nexcivic.index}
              </span>
              <div>
                <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  ROLE
                </span>
                <span className="font-mono text-xs font-medium text-foreground">
                  {nexcivic.role}
                </span>
              </div>
            </div>

            {/* Col 4-8: Title, Subtitle & Description */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                {nexcivic.title}
              </h3>
              <p className="mt-1 font-display text-lg italic text-accent">
                {nexcivic.subtitle}
              </p>

              <p className="type-body mt-4 text-foreground/90">
                {nexcivic.description}
              </p>
            </div>

            {/* Col 9-12: Approach, Stack & Single Action Instance */}
            <div className="flex flex-col justify-between gap-5 border-t border-border/70 pt-5 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-border lg:pl-8 lg:pt-0">
              <div>
                <span className="mb-1.5 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  APPROACH
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  {nexcivic.approach}
                </p>
              </div>

              <div>
                <span className="mb-2.5 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  STACK
                </span>
                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`${nexcivic.title} technology stack`}
                >
                  {nexcivic.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[3px] border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.03em] text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <ProjectActionLinks project={nexcivic} />
            </div>
          </article>

          {/* ==============================================================
              02 / NEXUS — Offset Editorial Composition (2 / 4 / 6 Columns)
             ============================================================== */}
          <article
            data-project-slug={nexus.slug}
            className="group grid grid-cols-1 gap-6 py-8 sm:py-9 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-11"
          >
            {/* Col 1-2: Project Number & Role */}
            <div className="order-1 flex items-baseline justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-start lg:justify-start lg:gap-4">
              <span className="font-display text-3xl leading-none text-accent transition-transform duration-fast group-hover:translate-x-0.5 sm:text-4xl">
                {nexus.index}
              </span>
              <div>
                <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  ROLE
                </span>
                <span className="font-mono text-xs font-medium text-foreground">
                  {nexus.role}
                </span>
              </div>
            </div>

            {/* Primary Narrative (Order 2 on Mobile, Right Cols 7-12 on Desktop) */}
            <div className="order-2 lg:order-3 lg:col-span-6 lg:border-l lg:border-border lg:pl-8">
              <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                {nexus.title}
              </h3>
              <p className="mt-1 font-display text-lg italic text-accent">
                {nexus.subtitle}
              </p>

              <p className="type-body mt-4 text-foreground/90">
                {nexus.description}
              </p>
            </div>

            {/* Technical Spec & Single Action Instance (Order 3 on Mobile, Center Cols 3-6 on Desktop) */}
            <div className="order-3 flex flex-col justify-between gap-5 border-t border-border/70 pt-5 lg:order-2 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-border lg:pl-6 lg:pt-0">
              <div>
                <span className="mb-1.5 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  APPROACH
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  {nexus.approach}
                </p>
              </div>

              <div>
                <span className="mb-2.5 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  STACK
                </span>
                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`${nexus.title} technology stack`}
                >
                  {nexus.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[3px] border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.03em] text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <ProjectActionLinks project={nexus} />
            </div>
          </article>

          {/* ==============================================================
              03 / INTENTIX — Asymmetric Two-Column Case Preview (5 / 7 Columns)
             ============================================================== */}
          <article
            data-project-slug={intentix.slug}
            className="group grid grid-cols-1 gap-6 py-8 sm:py-9 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-11"
          >
            {/* Col 1-5: Number, Title, Subtitle & Role */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline justify-between gap-4 lg:mb-4">
                <span className="font-display text-3xl leading-none text-accent transition-transform duration-fast group-hover:translate-x-0.5 sm:text-4xl">
                  {intentix.index}
                </span>
                <div>
                  <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-muted lg:text-right">
                    ROLE
                  </span>
                  <span className="font-mono text-xs font-medium text-foreground">
                    {intentix.role}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl lg:mt-0">
                {intentix.title}
              </h3>
              <p className="mt-1 font-display text-lg italic text-accent">
                {intentix.subtitle}
              </p>
            </div>

            {/* Col 6-12: Description, Approach, Stack & Action */}
            <div className="flex flex-col justify-between gap-5 border-t border-border/70 pt-5 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-border lg:pl-10 lg:pt-0">
              <p className="type-body text-foreground/90">
                {intentix.description}
              </p>

              <div className="border-l-2 border-secondary/70 pl-3.5">
                <span className="mb-1 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  APPROACH
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  {intentix.approach}
                </p>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="mb-2.5 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                    STACK
                  </span>
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label={`${intentix.title} technology stack`}
                  >
                    {intentix.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-[3px] border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.03em] text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <ProjectActionLinks project={intentix} />
              </div>
            </div>
          </article>
        </div>

        {/* ==============================================================
            CLOSING EDITORIAL VISUAL — Problem Solving & System Thinking
           ============================================================== */}
        <aside
          aria-label="Engineering problem-solving perspective"
          className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-7">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-accent">
              PROBLEM FIRST · ARCHITECTURE SECOND
            </span>
            <p className="mt-2 max-w-[46ch] font-display text-xl leading-snug text-foreground sm:text-2xl">
              Understanding the workflow, constraints, and edge cases before writing the implementation.
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
            <LazyCharacterMedia
              videoSrc={PUBLIC_SECTION_ASSETS.selectedWork.videoSrc}
              fallbackImageSrc={
                PUBLIC_SECTION_ASSETS.selectedWork.fallbackImageSrc
              }
              alt={PUBLIC_SECTION_ASSETS.selectedWork.alt}
              eyebrow="SYSTEM THINKING"
              caption="Problem · Architecture · Build"
              className="max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]"
            />
          </div>
        </aside>
      </Container>
    </section>
  );
}
