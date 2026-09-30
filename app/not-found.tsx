import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { PUBLIC_SECTION_ASSETS } from "@/lib/assets";

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />

      <main
        id="main-content"
        className="flex flex-1 items-center py-14 sm:py-16 md:py-20 lg:py-24"
      >
        <Container>
          {/* Editorial Section Index Line */}
          <div className="mb-8 flex items-center gap-4 md:mb-10">
            <span className="type-mono-meta text-muted">
              404 / PAGE NOT FOUND
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          {/* 12-Column Asymmetric Editorial Split */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* LEFT COLUMN (Cols 1-7): Heading, Supporting Copy & Primary Action */}
            <div className="flex flex-col items-start lg:col-span-7">
              <h1 className="type-display-section text-foreground">
                THIS PAGE WENT OFF TO DEBUG ITSELF.
              </h1>

              <p className="type-body-lead mt-4 max-w-[46ch] text-muted">
                The page you&apos;re looking for doesn&apos;t exist, or the link
                may have changed.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[4px] border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium tracking-[0.08em] text-[#F5F1E8] transition-colors duration-fast hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span>BACK HOME</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-fast group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN (Cols 8-12): Supporting 404 Character Visual (Static PNG Only) */}
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
              <figure className="max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] border border-border bg-surface">
                  <img
                    src={PUBLIC_SECTION_ASSETS.notFound404.imageSrc}
                    alt={PUBLIC_SECTION_ASSETS.notFound404.alt}
                    width={1536}
                    height={1024}
                    decoding="async"
                    className="block h-full w-full object-cover object-center"
                  />
                </div>
              </figure>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
