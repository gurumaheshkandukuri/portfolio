"use client";

import React, { useEffect, useRef, useState } from "react";
import { PUBLIC_HERO_ASSETS } from "@/lib/assets";

const CHARACTER_ALT_TEXT =
  "Illustration of Guru Mahesh Kandukuri seated at his engineering workspace with a laptop, stacked technical books, and open design notebook.";

export function HeroCharacterMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // 1. Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // 2. Ensure React muted DOM property is enforced and trigger playback
  useEffect(() => {
    if (prefersReducedMotion || videoFailed) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.defaultMuted = true;
    videoEl.muted = true;

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay or decoding fails, fall back cleanly to the static PNG
        setVideoFailed(true);
      });
    }
  }, [prefersReducedMotion, videoFailed]);

  const shouldRenderVideo = !prefersReducedMotion && !videoFailed;

  return (
    <figure className="relative w-full">
      <div
        className="relative aspect-[3/2] w-full overflow-hidden rounded-[6px] border border-border bg-surface"
        data-media-state={
          prefersReducedMotion
            ? "reduced-motion-fallback"
            : videoFailed
              ? "video-error-fallback"
              : "video-playing"
        }
      >
        {shouldRenderVideo ? (
          <video
            ref={videoRef}
            src={PUBLIC_HERO_ASSETS.heroVideo}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            aria-label={CHARACTER_ALT_TEXT}
            tabIndex={-1}
            onError={() => setVideoFailed(true)}
            className="block h-full w-full object-cover"
          >
            <source
              src={PUBLIC_HERO_ASSETS.heroVideo}
              type="video/mp4"
              onError={() => setVideoFailed(true)}
            />
          </video>
        ) : (
          <img
            src={PUBLIC_HERO_ASSETS.heroCharacterFallback}
            alt={CHARACTER_ALT_TEXT}
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
            className="block h-full w-full object-cover"
          />
        )}
      </div>

      {/* Restrained editorial margin caption below the character frame */}
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2.5 text-muted">
        <span className="type-hand-accent text-lg text-foreground/90">
          Ideas · Build · Learn · Repeat
        </span>
        <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
          Currently — Web Development Intern
        </span>
      </figcaption>
    </figure>
  );
}
