"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MacOSWindow } from "@/components/ui/MacOSWindow";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { RotateCcw, SendHorizontal, Check, Mic } from "lucide-react";

type DemoApp = "vscode" | "slack";

const vscodeScript = [
  { speech: "export async function", text: "export async function", feature: "Live Cursor Streaming" },
  { speech: " um verify session token", text: " verifySessionToken", feature: "Instant Filler Removal ('um' stripped)" },
  { speech: " open paren req colon Request", text: "(req: Request", feature: "Technical Dictation" },
  { speech: " close paren colon Promise", text: "): Promise", feature: "Symbol Formatting" },
  { speech: " less than Session greater than", text: "<Session>", feature: "Bracket Normalization" },
];

const slackScript = [
  { speech: "hey team the database migrations are done", text: "Hey team, the database migrations are done.", feature: "Contraction & Grammar Polish" },
  { speech: " new line ", text: "\n", feature: "Chat-Safe Shift+Enter" },
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
        setIsListening(false);
        timeoutId = setTimeout(() => {
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
    <section id="demo" className="py-20 bg-[#F5F5F7] border-y border-[#E8E8ED]">
      <Container>
        {/* Apple Segmented App Switcher & Replay */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          <div className="flex items-center p-1 rounded-full bg-[#E8E8ED]/80">
            <button
              type="button"
              onClick={() => setActiveApp("vscode")}
              className={`px-4 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-all ${
                activeApp === "vscode"
                  ? "bg-[#FFFFFF] text-[#1D1D1F] shadow-xs"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              Code Editor (VS Code)
            </button>
            <button
              type="button"
              onClick={() => setActiveApp("slack")}
              className={`px-4 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-all ${
                activeApp === "slack"
                  ? "bg-[#FFFFFF] text-[#1D1D1F] shadow-xs"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              Chat App (Slack)
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#6E6E73]">
            <button
              type="button"
              onClick={() => {
                setTypedText("");
                setSpokenAudioText("");
                setIsPlaying(true);
              }}
              className="inline-flex items-center gap-1.5 font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Replay Demo
            </button>
            <span className="text-[#D2D2D7]">•</span>
            <div className="flex items-center gap-1.5">
              <span>Trigger:</span>
              <ShortcutBadge display="⌃⌥Space" size="sm" />
            </div>
          </div>
        </div>

        {/* Dual Window Layout: Native MacVoice Utility + Target Destination */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Authentic MacVoice Native Control Window (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] shadow-[0_12px_30px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Window title bar */}
            <div className="px-4 py-3 bg-[#F5F5F7] border-b border-[#E8E8ED] flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/30" />
              </div>
              <span className="text-[11px] font-medium text-[#1D1D1F]">MacVoice Control</span>
              <div className="w-8" />
            </div>

            {/* Window body matching MacVoice Swift main.swift */}
            <div className="p-5 space-y-4 text-xs">
              {/* App Identity */}
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/macvoice-symbol.svg"
                  alt="MacVoice Icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <div className="font-bold text-sm text-[#1D1D1F]">MacVoice</div>
                  <div className="text-[11px] text-[#6E6E73]">
                    Local-First Voice Keyboard
                  </div>
                </div>
              </div>

              {/* Status Row */}
              <div className="p-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isListening
                        ? "bg-[#0071E3] animate-pulse"
                        : "bg-emerald-500"
                    }`}
                  />
                  <span className="font-medium text-[#1D1D1F]">
                    {isListening ? "Listening…" : "Idle (Ready)"}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6E6E73]">
                  macOS 26+
                </span>
              </div>

              {/* Mode Picker Representation */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#6E6E73] block">
                  Transcription Mode
                </label>
                <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] font-medium flex items-center justify-between text-xs select-none">
                  <span>Polished (Native Swift)</span>
                  <span className="text-[#6E6E73] text-[10px]">▾</span>
                </div>
              </div>

              {/* Shortcut Info */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#6E6E73] block">
                  Global Shortcut
                </label>
                <div className="p-2 rounded-lg bg-[#F5F5F7] border border-[#E8E8ED] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#1D1D1F]">⌃⌥Space</span>
                  <span className="text-[10px] text-[#0071E3] font-medium">Record…</span>
                </div>
              </div>

              {/* System Permissions Checked */}
              <div className="pt-2 border-t border-[#E8E8ED] space-y-1.5 text-[11px] text-[#6E6E73]">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Microphone Authorized</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Accessibility Granted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Target Destination Window (8 cols) */}
          <div className="lg:col-span-8">
            <MacOSWindow
              title={activeApp === "vscode" ? "auth.ts — src/lib — VS Code" : "#engineering — Slack"}
              subtitle={activeApp === "vscode" ? "Line 42" : "Focused Input"}
              headerRight={
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#6E6E73]">Active Focus</span>
                </div>
              }
            >
              {/* Audio Waveform Stream */}
              <div className="mb-4 p-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#FFFFFF] text-[#0071E3] border border-[#E8E8ED] shadow-xs">
                    <Mic className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#6E6E73]">
                      In-Memory Voice Stream
                    </div>
                    <div className="text-[#1D1D1F] font-mono text-xs">
                      "{spokenAudioText || "Listening for speech…"}"
                    </div>
                  </div>
                </div>

                {/* Waveform indicator */}
                <div className="flex items-center gap-1 h-4">
                  <span className="w-1 bg-[#0071E3] rounded-full animate-wave-1"></span>
                  <span className="w-1 bg-[#0071E3] rounded-full animate-wave-2"></span>
                  <span className="w-1 bg-[#0071E3] rounded-full animate-wave-3"></span>
                  <span className="w-1 bg-[#0071E3] rounded-full animate-wave-4"></span>
                  <span className="w-1 bg-[#0071E3] rounded-full animate-wave-5"></span>
                </div>
              </div>

              {/* Target app contents */}
              {activeApp === "vscode" ? (
                <div className="min-h-[220px] bg-[#FAFAFC] rounded-xl p-4 font-mono text-sm leading-relaxed border border-[#E8E8ED]">
                  <div className="text-[#6E6E73] text-xs mb-3">
                    &#47;&#47; Focused line · Native keystrokes (CGEvent)
                  </div>
                  <div className="text-purple-600">
                    import <span className="text-[#0071E3]">&#123; Request &#125;</span> from <span className="text-emerald-600">"next/server"</span>;
                  </div>
                  <div className="text-purple-600 mb-3">
                    import <span className="text-[#0071E3]">&#123; type Session &#125;</span> from <span className="text-emerald-600">"@/types"</span>;
                  </div>
                  <div className="text-[#1D1D1F] flex items-baseline flex-wrap">
                    <span className="text-[#A1A1A6] mr-2">42</span>
                    <span>{typedText}</span>
                    <span className="inline-block w-2 h-4 bg-[#0071E3] ml-0.5 animate-cursor" />
                  </div>
                </div>
              ) : (
                <div className="min-h-[220px] bg-[#F5F5F7] rounded-xl p-4 border border-[#E8E8ED] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-700">
                        AK
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1D1D1F]">Akshat</span>
                          <span className="text-[10px] text-[#6E6E73]">4:44 PM</span>
                        </div>
                        <div className="text-xs text-[#1D1D1F]">
                          Preparing database release for staging...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slack Composer Field */}
                  <div className="mt-4 p-3 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7] shadow-xs">
                    <div className="text-xs text-[#1D1D1F] whitespace-pre-wrap font-sans min-h-[48px]">
                      {typedText || <span className="text-[#6E6E73] italic">Press ⌃⌥Space to dictate into #engineering...</span>}
                      <span className="inline-block w-1.5 h-3.5 bg-[#0071E3] ml-0.5 animate-cursor align-middle" />
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#E8E8ED] flex items-center justify-between text-[11px] text-[#6E6E73]">
                      <span className="text-emerald-600 font-mono text-[10px] font-medium">
                        ✓ Shift+Return enabled (keeps message draft safe)
                      </span>
                      <button type="button" className="p-1 rounded-full bg-[#F5F5F7] text-[#6E6E73]">
                        <SendHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Feature Callout */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#6E6E73] px-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#1D1D1F] font-medium">Active Capability:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] font-mono text-[11px]">
                    {activeFeature}
                  </span>
                </div>
                <div className="text-[#6E6E73]">
                  Sub-150ms · Zero Cloud Audio
                </div>
              </div>
            </MacOSWindow>
          </div>
        </div>
      </Container>
    </section>
  );
}
