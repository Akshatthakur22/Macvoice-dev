"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Shield, FastForward } from "lucide-react";

export function TwoModes() {
  const [activeTab, setActiveTab] = useState<"verbatim" | "polished">("polished");

  const examples = {
    spoken: "hey um can you check the uh redis cache dont forget to restart it new line thanks",
    verbatim: "hey um can you check the uh redis cache dont forget to restart it\nthanks",
    polished: "Hey, can you check the Redis cache? Don't forget to restart it.\nThanks!",
  };

  return (
    <section id="modes" className="py-24 bg-[#070b12] border-t border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Freedom of Choice"
          title="Two Distinct Modes. Complete User Control."
          description="Switch between raw, unmodified transcription speed and conservative native polishing in a single keystroke."
        />

        {/* Tab switch */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-white/10 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("verbatim")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "verbatim"
                  ? "bg-slate-800 text-white shadow-md border border-white/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FastForward className="w-4 h-4 text-amber-400" />
              Verbatim Mode (Raw Speed)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("polished")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "polished"
                  ? "bg-[#0A84FF] text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4 text-white" />
              Polished Mode (Smart Cleanup)
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: What You Speak */}
          <div className="rounded-2xl bg-[#111726] border border-white/[0.08] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Input Utterance
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Raw Audio Transcript
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 font-mono text-sm leading-relaxed mb-4">
                "{examples.spoken}"
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notice natural vocal hesitation words ("um", "uh"), unpunctuated contractions ("dont"), and spoken formatting instructions ("new line").
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-500">
              Input captured by macOS SpeechAnalyzer in memory
            </div>
          </div>

          {/* Card 2: What MacVoice Inserts */}
          <div className="rounded-2xl bg-[#111726] border border-blue-500/30 p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(10,132,255,0.08)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  {activeTab === "verbatim" ? "Verbatim Output" : "Polished Output"}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {activeTab === "verbatim" ? "< 120ms total" : "< 150ms total"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-blue-500/20 text-white font-mono text-sm leading-relaxed whitespace-pre-line mb-4 min-h-[96px]">
                {activeTab === "verbatim" ? examples.verbatim : examples.polished}
              </div>

              <div className="space-y-2 text-xs">
                {activeTab === "verbatim" ? (
                  <>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>Zero post-processing delay; passes speech recognizer text directly</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ideal for terminal commands, regex, variable names, and code tokens</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Strips fillers ("um", "uh") with zero latency overhead</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Repairs contractions ("dont" → "don't") & normalizes capitalization</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Safe fallback: if text alterations fail safety checks, original text is preserved</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
              Mode can be toggled via menu bar or settings shortcut
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
