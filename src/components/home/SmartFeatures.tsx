import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  BookA,
  Eraser,
  KeyRound,
  Repeat,
  SpellCheck,
  SquareTerminal,
  Space,
  Volume2,
} from "lucide-react";

const commands = [
  { say: "new line", does: "Starts a new line" },
  { say: "new paragraph", does: "Blank line, new paragraph" },
  { say: "bullet point", does: "Starts a “- ” list item" },
  { say: "comma", does: "," },
  { say: "question mark", does: "?" },
  { say: "exclamation mark", does: "!" },
  { say: "full stop · …period", does: ". (say “period” at the end)" },
  { say: "scratch that", does: "Deletes the last sentence" },
];

const features = [
  {
    icon: BookA,
    title: "Teach it your words",
    body: "Add names, product terms and jargon (“Kubernetes”, “Priya”, “PostgreSQL”). Apple’s recognizer will prefer your spellings.",
  },
  {
    icon: Repeat,
    title: "Spoken shortcuts",
    body: "Write rules like “my email => you@example.com”. Say the phrase, MacVoice types the full text.",
  },
  {
    icon: SquareTerminal,
    title: "Safe in Terminal",
    body: "In Terminal, iTerm2, Warp, Ghostty and others it only removes “um”s. No capital letters, no trailing period: your command still runs.",
  },
  {
    icon: SpellCheck,
    title: "Fixes the small stuff",
    body: "Removes fillers and stutters (“the the”), adds missing apostrophes (“dont” → “don’t”), capitalises sentences, and leaves “iPhone”, URLs and decimals alone.",
  },
  {
    icon: Space,
    title: "Picks up where you left off",
    body: "MacVoice checks the few characters before your cursor, so it adds a space when needed and doesn’t capitalise mid-sentence.",
  },
  {
    icon: KeyRound,
    title: "Stays out of passwords",
    body: "When a password field is active (macOS Secure Input), MacVoice refuses to type. On purpose.",
  },
  {
    icon: Volume2,
    title: "Small comforts",
    body: "Soft start/stop sounds, launch at login, light or dark appearance, and a built-in test box to try it out.",
  },
  {
    icon: Eraser,
    title: "Works with fussy apps",
    body: "If an app drops text, switch on “Type one character at a time” in Settings for maximum compatibility.",
  },
];

export function SmartFeatures() {
  return (
    <section id="voice-commands" className="py-24 bg-[#F5F5F7] border-y border-[#E8E8ED]">
      <Container>
        <SectionHeader
          eyebrow="Talk Naturally"
          title="Just say what you want."
          description="Format text with your voice, undo mistakes, and teach MacVoice the words you use every day. No settings to learn first."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Voice command cheat sheet */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FFFFFF] border border-[#E8E8ED] p-6 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Voice commands</h3>
            <p className="text-xs text-[#6E6E73] mb-5 leading-relaxed">
              Work in Polished mode (the default). MacVoice is careful: “the next line of code” or “a long period” are typed as normal words.
            </p>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-[#6E6E73]">
                  <th className="pb-2 font-semibold">You say</th>
                  <th className="pb-2 font-semibold">MacVoice does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8ED]">
                {commands.map((c) => (
                  <tr key={c.say}>
                    <td className="py-2.5 pr-3 font-mono text-[13px] text-[#0071E3]">“{c.say}”</td>
                    <td className="py-2.5 text-[13px] text-[#1D1D1F]">{c.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-[11px] text-[#6E6E73] leading-relaxed">
              In Slack, WhatsApp, Teams, Discord, Telegram, Messages and Signal (including Slack and WhatsApp in your browser), “new line” sends Shift+Return, so your message isn’t sent early.
            </p>
          </div>

          {/* Smart behaviours */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#0071E3] flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1D1D1F] mb-1">{f.title}</h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
