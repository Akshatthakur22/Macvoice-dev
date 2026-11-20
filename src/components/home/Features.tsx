import React from "react";
import { BookA, ClipboardCheck, Eraser, Lock, MessageSquareText, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type Card = {
  icon: React.ElementType;
  eyebrow: string;
  lead: string;
  rest: string;
  mock: React.ReactNode;
  span: string;
};

const chip = "inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-[13px] shadow-e1";

const CARDS: Card[] = [
  {
    icon: Eraser,
    eyebrow: "Cleanup",
    lead: "Say “um”. It won’t.",
    rest: "Fillers, stutters like “the the” and missing apostrophes are fixed as you talk. No AI model, nothing to wait for.",
    span: "md:col-span-4",
    mock: (
      <div className="space-y-2 text-[14px]">
        <div className="rounded-tile bg-surface px-4 py-3 text-ink-2 shadow-e1">
          hey <s className="text-ink-3">um</s> can you check the <s className="text-ink-3">uh</s> budget proposal{" "}
          <s className="text-ink-3">dont</s> forget
        </div>
        <div className="rounded-tile border border-accent/25 bg-surface px-4 py-3 font-medium text-ink shadow-e1">
          Hey, can you check the budget proposal? Don’t forget.
        </div>
      </div>
    ),
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Clipboard",
    lead: "Your clipboard stays yours.",
    rest: "MacVoice types like a keyboard instead of pasting, so it even works where paste is blocked.",
    span: "md:col-span-2",
    mock: (
      <div className="rounded-tile bg-surface p-4 shadow-e1">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-2">Clipboard</p>
        <p className="mt-1 truncate font-mono text-[13px] text-ink">northwind.io/invoices/2291</p>
        <p className="mt-2 text-[12px] font-medium text-success-ink">✓ Unchanged after dictating</p>
      </div>
    ),
  },
  {
    icon: Lock,
    eyebrow: "Privacy",
    lead: "Your voice never leaves your Mac.",
    rest: "No upload, no account, no history. Audio lives in memory only while you talk.",
    span: "md:col-span-2",
    mock: (
      <dl className="divide-y divide-line rounded-tile bg-surface text-[13px] shadow-e1">
        {[
          ["Speech engine", "On this Mac"],
          ["Audio saved", "Never"],
          ["Account", "None"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between px-4 py-2">
            <dt className="text-ink-2">{k}</dt>
            <dd className="font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    icon: MessageSquareText,
    eyebrow: "Voice commands",
    lead: "Format with your voice.",
    rest: "Say “new line”, “bullet point” or “scratch that”. In chat apps, a new line never sends early.",
    span: "md:col-span-2",
    mock: (
      <div className="flex flex-wrap gap-2">
        {["new line", "new paragraph", "bullet point", "question mark", "scratch that"].map((c) => (
          <span key={c} className={cn(chip, "font-mono text-accent")}>
            “{c}”
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: BookA,
    eyebrow: "Your words",
    lead: "Learns the names you use.",
    rest: "Add people, products and jargon. Set spoken shortcuts that expand into full text.",
    span: "md:col-span-2",
    mock: (
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {["Priya Raman", "Kubernetes", "PostgreSQL"].map((w) => (
            <span key={w} className={chip}>
              {w}
            </span>
          ))}
        </div>
        <div className="rounded-tile bg-surface px-3 py-2 font-mono text-[12px] text-ink shadow-e1">
          my email <span className="text-ink-3">⇒</span> sam@northwind.io
        </div>
      </div>
    ),
  },
  {
    icon: SlidersHorizontal,
    eyebrow: "Two modes",
    lead: "Polished or verbatim.",
    rest: "Polished types clean sentences as you finish them. Verbatim types every word, exactly as said.",
    span: "md:col-span-6",
    mock: (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-tile border border-accent/25 bg-surface p-4 shadow-e1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Polished · default</p>
          <p className="mt-2 text-[14px] text-ink">Hey, can you check the cache? Don’t forget to restart it.</p>
        </div>
        <div className="rounded-tile bg-surface p-4 shadow-e1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-2">Verbatim</p>
          <p className="mt-2 text-[14px] text-ink-2">hey um can you check the uh the cache dont forget to restart it</p>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            title="Built for how you actually talk."
            muted="Not just dictation."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-6">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal
                as="article"
                key={c.eyebrow}
                className={cn(
                  "flex flex-col rounded-card border border-line bg-surface p-6 shadow-e1 hover:-translate-y-0.5 hover:shadow-e2 sm:p-8",
                  c.span
                )}
              >
                <p className="text-eyebrow flex items-center gap-2 text-ink-2">
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  {c.eyebrow}
                </p>
                <h3 className="text-h3 mt-3 max-w-[520px] text-pretty">
                  <span className="text-ink">{c.lead}</span> <span className="font-medium text-ink-2">{c.rest}</span>
                </h3>
                <div aria-hidden="true" className="mt-6 flex-1 cursor-default rounded-tile bg-sunken p-4 sm:p-5">
                  {c.mock}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
