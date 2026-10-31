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
    <section id="modes" className="py-24 bg-[#FFFFFF]">
      <Container>
        <SectionHeader
          eyebrow="Freedom of Choice"
          title="Two Distinct Modes. Complete User Control."
          description="Switch between raw, unmodified transcription speed and conservative native polishing in a single keystroke."
        />

        {/* Tab switch */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-full bg-[#F5F5F7] border border-[#E8E8ED] flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("verbatim")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "verbatim"
                  ? "bg-[#FFFFFF] text-[#1D1D1F] shadow-sm border border-[#E8E8ED]"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              <FastForward className="w-4 h-4 text-amber-500" />
              Verbatim Mode (Raw Speed)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("polished")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "polished"
                  ? "bg-[#0071E3] text-white shadow-sm"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              <Shield className="w-4 h-4 text-current" />
              Polished Mode (Smart Cleanup)
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: What You Speak */}
          <div className="rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6E73]">
                  Input Utterance
                </span>
                <span className="text-[11px] font-mono text-[#6E6E73]">
                  Raw Audio Transcript
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] text-[#1D1D1F] font-mono text-sm leading-relaxed mb-4 shadow-sm">
                "{examples.spoken}"
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Notice natural vocal hesitation words ("um", "uh"), unpunctuated contractions ("dont"), and spoken formatting instructions ("new line").
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E8ED] text-xs text-[#6E6E73]">
              Input captured by macOS SpeechAnalyzer in memory
            </div>
          </div>

          {/* Card 2: What MacVoice Inserts */}
          <div className="rounded-3xl bg-[#FFFFFF] border border-[#0071E3]/30 p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,113,227,0.06)] ring-1 ring-[#0071E3]/20">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0071E3] font-bold">
                  {activeTab === "verbatim" ? "Verbatim Output" : "Polished Output"}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                  {activeTab === "verbatim" ? "< 120ms total" : "< 150ms total"}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#1D1D1F] font-mono text-sm leading-relaxed whitespace-pre-line mb-4 min-h-[96px]">
                {activeTab === "verbatim" ? examples.verbatim : examples.polished}
              </div>

              <div className="space-y-2.5 text-xs">
                {activeTab === "verbatim" ? (
                  <>
                    <div className="flex items-center gap-2 text-[#1D1D1F]">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Zero post-processing delay; passes speech recognizer text directly</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1D1D1F]">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Ideal for terminal commands, regex, variable names, and code tokens</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-[#1D1D1F]">
                      <Check className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                      <span>Strips fillers ("um", "uh") with zero latency overhead</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1D1D1F]">
                      <Check className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                      <span>Repairs contractions ("dont" → "don't") & normalizes capitalization</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1D1D1F]">
                      <Check className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                      <span>Safe fallback: if alterations fail safety checks, original text is kept</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E8ED] text-xs text-[#6E6E73] font-mono">
              Toggle modes via menu bar or settings shortcut
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
