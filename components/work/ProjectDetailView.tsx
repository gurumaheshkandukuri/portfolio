import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { ProjectDetailCaseStudy } from "@/lib/project-details-data";

export interface ProjectDetailViewProps {
  readonly project: ProjectDetailCaseStudy;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <article aria-labelledby="project-case-study-title">
      {/* ====================================================================
          01 / PROJECT INTRO
         ==================================================================== */}
      <section
        id="project-intro"
        aria-labelledby="project-case-study-title"
        className="border-b border-border bg-background pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pb-24"
      >
        <Container>
          {/* Back Navigation + Section Label Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 md:mb-12">
            <Link
              href="/#work"
              className="group inline-flex min-h-[40px] items-center gap-2 font-mono text-xs font-medium tracking-[0.08em] text-muted transition-colors duration-fast hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <ArrowLeft
                className="h-3.5 w-3.5 transition-transform duration-fast group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              <span>BACK TO WORK</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="type-mono-meta text-muted">
                {project.intro.sectionLabel}
              </span>
              <span className="font-mono text-xs text-accent">
                · CASE STUDY {project.index}
              </span>
            </div>
          </div>

          {/* Asymmetric 12-Column Case Study Hero */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Cols 1-7: Display Title, Subtitle, Lead & Action Links */}
            <div className="lg:col-span-7">
              <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-accent">
                  ROLE: {project.role}
                </span>
                <span className="text-border-strong" aria-hidden="true">
                  /
                </span>
                <span className="font-mono text-xs tracking-[0.06em] text-muted">
                  {project.statusLabel}
                </span>
              </div>

              <h1
                id="project-case-study-title"
                className="type-display-hero text-foreground"
              >
                {project.title}
              </h1>

              <p className="mt-2 font-display text-2xl italic text-accent sm:text-3xl">
                {project.subtitle}
              </p>

              <p className="type-body-lead mt-6 max-w-[54ch] text-foreground/90">
                {project.intro.lead}
              </p>

