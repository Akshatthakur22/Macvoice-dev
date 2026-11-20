import React from "react";
import { DefaultShortcut } from "@/components/ui/Keycap";

const STEPS = [
  {
    title: "Open the download",
    body: "Open MacVoice.dmg and drag MacVoice into your Applications folder.",
  },
  {
    title: "Allow two permissions",
    body: "Microphone, so it can hear you. Accessibility, so it can type into other apps. macOS asks for both the first time.",
  },
  {
    title: "Press the shortcut and talk",
    body: "Click into any text box and press Control, Option and Space. Press it again to stop.",
    shortcut: true,
  },
];

/** The three steps from download to first dictated sentence. */
export function SetupSteps() {
  return (
    <ol className="grid gap-3 sm:grid-cols-3">
      {STEPS.map((s, i) => (
        <li key={s.title} className="rounded-card border border-line bg-surface p-5 shadow-e1">
          <p className="text-eyebrow text-ink-2">Step {i + 1}</p>
          <h3 className="text-h3 mt-2 text-ink">{s.title}</h3>
          <p className="text-body mt-1 text-ink-2">{s.body}</p>
          {s.shortcut ? <DefaultShortcut size="md" className="mt-3" /> : null}
        </li>
      ))}
    </ol>
  );
}
