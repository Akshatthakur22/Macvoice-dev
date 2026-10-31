"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { MacOSWindow } from "@/components/ui/MacOSWindow";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { RotateCcw, SendHorizontal, Check, Mic, Lock, CheckCircle2 } from "lucide-react";

type DemoApp = "notes" | "slack" | "secure-form";

const notesScript = [
  { speech: "hi team please review the draft before tomorrow", text: "Hi team, please review the draft before tomorrow.", feature: "Instant Speech-to-Text" },
  { speech: " um dont forget to check the outline", text: " Don't forget to check the outline.", feature: "Removes 'Um' & Fixes Contractions ('dont' → 'Don't')" },
  { speech: " it looks really promising", text: " It looks really promising!", feature: "Punctuation & Capitalization" },
];

const slackScript = [
  { speech: "hey everyone the project launch is scheduled for friday", text: "Hey everyone, the project launch is scheduled for Friday.", feature: "Natural Speaking Cadence" },
  { speech: " new line ", text: "\n", feature: "Chat-Safe Line Break (Won't send early)" },
  { speech: "let me know if you need anything before then", text: "Let me know if you need anything before then.", feature: "Paragraph Formatting" },
];

const secureFormScript = [
  { speech: "confirm registration access code nine four two", text: "Confirm registration access code 942", feature: "Simulated Keyboard Keystrokes" },
  { speech: " works even where copy paste is disabled", text: " — works even where copy-paste is blocked.", feature: "Bypasses Paste Restrictions" },
  { speech: " and your clipboard stays untouched", text: " (Your copied text stays safe)", feature: "Zero Clipboard Overwrite" },
];

