"use client";

import React, { useEffect, useRef, useState } from "react";

export interface LazyCharacterMediaProps {
  readonly videoSrc: string;
  readonly fallbackImageSrc: string;
  readonly alt: string;
  readonly eyebrow?: string;
  readonly caption?: string;
  readonly className?: string;
  readonly imageScaleClassName?: string;
}

/**
 * Phase 16B — Viewport-Lazy Character Motion Component
 * - Normal mode: renders ONLY the muted looping MP4 (lazy-mounted via IntersectionObserver
 *   when within 240px of the viewport) inside a fixed 3:2 frame for zero CLS.
 * - Reduced-motion or video-error mode: renders ONLY the static PNG fallback.
 * - Video and fallback PNG are strictly mutually exclusive (never stacked or crossfaded).
 */
export function LazyCharacterMedia({
  videoSrc,
  fallbackImageSrc,
  alt,
  eyebrow,
  caption,
  className = "",
  imageScaleClassName = "scale-[1.03]",
}: LazyCharacterMediaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // 1. Detect prefers-reduced-motion on client
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

  // 2. Observe viewport proximity (only if motion is allowed and video hasn't failed)
  useEffect(() => {
    if (prefersReducedMotion || videoFailed) return;
    const targetEl = containerRef.current;
    if (!targetEl) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadVideo(true);
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        }
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(targetEl);
    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, videoFailed]);

  // 3. Control playback when video is mounted and entering/leaving viewport
  useEffect(() => {
    if (!shouldLoadVideo || prefersReducedMotion || videoFailed) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.defaultMuted = true;
    videoEl.muted = true;

    if (isInViewport) {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If playback/decoding fails while in viewport, fall back to static PNG
          if (videoEl.error) {
            setVideoFailed(true);
          }
        });
      }
    } else {
      videoEl.pause();
    }
  }, [shouldLoadVideo, isInViewport, prefersReducedMotion, videoFailed]);

  const shouldUseFallbackImage = prefersReducedMotion || videoFailed;

  const mediaState = prefersReducedMotion
    ? "reduced-motion-fallback"
    : videoFailed
      ? "video-error-fallback"
      : shouldLoadVideo
        ? "video-playing"
        : "lazy-idle";

  return (
    <figure className={`w-full ${className}`.trim()}>
      <div
        ref={containerRef}
        data-media-state={mediaState}
        className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] border border-border bg-surface"
      >
        {shouldUseFallbackImage ? (
          <img
            src={fallbackImageSrc}
            alt={alt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className={`block h-full w-full object-cover object-center ${imageScaleClassName}`.trim()}
          />
        ) : shouldLoadVideo ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
            tabIndex={-1}
            onError={() => setVideoFailed(true)}
            className={`block h-full w-full object-cover object-center ${imageScaleClassName}`.trim()}
          >
            <source
              src={videoSrc}
              type="video/mp4"
              onError={() => setVideoFailed(true)}
            />
          </video>
        ) : null}
      </div>

      {(eyebrow || caption) && (
        <figcaption className="mt-2.5 flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-2">
          {eyebrow && (
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              {eyebrow}
            </span>
          )}
          {caption && (
            <span className="type-hand-accent text-base text-foreground/90">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