              {/* Top Project Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-border-strong bg-transparent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span>VIEW SOURCE</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Cols 8-12: Overview Narrative & Verified Technology Stack */}
            <div className="flex flex-col justify-between gap-8 border-t border-border pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-border lg:pl-10 lg:pt-1">
              <div className="space-y-4">
                <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  OVERVIEW
                </span>
                {project.intro.overview.map((paragraph, index) => (
                  <p key={index} className="type-body text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-border pt-5">
                <span className="mb-3 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  TECHNOLOGY STACK
                </span>
                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`${project.displayName} technology stack`}
                >
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[3px] border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.03em] text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Grounded Case Study Highlights Strip */}
          <dl className="mt-12 grid grid-cols-1 divide-y divide-border border-t border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-14">
            {project.intro.highlights.map((item) => (
              <div
                key={item.label}
                className="py-5 sm:px-6 sm:py-6 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  {item.label}
                </dt>
                <dd className="m-0 mt-1.5">
                  <span className="block font-display text-xl leading-snug text-foreground">
                    {item.value}
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted">
                    {item.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ====================================================================
          02 / PROBLEM
         ==================================================================== */}
      <section
        id="problem"
        aria-labelledby="problem-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.problem.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Left Column (Cols 1-6): Problem Narrative */}
            <div className="lg:col-span-6">
              <h2
                id="problem-heading"
                className="type-display-section text-foreground"
              >
                {project.problem.heading}
              </h2>

              <p className="mt-5 font-display text-xl italic leading-snug text-foreground sm:text-2xl">
                {project.problem.lead}
              </p>

              <div className="mt-6 space-y-4">
                {project.problem.paragraphs.map((paragraph, index) => (
                  <p key={index} className="type-body text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column (Cols 7-12): Specific Operational Breakdowns */}
            <div className="lg:col-span-6 lg:border-l lg:border-border lg:pl-10">
              <span className="mb-4 block font-mono text-[11px] tracking-[0.08em] uppercase text-accent">
                WHERE EXISTING SYSTEMS BREAK DOWN
              </span>

              <div className="divide-y divide-border border-t border-b border-border">
                {project.problem.painPoints.map((point, index) => (
                  <div key={point.title} className="py-5 sm:py-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-xl text-foreground">
                        {point.title}
                      </h3>
                    </div>
                    <p className="mt-2 pl-7 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          03 / THINKING
         ==================================================================== */}
      <section
        id="thinking"
        aria-labelledby="thinking-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.thinking.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          {/* Section Header + Reasoning Narrative */}
          <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-14 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5">
              <h2
                id="thinking-heading"
                className="type-display-section text-foreground"
              >
                {project.thinking.heading}
              </h2>
              <p className="mt-4 font-display text-xl italic leading-snug text-accent">
                {project.thinking.lead}
              </p>
            </div>

            <div className="space-y-4 lg:col-span-7 lg:border-l lg:border-border lg:pl-10">
              {project.thinking.paragraphs.map((paragraph, index) => (
                <p key={index} className="type-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* 3 Architectural Thinking Pillars */}
          <div className="grid grid-cols-1 divide-y divide-border border-t border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {project.thinking.pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="py-6 lg:px-8 lg:py-8 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="font-mono text-xs font-medium tracking-[0.08em] text-accent">
                  PILLAR {pillar.index}
                </span>
                <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          04 / BUILDING
         ==================================================================== */}
      <section
        id="building"
        aria-labelledby="building-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.building.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="mb-10 grid grid-cols-1 items-end gap-4 lg:mb-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2
                id="building-heading"
                className="type-display-section text-foreground"
              >
                {project.building.heading}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="type-body text-muted">{project.building.lead}</p>
            </div>
          </div>

          {/* Product Areas Built */}
          <div className="divide-y divide-border border-t border-b border-border">
            {project.building.areas.map((area) => (
              <div
                key={area.index}
                className="grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-10"
              >
                {/* Cols 1-4: Index, Tag & Area Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl leading-none text-accent sm:text-3xl">
                      {area.index}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                      {area.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
                    {area.title}
                  </h3>
                </div>

                {/* Cols 5-12: Description & Concrete Implementation Notes */}
                <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-10">
                  <p className="type-body text-foreground/90">
                    {area.description}
                  </p>

                  <ul className="mt-4 space-y-2.5 border-l-2 border-secondary/70 pl-4">
                    {area.implementationNotes.map((note, idx) => (
                      <li
                        key={idx}
                        className="text-sm leading-relaxed text-muted sm:text-[15px]"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          05 / TECHNICAL DECISIONS
         ==================================================================== */}
      <section
        id="technical-decisions"
        aria-labelledby="technical-decisions-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.technicalDecisions.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="mb-10 grid grid-cols-1 items-end gap-4 lg:mb-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <h2
                id="technical-decisions-heading"
                className="type-display-section text-foreground"
              >
                {project.technicalDecisions.heading}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="type-body text-muted">
                {project.technicalDecisions.lead}
              </p>
            </div>
          </div>

          {/* Structured DECISION / WHY IT MATTERED / HOW IT WAS IMPLEMENTED Rows */}
          <div className="divide-y divide-border border-t border-b border-border">
            {project.technicalDecisions.decisions.map((item) => (
              <div
                key={item.index}
                className="grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-10"
              >
                {/* Cols 1-4: DECISION */}
                <div className="lg:col-span-4">
                  <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-accent">
                    DECISION {item.index}
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                    {item.decision}
                  </h3>
                </div>

                {/* Cols 5-8: WHY IT MATTERED */}
                <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
                  <span className="mb-2 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                    WHY IT MATTERED
                  </span>
                  <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                    {item.whyItMattered}
                  </p>
                </div>

                {/* Cols 9-12: HOW IT WAS IMPLEMENTED */}
                <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
                  <span className="mb-2 block font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                    HOW IT WAS IMPLEMENTED
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
                    {item.howItWasImplemented}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          06 / RESULT & CURRENT STATE
         ==================================================================== */}
      <section
        id="result"
        aria-labelledby="result-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.result.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-6">
              <h2
                id="result-heading"
                className="type-display-section text-foreground"
              >
                {project.result.heading}
              </h2>

              <p className="mt-5 font-display text-xl italic leading-snug text-foreground sm:text-2xl">
                {project.result.lead}
              </p>

              <div className="mt-6 space-y-4">
                {project.result.paragraphs.map((paragraph, index) => (
                  <p key={index} className="type-body text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:border-l lg:border-border lg:pl-10">
              <span className="mb-4 block font-mono text-[11px] tracking-[0.08em] uppercase text-accent">
                VERIFIED BUILD SUMMARY
              </span>
              <dl className="divide-y divide-border border-t border-b border-border">
                {project.result.verifiableState.map((row) => (
                  <div key={row.label} className="py-4 sm:py-5">
                    <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                      {row.label}
                    </dt>
                    <dd className="m-0 mt-1.5 font-display text-lg text-foreground sm:text-xl">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          07 / WHAT I LEARNED
         ==================================================================== */}
      <section
        id="what-i-learned"
        aria-labelledby="learned-heading"
        className="border-b border-border bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.learned.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="mb-10 grid grid-cols-1 items-end gap-4 lg:mb-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <h2
                id="learned-heading"
                className="type-display-section text-foreground"
              >
                {project.learned.heading}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="type-body text-muted">{project.learned.lead}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-border border-t border-b border-border md:grid-cols-2 md:divide-y-0">
            {project.learned.lessons.map((lesson, index) => {
              const isRightColumn = index % 2 === 1;
              const isBottomRow = index >= 2;

              return (
                <div
                  key={lesson.index}
                  className={`py-7 sm:py-8 ${
                    isRightColumn
                      ? "md:border-l md:border-border md:pl-8 lg:pl-10"
                      : "md:pr-8 lg:pr-10"
                  } ${isBottomRow ? "md:border-t md:border-border" : ""}`}
                >
                  <span className="font-mono text-xs font-medium tracking-[0.08em] text-accent">
                    {lesson.index}
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                    {lesson.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {lesson.reflection}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          08 / PROJECT LINKS
         ==================================================================== */}
      <section
        id="project-links"
        aria-labelledby="project-links-heading"
        className="border-b border-border bg-background py-14 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              {project.links.sectionLabel}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <h2
                id="project-links-heading"
                className="type-display-section text-foreground"
              >
                {project.links.heading}
              </h2>
              <p className="type-body-lead mt-4 max-w-[48ch] text-muted">
                {project.links.supportingText}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-border-strong bg-transparent px-6 py-3 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span>VIEW SOURCE</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6 lg:col-span-5 lg:flex lg:justify-end lg:border-t-0 lg:pt-0">
              <Link
                href="/#work"
                className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-fast hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <ArrowLeft
                  className="h-3.5 w-3.5 text-accent transition-transform duration-fast group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                <span>BACK TO WORK</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
