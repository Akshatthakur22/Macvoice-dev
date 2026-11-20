import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DefaultShortcut } from "@/components/ui/Keycap";
import { Waveform } from "@/components/ui/Waveform";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Press the shortcut.",
    body: "Click into any text box, in any app. Then press Control, Option and Space.",
    visual: <DefaultShortcut size="lg" />,
  },
  {
    title: "Just talk.",
    body: "Speak the way you normally would. Words appear at your cursor as you go.",
    visual: (
      <span className="inline-flex items-center gap-3 rounded-full bg-ink px-4 py-3 text-white shadow-e2">
        <Waveform active cycles={4} bars={7} className="h-6 gap-1" barClassName="w-1" />
        <span className="text-[14px] text-white/70">Listening</span>
      </span>
    ),
  },
  {
    title: "Press it again. Done.",
    body: "The text is already where you wanted it. There's nothing to paste.",
    visual: (
      <span className="inline-flex items-center rounded-tile border border-line bg-surface px-4 py-3 text-[15px] shadow-e1">
        See you at 3pm.
        <span className="ml-px inline-block h-5 w-[2px] bg-accent" />
      </span>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="How it works" title="Press. Talk. Done." muted="Nothing new to learn." />
        </Reveal>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-e1 sm:p-8"
            >
              <div aria-hidden="true" className="flex h-28 items-center justify-center rounded-tile bg-sunken">
                {s.visual}
              </div>
              <p className="text-eyebrow mt-6 text-ink-2">Step {i + 1}</p>
              <h3 className="text-h3 mt-2 text-ink">{s.title}</h3>
              <p className="text-body mt-2 text-ink-2">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
