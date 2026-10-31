import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Zap, Sparkles, MessageSquareWarning } from "lucide-react";

export function CorePillars() {
  return (
    <section id="features" className="py-28 bg-[#FFFFFF]">
      <Container>
        <SectionHeader
          eyebrow="Engineered for Power Users"
          title="The Three Pillars of Instant Dictation"
          description="Designed from the ground up for software engineers, writers, and Mac users who write all day."
        />

        <div className="space-y-24 max-w-5xl mx-auto">
          {/* Pillar 1: Sub-150ms Live Streaming */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3] font-mono">
                <Zap className="w-4 h-4" />
                Sub-150ms Streaming
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                Speak at 150 WPM. Watch text appear in real time.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Most speech tools force you into an awkward batch loop: you record, press stop, wait 4 seconds for an AI model to think, and paste.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice synthesizes native macOS keyboard events (CGEvent), typing words progressively into your active text field the moment you utter them.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 font-mono text-xs">
              <div className="text-[#6E6E73] text-[11px] pb-2 border-b border-[#E8E8ED] flex justify-between">
                <span>Progressive Insertion</span>
                <span className="text-emerald-600 font-semibold">&lt; 150ms latency</span>
              </div>
              <div className="text-[#1D1D1F] leading-relaxed">
                <span className="text-[#0071E3]">0.0s</span> → "export async function"<br />
                <span className="text-[#0071E3]">0.3s</span> → " verifySessionToken("<br />
                <span className="text-[#0071E3]">0.6s</span> → "req: Request): Promise"<br />
                <span className="text-[#0071E3]">0.9s</span> → "&lt;Session&gt;"
              </div>
              <div className="pt-2 text-[11px] text-[#6E6E73]">
                Keystroke events post directly into focused window. Clipboard remains untouched.
              </div>
            </div>
          </div>

          {/* Pillar 2: Native Swift Polisher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3] font-mono">
                <Sparkles className="w-4 h-4" />
                In-Process Swift Polish
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                No more "um", "uh", or awkward stutters in your docs.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Apple's built-in dictation writes down every vocal hesitation and throat-clearing sound. Heavy cloud tools send your voice to cloud GPUs with high latency.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice's native Swift polisher strips fillers, fixes unpunctuated contractions ("dont" → "don't"), and normalizes punctuation in less than 0.1 milliseconds with 0 extra RAM.
              </p>
            </div>

            <div className="lg:col-span-6 lg:order-1 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E6E73] block mb-1">
                  Spoken Input
                </span>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8E8ED] text-[#6E6E73] font-mono">
                  "hey um can you check the uh redis cache dont forget"
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071E3] block mb-1">
                  Inserted Output (<span className="text-emerald-600 font-semibold">0.1ms clean</span>)
                </span>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#0071E3]/25 text-[#1D1D1F] font-mono shadow-xs">
                  "Hey, can you check the Redis cache? Don't forget"
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Chat-Safe Typing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3] font-mono">
                <MessageSquareWarning className="w-4 h-4" />
                Chat-Aware Safety
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                Types everywhere. Never accidentally sends your Slack message.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Saying "new line" in Slack, WhatsApp, Teams, or Discord usually sends an unfinished message to your team.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice detects your active window and automatically sends <code className="text-[#1D1D1F] font-mono bg-[#F5F5F7] px-1.5 py-0.5 rounded border border-[#E8E8ED]">Shift + Return</code> in messaging apps, keeping your conversations safe.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#1D1D1F]">Slack / Discord / Teams Detection</span>
                  <span className="text-emerald-700 font-mono font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active
                  </span>
                </div>
                <p className="text-[#6E6E73] text-xs leading-relaxed">
                  When you speak "new line", MacVoice injects Shift+Return instead of Return, formatting clean paragraphs without premature message transmission.
                </p>
              </div>
              <div className="text-[11px] text-[#6E6E73] px-1">
                Also validated across VS Code, Xcode, Obsidian, Safari, and Terminal.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
