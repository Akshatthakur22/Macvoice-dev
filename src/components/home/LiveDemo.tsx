"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MacOSWindow } from "@/components/ui/MacOSWindow";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { Mic, RotateCcw, Sparkles, SendHorizontal } from "lucide-react";

type DemoApp = "vscode" | "slack";

const vscodeScript = [
  { speech: "export async function", text: "export async function", feature: "Sub-150ms Streaming" },
  { speech: " um verify session token", text: " verifySessionToken", feature: "Instant Filler Removal ('um' stripped)" },
  { speech: " open paren req colon Request", text: "(req: Request", feature: "Technical Dictation" },
  { speech: " close paren colon Promise", text: "): Promise", feature: "Symbol Formatting" },
  { speech: " less than Session greater than", text: "<Session>", feature: "Bracket Normalization" },
];

const slackScript = [
  { speech: "hey team the database migrations are done", text: "Hey team, the database migrations are done.", feature: "Contraction & Grammar Polish" },
  { speech: " new line ", text: "\n", feature: "Chat-Safe Shift+Enter (Does NOT send message!)" },
  { speech: "dont forget to run pnpm dev", text: "Don't forget to run `pnpm dev` before testing.", feature: "Automatic Contraction Fix ('dont' → 'don't')" },
];

export function LiveDemo() {
  const [activeApp, setActiveApp] = useState<DemoApp>("vscode");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [spokenAudioText, setSpokenAudioText] = useState("");
  const [activeFeature, setActiveFeature] = useState<string>("Streaming");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charInterval: NodeJS.Timeout;
    let stepIndex = 0;

    const script = activeApp === "vscode" ? vscodeScript : slackScript;

    const playNext = () => {
      if (!isPlaying) return;

      if (stepIndex < script.length) {
        const item = script[stepIndex];
        setSpokenAudioText((prev) => (prev ? prev + " " + item.speech.trim() : item.speech.trim()));
        setActiveFeature(item.feature);

        // Word progressive streaming
        let charIndex = 0;
        const textToAppend = item.text;

        charInterval = setInterval(() => {
          if (charIndex < textToAppend.length) {
            setTypedText((prev) => prev + textToAppend[charIndex]);
            charIndex++;
          } else {
            clearInterval(charInterval);
            stepIndex++;
            timeoutId = setTimeout(playNext, 600);
          }
        }, 32);
      } else {
        // Finish loop
        setIsListening(false);
        timeoutId = setTimeout(() => {
          // Restart loop
          setTypedText("");
          setSpokenAudioText("");
          setIsListening(true);
          stepIndex = 0;
          playNext();
        }, 3500);
      }
    };

    timeoutId = setTimeout(() => {
      setTypedText("");
      setSpokenAudioText("");
      setIsListening(true);
      playNext();
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(charInterval);
    };
  }, [activeApp, isPlaying]);

  return (
    <section id="demo" className="py-20 bg-[#070b12] border-y border-white/[0.06]">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Live Cursor Dictation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            See MacVoice in Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No clipboard pasting. No separate floating window.
            Your spoken words stream directly into whatever application currently holds focus.
          </p>
        </div>

        {/* Demo Controller Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 max-w-4xl mx-auto">
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10">
            <button
              type="button"
              onClick={() => setActiveApp("vscode")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeApp === "vscode"
                  ? "bg-[#0A84FF] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              VS Code Editor
            </button>
            <button
              type="button"
              onClick={() => setActiveApp("slack")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeApp === "slack"
                  ? "bg-[#0A84FF] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Slack Messaging (Chat-Safe)
            </button>
          </div>

          {/* Shortcut callout */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setTypedText("");
                setSpokenAudioText("");
                setIsPlaying(true);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Replay
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span>Shortcut:</span>
              <ShortcutBadge display="⌃⌥Space" size="sm" />
            </div>
          </div>
        </div>

        {/* Realistic macOS Window Simulation */}
        <div className="max-w-4xl mx-auto">
          {/* Simulated macOS Menu Bar */}
          <div className="h-8 rounded-t-xl bg-[#1b2234] border-t border-x border-white/10 px-4 flex items-center justify-between text-xs text-slate-300 select-none">
            <div className="flex items-center gap-4 text-[11px] font-medium">
              <span className="font-semibold text-white">Apple</span>
              <span className="text-white">
                {activeApp === "vscode" ? "Code" : "Slack"}
              </span>
              <span className="hidden sm:inline text-slate-400">File</span>
              <span className="hidden sm:inline text-slate-400">Edit</span>
              <span className="hidden sm:inline text-slate-400">View</span>
            </div>

            {/* Menu Bar Right: MacVoice Status Icon */}
            <div className="flex items-center gap-3 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-blue-300">
                <Image
                  src="/brand/macvoice-symbol.svg"
                  alt="MacVoice Menu Bar"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span className="text-[10px] font-medium">
                  {isListening ? "Listening…" : "Ready"}
                </span>
              </div>
              <span className="text-slate-400">Fri Oct 31 4:45 PM</span>
            </div>
          </div>

          {/* Window Container */}
          <MacOSWindow
            title={activeApp === "vscode" ? "auth.ts — src/lib — MacVoice" : "#engineering — Slack"}
            subtitle={activeApp === "vscode" ? "TypeScript" : "Active Focus"}
            className="rounded-t-none border-t-0 shadow-2xl"
            headerRight={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-[11px] text-slate-300">Active Cursor</span>
              </div>
            }
          >
            {/* Audio Waveform Live Transcription Monitor */}
            <div className="mb-4 p-3 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mic className="w-4 h-4 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Live Audio Stream
                  </div>
                  <div className="text-slate-200 font-mono italic text-xs">
                    "{spokenAudioText || "Listening for speech…"}"
                  </div>
                </div>
              </div>

              {/* Sound wave bars */}
              <div className="flex items-center gap-1 h-5 self-end sm:self-center">
                <span className="w-1 bg-blue-400 rounded-full animate-wave-1"></span>
                <span className="w-1 bg-blue-400 rounded-full animate-wave-2"></span>
                <span className="w-1 bg-blue-400 rounded-full animate-wave-3"></span>
                <span className="w-1 bg-blue-400 rounded-full animate-wave-4"></span>
                <span className="w-1 bg-blue-400 rounded-full animate-wave-5"></span>
              </div>
            </div>

            {/* Application Inside Content */}
            {activeApp === "vscode" ? (
              <div className="min-h-[220px] bg-[#0c1017] rounded-xl p-4 font-mono text-sm leading-relaxed border border-slate-800">
                <div className="text-slate-500 text-xs mb-3">
                  &#47;&#47; Focused editor line 42 · Native keystroke insertion
                </div>
                <div className="text-purple-400">
                  import <span className="text-blue-300">&#123; Request, Response &#125;</span> from <span className="text-emerald-300">"next/server"</span>;
                </div>
                <div className="text-purple-400 mb-3">
                  import <span className="text-blue-300">&#123; type Session &#125;</span> from <span className="text-emerald-300">"@/types"</span>;
                </div>
                <div className="text-slate-100 flex items-baseline flex-wrap">
                  <span className="text-blue-400 mr-2">42</span>
                  <span>{typedText}</span>
                  <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-cursor" />
                </div>
              </div>
            ) : (
              <div className="min-h-[220px] bg-[#0f1420] rounded-xl p-4 border border-slate-800 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300">
                      AK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Akshat</span>
                        <span className="text-[10px] text-slate-500">4:44 PM</span>
                      </div>
                      <div className="text-xs text-slate-300">
                        Preparing database release for staging...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slack Composer Field */}
                <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-700/80">
                  <div className="text-xs text-slate-200 whitespace-pre-wrap font-sans min-h-[48px]">
                    {typedText || <span className="text-slate-500 italic">Press ⌃⌥Space to dictate into #engineering...</span>}
                    <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-0.5 animate-cursor align-middle" />
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="text-emerald-400 font-mono text-[10px]">
                      ✓ Smart Shift+Enter active (prevents accidental send)
                    </span>
                    <button type="button" className="p-1 rounded bg-slate-800 text-slate-400">
                      <SendHorizontal className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Live Feature Callout */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-medium">Demonstrated Feature:</span>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                  {activeFeature}
                </span>
              </div>
              <div className="text-slate-500">
                0 cloud sockets · In-memory audio
              </div>
            </div>
          </MacOSWindow>
        </div>
      </Container>
    </section>
  );
}
