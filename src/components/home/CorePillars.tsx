import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Zap, Sparkles, MessageSquareWarning, Keyboard, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CorePillars() {
  return (
    <section id="features" className="py-28 bg-[#FFFFFF]">
      <Container>
        <SectionHeader
          eyebrow="Why You'll Love It"
          title="Designed for how humans actually talk."
          description="Everything you need to write faster, cleaner, and without the frustrations of typical dictation tools."
        />

        <div className="space-y-24 max-w-5xl mx-auto">
          {/* Pillar 1: Types Like Real Fingers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                <Keyboard className="w-4 h-4" />
                True Keyboard Typing
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                It types like real fingers. Even where copy-paste is blocked.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Ever tried pasting into a bank form, job portal, or secure website and got an annoying message saying <em>"Pasting is disabled"</em>?
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Most voice tools put your words on the clipboard and press <code>Cmd+V</code> for you. When paste is blocked, that trick fails, and your clipboard gets borrowed along the way.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice types your words as keyboard input, the same way your keyboard does. It doesn&apos;t paste, so it works in most places paste is blocked, and it never touches whatever you already have copied. (Password fields are the one place it deliberately won&apos;t type.)
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-4 text-xs">
              <div className="text-[#6E6E73] text-[11px] pb-2 border-b border-[#E8E8ED] flex justify-between font-medium">
                <span>The MacVoice Difference</span>
                <span className="text-[#0071E3]">Works Everywhere</span>
              </div>

              {/* The old way */}
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] space-y-1.5">
                <div className="font-semibold text-[#1D1D1F] text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Other Dictation Apps
                </div>
                <p className="text-[#6E6E73] text-xs leading-relaxed">
                  Put your words on the clipboard and paste them. Fails where paste is blocked, and can trigger &quot;clipboard changed&quot; warnings.
                </p>
              </div>

              {/* MacVoice way */}
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#0071E3]/25 shadow-xs space-y-1.5">
                <div className="font-semibold text-[#0071E3] text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
                  MacVoice Real-Time Typing
                </div>
                <p className="text-[#1D1D1F] text-xs leading-relaxed">
                  Types your words as keyboard input. Works where paste is blocked, and your clipboard is never used.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Live streaming */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                <Zap className="w-4 h-4" />
                Zero Waiting
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                Speak at your normal speed. Words appear as you talk.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Many voice apps make you finish talking, press stop, wait for the AI to process the recording, and then paste one big block of text.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice types while you talk. In Polished mode (the default) each sentence appears as soon as you finish it, already cleaned up. In Verbatim mode words appear one by one, as you say them. Either way you can see what you&apos;re writing and stay in flow.
              </p>
            </div>

            <div className="lg:col-span-6 lg:order-1 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 text-xs">
              <div className="text-[#6E6E73] text-[11px] pb-2 border-b border-[#E8E8ED] flex justify-between font-medium">
                <span>Real-Time Flow</span>
                <span className="text-emerald-600 font-semibold">Types while you talk</span>
              </div>
              <div className="space-y-2 text-[#1D1D1F] leading-relaxed">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8E8ED]">
                  <span className="text-[#0071E3] font-semibold">You say:</span> "Let's prepare the presentation for the Monday team meeting"
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-emerald-200">
                  <span className="text-emerald-700 font-semibold">It types:</span> &ldquo;Let&apos;s prepare the presentation for the Monday team meeting.&rdquo; Done before you&apos;ve reached for the keyboard.
                </div>
              </div>
              <div className="pt-1 text-[11px] text-[#6E6E73]">
                No recording to upload, no loading spinner, no big paste at the end.
              </div>
            </div>
          </div>

          {/* Pillar 3: Native Swift Polisher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                <Sparkles className="w-4 h-4" />
                Automatic Cleanup
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                Say goodbye to "um", "uh", and awkward stutters.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                Everyone hesitates and clears their throat when speaking out loud. Traditional dictation writes down every single "um", "ah", and pause, leaving you with a messy draft.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice cleans up hesitations automatically, fixes unpunctuated contractions (turning "dont" into "don't"), and formats proper sentence capitalization instantly.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E6E73] block mb-1">
                  What You Say
                </span>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E8E8ED] text-[#6E6E73]">
                  "hey um can you check the uh budget proposal dont forget"
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071E3] block mb-1">
                  What Appears on Screen
                </span>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#0071E3]/25 text-[#1D1D1F] font-medium shadow-xs">
                  "Hey, can you check the budget proposal? Don't forget."
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Chat-Safe Typing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                <MessageSquareWarning className="w-4 h-4" />
                Chat Safety
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                Never sends an accidental, half-written Slack message.
              </h3>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                In Slack, WhatsApp or Teams, pressing Enter sends your message. So if a voice tool turns &quot;new line&quot; into Enter, a half-finished sentence goes straight to your boss.
              </p>
              <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
                MacVoice is smart. When you're inside messaging apps, it automatically inserts a safe line break instead of pressing Send. Your drafts stay drafts until you're ready.
              </p>
            </div>

            <div className="lg:col-span-6 lg:order-1 p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#1D1D1F]">Works Safely in All Chat Apps</span>
                  <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Protected
                  </span>
                </div>
                <p className="text-[#6E6E73] text-xs leading-relaxed">
                  Slack, WhatsApp, Discord, Teams, Telegram, Messages and Signal, plus Slack and WhatsApp in your browser. Speak paragraphs without worrying about accidental sends.
                </p>
              </div>
              <div className="text-[11px] text-[#6E6E73] px-1">
                Also works seamlessly in Word, Google Docs, Apple Notes, Safari, and Mail.
              </div>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive callout for engineers & technical evaluators */}
        <div className="mt-20 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#0071E3]">
              For Engineers &amp; Power Users
            </span>
            <h4 className="text-lg font-bold text-[#1D1D1F]">
              Curious about the technical architecture?
            </h4>
            <p className="text-xs text-[#6E6E73] max-w-xl">
              MacVoice is a native Swift app (under 1 MB) built on Apple&apos;s on-device SpeechAnalyzer and macOS keyboard events (CGEvent). No Python, no Electron, no bundled AI model, no servers.
            </p>
          </div>
          <Link
            href="/privacy#architecture"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] hover:underline shrink-0"
          >
            How it works under the hood <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
