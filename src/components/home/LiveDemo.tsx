"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Controls, DemoScreen, SceneCaption } from "@/components/home/demo/Screen";
import { SCENES, frameAt } from "@/components/home/demo/script";
import { STAGE_QUERY } from "@/components/home/Stage";

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

/**
 * The demo for everyone who doesn't get the 3D stage: a flat auto-playing
 * loop with tap-to-pause (touch, narrow screens), or 4 static frames under
 * reduced motion. Hidden entirely in stage mode.
 */
export function LiveDemo() {
  const stage = useMedia(STAGE_QUERY);
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const [pos, setPos] = useState({ scene: 0, frame: 0 });
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const loopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage || reduced || !loopRef.current) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(loopRef.current);
    return () => io.disconnect();
  }, [stage, reduced]);

  useEffect(() => {
    if (stage || reduced || paused || !inView) return;
    const id = window.setInterval(() => {
      setPos((prev) => {
        if (prev.frame + 1 < SCENES[prev.scene].frames.length) return { ...prev, frame: prev.frame + 1 };
        return { scene: (prev.scene + 1) % SCENES.length, frame: 0 };
      });
    }, 45);
    return () => window.clearInterval(id);
  }, [stage, reduced, paused, inView]);

  const current = SCENES[pos.scene];
  const frame = frameAt(current, pos.frame);

  return (
    <section id="demo" aria-labelledby="demo-title" className="relative stage:hidden">
      <h2 id="demo-title" className="sr-only">
        See MacVoice type in Mail, Slack, Terminal and Notes
      </h2>
      <p className="sr-only">
        A demo of someone speaking while MacVoice types: a reply in Mail with the filler words removed, a Slack
        message with a line break that doesn&apos;t send, a Terminal command left lowercase, and a note corrected by
        saying &ldquo;scratch that&rdquo;.
      </p>

      {/* Flat auto-playing loop, tap to pause */}
      <div className="py-12 motion-reduce:hidden">
        <Container className="max-w-[760px]">
          <SceneCaption scene={current} index={pos.scene} />
          <div ref={loopRef} className="relative mt-6">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="block w-full cursor-pointer text-left"
              aria-label={paused ? "Play demo" : "Pause demo"}
            >
              <DemoScreen scene={current} frame={frame} variant="flat" />
            </button>
            <span className="pointer-events-none absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-white">
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </span>
          </div>
          <Controls index={pos.scene} onSelect={(i) => setPos({ scene: i, frame: 0 })} className="mt-5" />
        </Container>
      </div>

      {/* Reduced motion: 4 static frames */}
      <div className="hidden py-12 motion-reduce:block">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {SCENES.map((s, i) => (
              <div key={s.app}>
                <SceneCaption scene={s} index={i} align="left" />
                <div className="mt-4">
                  <DemoScreen scene={s} frame={{ ...s.frames[s.frames.length - 1], say: s.said }} variant="flat" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