export function LiveDemo() {
  const [activeApp, setActiveApp] = useState<DemoApp>("notes");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [spokenAudioText, setSpokenAudioText] = useState("");
  const [activeFeature, setActiveFeature] = useState<string>("Streaming");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charInterval: NodeJS.Timeout;
    let stepIndex = 0;

    const script =
      activeApp === "notes"
        ? notesScript
        : activeApp === "slack"
        ? slackScript
        : secureFormScript;

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
        {/* Friendly Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-[0.08em] text-[#0071E3] uppercase mb-2 block">
            Interactive Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-3">
            See it type in the apps you use every day.
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base">
            No switching windows. Press a shortcut, speak naturally, and watch text appear right where your cursor is.
          </p>
        </div>

        {/* Apple Segmented App Switcher & Replay */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          <div className="flex items-center p-1 rounded-full bg-[#E8E8ED]/80 flex-wrap gap-1">
            <button
              type="button"
              onClick={() => setActiveApp("notes")}
              className={`px-4 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-all ${
                activeApp === "notes"
                  ? "bg-[#FFFFFF] text-[#1D1D1F] shadow-xs"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              Writing Notes &amp; Docs
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
              Messaging (Slack / WhatsApp)
            </button>
            <button
              type="button"
              onClick={() => setActiveApp("secure-form")}
              className={`px-4 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-all ${
                activeApp === "secure-form"
                  ? "bg-[#FFFFFF] text-[#1D1D1F] shadow-xs"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              Websites Where Paste is Blocked
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
              Replay
            </button>
            <span className="text-[#D2D2D7]">•</span>
            <div className="flex items-center gap-1.5">
              <span>Shortcut:</span>
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
              <span className="text-[11px] font-medium text-[#1D1D1F]">MacVoice Mini</span>
              <div className="w-8" />
            </div>

            {/* Window body */}
            <div className="p-5 space-y-4 text-xs">
              {/* App Identity */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[8.5px] bg-gradient-to-b from-[#0A84FF] to-[#0071E3] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <svg
                    className="w-[18px] h-[18px] text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="currentColor" />
                    <path
                      d="M5.5 10.5C5.5 14.09 8.41 17 12 17C15.59 17 18.5 14.09 18.5 10.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path d="M12 17V21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M8.5 21H15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1D1D1F]">MacVoice</div>
                  <div className="text-[11px] text-[#6E6E73]">
                    Instant Voice Keyboard
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
                    {isListening ? "Listening…" : "Ready to type"}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  On-Device
                </span>
              </div>

              {/* How it works simple callout */}
              <div className="p-3 rounded-xl bg-[#EAF3FF]/60 border border-[#0071E3]/20 space-y-1">
                <span className="text-[11px] font-semibold text-[#0071E3] block">
                  How you use it:
                </span>
                <p className="text-[11px] text-[#1D1D1F] leading-relaxed">
                  Click into any text field on your Mac, press your shortcut, and speak normally.
                </p>
              </div>

              {/* Shortcut Info */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#6E6E73] block">
                  Keyboard Trigger
                </label>
                <div className="p-2 rounded-lg bg-[#F5F5F7] border border-[#E8E8ED] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#1D1D1F]">⌃⌥Space</span>
                  <span className="text-[10px] text-[#0071E3] font-medium">Customizable</span>
                </div>
              </div>

              {/* System Permissions Checked */}
              <div className="pt-2 border-t border-[#E8E8ED] space-y-1.5 text-[11px] text-[#6E6E73]">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Microphone Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Direct System Typing Enabled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Target Destination Window (8 cols) */}
          <div className="lg:col-span-8">
            <MacOSWindow
              title={
                activeApp === "notes"
                  ? "Project Update — Apple Notes"
                  : activeApp === "slack"
                  ? "#team-chat — Slack"
                  : "Customer Portal (Safari)"
              }
              subtitle={
                activeApp === "notes"
                  ? "Clean document writing"
                  : activeApp === "slack"
                  ? "Chat-safe typing"
                  : "Paste blocked by website"
              }
              headerRight={
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#6E6E73]">Your Cursor</span>
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
                      What You're Saying
                    </div>
                    <div className="text-[#1D1D1F] text-xs">
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
              {activeApp === "notes" ? (
                <div className="min-h-[220px] bg-[#FFFFFF] rounded-xl p-5 border border-[#E8E8ED] space-y-3 font-sans">
                  <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                    Meeting Notes &middot; Today
                  </div>
                  <div className="text-[#1D1D1F] text-base leading-relaxed">
                    <span>{typedText}</span>
                    <span className="inline-block w-2 h-4 bg-[#0071E3] ml-0.5 animate-cursor align-middle" />
                  </div>
                  <div className="pt-4 text-xs text-[#86868B] border-t border-[#E8E8ED]">
                    Automatically removes hesitations ("um", "uh") and cleans up punctuation.
                  </div>
                </div>
              ) : activeApp === "slack" ? (
                <div className="min-h-[220px] bg-[#F5F5F7] rounded-xl p-4 border border-[#E8E8ED] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-700">
                        AT
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1D1D1F]">Alex</span>
                          <span className="text-[10px] text-[#6E6E73]">2:15 PM</span>
                        </div>
                        <div className="text-xs text-[#1D1D1F]">
                          Hey, does anyone have an update on the client launch?
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slack Composer Field */}
                  <div className="mt-4 p-3 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7] shadow-xs">
                    <div className="text-xs text-[#1D1D1F] whitespace-pre-wrap font-sans min-h-[48px]">
                      {typedText || <span className="text-[#6E6E73] italic">Press ⌃⌥Space and speak your reply...</span>}
                      <span className="inline-block w-1.5 h-3.5 bg-[#0071E3] ml-0.5 animate-cursor align-middle" />
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#E8E8ED] flex items-center justify-between text-[11px] text-[#6E6E73]">
                      <span className="text-emerald-600 text-[10px] font-medium">
                        ✓ Saying "new line" adds a safe line break without sending the message
                      </span>
                      <button type="button" className="p-1 rounded-full bg-[#F5F5F7] text-[#6E6E73]">
                        <SendHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Secure Paste-Blocked Form Window */
                <div className="min-h-[220px] bg-[#FFFFFF] rounded-xl p-5 border border-[#E8E8ED] flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs">
                      <div className="flex items-center gap-2 text-amber-950 font-medium">
                        <Lock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>Restricted Website Field: <span className="font-semibold text-amber-800">Copy &amp; Paste Disabled</span></span>
                      </div>
                      <span className="text-[10px] font-mono text-amber-900 bg-amber-100 px-2 py-0.5 rounded font-semibold">
                        Cmd+V Fails
                      </span>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#1D1D1F] uppercase tracking-wider block mb-1.5">
                        Registration Memo (Types like real keyboard keys)
                      </label>
                      <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-xs text-[#1D1D1F] min-h-[58px] leading-relaxed">
                        {typedText || <span className="text-[#6E6E73] italic font-sans">Press ⌃⌥Space. MacVoice types genuine keystrokes so paste blocks can't stop you...</span>}
                        <span className="inline-block w-1.5 h-3.5 bg-[#0071E3] ml-0.5 animate-cursor align-middle" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E8E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#6E6E73]">
                    <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Simulates real keyboard typing: Bypasses website paste restrictions
                    </span>
                    <span className="font-medium text-[10px] text-[#6E6E73] bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E8E8ED]">
                      Clipboard safe
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Feature Callout */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#6E6E73] px-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#1D1D1F] font-medium">What's happening:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#D2D2D7] text-[#1D1D1F] text-[11px] font-medium">
                    {activeFeature}
                  </span>
                </div>
                <div className="text-[#6E6E73]">
                  Works instantly in any Mac app
                </div>
              </div>
            </MacOSWindow>
          </div>
        </div>
      </Container>
    </section>
  );
}
