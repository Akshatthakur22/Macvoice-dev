import React from "react";
import { Waveform } from "@/components/ui/Waveform";
import { cn } from "@/lib/utils";
import { SCENES, type Frame, type Scene } from "./script";

export function SceneCaption({ scene, index, align = "center" }: { scene: Scene; index: number; align?: "center" | "left" }) {
  return (
    <div className={cn("max-w-[640px]", align === "center" ? "mx-auto text-center" : "text-left")}>
      <p className="text-eyebrow text-ink-2">
        {String(index + 1).padStart(2, "0")} / 04 · {scene.name}
      </p>
      <p className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[36px]">
        {scene.title}
      </p>
      <p className="text-body mt-2 text-ink-2">{scene.sub}</p>
    </div>
  );
}

export function Controls({
  index,
  onSelect,
  className,
}: {
  index: number;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      <div className="flex items-center gap-1" role="group" aria-label="Demo scenes">
        {SCENES.map((s, i) => (
          <button
            key={s.app}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${s.name}`}
            aria-current={i === index ? "step" : undefined}
            className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
          >
            <span
              className={cn(
                "block h-2 rounded-full transition-all duration-200 ease-soft",
                i === index ? "w-5 bg-ink" : "w-2 bg-line-strong group-hover:bg-ink-3"
              )}
            />
          </button>
        ))}
      </div>
      <a
        href="#how-it-works"
        className="text-caption font-medium text-ink-2 underline-offset-4 hover:text-ink hover:underline"
      >
        Skip demo ↓
      </a>
    </div>
  );
}

function Caret() {
  return <span className="caret ml-px inline-block h-[1.15em] w-[2px] translate-y-[0.2em] bg-accent" />;
}

function SpeechPill({ frame, className }: { frame: Frame; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-[0.7em] rounded-full bg-[oklch(0.18_0.01_286/0.88)] px-[1em] py-[0.55em] text-white shadow-e2 backdrop-blur",
        className
      )}
    >
      <Waveform active={frame.listening} bars={5} className="h-[1.1em] gap-[0.18em]" barClassName="w-[0.2em] bg-[oklch(0.75_0.14_256)]" />
      {frame.say ? (
        <span className="truncate italic">
          <span className="mr-[0.5em] font-mono text-[0.8em] not-italic uppercase tracking-wider text-white/50">You say</span>
          “{frame.say}”
        </span>
      ) : (
        <span className="text-white/60">Press ⌃⌥Space and talk</span>
      )}
    </div>
  );
}

export function DemoScreen({
  scene,
  frame,
  variant,
  hidePill,
}: {
  scene: Scene;
  frame: Frame;
  variant: "laptop" | "flat";
  /** Hide the "You say" pill (the stage shows it in its tour panel instead). */
  hidePill?: boolean;
}) {
  if (variant === "flat") {
    return (
      <div aria-hidden="true" className="cursor-default select-none text-[13px]">
        <AppWindow scene={scene} frame={frame} compact className="h-[300px]" />
        <div className="mt-3 flex justify-center">
          <SpeechPill frame={frame} />
        </div>
      </div>
    );
  }

  return (
    <div className="@container absolute inset-0 cursor-default select-none">
      <div
        className="relative h-full w-full"
        style={{
          fontSize: "1.45cqw",
          background:
            "linear-gradient(135deg, oklch(0.78 0.08 256), oklch(0.86 0.06 300) 55%, oklch(0.9 0.06 45))",
        }}
      >
        {/* macOS menu bar */}
        <div className="flex h-[1.9em] items-center justify-between bg-white/55 px-[1em] text-[0.85em] text-black/85 backdrop-blur">
          <div className="flex items-center gap-[1.2em]">
            <span className="font-semibold">{scene.name}</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Window</span>
          </div>
          <div className="flex items-center gap-[1em]">
            {frame.listening ? (
              <Waveform active bars={5} className="h-[1em] gap-[0.15em]" barClassName="w-[0.18em]" />
            ) : (
              <MicGlyph />
            )}
            <span>Thu 20 Nov 9:41</span>
          </div>
        </div>

        {/* Camera notch */}
        <div className="absolute left-1/2 top-0 h-[1.75em] w-[13em] -translate-x-1/2 rounded-b-[0.7em] bg-black" />

        <AppWindow scene={scene} frame={frame} className="absolute left-[9%] top-[9%] h-[72%] w-[82%]" />

        {!hidePill ? (
          <div className="absolute inset-x-0 bottom-[4.5%] flex justify-center px-[6%]">
            <SpeechPill frame={frame} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MicGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none">
      <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="currentColor" />
      <path d="M5.5 10.5a6.5 6.5 0 0 0 13 0M12 17v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function TitleBar({ title, dark }: { title: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-[2.4em] shrink-0 items-center gap-[0.5em] border-b px-[0.9em]",
        dark ? "border-white/10 bg-[#2a2a2e] text-white/60" : "border-black/5 bg-[#f4f4f6] text-black/55"
      )}
    >
      <span className="h-[0.85em] w-[0.85em] rounded-full bg-[#ff5f57]" />
      <span className="h-[0.85em] w-[0.85em] rounded-full bg-[#febc2e]" />
      <span className="h-[0.85em] w-[0.85em] rounded-full bg-[#28c840]" />
      <span className="flex-1 truncate text-center text-[0.85em] font-medium">{title}</span>
      <span className="w-[3em]" />
    </div>
  );
}

function AppWindow({
  scene,
  frame,
  compact,
  className,
}: {
  scene: Scene;
  frame: Frame;
  compact?: boolean;
  className?: string;
}) {
  const shell = "flex flex-col overflow-hidden rounded-[0.8em] shadow-[0_1.5em_3em_-1em_rgb(0_0_0/0.35)] ring-1 ring-black/10";

  if (scene.app === "mail") {
    return (
      <div className={cn(shell, "bg-white text-[#1d1d1f]", className)}>
        <TitleBar title="Re: Beta launch timeline" />
        <div className="space-y-[0.5em] border-b border-black/5 px-[1.4em] py-[0.8em] text-[0.9em]">
          <div>
            <span className="text-black/45">To: </span>
            <span className="rounded-full bg-[oklch(0.95_0.03_256)] px-[0.5em] py-[0.1em] text-[oklch(0.45_0.15_256)]">Priya Raman</span>
          </div>
          <div>
            <span className="text-black/45">Subject: </span>Re: Beta launch timeline
          </div>
        </div>
        <div className="flex-1 overflow-hidden px-[1.4em] py-[1em] leading-[1.55]">
          <div className="whitespace-pre-wrap">
            {frame.text}
            <Caret />
          </div>
          <div className="mt-[1.4em] border-l-2 border-black/10 pl-[0.8em] text-[0.88em] text-black/45">
            On 18 Nov, Priya Raman wrote:
            <br />
            Here&apos;s the updated timeline. Can we lock a date for the beta?
          </div>
        </div>
      </div>
    );
  }

  if (scene.app === "slack") {
    return (
      <div className={cn(shell, "bg-white text-[#1d1d1f]", className)}>
        <TitleBar title="launch (Channel) – Northwind – Slack" />
        <div className="flex min-h-0 flex-1">
          {!compact ? (
            <div className="w-[11em] shrink-0 space-y-[0.3em] bg-[#3f0e40] px-[0.9em] py-[0.9em] text-[0.88em] text-white/70">
              <div className="mb-[0.6em] font-semibold text-white">Northwind</div>
              <div># general</div>
              <div className="-mx-[0.5em] rounded-[0.3em] bg-[#1164a3] px-[0.5em] text-white"># launch</div>
              <div># design</div>
              <div className="pt-[0.6em]">Daniel Okafor</div>
              <div>Mei Chen</div>
            </div>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="border-b border-black/5 px-[1.2em] py-[0.6em] font-semibold"># launch</div>
            <div className="flex flex-1 items-start gap-[0.7em] px-[1.2em] py-[1em]">
              <span className="flex h-[2.2em] w-[2.2em] shrink-0 items-center justify-center rounded-[0.4em] bg-[oklch(0.85_0.08_150)] text-[0.85em] font-semibold">
                DO
              </span>
              <div>
                <div className="text-[0.9em]">
                  <span className="font-semibold">Daniel Okafor</span>{" "}
                  <span className="text-black/45">10:42 AM</span>
                </div>
                <div>Is the login fix going out today?</div>
              </div>
            </div>
            <div className="m-[1em] mt-0 rounded-[0.6em] border border-black/15 px-[0.9em] py-[0.7em]">
              <div className="min-h-[3.2em] whitespace-pre-wrap leading-[1.5]">
                {frame.text}
                <Caret />
              </div>
              <div className="mt-[0.4em] flex items-center justify-between text-[0.8em] text-black/45">
                <span>Message #launch</span>
                <span className="font-mono">⇧↩ new line · ↩ send</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (scene.app === "terminal") {
    return (
      <div className={cn(shell, "bg-[#1c1c1f] font-mono text-[0.95em] text-[#e6e6e6]", className)}>
        <TitleBar title="northwind-web — zsh — 80×24" dark />
        <div className="flex-1 space-y-[0.25em] overflow-hidden px-[1.1em] py-[0.9em] leading-[1.5]">
          <div>
            <span className="text-[#8be28b]">sam@MacBook-Pro</span> <span className="text-[#8ab4ff]">northwind-web</span> % git status
          </div>
          <div className="text-white/70">On branch main</div>
          <div className="text-white/70">Your branch is behind &apos;origin/main&apos; by 2 commits.</div>
          <div className="pt-[0.6em]">
            <span className="text-[#8be28b]">sam@MacBook-Pro</span> <span className="text-[#8ab4ff]">northwind-web</span> %{" "}
            {frame.text}
            <Caret />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(shell, "bg-[#fffdf7] text-[#1d1d1f]", className)}>
      <TitleBar title="Notes" />
      <div className="flex min-h-0 flex-1">
        {!compact ? (
          <div className="w-[12em] shrink-0 space-y-[0.2em] border-r border-black/5 bg-[#f6f4ee] p-[0.7em] text-[0.88em]">
            <div className="rounded-[0.4em] bg-[#f5d76e]/70 px-[0.6em] py-[0.4em] font-semibold">Launch plan</div>
            <div className="px-[0.6em] py-[0.4em] text-black/60">Interview notes</div>
            <div className="px-[0.6em] py-[0.4em] text-black/60">Groceries</div>
          </div>
        ) : null}
        <div className="flex-1 px-[1.6em] py-[1.2em] leading-[1.6]">
          <div className="text-center text-[0.8em] text-black/40">20 November 2026 at 9:41</div>
          <div className="mt-[0.6em] text-[1.5em] font-bold">Launch plan</div>
          <div className="mt-[0.4em] whitespace-pre-wrap">
            QA is done. The changelog is drafted. {frame.text}
            <Caret />
          </div>
        </div>
      </div>
    </div>
  );
}
