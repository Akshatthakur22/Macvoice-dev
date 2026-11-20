"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Laptop3D, LID_TILT, SCREEN_CENTER, SCREEN_H, SCREEN_W } from "@/components/home/demo/Laptop3D";
import { DemoScreen } from "@/components/home/demo/Screen";
import { SCENES, frameAt } from "@/components/home/demo/script";
import { DefaultShortcut } from "@/components/ui/Keycap";
import { Waveform } from "@/components/ui/Waveform";
import { cn } from "@/lib/utils";

/**
 * The hero stage: a MacBook on a white page, Apple-style. On desktops with a mouse,
 * scrolling dives toward its screen ("Press ⌃⌥Space." while the keys light
 * up), then the 4 demo scenes play on it with a tour panel underneath
 * (700px dive + 4 × 450px = 2,500px, the playbook's cap). Everywhere else
 * (touch, narrow, reduced motion) the laptop sits still and <LiveDemo>
 * plays a flat loop.
 *
 * Must match the `stage:` variant in globals.css.
 */
export const STAGE_QUERY =
  "(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)";

const DIVE = 700;
const SCENE_SCROLL = 450;
const PERSPECTIVE = 3000;
const PITCH0 = -27; // camera looks down at the laptop to start
const LIFT0 = 215; // re-centres the laptop's bounding box at the start pose
const NAV_CLEAR = 92; // keep the dived-in screen below the floating nav
const KEYBOARD_ROOM = 64; // strip of keyboard left visible under the screen

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** 0 → 1 → 0 across [a, b], peaking in the middle. */
const bump = (t: number, a: number, b: number) => {
  const x = clamp((t - a) / (b - a));
  return x < 0.5 ? x * 2 : (1 - x) * 2;
};

