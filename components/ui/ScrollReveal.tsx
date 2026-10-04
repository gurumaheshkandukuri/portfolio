"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealElementTag =
  | "div"
  | "article"
  | "section"
  | "aside"
  | "li"
  | "dl"
  | "span"
  | "p"
  | "h2"
  | "figure";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  readonly as?: RevealElementTag;
  readonly variant?: "fade-up" | "line-draw";
  readonly delayMs?: number;
  readonly children?: React.ReactNode;
}

/**
 * Phase 20C — Editorial ScrollReveal Component
 * - Uses IntersectionObserver (threshold: 0.12, rootMargin: "0px 0px -48px 0px")
 * - Triggers once and disconnects immediately (zero ongoing scroll overhead)
 * - Strictly respects prefers-reduced-motion: reduce
 */
export function ScrollReveal({
  as: Component = "div",
  variant = "fade-up",
  delayMs = 0,
  className = "",
  style,
  children,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return;
    }

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  const mergedStyle: React.CSSProperties =
    delayMs > 0
      ? ({
          ...style,
          "--reveal-delay": `${delayMs}ms`,
        } as React.CSSProperties)
      : { ...style };

  const Tag = Component as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-visible={isVisible ? "true" : "false"}
      className={className}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Restrained Desktop-Only Magnetic Pointer Handlers (max ~2.5px displacement)
 * Disabled automatically on touch devices and when prefers-reduced-motion is enabled.
 */
export function useEditorialMagnetic(maxOffsetPx = 2.5) {
  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const normX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const normY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    const offsetX = Math.max(-maxOffsetPx, Math.min(maxOffsetPx, normX * maxOffsetPx));
    const offsetY = Math.max(-maxOffsetPx, Math.min(maxOffsetPx, normY * maxOffsetPx));

    el.style.setProperty("--mag-x", `${offsetX.toFixed(2)}px`);
    el.style.setProperty("--mag-y", `${offsetY.toFixed(2)}px`);
  }

  function handlePointerLeave(event: React.PointerEvent<HTMLElement>) {
    const el = event.currentTarget;
    el.style.setProperty("--mag-x", "0px");
    el.style.setProperty("--mag-y", "0px");
  }

  return {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  };
}

export function MagneticWrap({
  children,
  className = "inline-flex",
  maxOffsetPx = 2.5,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly maxOffsetPx?: number;
}) {
  const magnetic = useEditorialMagnetic(maxOffsetPx);

  return (
    <span
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      className={className}
    >
      {children}
    </span>
  );
}

