import React from "react";
import { Container } from "@/components/layout/Container";
import { QUICK_PROOF_ITEMS } from "@/lib/currently-building-data";

export function QuickProof() {
  return (
    <section
      id="proof"
      aria-labelledby="quick-proof-heading"
      className="scroll-mt-24 border-b border-border bg-background py-8 sm:py-10 md:scroll-mt-28 md:py-12"
    >
      <Container>
        {/* Subtle Editorial Index Header */}
        <div className="mb-6 flex items-center gap-4 md:mb-8">
          <h2 id="quick-proof-heading" className="type-mono-meta text-muted">
            02 / QUICK PROOF
          </h2>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Structured Horizontal / Grid Editorial Proof Band (No Generic Cards) */}
        <dl className="grid grid-cols-1 divide-y divide-border border-t border-b border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {QUICK_PROOF_ITEMS.map((item, idx) => {
            // Add subtle tablet 2x2 hairline borders before lg breakpoint
            const tabletBorderClasses =
              idx === 0
                ? "sm:border-b sm:border-r sm:border-border lg:border-b-0"
                : idx === 1
                  ? "sm:border-b sm:border-border lg:border-b-0"
                  : idx === 2
                    ? "sm:border-r sm:border-border"
                    : "";

            return (
              <div
                key={item.index}
                className={`flex flex-col justify-between py-5 sm:p-6 lg:py-7 lg:first:pl-0 lg:last:pr-0 ${tabletBorderClasses}`}
              >
                {/* Top Mono Index + Category Label */}
                <dt className="mb-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                    {item.index}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                    {item.label}
                  </span>
                </dt>

                {/* Primary Factual Value & Supporting Context */}
                <dd className="m-0">
                  <div className="font-display text-2xl leading-tight tracking-tight text-foreground sm:text-[1.7rem] xl:text-[1.9rem]">
                    <span className="block">{item.value}</span>
                    <span className="block text-xl text-foreground/90 sm:text-2xl">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs tracking-[0.03em] text-muted">
                    {item.detail}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
