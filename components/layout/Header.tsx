"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useTheme } from "@/components/layout/ThemeProvider";
import { HEADER_CONTACT_ACTION, HEADER_NAV_ITEMS } from "@/lib/assets";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  function isNavItemActive(label: string): boolean {
    if (pathname === "/") {
      return label === "HOME";
    }
    if (pathname?.startsWith("/work")) {
      return label === "WORK";
    }
    return false;
  }

  // Close mobile menu on Escape, resize to desktop, outside tap, or page scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const initialScrollY = window.scrollY;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    function handleScroll() {
      if (Math.abs(window.scrollY - initialScrollY) > 10) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: "var(--color-background)" }}
      className="sticky top-0 z-50 isolate w-full border-b border-border bg-background transition-colors duration-base ease-editorial"
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        {/* Personal Text Identity */}
        <a
          href="/#top"
          onClick={() => setMobileMenuOpen(false)}
          className="group inline-flex items-baseline gap-1.5 whitespace-nowrap font-display text-lg tracking-tight text-accent transition-opacity duration-fast hover:opacity-85 md:text-xl"
          aria-label="Guru Mahesh Kandukuri — Home"
        >
          <span>GURU</span>{" "}
          <span className="text-foreground">MAHESH</span>
        </a>

        {/* Desktop Editorial Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex lg:items-center lg:gap-7 xl:gap-8"
        >
          <ul className="flex items-center gap-6 xl:gap-8">
            {HEADER_NAV_ITEMS.map((item) => {
              const isActive = isNavItemActive(item.label);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={`editorial-nav-link group/nav relative inline-flex items-center gap-1 py-1 font-mono text-xs tracking-[0.08em] transition-colors duration-fast ${
                      isActive
                        ? "font-medium text-foreground after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight
                        className="h-3 w-3 text-muted transition-transform duration-fast group-hover/nav:-translate-y-0.5 group-hover/nav:translate-x-0.5 group-hover/nav:text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <span
            className="h-3.5 w-px bg-border-strong"
            aria-hidden="true"
          />

          {/* Final CONTACT Action */}
          <a
            href={HEADER_CONTACT_ACTION.href}
            className="editorial-nav-link inline-flex items-center gap-1 py-1 font-mono text-xs font-medium tracking-[0.08em] text-accent transition-colors duration-fast hover:text-foreground"
          >
            <span>{HEADER_CONTACT_ACTION.label}</span>
          </a>
        </nav>

        {/* Right Controls: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            aria-pressed={theme === "dark"}
            title={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-transparent text-foreground transition-colors duration-fast hover:border-border hover:bg-surface/60"
          >
            {theme === "light" ? (
              <Sun className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-editorial-nav"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-border text-foreground transition-colors duration-fast hover:bg-surface/60 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Compact Mobile Navigation Drawer (Sits Completely Below Header with Solid Background) */}
      {mobileMenuOpen && (
        <nav
          id="mobile-editorial-nav"
          aria-label="Mobile navigation"
          style={{ backgroundColor: "var(--color-background)" }}
          className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-md lg:hidden"
        >
          <Container className="py-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
              {HEADER_NAV_ITEMS.map((item) => {
                const isActive = isNavItemActive(item.label);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between border-b border-border py-2.5 font-mono text-xs tracking-[0.08em] transition-colors duration-fast ${
                        isActive
                          ? "font-medium text-accent"
                          : "text-foreground hover:text-accent"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.external && (
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={HEADER_CONTACT_ACTION.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-border py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-accent transition-colors duration-fast hover:text-foreground"
                >
                  <span>{HEADER_CONTACT_ACTION.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