function useMedia(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

type Geo = { cx: number; cy: number; s0: number; s1: number; ty1: number };

export function Stage({ children }: { children: React.ReactNode }) {
  const stage = useMedia(STAGE_QUERY);
  const [pos, setPos] = useState({ scene: 0, frame: 0 });
  const [lit, setLit] = useState(false);
  const [ready, setReady] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const momentRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let geo: Geo | null = null;

    const measure = (): Geo | null => {
      const sticky = stickyRef.current?.getBoundingClientRect();
      if (!sticky || !sticky.width) return null;
      const midX = sticky.left + sticky.width / 2;
      const midY = sticky.top + sticky.height / 2;

      // End pose: screen as large as fits under the nav, keyboard edge showing.
      const s1 = Math.min(
        (sticky.width * 0.92) / SCREEN_W,
        (sticky.height - NAV_CLEAR - KEYBOARD_ROOM) / SCREEN_H
      );
      const ty1 = sticky.top + NAV_CLEAR + (SCREEN_H * s1) / 2 - midY;

      if (stage) {
        // Start pose: just below the hero copy, peeking up from the bottom edge.
        const copy = copyRef.current?.getBoundingClientRect();
        const copyBottom = copy ? copy.bottom : sticky.top + sticky.height * 0.6;
        const s0 = Math.min((sticky.width * 0.4) / 1180, (sticky.height * 0.44) / 940);
        return { cx: 0, cy: copyBottom + 36 + 450 * s0 - midY, s0, s1, ty1 };
      }
      const ph = placeholderRef.current?.getBoundingClientRect();
      if (!ph || !ph.width) return null;
      return {
        cx: ph.left + ph.width / 2 - midX,
        cy: ph.top + ph.height / 2 - midY,
        s0: Math.min(ph.width / 1180, ph.height / 940),
        s1,
        ty1,
      };
    };

    const tick = () => {
      raf = 0;
      geo = geo ?? measure();
      if (!geo) return;

      // ---- Read scroll (stage mode only) ----
      let d = 0;
      let scene = 0;
      let frame = stage ? 0 : SCENES[0].frames.length - 1;
      if (stage && trackRef.current) {
        const scrolled = -trackRef.current.getBoundingClientRect().top;
        d = clamp(scrolled / DIVE);
        if (scrolled > DIVE) {
          const sp = clamp((scrolled - DIVE) / (SCENES.length * SCENE_SCROLL), 0, 0.9999);
          scene = Math.floor(sp * SCENES.length);
          frame = Math.floor((sp * SCENES.length - scene) * SCENES[scene].frames.length);
        }
      }

      // ---- Write: transforms and opacity only ----
      const e = ease(d);
      const s = lerp(geo.s0, geo.s1, e);
      const pitch = lerp(PITCH0, -LID_TILT, e);
      const lift = lerp(LIFT0, 0, e);
      const p = { x: SCREEN_CENTER.x * e, y: SCREEN_CENTER.y * e, z: SCREEN_CENTER.z * e };

      if (worldRef.current) {
        worldRef.current.style.transform =
          `translate3d(${lerp(geo.cx, 0, e)}px, ${lerp(geo.cy, geo.ty1, e)}px, 0) scale3d(${s}, ${s}, ${s}) ` +
          `translate3d(0, ${lift}px, 0) rotateX(${pitch}deg) translate3d(${-p.x}px, ${-p.y}px, ${-p.z}px)`;
      }
      if (copyRef.current) {
        const c = clamp(d / 0.25);
        copyRef.current.style.opacity = String(1 - c);
        copyRef.current.style.transform = `translate3d(0, ${-48 * c}px, 0)`;
        copyRef.current.style.visibility = c >= 1 ? "hidden" : "visible";
      }
      if (glowRef.current) glowRef.current.style.opacity = String(1 - 0.6 * e);
      if (momentRef.current) {
        const m = bump(d, 0.22, 0.92);
        momentRef.current.style.opacity = String(m);
        momentRef.current.style.visibility = m > 0 ? "visible" : "hidden";
      }
      if (panelRef.current) {
        const k = clamp((d - 0.88) / 0.12);
        panelRef.current.style.opacity = String(k);
        panelRef.current.style.transform = `translate3d(0, ${(1 - k) * 16}px, 0)`;
        panelRef.current.style.visibility = k > 0 ? "visible" : "hidden";
      }

      setPos((prev) => (prev.scene === scene && prev.frame === frame ? prev : { scene, frame }));
      const isLit = stage && d > 0.2 && d < 0.85;
      setLit((l) => (l === isLit ? l : isLit));
      setReady(true);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const remeasure = () => {
      geo = null;
      schedule();
    };

    schedule();
    if (stage) window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    const ro = new ResizeObserver(remeasure);
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (copyRef.current) ro.observe(copyRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      ro.disconnect();
    };
  }, [stage]);

  const scrollToScene = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + DIVE + (i + 0.02) * SCENE_SCROLL, behavior: "smooth" });
  };

  // In stage mode, "Watch it type" dives in instead of jumping to the flat demo.
  const onCopyClick = (e: React.MouseEvent) => {
    if (!stage) return;
    const a = (e.target as Element).closest?.('a[href="#demo"]');
    if (!a) return;
    e.preventDefault();
    scrollToScene(0);
  };

  const scene = SCENES[pos.scene];
  const frame = frameAt(scene, pos.frame);
  const next = SCENES[pos.scene + 1];

  return (
    <section className="relative -mt-[68px] bg-bg text-ink sm:-mt-[76px]">
      <div ref={trackRef} className="relative stage:h-[calc(100vh+2500px)]">
        <div
          ref={stickyRef}
          className="relative flex flex-col overflow-hidden pb-10 stage:sticky stage:top-0 stage:h-screen stage:pb-0"
        >
          {/* Soft floor light under the laptop */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(45% 30% at 50% 88%, oklch(0.93 0.006 256 / 0.9), transparent 70%)",
            }}
          />

          {/* 3D layer */}
          <div className="pointer-events-none absolute inset-0" style={{ perspective: `${PERSPECTIVE}px` }}>
            <Laptop3D
              worldRef={worldRef}
              lit={lit}
              style={{ opacity: ready ? 1 : 0, transition: "opacity 600ms var(--ease-expo)" }}
              screen={<DemoScreen scene={scene} frame={frame} variant="laptop" hidePill={stage} />}
            />
          </div>

          {/* Hero copy */}
          <div ref={copyRef} onClickCapture={onCopyClick} className="relative z-10 pt-[68px] sm:pt-[76px]">
            {children}
          </div>

          {/* In stage mode this is the demo (LiveDemo is hidden), so describe it. */}
          <p className="hidden stage:block stage:sr-only">
            Demo: as you scroll, the MacBook screen comes close and MacVoice types a reply in Mail, a Slack message
            whose line break doesn&apos;t send, a lowercase Terminal command, and a note fixed by saying &ldquo;scratch
            that&rdquo;.
          </p>

          {/* Where the laptop sits at rest (touch and narrow screens) */}
          <div ref={placeholderRef} aria-hidden="true" className="relative aspect-[1.3] w-full stage:hidden" />

          {/* Mid-dive moment: the shortcut, big, while the keys light up */}
          <div
            ref={momentRef}
            aria-hidden="true"
            className="pointer-events-none invisible absolute inset-0 z-10 hidden items-center justify-center bg-[oklch(0.985_0.002_95/0.82)] opacity-0 stage:flex"
          >
            <p className="text-display text-center text-ink">
              Press <DefaultShortcut size="inline" />.
            </p>
          </div>

          {/* Tour panel */}
          <div
            ref={panelRef}
            className="invisible absolute inset-x-0 bottom-6 z-20 hidden justify-center px-6 opacity-0 stage:flex"
          >
            <div className="w-full max-w-[880px] rounded-panel bg-white/85 p-6 shadow-e3 ring-1 ring-line backdrop-blur-xl backdrop-saturate-150">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-[28px] font-semibold leading-[1.15] tracking-[-0.03em]">{scene.title}</p>
                  <p className="text-body mt-1 text-ink-2">{scene.sub}</p>
                </div>
                <a
                  href="#how-it-works"
                  className="shrink-0 pt-2 text-caption font-medium text-ink-2 underline-offset-4 hover:text-ink hover:underline"
                >
                  Skip demo ↓
                </a>
              </div>

              <div aria-hidden="true" className="mt-4 flex h-6 items-center gap-3 text-[15px]">
                <Waveform active={frame.listening} bars={5} className="h-4" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">You say</span>
                <span className="truncate italic text-ink">{frame.say ? `“${frame.say}”` : "…"}</span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div role="group" aria-label="Demo scenes" className="flex rounded-full bg-sunken p-1 ring-1 ring-line">
                  {SCENES.map((s, i) => (
                    <button
                      key={s.app}
                      type="button"
                      onClick={() => scrollToScene(i)}
                      aria-current={i === pos.scene ? "step" : undefined}
                      className={cn(
                        "cursor-pointer rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors duration-200",
                        i === pos.scene ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
                      )}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
                <p className="text-eyebrow truncate text-ink-2">
                  {next ? `Next: ${next.title}` : "Next: how it works"}
                </p>
              </div>
            </div>
          </div>

          {/* Fade the laptop's base into the page instead of a hard cut. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-b from-transparent to-bg"
          />

          {/* Announce scene changes for screen readers (the screen itself is decorative). */}
          <p className="sr-only" aria-live="polite">
            {stage ? `${scene.name}: ${scene.title} ${scene.sub}` : ""}
          </p>
        </div>
      </div>

    </section>
  );
}
