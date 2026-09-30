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
 * - Renders ONLY the static PNG fallback during SSR and initial page load.
 * - Never downloads the MP4 for `prefers-reduced-motion: reduce` users.
 * - Uses IntersectionObserver (`rootMargin: "240px 0px"`) to attach and play
 *   the muted looping MP4 only when the section approaches the viewport.
 * - Preserves explicit 3:2 aspect ratio to guarantee zero CLS.
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

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const [motionChecked, setMotionChecked] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // 1. Check prefers-reduced-motion on client before allowing any video network request
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setPrefersReducedMotion(false);
      setMotionChecked(true);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    setMotionChecked(true);

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
    if (!motionChecked || prefersReducedMotion || videoFailed) return;
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
  }, [motionChecked, prefersReducedMotion, videoFailed]);

  // 3. Control playback when video is mounted and entering/leaving viewport
  useEffect(() => {
    if (!shouldLoadVideo || prefersReducedMotion || videoFailed) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.defaultMuted = true;
    videoEl.muted = true;

    if (isInViewport) {
      if (videoEl.readyState >= 2) {
        setVideoReady(true);
      }
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoReady(true);
          })
          .catch(() => {
            // Keep static PNG visible if autoplay is blocked or fails
          });
      }
    } else {
      videoEl.pause();
    }
  }, [shouldLoadVideo, isInViewport, prefersReducedMotion, videoFailed]);

  const canRenderVideo =
    motionChecked && !prefersReducedMotion && !videoFailed && shouldLoadVideo;

  const mediaState = !motionChecked
    ? "image-poster-active"
    : prefersReducedMotion
      ? "reduced-motion-fallback"
      : videoFailed
        ? "video-error-fallback"
        : videoReady
          ? "video-playing"
          : shouldLoadVideo
            ? "video-loading"
            : "lazy-idle";

  return (
    <figure className={`w-full ${className}`.trim()}>
      <div
        ref={containerRef}
        data-media-state={mediaState}
        className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] border border-border bg-surface"
      >
        {/* Base Layer: Approved static PNG fallback (always present, zero CLS) */}
        <img
          src={fallbackImageSrc}
          alt={alt}
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className={`block h-full w-full object-cover object-center ${imageScaleClassName}`.trim()}
        />

        {/* Top Layer: Lazy-mounted motion video when near viewport */}
        {canRenderVideo && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={fallbackImageSrc}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 block h-full w-full object-cover object-center transition-opacity duration-300 ${imageScaleClassName} ${
              videoReady ? "opacity-100" : "opacity-0"
            }`.trim()}
          >
            <source
              src={videoSrc}
              type="video/mp4"
              onError={() => setVideoFailed(true)}
            />
          </video>
        )}
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
